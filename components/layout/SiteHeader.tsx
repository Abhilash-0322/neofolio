"use client";

import { navLinks, profile } from "@/data/content";
import clsx from "clsx";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "sticky top-4 z-50 mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full border px-4 py-3 transition-all md:px-6",
        scrolled
          ? "border-white/80 bg-white/85 shadow-soft backdrop-blur-md"
          : "border-transparent bg-white/40 backdrop-blur-sm"
      )}
    >
      <a
        href="#top"
        className="font-display text-lg font-semibold tracking-tight text-ink"
      >
        {profile.name.split(" ")[0]}
        <span className="text-lavender">.</span>
      </a>
      <nav className="hidden items-center gap-1 md:flex">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="rounded-full px-3 py-1.5 text-sm font-medium text-muted transition hover:bg-blush/30 hover:text-ink"
          >
            {link.label}
          </a>
        ))}
      </nav>
      <a
        href={profile.resume}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-cream shadow-soft transition hover:bg-ink/90"
      >
        Resume
      </a>
    </header>
  );
}
