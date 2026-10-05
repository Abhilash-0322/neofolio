"use client";

import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Cloud,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Moon,
  Server,
  ShieldCheck,
  Sun,
  Twitter,
  Workflow
} from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const projects = [
  {
    number: "01",
    name: "TalentInfra",
    category: "Multi-agent hiring infrastructure",
    description:
      "A bias-aware hiring pipeline where specialist agents anonymize profiles, verify skills, match candidates, and issue verifiable credentials.",
    stack: ["FastAPI", "Next.js", "PostgreSQL", "Groq", "Azure"],
    github: "https://github.com/Abhilash-0322/zynd-aickathon",
    live: "https://zynd-hiring-app.azurewebsites.net",
    featured: true
  },
  {
    number: "02",
    name: "SolSniff",
    category: "Solana narrative intelligence",
    description:
      "An autonomous agent that combines on-chain, GitHub, social, and news signals to surface emerging Solana narratives.",
    stack: ["Next.js", "Groq", "Prisma", "Vercel"],
    github: "https://github.com/Abhilash-0322/sol-sniff",
    live: "https://solsniffer.vercel.app/"
  },
  {
    number: "03",
    name: "ChainSentinel AI",
    category: "Multi-chain security intelligence",
    description:
      "Contract analysis, risk scoring, compliance assessment, and real-time monitoring across Ethereum, Solana, and Aptos.",
    stack: ["Python", "FastAPI", "MongoDB", "WebSockets"],
    github: "https://github.com/Abhilash-0322/chainsentinel.ai"
  },
  {
    number: "04",
    name: "Quadrant RAG",
    category: "Knowledge retrieval system",
    description:
      "A production-minded RAG foundation with ingestion, chunking, embeddings, vector retrieval, and low-latency inference.",
    stack: ["FastAPI", "LangChain", "Vector DB", "Docker"],
    github: "https://github.com/Abhilash-0322/quadrant-rag"
  },
  {
    number: "05",
    name: "Zen Heaven",
    category: "AI wellness & safety flows",
    description:
      "Sentiment-aware recommendations and human-safety escalation flows, with Twilio automation behind a calm user experience.",
    stack: ["FastAPI", "React", "LangChain", "Twilio"],
    github: "https://github.com/Abhilash-0322/HackHaven2.0",
    live: "https://hack-haven2-0.vercel.app/"
  },
  {
    number: "06",
    name: "Resume Analyzer",
    category: "Career feedback tool",
    description:
      "A free AI tool that turns a resume into clear, actionable feedback for stronger applications.",
    stack: ["Python", "FastAPI", "AI", "Vercel"],
    github: "https://github.com/Abhilash-0322/resume-analyzer",
    live: "https://resume-analyzer-pulse.vercel.app"
  }
] as const;

