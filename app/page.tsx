"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

type IconName =
  | "arrow"
  | "arrowUp"
  | "sun"
  | "moon"
  | "github"
  | "linkedin"
  | "mail"
  | "external"
  | "spark"
  | "code"
  | "cloud"
  | "layers"
  | "map"
  | "copy";

function Icon({
  name,
  size = 18,
  strokeWidth = 1.8,
}: {
  name: IconName;
  size?: number;
  strokeWidth?: number;
}) {
  const shared = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (name === "github") {
    return (
      <svg {...shared} viewBox="0 0 24 24">
        <path d="M15 22v-3.9c.04-1.08-.4-1.72-1-2.1 3.3-.37 6.77-1.62 6.77-7.32 0-1.62-.58-2.95-1.54-3.98.16-.38.67-1.89-.15-3.93 0 0-1.26-.4-4.12 1.52a14.3 14.3 0 0 0-7.5 0C4.6.37 3.34.77 3.34.77c-.82 2.04-.3 3.55-.15 3.93a5.66 5.66 0 0 0-1.54 3.98c0 5.68 3.46 6.96 6.75 7.33-.42.3-.8.84-.93 1.63-.84.38-2.97 1.03-4.28-1.23-.28-.5-1.13-1.64-2.32-1.62-1.26.02-.5.72.02 1.01.64.36 1.1 1.72 1.3 2.22.24.65 1.02 1.9 5.24 1.37V22" />
      </svg>
    );
  }
  if (name === "linkedin") {
    return (
      <svg {...shared}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
        <path d="M2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      </svg>
    );
  }
  if (name === "mail") {
    return (
      <svg {...shared}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    );
  }
  if (name === "sun") {
    return (
      <svg {...shared}>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
    );
  }
  if (name === "moon") {
    return (
      <svg {...shared}>
        <path d="M20.8 15.2A8.8 8.8 0 0 1 8.8 3.2 8.8 8.8 0 1 0 20.8 15.2Z" />
      </svg>
    );
  }
  if (name === "external") {
    return (
      <svg {...shared}>
        <path d="M14 4h6v6M20 4l-9 9" />
        <path d="M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5" />
      </svg>
    );
  }
  if (name === "arrowUp") {
    return (
      <svg {...shared}>
        <path d="M12 19V5M6 11l6-6 6 6" />
      </svg>
    );
  }
  if (name === "spark") {
    return (
      <svg {...shared}>
        <path d="m12 3-1.4 5.6L5 10l5.6 1.4L12 17l1.4-5.6L19 10l-5.6-1.4L12 3Z" />
        <path d="m19 17-.5 2-.5-2-2-.5 2-.5.5-2 .5 2 2 .5-2 .5Z" />
      </svg>
    );
  }
  if (name === "code") {
    return (
      <svg {...shared}>
        <path d="m8 9-3 3 3 3M16 9l3 3-3 3M14 5l-4 14" />
      </svg>
    );
  }
  if (name === "cloud") {
    return (
      <svg {...shared}>
        <path d="M17.5 19H9a7 7 0 1 1 6.6-9.4A4.5 4.5 0 1 1 17.5 19Z" />
      </svg>
    );
  }
  if (name === "layers") {
    return (
      <svg {...shared}>
        <path d="m12 3 9 5-9 5-9-5 9-5Z" />
        <path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
      </svg>
    );
  }
  if (name === "map") {
    return (
      <svg {...shared}>
        <path d="m9 18-6 3V6l6-3 6 3 6-3v15l-6 3-6-3Z" />
        <path d="M9 3v15M15 6v15" />
      </svg>
    );
  }
  if (name === "copy") {
    return (
      <svg {...shared}>
        <rect x="9" y="9" width="11" height="11" rx="2" />
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
      </svg>
    );
  }
  if (name === "arrow") {
    return (
      <svg {...shared}>
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    );
  }
  return null;
}

