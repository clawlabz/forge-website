import {
  Lightbulb,
  Search,
  FileText,
  Blocks,
  Palette,
  Code,
  FlaskConical,
  Rocket,
} from "lucide-react";
import { PIPELINE_STAGES } from "@/lib/constants";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Lightbulb,
  Search,
  FileText,
  Blocks,
  Palette,
  Code,
  FlaskConical,
  Rocket,
};

export function Pipeline() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="mb-4 text-center text-3xl font-bold tracking-tight lg:text-4xl">
          8-Stage Pipeline
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-slate-400">
          From idea to production in a single command. Each stage runs
          automatically.
        </p>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
          {PIPELINE_STAGES.map((stage, index) => {
            const Icon = ICON_MAP[stage.icon];
            return (
              <div
                key={stage.id}
                className="group relative flex flex-col items-center gap-3 rounded-lg border border-slate-800 bg-slate-900/50 p-4 text-center transition-all hover:border-[#1337ec]/50 hover:bg-slate-900"
                style={{
                  animationDelay: `${index * 200}ms`,
                }}
              >
                <div className="flex size-10 items-center justify-center rounded-lg bg-[#1337ec]/10 text-[#1337ec] transition-colors group-hover:bg-[#1337ec]/20">
                  {Icon && <Icon className="size-5" />}
                </div>
                <span className="text-xs font-bold text-[#1337ec]">
                  {stage.id}
                </span>
                <h3 className="text-sm font-bold leading-tight">
                  {stage.name}
                </h3>
                <p className="text-xs leading-snug text-slate-400">
                  {stage.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
