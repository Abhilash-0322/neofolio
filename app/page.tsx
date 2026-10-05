"use client";

import { useState } from "react";

type Project = {
  number: string;
  title: string;
  description: string;
  stack: string[];
  href: string;
  live?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    number: "01",
    title: "TalentInfra",
    description:
      "A multi-agent, bias-aware hiring workspace that turns candidate signals into explainable, fair shortlists.",
    stack: ["FastAPI", "Next.js", "PostgreSQL", "Groq", "Azure"],
    href: "https://github.com/Abhilash-0322/zynd-aickathon",
    live: "https://zynd-hiring-app.azurewebsites.net",
    featured: true,
  },
  {
    number: "02",
    title: "ChainSentinel AI",
    description:
      "Multi-chain security intelligence for smart-contract risk, compliance scoring, and real-time alerts.",
    stack: ["Python", "FastAPI", "MongoDB", "WebSockets", "Docker"],
    href: "https://github.com/Abhilash-0322/chainsentinel.ai",
  },
  {
    number: "03",
    title: "Quadrant RAG",
    description:
      "A production-minded knowledge layer with document ingestion, embeddings, retrieval, and low-latency inference.",
    stack: ["FastAPI", "LangChain", "Vector DB", "Docker"],
    href: "https://github.com/Abhilash-0322/quadrant-rag",
  },
  {
    number: "04",
    title: "SolSniff",
    description:
      "A Solana narrative and idea agent that helps founders explore emerging signals with structured AI analysis.",
    stack: ["Next.js", "Groq", "Prisma", "Vercel"],
    href: "https://github.com/Abhilash-0322/sol-sniff",
    live: "https://solsniffer.vercel.app/",
  },
  {
    number: "05",
    title: "Zen Heaven",
    description:
      "A mental wellness platform pairing sentiment-aware recommendations with Twilio-powered safety escalation flows.",
    stack: ["FastAPI", "React", "LangChain", "Twilio"],
    href: "https://github.com/Abhilash-0322/HackHaven2.0",
    live: "https://hack-haven2-0.vercel.app/",
  },
  {
    number: "06",
    title: "Resume Analyzer",
    description:
      "A free AI feedback tool that turns a resume into specific, practical next steps for a stronger application.",
    stack: ["Next.js", "AI", "Vercel"],
    href: "https://github.com/Abhilash-0322/resume-analyzer",
    live: "https://resume-analyzer-pulse.vercel.app",
  },
];

