import type { Metadata } from "next";
import Link from "next/link";
import { Check, PlusCircle } from "lucide-react";
import { PRICING_TIERS, FAQ_ITEMS } from "@/lib/constants";
import { WaitlistForm } from "@/components/forms/waitlist-form";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing. Start free with the open-source plugin.",
};

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-20 lg:px-10">
      {/* Header */}
      <section className="mx-auto mb-16 max-w-3xl text-center">
        <h1 className="mb-6 text-4xl font-black leading-tight tracking-tight md:text-5xl">
          Simple, Transparent Pricing
        </h1>
        <p className="text-lg font-medium text-slate-400">
          Start free with the open-source plugin. Upgrade when you need
          zero-config deployments.
        </p>
      </section>

      {/* Pricing cards */}
      <section className="mb-20 grid grid-cols-1 gap-6 md:grid-cols-3">
        {PRICING_TIERS.map((tier) => {
          const isHighlighted = tier.highlighted;
          return (
            <div
              key={tier.name}
              className={`relative flex flex-col gap-6 overflow-hidden rounded-xl p-8 shadow-sm ${
                isHighlighted
                  ? "border-2 border-[#1337ec] bg-slate-900 shadow-xl shadow-[#1337ec]/10 md:-translate-y-2"
                  : "border border-slate-800 bg-slate-900/50"
              }`}
            >
              {isHighlighted && (
                <div className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-[#1337ec]/20 blur-3xl" />
              )}

              <div className="relative z-10 flex flex-col gap-2">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-bold">{tier.name}</h3>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${
                      isHighlighted
                        ? "bg-[#1337ec] text-white"
                        : "comingSoon" in tier && tier.comingSoon
                          ? "bg-[#1337ec]/10 text-[#1337ec]"
                          : "bg-slate-800 text-slate-400"
                    }`}
                  >
                    {isHighlighted
                      ? "Most Popular"
                      : "comingSoon" in tier && tier.comingSoon
                        ? "Coming Soon"
                        : tier.description}
                  </span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black">{tier.price}</span>
                  <span className="text-sm font-medium text-slate-500">
                    {tier.period}
                  </span>
                </div>
              </div>

              <Link
                href={tier.cta.href}
                className={`relative z-10 flex w-full items-center justify-center rounded-lg py-3 text-sm font-bold transition-colors ${
                  isHighlighted || ("comingSoon" in tier && tier.comingSoon)
                    ? "bg-[#1337ec] text-white shadow-lg shadow-[#1337ec]/20 hover:bg-[#1337ec]/90"
                    : "bg-slate-800 text-white hover:bg-slate-700"
                }`}
              >
                {tier.cta.label}
              </Link>

              <ul className="relative z-10 mt-4 flex flex-col gap-4">
                {tier.features.map((feature, i) => {
                  const isInherited = feature.startsWith("Everything in");
                  return (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm"
                    >
                      {isInherited ? (
                        <PlusCircle className="mt-0.5 size-4 shrink-0 text-[#1337ec]" />
                      ) : (
                        <Check className="mt-0.5 size-4 shrink-0 text-[#1337ec]" />
                      )}
                      <span
                        className={
                          isInherited ? "font-medium" : "text-slate-300"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </section>

      {/* FAQ */}
      <section className="mx-auto mb-20 max-w-3xl">
        <h2 className="mb-8 text-center text-3xl font-bold">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col gap-4">
          {FAQ_ITEMS.map((item) => (
            <details
              key={item.question}
              className="group rounded-lg border border-slate-800 bg-slate-900/50"
            >
              <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-sm font-bold transition-colors hover:text-[#1337ec] [&::-webkit-details-marker]:hidden">
                {item.question}
                <span className="ml-4 text-slate-500 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="border-t border-slate-800 px-6 py-4 text-sm leading-relaxed text-slate-400">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Waitlist */}
      <section
        id="waitlist"
        className="mx-auto mb-8 max-w-xl scroll-mt-24 rounded-2xl border border-slate-800 bg-slate-900/50 p-8 text-center md:p-12"
      >
        <h2 className="mb-2 text-2xl font-bold">Join the Waitlist</h2>
        <p className="mb-6 text-sm text-slate-400">
          Be the first to know when Pro and Unlimited launch.
        </p>
        <WaitlistForm defaultPlanInterest="pro" />
      </section>
    </div>
  );
}
