"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

const projects = [
  {
    number: "01",
    title: "TalentInfra",
    type: "Multi-agent hiring infrastructure",
    description:
      "A bias-aware hiring system that coordinates six specialist agents, streams decisions over WebSockets, and issues verifiable credentials.",
    stack: "FastAPI · Next.js · PostgreSQL · Groq · Azure",
    href: "https://github.com/Abhilash-0322/zynd-aickathon",
    live: "https://zynd-hiring-app.azurewebsites.net"
  },
  {
    number: "02",
    title: "SolSniff",
    type: "Solana narrative intelligence",
    description:
      "Two chained AI agents synthesize on-chain, developer, social, and news signals into grounded opportunities before they become obvious.",
    stack: "Next.js · TypeScript · Groq · Prisma · Vercel",
    href: "https://github.com/Abhilash-0322/sol-sniff",
    live: "https://solsniffer.vercel.app/"
  },
  {
    number: "03",
    title: "ChainSentinel AI",
    type: "Cross-chain security engine",
    description:
      "A practical risk and compliance layer for Ethereum, Solana, and Aptos with structured severity scoring and live monitoring.",
    stack: "FastAPI · Next.js · MongoDB · WebSockets",
    href: "https://github.com/Abhilash-0322/chainsentinel.ai",
    live: ""
  }
];

const capabilities = [
  {
    index: "A",
    title: "Backend systems",
    detail: "APIs, auth boundaries, data models, real-time services, and the boring reliability work that lets products scale.",
    tags: ["Python", "FastAPI", "Django", "PostgreSQL", "Redis"]
  },
  {
    index: "B",
    title: "Applied intelligence",
    detail: "Agents and RAG pipelines designed around a real workflow, with useful retrieval, observable decisions, and a path to production.",
    tags: ["AI agents", "RAG", "LangChain", "Groq", "Vector DBs"]
  },
  {
    index: "C",
    title: "Cloud delivery",
    detail: "Containers, CI/CD, deployment architecture, and operational thinking from first commit through a dependable release.",
    tags: ["Docker", "AWS", "Azure", "Linux", "GitHub Actions"]
  }
];

const milestones = [
  {
    date: "2026 — now",
    role: "AI Engineer Intern",
    company: "Spearmint Technologies · Remote",
    detail: "Voice and agent features, TTS pipelines, fine-tuning, and data collection."
  },
  {
    date: "2023 — now",
    role: "AI/ML Coordinator",
    company: "Innogeeks Club, KIET",
    detail: "Led 5+ AI and full-stack MVPs; mentored developers and coordinated fast-moving teams."
  },
  {
    date: "recognition",
    role: "Builder under pressure",
    company: "Hackathons · open source · invention",
    detail: "MLH Solana track winner, solo AI track winner, patent co-inventor, and GSSOC/Hacktoberfest contributor."
  }
];

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M3 13 13 3M5 3h8v8" />
    </svg>
  );
}

function ArrowDown() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M8 2v11M4 9l4 4 4-4" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 18 18" aria-hidden="true">
      <circle cx="9" cy="9" r="3.25" />
      <path d="M9 1v2M9 15v2M1 9h2M15 9h2M3.35 3.35l1.4 1.4M13.25 13.25l1.4 1.4M14.65 3.35l-1.4 1.4M4.75 13.25l-1.4 1.4" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 18 18" aria-hidden="true">
      <path d="M15 11.2A6.6 6.6 0 0 1 6.8 3 6.7 6.7 0 1 0 15 11.2Z" />
    </svg>
  );
}

