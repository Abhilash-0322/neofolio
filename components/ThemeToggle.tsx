"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <span
        className="inline-block h-9 w-[4.5rem] rounded-full border border-border bg-card"
        aria-hidden
      />
    );
  }

  const isDark = (resolvedTheme ?? theme) === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="group flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-sm text-muted shadow-journal transition hover:text-ink"
      aria-label={isDark ? "Switch to paper journal light mode" : "Switch to ink night dark mode"}
    >
      <span className="font-mono text-xs uppercase tracking-wider">
        {isDark ? "Ink" : "Paper"}
      </span>
      <span
        className="relative flex h-5 w-9 items-center rounded-full bg-border/60 p-0.5"
        aria-hidden
      >
        <span
          className={`h-4 w-4 rounded-full bg-accent shadow-sm transition-transform duration-200 ${
            isDark ? "translate-x-4" : "translate-x-0"
          }`}
        />
      </span>
    </button>
  );
}
