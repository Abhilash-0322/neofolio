"use client";

import { navLinks, profile } from "@/data/profile";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-memphis-ink bg-memphis-yellow/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="#top"
          className="font-display text-lg font-extrabold tracking-tight"
        >
          {profile.name.split(" ")[0]}
          <span className="text-memphis-pink">*</span>
        </Link>
        <nav className="hidden items-center gap-5 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold underline-offset-4 hover:underline"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-memphis-ink bg-white p-2 shadow-[3px_3px_0_0_#0D0D0D] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-memphis-ink bg-memphis-cyan p-2 shadow-[3px_3px_0_0_#0D0D0D] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
