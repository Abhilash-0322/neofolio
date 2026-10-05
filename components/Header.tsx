"use client";

import { navSections, site } from "@/data/content";
import { useEffect, useState } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-stage-black/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-stage items-center justify-between px-6 py-4">
        <a
          href="#"
          className="font-display text-2xl tracking-wide text-stage-spotlight"
        >
          {site.name.split(" ")[0]}
          <span className="text-stage-gold">.</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {navSections.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm font-medium uppercase tracking-widest text-neutral-400 transition-colors hover:text-stage-gold"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full border border-stage-gold/50 bg-stage-gold/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-stage-gold transition hover:bg-stage-gold/20"
        >
          Book
        </a>
      </div>
    </header>
  );
}
