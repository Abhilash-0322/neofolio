"use client";

import { navSections, site } from "@/data/content";
import { useEffect, useState } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "border-b border-sumi/5 bg-washi/90 backdrop-blur-sm" : ""
      }`}
    >
      <div className="mx-auto flex max-w-zen items-center justify-between px-8 py-6 md:px-10">
        <a
          href="#"
          className="font-serif text-sm tracking-wide text-sumi-muted hover:text-sumi"
        >
          {site.name.split(" ")[0]}
        </a>
        <nav className="hidden gap-8 text-xs tracking-zen text-sumi-faint md:flex">
          {navSections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="transition-colors hover:text-sumi"
            >
              {s.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
