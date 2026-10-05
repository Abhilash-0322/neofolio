"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const projects = [
  {
    number: "01",
    title: "TalentInfra",
    description:
      "A bias-aware hiring workspace where a team of agents turns messy candidate data into explainable, human-reviewed decisions.",
    stack: ["FastAPI", "Next.js", "PostgreSQL", "Azure"],
    type: "AI systems",
    github: "https://github.com/Abhilash-0322/zynd-aickathon",
    live: "https://zynd-hiring-app.azurewebsites.net",
    accent: "orange",
  },
  {
    number: "02",
    title: "SolSniff",
    description:
      "A narrative intelligence agent for the Solana ecosystem. It finds the signal in fast-moving ideas, communities, and launches.",
    stack: ["Next.js", "Groq", "Prisma", "Vercel"],
    type: "Product engineering",
    github: "https://github.com/Abhilash-0322/sol-sniff",
    live: "https://solsniffer.vercel.app/",
    accent: "blue",
  },
  {
    number: "03",
    title: "ChainSentinel AI",
    description:
      "Multi-chain smart contract risk and compliance tooling designed to make a technical audit legible before capital moves.",
    stack: ["FastAPI", "Next.js", "MongoDB"],
    type: "Fintech / security",
    github: "https://github.com/Abhilash-0322/chainsentinel.ai",
    accent: "green",
  },
];

const capabilities = [
  ["01", "Backend & APIs", "FastAPI · Django · Express"],
  ["02", "AI systems", "Agents · RAG · LangChain"],
  ["03", "Cloud & delivery", "AWS · Azure · Docker · CI/CD"],
  ["04", "Data foundations", "Postgres · MongoDB · Redis"],
];

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M3 13 13 3M5 3h8v8" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <circle cx="10" cy="10" r="3.5" />
      <path d="M10 1v2M10 17v2M1 10h2M17 10h2M3.64 3.64l1.42 1.42M14.94 14.94l1.42 1.42M16.36 3.64l-1.42 1.42M5.06 14.94l-1.42 1.42" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M16.8 12.5A7 7 0 0 1 7.5 3.2 7.1 7.1 0 1 0 16.8 12.5Z" />
    </svg>
  );
}

