"use client";

import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

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
      className="fixed left-1/2 top-4 z-50 flex w-[min(96vw,940px)] -translate-x-1/2 items-center gap-2 rounded-full border border-glass bg-nav px-2 py-2 shadow-glass backdrop-blur-md"
    >
      <ul className="flex min-w-0 flex-1 flex-wrap items-center justify-center gap-1 sm:gap-2">
        {items.map((item) => {
          const isActive = active === item.href;
          return (
            <li key={item.href}>
              <a
                href={item.href}
                className={`inline-flex items-center gap-2 rounded-full px-2.5 py-1.5 text-xs transition sm:px-3 sm:text-sm ${
                  isActive
                    ? "bg-chip text-text shadow-glowFrost"
                    : "text-muted hover:bg-chip hover:text-text"
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
    </nav>
  );
}
