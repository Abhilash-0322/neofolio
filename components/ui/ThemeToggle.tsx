"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const dark = mounted && resolvedTheme === "dark";
  return <button type="button" onClick={() => setTheme(dark ? "light" : "dark")} aria-label={dark ? "Switch to light mode" : "Switch to dark mode"} className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line)] text-sm transition hover:border-[var(--lime)] hover:text-[var(--lime)]">{mounted ? (dark ? "☼" : "☾") : "·"}</button>;
}
