"use client";

import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useEffect, useState } from "react";

const items = [
  { href: "#home", label: "Start" },
  { href: "#genesis", label: "Story" },
  { href: "#systems", label: "Systems" },
  { href: "#intelligence", label: "AI" },
  { href: "#web3", label: "Web3" },
  { href: "#velocity", label: "Speed" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Wins" },
  { href: "#coding-arena", label: "Code" },
  { href: "#contact", label: "Hi" }
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
      className="candy-nav fixed left-1/2 top-4 z-50 flex w-[min(96vw,920px)] -translate-x-1/2 items-center gap-2 rounded-full px-2 py-2 backdrop-blur-md"
    >
      <ThemeToggle />
      <ul className="flex min-w-0 flex-1 flex-wrap items-center justify-center gap-1 sm:gap-1.5">
        {items.map((item) => {
          const isActive = active === item.href;
          return (
            <li key={item.href}>
              <a
                href={item.href}
                className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-xs font-medium transition sm:px-3 sm:text-sm ${
                  isActive
                    ? "chip text-text shadow-glowPink"
                    : "text-muted hover:chip hover:text-text"
                }`}
              >
                <span className="nav-dot" />
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
