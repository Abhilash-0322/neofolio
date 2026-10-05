"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="theme-toggle" aria-hidden="true" />;
  }

  const isLight = resolvedTheme === "light";

  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label={`Switch to ${isLight ? "dark" : "light"} mode`}
      onClick={() => setTheme(isLight ? "dark" : "light")}
    >
      <span className="sr-only">Toggle color theme</span>
      {isLight ? (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 3v2M12 19v2M5.64 5.64l1.42 1.42m9.9 9.9 1.4 1.4M3 12h2m14 0h2M5.64 18.36l1.42-1.42m9.9-9.9 1.4-1.4M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.7 8.5 8.5 0 1 0 20.5 14.5Z" />
        </svg>
      )}
    </button>
  );
}
