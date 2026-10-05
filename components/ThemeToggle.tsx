"use client";

import { useTheme } from "@/components/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="group relative flex h-9 items-center gap-2 rounded border border-arena-border bg-arena-elevated px-3 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-arena-muted transition hover:border-neon-cyan hover:text-neon-cyan"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} arena mode`}
    >
      <span
        className="h-2 w-2 rounded-full bg-rgb-sweep shadow-neon-cyan animate-pulse-glow"
        aria-hidden
      />
      {theme === "dark" ? "Arena bright" : "RGB dark"}
    </button>
  );
}
