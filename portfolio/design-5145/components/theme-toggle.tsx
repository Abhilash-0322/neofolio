"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const light = savedTheme === "light";
    document.documentElement.classList.toggle("light", light);
    setIsLight(light);
  }, []);

  function toggleTheme() {
    const nextIsLight = !isLight;
    document.documentElement.classList.toggle("light", nextIsLight);
    window.localStorage.setItem("theme", nextIsLight ? "light" : "dark");
    setIsLight(nextIsLight);
  }

  return (
    <button
      aria-label={isLight ? "Switch to dark theme" : "Switch to light theme"}
      className="icon-button"
      onClick={toggleTheme}
      type="button"
    >
      {isLight ? <Moon size={15} /> : <Sun size={15} />}
    </button>
  );
}
