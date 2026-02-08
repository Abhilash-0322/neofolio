"use client";

import { motion } from "framer-motion";

type ProjectCardProps = {
  name: string;
  label: string;
  period: string;
  impact: string;
  architecture: string;
  stack: readonly string[];
  href: string;
  why: string;
};

export function ProjectCard({ name, label, period, impact, architecture, stack, href, why }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className="glass group relative overflow-hidden rounded-3xl p-6"
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100" style={{ background: "radial-gradient(circle at 15% 12%, rgba(111,255,94,0.13), transparent 35%), radial-gradient(circle at 85% 92%, rgba(166,122,255,0.13), transparent 34%)" }} />

      <div className="relative flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="story-kicker text-green">{label}</p>
          <h3 className="mt-1 text-2xl font-semibold tracking-tight">{name}</h3>
        </div>
        <p className="rounded-full border border-white/20 bg-white/5 px-3 py-1 font-mono text-xs text-slate-300">{period}</p>
      </div>

      <p className="relative mt-5 text-sm leading-relaxed text-slate-200">{impact}</p>
      <p className="relative mt-3 text-sm leading-relaxed text-slate-300">{architecture}</p>

      <div className="relative mt-5 flex flex-wrap gap-2">
        {stack.map((item) => (
          <span key={item} className="rounded-full border border-white/15 bg-black/30 px-2.5 py-1 font-mono text-xs text-slate-200">
            {item}
          </span>
        ))}
      </div>

      <p className="relative mt-5 border-l-2 border-violet/70 pl-3 text-sm text-slate-300">{why}</p>

      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="relative mt-6 inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-2 text-sm font-medium hover:border-green/80 hover:text-green"
      >
        Repository
        <span aria-hidden>→</span>
      </a>
    </motion.article>
  );
}