const capabilities = [
  {
    icon: Server,
    title: "Backend systems",
    description:
      "FastAPI services, API boundaries, real-time channels, and data models that stay understandable in production.",
    tools: ["Python", "FastAPI", "Django", "Node.js"]
  },
  {
    icon: Workflow,
    title: "AI that works",
    description:
      "Agent workflows and RAG pipelines that connect models to useful data, clear evaluation, and real outcomes.",
    tools: ["LangChain", "RAG", "AI agents", "Groq"]
  },
  {
    icon: Cloud,
    title: "Cloud delivery",
    description:
      "Containers, CI/CD, and cloud deployment patterns that make a project easier to ship, observe, and hand over.",
    tools: ["Docker", "AWS", "Azure", "GitHub Actions"]
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

  if (!mounted) return <span className="theme-button" aria-hidden />;

  const dark = resolvedTheme === "dark";
  return (
    <button
      type="button"
      className="theme-button"
      aria-label={`Switch to ${dark ? "light" : "dark"} mode`}
      onClick={() => setTheme(dark ? "light" : "dark")}
    >
      {dark ? <Sun size={15} /> : <Moon size={15} />}
    </button>
  );
}

function SectionLabel({ children }: { children: string }) {
  return <p className="eyebrow">{children}</p>;
}

export default function Home() {
  return (
    <main className="noise">
      <header className="sticky top-0 z-50 border-b hairline bg-[var(--bg)]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-[70px] w-[min(1160px,calc(100%-40px))] items-center justify-between">
          <a href="#top" className="display text-lg font-bold tracking-[-0.08em]">
            AM<span className="text-[var(--acid)]">/</span>
          </a>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            <a className="nav-link" href="#work">Work</a>
            <a className="nav-link" href="#capabilities">Capabilities</a>
            <a className="nav-link" href="#about">About</a>
            <a className="nav-link" href="#contact">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <span className="hidden items-center gap-2 font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--muted)] sm:flex">
              <span className="status-pulse" />
              Open to work
            </span>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <section id="top" className="grid-paper relative overflow-hidden border-b hairline">
        <div className="mx-auto grid min-h-[680px] w-[min(1160px,calc(100%-40px))] items-center gap-10 py-24 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative z-10">
            <div className="mb-7 inline-flex items-center gap-2 border border-[var(--acid)]/35 bg-[var(--acid-soft)] px-3 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--acid)]">
              <Check size={13} /> Available for new builds
            </div>
            <SectionLabel>Backend · AI systems · Cloud</SectionLabel>
            <h1 className="display mt-6 max-w-3xl text-[clamp(3.7rem,8vw,7.7rem)] font-semibold leading-[0.86] tracking-[-0.095em]">
              The
              <br />
              <span className="text-[var(--acid)]">useful</span> layer
              <br />
              <span className="text-[0.72em] text-[var(--muted)]">between idea + impact.</span>
            </h1>
            <p className="mt-9 max-w-xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              I&apos;m <span className="font-semibold text-[var(--text)]">Abhilash Maurya</span> — a backend and AI systems developer building FastAPI services, agent workflows, and cloud infrastructure that hold up beyond the demo.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a className="button-primary" href="#work">See selected work <ArrowUpRight size={16} /></a>
              <a className="button-secondary" href="mailto:abhilash.m.git@gmail.com">Start a conversation <Mail size={15} /></a>
            </div>
            <div className="mt-14 flex flex-wrap gap-x-8 gap-y-3 font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--muted)]">
              <span className="flex items-center gap-2"><MapPin size={13} className="text-[var(--acid)]" /> Delhi NCR, India</span>
              <span className="flex items-center gap-2"><ShieldCheck size={13} className="text-[var(--acid)]" /> AWS certified</span>
            </div>
          </div>

          <div className="relative hidden h-[500px] lg:block" aria-hidden="true">
            <div className="hero-ring"><span className="hero-core" /></div>
            <span className="hero-label one">systems / 001</span>
            <span className="hero-label two">ship with intent →</span>
            <div className="terminal absolute bottom-[8%] left-[7%] w-[330px]">
              <div className="flex items-center justify-between border-b hairline px-4 py-3">
                <div className="flex gap-1.5"><span className="h-2 w-2 rounded-full bg-[#ff695f]" /><span className="h-2 w-2 rounded-full bg-[#ffc043]" /><span className="h-2 w-2 rounded-full bg-[#50c878]" /></div>
                <span className="mono text-[9px] text-[var(--muted)]">studio/mission.ts</span>
              </div>
              <div className="mono space-y-3 px-5 py-6 text-[11px] leading-relaxed">
                <p className="text-[var(--muted)]"><span className="text-[var(--acid)]">01</span> <span className="text-[#de9fff]">const</span> mission = <span className="text-[#a7db84]">&quot;useful AI&quot;</span>;</p>
                <p className="text-[var(--muted)]"><span className="text-[var(--acid)]">02</span> <span className="text-[#de9fff]">await</span> systems.<span className="text-[var(--orange)]">ship</span>({"{"}</p>
                <p className="terminal-line">reliability: <span className="text-[#a7db84]">true</span>,</p>
                <p className="terminal-line">latency: <span className="text-[#a7db84]">&quot;low&quot;</span>,</p>
                <p className="terminal-line">impact: <span className="text-[#a7db84]">&quot;real&quot;</span></p>
                <p className="text-[var(--muted)]">{"});"}</p>
                <p className="pt-2 text-[#a7db84]"><Check size={12} className="mr-1 inline" /> deploy ready</p>
              </div>
            </div>
          </div>
        </div>
        <a href="#work" className="absolute bottom-8 right-5 hidden items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--muted)] lg:flex">
          Scroll to explore <ArrowDown size={14} />
        </a>
      </section>

      <section id="capabilities" className="border-b hairline">
        <div className="mx-auto grid w-[min(1160px,calc(100%-40px))] md:grid-cols-3">
          {capabilities.map(({ icon: Icon, title, description, tools }) => (
            <article key={title} className="border-b hairline py-10 last:border-0 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0">
              <Icon size={22} strokeWidth={1.5} className="text-[var(--acid)]" />
              <h2 className="display mt-6 text-xl font-semibold tracking-[-0.04em]">{title}</h2>
              <p className="mt-3 min-h-[72px] text-sm leading-7 text-[var(--muted)]">{description}</p>
              <div className="mt-5 flex flex-wrap gap-2">{tools.map((tool) => <span className="tag" key={tool}>{tool}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section id="work" className="py-28">
        <div className="mx-auto w-[min(1160px,calc(100%-40px))]">
          <div className="mb-12 flex flex-col justify-between gap-6 border-b hairline pb-10 md:flex-row md:items-end">
            <div>
              <SectionLabel>Selected work / 2024—26</SectionLabel>
              <h2 className="display mt-5 text-5xl font-semibold tracking-[-0.08em] sm:text-6xl">Proof, in the wild.</h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-[var(--muted)]">Projects where the interesting part wasn&apos;t adding AI — it was making the whole system useful, observable, and ready to leave the laptop.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <article key={project.name} className={`project-card flex flex-col justify-between p-7 sm:p-8 ${"featured" in project && project.featured ? "md:col-span-2 md:min-h-[330px]" : ""}`}>
                <div>
                  <div className="flex items-center justify-between">
                    <span className="project-index">{project.number} / 06</span>
                    <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.name} GitHub`} className="text-[var(--muted)] hover:text-[var(--acid)]"><Github size={17} /></a>
                  </div>
                  <p className="mono mt-10 text-[10px] uppercase tracking-[0.14em] text-[var(--acid)]">{project.category}</p>
                  <h3 className="display mt-3 text-3xl font-semibold tracking-[-0.06em] sm:text-4xl">{project.name}</h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--muted)]">{project.description}</p>
                </div>
                <div className="mt-8 flex flex-wrap items-end justify-between gap-5">
                  <div className="flex flex-wrap gap-2">{project.stack.map((tool) => <span className="tag" key={tool}>{tool}</span>)}</div>
                  {"live" in project && project.live && <a className="mono inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.12em] text-[var(--acid)]" href={project.live} target="_blank" rel="noreferrer">Live system <ExternalLink size={12} /></a>}
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 flex justify-end">
            <a className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--acid)] hover:underline" href="https://github.com/Abhilash-0322" target="_blank" rel="noreferrer">See more on GitHub <ArrowUpRight size={15} /></a>
          </div>
        </div>
      </section>

      <section id="about" className="border-y hairline bg-[var(--surface)]/35 py-28">
        <div className="mx-auto grid w-[min(1160px,calc(100%-40px))] gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionLabel>About the operator</SectionLabel>
            <h2 className="display mt-5 max-w-md text-5xl font-semibold leading-[0.95] tracking-[-0.08em]">Build calm systems for noisy problems.</h2>
            <p className="mt-7 max-w-md text-sm leading-7 text-[var(--muted)]">I like the layer where product thinking meets engineering discipline: clear interfaces, practical AI, and deployments that do what they promised.</p>
            <div className="mt-10 grid max-w-md grid-cols-2 gap-7">
              <div className="stat-box"><p className="display text-4xl font-semibold tracking-[-0.08em]">5+</p><p className="mt-2 font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--muted)]">AI / full-stack MVPs</p></div>
              <div className="stat-box"><p className="display text-4xl font-semibold tracking-[-0.08em]">6+</p><p className="mt-2 font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--muted)]">Developers mentored</p></div>
            </div>
          </div>
          <div className="timeline-line relative space-y-12 pl-8">
            <article className="relative"><span className="timeline-dot" /><p className="mono text-[10px] uppercase tracking-[0.13em] text-[var(--acid)]">Aug 2026 · part-time / remote</p><h3 className="display mt-3 text-2xl font-semibold tracking-[-0.05em]">AI Engineer Intern <span className="text-[var(--muted)]">@ Spearmint Technologies</span></h3><p className="mt-3 max-w-xl text-sm leading-7 text-[var(--muted)]">Voice and agent features across text-to-speech pipelines, fine-tuning, web scraping, and Hermes-based agent development.</p></article>
            <article className="relative"><span className="timeline-dot" /><p className="mono text-[10px] uppercase tracking-[0.13em] text-[var(--acid)]">Nov 2023 — present · KIET</p><h3 className="display mt-3 text-2xl font-semibold tracking-[-0.05em]">AI/ML Coordinator <span className="text-[var(--muted)]">@ Innogeeks Club</span></h3><p className="mt-3 max-w-xl text-sm leading-7 text-[var(--muted)]">Led 5+ AI and full-stack MVPs, mentored 6+ developers, and coordinated agile teams of 3–6 through API planning, design reviews, and deployment.</p></article>
            <article className="relative"><span className="timeline-dot" /><p className="mono text-[10px] uppercase tracking-[0.13em] text-[var(--acid)]">Expected 2027 · Ghaziabad</p><h3 className="display mt-3 text-2xl font-semibold tracking-[-0.05em]">B.Tech Information Technology <span className="text-[var(--muted)]">@ KIET</span></h3><p className="mt-3 max-w-xl text-sm leading-7 text-[var(--muted)]">Coursework across data structures, operating systems, databases, and computer networks. Building in public while finishing the degree.</p></article>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto w-[min(1160px,calc(100%-40px))]">
          <div className="mb-10"><SectionLabel>Signals that compound</SectionLabel><h2 className="display mt-5 text-4xl font-semibold tracking-[-0.07em] sm:text-5xl">Recognition, shipped alongside the work.</h2></div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["01", "MLH Solana track winning team", "Brainwave Hackathon · AIMS DTU"],
              ["02", "1st place · solo AI-agent track", "500+ participant field"],
              ["03", "Co-inventor · IoT-AI telemedicine patent", "India 202511018153A · Apr 2025"],
              ["04", "Open source contributor", "GSSOC · Hacktoberfest · merged PRs"]
            ].map(([number, title, meta]) => <div className="border hairline bg-[var(--surface)] p-6" key={number}><span className="mono text-xs text-[var(--acid)]">{number}</span><h3 className="mt-8 text-sm font-semibold leading-6">{title}</h3><p className="mt-2 text-xs leading-5 text-[var(--muted)]">{meta}</p></div>)}
          </div>
        </div>
      </section>

      <section className="border-t hairline py-20">
        <div className="mx-auto w-[min(1160px,calc(100%-40px))]">
          <div className="flex flex-col justify-between gap-5 border-b hairline pb-9 sm:flex-row sm:items-end"><div><SectionLabel>Outside the forge</SectionLabel><h2 className="display mt-5 text-4xl font-semibold tracking-[-0.07em]">Keep the edge sharp.</h2></div><p className="max-w-sm text-sm leading-7 text-[var(--muted)]">Competitive programming, open source, and the daily reps that make the next hard system feel less hard.</p></div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">{profiles.map(([name, handle, href]) => <a className="group border-b hairline p-6 first:pl-0 sm:even:border-l sm:even:pl-6 lg:border-b-0 lg:border-l lg:first:border-l-0" href={href} key={name} target="_blank" rel="noreferrer"><div className="flex items-center justify-between text-sm font-semibold"><span>{name}</span><ArrowUpRight size={15} className="text-[var(--muted)] group-hover:text-[var(--acid)]" /></div><p className="mono mt-4 text-xs text-[var(--muted)]">{handle}</p></a>)}</div>
        </div>
      </section>

      <section id="contact" className="grid-paper border-t hairline py-28">
        <div className="mx-auto w-[min(1160px,calc(100%-40px))]">
          <SectionLabel>Open to work / full-time · internship · freelance</SectionLabel>
          <h2 className="display mt-6 max-w-4xl text-[clamp(3rem,8vw,7.3rem)] font-semibold leading-[0.88] tracking-[-0.095em]">Have a hard problem?<br /><span className="text-[var(--acid)]">Let&apos;s ship it.</span></h2>
          <p className="mt-8 max-w-xl text-sm leading-7 text-[var(--muted)]">Especially interested in backend, AI systems, cloud infrastructure, and fintech engineering work.</p>
          <div className="mt-9 flex flex-wrap gap-3"><a className="button-primary" href="mailto:abhilash.m.git@gmail.com">abhilash.m.git@gmail.com <ArrowUpRight size={16} /></a><a className="button-secondary" href="/abhilash_python.pdf" download><Download size={15} /> Download resume</a></div>
        </div>
      </section>

      <footer className="border-t hairline py-8">
        <div className="mx-auto flex w-[min(1160px,calc(100%-40px))] flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-4"><span className="display text-lg font-bold tracking-[-0.08em]">AM<span className="text-[var(--acid)]">/</span></span><div><p className="text-sm font-semibold">Abhilash Maurya</p><p className="mono mt-1 text-[10px] text-[var(--muted)]">Built for useful work · {new Date().getFullYear()}</p></div></div>
          <div className="flex items-center gap-4 text-[var(--muted)]"><a href="https://github.com/Abhilash-0322" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-[var(--acid)]"><Github size={16} /></a><a href="https://www.linkedin.com/in/abhilash-maurya-b615b9277/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-[var(--acid)]"><Linkedin size={16} /></a><a href="https://x.com/abhilash_glitch" target="_blank" rel="noreferrer" aria-label="X" className="hover:text-[var(--acid)]"><Twitter size={16} /></a><a href="/abhilash_python.pdf" download className="ml-2 inline-flex items-center gap-2 border-l hairline pl-4 text-xs font-semibold hover:text-[var(--acid)]"><Download size={14} /> Resume</a></div>
        </div>
      </footer>
    </main>
  );
}
