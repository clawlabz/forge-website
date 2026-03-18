"use client";

import { useState } from "react";
import Link from "next/link";
import { Star, Menu, X } from "lucide-react";
import { NAV_LINKS, GITHUB_URL } from "@/lib/constants";
import { ForgeLogo } from "@/components/ui/forge-logo";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-[#101322]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
        <Link href="/" className="flex items-center gap-3">
          <ForgeLogo className="size-6 text-[#1337ec]" />
          <span className="text-xl font-bold tracking-tight">Forge</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-[#1337ec]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg bg-slate-800 px-4 py-2 text-sm font-bold transition-colors hover:bg-slate-700"
          >
            <Star className="size-4" />
            <span>Star on GitHub</span>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex items-center justify-center md:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="flex flex-col gap-4 border-t border-slate-800 bg-[#101322] px-6 py-6 md:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-base font-medium text-slate-300 transition-colors hover:text-[#1337ec]"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg bg-slate-800 px-4 py-2 text-sm font-bold transition-colors hover:bg-slate-700"
          >
            <Star className="size-4" />
            <span>Star on GitHub</span>
          </a>
        </nav>
      )}
    </header>
  );
}
