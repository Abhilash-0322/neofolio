"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/content";

export function Hero() {
  return (
    <section id="home" className="section-spacing pt-32">
      <div className="container-shell">
        <div className="timetable-card ticket-notch rounded-sm p-6 sm:p-10">
          <p className="kicker">Independent engineer · available for the next system</p>
          <div className="mt-2 flex flex-wrap items-end justify-between gap-4">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-display text-4xl font-bold tracking-tight sm:text-5xl"
            >
              {profile.name}
            </motion.h1>
            <p className="font-mono text-sm text-muted">{profile.location}</p>
          </div>

          <p className="mt-3 font-mono text-sm text-accent">{profile.titles.join(" / ")}</p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mt-5 max-w-3xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {profile.bio}
          </motion.p>

          <div className="mt-8 grid gap-2 border-2 border-dashed border-rail/40 p-4 font-mono text-xs sm:grid-cols-3">
            <p><span className="text-accent">01</span> Systems that ship</p>
            <p><span className="text-accent">02</span> APIs · agents · cloud</p>
            <p><span className="text-accent">03</span> FastAPI · Next.js · Azure/AWS</p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a className="cta-btn cta-btn-primary" href="#projects">View selected work</a>
            <a className="cta-btn" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            <a className="cta-btn" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="cta-btn" href={`mailto:${profile.email}`}>Email</a>
          </div>
        </div>
      </div>
    </section>
  );
}
