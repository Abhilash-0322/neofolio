"use client";

import { navLinks, profile } from "@/lib/data";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-lab-border bg-lab-bg/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a
          href="#"
          className="font-mono text-sm tracking-widest text-lab-accent link-lab"
        >
          AM<span className="text-lab-synapse">·</span>lab
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-lab-sub link-lab"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
          <a
            href={profile.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-lab-border px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-lab-accent transition-all hover:border-lab-accent hover:shadow-synapse"
          >
            Resume
          </a>
        </nav>
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="font-mono text-xs text-lab-accent"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            {open ? "×" : "≡"}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-lab-border bg-lab-surface px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-lab-ink link-lab"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={profile.resumePath}
                className="link-lab"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume PDF
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
