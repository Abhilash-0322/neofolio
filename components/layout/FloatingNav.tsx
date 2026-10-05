"use client";

import { useEffect, useState } from "react";

const items = [
  { href: "#home", label: "Boot" },
  { href: "#genesis", label: "Genesis" },
  { href: "#systems", label: "Systems" },
  { href: "#intelligence", label: "Intelligence" },
  { href: "#web3", label: "Web3" },
  { href: "#velocity", label: "Velocity" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Signals" },
  { href: "#coding-arena", label: "Arena" },
  { href: "#contact", label: "Contact" }
] as const;

export function FloatingNav() {
  const [active, setActive] = useState("#home");
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("neofolio-theme");
    const nextTheme = savedTheme === "light" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.45 }
    );

    items.forEach((item) => {
      const el = document.querySelector(item.href);
      if (el) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("neofolio-theme", nextTheme);
  };

  return (
    <nav aria-label="Section navigation" className="fixed left-1/2 top-4 z-50 w-[min(94vw,1040px)] -translate-x-1/2 rounded-full border border-white/20 bg-black/45 px-2 py-2 backdrop-blur-md">
      <ul className="flex flex-wrap items-center justify-center gap-1 sm:gap-2">
        {items.map((item) => {
          const isActive = active === item.href;
          return (
            <li key={item.href}>
              <a
                href={item.href}
                className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs transition sm:text-sm ${
                  isActive
                    ? "bg-white/14 text-white shadow-glowGreen"
                    : "text-slate-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span className="nav-dot" />
                {item.label}
              </a>
            </li>
          );
        })}
        <li>
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            <span className="theme-toggle-icon" aria-hidden>
              {theme === "dark" ? "☼" : "☾"}
            </span>
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </li>
      </ul>
    </nav>
  );
}
