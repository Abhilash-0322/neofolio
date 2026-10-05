"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/portfolio";
import { ShellPrompt } from "@/components/ShellPrompt";

const bootLines = [
  "[ OK ] Initializing portfolio kernel v14.2...",
  "[ OK ] Loading modules: next.js, tailwind, typescript",
  "[ OK ] Mounting /dev/abhilash",
  "[ OK ] Network: Delhi NCR, India (Ghaziabad)",
  "",
];

export function BootHero() {
  const [visible, setVisible] = useState(0);
  const [typed, setTyped] = useState("");
  const fullCmd = "cat welcome.txt && ./start-career.sh";

  useEffect(() => {
    if (visible < bootLines.length) {
      const t = setTimeout(() => setVisible((v) => v + 1), 280);
      return () => clearTimeout(t);
    }
  }, [visible]);

  useEffect(() => {
    if (visible < bootLines.length) return;
    let i = 0;
    const iv = setInterval(() => {
      i++;
      setTyped(fullCmd.slice(0, i));
      if (i >= fullCmd.length) clearInterval(iv);
    }, 35);
    return () => clearInterval(iv);
  }, [visible, fullCmd]);

  return (
    <section id="boot" className="relative min-h-[85vh] px-4 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="term-window overflow-hidden">
          <div className="flex items-center gap-2 border-b border-term-border px-4 py-2 text-xs term-dim">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-term-amber/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-term-green/80" />
            <span className="ml-2">abhilash@portfolio — bash</span>
          </div>
          <div className="space-y-1 p-4 md:p-6 text-sm md:text-base leading-relaxed">
            {bootLines.slice(0, visible).map((line, i) => (
              <div
                key={i}
                className={`animate-fade-in ${line.startsWith("[ OK ]") ? "text-term-green/90" : ""}`}
              >
                {line || "\u00A0"}
              </div>
            ))}
            {visible >= bootLines.length && (
              <>
                <ShellPrompt path="~" command={typed} />
                <div className="mt-6 space-y-3 animate-fade-in">
                  <h1 className="text-2xl md:text-4xl font-bold text-term-green">
                    {profile.name}
                  </h1>
                  <p className="text-term-cyan text-sm md:text-lg">
                    {profile.titles.join(" · ")}
                  </p>
                  <p className="max-w-3xl text-term-text/90 leading-relaxed">
                    {profile.bio}
                  </p>
                  <p className="term-dim text-sm">
                    Focus: {profile.focus}
                  </p>
                  <p className="term-dim text-sm">
                    Interests: {profile.interests}
                  </p>
                  <p className="term-dim text-sm">
                    Also: {profile.freelance}
                  </p>
                  <div className="flex flex-wrap gap-3 pt-4">
                    <a href="#contact" className="border border-term-green/50 px-4 py-2 text-term-green hover:bg-term-green/10 transition-colors">
                      ./contact.sh
                    </a>
                    <a
                      href={profile.resumePath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-term-cyan/50 px-4 py-2 text-term-cyan hover:bg-term-cyan/10 transition-colors"
                    >
                      cat abhilash_python.pdf
                    </a>
                    <a
                      href={profile.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="term-link px-1 py-2"
                    >
                      open github
                    </a>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
