"use client";

import { useEffect, useState } from "react";

const projects = [
  {
    number: "01",
    title: "TalentInfra",
    description:
      "A bias-aware hiring workspace where specialized agents turn candidate signals into explainable, human-reviewed decisions.",
    tags: ["FastAPI", "Next.js", "PostgreSQL", "Azure"],
    href: "https://github.com/Abhilash-0322/zynd-aickathon",
    live: "https://zynd-hiring-app.azurewebsites.net",
    accent: "from-[#f8c18f] to-[#e9785f]"
  },
  {
    number: "02",
    title: "SolSniff",
    description:
      "A narrative and idea agent for the Solana ecosystem, built to turn noisy on-chain culture into useful context.",
    tags: ["Next.js", "Groq", "Prisma", "Vercel"],
    href: "https://github.com/Abhilash-0322/sol-sniff",
    live: "https://solsniffer.vercel.app/",
    accent: "from-[#e8c5ed] to-[#ae75bc]"
  },
  {
    number: "03",
    title: "ChainSentinel AI",
    description:
      "Multi-chain smart contract risk and compliance tooling that makes technical findings readable and actionable.",
    tags: ["FastAPI", "Next.js", "MongoDB"],
    href: "https://github.com/Abhilash-0322/chainsentinel.ai",
    live: undefined,
    accent: "from-[#b8d6d1] to-[#4f928b]"
  }
];

