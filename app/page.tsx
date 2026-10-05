import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MoveUpRight,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const projects = [
  {
    number: "01",
    name: "TalentInfra",
    type: "Multi-agent hiring intelligence",
    description:
      "A bias-aware hiring workspace that turns messy hiring signals into explainable, team-ready decisions.",
    stack: "FastAPI · Next.js · PostgreSQL · Groq · Azure",
    href: "https://github.com/Abhilash-0322/zynd-aickathon",
    visual: "talent",
  },
  {
    number: "02",
    name: "ChainSentinel AI",
    type: "Smart contract compliance",
    description:
      "Security intelligence across Ethereum, Solana, and Aptos with static analysis, risk scoring, and live alerts.",
    stack: "Python · FastAPI · MongoDB · WebSockets · Docker",
    href: "https://github.com/Abhilash-0322/chainsentinel.ai",
    visual: "chain",
  },
  {
    number: "03",
    name: "Quadrant RAG",
    type: "Knowledge retrieval system",
    description:
      "An API-first RAG platform for ingesting custom knowledge, retrieving the right context, and answering with precision.",
    stack: "FastAPI · LangChain · Vector DBs · Docker",
    href: "https://github.com/Abhilash-0322/quadrant-rag",
    visual: "quadrant",
  },
];

const capabilities = [
  "Backend architecture",
  "AI agents & RAG",
  "Cloud deployment",
  "APIs & integrations",
  "Data & retrieval systems",
  "Technical leadership",
];

