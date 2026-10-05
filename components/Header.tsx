"use client";

import { navLinks, profile } from "@/lib/data";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-line/80 bg-void/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a
          href="#"
          className="font-mono text-sm tracking-widest text-teal-glow link-glow"
        >
          AM<span className="text-magenta-glow">.</span>dev
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-400 link-glow"
            >
              {link.label}
            </a>
          ))}
          <a
            href={profile.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded border border-teal-dim/50 px-3 py-1.5 text-xs font-mono uppercase tracking-wider text-teal-glow transition-all hover:border-teal-glow hover:shadow-teal-glow"
          >
            Resume
          </a>
        </nav>
        <button
          type="button"
          className="md:hidden font-mono text-xs text-teal-glow"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? "[ close ]" : "[ menu ]"}
        </button>
      </div>
      {open && (
        <nav className="border-t border-line bg-panel px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-slate-300 link-glow"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={profile.resumePath}
                className="text-teal-glow link-glow"
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
