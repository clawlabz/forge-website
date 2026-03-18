import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import { SHOWCASE_PROJECTS } from "@/lib/showcase-data";

function formatBuildTime(minutes: number): string {
  if (minutes >= 60) {
    const hours = Math.floor(minutes / 60);
    const remaining = minutes % 60;
    return remaining > 0 ? `${hours}h ${remaining}m` : `${hours} hours`;
  }
  return `${minutes} mins`;
}

const CARD_COLORS = ["bg-indigo-900/40", "bg-purple-900/40", "bg-cyan-900/40"] as const;

export function ShowcasePreview() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="mb-4 text-center text-3xl font-bold tracking-tight lg:text-4xl">
          Built with Forge
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-slate-400">
          Real products, built from a single sentence.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {SHOWCASE_PROJECTS.map((project, index) => (
            <article
              key={project.id}
              className="flex flex-col overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50 shadow-sm transition-shadow hover:shadow-lg"
            >
              {/* Screenshot placeholder */}
              <div
                className={`relative aspect-[16/10] w-full ${CARD_COLORS[index % CARD_COLORS.length]} flex items-center justify-center`}
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

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-slate-800 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-slate-700"
                >
                  <ExternalLink className="size-4" />
                  View Live
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/showcase"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#1337ec] transition-colors hover:text-blue-400"
          >
            See all projects
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
