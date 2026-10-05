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
        className="theme-toggle"
        aria-hidden
        style={{ width: "2.75rem", opacity: 0.4 }}
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to candy pop light mode" : "Switch to neon candy dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      <span className="theme-toggle-track" aria-hidden>
        <span className={`theme-toggle-thumb ${isDark ? "is-dark" : "is-light"}`}>
          {isDark ? "✦" : "☀"}
        </span>
      </span>
    </button>
  );
}
