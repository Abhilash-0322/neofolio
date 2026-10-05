"use client";

import {
  ArrowDown,
  ArrowUpRight,
  Check,
  ChevronRight,
  Cloud,
  Code2,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Moon,
  Sparkles,
  Sun,
  Terminal,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const projects = [
  {
    number: "01",
    name: "TalentInfra",
    label: "AI / Hiring systems",
    description:
      "A bias-aware, multi-agent hiring platform that turns messy candidate data into explainable, useful signals.",
    stack: ["FastAPI", "Next.js", "PostgreSQL", "Groq", "Azure"],
    href: "https://zynd-hiring-app.azurewebsites.net",
    source: "https://github.com/Abhilash-0322/zynd-aickathon",
    featured: true,
  },
  {
    number: "02",
    name: "SolSniff",
    label: "Intelligence / Web3",
    description:
      "An agent for finding the next Solana narrative: research, synthesis, and a clear point of view in one flow.",
    stack: ["Next.js", "Groq", "Prisma", "Vercel"],
    href: "https://solsniffer.vercel.app/",
    source: "https://github.com/Abhilash-0322/sol-sniff",
  },
  {
    number: "03",
    name: "ChainSentinel AI",
    label: "Risk / Compliance",
    description:
      "Multi-chain smart contract risk analysis and compliance workflows built for teams operating in high-trust environments.",
    stack: ["FastAPI", "Next.js", "MongoDB"],
    source: "https://github.com/Abhilash-0322/chainsentinel.ai",
  },
  {
    number: "04",
    name: "Quadrant RAG",
    label: "Knowledge / Infrastructure",
    description:
      "A production-minded RAG foundation for private knowledge bases, with retrieval pipelines that are easy to deploy and extend.",
    stack: ["FastAPI", "LangChain", "Vector DB", "Docker"],
    source: "https://github.com/Abhilash-0322/quadrant-rag",
  },
];

const capabilities = [
  {
    icon: Code2,
    title: "Backend systems",
    copy: "FastAPI, Django, Express, async services, APIs, and data models designed to stay clear under load.",
  },
  {
    icon: Sparkles,
    title: "Applied AI",
    copy: "Agents, RAG, evaluation loops, and AI features connected to real product constraints—not just demos.",
  },
  {
    icon: Cloud,
    title: "Cloud & delivery",
    copy: "Dockerized deployments, CI/CD, AWS, Azure, and the practical glue that makes shipping repeatable.",
  },
];

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <span className="h-9 w-9" aria-hidden="true" />;
  }

  const isLight = theme === "light";
  return (
    <button
      type="button"
      onClick={() => setTheme(isLight ? "dark" : "light")}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-[#5d4030] text-[#cdb8a5] transition hover:border-[#e28548] hover:text-[#ffae6d]"
      aria-label={`Switch to ${isLight ? "dark" : "light"} theme`}
    >
      {isLight ? <Moon size={16} /> : <Sun size={16} />}
    </button>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="mono mb-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-[#d98248]">
      <span className="h-px w-8 bg-[#d98248]" />
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <main id="top" className="min-h-screen overflow-hidden bg-[#100e0d]">
      <div className="pointer-events-none fixed inset-0 -z-0 circuit-grid" />
      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <a href="#" className="mono flex items-center gap-3 text-sm font-bold tracking-tight text-[#f4ede5]">
          <span className="flex h-8 w-8 items-center justify-center border border-[#d98248] text-xs text-[#ffae6d]">
            AM
          </span>
          <span className="hidden sm:block">abhilash<span className="text-[#d98248]">.dev</span></span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {["work", "about", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="mono text-[11px] uppercase tracking-[0.18em] text-[#aa9e92] transition hover:text-[#ffae6d]"
            >
              {item}
            </a>
          ))}
          <ThemeToggle />
        </div>
        <div className="md:hidden">
          <ThemeToggle />
        </div>
      </nav>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-14 lg:grid-cols-[1.2fr_0.8fr] lg:px-10 lg:pb-32 lg:pt-24">
        <div>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#87502f] bg-[#251a14]/80 px-3 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#e28548] opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ffae6d]" />
            </span>
            <span className="mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#ffae6d]">
              Open to work
            </span>
            <span className="hidden text-xs text-[#aa9e92] sm:inline">· full-time / internship / freelance</span>
          </div>
          <p className="mono mb-6 text-xs uppercase tracking-[0.2em] text-[#aa9e92]">
            Backend · AI systems · Cloud infrastructure
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-[#f4ede5] sm:text-7xl lg:text-[6.6rem]">
            I build the
            <br />
            <span className="text-[#e28548]">systems behind</span>
            <br />
            ambitious products.
          </h1>
          <p className="mt-8 max-w-xl text-base leading-7 text-[#aa9e92] sm:text-lg">
            I&apos;m Abhilash Maurya, a backend and AI systems developer turning complex ideas into
            dependable products. I work across APIs, agents, RAG, and cloud—especially where the
            stakes are high and the path isn&apos;t obvious.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 bg-[#e28548] px-5 py-3 text-sm font-bold text-[#160f0b] transition hover:bg-[#ffae6d]"
            >
              Let&apos;s build something <ArrowUpRight size={17} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a href="#work" className="link-underline inline-flex items-center gap-2 px-2 py-3 text-sm text-[#d4c5b8]">
              See selected work <ArrowDown size={15} />
            </a>
          </div>
        </div>
        <div className="relative flex items-end lg:justify-end">
          <div className="absolute right-10 top-2 hidden h-56 w-56 rounded-full bg-[#9b3c15]/10 blur-3xl lg:block" />
          <div className="relative w-full max-w-sm border border-[#5d4030] bg-[#171310]/90 p-5 shadow-2xl shadow-[#7b3014]/10">
            <div className="mb-12 flex items-center justify-between border-b border-[#3c2c23] pb-4">
              <span className="mono text-[10px] uppercase tracking-[0.2em] text-[#8e7d70]">system.profile</span>
              <span className="flex items-center gap-1.5 mono text-[10px] text-[#e28548]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#e28548]" /> online
              </span>
            </div>
            <div className="mb-8 flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center border border-[#8b4d2b] bg-[#2b1d15] text-xl font-semibold text-[#ffae6d]">
                AM
              </div>
              <div>
                <h2 className="text-xl font-semibold text-[#f4ede5]">Abhilash Maurya</h2>
                <p className="mt-1 text-sm text-[#aa9e92]">Delhi NCR, India</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="border border-[#3c2c23] p-3">
                <p className="mono text-[10px] text-[#8e7d70]">focus</p>
                <p className="mt-2 text-sm text-[#e6d8cc]">AI that ships</p>
              </div>
              <div className="border border-[#3c2c23] p-3">
                <p className="mono text-[10px] text-[#8e7d70]">status</p>
                <p className="mt-2 text-sm text-[#e6d8cc]">Building next</p>
              </div>
            </div>
            <div className="mt-5 flex items-center gap-2 border-t border-[#3c2c23] pt-4 text-xs text-[#8e7d70]">
              <Terminal size={14} className="text-[#d98248]" />
              <span className="mono">available_for_a_good_challenge</span>
              <span className="ml-auto text-[#e28548]">_</span>
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-wrap gap-x-10 gap-y-4 border-y border-[#342820] px-6 py-5 lg:px-10">
        <span className="mono flex items-center gap-2 text-[11px] uppercase tracking-[0.12em] text-[#8e7d70]"><MapPin size={13} className="text-[#d98248]" /> Delhi NCR, India</span>
        <span className="mono flex items-center gap-2 text-[11px] uppercase tracking-[0.12em] text-[#8e7d70]"><Check size={13} className="text-[#d98248]" /> AWS Certified Cloud Practitioner</span>
        <span className="mono flex items-center gap-2 text-[11px] uppercase tracking-[0.12em] text-[#8e7d70]"><Check size={13} className="text-[#d98248]" /> KIET · B.Tech IT 2027</span>
      </div>

      <section id="work" className="relative z-10 mx-auto max-w-7xl scroll-mt-10 px-6 py-24 lg:px-10 lg:py-32">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <SectionLabel>Selected work</SectionLabel>
            <h2 className="max-w-xl text-4xl font-semibold tracking-[-0.04em] text-[#f4ede5] sm:text-5xl">
              Proof of work,
              <br />
              <span className="text-[#8e7d70]">not just promises.</span>
            </h2>
          </div>
          <a href="https://github.com/Abhilash-0322" target="_blank" rel="noreferrer" className="link-underline inline-flex items-center gap-2 self-start pb-1 text-sm text-[#d4c5b8] md:self-end">
            More on GitHub <ArrowUpRight size={15} />
          </a>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.name} className={`project-card group relative flex min-h-[310px] flex-col justify-between border p-6 ${project.featured ? "border-[#a96035] bg-[#291b14]" : "border-[#493328] bg-[#191512]"}`}>
              <div>
                <div className="mb-9 flex items-start justify-between">
                  <span className="mono text-xs text-[#d98248]">{project.number} / 04</span>
                  <div className="flex gap-3">
                    {project.source && <a href={project.source} target="_blank" rel="noreferrer" aria-label={`${project.name} source code`} className="text-[#8e7d70] transition hover:text-[#ffae6d]"><Github size={17} /></a>}
                    {project.href && <a href={project.href} target="_blank" rel="noreferrer" aria-label={`${project.name} live site`} className="text-[#8e7d70] transition hover:text-[#ffae6d]"><ExternalLinkIcon /></a>}
                  </div>
                </div>
                <p className="mono mb-2 text-[10px] uppercase tracking-[0.18em] text-[#8e7d70]">{project.label}</p>
                <h3 className="text-2xl font-semibold tracking-tight text-[#f4ede5]">{project.name}</h3>
                <p className="mt-3 max-w-md text-sm leading-6 text-[#aa9e92]">{project.description}</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {project.stack.map((item) => <span key={item} className="mono border border-[#5c3b29] px-2 py-1 text-[10px] text-[#bd9f87]">{item}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="relative z-10 mx-auto grid max-w-7xl scroll-mt-10 gap-16 border-t border-[#342820] px-6 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-32">
        <div>
          <SectionLabel>How I work</SectionLabel>
          <h2 className="max-w-md text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#f4ede5] sm:text-5xl">
            Curious by default.
            <br />
            <span className="text-[#8e7d70]">Ruthless about clarity.</span>
          </h2>
          <p className="mt-7 max-w-md text-base leading-7 text-[#aa9e92]">
            I like working at the seam between product intent and technical reality. That means
            asking better questions, making the architecture legible, and leaving the system easier
            to change than I found it.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {["Python", "TypeScript", "PostgreSQL", "Docker", "AWS", "Azure", "RAG"].map((skill) => (
              <span key={skill} className="mono border border-[#493328] px-3 py-2 text-[10px] uppercase tracking-wider text-[#bd9f87]">{skill}</span>
            ))}
          </div>
        </div>
        <div className="grid gap-px self-start border border-[#493328] bg-[#493328] sm:grid-cols-3">
          {capabilities.map(({ icon: Icon, title, copy }) => (
            <div key={title} className="bg-[#191512] p-6">
              <Icon size={22} strokeWidth={1.5} className="mb-12 text-[#e28548]" />
              <h3 className="text-lg font-medium text-[#f4ede5]">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#8e7d70]">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-16 border-t border-[#342820] px-6 py-24 lg:grid-cols-[0.75fr_1.25fr] lg:px-10 lg:py-32">
        <div>
          <SectionLabel>Experience</SectionLabel>
          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-[#f4ede5]">The path so far.</h2>
        </div>
        <div className="space-y-0">
          <div className="grid gap-5 border-b border-[#342820] py-6 sm:grid-cols-[150px_1fr]">
            <p className="mono text-[11px] uppercase tracking-wider text-[#d98248]">Aug 2026 — now</p>
            <div><h3 className="text-xl font-medium text-[#f4ede5]">AI Engineer Intern <span className="text-[#8e7d70]">@ Spearmint Technologies</span></h3><p className="mt-2 text-sm leading-6 text-[#aa9e92]">Voice and agent features—from TTS pipelines and fine-tuning to data collection and Hermes-based agents.</p></div>
          </div>
          <div className="grid gap-5 border-b border-[#342820] py-6 sm:grid-cols-[150px_1fr]">
            <p className="mono text-[11px] uppercase tracking-wider text-[#d98248]">Nov 2023 — now</p>
            <div><h3 className="text-xl font-medium text-[#f4ede5]">AI/ML Coordinator <span className="text-[#8e7d70]">@ Innogeeks Club, KIET</span></h3><p className="mt-2 text-sm leading-6 text-[#aa9e92]">Led 5+ AI and full-stack MVPs, mentored 6+ developers, and coordinated agile teams of 3–6 through hackathon delivery.</p></div>
          </div>
          <div className="grid gap-5 py-6 sm:grid-cols-[150px_1fr]">
            <p className="mono text-[11px] uppercase tracking-wider text-[#d98248]">Always learning</p>
            <div><h3 className="text-xl font-medium text-[#f4ede5]">B.Tech Information Technology <span className="text-[#8e7d70]">@ KIET Group of Institutions</span></h3><p className="mt-2 text-sm leading-6 text-[#aa9e92]">Expected 2027 · AWS Certified Cloud Practitioner · Google AI Essentials.</p></div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative z-10 mx-auto max-w-7xl scroll-mt-10 px-6 pb-24 pt-8 lg:px-10 lg:pb-32">
        <div className="relative overflow-hidden border border-[#a96035] bg-[#291b14] p-8 sm:p-12 lg:p-16">
          <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-[#a64c20]/20 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <SectionLabel>Start a conversation</SectionLabel>
              <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#f4ede5] sm:text-6xl">
                Have a hard problem?
                <br />
                <span className="text-[#ffae6d]">Let&apos;s make it tractable.</span>
              </h2>
              <p className="mt-6 max-w-lg text-base leading-7 text-[#c4afa0]">
                I&apos;m open to full-time roles, internships, and freelance work across backend,
                AI, cloud, and fintech.
              </p>
            </div>
            <a href="mailto:abhilash.m.git@gmail.com" className="group inline-flex items-center justify-center gap-3 bg-[#f4ede5] px-5 py-3 text-sm font-bold text-[#21140d] transition hover:bg-[#ffae6d]">
              <Mail size={17} /> Say hello <ArrowUpRight size={17} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </section>

      <footer className="relative z-10 mx-auto flex max-w-7xl flex-col gap-5 border-t border-[#342820] px-6 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <p className="mono text-[10px] uppercase tracking-[0.16em] text-[#705f53]">© 2026 Abhilash Maurya · Built with intent</p>
        <div className="flex items-center gap-5">
          <a href="mailto:abhilash.m.git@gmail.com" aria-label="Email" className="text-[#8e7d70] transition hover:text-[#ffae6d]"><Mail size={16} /></a>
          <a href="https://github.com/Abhilash-0322" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-[#8e7d70] transition hover:text-[#ffae6d]"><Github size={16} /></a>
          <a href="https://www.linkedin.com/in/abhilash-maurya-b615b9277/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-[#8e7d70] transition hover:text-[#ffae6d]"><Linkedin size={16} /></a>
          <a href="#top" aria-label="Back to top" className="ml-3 flex h-8 w-8 items-center justify-center border border-[#493328] text-[#8e7d70] transition hover:border-[#e28548] hover:text-[#ffae6d]"><ChevronRight size={14} className="-rotate-90" /></a>
        </div>
      </footer>
    </main>
  );
}

function ExternalLinkIcon() {
  return <ArrowUpRight size={17} />;
}
