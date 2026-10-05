"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <span
        className="inline-block h-10 w-10 rounded-full border border-border/60"
        aria-hidden
      />
    );
  }

  const isOnyx = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isOnyx ? "light" : "dark")}
      aria-label={
        isOnyx ? "Switch to champagne light mode" : "Switch to onyx dark mode"
      }
      title={isOnyx ? "Champagne" : "Onyx"}
      className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-border bg-panel shadow-crown transition hover:border-gold/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
    >
      <span
        className="absolute inset-1 rounded-full border border-gold/25 bg-gradient-to-br from-gold-soft/30 to-transparent opacity-80"
        aria-hidden
      />
      <span className="relative font-display text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
        {isOnyx ? "☀" : "◐"}
      </span>
      <span
        className="pointer-events-none absolute -bottom-7 left-1/2 hidden -translate-x-1/2 whitespace-nowrap rounded border border-border bg-surface px-2 py-0.5 text-[9px] uppercase tracking-widest text-muted group-hover:block"
        aria-hidden
      >
        {isOnyx ? "Champagne" : "Onyx"}
      </span>
    </button>
  );
}
