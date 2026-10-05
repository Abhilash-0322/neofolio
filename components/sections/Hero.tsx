"use client";

import { profile } from "@/data/content";
import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center px-6 pb-24 pt-32"
    >
      <div className="mx-auto w-full max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-forge-copper"
        >
          {profile.location}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-forge-ink sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <span className="block">{profile.name}</span>
          <span className="mt-2 block text-gradient-copper text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            {profile.role}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-forge-muted md:text-xl"
        >
          {profile.bio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            href="#work"
            className="rounded-full bg-forge-accent px-8 py-3.5 text-sm font-semibold text-forge-surface shadow-lg shadow-forge-iron/15 transition hover:bg-forge-copper dark:bg-forge-ember dark:text-forge-iron dark:hover:bg-forge-copper"
          >
            View selected work
          </Link>
          <a
            href={profile.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-forge-iron/20 px-8 py-3.5 text-sm font-medium text-forge-ink transition hover:border-forge-accent/50 dark:border-white/20 dark:text-forge-concrete"
          >
            Open resume (PDF)
          </a>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="mt-14 flex flex-wrap gap-3"
        >
          {profile.titles.map((title) => (
            <li
              key={title}
              className="glass-panel rounded-full px-4 py-1.5 text-xs text-forge-muted"
            >
              {title}
            </li>
          ))}
        </motion.ul>
      </div>

      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-forge-copper/50 to-transparent"
        aria-hidden
      />
    </section>
  );
}
