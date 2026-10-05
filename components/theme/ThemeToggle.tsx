"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to quantum lab light mode" : "Switch to particle collision dark mode"}
      className="theme-toggle"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      disabled={!mounted}
    >
      <span className="theme-toggle__icon" aria-hidden>
        {mounted && isDark ? (
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
            <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
            <path
              d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
            <path
              d="M12 3a7 7 0 1 0 0 14 4.5 4.5 0 0 1 0-14Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
      <span className="theme-toggle__label font-mono text-[0.65rem] uppercase tracking-wider">
        {mounted ? (isDark ? "Collision" : "Lab coat") : "Theme"}
      </span>
    </button>
  );
}
