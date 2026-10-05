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
        className="inline-block h-9 w-[7.5rem] rounded-sm border border-[rgb(var(--border))] bg-[rgb(var(--bg-elevated))]"
        aria-hidden
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="group flex items-center gap-2 rounded-sm border-2 border-[rgb(var(--border))] bg-[rgb(var(--bg-elevated))] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[rgb(var(--text-muted))] shadow-sticker transition hover:border-[rgb(var(--accent))] hover:text-[rgb(var(--text))]"
      aria-label={isDark ? "Switch to concrete light mode" : "Switch to graffiti alley dark mode"}
    >
      <span
        className={`h-2 w-2 rounded-full ${isDark ? "bg-spray-lime" : "bg-spray-orange"}`}
        aria-hidden
      />
      {isDark ? "Alley" : "Concrete"}
    </button>
  );
}
