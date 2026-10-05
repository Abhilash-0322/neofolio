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
        className="inline-block h-9 w-[4.5rem] rounded-full border border-lab-border bg-lab-muted"
        aria-hidden
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="group flex items-center gap-2 rounded-full border border-lab-border bg-lab-surface px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-lab-sub transition-all hover:border-lab-accent hover:shadow-synapse"
      aria-label={isDark ? "Switch to lab light mode" : "Switch to neural dark mode"}
    >
      <span
        className={`h-2 w-2 rounded-full transition-colors ${
          isDark ? "bg-lab-synapse shadow-[0_0_8px_var(--lab-synapse)]" : "bg-lab-accent"
        }`}
      />
      {isDark ? "Neural" : "Lab"}
    </button>
  );
}
