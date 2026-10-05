"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  document.documentElement.classList.remove("light", "dark");
  document.documentElement.classList.add(theme);
  localStorage.setItem("neofolio-theme", theme);
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("neofolio-theme") as Theme | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial: Theme =
      stored === "dark" || stored === "light"
        ? stored
        : prefersDark
          ? "dark"
          : "light";
    setTheme(initial);
    setMounted(true);
  }, []);

  function toggle() {
    const next: Theme = theme === "light" ? "dark" : "light";
    setTheme(next);
    applyTheme(next);
  }

  if (!mounted) {
    return (
      <span
        className="inline-block h-9 w-[4.5rem] rounded-full border border-sol-border bg-sol-bg-alt"
        aria-hidden
      />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      className="group flex items-center gap-2 rounded-full border border-sol-border bg-sol-bg-alt px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-sol-muted transition-colors hover:border-sol-blue hover:text-sol-emphasis"
      aria-label={isDark ? "Switch to Solarized Light" : "Switch to Solarized Dark"}
    >
      <span
        className={`relative inline-flex h-5 w-9 shrink-0 items-center rounded-full border border-sol-border transition-colors ${
          isDark ? "bg-sol-bg-alt" : "bg-sol-yellow/25"
        }`}
        aria-hidden
      >
        <span
          className={`inline-block h-3.5 w-3.5 rounded-full bg-sol-blue shadow-sm transition-transform ${
            isDark ? "translate-x-[1.15rem]" : "translate-x-0.5"
          }`}
        />
      </span>
      <span className="hidden sm:inline">{isDark ? "Dark" : "Light"}</span>
    </button>
  );
}
