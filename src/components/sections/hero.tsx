import Link from "next/link";

export function Hero() {
  return (
    <section className="flex flex-col items-center py-20 text-center lg:py-32">
      <div className="max-w-4xl space-y-8">
        <h1 className="text-5xl font-black leading-tight tracking-tight lg:text-7xl">
          Build a Product in{" "}
          <span className="bg-gradient-to-r from-[#1337ec] to-blue-400 bg-clip-text text-transparent">
            One Sentence
          </span>
        </h1>

        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-400 lg:text-xl">
          Forge is an open-source Claude Code plugin that automates an 8-stage
          pipeline from idea to deployed product. Stop typing boilerplate and
          start shipping.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Link
            href="/docs"
            className="flex items-center justify-center rounded-lg bg-[#1337ec] px-8 py-3 text-base font-bold text-white shadow-lg shadow-[#1337ec]/30 transition-all hover:scale-105 hover:bg-[#1337ec]/90"
          >
            Install Free
          </Link>
          <Link
            href="/pricing"
            className="flex items-center justify-center rounded-lg bg-slate-800 px-8 py-3 text-base font-bold text-white transition-colors hover:bg-slate-700"
          >
            View Pricing
          </Link>
        </div>

        <p className="text-sm text-slate-500">
          Non-developer? A hosted no-code version is{" "}
          <Link href="/pricing#waitlist" className="text-[#1337ec] hover:underline">
            coming soon
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
