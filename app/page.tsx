"use client";

import {
  ArrowDown,
  ArrowUpRight,
  Check,
  CloudCog,
  Code2,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Moon,
  ServerCog,
  ShieldCheck,
  Sun,
  Terminal,
  Twitter,
  Zap
} from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const projects = [
  {
    number: "01",
    name: "TalentInfra",
    type: "Multi-agent hiring infrastructure",
    description:
      "A bias-aware hiring pipeline where specialist agents anonymize profiles, verify skills, match candidates, and issue verifiable credentials.",
    stack: ["FastAPI", "Next.js", "PostgreSQL", "Groq", "Azure"],
    href: "https://github.com/Abhilash-0322/zynd-aickathon",
    live: "https://zynd-hiring-app.azurewebsites.net",
    featured: true
  },
  {
    number: "02",
    name: "SolSniff",
    type: "Solana narrative intelligence",
    description:
      "An autonomous agent that combines on-chain, GitHub, social, and news signals to surface emerging Solana narratives and grounded build ideas.",
    stack: ["Next.js", "Groq", "Prisma", "Vercel"],
    href: "https://github.com/Abhilash-0322/sol-sniff",
    live: "https://solsniffer.vercel.app/",
    featured: false
  },
  {
    number: "03",
    name: "ChainSentinel AI",
    type: "Multi-chain security intelligence",
    description:
      "Contract analysis, risk scoring, compliance assessment, and real-time monitoring across Ethereum, Solana, and Aptos.",
    stack: ["Python", "FastAPI", "MongoDB", "WebSockets"],
    href: "https://github.com/Abhilash-0322/chainsentinel.ai",
    live: "",
    featured: false
  },
  {
    number: "04",
    name: "Quadrant RAG",
    type: "Knowledge retrieval system",
    description:
      "A production-minded RAG foundation with document ingestion, chunking, embeddings, vector retrieval, and low-latency inference.",
    stack: ["FastAPI", "LangChain", "Vector DB", "Docker"],
    href: "https://github.com/Abhilash-0322/quadrant-rag",
    live: "",
    featured: false
  },
  {
    number: "05",
    name: "Zen Heaven",
    type: "AI wellness & safety flows",
    description:
      "Sentiment-aware recommendations and human-safety escalation flows, with Twilio automation behind a calm user experience.",
    stack: ["FastAPI", "React", "LangChain", "Twilio"],
    href: "https://github.com/Abhilash-0322/HackHaven2.0",
    live: "https://hack-haven2-0.vercel.app/",
    featured: false
  },
  {
    number: "06",
    name: "Resume Analyzer",
    type: "Career feedback tool",
    description:
      "A free AI tool that turns a resume into clear, actionable feedback for stronger applications.",
    stack: ["Python", "FastAPI", "AI", "Vercel"],
    href: "https://github.com/Abhilash-0322/resume-analyzer",
    live: "https://resume-analyzer-pulse.vercel.app",
    featured: false
  }
] as const;

const capabilities = [
  {
    icon: ServerCog,
    title: "Backend & APIs",
    description: "FastAPI services, event-driven systems, auth boundaries, and real-time channels built to stay boring in production.",
    tools: ["Python", "FastAPI", "Django", "Node.js", "Express"]
  },
  {
    icon: Zap,
    title: "AI systems",
    description: "Agent workflows and RAG pipelines that connect models to useful data, clear evaluation, and a real user outcome.",
    tools: ["LangChain", "RAG", "AI agents", "Groq", "Prompt design"]
  },
  {
    icon: CloudCog,
    title: "Cloud & delivery",
    description: "Containers, CI/CD, and cloud deployment patterns that make a project easier to ship, observe, and hand over.",
    tools: ["Docker", "AWS", "Azure", "GitHub Actions", "Linux"]
  }
] as const;

const profiles = [
  ["LeetCode", "Abhilash_Maurya", "https://leetcode.com/u/Abhilash_Maurya/"],
  ["Codeforces", "mauryaabhi2003", "https://codeforces.com/profile/mauryaabhi2003"],
  ["GeeksForGeeks", "mauryaabqern", "https://www.geeksforgeeks.org/profile/mauryaabqern"],
  ["HackerRank", "abhilash_0322", "https://www.hackerrank.com/profile/abhilash_0322"]
] as const;

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <span className="theme-button" aria-hidden />;
  }

  const isDark = resolvedTheme === "dark";
  return (
    <button
      className="theme-button"
      type="button"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? <Sun size={15} /> : <Moon size={15} />}
    </button>
  );
}

