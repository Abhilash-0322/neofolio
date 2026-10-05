"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/content";

export function Hero() {
  return (
    <section id="home" className="section-spacing pt-28 sm:pt-32">
      <div className="container-shell">
        <div className="exhibit-frame exhibit-mat">
          <p className="plaque-label">Permanent collection · Entrance hall</p>
          <div className="accent-rule mt-4" />

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="headline-serif mt-6 text-4xl sm:text-6xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.06 }}
            className="mt-3 text-xl text-accent sm:text-2xl"
          >
            {profile.role}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <p className="mt-4 text-sm text-muted">{profile.location}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a className="cta-btn cta-btn-primary" href="#projects">
              View exhibits
            </a>
            <a className="cta-btn" href="#contact">
              Schedule a visit
            </a>
            <a className="cta-btn" target="_blank" rel="noreferrer" href={profile.github}>
              GitHub
            </a>
            <a className="cta-btn" target="_blank" rel="noreferrer" href={profile.linkedin}>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
