"use client";

import {
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Cloud,
  Code2,
  ExternalLink,
  Github,
  Globe2,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  Network,
  Server,
  Sparkles,
  Sun,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

const projects = [
  {
    number: "01",
    title: "TalentInfra",
    type: "Multi-agent hiring infrastructure",
    description:
      "A bias-aware recruitment platform that turns messy hiring signals into explainable, human-reviewed decisions.",
    stack: ["FastAPI", "Next.js", "PostgreSQL", "Groq", "Azure"],
    href: "https://zynd-hiring-app.azurewebsites.net",
    github: "https://github.com/Abhilash-0322/zynd-aickathon",
    accent: "bg-[#ead6dc]",
  },
  {
    number: "02",
    title: "SolSniff",
    type: "Narrative intelligence for Solana",
    description:
      "An AI idea agent that reads the pulse of crypto communities and surfaces narratives worth investigating.",
    stack: ["Next.js", "Groq", "Prisma", "Vercel"],
    href: "https://solsniffer.vercel.app/",
    github: "https://github.com/Abhilash-0322/sol-sniff",
    accent: "bg-[#e9dfcb]",
  },
  {
    number: "03",
    title: "ChainSentinel AI",
    type: "Smart contract risk & compliance",
    description:
      "Multi-chain analysis that helps teams understand contract risk before capital, users, and trust are on the line.",
    stack: ["FastAPI", "Next.js", "MongoDB", "AI agents"],
    href: "https://github.com/Abhilash-0322/chainsentinel.ai",
    github: "https://github.com/Abhilash-0322/chainsentinel.ai",
    accent: "bg-[#d7e0da]",
  },
];

const skills = [
  { label: "Backend & APIs", icon: Server, items: "Python · FastAPI · Django · Express" },
  { label: "AI systems", icon: Network, items: "Agents · RAG · LangChain · Vector DBs" },
  { label: "Cloud & delivery", icon: Cloud, items: "AWS · Azure · Docker · CI/CD" },
  { label: "Product surfaces", icon: Code2, items: "Next.js · React · TypeScript · SQL" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/Abhilash-0322", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/abhilash-maurya-b615b9277/", icon: Linkedin },
  { label: "X", href: "https://x.com/abhilash_glitch", icon: Globe2 },
];

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(storedTheme ? storedTheme === "dark" : prefersDark);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? "dark" : "light";
    window.localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleTheme = () => setDarkMode((current) => !current);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen overflow-hidden">
      <div className="page-grid pointer-events-none fixed inset-0 -z-10" />
      <div className="noise fixed inset-0 -z-10" />

      <header className="mx-auto flex max-w-[1240px] items-center justify-between px-6 py-6 lg:px-10">
        <a href="#top" className="display text-xl font-bold tracking-tight" onClick={closeMenu}>
          AM<span className="text-[var(--wine)]">.</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-[var(--ink-soft)] md:flex">
          <a className="underline-link" href="#work">Selected work</a>
          <a className="underline-link" href="#about">About</a>
          <a className="underline-link" href="#contact">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <span className="hidden items-center gap-2 text-xs text-[var(--ink-soft)] sm:flex">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#3b9a65]" />
            Open to work
          </span>
          <button
            aria-label="Toggle color theme"
            className="rounded-full border border-[var(--line)] p-2.5 transition-colors hover:border-[var(--wine)]"
            onClick={toggleTheme}
          >
            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="rounded-full border border-[var(--line)] p-2.5 md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </header>

      {menuOpen && (
        <nav className="mx-6 flex flex-col gap-5 border-y border-[var(--line)] py-5 text-sm text-[var(--ink-soft)] md:hidden">
          <a href="#work" onClick={closeMenu}>Selected work</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
      )}

      <section id="top" className="relative mx-auto max-w-[1240px] px-6 pb-20 pt-20 lg:px-10 lg:pb-32 lg:pt-28">
        <div className="absolute -right-28 top-12 -z-10 h-80 w-80 rounded-full bg-[var(--wine-pale)] opacity-70 blur-3xl" />
        <div className="max-w-4xl">
          <p className="mono mb-7 text-xs uppercase tracking-[0.26em] text-[var(--wine)]">
            Backend · AI systems · Cloud
          </p>
          <h1 className="display max-w-4xl text-5xl leading-[1.02] tracking-[-0.04em] sm:text-7xl lg:text-[6.8rem]">
            I build reliable systems for{" "}
            <em className="font-normal text-[var(--wine)]">ambitious ideas.</em>
          </h1>
          <div className="mt-9 flex max-w-2xl flex-col justify-between gap-8 sm:flex-row sm:items-end">
            <p className="max-w-md text-base leading-7 text-[var(--ink-soft)]">
              I&apos;m Abhilash — a backend and AI systems developer making complex
              products feel simple, shippable, and ready for the real world.
            </p>
            <a className="button-primary w-fit rounded-full px-5 py-3 text-sm font-medium" href="#work">
              See the work <ArrowDownRight size={16} />
            </a>
          </div>
        </div>
        <div className="mt-20 flex items-center gap-4 border-t border-[var(--line)] pt-5 text-xs text-[var(--ink-soft)] sm:mt-28">
          <MapPin size={14} className="text-[var(--wine)]" />
          <span>Delhi NCR, India</span>
          <span className="h-px w-10 bg-[var(--line)]" />
          <span className="mono">currently building</span>
          <span className="h-2 w-2 rounded-full bg-[#3b9a65]" />
          <span>with curiosity</span>
        </div>
      </section>

      <div className="border-y border-[var(--line)] py-4">
        <div className="marquee flex gap-8 text-xs uppercase tracking-[0.22em] text-[var(--ink-soft)]">
          <span>FastAPI</span><span className="text-[var(--wine)]">✦</span>
          <span>AI agents</span><span className="text-[var(--wine)]">✦</span>
          <span>Cloud infrastructure</span><span className="text-[var(--wine)]">✦</span>
          <span>RAG systems</span><span className="text-[var(--wine)]">✦</span>
          <span>FastAPI</span><span className="text-[var(--wine)]">✦</span>
          <span>AI agents</span><span className="text-[var(--wine)]">✦</span>
          <span>Cloud infrastructure</span><span className="text-[var(--wine)]">✦</span>
          <span>RAG systems</span><span className="text-[var(--wine)]">✦</span>
        </div>
      </div>

      <section id="work" className="mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mono mb-4 text-xs uppercase tracking-[0.22em] text-[var(--wine)]">01 / Selected work</p>
            <h2 className="display text-4xl tracking-tight sm:text-5xl">Things I&apos;ve shipped.</h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-[var(--ink-soft)]">
            A few systems, products, and experiments that made it from an idea to the internet.
          </p>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="project-card group flex min-h-[440px] flex-col justify-between rounded-2xl p-6">
              <div>
                <div className={`mb-8 flex h-32 items-end justify-between rounded-xl p-5 ${project.accent}`}>
                  <span className="display text-5xl text-[#52142d]">↗</span>
                  <span className="mono text-xs text-[#52142d]">{project.number}</span>
                </div>
                <p className="mono mb-3 text-[10px] uppercase tracking-[0.18em] text-[var(--wine)]">{project.type}</p>
                <h3 className="display text-3xl">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--ink-soft)]">{project.description}</p>
              </div>
              <div>
                <div className="mt-8 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full border border-[var(--line)] px-2.5 py-1 text-[10px] text-[var(--ink-soft)]">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-7 flex gap-5 text-xs font-medium">
                  <a className="underline-link inline-flex items-center gap-1.5" href={project.href} target="_blank" rel="noreferrer">
                    View project <ArrowUpRight size={14} />
                  </a>
                  <a className="underline-link inline-flex items-center gap-1.5 text-[var(--ink-soft)]" href={project.github} target="_blank" rel="noreferrer">
                    Source <Github size={13} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
        <a className="mt-9 inline-flex items-center gap-2 text-sm text-[var(--ink-soft)] underline decoration-[var(--wine)] underline-offset-4" href="https://github.com/Abhilash-0322" target="_blank" rel="noreferrer">
          More experiments on GitHub <ExternalLink size={14} />
        </a>
      </section>

      <section id="about" className="border-y border-[var(--line)] bg-[var(--canvas-raised)]">
        <div className="mx-auto grid max-w-[1240px] gap-16 px-6 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:px-10 lg:py-32">
          <div>
            <p className="mono mb-4 text-xs uppercase tracking-[0.22em] text-[var(--wine)]">02 / A little context</p>
            <h2 className="display max-w-sm text-4xl leading-tight tracking-tight sm:text-5xl">
              The person behind the systems.
            </h2>
            <div className="mt-10 flex items-center gap-3 text-sm text-[var(--ink-soft)]">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--wine)] text-sm font-semibold text-white">AM</span>
              <span>Abhilash Maurya</span>
              <span className="text-[var(--wine)]">•</span>
              <span>Builder & learner</span>
            </div>
          </div>
          <div className="max-w-2xl">
            <p className="text-xl leading-9 sm:text-2xl">
              I like working at the intersection of <span className="text-[var(--wine)]">strong engineering</span> and
              useful intelligence. The goal is never just a demo — it&apos;s a thoughtful product that holds up when people depend on it.
            </p>
            <p className="mt-8 max-w-xl leading-7 text-[var(--ink-soft)]">
              I&apos;m currently pursuing a B.Tech in Information Technology at KIET and coordinating AI/ML work at Innogeeks Club. Along the way, I&apos;ve led teams, shipped hackathon winners, mentored builders, and earned my AWS Cloud Practitioner certification.
            </p>
            <div className="mt-10 grid gap-4 border-t border-[var(--line)] pt-8 sm:grid-cols-2">
              <div>
                <p className="mono text-3xl text-[var(--wine)]">5+</p>
                <p className="mt-1 text-xs text-[var(--ink-soft)]">AI & full-stack MVPs led</p>
              </div>
              <div>
                <p className="mono text-3xl text-[var(--wine)]">2027</p>
                <p className="mt-1 text-xs text-[var(--ink-soft)]">Expected graduation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mono mb-4 text-xs uppercase tracking-[0.22em] text-[var(--wine)]">03 / What I bring</p>
            <h2 className="display max-w-sm text-4xl tracking-tight sm:text-5xl">A practical toolkit.</h2>
          </div>
          <div className="grid gap-0 sm:grid-cols-2">
            {skills.map(({ label, icon: Icon, items }, index) => (
              <div key={label} className={`border-[var(--line)] py-6 ${index < 2 ? "border-b" : ""} ${index % 2 === 0 ? "sm:border-r sm:pr-8" : "sm:pl-8"}`}>
                <Icon size={20} className="mb-5 text-[var(--wine)]" />
                <h3 className="font-medium">{label}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">{items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-6 pb-24 lg:px-10 lg:pb-32">
        <div className="rounded-2xl bg-[var(--wine-deep)] p-8 text-white sm:p-12 lg:p-16">
          <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-end">
            <div>
              <p className="mono mb-5 text-xs uppercase tracking-[0.22em] text-[#f0afbf]">04 / Experience</p>
              <h2 className="display max-w-xl text-4xl leading-tight sm:text-5xl">
                Good systems are built by good teams.
              </h2>
            </div>
            <div className="max-w-md space-y-7">
              <div className="border-b border-white/20 pb-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-medium">AI Engineer Intern</p>
                    <p className="mt-1 text-sm text-white/65">Spearmint Technologies · Remote</p>
                  </div>
                  <span className="mono text-[10px] text-white/55">AUG 2026</span>
                </div>
                <p className="mt-3 text-sm leading-6 text-white/70">Voice, fine-tuning, data collection, and agent features for a growing AI product.</p>
              </div>
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-medium">AI/ML Coordinator</p>
                    <p className="mt-1 text-sm text-white/65">Innogeeks Club, KIET</p>
                  </div>
                  <span className="mono text-[10px] text-white/55">2023—NOW</span>
                </div>
                <p className="mt-3 text-sm leading-6 text-white/70">Leading builders through architecture, backend, deployment, and hackathon delivery.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-[var(--line)]">
        <div className="mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-32">
          <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-end">
            <div>
              <p className="mono mb-5 text-xs uppercase tracking-[0.22em] text-[var(--wine)]">05 / Let&apos;s talk</p>
              <h2 className="display max-w-3xl text-5xl leading-[1.05] tracking-tight sm:text-7xl">
                Have a problem worth <em className="font-normal text-[var(--wine)]">solving?</em>
              </h2>
            </div>
            <a className="button-primary w-fit rounded-full px-6 py-4 text-sm font-medium" href="mailto:abhilash.m.git@gmail.com">
              Start a conversation <Mail size={16} />
            </a>
          </div>
          <div className="mt-20 flex flex-col justify-between gap-8 border-t border-[var(--line)] pt-6 sm:flex-row sm:items-center">
            <a className="text-sm underline decoration-[var(--wine)] underline-offset-4" href="mailto:abhilash.m.git@gmail.com">abhilash.m.git@gmail.com</a>
            <div className="flex gap-5">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a key={label} aria-label={label} className="text-[var(--ink-soft)] transition-colors hover:text-[var(--wine)]" href={href} target="_blank" rel="noreferrer">
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-[1240px] flex-col justify-between gap-3 border-t border-[var(--line)] px-6 py-6 text-xs text-[var(--ink-soft)] sm:flex-row lg:px-10">
        <span>© {new Date().getFullYear()} Abhilash Maurya</span>
        <span className="mono">designed & built with intent</span>
      </footer>
    </main>
  );
}