const skills = [
  ["01", "Backend", "Python · FastAPI · Django · Express.js"],
  ["02", "AI systems", "LangChain · RAG · Agents · LLM workflows"],
  ["03", "Cloud & DevOps", "AWS · Azure · Docker · GitHub Actions"],
  ["04", "Data", "PostgreSQL · MongoDB · Redis · Vector DBs"],
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" fill="none" height="17" viewBox="0 0 24 24" width="17">
      <path d="M5 19 19 5M8 5h11v11" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg aria-hidden="true" fill="currentColor" height="18" viewBox="0 0 24 24" width="18">
      <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.23 1.83 1.23 1.07 1.82 2.8 1.3 3.48.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.4 11.4 0 0 1 6.01 0c2.29-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.13 3.18.76.84 1.22 1.91 1.22 3.22 0 4.6-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg aria-hidden="true" fill="currentColor" height="18" viewBox="0 0 24 24" width="18">
      <path d="M5.2 3.6A2.1 2.1 0 1 1 1 3.6a2.1 2.1 0 0 1 4.2 0ZM1.3 22.4h3.9V8H1.3v14.4ZM7.6 8h3.7v2h.05c.52-1 1.8-2.28 3.72-2.28 3.98 0 4.72 2.62 4.72 6.03v8.65h-3.87v-7.67c0-1.83-.04-4.18-2.55-4.18-2.55 0-2.94 1.99-2.94 4.04v7.81H7.6V8Z" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return open ? (
    <svg aria-hidden="true" fill="none" height="20" viewBox="0 0 24 24" width="20">
      <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    </svg>
  ) : (
    <svg aria-hidden="true" fill="none" height="20" viewBox="0 0 24 24" width="20">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    </svg>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="site-shell">
      <div className="content-layer">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 lg:px-8" aria-label="Main navigation">
          <a className="font-mono text-sm font-semibold tracking-tight text-white" href="#top" onClick={closeMenu}>
            <span className="text-indigo-300">am</span><span className="text-slate-500">/</span><span>dev</span>
          </a>
          <div className="hidden items-center gap-8 text-xs text-slate-400 md:flex">
            <a className="transition-colors hover:text-white" href="#work">Selected work</a>
            <a className="transition-colors hover:text-white" href="#about">About</a>
            <a className="transition-colors hover:text-white" href="#contact">Contact</a>
            <a className="rounded-full border border-indigo-300/35 px-4 py-2 text-indigo-200 transition-colors hover:border-indigo-200 hover:bg-indigo-300/10" href="mailto:abhilash.m.git@gmail.com">
              Let&apos;s talk <span className="ml-1">↗</span>
            </a>
          </div>
          <button
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
            className="rounded-md border border-white/10 p-2 text-slate-300 md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            <MenuIcon open={menuOpen} />
          </button>
        </nav>

        {menuOpen && (
          <div className="mx-6 border border-white/10 bg-[#0d1226] p-4 md:hidden">
            <div className="flex flex-col gap-4 text-sm text-slate-300">
              <a href="#work" onClick={closeMenu}>Selected work</a>
              <a href="#about" onClick={closeMenu}>About</a>
              <a href="#contact" onClick={closeMenu}>Contact</a>
              <a className="text-indigo-200" href="mailto:abhilash.m.git@gmail.com">Let&apos;s talk ↗</a>
            </div>
          </div>
        )}

        <section className="relative mx-auto max-w-6xl px-6 pb-24 pt-20 lg:px-8 lg:pb-36 lg:pt-32" id="top">
          <div className="hero-orb" />
          <div className="max-w-4xl">
            <div className="eyebrow mb-8">Backend · AI systems · Cloud</div>
            <h1 className="display-font max-w-4xl text-5xl font-semibold leading-[0.98] text-white sm:text-7xl lg:text-[6.7rem]">
              Building the
              <br />
              <span className="bg-gradient-to-r from-indigo-200 via-indigo-400 to-violet-300 bg-clip-text text-transparent">infrastructure</span>
              <br />
              behind better ideas.
            </h1>
            <div className="mt-10 flex max-w-2xl flex-col justify-between gap-8 border-t border-white/10 pt-7 sm:flex-row sm:items-end">
              <p className="max-w-lg text-base leading-7 text-slate-400">
                I&apos;m Abhilash Maurya — a backend and AI systems developer focused on turning ambitious products into reliable, shipped systems.
              </p>
              <a className="group flex shrink-0 items-center gap-3 text-sm font-medium text-white" href="#work">
                Explore my work
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-indigo-300/40 text-indigo-200 transition-all group-hover:border-indigo-200 group-hover:bg-indigo-300/10">
                  ↓
                </span>
              </a>
            </div>
          </div>
          <div className="mt-20 grid grid-cols-2 gap-6 border-y border-white/10 py-6 sm:grid-cols-4 sm:gap-0">
            <div>
              <div className="stat-number text-3xl font-semibold">5+</div>
              <div className="mt-1 text-xs text-slate-500">AI & full-stack MVPs</div>
            </div>
            <div>
              <div className="stat-number text-3xl font-semibold">6+</div>
              <div className="mt-1 text-xs text-slate-500">Developers mentored</div>
            </div>
            <div>
              <div className="stat-number text-3xl font-semibold">93%</div>
              <div className="mt-1 text-xs text-slate-500">Sentiment precision</div>
            </div>
            <div>
              <div className="stat-number text-3xl font-semibold">01</div>
              <div className="mt-1 text-xs text-slate-500">Patent co-invented</div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32" id="work">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <div className="eyebrow mb-4">Selected work</div>
              <h2 className="display-font text-4xl font-semibold text-white sm:text-5xl">Systems that ship.</h2>
            </div>
            <span className="hidden pb-1 font-mono text-xs text-slate-600 sm:block">/ 2024—26</span>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <article className={`project-card glass-panel group rounded-2xl p-6 ${project.featured ? "md:col-span-2 md:p-8" : ""}`} key={project.title}>
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs text-indigo-300/70">{project.number}</span>
                  <a aria-label={`Open ${project.title} on GitHub`} className="project-arrow" href={project.href} rel="noreferrer" target="_blank">
                    <ArrowIcon />
                  </a>
                </div>
                <div className={`mt-10 ${project.featured ? "max-w-2xl" : ""}`}>
                  <h3 className="text-2xl font-medium tracking-tight text-white">{project.title}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">{project.description}</p>
                </div>
                <div className="mt-7 flex flex-wrap gap-2">
                  {project.stack.map((item) => <span className="tag" key={item}>{item}</span>)}
                </div>
                {project.live && (
                  <a className="mt-6 inline-block text-xs text-indigo-200 underline decoration-indigo-300/30 underline-offset-4 hover:decoration-indigo-200" href={project.live} rel="noreferrer" target="_blank">
                    View live project ↗
                  </a>
                )}
              </article>
            ))}
          </div>
          <div className="mt-8 flex items-center gap-5">
            <div className="line-decoration" />
            <a className="shrink-0 text-sm text-slate-400 transition-colors hover:text-white" href="https://github.com/Abhilash-0322" rel="noreferrer" target="_blank">
              More on GitHub <span className="text-indigo-300">↗</span>
            </a>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#0a0e20]/60" id="about">
          <div className="mx-auto grid max-w-6xl gap-16 px-6 py-24 lg:grid-cols-[1fr_1.15fr] lg:px-8 lg:py-32">
            <div>
              <div className="eyebrow mb-4">A little context</div>
              <h2 className="display-font max-w-md text-4xl font-semibold leading-tight text-white sm:text-5xl">
                Curious by default. Reliable by design.
              </h2>
              <p className="mt-7 max-w-md text-sm leading-7 text-slate-400">
                I enjoy the space where product thinking meets systems engineering: designing clear APIs, orchestrating useful agents, and making the cloud feel a little less mysterious.
              </p>
              <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
                Currently studying Information Technology at KIET and coordinating AI/ML work at Innogeeks Club. I&apos;m open to cloud, AI systems, backend, and fintech opportunities.
              </p>
              <div className="mt-8 flex items-center gap-5">
                <a className="social-link" aria-label="GitHub" href="https://github.com/Abhilash-0322" rel="noreferrer" target="_blank"><GithubIcon /></a>
                <a className="social-link" aria-label="LinkedIn" href="https://www.linkedin.com/in/abhilash-maurya-b615b9277/" rel="noreferrer" target="_blank"><LinkedinIcon /></a>
                <a className="social-link font-mono text-sm" aria-label="X" href="https://x.com/abhilash_glitch" rel="noreferrer" target="_blank">𝕏</a>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {skills.map(([number, title, copy]) => (
                <div className="glass-panel rounded-xl p-5" key={title}>
                  <div className="font-mono text-xs text-indigo-300/60">{number}</div>
                  <h3 className="mt-8 text-lg font-medium text-white">{title}</h3>
                  <p className="mt-2 text-xs leading-5 text-slate-500">{copy}</p>
                </div>
              ))}
              <div className="rounded-xl border border-emerald-300/20 bg-emerald-300/[0.04] p-5 sm:col-span-2">
                <div className="flex items-center gap-3">
                  <span className="status-dot" />
                  <span className="font-mono text-xs uppercase tracking-[0.12em] text-emerald-200">Open to work</span>
                </div>
                <p className="mt-4 max-w-lg text-sm leading-6 text-slate-400">Looking for teams building meaningful products with thoughtful engineering.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <div className="eyebrow mb-4">Experience</div>
              <h2 className="display-font text-4xl font-semibold text-white sm:text-5xl">A record of building.</h2>
            </div>
            <div className="relative border-l border-indigo-300/20 pl-7">
              <div className="timeline-dot" />
              <div className="absolute bottom-0 left-0 top-0 timeline-line" />
              <div className="relative">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="text-xl font-medium text-white">AI/ML Coordinator</h3>
                  <span className="font-mono text-xs text-indigo-300">2023 — present</span>
                </div>
                <p className="mt-1 text-sm text-slate-500">Innogeeks Club · KIET</p>
                <ul className="mt-7 space-y-4 text-sm leading-6 text-slate-400">
                  <li className="flex gap-3"><span className="text-indigo-300">→</span><span>Led 5+ AI and full-stack MVPs across architecture, backend, and deployment.</span></li>
                  <li className="flex gap-3"><span className="text-indigo-300">→</span><span>Mentored 6+ developers in Python, FastAPI, ML, and hackathon delivery.</span></li>
                  <li className="flex gap-3"><span className="text-indigo-300">→</span><span>Coordinated agile teams of 3–6 to deliver production-ready prototypes.</span></li>
                </ul>
              </div>
              <div className="relative mt-14 border-t border-white/10 pt-8">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="text-xl font-medium text-white">AI Engineer Intern</h3>
                  <span className="font-mono text-xs text-indigo-300">Aug 2026</span>
                </div>
                <p className="mt-1 text-sm text-slate-500">Spearmint Technologies · Remote</p>
                <p className="mt-7 text-sm leading-6 text-slate-400">Worked on voice and agent features spanning text-to-speech pipelines, fine-tuning, data collection, and Hermes-based agent workflows.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-28 lg:px-8 lg:pb-36" id="contact">
          <div className="relative overflow-hidden rounded-2xl border border-indigo-300/20 bg-gradient-to-br from-indigo-500/15 via-[#111735] to-[#0d1127] px-6 py-16 sm:px-12 sm:py-20">
            <div className="absolute -right-24 -top-28 h-72 w-72 rounded-full bg-indigo-400/10 blur-3xl" />
            <div className="relative max-w-2xl">
              <div className="eyebrow mb-5">Have a good problem?</div>
              <h2 className="display-font text-4xl font-semibold leading-tight text-white sm:text-6xl">Let&apos;s build something that lasts.</h2>
              <p className="mt-6 max-w-lg text-sm leading-6 text-slate-400">Whether you&apos;re shaping an AI product, hardening a backend, or figuring out what to ship next — I&apos;d love to hear about it.</p>
              <a className="mt-9 inline-flex items-center gap-3 rounded-full bg-indigo-300 px-5 py-3 text-sm font-semibold text-[#10142c] transition-colors hover:bg-indigo-200" href="mailto:abhilash.m.git@gmail.com">
                abhilash.m.git@gmail.com <span>↗</span>
              </a>
            </div>
          </div>
        </section>

        <footer className="mx-auto flex max-w-6xl flex-col gap-4 border-t border-white/10 px-6 py-8 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <span>© {new Date().getFullYear()} Abhilash Maurya</span>
          <span className="font-mono">Built with Next.js · Tailwind · intent</span>
          <a className="transition-colors hover:text-slate-300" href="#top">Back to top ↑</a>
        </footer>
      </div>
    </main>
  );
}
