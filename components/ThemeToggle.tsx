"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <span
        className="inline-flex h-9 w-[7.5rem] items-center justify-center rounded-full border border-line bg-surface/80 text-[10px] uppercase tracking-[0.14em] text-muted"
        aria-hidden
      >
        Theme
      </span>
    );
  }

  const isStage = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isStage ? "light" : "dark")}
      className="inline-flex h-9 items-center gap-2 rounded-full border border-line bg-surface/90 px-3 text-[10px] font-medium uppercase tracking-[0.12em] text-muted backdrop-blur-sm transition-colors hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      aria-label={
        isStage ? "Switch to pitch deck light mode" : "Switch to keynote stage dark mode"
      }
    >
      {isStage ? (
        <>
          <Sun className="h-3.5 w-3.5 text-stage-gold" aria-hidden />
          <span>Slide</span>
        </>
      ) : (
        <>
          <Moon className="h-3.5 w-3.5 text-pitch-blue" aria-hidden />
          <span>Stage</span>
        </>
      )}
    </button>
  );
}