const projects = [
  {
    number: "01",
    title: "TalentInfra",
    description:
      "A multi-agent hiring workspace that makes screening more transparent, structured, and bias-aware.",
    tags: ["FastAPI", "Next.js", "PostgreSQL", "Azure"],
    href: "https://zynd-hiring-app.azurewebsites.net",
    github: "https://github.com/Abhilash-0322/zynd-aickathon",
    icon: "layers" as IconName,
    tone: "bg-[#d8efeb] dark:bg-[#173b3c]",
  },
  {
    number: "02",
    title: "SolSniff",
    description:
      "A narrative and idea agent for the Solana ecosystem, built to turn noisy signals into useful direction.",
    tags: ["Next.js", "Groq", "Prisma", "Vercel"],
    href: "https://solsniffer.vercel.app/",
    github: "https://github.com/Abhilash-0322/sol-sniff",
    icon: "spark" as IconName,
    tone: "bg-[#e7e2f5] dark:bg-[#302947]",
  },
  {
    number: "03",
    title: "ChainSentinel AI",
    description:
      "Multi-chain smart contract risk and compliance tooling for teams that need signal before they ship.",
    tags: ["FastAPI", "Next.js", "MongoDB", "AI"],
    href: "https://github.com/Abhilash-0322/chainsentinel.ai",
    github: "https://github.com/Abhilash-0322/chainsentinel.ai",
    icon: "cloud" as IconName,
    tone: "bg-[#dbe9f5] dark:bg-[#1b3449]",
  },
  {
    number: "04",
    title: "Quadrant RAG",
    description:
      "A focused retrieval system that lets teams query their own knowledge bases with confidence.",
    tags: ["Python", "LangChain", "Vector DB", "Docker"],
    href: "https://github.com/Abhilash-0322/quadrant-rag",
    github: "https://github.com/Abhilash-0322/quadrant-rag",
    icon: "map" as IconName,
    tone: "bg-[#e8efd9] dark:bg-[#2f3d2c]",
  },
];

const skills = [
  { label: "Backend & APIs", icon: "code" as IconName, items: "Python · FastAPI · Django · Express" },
  { label: "AI Systems", icon: "spark" as IconName, items: "Agents · RAG · LangChain · Groq" },
  { label: "Cloud & DevOps", icon: "cloud" as IconName, items: "AWS · Azure · Docker · CI/CD" },
  { label: "Data & Storage", icon: "layers" as IconName, items: "Postgres · MongoDB · Redis · Vector DBs" },
];

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="h-10 w-10 rounded-full border border-[var(--line)]" aria-hidden="true" />;
  }

  const dark = resolvedTheme === "dark";
  return (
    <button
      type="button"
      onClick={() => setTheme(dark ? "light" : "dark")}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
      aria-label={`Switch to ${dark ? "light" : "dark"} mode`}
    >
      <Icon name={dark ? "sun" : "moon"} size={17} />
    </button>
  );
}