export default function Home() {
  return (
    <main className="grain min-h-screen">
      <header className="shell flex items-center justify-between border-b border-ink/20 py-5">
        <a href="#top" className="flex items-center gap-3" aria-label="Back to top">
          <span className="flex h-8 w-8 items-center justify-center bg-ink text-sm font-bold text-paper">
            AM
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.16em]">
            Abhilash Maurya
          </span>
        </a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          <a className="line-link" href="#work">
            Work
          </a>
          <a className="line-link" href="#about">
            About
          </a>
          <a className="line-link" href="#contact">
            Contact
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.14em] text-ink/45 sm:block">
            Delhi NCR / IN
          </span>
          <ThemeToggle />
        </div>
      </header>

      <section id="top" className="shell border-b border-ink/20 pb-20 pt-12 md:pb-28 md:pt-20">
        <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-start">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3 items-center justify-center">
              <span className="absolute h-3 w-3 animate-ping rounded-full bg-signal opacity-80" />
              <span className="relative h-2 w-2 rounded-full bg-signal ring-1 ring-ink/40" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.14em]">
              Open to work
            </span>
          </div>
          <p className="max-w-[300px] text-sm leading-relaxed text-ink/65 md:text-right">
            Available for backend, AI systems, and cloud engineering roles where the work ships to
            real users.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:gap-20">
          <div>
            <p className="eyebrow reveal-line" style={{ animationDelay: "80ms" }}>
              Backend developer / AI systems engineer
            </p>
            <h1
              className="display-title reveal-line mt-7 max-w-[900px] text-[clamp(4.4rem,12vw,11rem)] font-bold uppercase"
              style={{ animationDelay: "160ms" }}
            >
              Systems
              <br />
              <span className="text-ink/45">that hold up.</span>
            </h1>
            <div className="mt-10 flex max-w-[500px] items-start gap-4 border-l-2 border-signal pl-5">
              <p className="text-base leading-relaxed text-ink/75 md:text-lg">
                I build dependable backends and AI products for the space between a good idea and
                a useful, deployed system.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-5">
              <a href="#work" className="group inline-flex items-center gap-3 bg-ink px-5 py-3 font-mono text-[11px] uppercase tracking-[0.1em] text-paper transition-transform hover:-translate-y-0.5">
                See selected work
                <ArrowDownRight size={15} className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
              </a>
              <a href="mailto:abhilash.m.git@gmail.com" className="line-link self-center">
                Start a conversation <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          <div className="concrete-panel relative min-h-[300px] overflow-hidden border border-ink/20 lg:min-h-[440px]">
            <div className="absolute left-5 top-5 z-10 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-ink/55">
              <span className="h-1.5 w-1.5 rounded-full bg-signal" />
              Built for the real world
            </div>
            <div className="absolute -bottom-8 -right-8 h-64 w-64 rounded-full border-[34px] border-ink/10" />
            <div className="absolute right-16 top-20 h-44 w-44 rotate-12 border border-ink/20" />
            <div className="absolute bottom-16 left-10 h-32 w-32 -rotate-12 bg-ink/10" />
            <div className="absolute bottom-8 left-7 font-mono text-[9px] uppercase tracking-[0.16em] text-ink/45">
              28.67° N / 77.42° E
            </div>
            <div className="absolute right-6 top-1/2 -translate-y-1/2">
              <div className="display-title text-right text-7xl font-bold uppercase leading-[0.74] text-ink/15 md:text-8xl">
                make
                <br />
                it
                <br />
                useful
              </div>
            </div>
            <div className="absolute bottom-4 right-5 font-mono text-[9px] uppercase tracking-[0.16em] text-ink/45">
              / 2026 / 001
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="shell border-b border-ink/20 py-16 md:py-24">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Selected output / 2024—26</p>
            <h2 className="display-title mt-4 text-5xl font-bold uppercase md:text-7xl">
              Built to ship
            </h2>
          </div>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.14em] text-ink/50 sm:block">
            03 / case files
          </span>
        </div>

        <div className="divide-y divide-ink/20 border-y border-ink/20">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group grid gap-8 py-10 md:grid-cols-[90px_1fr_1.2fr] md:items-center md:gap-10 md:py-14"
            >
              <span className="project-number text-ink/20">{project.number}</span>
              <div>
                <p className="eyebrow">{project.type}</p>
                <h3 className="display-title mt-3 text-4xl font-bold uppercase md:text-5xl">
                  {project.name}
                </h3>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="line-link mt-7"
                  aria-label={`View ${project.name} on GitHub`}
                >
                  View project <ArrowUpRight size={14} />
                </a>
              </div>
              <div className="grid gap-7 sm:grid-cols-[1fr_190px] sm:items-center">
                <div>
                  <p className="max-w-[440px] text-sm leading-relaxed text-ink/65 md:text-base">
                    {project.description}
                  </p>
                  <p className="mt-5 font-mono text-[10px] uppercase leading-relaxed tracking-[0.08em] text-ink/45">
                    {project.stack}
                  </p>
                </div>
                <ProjectVisual type={project.visual} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="shell border-b border-ink/20 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <div>
            <p className="eyebrow">About the practice</p>
            <h2 className="display-title mt-4 text-5xl font-bold uppercase md:text-7xl">
              Less demo.
              <br />
              More <span className="text-ink/45">depth.</span>
            </h2>
          </div>
          <div className="max-w-[700px]">
            <p className="text-xl leading-snug md:text-3xl">
              I&apos;m Abhilash, a backend and AI systems developer based in Delhi NCR. I care
              about the invisible layer: the APIs, data flows, retrieval logic, and deployments
              that make an ambitious product feel simple.
            </p>
            <p className="mt-8 max-w-[580px] text-sm leading-relaxed text-ink/65 md:text-base">
              Currently studying Information Technology at KIET and coordinating AI/ML work at
              Innogeeks Club. I&apos;ve led small teams, shipped hackathon MVPs, mentored developers,
              and worked across Python, cloud infrastructure, and agentic workflows.
            </p>
            <div className="mt-12 grid border-t border-ink/20 sm:grid-cols-2">
              <div className="border-b border-ink/20 py-5 sm:border-r sm:pr-8">
                <p className="eyebrow">Now</p>
                <p className="mt-3 text-sm">AI/ML Coordinator · Innogeeks Club</p>
              </div>
              <div className="border-b border-ink/20 py-5 sm:pl-8">
                <p className="eyebrow">Learning</p>
                <p className="mt-3 text-sm">B.Tech IT · Expected 2027</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="shell border-b border-ink/20 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr] md:gap-24">
          <div>
            <p className="eyebrow">What I bring</p>
            <h2 className="display-title mt-4 text-5xl font-bold uppercase md:text-6xl">
              The toolkit
            </h2>
          </div>
          <div className="grid border-t border-ink/20 sm:grid-cols-2">
            {capabilities.map((capability, index) => (
              <div
                key={capability}
                className="flex items-center justify-between border-b border-ink/20 py-5 text-sm sm:px-4 first:sm:pl-0"
              >
                <span>{capability}</span>
                <span className="font-mono text-[10px] text-ink/40">0{index + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="shell py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="eyebrow">Have a hard problem?</p>
            <h2 className="display-title mt-5 max-w-[800px] text-[clamp(4rem,10vw,9rem)] font-bold uppercase">
              Let&apos;s make it <span className="text-ink/40">solid.</span>
            </h2>
            <a
              href="mailto:abhilash.m.git@gmail.com"
              className="group mt-10 inline-flex items-center gap-3 border-b border-ink pb-2 text-sm transition-opacity hover:opacity-60"
            >
              abhilash.m.git@gmail.com
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          <div className="flex flex-col gap-8 lg:items-end">
            <div className="flex items-center gap-2 text-sm text-ink/65">
              <MapPin size={15} />
              Ghaziabad, India
            </div>
            <div className="flex items-center gap-5">
              <a
                href="https://github.com/Abhilash-0322"
                target="_blank"
                rel="noreferrer"
                className="icon-button"
                aria-label="GitHub"
              >
                <Github size={16} strokeWidth={1.6} />
              </a>
              <a
                href="https://www.linkedin.com/in/abhilash-maurya-b615b9277/"
                target="_blank"
                rel="noreferrer"
                className="icon-button"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} strokeWidth={1.6} />
              </a>
              <a href="mailto:abhilash.m.git@gmail.com" className="icon-button" aria-label="Email">
                <Mail size={16} strokeWidth={1.6} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="shell flex flex-col justify-between gap-4 border-t border-ink/20 py-6 font-mono text-[9px] uppercase tracking-[0.13em] text-ink/50 sm:flex-row">
        <span>© 2026 Abhilash Maurya</span>
        <span>Designed for systems with substance</span>
        <a href="#top" className="flex items-center gap-2 transition-colors hover:text-ink">
          Back to top <MoveUpRight size={11} />
        </a>
      </footer>
    </main>
  );
}

function ProjectVisual({ type }: { type: string }) {
  if (type === "talent") {
    return (
      <div className="concrete-panel relative h-36 overflow-hidden border border-ink/15 transition-transform duration-500 group-hover:-rotate-2">
        <div className="absolute left-5 top-5 h-20 w-20 rounded-full border-[12px] border-signal/80" />
        <div className="absolute bottom-5 right-5 h-16 w-16 rotate-45 bg-ink/10" />
        <span className="absolute bottom-3 left-3 font-mono text-[8px] uppercase tracking-[0.12em] text-ink/45">
          signal / 01
        </span>
      </div>
    );
  }

  if (type === "chain") {
    return (
      <div className="concrete-panel relative h-36 overflow-hidden border border-ink/15 transition-transform duration-500 group-hover:rotate-2">
        <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rotate-45 border-2 border-ink/40" />
        <div className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-signal" />
        <span className="absolute bottom-3 right-3 font-mono text-[8px] uppercase tracking-[0.12em] text-ink/45">
          scan / 02
        </span>
      </div>
    );
  }

  return (
    <div className="concrete-panel relative h-36 overflow-hidden border border-ink/15 transition-transform duration-500 group-hover:-rotate-2">
      <div className="absolute left-5 top-5 grid h-24 w-24 grid-cols-2 gap-1">
        <div className="bg-ink/30" />
        <div className="bg-ink/10" />
        <div className="bg-signal" />
        <div className="bg-ink/20" />
      </div>
      <span className="absolute bottom-3 right-3 font-mono text-[8px] uppercase tracking-[0.12em] text-ink/45">
        context / 03
      </span>
    </div>
  );
}
