"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const dark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={() => setTheme(dark ? "light" : "dark")}
      className="focus-ring grid h-9 w-9 place-items-center rounded-full border border-line/15 bg-card/70 text-muted transition hover:border-aurora/50 hover:text-ink"
    >
      <span aria-hidden className="text-sm">{dark ? "☼" : "☾"}</span>
    </button>
  );
}
