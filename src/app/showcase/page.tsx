import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, Terminal } from "lucide-react";
import { SHOWCASE_PROJECTS, formatBuildTime, SHOWCASE_CARD_COLORS } from "@/lib/showcase-data";

export const metadata: Metadata = {
  title: "Showcase",
  description:
    "Real products built with Forge — from a single sentence to deployed product.",
};

export default function ShowcasePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-20 lg:px-10">
      {/* Header */}
      <section className="mb-16 flex flex-col items-center gap-6 text-center">
        <h1 className="text-5xl font-black leading-tight tracking-tight md:text-6xl lg:text-7xl">
          Built with Forge
        </h1>
        <p className="max-w-2xl text-lg text-slate-400 md:text-xl">
          Real products, built from a single sentence. See what Forge can
          create.
        </p>
      </section>

      {/* Cards grid */}
      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
        {SHOWCASE_PROJECTS.map((project, index) => (
          <article
            key={project.id}
            className="flex flex-col overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50 shadow-sm transition-shadow hover:shadow-lg"
          >
            {/* Screenshot placeholder */}
            <div
              className={`relative aspect-[16/10] w-full ${SHOWCASE_CARD_COLORS[index % SHOWCASE_CARD_COLORS.length]} flex items-center justify-center`}
            >
              <span className="text-2xl font-bold text-white/20">
                {project.name}
              </span>
              <div className="absolute bottom-4 left-4 flex gap-2">
                <span className="rounded bg-black/60 px-2.5 py-1 font-mono text-xs text-white backdrop-blur-sm">
                  Built in {formatBuildTime(project.buildTimeMinutes)}
                </span>
                <span className="rounded bg-[#1337ec]/80 px-2.5 py-1 font-mono text-xs text-white backdrop-blur-sm">
                  {project.featureCount} features
                </span>
              </div>
            </div>

            <div className="flex grow flex-col gap-4 p-6">
              <div>
                <h3 className="mb-1 text-xl font-bold">{project.name}</h3>
                <p className="mb-2 text-sm text-slate-400">
                  {project.description}
                </p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block truncate font-mono text-sm text-[#1337ec] hover:underline"
                >
                  {project.url.replace("https://", "")}
                </a>
              </div>

              <div className="mt-auto flex flex-wrap gap-2 border-t border-slate-800 pt-4">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-slate-800 px-2 py-1 text-xs font-medium text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#1337ec] px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#1337ec]/90"
                >
                  <ExternalLink className="size-4" />
                  View Live
                </a>
                {project.buildLogUrl && (
                  <a
                    href={project.buildLogUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-slate-800 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-slate-700"
                  >
                    <Terminal className="size-4" />
                    Build Log
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Bottom CTA */}
      <section className="relative mt-16 mb-8 flex flex-col items-center gap-8 overflow-hidden rounded-2xl border border-slate-700 bg-slate-800/50 p-8 text-center shadow-xl md:p-16">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#1337ec]/10 to-transparent" />
        <h2 className="relative z-10 text-3xl font-bold md:text-4xl">
          Your product could be next
        </h2>
        <div className="relative z-10 flex gap-4">
          <Link
            href="/docs"
            className="rounded-lg bg-[#1337ec] px-8 py-3 font-bold text-white transition-colors hover:bg-[#1337ec]/90"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
