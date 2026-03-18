import { Github, Twitter, Mail } from "lucide-react";
import { GITHUB_URL, TWITTER_URL, EMAIL } from "@/lib/constants";
import { ForgeLogo } from "@/components/ui/forge-logo";

const SOCIAL_LINKS = [
  { href: GITHUB_URL, icon: Github, label: "GitHub" },
  { href: TWITTER_URL, icon: Twitter, label: "X / Twitter" },
  { href: `mailto:${EMAIL}`, icon: Mail, label: "Email" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-900/50 px-4 py-10 sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 text-center">
        <div className="flex items-center gap-3">
          <ForgeLogo className="size-5 text-[#1337ec]" />
          <span className="font-bold">Forge by ClawLabz</span>
        </div>

        <div className="flex items-center gap-6">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-slate-400 transition-colors hover:text-[#1337ec]"
            >
              <link.icon className="size-5" />
            </a>
          ))}
        </div>

        <p className="text-sm text-slate-500">
          &copy; {new Date().getFullYear()} ClawLabz. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
