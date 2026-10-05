"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/content";

const bootLines = [
  "candy.api :: FastAPI services spun up",
  "agent.pop :: multi-agent workflows online",
  "rag.fizz :: vector retrieval calibrated",
  "cloud.burst :: Docker + Azure deploy path clear",
  "ship.sweet :: production > demo mode",
] as const;

export function Hero() {
  return (
    <section id="home" data-story-section className="section-spacing pt-36 sm:pt-40">
      <div className="container-shell">
        <div className="glass rounded-[2rem] p-6 sm:p-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="story-kicker">Level 01 · Hello, world</p>
            <p className="chip px-3 py-1 font-mono text-xs text-soft">
              {profile.location}
            </p>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-6xl"
          >
            {profile.name}
            <br />
            <span className="headline-gradient">{profile.role}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mt-5 max-w-3xl text-base leading-relaxed text-soft sm:text-lg"
          >
            {profile.bio}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="narrative-quote mt-4"
          >
            &ldquo;Serious systems, playful craft &mdash; backends and AI that actually ship.&rdquo;
          </motion.p>

          <div className="monitor-line panel-inset mt-7 grid gap-2 rounded-2xl p-4 font-mono text-xs text-soft sm:grid-cols-2 lg:grid-cols-3">
            {bootLines.map((line, idx) => (
              <motion.p
                key={line}
                initial={{ opacity: 0, x: -14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: 0.25 + idx * 0.1 }}
              >
                <span className="text-pink">▸</span> {line}
              </motion.p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a className="cta-btn cta-btn-primary" href="#projects">
              View Projects
            </a>
            <a className="cta-btn" target="_blank" rel="noreferrer" href={profile.github}>
              GitHub
            </a>
            <a className="cta-btn" target="_blank" rel="noreferrer" href={profile.x}>
              X
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
