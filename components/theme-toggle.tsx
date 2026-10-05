"use client";

import { useTheme } from "next-themes";
import { Activity, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <span
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-surface-border bg-surface-elevated"
        aria-hidden
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-surface-border bg-surface-elevated text-ink transition hover:border-clinical-muted hover:shadow-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clinical-muted"
      aria-label={
        isDark ? "Switch to clinical light mode" : "Switch to diagnostic dark mode"
      }
      title={theme === "system" ? `System (${isDark ? "dark" : "light"})` : theme}
    >
      {isDark ? (
        <Sun className="h-4 w-4 text-clinical-muted transition group-hover:rotate-12" />
      ) : (
        <Activity className="h-4 w-4 text-clinical-muted transition group-hover:scale-110" />
      )}
    </button>
  );
}
