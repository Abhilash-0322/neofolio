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
        className="inline-block h-8 w-[7.5rem] rounded border border-arch-line/30"
        aria-hidden
      />
    );
  }

  const isBlueprint = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isBlueprint ? "light" : "dark")}
      className="draw-corners border border-arch-line/40 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.18em] text-arch-chalk transition-colors hover:border-arch-accent hover:text-arch-accent"
      aria-label={
        isBlueprint
          ? "Switch to architect studio daylight"
          : "Switch to blueprint night"
      }
    >
      {isBlueprint ? "Studio daylight" : "Blueprint night"}
    </button>
  );
}
