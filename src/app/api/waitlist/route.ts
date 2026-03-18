import { NextRequest, NextResponse } from "next/server";
import { checkRateLimit } from "@/lib/rate-limit";
import { waitlistSchema } from "@/lib/validations";
import { getSupabase } from "@/lib/supabase";

export async function POST(request: NextRequest) {
  try {
    // Extract IP
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded?.split(",")[0]?.trim() ?? "unknown";

    // Rate limit check
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // Parse and validate body
    const body = await request.json().catch(() => null);
    if (!body) {
      return NextResponse.json(
        { error: "Invalid request body." },
        { status: 400 }
      );
    }

    const parsed = waitlistSchema.safeParse(body);
    if (!parsed.success) {
      const issues = parsed.error.issues ?? [];
      const firstError = issues[0]?.message ?? "Invalid input";
      return NextResponse.json({ error: firstError }, { status: 400 });
    }

    const { email, plan_interest, source_page } = parsed.data;

    // Check Supabase availability
    const supabase = getSupabase();
    if (!supabase) {
      return NextResponse.json(
        { error: "Waitlist is temporarily unavailable. Please try again later." },
        { status: 503 }
      );
    }

    // Upsert to forge_waitlist (ON CONFLICT DO NOTHING)
    const { error: dbError } = await supabase.from("forge_waitlist").upsert(
      {
        email,
        plan_interest: plan_interest ?? null,
        source_page: source_page ?? "/",
        ip_address: ip,
      },
      { onConflict: "email", ignoreDuplicates: true }
    );

    if (dbError) {
      console.error("Waitlist insert error:", dbError);
      return NextResponse.json(
        { error: "Something went wrong. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "You're on the list! We'll notify you when we launch." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Waitlist API error:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
