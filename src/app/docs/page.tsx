import type { Metadata } from "next";
import Link from "next/link";
import { Info, ArrowRight } from "lucide-react";
import { CodeBlock } from "@/components/ui/code-block";

export const metadata: Metadata = {
  title: "Documentation",
  description:
    "Learn how to install, configure, and deploy your first AI product with Forge.",
};

const SUPPORTED_STACKS = [
  { name: "Next.js + Vercel + Supabase", status: "Stable" },
  { name: "Next.js + Vercel + Prisma", status: "Stable" },
  { name: "React + Vite + Firebase", status: "Beta" },
  { name: "Astro + Cloudflare Pages", status: "Beta" },
  { name: "SvelteKit + Vercel", status: "Planned" },
  { name: "Nuxt + Netlify", status: "Planned" },
] as const;

export default function DocsPage() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-10 px-4 py-12 sm:px-6 md:py-20 lg:px-10">
      {/* Non-developer banner */}
      <div className="flex flex-col items-start justify-between gap-4 rounded-xl border border-[#1337ec]/30 bg-[#1337ec]/5 p-5 shadow-sm sm:flex-row sm:items-center">
        <div className="flex flex-col gap-1">
          <p className="text-base font-bold">Non-developer?</p>
          <p className="text-sm text-slate-400">
            A hosted no-code version is coming soon — join the waitlist.
          </p>
        </div>
        <Link
          href="/pricing#waitlist"
          className="flex items-center gap-2 whitespace-nowrap rounded-lg border border-[#1337ec]/20 bg-slate-900 px-4 py-2 text-sm font-bold text-[#1337ec] shadow-sm transition-colors hover:bg-slate-800"
        >
          Join Waitlist
          <ArrowRight className="size-4" />
        </Link>
      </div>

      {/* Page header */}
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-black leading-tight tracking-tight">
          Getting Started
        </h1>
        <p className="text-lg text-slate-400">
          A developer-centric guide to installing, configuring, and deploying
          your first AI product with Forge.
        </p>
      </div>

      {/* Prerequisites */}
      <section id="prerequisites" className="flex scroll-mt-24 flex-col gap-4">
        <h2 className="border-b border-slate-800 pb-2 text-2xl font-bold">
          Prerequisites
        </h2>
        <div className="flex flex-col gap-3 rounded-xl border border-orange-900/50 bg-orange-900/10 p-6">
          <p className="flex items-center gap-2 font-medium text-orange-200">
            <Info className="size-5" />
            Before you begin, ensure you have the following installed:
          </p>
          <ul className="ml-2 flex list-inside list-disc flex-col gap-2 text-sm text-orange-300">
            <li>
              <strong className="font-semibold text-orange-100">
                Node.js 22+
              </strong>{" "}
              (required for the latest Claude Code features)
            </li>
            <li>
              <strong className="font-semibold text-orange-100">
                Claude Code
              </strong>{" "}
              CLI utility installed globally
            </li>
            <li>
              An active{" "}
              <strong className="font-semibold text-orange-100">
                Anthropic API key
              </strong>{" "}
              with sufficient credits
            </li>
          </ul>
        </div>
      </section>

      {/* Installation */}
      <section id="installation" className="flex scroll-mt-24 flex-col gap-4">
        <h2 className="border-b border-slate-800 pb-2 text-2xl font-bold">
          Installation
        </h2>
        <p className="text-slate-400">
          Install the Forge plugin via the Claude Code plugin manager.
        </p>
        <CodeBlock code="claude plugin add clawlabz/forge" language="bash" />
      </section>

      {/* Verify */}
      <section id="verify" className="flex scroll-mt-24 flex-col gap-4">
        <h2 className="border-b border-slate-800 pb-2 text-2xl font-bold">
          Verify Installation
        </h2>
        <p className="text-slate-400">
          Check that Forge is installed and ready.
        </p>
        <CodeBlock code="claude\n> /forge:status" language="bash" />
        <p className="text-sm text-slate-500">
          You should see the Forge version and a list of available skills.
        </p>
      </section>

      {/* Quick Start */}
      <section id="quick-start" className="flex scroll-mt-24 flex-col gap-4">
        <h2 className="border-b border-slate-800 pb-2 text-2xl font-bold">
          Quick Start
        </h2>
        <p className="text-slate-400">
          Build your first product in one command.
        </p>
        <CodeBlock
          code={`# Create a new directory for your project\nmkdir my-product && cd my-product\n\n# Launch Claude Code and run the build\nclaude\n> /forge:build "Build an AI-powered markdown editor with live preview"`}
          language="bash"
        />
        <p className="text-sm text-slate-400">
          Forge will guide you through the 8-stage pipeline automatically. The
          entire process typically takes 10-30 minutes depending on project
          complexity.
        </p>
      </section>

      {/* Configuration */}
      <section id="configuration" className="flex scroll-mt-24 flex-col gap-4">
        <h2 className="border-b border-slate-800 pb-2 text-2xl font-bold">
          Configuration
        </h2>
        <p className="text-slate-400">
          Customize the pipeline with a{" "}
          <code className="rounded bg-slate-800 px-1.5 py-0.5 font-mono text-sm">
            forge.config.yaml
          </code>{" "}
          file in your project root.
        </p>
        <CodeBlock
          code={`# forge.config.yaml\nproject_name: "my-product"\nstack: "nextjs-supabase"\n\npipeline:\n  skip: []           # stages to skip (e.g., ["P1", "P6"])\n  parallel: false    # run independent stages in parallel\n\ndeployment:\n  provider: "vercel"\n  domain: "my-product.example.com"\n  env_file: ".env.production"`}
          language="yaml"
        />
      </section>

      {/* Supported Stacks */}
      <section
        id="supported-stacks"
        className="flex scroll-mt-24 flex-col gap-4"
      >
        <h2 className="border-b border-slate-800 pb-2 text-2xl font-bold">
          Supported Stacks
        </h2>
        <div className="overflow-hidden rounded-lg border border-slate-800">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-900/80">
                <th className="px-4 py-3 text-left font-medium text-slate-400">
                  Stack
                </th>
                <th className="px-4 py-3 text-left font-medium text-slate-400">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {SUPPORTED_STACKS.map((stack) => (
                <tr
                  key={stack.name}
                  className="border-b border-slate-800/50 last:border-0"
                >
                  <td className="px-4 py-3 font-mono text-sm text-slate-300">
                    {stack.name}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-bold ${
                        stack.status === "Stable"
                          ? "bg-green-900/30 text-green-400"
                          : stack.status === "Beta"
                            ? "bg-yellow-900/30 text-yellow-400"
                            : "bg-slate-800 text-slate-400"
                      }`}
                    >
                      {stack.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Troubleshooting */}
      <section
        id="troubleshooting"
        className="flex scroll-mt-24 flex-col gap-4"
      >
        <h2 className="border-b border-slate-800 pb-2 text-2xl font-bold">
          Troubleshooting
        </h2>

        <details className="group rounded-lg border border-slate-800 bg-slate-900/50">
          <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-sm font-bold [&::-webkit-details-marker]:hidden">
            Plugin not found after installation
            <span className="ml-4 text-slate-500 transition-transform group-open:rotate-45">
              +
            </span>
          </summary>
          <div className="border-t border-slate-800 px-6 py-4 text-sm text-slate-400">
            Make sure you have Claude Code v1.0+ installed. Run{" "}
            <code className="rounded bg-slate-800 px-1 font-mono">
              claude --version
            </code>{" "}
            to check. If the issue persists, try reinstalling with{" "}
            <code className="rounded bg-slate-800 px-1 font-mono">
              claude plugin remove clawlabz/forge && claude plugin add
              clawlabz/forge
            </code>
            .
          </div>
        </details>

        <details className="group rounded-lg border border-slate-800 bg-slate-900/50">
          <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-sm font-bold [&::-webkit-details-marker]:hidden">
            Build fails at P5 (Code Generation)
            <span className="ml-4 text-slate-500 transition-transform group-open:rotate-45">
              +
            </span>
          </summary>
          <div className="border-t border-slate-800 px-6 py-4 text-sm text-slate-400">
            This usually means your Anthropic API key has insufficient credits.
            Check your balance at{" "}
            <a
              href="https://console.anthropic.com"
              className="text-[#1337ec] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              console.anthropic.com
            </a>
            . Code generation is the most token-intensive stage.
          </div>
        </details>

        <details className="group rounded-lg border border-slate-800 bg-slate-900/50">
          <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-sm font-bold [&::-webkit-details-marker]:hidden">
            Deployment fails at P7
            <span className="ml-4 text-slate-500 transition-transform group-open:rotate-45">
              +
            </span>
          </summary>
          <div className="border-t border-slate-800 px-6 py-4 text-sm text-slate-400">
            Ensure your Vercel token and Supabase credentials are configured in
            your environment. For the free tier, you must set these up manually.
            See the Configuration section above.
          </div>
        </details>
      </section>
    </div>
  );
}
