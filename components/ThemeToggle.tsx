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
        className="inline-block h-9 w-[4.5rem] rounded-full border border-border bg-surface"
        aria-hidden
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:border-accent hover:text-foreground"
      aria-label={isDark ? "Switch to sandy shore light" : "Switch to abyss dark"}
    >
      <span aria-hidden>{isDark ? "🌊" : "🏖️"}</span>
      <span>{isDark ? "Abyss" : "Shore"}</span>
    </button>
  );
}
