import type { Metadata } from "next";
import { Github, Mail, Globe, Star, Users, GitCommit } from "lucide-react";
import { GITHUB_URL, EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind Forge — from a solo founder's script to an AI product factory.",
};

const STATS = [
  { icon: Star, value: "847", label: "Stars", color: "text-[#1337ec]" },
  { icon: Users, value: "12", label: "Contributors", color: "text-purple-500" },
  { icon: GitCommit, value: "2,341", label: "Commits", color: "text-blue-400" },
] as const;

const PRODUCTS = [
  { name: "ClawArena", href: "https://arena.clawlabz.xyz", description: "AI competitive games" },
  { name: "ClawMarket", href: "https://market.clawlabz.xyz", description: "AI Agent marketplace" },
  { name: "ClawNetwork", href: "https://chain.clawlabz.xyz", description: "AI Agent blockchain" },
  { name: "ClawSoul", href: "https://soul.clawlabz.xyz", description: "AI character platform" },
] as const;

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 md:py-20 lg:px-10">
      {/* Hero */}
      <section className="mb-16 flex flex-col items-center gap-6 text-center">
        <h1 className="text-5xl font-black leading-tight tracking-tight sm:text-6xl">
          About{" "}
          <span className="bg-gradient-to-r from-[#1337ec] to-purple-500 bg-clip-text text-transparent">
            Forge
          </span>
        </h1>
        <p className="max-w-2xl text-lg text-slate-400 sm:text-xl">
          From one developer&apos;s frustration to an AI product factory.
        </p>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-8 py-3 font-bold text-white backdrop-blur-md transition-all hover:bg-white/20"
        >
          <Github className="size-5" />
          View on GitHub
        </a>
      </section>

      {/* Story */}
      <section className="mx-auto mb-16 max-w-3xl py-8">
        <div className="mb-8 flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#1337ec]/50" />
          <h2 className="text-3xl font-bold tracking-tight">
            The Story of Forge
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#1337ec]/50" />
        </div>
        <p className="mb-6 text-center text-lg leading-relaxed text-slate-300">
          Forge didn&apos;t start as a grand vision. It started as a script. A
          solo-founder&apos;s attempt to automate the repetitive boilerplate
          required to spin up new AI projects.
        </p>
        <p className="text-center text-lg leading-relaxed text-slate-300">
          What began as simple templates evolved into the comprehensive P0-P7
          pipeline — a structured, scalable methodology designed to streamline AI
          product creation from ideation to deployment. Today, it powers the
          OpenClaw ecosystem and enables rapid prototyping for developers
          worldwide.
        </p>
      </section>

      {/* Stats */}
      <section className="mb-16 grid grid-cols-2 gap-4 md:grid-cols-4">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center justify-center rounded-xl border border-slate-700 bg-slate-800/50 p-6 shadow-sm"
          >
            <stat.icon className={`mb-2 size-7 ${stat.color}`} />
            <span className="font-mono text-3xl font-bold">{stat.value}</span>
            <span className="mt-1 font-mono text-xs uppercase tracking-wider text-slate-400">
              {stat.label}
            </span>
          </div>
        ))}
        <div className="flex flex-col items-center justify-center rounded-xl border border-[#1337ec]/30 bg-[#1337ec]/10 p-6 text-center shadow-sm">
          <Globe className="mb-2 size-7 text-[#1337ec]" />
          <span className="text-sm font-medium text-slate-200">
            Open source since
          </span>
          <span className="mt-1 font-mono font-bold text-[#1337ec]">
            Mar 2026
          </span>
        </div>
      </section>

      {/* Vision quote */}
      <section className="mb-16 py-12 text-center">
        <blockquote className="mx-auto max-w-4xl bg-gradient-to-r from-[#1337ec] to-purple-500 bg-clip-text text-4xl font-bold italic leading-tight text-transparent md:text-5xl">
          &ldquo;Every person with an idea deserves the power to build
          it.&rdquo;
        </blockquote>
      </section>

      {/* Creator */}
      <section className="mb-16 flex flex-col items-center gap-8 py-12">
        <h2 className="mb-4 text-3xl font-bold tracking-tight">The Creator</h2>
        <div className="flex w-full max-w-4xl flex-col items-center gap-8 rounded-2xl border border-slate-800 bg-slate-900/50 p-8 shadow-xl md:flex-row">
          <div className="flex size-40 shrink-0 items-center justify-center rounded-full border-4 border-[#1337ec]/20 bg-slate-800 text-4xl font-black text-[#1337ec]">
            CL
          </div>
          <div className="flex flex-col gap-4 text-center md:text-left">
            <div>
              <h3 className="text-2xl font-bold">ClawLabz</h3>
              <p className="mt-1 font-mono text-sm text-[#1337ec]">
                Solo Founder &amp; Developer
              </p>
            </div>
            <p className="leading-relaxed text-slate-300">
              Architect of the OpenClaw ecosystem. Passionate about
              democratizing AI development, building scalable tools, and
              fostering open-source communities. Believes that the future of
              software lies in composable, intelligent pipelines.
            </p>
            <div className="flex items-center justify-center gap-4 md:justify-start">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-10 items-center justify-center rounded-full bg-slate-800 text-slate-400 transition-colors hover:text-[#1337ec]"
                aria-label="GitHub"
              >
                <Github className="size-5" />
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex size-10 items-center justify-center rounded-full bg-slate-800 text-slate-400 transition-colors hover:text-[#1337ec]"
                aria-label="Email"
              >
                <Mail className="size-5" />
              </a>
              <a
                href="https://clawlabz.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-10 items-center justify-center rounded-full bg-slate-800 text-slate-400 transition-colors hover:text-[#1337ec]"
                aria-label="Website"
              >
                <Globe className="size-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* More from ClawLabz */}
      <section className="mb-8">
        <h2 className="mb-6 text-sm font-bold uppercase tracking-wider text-slate-400">
          More from ClawLabz
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {PRODUCTS.map((product) => (
            <a
              key={product.name}
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-1 rounded-lg border border-transparent p-4 transition-colors hover:border-slate-700 hover:bg-slate-800/50"
            >
              <span className="font-bold transition-colors group-hover:text-[#1337ec]">
                {product.name}
              </span>
              <span className="text-xs text-slate-400">
                {product.description}
              </span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
