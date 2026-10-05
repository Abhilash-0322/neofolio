"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = saved ? saved === "dark" : prefersDark;
    document.documentElement.dataset.theme = isDark ? "dark" : "light";
    setDark(isDark);
  }, []);

  function toggleTheme() {
    const nextTheme = dark ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("theme", nextTheme);
    setDark(!dark);
  }

  return (
    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle color theme">
      <span className="theme-toggle__sun" aria-hidden="true">☼</span>
      <span className={`theme-toggle__track ${dark ? "is-dark" : ""}`}>
        <span />
      </span>
      <span className="theme-toggle__moon" aria-hidden="true">☾</span>
    </button>
  );
}
