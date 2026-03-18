export interface ShowcaseProject {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly url: string;
  readonly screenshotUrl: string;
  readonly buildTimeMinutes: number;
  readonly featureCount: number;
  readonly techStack: readonly string[];
  readonly buildLogUrl: string | null;
}

export const SHOWCASE_PROJECTS: readonly ShowcaseProject[] = [
  {
    id: "clawtoolkit",
    name: "ClawToolkit",
    description: "AI Agent Tool Marketplace — discover, publish, and monetize tools that AI agents call via a unified API.",
    url: "https://toolkit.clawlabz.xyz",
    screenshotUrl: "/screenshots/clawtoolkit.png",
    buildTimeMinutes: 180,
    featureCount: 42,
    techStack: ["Next.js", "Supabase", "Stripe", "Tailwind CSS"],
    buildLogUrl: "https://github.com/clawlabz/claw-appstore",
  },
  {
    id: "clawmark",
    name: "ClawMark",
    description: "AI-Powered Markdown Editor with real-time preview, templates, and export to PDF/HTML.",
    url: "https://mark.clawlabz.xyz",
    screenshotUrl: "/screenshots/clawmark.png",
    buildTimeMinutes: 47,
    featureCount: 18,
    techStack: ["Next.js", "Monaco Editor", "Tailwind CSS"],
    buildLogUrl: "https://github.com/clawlabz/clawmark",
  },
  {
    id: "clawhealth",
    name: "ClawHealth",
    description: "AI Health Dashboard — track meals, exercise, sleep, and get personalized health insights.",
    url: "https://health.clawlabz.xyz",
    screenshotUrl: "/screenshots/clawhealth.png",
    buildTimeMinutes: 120,
    featureCount: 31,
    techStack: ["Next.js", "Supabase", "Stripe", "Chart.js"],
    buildLogUrl: "https://github.com/clawlabz/clawhealth",
  },
] as const;

export function formatBuildTime(minutes: number): string {
  if (minutes >= 60) {
    const hours = Math.floor(minutes / 60);
    const remaining = minutes % 60;
    return remaining > 0 ? `${hours}h ${remaining}m` : `${hours} hours`;
  }
  return `${minutes} mins`;
}

export const SHOWCASE_CARD_COLORS = [
  "bg-indigo-900/40",
  "bg-purple-900/40",
  "bg-cyan-900/40",
] as const;
