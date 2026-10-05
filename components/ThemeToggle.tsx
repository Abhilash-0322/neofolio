"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <span className="theme-toggle opacity-60" aria-hidden>
        …
      </span>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={
        isDark ? "Switch to silver screen light mode" : "Switch to noir dark mode"
      }
      title={isDark ? "Silver screen" : "Noir"}
    >
      <span aria-hidden>{isDark ? "☀" : "◐"}</span>
      <span>{isDark ? "Silver" : "Noir"}</span>
      <span className="sr-only">
        Current theme: {theme === "system" ? `system (${resolvedTheme})` : theme}
      </span>
    </button>
  );
}
