import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Cloud,
  Code2,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Network,
  Sparkles,
  Terminal,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const projects = [
  {
    number: "01",
    title: "TalentInfra",
    type: "Multi-agent hiring intelligence",
    description:
      "Bias-aware hiring workflows that turn messy candidate signals into explainable, human-checkable decisions.",
    stack: "FastAPI · Next.js · PostgreSQL · Groq · Azure",
    href: "https://github.com/Abhilash-0322/zynd-aickathon",
    live: "https://zynd-hiring-app.azurewebsites.net",
    accent: "bg-[#e5c894]",
  },
  {
    number: "02",
    title: "SolSniff",
    type: "Narrative discovery agent",
    description:
      "An always-on intelligence layer for finding, filtering, and stress-testing the next ideas in the Solana ecosystem.",
    stack: "Next.js · Groq · Prisma · Vercel",
    href: "https://github.com/Abhilash-0322/sol-sniff",
    live: "https://solsniffer.vercel.app/",
    accent: "bg-[#cbd3c0]",
  },
  {
    number: "03",
    title: "ChainSentinel AI",
    type: "Smart contract risk intelligence",
    description:
      "API-first analysis for multi-chain contracts, with vulnerability detection, risk scoring, and real-time alerts.",
    stack: "Python · FastAPI · MongoDB · WebSockets",
    href: "https://github.com/Abhilash-0322/chainsentinel.ai",
    accent: "bg-[#d7c3bb]",
  },
  {
    number: "04",
    title: "Quadrant RAG",
    type: "Knowledge retrieval system",
    description:
      "A production-minded RAG foundation for custom knowledge bases: ingest, embed, retrieve, and answer with context.",
    stack: "FastAPI · LangChain · Vector DBs · Docker",
    href: "https://github.com/Abhilash-0322/quadrant-rag",
    accent: "bg-[#d2c9df]",
  },
];

