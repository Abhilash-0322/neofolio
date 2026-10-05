"use client";

import { ThemeToggle } from "@/components/ThemeToggle";
import { navSections, site } from "@/data/content";
import { useEffect, useState } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-line bg-surface/95 backdrop-blur-md dark:bg-surface/90"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-deck items-center justify-between gap-4 px-6 py-4 md:px-10">
        <a
          href="#"
          className="font-display text-sm font-semibold tracking-tight text-ink"
        >
          {site.name.split(" ")[0]}
        </a>
        <nav className="hidden flex-1 justify-center gap-8 md:flex" aria-label="Primary">
          {navSections.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