export default function Home() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("storm-theme") as Theme | null;
    const preferredTheme =
      savedTheme ?? (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
    setTheme(preferredTheme);
    document.documentElement.dataset.theme = preferredTheme;
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("storm-theme", nextTheme);
  }

  return (
    <main>
      <div className="noise" aria-hidden="true" />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Abhilash Maurya home">
          <span className="brand-mark">AM</span>
          <span className="brand-copy">
            <strong>Abhilash Maurya</strong>
            <small>Systems / AI / Cloud</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#systems">Systems</a>
          <a href="#about">About</a>
        </nav>

        <div className="header-actions">
          <a className="availability-chip" href="#contact">
            <span className="pulse-dot" />
            Open to work
          </a>
          <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}>
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </header>

      <section className="hero section-wrap" id="top">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> Backend · AI systems · DevOps</p>
            <h1>Software with a <em>steady pulse.</em></h1>
            <p className="hero-lede">
              I&apos;m Abhilash — a backend and AI systems developer building the APIs, agents, and cloud infrastructure that make ambitious products dependable.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                View selected work <ArrowUpRight />
              </a>
              <a className="text-link" href="mailto:abhilash.m.git@gmail.com">
                Start a conversation <ArrowUpRight />
              </a>
            </div>
          </div>

          <div className="signal-card">
            <div className="signal-topline">
              <span>SYS / 5137</span>
              <span className="live-label"><i /> Live status</span>
            </div>
            <div className="signal-core">
              <span className="signal-ring ring-one" />
              <span className="signal-ring ring-two" />
              <span className="signal-core-dot" />
              <span className="signal-cross cross-x" />
              <span className="signal-cross cross-y" />
              <span className="signal-coordinates">28.67° N<br />77.43° E</span>
            </div>
            <div className="signal-foot">
              <div>
                <span className="micro-label">Current state</span>
                <strong>Available for meaningful work</strong>
              </div>
              <ArrowDown />
            </div>
          </div>
        </div>

        <div className="hero-meta">
          <div><span className="micro-label">Based in</span><strong>Delhi NCR, India</strong></div>
          <div><span className="micro-label">Focus</span><strong>Cloud · APIs · Agents</strong></div>
          <div><span className="micro-label">Currently</span><strong>B.Tech IT / 2027</strong></div>
          <div className="scroll-note"><span className="scroll-line" /> Scroll to explore</div>
        </div>
      </section>

      <div className="ticker" aria-label="Technical skills">
        <div className="ticker-track">
          <span>Python</span><b>✳</b><span>FastAPI</span><b>✳</b><span>AI agents</span><b>✳</b><span>Docker</span><b>✳</b><span>PostgreSQL</span><b>✳</b><span>Azure</span><b>✳</b>
          <span>Python</span><b>✳</b><span>FastAPI</span><b>✳</b><span>AI agents</span><b>✳</b><span>Docker</span><b>✳</b><span>PostgreSQL</span><b>✳</b><span>Azure</span><b>✳</b>
        </div>
      </div>

      <section className="section-wrap section" id="work">
        <div className="section-heading">
          <p className="eyebrow"><span className="eyebrow-line" /> 01 / Selected work</p>
          <h2>Proof, not promises.</h2>
          <p>Systems I&apos;ve taken from an idea to something people can actually use.</p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <span className="project-number">{project.number}</span>
              <div className="project-main">
                <p className="project-type">{project.type}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <p className="project-stack">{project.stack}</p>
              </div>
              <div className="project-links">
                <a href={project.href} target="_blank" rel="noreferrer">Repository <ArrowUpRight /></a>
                {project.live ? <a href={project.live} target="_blank" rel="noreferrer">Live system <ArrowUpRight /></a> : <span className="project-private">Research build</span>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="systems-section section" id="systems">
        <div className="section-wrap">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow"><span className="eyebrow-line" /> 02 / How I work</p>
              <h2>Calm systems<br /><em>in a noisy world.</em></h2>
            </div>
            <p>Good engineering is a practice of reducing surprise. I bring product context to infrastructure, and operational discipline to AI.</p>
          </div>
          <div className="capability-grid">
            {capabilities.map((capability) => (
              <article className="capability-card" key={capability.index}>
                <span className="capability-index">{capability.index}</span>
                <h3>{capability.title}</h3>
                <p>{capability.detail}</p>
                <div className="tag-list">
                  {capability.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrap section about-section" id="about">
        <div className="about-intro">
          <p className="eyebrow"><span className="eyebrow-line" /> 03 / The operator</p>
          <h2>Curious enough to<br /><em>go deep.</em></h2>
          <p className="about-copy">
            I like working at the seam between a sharp product idea and the infrastructure it needs to survive. That means getting close to the problem, making trade-offs visible, and shipping a version that can teach us something.
          </p>
          <a className="text-link" href="https://github.com/Abhilash-0322" target="_blank" rel="noreferrer">More on GitHub <ArrowUpRight /></a>
        </div>
        <div className="timeline">
          {milestones.map((milestone) => (
            <div className="timeline-item" key={milestone.date}>
              <span className="timeline-date">{milestone.date}</span>
              <div className="timeline-marker"><span /></div>
              <div>
                <h3>{milestone.role}</h3>
                <p className="timeline-company">{milestone.company}</p>
                <p>{milestone.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-wrap contact-inner">
          <div>
            <p className="eyebrow"><span className="eyebrow-line" /> 04 / Next signal</p>
            <h2>Let&apos;s build<br /><em>something solid.</em></h2>
          </div>
          <div className="contact-side">
            <p>Have a backend, AI, or infrastructure problem worth thinking through? I&apos;m open to roles, collaborations, and ambitious freelance work.</p>
            <a className="button button-light" href="mailto:abhilash.m.git@gmail.com">abhilash.m.git@gmail.com <ArrowUpRight /></a>
          </div>
        </div>
      </section>

      <footer className="site-footer section-wrap">
        <span>© 2026 Abhilash Maurya</span>
        <span>Built with care / shipped from Delhi</span>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/abhilash-maurya-b615b9277/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://x.com/abhilash_glitch" target="_blank" rel="noreferrer">X</a>
          <a href="https://github.com/Abhilash-0322" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </footer>
    </main>
  );
}
