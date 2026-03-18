import { createClient, SupabaseClient } from "@supabase/supabase-js";

let _supabase: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient | null {
  if (_supabase) return _supabase;

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseServiceKey) {
    console.warn(
      "Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY — database features disabled"
    );
    return null;
  }

  _supabase = createClient(supabaseUrl, supabaseServiceKey);
  return _supabase;
}
