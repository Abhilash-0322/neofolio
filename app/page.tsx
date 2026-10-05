import {
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Code2,
  ExternalLink,
  Github,
  MapPin,
  Menu,
  Radio,
  Send,
  Sparkles,
  Terminal,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const projects = [
  {
    number: "01",
    title: "TalentInfra",
    type: "Multi-agent hiring infrastructure",
    description:
      "A bias-aware hiring workflow that turns messy candidate signals into explainable, structured decisions.",
    stack: ["FastAPI", "Next.js", "Postgres", "Groq"],
    github: "https://github.com/Abhilash-0322/zynd-aickathon",
    live: "https://zynd-hiring-app.azurewebsites.net",
    mark: "TI",
    visual: "talent",
  },
  {
    number: "02",
    title: "SolSniff",
    type: "Narrative / idea agent",
    description:
      "A fast research companion for finding signals and narratives across the Solana ecosystem.",
    stack: ["Next.js", "Groq", "Prisma", "Vercel"],
    github: "https://github.com/Abhilash-0322/sol-sniff",
    live: "https://solsniffer.vercel.app/",
    mark: "SS",
    visual: "sol",
  },
  {
    number: "03",
    title: "ChainSentinel AI",
    type: "Smart contract risk layer",
    description:
      "Multi-chain analysis for surfacing contract risk and compliance context before capital moves.",
    stack: ["FastAPI", "Next.js", "MongoDB"],
    github: "https://github.com/Abhilash-0322/chainsentinel.ai",
    mark: "CS",
    visual: "chain",
  },
  {
    number: "04",
    title: "Quadrant RAG",
    type: "Knowledge retrieval system",
    description:
      "A deployable RAG foundation for private knowledge bases, with containerized APIs and vector search.",
    stack: ["FastAPI", "LangChain", "Vector DB", "Docker"],
    github: "https://github.com/Abhilash-0322/quadrant-rag",
    live: undefined,
    mark: "QR",
    visual: "rag",
  },
];

const skills = [
  "Python",
  "FastAPI",
  "Django",
  "TypeScript",
  "Next.js",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Docker",
  "AWS",
  "Azure",
  "RAG",
  "AI agents",
  "GitHub Actions",
];

function ProjectVisual({ mark, visual }: { mark: string; visual: string }) {
  return (
    <div className={`project-visual project-${visual}`}>
      <div className="project-grid" />
      <div className="project-line" />
      <div className="project-line" />
      <div className="project-mark">{mark}</div>
      <div className="absolute bottom-3 left-4 font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--muted)]">
        system / signal / 0{visual.length}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="site-grid min-h-screen">
      <div className="noise fixed inset-0 z-50 opacity-30" />
      <nav className="relative z-10 mx-auto flex max-w-[1240px] items-center justify-between border-b border-[var(--line)] px-5 py-5 md:px-10">
        <a href="#" className="font-mono text-sm font-bold tracking-[-0.04em]">
          AM<span className="text-[var(--orange)]">/</span>26
        </a>
        <div className="hidden items-center gap-8 font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--muted)] md:flex">
          <a className="transition-colors hover:text-[var(--orange)]" href="#work">
            Work
          </a>
          <a className="transition-colors hover:text-[var(--orange)]" href="#about">
            About
          </a>
          <a className="transition-colors hover:text-[var(--orange)]" href="#contact">
            Contact
          </a>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="mailto:abhilash.m.git@gmail.com"
            className="hidden font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--orange)] sm:block"
          >
            Let&apos;s talk <span aria-hidden="true">↗</span>
          </a>
          <ThemeToggle />
          <a href="#contact" className="icon-button md:hidden" aria-label="Go to contact">
            <Menu size={17} strokeWidth={1.8} />
          </a>
        </div>
      </nav>

      <section className="relative z-10 mx-auto max-w-[1240px] px-5 pb-24 pt-16 md:px-10 md:pb-32 md:pt-28">
        <div className="mb-10 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--muted)]">
          <span>Delhi NCR / India</span>
          <span className="hidden sm:block">Portfolio / 2026</span>
          <span>Scroll to explore ↓</span>
        </div>
        <div className="grid gap-14 lg:grid-cols-[1fr_340px] lg:items-end">
          <div>
            <div className="section-label mb-7">Backend + AI systems developer</div>
            <h1 className="font-display max-w-[920px] text-[clamp(4.4rem,12vw,10.8rem)] font-bold leading-[0.8] text-[var(--foreground)]">
              Build
              <br />
              <span className="text-[var(--orange)]">what</span> lasts.
            </h1>
            <div className="mt-10 flex max-w-[610px] flex-col gap-8 sm:flex-row sm:items-end">
              <p className="max-w-[450px] text-lg leading-7 text-[var(--muted)]">
                I&apos;m Abhilash — I build reliable APIs, AI agents, and cloud systems that
                make it past the demo.
              </p>
              <a href="#work" className="solid-button w-fit">
                See selected work <ArrowDownRight size={15} />
              </a>
            </div>
          </div>
          <div className="border-l border-[var(--line)] pl-6 lg:mb-2">
            <div className="mb-5 flex items-center gap-3 font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--orange)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--orange)] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--orange)]" />
              </span>
              Open to work
            </div>
            <p className="text-[var(--muted)]">
              Abhilash is available for{" "}
              <span className="text-[var(--foreground)]">full-time</span>,{" "}
              <span className="text-[var(--foreground)]">internship</span>, and{" "}
              <span className="text-[var(--foreground)]">freelance</span> opportunities.
            </p>
            <div className="mt-7 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--muted)]">
              <MapPin size={13} className="text-[var(--orange)]" /> Ghaziabad, India
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-10 border-y border-[var(--line)] bg-[var(--orange)] text-[#fffaf4]">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-8 overflow-hidden px-5 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.14em] md:px-10">
          <span className="flex shrink-0 items-center gap-2">
            <Radio size={13} /> Currently building
          </span>
          <span className="hidden truncate opacity-80 sm:block">
            systems that compound / products that ship / ideas with signal
          </span>
          <span className="shrink-0">Available →</span>
        </div>
      </div>

      <section id="work" className="relative z-10 mx-auto max-w-[1240px] px-5 py-24 md:px-10 md:py-32">
        <div className="mb-12 flex items-end justify-between gap-5">
          <div>
            <div className="section-label mb-5">Selected work</div>
            <h2 className="font-display text-5xl font-bold md:text-7xl">Shipped signals.</h2>
          </div>
          <span className="hidden font-mono text-[11px] text-[var(--muted)] sm:block">04 / 07</span>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <article className="project-card bg-[var(--surface)]" key={project.title}>
              <ProjectVisual mark={project.mark} visual={project.visual} />
              <div className="p-6 md:p-7">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--orange)]">
                      {project.number} / {project.type}
                    </p>
                    <h3 className="font-display text-3xl font-bold">{project.title}</h3>
                  </div>
                  <ArrowUpRight size={19} className="shrink-0 text-[var(--muted)]" />
                </div>
                <p className="mb-6 max-w-[440px] text-sm leading-6 text-[var(--muted)]">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 border-t border-[var(--line)] pt-5">
                  {project.stack.map((item) => (
                    <span className="font-mono text-[10px] uppercase text-[var(--muted)]" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex gap-5 font-mono text-[10px] uppercase tracking-[0.08em]">
                  <a className="orange-link" href={project.github} target="_blank" rel="noreferrer">
                    GitHub <ExternalLink size={12} />
                  </a>
                  {project.live && (
                    <a className="orange-link" href={project.live} target="_blank" rel="noreferrer">
                      Live site <ArrowUpRight size={12} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 flex justify-end">
          <a
            href="https://github.com/Abhilash-0322"
            target="_blank"
            rel="noreferrer"
            className="outline-button"
          >
            More on GitHub <Github size={14} />
          </a>
        </div>
      </section>

      <section id="about" className="relative z-10 border-y border-[var(--line)] bg-[var(--surface)]">
        <div className="mx-auto grid max-w-[1240px] gap-16 px-5 py-24 md:px-10 md:py-32 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <div className="section-label mb-5">About the operator</div>
            <h2 className="font-display max-w-[450px] text-5xl font-bold leading-[0.95] md:text-7xl">
              Calm systems. Sharp edges.
            </h2>
          </div>
          <div className="max-w-[640px]">
            <p className="text-2xl leading-9 tracking-[-0.03em] md:text-3xl md:leading-[1.25]">
              Backend and AI systems developer with hands-on experience shipping FastAPI services,
              cloud deployments, multi-agent workflows, and RAG pipelines.
            </p>
            <p className="mt-7 max-w-[560px] leading-7 text-[var(--muted)]">
              I care about the layer after the pitch: clear architecture, useful observability,
              thoughtful data models, and deployments that stay boring in production. At KIET, I
              lead AI/ML work at Innogeeks Club and mentor teams from first endpoint to final demo.
            </p>
            <div className="mt-10 grid gap-5 border-t border-[var(--line)] pt-7 sm:grid-cols-2">
              <div>
                <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--orange)]">
                  Currently
                </p>
                <p className="text-sm">AI/ML Coordinator · Innogeeks Club</p>
                <p className="mt-1 text-sm text-[var(--muted)]">B.Tech IT · KIET · 2027</p>
              </div>
              <div>
                <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--orange)]">
                  Credentials
                </p>
                <p className="text-sm">AWS Certified Cloud Practitioner</p>
                <p className="mt-1 text-sm text-[var(--muted)]">Google AI Essentials</p>
              </div>
            </div>
            <a
              href="mailto:abhilash.m.git@gmail.com"
              className="orange-link mt-9 font-mono text-[11px] uppercase tracking-[0.08em]"
            >
              Start a conversation <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-[1240px] px-5 py-24 md:px-10 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <div className="section-label mb-5">The toolkit</div>
            <h2 className="font-display text-5xl font-bold md:text-7xl">Built to move.</h2>
            <p className="mt-7 max-w-[290px] text-sm leading-6 text-[var(--muted)]">
              A practical stack for turning ambiguous problems into dependable, observable
              products.
            </p>
          </div>
          <div className="grid content-start gap-7 sm:grid-cols-2">
            <div className="border border-[var(--line)] bg-[var(--surface)] p-6">
              <Code2 className="mb-8 text-[var(--orange)]" size={22} strokeWidth={1.5} />
              <h3 className="mb-2 font-display text-2xl font-bold">Ship the core</h3>
              <p className="text-sm leading-6 text-[var(--muted)]">
                Python-first backends, clean APIs, data models, and full-stack surfaces that hold
                up under real use.
              </p>
            </div>
            <div className="border border-[var(--line)] bg-[var(--surface)] p-6">
              <Sparkles className="mb-8 text-[var(--orange)]" size={22} strokeWidth={1.5} />
              <h3 className="mb-2 font-display text-2xl font-bold">Make AI useful</h3>
              <p className="text-sm leading-6 text-[var(--muted)]">
                Agents and RAG with a job to do — grounded in good retrieval, clear evaluation,
                and a path to production.
              </p>
            </div>
            <div className="border border-[var(--line)] bg-[var(--surface)] p-6 sm:col-span-2">
              <div className="mb-5 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--muted)]">
                <span>Known commands</span>
                <Terminal size={15} className="text-[var(--orange)]" />
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {skills.map((skill) => (
                  <div className="terminal-line font-mono text-xs text-[var(--muted)]" key={skill}>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative z-10 border-t border-[var(--line)] bg-[var(--orange)] text-[#fffaf4]">
        <div className="mx-auto max-w-[1240px] px-5 py-24 md:px-10 md:py-32">
          <div className="grid gap-14 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <div className="mb-6 flex items-center gap-3 font-mono text-[11px] font-bold uppercase tracking-[0.14em]">
                <BriefcaseBusiness size={15} /> Open to work
              </div>
              <h2 className="font-display max-w-[760px] text-6xl font-bold leading-[0.88] tracking-[-0.07em] md:text-9xl">
                Have a
                <br />
                signal?
              </h2>
            </div>
            <div>
              <p className="max-w-[330px] text-lg leading-7 text-[#fffaf4]/80">
                Tell me what you&apos;re building. I&apos;m open to full-time roles, internships,
                and freelance systems work.
              </p>
              <a
                href="mailto:abhilash.m.git@gmail.com"
                className="mt-8 inline-flex items-center gap-3 border-b border-[#fffaf4] pb-2 font-mono text-sm font-bold uppercase tracking-[0.08em]"
              >
                abhilash.m.git@gmail.com <Send size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 mx-auto flex max-w-[1240px] flex-col justify-between gap-5 px-5 py-7 font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--muted)] sm:flex-row sm:items-center md:px-10">
        <span>© 2026 Abhilash Maurya</span>
        <div className="flex items-center gap-5">
          <a className="transition-colors hover:text-[var(--orange)]" href="https://github.com/Abhilash-0322" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="transition-colors hover:text-[var(--orange)]" href="https://www.linkedin.com/in/abhilash-maurya-b615b9277/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="transition-colors hover:text-[var(--orange)]" href="mailto:abhilash.m.git@gmail.com">
            Email
          </a>
        </div>
        <div className="flex items-center gap-2 text-[var(--orange)]">
          <Check size={13} /> Systems online
        </div>
      </footer>
    </main>
  );
}
