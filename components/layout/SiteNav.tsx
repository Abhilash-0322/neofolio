"use client";

import Link from "next/link";
import { profile } from "@/data/content";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import clsx from "clsx";
import { useEffect, useState } from "react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function SiteNav() {
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
        "fixed left-0 right-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div
        className={clsx(
          "mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 transition-all duration-500",
          scrolled && "glass-panel rounded-full px-5 py-2 shadow-md shadow-coffee-roast/10 dark:shadow-black/25"
        )}
      >
        <Link
          href="#top"
          className="font-display text-lg font-semibold tracking-wide text-coffee-ink"
        >
          {profile.name.split(" ")[0]}
          <span className="text-gradient-coffee">.</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-coffee-muted md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="transition-colors hover:text-coffee-accent"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href={profile.resumePath}
            download
            className="rounded-full border border-coffee-accent/35 bg-coffee-accent/10 px-4 py-1.5 text-xs font-medium text-coffee-accent transition hover:bg-coffee-accent/20 dark:border-coffee-crema/35 dark:text-coffee-crema"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}