const capabilities = [
  {
    icon: Terminal,
    title: "Backend systems",
    copy: "FastAPI, Django, Express, async services, API design, and the unglamorous details that make systems hold up.",
  },
  {
    icon: Network,
    title: "AI infrastructure",
    copy: "Agents, RAG pipelines, evaluation loops, tool use, and interfaces that keep models useful beyond the demo.",
  },
  {
    icon: Cloud,
    title: "Cloud delivery",
    copy: "Dockerized deployments, AWS and Azure infrastructure, CI/CD, observability, and a bias toward shipping.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[var(--paper)] text-[var(--ink)]">
      <div className="noise fixed inset-0 z-50" />

      <header className="relative z-10 mx-auto flex max-w-[1240px] items-center justify-between px-6 py-6 lg:px-10">
        <a className="display text-xl font-bold tracking-tight" href="#top">
          AM<span className="text-[var(--accent)]">.</span>
        </a>
        <nav className="hidden items-center gap-8 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--muted)] md:flex">
          <a className="transition-colors hover:text-[var(--accent)]" href="#work">Work</a>
          <a className="transition-colors hover:text-[var(--accent)]" href="#about">About</a>
          <a className="transition-colors hover:text-[var(--accent)]" href="#contact">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <span className="hidden items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--muted)] sm:flex">
            <span className="h-2 w-2 rounded-full bg-[#5d9a61] shadow-[0_0_0_4px_rgba(93,154,97,0.14)]" />
            Open to work
          </span>
          <ThemeToggle />
          <button aria-label="Open menu" className="border rule p-2.5 md:hidden" type="button">
            <Menu size={16} strokeWidth={1.7} />
          </button>
        </div>
      </header>

      <section id="top" className="relative mx-auto max-w-[1240px] px-6 pb-20 pt-16 lg:px-10 lg:pb-32 lg:pt-24">
        <div className="grid-paper absolute inset-0 -z-0 opacity-60" />
        <div className="relative z-[1]">
          <div className="mb-12 flex items-end justify-between border-b rule pb-5">
            <p className="eyebrow">Backend / AI systems / cloud</p>
            <p className="hidden text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--muted)] sm:block">
              Delhi NCR · India
            </p>
          </div>
          <div className="max-w-5xl">
            <h1 className="display text-[clamp(4.3rem,11vw,9.75rem)] font-medium leading-[0.82]">
              <span className="reveal-line"><span>Systems that</span></span>
              <span className="reveal-line"><span className="delay-1 text-[var(--accent)]">make sense.</span></span>
            </h1>
            <div className="mt-12 grid gap-8 border-t rule pt-6 sm:grid-cols-[1fr_280px] sm:items-start lg:ml-[25%]">
              <p className="max-w-xl text-lg leading-relaxed text-[var(--muted)]">
                I&apos;m Abhilash — a backend and AI systems developer building reliable APIs,
                intelligent agents, and cloud infrastructure for ideas that deserve to ship.
              </p>
              <div className="flex items-center gap-5 sm:justify-end">
                <a
                  className="group flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[var(--ink)]"
                  href="#work"
                >
                  See selected work
                  <ArrowRight className="transition-transform group-hover:translate-x-1" size={15} />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-16 flex items-center justify-between text-[var(--muted)]">
            <span className="text-[10px] font-bold uppercase tracking-[0.16em]">Scroll to explore</span>
            <ChevronDown className="animate-bounce" size={16} strokeWidth={1.5} />
          </div>
        </div>
      </section>

      <div className="border-y rule bg-[var(--paper-deep)]">
        <div className="mx-auto flex max-w-[1240px] items-center gap-8 overflow-hidden px-6 py-4 lg:px-10">
          <span className="shrink-0 text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--accent)]">Currently building</span>
          <div className="h-4 w-px shrink-0 bg-[var(--line)]" />
          <p className="whitespace-nowrap text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
            cloud-native APIs&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;agentic workflows&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;production RAG&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;open source
          </p>
        </div>
      </div>

      <section id="work" className="mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-36">
        <div className="mb-14 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow mb-4">Selected work</p>
            <h2 className="display text-5xl font-medium leading-none sm:text-6xl">Things I&apos;ve shipped.</h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-[var(--muted)]">
            A few systems from the intersection of backend engineering, AI, and the open web.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <article className="project-card group flex min-h-[370px] flex-col justify-between border rule bg-[var(--paper)] p-6 sm:p-8" key={project.title}>
              <div>
                <div className={`mb-10 flex h-28 items-center justify-center ${project.accent}`}>
                  <span className="display text-5xl font-bold text-[#29241e]/75">{project.number}</span>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="eyebrow mb-2">{project.type}</p>
                    <h3 className="display text-3xl font-medium">{project.title}</h3>
                  </div>
                  <a aria-label={`View ${project.title} on GitHub`} className="project-arrow text-[var(--muted)] hover:text-[var(--accent)]" href={project.href} rel="noreferrer" target="_blank">
                    <ArrowUpRight size={22} strokeWidth={1.4} />
                  </a>
                </div>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--muted)]">{project.description}</p>
              </div>
              <div className="mt-8 flex flex-wrap items-end justify-between gap-3 border-t rule pt-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--muted)]">{project.stack}</span>
                {project.live && (
                  <a className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--accent)]" href={project.live} rel="noreferrer" target="_blank">
                    Live build <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 flex justify-end">
          <a className="group inline-flex items-center gap-2 border-b border-[var(--accent)] pb-1 text-xs font-bold uppercase tracking-[0.14em] text-[var(--accent)]" href="https://github.com/Abhilash-0322" rel="noreferrer" target="_blank">
            More on GitHub <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={15} />
          </a>
        </div>
      </section>

      <section id="about" className="border-y rule bg-[var(--paper-deep)]">
        <div className="mx-auto grid max-w-[1240px] gap-14 px-6 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:px-10 lg:py-32">
          <div>
            <p className="eyebrow mb-4">A little context</p>
            <h2 className="display max-w-md text-5xl font-medium leading-[0.95] sm:text-6xl">
              Curious by default. Useful on purpose.
            </h2>
          </div>
          <div className="max-w-2xl">
            <p className="text-xl leading-relaxed">
              I like the layer where a good idea becomes an actual product: a clear API,
              a sensible data model, a model that earns its place, and infrastructure someone
              else can operate.
            </p>
            <p className="mt-6 text-base leading-relaxed text-[var(--muted)]">
              I&apos;m currently studying Information Technology at KIET and coordinating AI/ML
              projects at Innogeeks Club. Along the way, I&apos;ve led hackathon teams, mentored
              developers, worked on a telemedicine patent, and learned that the best systems
              are usually the ones that make the next person&apos;s job easier.
            </p>
            <div className="mt-10 grid gap-8 border-t rule pt-8 sm:grid-cols-3">
              <div>
                <p className="display text-4xl text-[var(--accent)]">5+</p>
                <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.13em] text-[var(--muted)]">AI MVPs led</p>
              </div>
              <div>
                <p className="display text-4xl text-[var(--accent)]">6+</p>
                <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.13em] text-[var(--muted)]">Developers mentored</p>
              </div>
              <div>
                <p className="display text-4xl text-[var(--accent)]">1</p>
                <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.13em] text-[var(--muted)]">Published patent</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-36">
        <div className="mb-12 flex items-end justify-between border-b rule pb-5">
          <div>
            <p className="eyebrow mb-3">What I bring</p>
            <h2 className="display text-4xl font-medium sm:text-5xl">Useful at every layer.</h2>
          </div>
          <Code2 className="hidden text-[var(--accent)] sm:block" size={32} strokeWidth={1.2} />
        </div>
        <div className="grid gap-10 md:grid-cols-3 md:gap-6">
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <div className="border-l-2 border-[var(--accent)] pl-5" key={item.title}>
                <div className="mb-7 flex items-center justify-between">
                  <Icon className="text-[var(--accent)]" size={26} strokeWidth={1.4} />
                  <span className="text-xs text-[var(--muted)]">0{index + 1}</span>
                </div>
                <h3 className="display text-2xl font-medium">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{item.copy}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-t rule">
        <div className="mx-auto grid max-w-[1240px] gap-12 px-6 py-24 lg:grid-cols-[0.7fr_1.3fr] lg:px-10 lg:py-32">
          <div>
            <p className="eyebrow mb-4">Experience / now</p>
            <p className="text-sm leading-relaxed text-[var(--muted)]">The short version of where I&apos;ve been putting my energy.</p>
          </div>
          <div>
            <div className="border-t rule py-6">
              <div className="grid gap-3 sm:grid-cols-[145px_1fr_auto] sm:gap-6">
                <p className="text-xs font-bold uppercase tracking-[0.1em] text-[var(--accent)]">2023 — now</p>
                <div>
                  <h3 className="display text-2xl">AI/ML Coordinator</h3>
                  <p className="mt-1 text-sm text-[var(--muted)]">Innogeeks Club · KIET</p>
                </div>
                <BriefcaseBusiness className="hidden text-[var(--muted)] sm:block" size={19} strokeWidth={1.4} />
              </div>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--muted)] sm:ml-[169px]">
                Led architecture, backend, deployment, and team delivery for 5+ AI and full-stack MVPs.
                Mentored 6+ developers across Python, FastAPI, and ML.
              </p>
            </div>
            <div className="border-y rule py-6">
              <div className="grid gap-3 sm:grid-cols-[145px_1fr_auto] sm:gap-6">
                <p className="text-xs font-bold uppercase tracking-[0.1em] text-[var(--accent)]">Aug 2026</p>
                <div>
                  <h3 className="display text-2xl">AI Engineer Intern</h3>
                  <p className="mt-1 text-sm text-[var(--muted)]">Spearmint Technologies · Remote</p>
                </div>
                <Sparkles className="hidden text-[var(--muted)] sm:block" size={19} strokeWidth={1.4} />
              </div>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--muted)] sm:ml-[169px]">
                Worked across text-to-speech, fine-tuning, web scraping, and Hermes-based agent features.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden bg-[var(--ink)] px-6 py-24 text-[var(--paper)] lg:px-10 lg:py-36">
        <div className="absolute right-[-5%] top-[-35%] h-[700px] w-[700px] rounded-full border border-[var(--accent)] opacity-20" />
        <div className="relative mx-auto max-w-[1240px]">
          <div className="max-w-3xl">
            <p className="eyebrow mb-6">Have a good problem?</p>
            <h2 className="display text-[clamp(3.5rem,9vw,8.3rem)] font-medium leading-[0.85]">
              Let&apos;s make it<br /><span className="text-[var(--accent-bright)]">work.</span>
            </h2>
            <a className="mt-12 inline-flex items-center gap-3 border-b border-[var(--accent)] pb-2 text-lg transition-colors hover:text-[var(--accent-bright)]" href="mailto:abhilash.m.git@gmail.com">
              abhilash.m.git@gmail.com <ArrowUpRight size={19} />
            </a>
          </div>
          <div className="mt-24 grid gap-8 border-t border-[#494238] pt-6 sm:grid-cols-3">
            <div className="flex items-center gap-3 text-sm text-[#bdb4a6]">
              <MapPin className="text-[var(--accent-bright)]" size={16} strokeWidth={1.5} /> Delhi NCR, India
            </div>
            <div className="flex items-center gap-3 text-sm text-[#bdb4a6]">
              <Check className="text-[var(--accent-bright)]" size={16} strokeWidth={1.5} /> Available for select roles
            </div>
            <div className="flex gap-5 sm:justify-end">
              <a aria-label="GitHub" className="text-[#bdb4a6] transition-colors hover:text-[var(--accent-bright)]" href="https://github.com/Abhilash-0322" rel="noreferrer" target="_blank"><Github size={19} strokeWidth={1.5} /></a>
              <a aria-label="LinkedIn" className="text-[#bdb4a6] transition-colors hover:text-[var(--accent-bright)]" href="https://www.linkedin.com/in/abhilash-maurya-b615b9277/" rel="noreferrer" target="_blank"><Linkedin size={19} strokeWidth={1.5} /></a>
              <a aria-label="Email" className="text-[#bdb4a6] transition-colors hover:text-[var(--accent-bright)]" href="mailto:abhilash.m.git@gmail.com"><Mail size={19} strokeWidth={1.5} /></a>
            </div>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-[1240px] flex-col justify-between gap-3 px-6 py-6 text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--muted)] sm:flex-row lg:px-10">
        <span>© 2026 Abhilash Maurya</span>
        <span>Built with intent · Next.js / TypeScript</span>
      </footer>
    </main>
  );
}
