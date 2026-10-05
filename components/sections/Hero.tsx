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
          className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-luxury-copper dark:text-luxury-blush/90"
        >
          {profile.location}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-luxury-ink sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <span className="block">{profile.name}</span>
          <span className="mt-2 block text-gradient-rose-gold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            {profile.role}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-luxury-muted md:text-xl"
        >
          {profile.bio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link href="#work" className="btn-rose-gold rounded-full px-8 py-3.5 text-sm font-semibold">
            View selected work
          </Link>
          <a
            href={profile.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-luxury-border px-8 py-3.5 text-sm font-medium text-luxury-ink transition hover:border-luxury-copper/50 dark:hover:border-luxury-gold/50"
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
              className="glass-luxury rounded-full px-4 py-1.5 text-xs text-luxury-muted"
            >
              {title}
            </li>
          ))}
        </motion.ul>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px accent-line" aria-hidden />
    </section>
  );
}
