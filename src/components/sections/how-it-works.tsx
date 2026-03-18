import { Terminal, Cpu, Globe } from "lucide-react";

const STEPS = [
  {
    icon: Terminal,
    title: "1. Describe your idea",
    description:
      'Run /forge:build and type a single sentence like "Build an AI health dashboard with meal tracking."',
  },
  {
    icon: Cpu,
    title: "2. Forge builds it",
    description:
      "The 8-stage pipeline researches, designs, codes, tests, and deploys automatically.",
  },
  {
    icon: Globe,
    title: "3. Ship to production",
    description:
      "Get a fully deployed product with your own code, database, and domain. You own everything.",
  },
] as const;

export function HowItWorks() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="mb-4 text-center text-3xl font-bold tracking-tight lg:text-4xl">
          How It Works
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-slate-400">
          Three steps from idea to live product.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {STEPS.map((step) => (
            <div
              key={step.title}
              className="flex flex-col items-center gap-4 rounded-lg border border-slate-800 bg-slate-900/50 p-8 text-center"
            >
              <div className="flex size-14 items-center justify-center rounded-lg bg-[#1337ec]/10 text-[#1337ec]">
                <step.icon className="size-7" />
              </div>
              <h3 className="text-lg font-bold">{step.title}</h3>
              <p className="text-sm leading-relaxed text-slate-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