export default function Home() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme") as Theme | null;
    const preferredTheme =
      savedTheme ??
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(preferredTheme);
    document.documentElement.dataset.theme = preferredTheme;
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("theme", nextTheme);
  };

  return (
    <main className="site-shell">
      <div className="top-rule" />
      <nav className="nav container" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Abhilash Maurya home">
          <span className="brand-mark">AM</span>
          <span className="brand-copy">
            <strong>Abhilash Maurya</strong>
            <small>Backend · AI systems</small>
          </span>
        </a>
        <div className="nav-links">
          <a href="#work">Selected work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="nav-actions">
          <span className="availability-dot" aria-hidden="true" />
          <span className="availability-label">Open to work</span>
          <button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}>
            {theme === "light" ? <MoonIcon /> : <SunIcon />}
          </button>
        </div>
      </nav>

      <section className="hero container" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span>Delhi NCR, India</span><span className="eyebrow-line" /><span>Available for the right build</span></p>
          <h1>
            I build the
            <br />
            <em>systems</em> behind
            <br />
            ambitious products.
          </h1>
          <p className="hero-intro">
            Backend and AI systems developer focused on reliable APIs, useful agents,
            and infrastructure that holds up beyond the demo.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              Explore the work <ArrowUpRight />
            </a>
            <a className="text-link" href="mailto:abhilash.m.git@gmail.com">
              Start a conversation <span>↗</span>
            </a>
          </div>
        </div>
        <div className="hero-aside">
          <div className="blueprint-card">
            <div className="card-topline"><span>Field notes / 2026</span><span>01—04</span></div>
            <div className="orbital-mark" aria-hidden="true">
              <span className="orbit orbit-one" />
              <span className="orbit orbit-two" />
              <span className="orbit orbit-three" />
              <span className="orbital-core">AM</span>
            </div>
            <div className="card-caption">
              <span>Currently thinking about</span>
              <strong>AI that earns its place<br />in the stack.</strong>
            </div>
            <div className="card-coordinates">28.6692° N&nbsp;&nbsp; 77.4538° E</div>
          </div>
          <div className="hero-stat-row">
            <div><strong>5+</strong><span>AI & full-stack<br />MVPs led</span></div>
            <div><strong>3–6</strong><span>People in a<br />shipping team</span></div>
            <div><strong>∞</strong><span>Things left<br />to build</span></div>
          </div>
        </div>
      </section>

      <div className="ticker" aria-label="Areas of expertise">
        <div className="ticker-track">
          <span>PYTHON</span><i>✳</i><span>FASTAPI</span><i>✳</i><span>AI AGENTS</span><i>✳</i><span>CLOUD INFRASTRUCTURE</span><i>✳</i><span>RAG SYSTEMS</span><i>✳</i><span>PYTHON</span><i>✳</i><span>FASTAPI</span><i>✳</i><span>AI AGENTS</span><i>✳</i><span>CLOUD INFRASTRUCTURE</span><i>✳</i><span>RAG SYSTEMS</span><i>✳</i>
        </div>
      </div>

      <section className="intro-section container" id="about">
        <div className="section-label"><span>About / 01</span><span className="section-line" /></div>
        <div className="intro-grid">
          <h2>Technical depth,<br /><span>human context.</span></h2>
          <div className="intro-body">
            <p className="large-copy">
              I like working at the seam between a clear product idea and the
              systems that make it real.
            </p>
            <p>
              From modeling a database to deploying a multi-agent workflow, I
              care about the unglamorous details: clean interfaces, useful
              observability, and shipping something people can actually use.
            </p>
            <a className="arrow-link" href="https://github.com/Abhilash-0322" target="_blank" rel="noreferrer">
              More on GitHub <ArrowUpRight />
            </a>
          </div>
        </div>
        <div className="capability-grid">
          {capabilities.map(([number, title, details]) => (
            <div className="capability" key={number}>
              <span className="capability-number">{number}</span>
              <strong>{title}</strong>
              <small>{details}</small>
            </div>
          ))}
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="container">
          <div className="section-heading">
            <div className="section-label"><span>Selected work / 02</span><span className="section-line" /></div>
            <p>Some things I&apos;ve shipped, shaped,<br />and learned from.</p>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article className={`project-card project-${project.accent}`} key={project.number}>
                <div className="project-index">{project.number}</div>
                <div className="project-main">
                  <div className="project-meta"><span>{project.type}</span><span className="project-dot" /></div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="stack-list">
                    {project.stack.map((item) => <span key={item}>{item}</span>)}
                  </div>
                </div>
                <div className="project-links">
                  {project.live && <a href={project.live} target="_blank" rel="noreferrer" aria-label={`${project.title} live project`}>Live <ArrowUpRight /></a>}
                  <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} on GitHub`}>GitHub <ArrowUpRight /></a>
                </div>
                <div className="project-shape" aria-hidden="true"><span /><span /><span /></div>
              </article>
            ))}
          </div>
          <div className="more-work">
            <span>More experiments, open source &amp; half-finished ideas</span>
            <a className="arrow-link" href="https://github.com/Abhilash-0322" target="_blank" rel="noreferrer">Browse GitHub <ArrowUpRight /></a>
          </div>
        </div>
      </section>

      <section className="experience-section container">
        <div className="section-label"><span>Experience / 03</span><span className="section-line" /></div>
        <div className="experience-grid">
          <div className="experience-title"><h2>Where the<br /><em>work</em> happens.</h2></div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">2026 — now</div>
              <div><h3>AI Engineer Intern <span>/ Spearmint Technologies</span></h3><p>Voice and agent features, TTS pipelines, fine-tuning, and data collection for Hermes-based agents.</p></div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2023 — now</div>
              <div><h3>AI/ML Coordinator <span>/ Innogeeks Club, KIET</span></h3><p>Leading MVP architecture and deployments while mentoring developers across Python, FastAPI, ML, and hackathon projects.</p></div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">In progress</div>
              <div><h3>B.Tech Information Technology <span>/ KIET</span></h3><p>Expected 2027 · AWS Certified Cloud Practitioner · Google AI Essentials.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="container contact-inner">
          <div className="section-label"><span>Contact / 04</span><span className="section-line" /></div>
          <p className="contact-kicker">Have a system in mind?</p>
          <h2>Let&apos;s make it<br /><em>hold together.</em></h2>
          <a className="contact-email" href="mailto:abhilash.m.git@gmail.com">abhilash.m.git@gmail.com <ArrowUpRight /></a>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/abhilash-maurya-b615b9277/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight /></a>
            <a href="https://github.com/Abhilash-0322" target="_blank" rel="noreferrer">GitHub <ArrowUpRight /></a>
            <a href="https://x.com/abhilash_glitch" target="_blank" rel="noreferrer">X / Twitter <ArrowUpRight /></a>
          </div>
        </div>
      </section>

      <footer className="footer container">
        <span>© 2026 Abhilash Maurya</span>
        <span>Built with intention, shipped from Delhi NCR.</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
