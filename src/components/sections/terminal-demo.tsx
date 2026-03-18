const TERMINAL_LINES = [
  { text: "$ claude", color: "text-slate-300" },
  { text: "> /forge:build", color: "text-[#1337ec]" },
  { text: "", color: "" },
  { text: "Forge v2.4.1 — AI Product Factory", color: "text-slate-500" },
  { text: '  Idea: "Build an AI health dashboard with meal tracking"', color: "text-green-400" },
  { text: "", color: "" },
  { text: "  [P0] Idea Input ............................ done  (2s)", color: "text-slate-300" },
  { text: "  [P1] Market Research ....................... done  (45s)", color: "text-slate-300" },
  { text: "  [P2] PRD Generation ........................ done  (38s)", color: "text-slate-300" },
  { text: "  [P3] Architecture & Schema ................. done  (52s)", color: "text-slate-300" },
  { text: "  [P4] UI Design (Stitch MCP) ................ done  (1m 23s)", color: "text-slate-300" },
  { text: "  [P5] Code Generation ....................... done  (4m 12s)", color: "text-slate-300" },
  { text: "  [P6] Testing ............................... done  (2m 08s)", color: "text-slate-300" },
  { text: "  [P7] Deployment ............................ done  (1m 41s)", color: "text-slate-300" },
  { text: "", color: "" },
  { text: "  Build complete in 10m 41s", color: "text-green-400" },
  { text: "  Live at: https://health.clawlabz.xyz", color: "text-[#1337ec]" },
] as const;

export function TerminalDemo() {
  return (
    <section className="py-12 lg:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-2xl">
          {/* Title bar */}
          <div className="flex items-center border-b border-slate-800 bg-slate-950 px-4 py-3">
            <div className="flex gap-2">
              <div className="size-3 rounded-full bg-red-500" />
              <div className="size-3 rounded-full bg-yellow-500" />
              <div className="size-3 rounded-full bg-green-500" />
            </div>
            <span className="ml-4 font-mono text-xs text-slate-400">
              bash — forge build
            </span>
          </div>

          {/* Terminal content */}
          <div className="p-6 font-mono text-sm leading-relaxed">
            {TERMINAL_LINES.map((line, i) => (
              <div key={i} className={`${line.color} min-h-[1.5em]`}>
                {line.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
