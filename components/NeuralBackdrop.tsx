"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const nodes = [
  { x: 12, y: 18 },
  { x: 28, y: 42 },
  { x: 45, y: 22 },
  { x: 62, y: 55 },
  { x: 78, y: 30 },
  { x: 88, y: 68 },
  { x: 35, y: 72 },
  { x: 55, y: 85 },
  { x: 72, y: 12 },
  { x: 18, y: 58 },
];

const edges: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 4],
  [4, 8],
  [1, 9],
  [9, 6],
  [6, 7],
  [3, 5],
  [3, 4],
  [2, 3],
  [5, 7],
  [8, 4],
];

export function NeuralBackdrop() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const dark = mounted && resolvedTheme === "dark";

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden lab-grid-bg opacity-60 dark:opacity-100"
      aria-hidden
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {edges.map(([a, b], i) => {
          const na = nodes[a];
          const nb = nodes[b];
          return (
            <line
              key={i}
              x1={na.x}
              y1={na.y}
              x2={nb.x}
              y2={nb.y}
              stroke={dark ? "url(#synapseGrad)" : "url(#labGrad)"}
              strokeWidth={dark ? 0.15 : 0.08}
              className={dark ? "animate-pulse" : ""}
              style={{ animationDuration: `${3 + i * 0.4}s` }}
            />
          );
        })}
        <defs>
          <linearGradient id="synapseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity={0.5} />
            <stop offset="100%" stopColor="#a78bfa" stopOpacity={0.6} />
          </linearGradient>
          <linearGradient id="labGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0284c7" stopOpacity={0.2} />
            <stop offset="100%" stopColor="#0d9488" stopOpacity={0.15} />
          </linearGradient>
        </defs>
        {nodes.map((n, i) => (
          <circle
            key={i}
            cx={n.x}
            cy={n.y}
            r={dark ? 0.55 : 0.35}
            fill={dark ? "#22d3ee" : "#0369a1"}
            opacity={dark ? 0.85 : 0.35}
            className={dark ? "drop-shadow-[0_0_6px_rgba(34,211,238,0.8)]" : ""}
          />
        ))}
      </svg>
      <div
        className={`absolute inset-0 ${
          dark
            ? "bg-gradient-to-b from-lab-bg via-transparent to-lab-bg"
            : "bg-gradient-to-b from-lab-bg/90 via-lab-bg/40 to-lab-bg"
        }`}
      />
      {dark && (
        <div
          className="absolute left-1/2 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-lab-synapse/10 blur-[120px]"
        />
      )}
    </div>
  );
}
