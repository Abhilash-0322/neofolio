"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import clsx from "clsx";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <span
        className={clsx(
          "inline-block h-9 w-9 rounded-full border border-forge-iron/15 bg-forge-surface/50",
          className
        )}
        aria-hidden
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={clsx(
        "flex h-9 w-9 items-center justify-center rounded-full border border-forge-iron/15 bg-forge-surface/80 text-forge-muted transition hover:border-forge-accent/40 hover:text-forge-accent dark:border-white/15 dark:bg-white/5 dark:hover:border-forge-ember/40 dark:hover:text-forge-ember",
        className
      )}
      aria-label={isDark ? "Switch to workshop light theme" : "Switch to forge dark theme"}
      title={isDark ? "Workshop light" : "Forge dark"}
    >
      {isDark ? (
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2" aria-hidden>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
          <path d="M21 14.5A7.5 7.5 0 0 1 9.5 3.5 6 6 0 1 0 21 14.5Z" />
        </svg>
      )}
    </button>
  );
}
