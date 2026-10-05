"use client";

import { navLinks, profile } from "@/data/content";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-paper/90 backdrop-blur-md">
      <div className="journal-content mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-3 py-3">
        <a href="#top" className="font-hand text-xl text-ink hover:text-accent">
          {profile.name.split(" ")[0]}&apos;s journal
        </a>
        <nav className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-muted no-underline hover:text-ink hover:underline">
              {link.label}
            </a>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
