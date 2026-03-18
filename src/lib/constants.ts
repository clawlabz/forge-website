export const SITE_NAME = "Forge";
export const SITE_DESCRIPTION =
  "AI-powered product factory. Describe your idea in one sentence, get a fully deployed product.";
export const SITE_URL = "https://forge.clawlabz.xyz";
export const GITHUB_URL = "https://github.com/clawlabz/forge";
export const TWITTER_URL = "https://x.com/clawlabz";
export const EMAIL = "hello@clawlabz.xyz";

export const NAV_LINKS = [
  { label: "Showcase", href: "/showcase" },
  { label: "Pricing", href: "/pricing" },
  { label: "Docs", href: "/docs" },
  { label: "About", href: "/about" },
] as const;

export const PIPELINE_STAGES = [
  { id: "P0", name: "Idea Input", description: "Describe your product in one sentence", icon: "Lightbulb" },
  { id: "P1", name: "Market Research", description: "Competitor analysis & validation", icon: "Search" },
  { id: "P2", name: "PRD", description: "Product requirements document", icon: "FileText" },
  { id: "P3", name: "Architecture", description: "Technical design & database schema", icon: "Blocks" },
  { id: "P4", name: "UI Design", description: "AI-generated interface design", icon: "Palette" },
  { id: "P5", name: "Code Generation", description: "Full-stack implementation", icon: "Code" },
  { id: "P6", name: "Testing", description: "Unit, integration & E2E tests", icon: "FlaskConical" },
  { id: "P7", name: "Deployment", description: "Auto-deploy to production", icon: "Rocket" },
] as const;

export const PRICING_TIERS = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Open Source",
    features: [
      "Full P0–P7 pipeline",
      "All 8 stages automated",
      "Community support",
      "Bring your own API key",
      "Self-managed infrastructure",
      "Full code ownership",
    ],
    cta: { label: "Install from GitHub", href: "/docs" },
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "per project",
    description: "One-time payment",
    features: [
      "Everything in Free",
      "Zero-config deployment",
      "Auto Vercel + Supabase + Cloudflare",
      "Build templates library",
      "Priority bug fixes",
      "Email support",
    ],
    cta: { label: "Join Waitlist", href: "#waitlist" },
    highlighted: false,
    comingSoon: true,
  },
  {
    name: "Unlimited",
    price: "$99",
    period: "/month",
    description: "Most Popular",
    features: [
      "Everything in Pro",
      "Unlimited projects",
      "Priority support",
      "Early access to new features",
      "Custom integrations",
      "Dedicated Slack channel",
    ],
    cta: { label: "Join Waitlist", href: "#waitlist" },
    highlighted: true,
    comingSoon: true,
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "What counts as a \"project\"?",
    answer:
      "A project is one complete Forge pipeline run — from idea input to deployed product. Each time you run /forge:build with a new idea, that's one project.",
  },
  {
    question: "Is Pro a one-time fee or subscription?",
    answer:
      "Pro is a one-time payment of $29 per project. You pay once, and the generated product is yours forever. No recurring charges.",
  },
  {
    question: "What's the difference between open-source and paid?",
    answer:
      "The open-source version gives you the full pipeline but you manage your own infrastructure (Vercel, Supabase, Cloudflare accounts). Paid tiers auto-configure everything for you — zero setup required.",
  },
  {
    question: "Can I cancel Unlimited anytime?",
    answer:
      "Yes, Unlimited is a monthly subscription with no lock-in. Cancel anytime and keep all products you've already built.",
  },
  {
    question: "When will paid plans be available?",
    answer:
      "We're building the hosted infrastructure now. Join the waitlist to be notified when Pro and Unlimited launch. The open-source version is available today.",
  },
] as const;
