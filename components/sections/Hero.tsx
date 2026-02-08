"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/content";

const bootLines = [
  "boot.sequence :: timeline-index engaged",
  "dual-core signal :: synchronized",
  "latency-check :: stable",
  "deployment-state :: live"
] as const;

export function Hero() {
  return (
    <section id="home" data-story-section className="section-spacing pt-36 sm:pt-40">
      <div className="container-shell">
        <div className="glass rounded-[2rem] p-6 sm:p-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="story-kicker">System Initialization</p>
            <p className="rounded-full border border-white/20 bg-white/5 px-3 py-1 font-mono text-xs text-slate-300">
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
            className="mt-5 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg"
          >
            Building full-stack platforms, intelligence layers, and multi-chain security systems with a focus on clean architecture, high execution speed, and product impact.
          </motion.p>

          <div className="monitor-line mt-6 grid gap-2 rounded-2xl border border-white/15 bg-black/35 p-4 font-mono text-xs text-slate-300 sm:grid-cols-2">
            {bootLines.map((line, idx) => (
              <motion.p
                key={line}
                initial={{ opacity: 0, x: -14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: 0.2 + idx * 0.08 }}
              >
                {line}
              </motion.p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a className="cta-btn bg-white/10 text-white" href="#projects">
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
