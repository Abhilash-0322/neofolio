"use client";

import { ThemeToggle } from "@/components/ui/ThemeToggle";

const links = [
  { href: "#home", label: "Departures" },
  { href: "#experience", label: "Routes" },
  { href: "#skills", label: "Rolling stock" },
  { href: "#projects", label: "Connections" },
  { href: "#contact", label: "Ticket desk" }
] as const;

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-rail/40 bg-panel/90 backdrop-blur-md">
      <div className="container-shell flex flex-wrap items-center justify-between gap-3 py-3">
        <a href="#home" className="kicker text-accent">
          Continental Line · 5058
        </a>
        <nav aria-label="Primary" className="flex flex-wrap items-center gap-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[0.7rem] uppercase tracking-wider text-muted hover:text-accent"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </nav>
      </div>
      <div className="station-rule" aria-hidden />
    </header>
  );
}