const skills = [
  "Python",
  "FastAPI",
  "Next.js",
  "PostgreSQL",
  "Docker",
  "AWS",
  "Azure",
  "RAG",
  "AI agents",
  "GitHub Actions"
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function ThemeIcon({ dark }: { dark: boolean }) {
  return dark ? (
    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M20.4 15.2A8.5 8.5 0 0 1 8.8 3.6 8.5 8.5 0 1 0 20.4 15.2Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ) : (
    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default function Home() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = saved ? saved === "dark" : prefersDark;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <div className="noise min-h-screen overflow-hidden bg-[var(--paper)] text-[var(--ink)]">
      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6 lg:px-10">
        <a href="#" className="focus-ring flex items-center gap-3 rounded-sm" aria-label="Abhilash Maurya home">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--ink)] font-mono text-sm font-medium text-[var(--paper)]">
            AM
          </span>
          <span className="hidden text-sm font-semibold tracking-tight sm:block">Abhilash Maurya</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-[var(--ink-muted)] md:flex" aria-label="Main navigation">
          <a className="focus-ring rounded-sm transition-colors hover:text-[var(--ink)]" href="#work">Work</a>
          <a className="focus-ring rounded-sm transition-colors hover:text-[var(--ink)]" href="#about">About</a>
          <a className="focus-ring rounded-sm transition-colors hover:text-[var(--ink)]" href="#contact">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <span className="hidden items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--accent)] sm:flex">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--accent)]" />
            Open to work
          </span>
          <button
            type="button"
            onClick={toggleTheme}
            className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line)] text-[var(--ink-muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--ink)]"
            aria-label={`Switch to ${dark ? "light" : "dark"} theme`}
            aria-pressed={dark}
          >
            <ThemeIcon dark={dark} />
          </button>
        </div>
      </header>

      <main>
        <section className="relative mx-auto max-w-6xl px-6 pb-20 pt-16 lg:px-10 lg:pb-28 lg:pt-24">
          <div className="sunrise-grid absolute inset-x-0 top-0 h-[680px]" aria-hidden="true" />
          <div className="relative grid items-center gap-14 lg:grid-cols-[1.25fr_0.75fr]">
            <div>
              <p className="mb-7 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.24em] text-[var(--accent)]">
                <span className="h-px w-8 bg-[var(--accent)]" />
                Backend · AI · Infrastructure
              </p>
              <h1 className="max-w-4xl font-display text-[clamp(3.6rem,8vw,7.9rem)] font-semibold leading-[0.91] tracking-[-0.065em]">
                Building systems
                <br />
                <span className="italic text-[var(--accent)]">that hold up.</span>
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-8 text-[var(--ink-muted)]">
                I&apos;m Abhilash — a backend and AI systems developer in Delhi NCR. I turn complex ideas into shipped products, dependable APIs, and infrastructure teams can trust.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#work"
                  className="focus-ring inline-flex items-center gap-3 rounded-full bg-[var(--ink)] px-6 py-3 text-sm font-semibold text-[var(--paper)] transition-transform hover:-translate-y-0.5"
                >
                  See selected work <Arrow />
                </a>
                <a
                  href="mailto:abhilash.m.git@gmail.com"
                  className="focus-ring inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-6 py-3 text-sm font-semibold transition-colors hover:border-[var(--accent)]"
                >
                  Let&apos;s talk
                </a>
              </div>
            </div>

            <div className="relative mx-auto h-[330px] w-full max-w-[360px] lg:h-[420px]" aria-label="Abstract sunrise illustration">
              <div className="hero-orb absolute left-1/2 top-1/2 aspect-square w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-full" />
              <div className="absolute bottom-5 left-0 right-0 h-28 overflow-hidden rounded-[50%] border-t border-[var(--ink)]/30">
                <div className="absolute -left-[10%] top-[-80%] h-[180%] w-[120%] rounded-[50%] border border-[var(--ink)]/20" />
                <div className="absolute -left-[8%] top-[-65%] h-[160%] w-[116%] rounded-[50%] border border-[var(--ink)]/15" />
              </div>
              <p className="absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--ink-muted)]">
                Delhi NCR · India
              </p>
              <span className="absolute right-0 top-8 font-display text-6xl italic text-[var(--ink)]/20">✳</span>
              <span className="absolute left-2 top-20 font-mono text-xs text-[var(--ink-muted)]">01 / 04</span>
            </div>
          </div>
          <div className="mt-20 grid grid-cols-2 gap-8 border-t border-[var(--line)] pt-6 sm:grid-cols-4">
            <div>
              <p className="font-display text-3xl">5+</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-[var(--ink-muted)]">AI & full-stack MVPs</p>
            </div>
            <div>
              <p className="font-display text-3xl">3–6</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-[var(--ink-muted)]">People led per team</p>
            </div>
            <div>
              <p className="font-display text-3xl">AWS</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-[var(--ink-muted)]">Cloud certified</p>
            </div>
            <div>
              <p className="font-display text-3xl">2027</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-[var(--ink-muted)]">B.Tech graduation</p>
            </div>
          </div>
        </section>

        <section id="work" className="mx-auto max-w-6xl scroll-mt-8 px-6 py-20 lg:px-10 lg:py-28">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.24em] text-[var(--accent)]">Selected work</p>
              <h2 className="font-display text-5xl tracking-[-0.04em] sm:text-6xl">Things I&apos;ve shipped.</h2>
            </div>
            <span className="hidden font-mono text-xs text-[var(--ink-muted)] sm:block">2024 — 2026</span>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className="project-card group flex min-h-[430px] flex-col rounded-2xl border border-[var(--line)] bg-[var(--paper-muted)] p-5">
                <div className={`relative mb-7 flex h-44 items-end overflow-hidden rounded-xl bg-gradient-to-br ${project.accent} p-5`}>
                  <div className="absolute -right-8 -top-10 h-40 w-40 rounded-full border-[18px] border-white/20" />
                  <div className="absolute -bottom-20 -left-7 h-48 w-48 rounded-full border border-black/10" />
                  <span className="relative font-mono text-xs font-medium uppercase tracking-[0.22em] text-black/55">Case study {project.number}</span>
                </div>
                <div className="flex flex-1 flex-col">
                  <h3 className="font-display text-3xl tracking-[-0.03em]">{project.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--ink-muted)]">{project.description}</p>
                  <div className="mt-auto pt-6">
                    <div className="mb-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-[var(--line)] px-2.5 py-1 font-mono text-[10px] text-[var(--ink-muted)]">{tag}</span>
                      ))}
                    </div>
                    <div className="flex gap-4 text-sm font-semibold">
                      <a className="focus-ring rounded-sm hover:text-[var(--accent)]" href={project.href} target="_blank" rel="noreferrer">GitHub <Arrow /></a>
                      {project.live && <a className="focus-ring rounded-sm text-[var(--accent)] hover:text-[var(--ink)]" href={project.live} target="_blank" rel="noreferrer">Live site <Arrow /></a>}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-7 flex justify-end">
            <a className="focus-ring rounded-sm border-b border-[var(--accent)] pb-1 text-sm font-semibold hover:text-[var(--accent)]" href="https://github.com/Abhilash-0322" target="_blank" rel="noreferrer">More on GitHub <Arrow /></a>
          </div>
        </section>

        <section id="about" className="scroll-mt-8 border-y border-[var(--line)] bg-[var(--paper-muted)]">
          <div className="mx-auto grid max-w-6xl gap-16 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-28">
            <div>
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.24em] text-[var(--accent)]">A little context</p>
              <h2 className="max-w-sm font-display text-5xl leading-[1.05] tracking-[-0.04em] sm:text-6xl">Curious by default. <span className="italic text-[var(--accent)]">Useful</span> on purpose.</h2>
              <p className="mt-8 max-w-md text-base leading-7 text-[var(--ink-muted)]">
                I like the part after the prototype: the edge cases, the observability, the deployment, and the small decisions that make software feel calm in production.
              </p>
            </div>
            <div>
              <div className="border-t border-[var(--line)]">
                <div className="grid gap-4 border-b border-[var(--line)] py-6 sm:grid-cols-[130px_1fr]">
                  <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)]">Now</span>
                  <p className="text-sm leading-6">AI/ML Coordinator at Innogeeks Club, KIET — leading technical direction and mentoring builders across campus.</p>
                </div>
                <div className="grid gap-4 border-b border-[var(--line)] py-6 sm:grid-cols-[130px_1fr]">
                  <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)]">Previously</span>
                  <p className="text-sm leading-6">AI Engineer Intern at Spearmint Technologies — shipping voice features, data pipelines, and agent experiments.</p>
                </div>
                <div className="grid gap-4 border-b border-[var(--line)] py-6 sm:grid-cols-[130px_1fr]">
                  <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)]">Outside code</span>
                  <p className="text-sm leading-6">Hackathons, open source, design rabbit holes, and learning how systems behave when the happy path ends.</p>
                </div>
              </div>
              <div className="mt-10">
                <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[var(--ink-muted)]">My toolbox</p>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => <span key={skill} className="rounded-full border border-[var(--line)] px-3 py-1.5 text-xs text-[var(--ink-muted)]">{skill}</span>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="relative mx-auto max-w-6xl scroll-mt-8 px-6 py-24 lg:px-10 lg:py-36">
          <div className="absolute right-10 top-20 hidden font-display text-8xl italic text-[var(--accent)]/15 lg:block">✳</div>
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.24em] text-[var(--accent)]">Have a good problem?</p>
          <h2 className="max-w-3xl font-display text-[clamp(3.2rem,7vw,7rem)] leading-[0.95] tracking-[-0.06em]">
            Let&apos;s make it
            <br />
            <span className="reveal-line italic">real.</span>
          </h2>
          <div className="mt-10 flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
            <a href="mailto:abhilash.m.git@gmail.com" className="focus-ring w-fit rounded-sm border-b-2 border-[var(--accent)] pb-2 text-lg font-semibold hover:text-[var(--accent)]">abhilash.m.git@gmail.com <Arrow /></a>
            <p className="max-w-xs text-sm leading-6 text-[var(--ink-muted)]">Available for backend, AI systems, and cloud infrastructure opportunities.</p>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--line)]">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-7 text-xs text-[var(--ink-muted)] sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p>© {new Date().getFullYear()} Abhilash Maurya</p>
          <div className="flex gap-5">
            <a className="focus-ring rounded-sm hover:text-[var(--ink)]" href="https://github.com/Abhilash-0322" target="_blank" rel="noreferrer">GitHub</a>
            <a className="focus-ring rounded-sm hover:text-[var(--ink)]" href="https://www.linkedin.com/in/abhilash-maurya-b615b9277/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="focus-ring rounded-sm hover:text-[var(--ink)]" href="https://x.com/abhilash_glitch" target="_blank" rel="noreferrer">X / Twitter</a>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-wider">Made with intention</p>
        </div>
      </footer>
    </div>
  );
}