export default function Home() {
  return (
    <main className="page-shell min-h-screen">
      <div className="grain" />
      <div className="content-layer mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <header className="flex items-center justify-between py-6 lg:py-8">
          <a href="#" className="display text-xl font-bold tracking-[-0.08em]">
            AM<span className="text-[var(--accent)]">.</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-[var(--muted)] md:flex">
            <a className="transition hover:text-[var(--ink)]" href="#work">Work</a>
            <a className="transition hover:text-[var(--ink)]" href="#about">About</a>
            <a className="transition hover:text-[var(--ink)]" href="#contact">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              className="hidden rounded-full border border-[var(--line)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--accent)] sm:block"
              href="mailto:abhilash.m.git@gmail.com"
            >
              Let&apos;s talk
            </a>
            <ThemeToggle />
          </div>
        </header>

        <section className="grid items-end gap-10 pb-24 pt-16 md:pb-32 md:pt-24 lg:grid-cols-[1.15fr_.85fr] lg:gap-20">
          <div>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/30 bg-[var(--accent-soft)]/60 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--accent)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
              </span>
              Open to work
            </div>
            <p className="eyebrow mb-5">Backend · AI systems · cloud</p>
            <h1 className="display max-w-4xl text-[clamp(3.65rem,8.5vw,8.8rem)] font-bold leading-[0.88]">
              Building the
              <br />
              <span className="text-[var(--accent)]">quietly</span> powerful.
            </h1>
            <p className="mt-9 max-w-xl text-lg leading-relaxed text-[var(--muted)] md:text-xl">
              I&apos;m Abhilash, a backend and AI systems developer in Delhi NCR. I turn
              complex ideas into dependable APIs, intelligent workflows, and products
              that work beyond the demo.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a
                href="#work"
                className="group inline-flex items-center gap-3 rounded-full bg-[var(--ink)] px-5 py-3.5 text-sm font-bold text-[var(--page)] transition hover:-translate-y-0.5"
              >
                See selected work
                <Icon name="arrow" size={16} />
              </a>
              <a
                href="mailto:abhilash.m.git@gmail.com"
                className="arrow-link inline-flex items-center gap-2 text-sm font-semibold text-[var(--muted)] transition hover:text-[var(--accent)]"
              >
                Start a conversation
                <Icon name="arrow" size={16} />
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[440px] lg:mb-2">
            <div className="glass relative aspect-[0.92] overflow-hidden rounded-[2.5rem] p-5">
              <div className="dot-grid absolute inset-5 rounded-[1.8rem] opacity-70" />
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#b9f2ec]/60 blur-2xl dark:bg-[#1c7d78]/30" />
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#c6dfe0]/60 to-transparent dark:from-[#122733]/70" />
              <div className="absolute left-8 top-8 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.17em] text-[var(--muted)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                Delhi NCR · India
              </div>
              <div className="display absolute bottom-[17%] left-1/2 -translate-x-1/2 text-[11rem] font-bold leading-none text-[var(--ink)]/90 sm:text-[13rem]">
                A<span className="text-[var(--accent)]">.</span>
              </div>
              <div className="absolute bottom-7 left-8 right-8 flex items-end justify-between">
                <div>
                  <p className="display text-2xl font-bold">Abhilash Maurya</p>
                  <p className="mt-1 text-xs text-[var(--muted)]">Engineer · builder · curious human</p>
                </div>
                <a
                  href="https://github.com/Abhilash-0322"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] text-[var(--muted)] transition hover:text-[var(--accent)]"
                  aria-label="Abhilash on GitHub"
                >
                  <Icon name="github" size={18} />
                </a>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 glass hidden rounded-2xl px-4 py-3 sm:block">
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--muted)]">Currently exploring</p>
              <p className="mt-1 text-sm font-semibold">AI × infra × fintech</p>
            </div>
          </div>
        </section>

        <section className="section-rule grid gap-8 py-8 md:grid-cols-[1fr_2fr] md:items-center">
          <p className="max-w-xs text-sm leading-relaxed text-[var(--muted)]">
            From the first architecture sketch to the last deployment log, I care about
            the details that make systems feel effortless.
          </p>
          <div className="grid grid-cols-3 gap-4 md:grid-cols-3 md:gap-8">
            <div>
              <p className="display text-3xl font-bold md:text-4xl">5+</p>
              <p className="mt-1 text-xs uppercase tracking-[0.1em] text-[var(--muted)]">AI MVPs led</p>
            </div>
            <div>
              <p className="display text-3xl font-bold md:text-4xl">6+</p>
              <p className="mt-1 text-xs uppercase tracking-[0.1em] text-[var(--muted)]">Builders mentored</p>
            </div>
            <div>
              <p className="display text-3xl font-bold md:text-4xl">∞</p>
              <p className="mt-1 text-xs uppercase tracking-[0.1em] text-[var(--muted)]">Things to learn</p>
            </div>
          </div>
        </section>

        <section id="work" className="scroll-mt-8 py-24 md:py-32">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="eyebrow mb-4">Selected work</p>
              <h2 className="display max-w-lg text-4xl font-bold leading-[0.95] md:text-6xl">
                Systems with a point of view.
              </h2>
            </div>
            <a
              href="https://github.com/Abhilash-0322"
              target="_blank"
              rel="noreferrer"
              className="arrow-link inline-flex items-center gap-2 text-sm font-semibold text-[var(--muted)] transition hover:text-[var(--accent)]"
            >
              More on GitHub <Icon name="external" size={15} />
            </a>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <article key={project.title} className="project-card glass group rounded-[1.8rem] p-5 sm:p-6">
                <div className={`relative mb-6 flex aspect-[1.75] items-center justify-center overflow-hidden rounded-[1.25rem] ${project.tone}`}>
                  <div className="absolute inset-0 opacity-25" style={{ backgroundImage: "linear-gradient(135deg, transparent 45%, rgba(255,255,255,.7) 46%, transparent 48%)", backgroundSize: "24px 24px" }} />
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-[1.5rem] border border-white/50 bg-white/40 text-[var(--ink)] shadow-lg backdrop-blur-sm transition duration-300 group-hover:scale-110">
                    <Icon name={project.icon} size={34} strokeWidth={1.4} />
                  </div>
                  <span className="absolute left-5 top-5 text-xs font-bold text-[var(--ink)]/50">{project.number}</span>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/50 text-[var(--ink)] transition hover:bg-white"
                    aria-label={`Open ${project.title}`}
                  >
                    <Icon name="external" size={15} />
                  </a>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="display text-2xl font-bold">{project.title}</h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-[var(--muted)]">{project.description}</p>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 text-[var(--muted)] transition hover:text-[var(--accent)]"
                    aria-label={`${project.title} on GitHub`}
                  >
                    <Icon name="github" size={18} />
                  </a>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-[var(--line)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-[var(--muted)]">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="scroll-mt-8 border-t border-[var(--line)] py-24 md:py-32">
          <div className="grid gap-12 lg:grid-cols-[.82fr_1.18fr] lg:gap-24">
            <div>
              <p className="eyebrow mb-4">A little context</p>
              <h2 className="display text-4xl font-bold leading-[0.95] md:text-6xl">Curious by default.</h2>
              <p className="mt-7 max-w-md text-base leading-relaxed text-[var(--muted)]">
                I&apos;m a B.Tech IT student at KIET and an AI/ML coordinator at Innogeeks Club.
                I like working where strong engineering meets an ambiguous problem: shaping
                the architecture, shipping the API, and helping a team move faster.
              </p>
              <p className="mt-4 max-w-md text-base leading-relaxed text-[var(--muted)]">
                Recently, that has meant multi-agent workflows, RAG pipelines, cloud
                deployments, and a lot of learning in public.
              </p>
              <a
                href="mailto:abhilash.m.git@gmail.com"
                className="arrow-link mt-8 inline-flex items-center gap-2 text-sm font-bold text-[var(--accent)]"
              >
                Say hello <Icon name="arrow" size={16} />
              </a>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {skills.map((skill) => (
                <div key={skill.label} className="glass rounded-2xl p-5">
                  <div className="mb-8 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent)]">
                    <Icon name={skill.icon} size={19} />
                  </div>
                  <h3 className="font-bold">{skill.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{skill.items}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-12 border-t border-[var(--line)] py-24 md:grid-cols-[.8fr_1.2fr] md:py-28">
          <div>
            <p className="eyebrow mb-4">The timeline</p>
            <h2 className="display text-4xl font-bold leading-[0.95] md:text-5xl">Learning by shipping.</h2>
          </div>
          <div className="space-y-8">
            <div className="relative border-l border-[var(--line)] pl-6">
              <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-bold">AI Engineer Intern · Spearmint Technologies</h3>
                <span className="text-xs text-[var(--muted)]">Aug 2026</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">Voice and agent features, TTS pipelines, fine-tuning, and data collection with a remote team.</p>
            </div>
            <div className="relative border-l border-[var(--line)] pl-6">
              <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-bold">AI/ML Coordinator · Innogeeks Club</h3>
                <span className="text-xs text-[var(--muted)]">Nov 2023 — present</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">Led 5+ AI and full-stack MVPs, mentored 6+ developers, and coordinated teams through hackathon delivery.</p>
            </div>
            <div className="relative border-l border-[var(--line)] pl-6">
              <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full border border-[var(--accent)] bg-[var(--page)]" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-bold">B.Tech Information Technology · KIET</h3>
                <span className="text-xs text-[var(--muted)]">Expected 2027</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">Building a strong base in systems, software, and the questions that sit between them.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-8 pb-16 pt-8 md:pb-24">
          <div className="glass-strong relative overflow-hidden rounded-[2rem] px-6 py-14 text-center sm:px-12 md:py-20">
            <div className="absolute left-1/2 top-0 h-40 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)]/20 blur-3xl" />
            <div className="relative">
              <p className="eyebrow mb-5">Have a good problem?</p>
              <h2 className="display mx-auto max-w-3xl text-5xl font-bold leading-[0.9] md:text-7xl">
                Let&apos;s make it
                <br />
                <span className="text-[var(--accent)]">work.</span>
              </h2>
              <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-[var(--muted)]">
                I&apos;m open to backend, AI systems, and cloud engineering roles. I&apos;m also
                available for thoughtful freelance builds where the outcome matters.
              </p>
              <a
                href="mailto:abhilash.m.git@gmail.com"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[var(--ink)] px-6 py-4 text-sm font-bold text-[var(--page)] transition hover:-translate-y-0.5"
              >
                <Icon name="mail" size={17} />
                abhilash.m.git@gmail.com
              </a>
            </div>
          </div>
        </section>

        <footer className="flex flex-col gap-6 border-t border-[var(--line)] py-8 text-xs text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Abhilash Maurya. Built with intent.</p>
          <div className="flex items-center gap-5">
            <a className="transition hover:text-[var(--accent)]" href="https://www.linkedin.com/in/abhilash-maurya-b615b9277/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="transition hover:text-[var(--accent)]" href="https://x.com/abhilash_glitch" target="_blank" rel="noreferrer">X / Twitter</a>
            <a className="transition hover:text-[var(--accent)]" href="mailto:abhilash.m.git@gmail.com">Email</a>
            <a className="flex items-center gap-1 transition hover:text-[var(--accent)]" href="#">
              Back to top <Icon name="arrowUp" size={13} />
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
