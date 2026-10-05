"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <span
        className="inline-block h-9 w-[4.5rem] rounded-full border border-line bg-surface"
        aria-hidden
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="group flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-muted transition-colors hover:border-accent hover:text-primary"
      aria-label={isDark ? "Switch to fjord mist light" : "Switch to polar night dark"}
      title={isDark ? "Fjord mist" : "Polar night"}
    >
      <span
        className={`h-2 w-2 rounded-full transition-colors ${
          isDark ? "bg-accent shadow-[0_0_8px_var(--color-accent)]" : "bg-accent-soft"
        }`}
        aria-hidden
      />
      <span>{isDark ? "Polar" : "Fjord"}</span>
    </button>
  );
}
