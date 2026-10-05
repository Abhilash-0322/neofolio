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
        className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--chip-bg)]"
        aria-hidden
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--chip-bg)] text-lg transition hover:border-[var(--accent)] hover:shadow-glowAccent"
      aria-label={isDark ? "Switch to tropical sunset light mode" : "Switch to moonlit palm dark mode"}
      title={isDark ? "Sunset light" : "Moonlit dark"}
    >
      {isDark ? "🌴" : "🌅"}
    </button>
  );
}
