import {
  ArrowUpRight,
  BriefcaseBusiness,
  Cloud,
  Code2,
  ExternalLink,
  Github,
  Layers3,
  Linkedin,
  Mail,
  Network,
  Send,
  ShieldCheck,
  Sparkles,
  Terminal,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const projects = [
  {
    index: "01",
    title: "TalentInfra",
    description:
      "Bias-aware hiring intelligence built as a multi-agent system for more explainable candidate matching.",
    tags: ["FastAPI", "Next.js", "Azure"],
    href: "https://github.com/Abhilash-0322/zynd-aickathon",
  },
  {
    index: "02",
    title: "SolSniff",
    description:
      "A narrative and idea agent that turns noisy Solana signals into useful, readable market context.",
    tags: ["Next.js", "Groq", "Prisma"],
    href: "https://github.com/Abhilash-0322/sol-sniff",
  },
  {
    index: "03",
    title: "ChainSentinel AI",
    description:
      "Multi-chain smart contract risk and compliance tooling designed for fast, evidence-led reviews.",
    tags: ["FastAPI", "MongoDB", "AI"],
    href: "https://github.com/Abhilash-0322/chainsentinel.ai",
  },
];

const stackGroups = [
  { label: "Build", items: ["Python", "TypeScript", "C++", "SQL"] },
  { label: "Backend", items: ["FastAPI", "Django", "Express.js", "LangChain"] },
  { label: "Data", items: ["PostgreSQL", "MongoDB", "Redis", "Vector DBs"] },
  { label: "Ship", items: ["AWS", "Azure", "Docker", "GitHub Actions"] },
];

export default function Home() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <a className="brand" href="#overview">
          <span className="brand-mark">AM</span>
          <span className="brand-copy">
            abhilash<span>.dev</span>
          </span>
        </a>

        <p className="nav-label">Workspace</p>
        <nav className="nav" aria-label="Primary navigation">
          <a className="nav-link active" href="#overview">
            <Layers3 size={15} />
            <span>Overview</span>
          </a>
          <a className="nav-link" href="#projects">
            <Code2 size={15} />
            <span>Projects</span>
          </a>
          <a className="nav-link" href="#experience">
            <BriefcaseBusiness size={15} />
            <span>Experience</span>
          </a>
          <a className="nav-link" href="#stack">
            <Terminal size={15} />
            <span>Stack</span>
          </a>
          <a className="nav-link" href="#contact">
            <Mail size={15} />
            <span>Contact</span>
          </a>
        </nav>

        <div className="sidebar-bottom">
          <div className="availability-card">
            <div className="availability-head">
              <span className="pulse" />
              OPEN TO WORK
            </div>
            <p>Available for backend, AI systems, and cloud engineering roles.</p>
          </div>
          <div className="sidebar-meta">
            <span>DELHI NCR, IN</span>
            <span>2026</span>
          </div>
        </div>
      </aside>

      <main className="content">
        <header className="topbar">
          <div className="breadcrumb">
            portfolio <span>/</span> <strong>overview</strong>
          </div>
          <div className="topbar-actions">
            <a
              aria-label="Open GitHub profile"
              className="icon-button"
              href="https://github.com/Abhilash-0322"
              rel="noreferrer"
              target="_blank"
            >
              <Github size={15} />
            </a>
            <ThemeToggle />
          </div>
        </header>

        <section className="hero" id="overview">
          <div>
            <p className="eyebrow">Backend · AI systems · Cloud</p>
            <h1>
              I build systems
              <br />
              that <span className="accent">ship.</span>
            </h1>
            <p className="hero-copy">
              I&apos;m Abhilash Maurya — a backend and AI systems developer focused on
              production-ready APIs, intelligent agents, and reliable cloud infrastructure.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#contact">
                Let&apos;s work together <ArrowUpRight size={14} />
              </a>
              <a
                className="secondary-button"
                href="https://github.com/Abhilash-0322"
                rel="noreferrer"
                target="_blank"
              >
                View GitHub <ExternalLink size={13} />
              </a>
            </div>
          </div>

          <div className="hero-side">
            <div className="hero-side-top">
              <span className="hero-side-title">CURRENT SIGNAL</span>
              <span className="live-label">
                <span className="pulse" /> LIVE
              </span>
            </div>
            <div className="hero-side-body">
              <p>
                Turning complex product ideas into clean, observable systems with a bias for
                shipping.
              </p>
              <div className="signal-list">
                <div className="signal">
                  <Cloud size={14} /> Cloud-native deployments
                </div>
                <div className="signal">
                  <Network size={14} /> Multi-agent workflows
                </div>
                <div className="signal">
                  <ShieldCheck size={14} /> Secure by default
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="panel metrics" aria-label="Career highlights">
          <div className="metric">
            <div className="metric-value">5+</div>
            <div className="metric-label">AI & full-stack MVPs led</div>
          </div>
          <div className="metric">
            <div className="metric-value">6+</div>
            <div className="metric-label">Developers mentored</div>
          </div>
          <div className="metric">
            <div className="metric-value">3×</div>
            <div className="metric-label">Hackathon finalist</div>
          </div>
          <div className="metric">
            <div className="metric-value">2027</div>
            <div className="metric-label">B.Tech graduation</div>
          </div>
        </section>

        <section id="projects">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2>Projects that made it out</h2>
            </div>
            <a
              className="section-link"
              href="https://github.com/Abhilash-0322?tab=repositories"
              rel="noreferrer"
              target="_blank"
            >
              all repositories <ArrowUpRight size={13} />
            </a>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <a
                className="panel project-card"
                href={project.href}
                key={project.index}
                rel="noreferrer"
                target="_blank"
              >
                <div className="project-top">
                  <span className="project-index">{project.index}</span>
                  <ArrowUpRight color="var(--subtle)" size={15} />
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-bottom">
                  <div className="tags">
                    {project.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="project-arrow">
                    <ExternalLink size={12} />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <div className="lower-grid">
          <section id="experience">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Track record</p>
                <h2>Experience</h2>
              </div>
            </div>
            <div className="panel experience-card">
              <div className="experience-row">
                <div className="experience-date">AUG 2026<br />PRESENT</div>
                <div>
                  <h3 className="experience-role">AI Engineer Intern</h3>
                  <p className="experience-org">Spearmint Technologies · Remote</p>
                  <p className="experience-detail">
                    Voice and agent features across TTS pipelines, fine-tuning, data collection,
                    and Hermes-based workflows.
                  </p>
                </div>
              </div>
              <div className="experience-row">
                <div className="experience-date">NOV 2023<br />PRESENT</div>
                <div>
                  <h3 className="experience-role">AI/ML Coordinator</h3>
                  <p className="experience-org">Innogeeks Club, KIET</p>
                  <p className="experience-detail">
                    Led architecture and delivery for 5+ MVPs while mentoring developers and
                    coordinating agile teams of 3–6.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="stack">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Toolbox</p>
                <h2>Core stack</h2>
              </div>
            </div>
            <div className="panel stack-card">
              <div className="stack-groups">
                {stackGroups.map((group) => (
                  <div className="stack-group" key={group.label}>
                    <div className="stack-group-label">{group.label}</div>
                    <div className="stack-items">
                      {group.items.map((item) => (
                        <span className="stack-item" key={item}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        <section className="panel contact-panel" id="contact">
          <div>
            <p className="eyebrow">Have a system to build?</p>
            <h2>Let&apos;s make it real.</h2>
            <p>Open to backend, AI systems, and cloud engineering opportunities.</p>
          </div>
          <a className="primary-button" href="mailto:abhilash.m.git@gmail.com">
            Start a conversation <Send size={13} />
          </a>
        </section>

        <footer className="footer">
          <span>© 2026 Abhilash Maurya. Built with intent.</span>
          <div className="footer-links">
            <a href="mailto:abhilash.m.git@gmail.com">
              <Mail size={12} /> Email
            </a>
            <a
              href="https://www.linkedin.com/in/abhilash-maurya-b615b9277/"
              rel="noreferrer"
              target="_blank"
            >
              <Linkedin size={12} /> LinkedIn
            </a>
            <a href="https://x.com/abhilash_glitch" rel="noreferrer" target="_blank">
              <Sparkles size={12} /> X
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
