"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <span
        className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-frame bg-panel"
        aria-hidden
      />
    );
  }

  const isDark = (theme === "dark" || resolvedTheme === "dark");

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-frame bg-panel text-text transition hover:border-accent hover:shadow-spotlight"
      aria-label={isDark ? "Switch to gallery light mode" : "Switch to spotlight exhibit mode"}
    >
      {isDark ? <Sun className="h-4 w-4 text-accent" /> : <Moon className="h-4 w-4 text-accent" />}
    </button>
  );
}
