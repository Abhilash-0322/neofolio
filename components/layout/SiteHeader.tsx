"use client";

import { navItems } from "@/data/content";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useEffect, useState } from "react";

export function SiteHeader() {
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
      { threshold: 0.35 },
    );

    navItems.forEach((item) => {
      const el = document.querySelector(item.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-frame bg-bg/90 backdrop-blur-md">
      <div className="container-shell flex h-14 items-center justify-between gap-4">
        <a href="#home" className="plaque-label text-accent">
          Gallery 5057
        </a>
        <nav aria-label="Section navigation" className="hidden flex-1 justify-center md:flex">
          <ul className="flex flex-wrap items-center justify-center gap-1">
            {navItems.map((item) => {
              const isActive = active === item.href;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`rounded-sm px-2.5 py-1.5 text-xs transition sm:text-sm ${
                      isActive
                        ? "bg-accent-soft text-text"
                        : "text-muted hover:text-text"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
