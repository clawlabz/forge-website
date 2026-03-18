import { Check, X as XIcon } from "lucide-react";

const FEATURES = [
  "Full Pipeline (Idea to Deploy)",
  "Market Research",
  "PRD Generation",
  "UI Design",
  "Testing",
  "Auto-Deploy",
  "Open Source",
  "Full Code Ownership",
] as const;

interface CompetitorData {
  readonly name: string;
  readonly features: readonly boolean[];
}

const COMPETITORS: readonly CompetitorData[] = [
  { name: "Forge", features: [true, true, true, true, true, true, true, true] },
  { name: "Bolt.new", features: [false, false, false, true, false, true, false, true] },
  { name: "Lovable", features: [false, false, false, true, false, true, false, false] },
  { name: "Cursor", features: [false, false, false, false, false, false, false, true] },
] as const;

function FeatureCell({ supported }: { readonly supported: boolean }) {
  return supported ? (
    <Check className="mx-auto size-5 text-green-400" />
  ) : (
    <XIcon className="mx-auto size-5 text-slate-600" />
  );
}

export function CompetitorTable() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="mb-4 text-center text-3xl font-bold tracking-tight lg:text-4xl">
          How Forge Compares
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-slate-400">
          The only tool that covers the entire product lifecycle.
        </p>

        <div className="overflow-x-auto rounded-xl border border-slate-800">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-900/80">
                <th className="px-4 py-4 text-left font-medium text-slate-400">
                  Feature
                </th>
                {COMPETITORS.map((c) => (
                  <th
                    key={c.name}
                    className={`px-4 py-4 text-center font-bold ${
                      c.name === "Forge" ? "text-[#1337ec]" : "text-slate-300"
                    }`}
                  >
                    {c.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {FEATURES.map((feature, rowIndex) => (
                <tr
                  key={feature}
                  className="border-b border-slate-800/50 last:border-0"
                >
                  <td className="px-4 py-3 text-slate-300">{feature}</td>
                  {COMPETITORS.map((c) => (
                    <td key={c.name} className="px-4 py-3 text-center">
                      <FeatureCell supported={c.features[rowIndex]} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
