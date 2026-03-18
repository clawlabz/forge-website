"use client";

import { useState } from "react";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";

interface WaitlistFormProps {
  readonly defaultPlanInterest?: string;
  readonly className?: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

const PLAN_OPTIONS = [
  { value: "pro", label: "Pro ($29/project)" },
  { value: "unlimited", label: "Unlimited ($99/mo)" },
  { value: "hosted", label: "Hosted (no-code)" },
] as const;

export function WaitlistForm({
  defaultPlanInterest = "pro",
  className = "",
}: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [planInterest, setPlanInterest] = useState(defaultPlanInterest);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          plan_interest: planInterest,
          source_page: window.location.pathname,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage(data.message ?? "You're on the list!");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div
        className={`flex flex-col items-center gap-3 rounded-lg border border-green-800 bg-green-900/20 p-6 ${className}`}
      >
        <CheckCircle className="size-8 text-green-400" />
        <p className="text-sm font-medium text-green-300">{message}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col gap-4 ${className}`}
    >
      {/* Email */}
      <label htmlFor="waitlist-email" className="sr-only">
        Email address
      </label>
      <input
        id="waitlist-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        aria-label="Email address"
        className="h-12 rounded-lg border border-slate-700 bg-slate-900 px-4 font-mono text-sm text-white placeholder-slate-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#1337ec]"
      />

      {/* Plan interest */}
      <div className="flex flex-wrap justify-center gap-3">
        {PLAN_OPTIONS.map((option) => (
          <label
            key={option.value}
            className={`flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2 text-xs font-medium transition-colors ${
              planInterest === option.value
                ? "border-[#1337ec] bg-[#1337ec]/10 text-[#1337ec]"
                : "border-slate-700 text-slate-400 hover:border-slate-600"
            }`}
          >
            <input
              type="radio"
              name="plan_interest"
              value={option.value}
              checked={planInterest === option.value}
              onChange={(e) => setPlanInterest(e.target.value)}
              className="sr-only"
            />
            {option.label}
          </label>
        ))}
      </div>

      {/* Error */}
      {status === "error" && (
        <div className="flex items-center gap-2 text-sm text-red-400">
          <AlertCircle className="size-4 shrink-0" />
          {message}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="flex h-12 items-center justify-center rounded-lg bg-[#1337ec] font-bold text-white shadow-lg shadow-[#1337ec]/20 transition-colors hover:bg-[#1337ec]/90 disabled:opacity-60"
      >
        {status === "loading" ? (
          <Loader2 className="size-5 animate-spin" />
        ) : (
          "Join Waitlist"
        )}
      </button>
    </form>
  );
}
