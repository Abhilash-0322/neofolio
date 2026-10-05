"use client";

import { chapters, profile } from "@/data/profile";
import { motion, useScroll } from "framer-motion";

export function SiteNav() {
  const { scrollYProgress } = useScroll();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/5 bg-parchment/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 md:px-8">
        <a
          href="#"
          className="font-display text-lg tracking-tight text-ink hover:text-accent transition-colors"
        >
          {profile.name.split(" ")[0]}
        </a>
        <nav className="hidden gap-6 text-sm text-muted md:flex" aria-label="Chapters">
          {chapters.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className="hover:text-ink transition-colors"
            >
              <span className="text-accent/70">{c.number}</span> {c.title}
            </a>
          ))}
        </nav>
        <a
          href={`mailto:${profile.email}`}
          className="text-sm font-medium text-ink underline-offset-4 hover:underline"
        >
          Contact
        </a>
      </div>
      <motion.div
        className="h-0.5 w-full origin-left bg-accent"
        style={{ scaleX: scrollYProgress }}
      />
    </header>
  );
}
