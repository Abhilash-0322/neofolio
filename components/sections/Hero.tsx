"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/content";

const bootLines = [
  "synthwave.boot :: day pastel / night grid online",
  "retro.grid :: magenta horizon synchronized",
  "neural.bridge :: RAG + agent stack active",
  "cloud.deploy :: FastAPI pipelines live",
  "5044.theme :: next-themes toggle armed",
] as const;

export function Hero() {
  return (
    <section id="home" data-story-section className="section-spacing pt-36 sm:pt-40">
      <div className="container-shell">
        <div className="glass rounded-[2rem] p-6 sm:p-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="story-kicker">Chapter Zero · Retro Boot Sequence</p>
            <p className="rounded-full border border-[var(--glass-border)] bg-[color-mix(in_srgb,var(--surface)_60%,transparent)] px-3 py-1 font-mono text-xs muted-text">
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
            className="mt-5 max-w-3xl text-base leading-relaxed muted-text sm:text-lg"
          >
            Synthwave-skinned portfolio for a backend and AI systems builder — shipping FastAPI services, multi-agent workflows, RAG pipelines, and cloud deployments with neon clarity by night and soft pastels by day.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="narrative-quote mt-4"
          >
            &ldquo;Ship systems that glow in production — not just on demo slides.&rdquo;
          </motion.p>

          <div className="monitor-line terminal-panel mt-7 grid gap-2 rounded-2xl p-4 font-mono text-xs muted-text sm:grid-cols-2 lg:grid-cols-3">
            {bootLines.map((line, idx) => (
              <motion.p
                key={line}
                initial={{ opacity: 0, x: -14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: 0.25 + idx * 0.1 }}
              >
                <span className="text-green/70">▸</span> {line}
              </motion.p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a className="cta-btn bg-[color-mix(in_srgb,var(--violet)_15%,transparent)]" href="#projects">
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
