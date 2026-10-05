"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button type="button" className="cta-btn opacity-60" aria-label="Loading theme" disabled>
        …
      </button>
    );
  }

  const isDark = (resolvedTheme ?? theme) === "dark";

  return (
    <button
      type="button"
      className="cta-btn"
      aria-pressed={isDark}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <span className="text-signal" aria-hidden>{isDark ? "○" : "●"}</span>
      {isDark ? "Light mode" : "Dark mode"}
    </button>
  );
}
