"use client";

import { motion } from "framer-motion";
import { codingProfiles } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";

/* ══════════════════════════════════════════════════════
   Custom themed SVG icons — each hand-crafted to match
   the portfolio's neon/circuit aesthetic.
   ══════════════════════════════════════════════════════ */

function LeetCodeIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8">
      {/* Two interlocked angular brackets — code-contest aesthetic */}
      <polygon
        points="8,20 17,8 26,20 17,32"
        stroke={color}
        strokeWidth="1.8"
        fill="none"
        opacity="0.9"
      />
      <polygon
        points="14,20 23,9 32,20 23,31"
        stroke={color}
        strokeWidth="1.8"
        fill={color}
        fillOpacity="0.12"
        opacity="0.9"
      />
      <line x1="8" y1="20" x2="32" y2="20" stroke={color} strokeWidth="1.4" strokeDasharray="2 2" opacity="0.45" />
      <circle cx="20" cy="20" r="2" fill={color} opacity="0.9" />
    </svg>
  );
}

function CodeforcesIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8">
      {/* Ascending rank bars — competitive rating visualization */}
      <rect x="6"  y="26" width="6" height="8"  rx="1" fill={color} opacity="0.45" />
      <rect x="14" y="19" width="6" height="15" rx="1" fill={color} opacity="0.65" />
      <rect x="22" y="13" width="6" height="21" rx="1" fill={color} opacity="0.85" />
      <rect x="30" y="7"  width="4" height="27" rx="1" fill={color} opacity="1"    />
      {/* Trend line connecting tops */}
      <polyline
        points="9,26 17,19 25,13 32,7"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
        strokeLinejoin="round"
        opacity="0.7"
      />
      {/* Top dots */}
      <circle cx="9"  cy="26" r="1.5" fill={color} />
      <circle cx="17" cy="19" r="1.5" fill={color} />
      <circle cx="25" cy="13" r="1.5" fill={color} />
      <circle cx="32" cy="7"  r="1.5" fill={color} />
    </svg>
  );
}

function GeeksForGeeksIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8">
      {/* Binary tree — CS fundamentals icon */}
      {/* Root */}
      <circle cx="20" cy="6" r="3" stroke={color} strokeWidth="1.6" fill={color} fillOpacity="0.2" />
      {/* Left child */}
      <circle cx="10" cy="18" r="3" stroke={color} strokeWidth="1.6" fill={color} fillOpacity="0.2" />
      {/* Right child */}
      <circle cx="30" cy="18" r="3" stroke={color} strokeWidth="1.6" fill={color} fillOpacity="0.2" />
      {/* Leaf nodes */}
      <circle cx="5"  cy="30" r="2.2" stroke={color} strokeWidth="1.4" fill={color} fillOpacity="0.35" />
      <circle cx="15" cy="30" r="2.2" stroke={color} strokeWidth="1.4" fill={color} fillOpacity="0.35" />
      <circle cx="25" cy="30" r="2.2" stroke={color} strokeWidth="1.4" fill={color} fillOpacity="0.35" />
      <circle cx="35" cy="30" r="2.2" stroke={color} strokeWidth="1.4" fill={color} fillOpacity="0.35" />
      {/* Edges */}
      <line x1="17.8" y1="8.4"  x2="12.2" y2="15.6" stroke={color} strokeWidth="1.3" opacity="0.7" />
      <line x1="22.2" y1="8.4"  x2="27.8" y2="15.6" stroke={color} strokeWidth="1.3" opacity="0.7" />
      <line x1="7.8"  y1="20.4" x2="6.2"  y2="27.8" stroke={color} strokeWidth="1.2" opacity="0.55" />
      <line x1="12.2" y1="20.4" x2="13.8" y2="27.8" stroke={color} strokeWidth="1.2" opacity="0.55" />
      <line x1="27.8" y1="20.4" x2="26.2" y2="27.8" stroke={color} strokeWidth="1.2" opacity="0.55" />
      <line x1="32.2" y1="20.4" x2="33.8" y2="27.8" stroke={color} strokeWidth="1.2" opacity="0.55" />
    </svg>
  );
}

function HackerRankIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8">
      {/* Hexagonal skill badge */}
      <polygon
        points="20,4 33.5,11.5 33.5,28.5 20,36 6.5,28.5 6.5,11.5"
        stroke={color}
        strokeWidth="1.7"
        fill={color}
        fillOpacity="0.08"
      />
      {/* Inner hexagon */}
      <polygon
        points="20,11 27.5,15.25 27.5,24.75 20,29 12.5,24.75 12.5,15.25"
        stroke={color}
        strokeWidth="1.2"
        fill={color}
        fillOpacity="0.15"
        opacity="0.7"
      />
      {/* Circuit cross / hash mark in center */}
      <line x1="14" y1="20" x2="26" y2="20" stroke={color} strokeWidth="2"   strokeLinecap="round" />
      <line x1="20" y1="14" x2="20" y2="26" stroke={color} strokeWidth="2"   strokeLinecap="round" />
      <circle cx="14" cy="20" r="1.4" fill={color} />
      <circle cx="26" cy="20" r="1.4" fill={color} />
      <circle cx="20" cy="14" r="1.4" fill={color} />
      <circle cx="20" cy="26" r="1.4" fill={color} />
    </svg>
  );
}

const ICONS: Record<string, (color: string) => React.ReactNode> = {
  LeetCode:     (c) => <LeetCodeIcon color={c} />,
  Codeforces:   (c) => <CodeforcesIcon color={c} />,
  GeeksForGeeks:(c) => <GeeksForGeeksIcon color={c} />,
  HackerRank:   (c) => <HackerRankIcon color={c} />,
};

export function CodingProfiles() {
  return (
    <section id="coding-arena" data-story-section className="section-spacing">
      <div className="container-shell">
        <Reveal>
          <p className="story-kicker text-green">The Arena</p>
          <h2 data-parallax className="mt-1 text-3xl font-semibold tracking-tight sm:text-4xl">
            Where Algorithms Are Forged
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Competitive programming isn&apos;t just practice &mdash; it&apos;s the proving ground where problem-solving instincts are sharpened under time pressure and against global competition.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {codingProfiles.map((p, idx) => (
            <Reveal key={p.name} delay={0.07 * idx}>
              <motion.a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="coding-card group block"
                style={{ "--card-accent": p.color } as React.CSSProperties}
              >
                {/* Accent glow on hover */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(ellipse at 30% 30%, ${p.color}22, transparent 65%)`
                  }}
                />

                <div className="relative flex items-start gap-4">
                  {/* Custom icon */}
                  <div
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border"
                    style={{
                      borderColor: `${p.color}35`,
                      background: `${p.color}0d`,
                      boxShadow: `0 0 20px ${p.color}18`
                    }}
                  >
                    {ICONS[p.name]?.(p.color)}
                  </div>

                  <div className="min-w-0">
                    <p className="font-semibold tracking-tight" style={{ color: p.color }}>
                      {p.name}
                    </p>
                    <p className="font-mono text-xs text-slate-400">@{p.handle}</p>
                  </div>
                </div>

                <p className="relative mt-4 text-xs leading-relaxed text-slate-400">
                  {p.description}
                </p>

                {/* Bottom accent bar */}
                <div
                  className="relative mt-4 h-px w-full origin-left scale-x-0 rounded-full transition-transform duration-300 group-hover:scale-x-100"
                  style={{ background: `linear-gradient(90deg, ${p.color}, transparent)` }}
                />
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
