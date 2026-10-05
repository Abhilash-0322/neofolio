"use client";

import { ThemeToggle } from "@/components/ui/ThemeToggle";
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

  useEffect(() => {
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

  return (
    <nav
      aria-label="Section navigation"
      className="synth-nav fixed left-1/2 top-4 z-50 w-[min(96vw,940px)] -translate-x-1/2 rounded-full px-2 py-2"
    >
      <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2">
        <ul className="flex flex-wrap items-center justify-center gap-1 sm:gap-2">
          {items.map((item) => {
            const isActive = active === item.href;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs transition sm:text-sm ${
                    isActive ? "nav-link-active" : "nav-link-idle"
                  }`}
                >
                  <span className="nav-dot" />
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
        <ThemeToggle />
      </div>
    </nav>
  );
}
