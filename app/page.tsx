"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

type Project = {
  name: string;
  number: string;
  description: string;
  stack: string[];
  github: string;
  live?: string;
};

const projects: Project[] = [
  {
    name: "TalentInfra",
    number: "01",
    description:
      "A bias-aware, multi-agent hiring workspace that turns candidate context into explainable, structured decisions.",
    stack: ["FastAPI", "Next.js", "PostgreSQL", "Groq", "Azure"],
    github: "https://github.com/Abhilash-0322/zynd-aickathon",
    live: "https://zynd-hiring-app.azurewebsites.net",
  },
  {
    name: "SolSniff",
    number: "02",
    description:
      "A Solana narrative and idea agent that combines market signals with fast, focused product thinking.",
    stack: ["Next.js", "Groq", "Prisma", "Vercel"],
    github: "https://github.com/Abhilash-0322/sol-sniff",
    live: "https://solsniffer.vercel.app/",
  },
  {
    name: "ChainSentinel AI",
    number: "03",
    description:
      "Multi-chain contract intelligence for vulnerability detection, risk scoring, compliance, and live alerts.",
    stack: ["Python", "FastAPI", "MongoDB", "WebSockets"],
    github: "https://github.com/Abhilash-0322/chainsentinel.ai",
  },
  {
    name: "Quadrant RAG",
    number: "04",
    description:
      "A retrieval-augmented knowledge system with document ingestion, embeddings, vector retrieval, and low-latency inference.",
    stack: ["FastAPI", "LangChain", "Vector DBs", "Docker"],
    github: "https://github.com/Abhilash-0322/quadrant-rag",
  },
  {
    name: "Resume Analyzer",
    number: "05",
    description:
      "A practical AI tool that gives candidates clear, actionable feedback on their resume and positioning.",
    stack: ["AI", "Next.js", "Analysis"],
    github: "https://github.com/Abhilash-0322/resume-analyzer",
    live: "https://resume-analyzer-pulse.vercel.app",
  },
  {
    name: "Zen Heaven",
    number: "06",
    description:
      "An AI-powered wellness platform pairing sentiment-aware recommendations with Twilio safety escalation flows.",
    stack: ["FastAPI", "React", "LangChain", "Twilio"],
    github: "https://github.com/Abhilash-0322/HackHaven2.0",
    live: "https://hack-haven-2-0.vercel.app/",
  },
];

const skillGroups = [
  { label: "Languages", items: ["Python", "C++", "JavaScript", "SQL"] },
  {
    label: "Backend & AI",
    items: ["FastAPI", "Django", "Express.js", "LangChain", "RAG", "AI agents"],
  },
  {
    label: "Data",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Vector DBs", "Firebase"],
  },
  {
    label: "Cloud & delivery",
    items: ["Docker", "AWS", "Azure", "Linux", "GitHub Actions", "Git"],
  },
];

function ArrowUpRight() {
  return (
    <svg aria-hidden="true" fill="none" height="15" viewBox="0 0 15 15" width="15">
      <path d="M3 12 12 3M5 3h7v7" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg aria-hidden="true" fill="none" height="16" viewBox="0 0 24 24" width="16">
      <path
        d="M9 19c-4.3 1.4-4.3-2.1-6-2.5m12 5v-3.5c0-1 .1-1.4-.5-2 3.2-.4 6.5-1.6 6.5-7a5.4 5.4 0 0 0-1.5-3.8A5 5 0 0 0 19.4 1S18.2.6 15 2.8a13.4 13.4 0 0 0-6 0C5.8.6 4.6 1 4.6 1a5 5 0 0 0-.1 3.2A5.4 5.4 0 0 0 3 9c0 5.4 3.3 6.6 6.5 7-.6.6-.6 1.2-.5 2V21.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <span aria-hidden="true" className="h-9 w-9" />;
  }

  const isDark = resolvedTheme === "dark";
  return (
    <button
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="icon-link"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      type="button"
    >
      <span aria-hidden="true" className="text-sm">
        {isDark ? "☼" : "◐"}
      </span>
    </button>
  );
}

function SectionHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="mb-10 grid gap-4 md:grid-cols-[minmax(200px,0.8fr)_1fr] md:items-end">
      <div>
        <p className="eyebrow mb-3">{eyebrow}</p>
        <h2 className="display text-4xl leading-none sm:text-5xl">{title}</h2>
      </div>
      {intro && (
        <p className="max-w-lg text-sm leading-7 text-[var(--ink-muted)] md:justify-self-end">
          {intro}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <a className="group flex items-center gap-3" href="#top">
          <span className="diamond transition-transform group-hover:rotate-90" />
          <span className="serif text-sm font-bold tracking-[0.18em]">AM / 26</span>
        </a>
        <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
          <a className="nav-link" href="#work">Selected work</a>
          <a className="nav-link" href="#experience">Experience</a>
          <a className="nav-link" href="#contact">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <a
            className="icon-link"
            href="https://github.com/Abhilash-0322"
            rel="noreferrer"
            target="_blank"
            aria-label="GitHub"
          >
            <GithubIcon />
          </a>
          <ThemeToggle />
        </div>
      </header>

      <section className="relative mx-auto max-w-7xl px-6 pb-24 pt-16 lg:px-10 lg:pb-36 lg:pt-28" id="top">
        <div className="hero-grid pointer-events-none absolute inset-x-0 top-0 h-[640px]" />
        <div className="pointer-events-none absolute right-[9%] top-24 hidden h-44 w-44 hero-orb md:block" />
        <div className="relative grid items-end gap-14 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="max-w-3xl">
            <p className="eyebrow mb-7">Backend / AI systems / cloud</p>
            <h1 className="display text-6xl leading-[0.91] sm:text-8xl lg:text-[8.5rem]">
              Building the
              <br />
              <span className="text-[var(--gold)]">reliable</span> layer.
            </h1>
            <p className="mt-9 max-w-xl text-base leading-8 text-[var(--ink-muted)] sm:text-lg">
              I&apos;m Abhilash Maurya — a backend and AI systems developer in
              Delhi NCR. I turn ambitious ideas into APIs, agent workflows, and
              cloud deployments that hold up beyond the demo.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a
                className="inline-flex items-center gap-4 bg-[var(--gold)] px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-[#fff9ee] transition hover:bg-[var(--gold-bright)]"
                href="#work"
              >
                Explore the work <ArrowUpRight />
              </a>
              <a className="nav-link border-b border-[var(--gold)] pb-1" href="#contact">
                Start a conversation
              </a>
            </div>
          </div>
          <div className="deco-border relative hidden min-h-[250px] p-7 lg:block">
            <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-[var(--gold)]">
              <div className="absolute inset-5 border border-[var(--gold)]" />
            </div>
            <div className="absolute bottom-6 left-7 right-7 flex justify-between text-[10px] uppercase tracking-[0.2em] text-[var(--ink-muted)]">
              <span>Systems / 001</span>
              <span>Est. 2023</span>
            </div>
          </div>
        </div>
        <div className="mt-24 grid grid-cols-2 gap-8 border-t border-[var(--line)] pt-6 text-xs text-[var(--ink-muted)] sm:grid-cols-4">
          <div><span className="eyebrow block mb-2 text-[10px]">Based in</span>Delhi NCR, India</div>
          <div><span className="eyebrow block mb-2 text-[10px]">Focus</span>AI + infrastructure</div>
          <div><span className="eyebrow block mb-2 text-[10px]">Currently</span>Building + learning</div>
          <div><span className="eyebrow block mb-2 text-[10px]">Available for</span>Great problems</div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 lg:px-10"><div className="gold-rule" /></div>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32" id="work">
        <SectionHeading
          eyebrow="Selected work / 2024—26"
          title="Proof of practice."
          intro="A selection of systems where backend architecture, product thinking, and applied AI meet. Built to be useful, not just impressive."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article className="project-card deco-border flex min-h-[300px] flex-col p-6" key={project.name}>
              <div className="mb-10 flex items-start justify-between">
                <span className="serif text-sm text-[var(--gold)]">{project.number}</span>
                <div className="flex gap-2">
                  <a className="icon-link" href={project.github} rel="noreferrer" target="_blank" aria-label={`${project.name} on GitHub`}>
                    <GithubIcon />
                  </a>
                  {project.live && (
                    <a className="icon-link" href={project.live} rel="noreferrer" target="_blank" aria-label={`Visit ${project.name}`}>
                      <ArrowUpRight />
                    </a>
                  )}
                </div>
              </div>
              <h3 className="serif text-2xl">{project.name}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--ink-muted)]">{project.description}</p>
              <div className="mt-auto flex flex-wrap gap-2 pt-7">
                {project.stack.map((item) => <span className="tag" key={item}>{item}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--paper-raised)]" id="experience">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <SectionHeading eyebrow="Experience / signal" title="Built with intent." intro="I care about the decisions behind the code: clear APIs, calm deployments, measurable outcomes, and teams that ship together." />
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-0">
              <div className="border-t border-[var(--line)] py-7">
                <div className="mb-3 flex flex-wrap justify-between gap-2 text-xs text-[var(--ink-muted)]"><span className="eyebrow text-[10px]">Aug 2026 · Remote</span><span>01</span></div>
                <h3 className="serif text-2xl">AI Engineer Intern</h3>
                <p className="mt-1 text-sm text-[var(--gold)]">Spearmint Technologies</p>
                <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--ink-muted)]">Worked across voice and agent features — from TTS pipelines and fine-tuning to web data collection and Hermes-based agent development.</p>
              </div>
              <div className="border-y border-[var(--line)] py-7">
                <div className="mb-3 flex flex-wrap justify-between gap-2 text-xs text-[var(--ink-muted)]"><span className="eyebrow text-[10px]">Nov 2023 · Present</span><span>02</span></div>
                <h3 className="serif text-2xl">AI/ML Coordinator</h3>
                <p className="mt-1 text-sm text-[var(--gold)]">Innogeeks Club · KIET</p>
                <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--ink-muted)]">Led 5+ AI and full-stack MVPs from architecture to deployment, mentored 6+ developers, and coordinated agile teams of 3–6 through hackathon delivery.</p>
              </div>
            </div>
            <div className="deco-border p-7 sm:p-9">
              <p className="eyebrow mb-8">Technical toolkit</p>
              <div className="grid gap-7 sm:grid-cols-2">
                {skillGroups.map((group) => (
                  <div key={group.label}>
                    <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.14em]">{group.label}</h3>
                    <p className="text-sm leading-7 text-[var(--ink-muted)]">{group.items.join("  ·  ")}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow mb-3">Credentials / momentum</p>
            <h2 className="display max-w-sm text-4xl leading-[0.98] sm:text-5xl">Curious by default. Useful by design.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["01", "Patent co-inventor", "IoT-AI telemedicine patent · India 202511018153A"],
              ["02", "1st place", "Solo AI-agent track · 500+ participants"],
              ["03", "Top 5 finalist", "5+ regional hackathons · shipping under pressure"],
              ["04", "Certified", "AWS Cloud Practitioner · Google AI Essentials"],
            ].map(([number, title, detail]) => (
              <div className="deco-border p-6" key={number}>
                <div className="mb-10 flex justify-between text-xs text-[var(--gold)]"><span>{number}</span><span>✦</span></div>
                <h3 className="serif text-xl">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--ink-muted)]">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-[var(--line)]" id="contact">
        <div className="hero-grid pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <p className="eyebrow mb-7">Have a system to build?</p>
          <h2 className="display max-w-4xl text-6xl leading-[0.9] sm:text-8xl">Let&apos;s make it <span className="text-[var(--gold)]">work.</span></h2>
          <div className="mt-12 flex flex-col justify-between gap-8 border-t border-[var(--line)] pt-7 sm:flex-row sm:items-end">
            <div>
              <a className="serif text-xl transition-colors hover:text-[var(--gold)]" href="mailto:abhilash.m.git@gmail.com">abhilash.m.git@gmail.com</a>
              <p className="mt-2 text-sm text-[var(--ink-muted)]">Open to backend, AI systems, cloud, and fintech conversations.</p>
            </div>
            <div className="flex gap-3">
              <a className="icon-link" href="https://www.linkedin.com/in/abhilash-maurya-b615b9277/" rel="noreferrer" target="_blank" aria-label="LinkedIn">in</a>
              <a className="icon-link" href="https://x.com/abhilash_glitch" rel="noreferrer" target="_blank" aria-label="X">𝕏</a>
              <a className="icon-link" href="https://github.com/Abhilash-0322" rel="noreferrer" target="_blank" aria-label="GitHub"><GithubIcon /></a>
            </div>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-6 py-7 text-[10px] uppercase tracking-[0.16em] text-[var(--ink-muted)] sm:flex-row lg:px-10">
        <span>© 2026 Abhilash Maurya</span>
        <span>Designed in gold geometry · Delhi NCR</span>
      </footer>
    </main>
  );
}