function SectionLabel({ children }: { children: string }) {
  return <p className="eyebrow">{children}</p>;
}

export default function Home() {
  return (
    <main>
      <header className="sticky top-0 z-50 border-b hairline bg-[var(--background)]/80 backdrop-blur-xl">
        <div className="container flex h-[72px] items-center justify-between">
          <a href="#top" className="display text-lg font-bold tracking-[-0.08em]">
            AM<span className="copper-text">.</span>
          </a>
          <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
            <a className="nav-link" href="#work">Work</a>
            <a className="nav-link" href="#about">About</a>
            <a className="nav-link" href="#experience">Experience</a>
            <a className="nav-link" href="#contact">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <span className="hidden items-center gap-2 text-xs text-[var(--muted)] sm:flex">
              <span className="status-dot" />
              Open to the right build
            </span>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden border-b hairline">
        <div className="container relative grid min-h-[650px] items-center py-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div className="relative z-10">
            <SectionLabel>Backend · AI systems · Cloud</SectionLabel>
            <h1 className="display mt-6 max-w-3xl text-[clamp(3.4rem,8vw,7.6rem)] font-semibold leading-[0.87] tracking-[-0.09em]">
              Systems
              <br />
              <span className="copper-gradient">forged</span> to
              <br />
              <span className="text-[0.72em]">ship.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              I&apos;m <span className="font-semibold text-[var(--foreground)]">Abhilash Maurya</span> — a backend and AI systems developer building FastAPI services, agent workflows, and cloud infrastructure that hold up beyond the demo.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a className="button-primary" href="#work">
                Explore selected work <ArrowUpRight size={16} />
              </a>
              <a className="button-ghost" href="mailto:abhilash.m.git@gmail.com">
                Start a conversation <Mail size={15} />
              </a>
            </div>
            <div className="mt-14 flex flex-wrap gap-x-8 gap-y-4 text-xs text-[var(--muted)]">
              <span className="flex items-center gap-2"><MapPin size={14} className="copper-text" /> Delhi NCR, India</span>
              <span className="flex items-center gap-2"><ShieldCheck size={14} className="copper-text" /> AWS Certified Cloud Practitioner</span>
            </div>
          </div>

          <div className="relative hidden h-[520px] lg:block" aria-hidden="true">
            <div className="hero-orbit">
              <span className="orbit-label">build / measure / refine</span>
              <span className="orbit-label">production gravity</span>
              <span className="orbit-core" />
            </div>
            <div className="glass absolute right-0 top-1/2 w-[300px] -translate-y-1/2 overflow-hidden rounded-sm">
              <div className="flex items-center gap-2 border-b hairline px-4 py-3">
                <span className="h-2 w-2 rounded-full bg-[#d46d57]" />
                <span className="h-2 w-2 rounded-full bg-[#d9a955]" />
                <span className="h-2 w-2 rounded-full bg-[#77aa71]" />
                <span className="mono ml-auto text-[9px] text-[var(--muted)]">forge.ts</span>
              </div>
              <div className="mono space-y-3 px-5 py-6 text-[11px] leading-relaxed text-[var(--muted)]">
                <p><span className="copper-text">01</span> <span className="text-[#b783d1]">const</span> mission = <span className="text-[#91b98a]">&quot;useful AI&quot;</span>;</p>
                <p><span className="copper-text">02</span> <span className="text-[#b783d1]">await</span> systems.<span className="text-[#d6a15f]">ship</span>({"{"}</p>
                <p className="pl-5">reliability: <span className="text-[#91b98a]">true</span>,</p>
                <p className="pl-5">latency: <span className="text-[#91b98a]">&quot;low&quot;</span>,</p>
                <p className="pl-5">impact: <span className="text-[#91b98a]">&quot;real&quot;</span></p>
                <p>{"});"}</p>
                <p className="pt-3 text-[#77aa71]"><Check size={12} className="mr-1 inline" /> deploy ready</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container flex items-center gap-3 pb-7 text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">
          <ArrowDown size={13} className="copper-text" /> Scroll to inspect the forge
        </div>
      </section>

      <section id="about" className="section">
        <div className="container grid gap-16 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <SectionLabel>The operator</SectionLabel>
            <h2 className="display mt-5 text-4xl font-semibold leading-tight tracking-[-0.06em] sm:text-5xl">
              Calm surface.
              <br />
              <span className="copper-text">Deep systems.</span>
            </h2>
          </div>
          <div>
            <p className="max-w-2xl text-xl leading-9 tracking-[-0.02em] sm:text-2xl">
              I work at the intersection of backend engineering, applied AI, and delivery. The goal is simple: turn messy problems into dependable systems people can actually use.
            </p>
            <div className="mt-10 grid gap-7 border-t hairline pt-7 sm:grid-cols-3">
              <div><p className="display text-4xl font-semibold copper-text">5+</p><p className="mt-2 text-sm text-[var(--muted)]">AI & full-stack MVPs led</p></div>
              <div><p className="display text-4xl font-semibold copper-text">6+</p><p className="mt-2 text-sm text-[var(--muted)]">Developers mentored</p></div>
              <div><p className="display text-4xl font-semibold copper-text">2027</p><p className="mt-2 text-sm text-[var(--muted)]">B.Tech IT graduation</p></div>
            </div>
          </div>
        </div>
      </section>

      <section id="capabilities" className="border-y hairline bg-[var(--surface)]/30">
        <div className="container grid divide-y hairline md:grid-cols-3 md:divide-x md:divide-y-0">
          {capabilities.map(({ icon: Icon, title, description, tools }) => (
            <article key={title} className="py-10 md:px-8 md:first:pl-0 md:last:pr-0">
              <Icon size={22} className="copper-text" strokeWidth={1.5} />
              <h3 className="display mt-6 text-xl font-semibold">{title}</h3>
              <p className="mt-3 min-h-[78px] text-sm leading-7 text-[var(--muted)]">{description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {tools.map((tool) => <span className="tag" key={tool}>{tool}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="work" className="section">
        <div className="container">
          <div className="section-heading">
            <SectionLabel>Selected work</SectionLabel>
            <h2>Proof, in the wild.</h2>
            <p>Projects where the interesting part was not adding AI — it was making the whole system useful, observable, and ready to leave the laptop.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <article className={`project-card flex flex-col justify-between p-7 sm:p-8 ${project.featured ? "md:col-span-2 md:min-h-[330px]" : ""}`} key={project.name}>
                <div>
                  <div className="flex items-center justify-between">
                    <span className="project-index">{project.number} / 0{projects.length}</span>
                    <a href={project.href} target="_blank" rel="noreferrer" aria-label={`${project.name} on GitHub`} className="text-[var(--muted)] transition-colors hover:text-[var(--copper-bright)]"><Github size={17} /></a>
                  </div>
                  <p className="mono mt-10 text-[10px] uppercase tracking-[0.16em] text-[var(--copper-bright)]">{project.type}</p>
                  <h3 className="display mt-3 text-3xl font-semibold tracking-[-0.06em] sm:text-4xl">{project.name}</h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--muted)]">{project.description}</p>
                </div>
                <div className="mt-8 flex flex-wrap items-end justify-between gap-5">
                  <div className="flex flex-wrap gap-2">{project.stack.map((tool) => <span className="tag" key={tool}>{tool}</span>)}</div>
                  {project.live && <a className="mono inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.12em] copper-text" href={project.live} target="_blank" rel="noreferrer">Live system <ExternalLink size={12} /></a>}
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 flex justify-end">
            <a className="inline-flex items-center gap-2 text-sm font-semibold copper-text hover:underline" href="https://github.com/Abhilash-0322" target="_blank" rel="noreferrer">See more on GitHub <ArrowUpRight size={15} /></a>
          </div>
        </div>
      </section>

      <section id="experience" className="section border-t hairline">
        <div className="container grid gap-16 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="section-heading mb-0">
            <SectionLabel>Experience</SectionLabel>
            <h2>Built with people, not just code.</h2>
            <p>Technical depth gets better when it is shared. I enjoy the architecture review, the hard handoff, and the moment a team starts moving faster together.</p>
          </div>
          <div className="timeline">
            <article className="timeline-item">
              <p className="timeline-date">AUG 2026 · PART-TIME / REMOTE</p>
              <h3 className="display text-2xl font-semibold tracking-[-0.04em]">AI Engineer Intern <span className="text-[var(--muted)]">@ Spearmint Technologies</span></h3>
              <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--muted)]">Worked on voice and agent features across text-to-speech pipelines, fine-tuning, web scraping, and Hermes-based agent development.</p>
            </article>
            <article className="timeline-item">
              <p className="timeline-date">NOV 2023 — PRESENT · KIET</p>
              <h3 className="display text-2xl font-semibold tracking-[-0.04em]">AI/ML Coordinator <span className="text-[var(--muted)]">@ Innogeeks Club</span></h3>
              <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--muted)]">Led 5+ AI and full-stack MVPs, mentored 6+ developers, and coordinated agile teams of 3–6 across hackathon builds — from API planning through deployment.</p>
            </article>
            <article className="timeline-item">
              <p className="timeline-date">EXPECTED 2027 · GHAZIABAD</p>
              <h3 className="display text-2xl font-semibold tracking-[-0.04em]">B.Tech in Information Technology <span className="text-[var(--muted)]">@ KIET</span></h3>
              <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--muted)]">Coursework across data structures, operating systems, databases, and computer networks. Building in public while finishing the degree.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section border-y hairline bg-[var(--surface)]/30">
        <div className="container grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionLabel>Recognition</SectionLabel>
            <h2 className="display mt-5 max-w-md text-4xl font-semibold leading-tight tracking-[-0.06em]">Signals that compound.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["01", "MLH Solana track winning team", "Brainwave Hackathon · AIMS DTU"],
              ["02", "1st place · solo AI agent track", "500+ participant field"],
              ["03", "Co-inventor · IoT-AI telemedicine patent", "India 202511018153A · Apr 2025"],
              ["04", "Open source contributor", "GSSOC · Hacktoberfest · merged PRs"]
            ].map(([number, title, meta]) => (
              <div className="glass p-6" key={number}>
                <span className="mono text-xs copper-text">{number}</span>
                <h3 className="mt-8 text-sm font-semibold leading-6">{title}</h3>
                <p className="mt-2 text-xs leading-5 text-[var(--muted)]">{meta}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="flex flex-col justify-between gap-8 border-b hairline pb-12 sm:flex-row sm:items-end">
            <div>
              <SectionLabel>Outside the forge</SectionLabel>
              <h2 className="display mt-5 text-4xl font-semibold tracking-[-0.06em] sm:text-5xl">Keep the edge sharp.</h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-[var(--muted)]">Competitive programming, open source, and the daily reps that make the next hard system feel a little less hard.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            {profiles.map(([name, handle, href]) => (
              <a className="group border-b hairline p-6 first:pl-0 sm:even:border-l sm:even:pl-6 lg:border-b-0 lg:border-l lg:first:border-l-0" href={href} key={name} target="_blank" rel="noreferrer">
                <div className="flex items-center justify-between text-sm font-semibold"><span>{name}</span><ArrowUpRight size={15} className="text-[var(--muted)] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--copper-bright)]" /></div>
                <p className="mono mt-4 text-xs text-[var(--muted)]">{handle}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden border-t hairline py-28">
        <div className="container relative z-10">
          <SectionLabel>Contact</SectionLabel>
          <h2 className="display mt-6 max-w-4xl text-[clamp(3rem,8vw,7.2rem)] font-semibold leading-[0.9] tracking-[-0.09em]">
            Have a hard problem?
            <br />
            <span className="copper-gradient">Let&apos;s forge it.</span>
          </h2>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a className="button-primary" href="mailto:abhilash.m.git@gmail.com">abhilash.m.git@gmail.com <ArrowUpRight size={16} /></a>
            <a className="button-ghost" href="tel:+917880764235">+91 78807 64235</a>
          </div>
        </div>
      </section>

      <footer className="border-t hairline py-8">
        <div className="container flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-4">
            <span className="footer-mark">AM</span>
            <div><p className="text-sm font-semibold">Abhilash Maurya</p><p className="mono mt-1 text-[10px] text-[var(--muted)]">Built for useful work · {new Date().getFullYear()}</p></div>
          </div>
          <div className="flex items-center gap-4 text-[var(--muted)]">
            <a href="https://github.com/Abhilash-0322" target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-[var(--copper-bright)]"><Github size={16} /></a>
            <a href="https://www.linkedin.com/in/abhilash-maurya-b615b9277/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-[var(--copper-bright)]"><Linkedin size={16} /></a>
            <a href="https://x.com/abhilash_glitch" target="_blank" rel="noreferrer" aria-label="X" className="transition-colors hover:text-[var(--copper-bright)]"><Twitter size={16} /></a>
            <a href="/abhilash_python.pdf" download className="ml-2 inline-flex items-center gap-2 border-l hairline pl-4 text-xs font-semibold hover:text-[var(--copper-bright)]"><Download size={14} /> Resume</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
