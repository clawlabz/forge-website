import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 p-10 text-center shadow-xl md:p-16">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#1337ec]/10 to-transparent" />

          <h2 className="relative z-10 mb-4 text-3xl font-bold md:text-4xl">
            Ready to build?
          </h2>
          <p className="relative z-10 mx-auto mb-8 max-w-lg text-slate-400">
            Install the open-source plugin and ship your first product today.
          </p>

          <div className="relative z-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/docs"
              className="rounded-lg bg-[#1337ec] px-8 py-3 text-base font-bold text-white shadow-lg shadow-[#1337ec]/30 transition-all hover:scale-105 hover:bg-[#1337ec]/90"
            >
              Install Free
            </Link>
            <Link
              href="/pricing"
              className="rounded-lg bg-slate-800 px-8 py-3 text-base font-bold text-white transition-colors hover:bg-slate-700"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
