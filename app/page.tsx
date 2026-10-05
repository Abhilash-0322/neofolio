"use client";

import { useEffect, useState } from "react";

type IconProps = { size?: number };

function ArrowUpRight({ size = 16 }: IconProps) {
  return (
    <svg aria-hidden="true" fill="none" height={size} viewBox="0 0 16 16" width={size}>
      <path d="M3 13 13 3M5 3h8v8" stroke="currentColor" strokeLinecap="square" strokeWidth="1.35" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg aria-hidden="true" fill="none" height="14" viewBox="0 0 16 16" width="14">
      <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.2" />
      <path d="M8 1v2M8 13v2M1 8h2m10 0h2M3.05 3.05l1.42 1.42m7.06 7.06 1.42 1.42m0-9.9-1.42 1.42m-7.06 7.06-1.42 1.42" stroke="currentColor" strokeLinecap="round" strokeWidth="1.2" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg aria-hidden="true" fill="none" height="14" viewBox="0 0 16 16" width="14">
      <path d="M13.1 10.9A5.7 5.7 0 0 1 5.1 2.9a5.7 5.7 0 1 0 8 8Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.2" />
    </svg>
  );
}

function MenuIcon({ close = false }: { close?: boolean }) {
  return close ? (
    <svg aria-hidden="true" fill="none" height="17" viewBox="0 0 18 18" width="17">
      <path d="m4 4 10 10M14 4 4 14" stroke="currentColor" strokeLinecap="round" strokeWidth="1.3" />
    </svg>
  ) : (
    <svg aria-hidden="true" fill="none" height="17" viewBox="0 0 18 18" width="17">
      <path d="M3 5h12M3 9h12M3 13h12" stroke="currentColor" strokeLinecap="round" strokeWidth="1.3" />
    </svg>
  );
}

const projects = [
  {
    index: "01",
    title: "ChainSentinel AI",
    description:
      "Multi-chain compliance and security intelligence for Ethereum, Solana, and Aptos smart contracts.",
    tags: ["FastAPI", "MongoDB", "Groq", "WebSockets"],
    href: "https://github.com/Abhilash-0322/chainsentinel.ai",
    featured: true,
  },
  {
    index: "02",
    title: "TalentInfra",
    description:
      "A bias-aware hiring intelligence platform built with multi-agent workflows and explainable reports.",
    tags: ["Next.js", "PostgreSQL", "Azure", "Agents"],
    href: "https://zynd-hiring-app.azurewebsites.net",
    featured: false,
  },
  {
    index: "03",
    title: "Quadrant RAG",
    description:
      "Retrieval-augmented knowledge infrastructure: ingest, index, retrieve, and answer over custom data.",
    tags: ["Python", "LangChain", "Vector DB", "Docker"],
    href: "https://github.com/Abhilash-0322/quadrant-rag",
    featured: false,
  },
  {
    index: "04",
    title: "Zen Heaven",
    description:
      "AI-powered wellness support with sentiment analysis, recommendations, and Twilio safety escalation flows.",
    tags: ["FastAPI", "React", "Twilio", "AI"],
    href: "https://hack-haven2-0.vercel.app/",
    featured: false,
  },
];

const skills = [
  ["01 / Languages", "Python · C++ · JavaScript · SQL"],
  ["02 / Backend", "FastAPI · Django · Express.js · LangChain"],
  ["03 / Data", "PostgreSQL · MongoDB · MySQL · Redis · Vector DBs"],
  ["04 / Platform", "Docker · Git · Linux · AWS · Azure · GitHub Actions"],
];

export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
      document.documentElement.dataset.theme = savedTheme;
    }
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("portfolio-theme", nextTheme);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" onClick={closeMenu}>
          <span className="brand-mark">AM</span>
          <span>ABHILASH / MAURYA</span>
        </a>
        <nav className={`main-nav${menuOpen ? " open" : ""}`} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <button className="nav-button theme-toggle" type="button" onClick={toggleTheme}>
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </nav>
        <button
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="menu-button"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <MenuIcon close={menuOpen} />
        </button>
      </header>

      <div className="page-wrap" id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-grid">
            <div>
              <div className="eyebrow">Backend · AI systems · cloud</div>
              <h1 id="hero-title">
                Software with
                <br />
                <em>operational value.</em>
              </h1>
              <p className="hero-lead">
                I&apos;m Abhilash — a backend and AI systems developer building APIs,
                agents, and infrastructure that move from idea to production.
              </p>
              <div className="hero-actions">
                <a className="button" href="#projects">
                  View selected work <ArrowUpRight size={14} />
                </a>
                <a className="button button-muted" href="mailto:abhilash.m.git@gmail.com">
                  Start a conversation
                </a>
              </div>
            </div>
            <aside className="hero-aside">
              <div className="status"><span className="status-dot" /> Open to work</div>
              <p className="aside-title">Available for backend, cloud &amp; AI systems roles.</p>
              <div className="contact-line">
                Delhi NCR, India
                <br />
                <a href="mailto:abhilash.m.git@gmail.com">abhilash.m.git@gmail.com</a>
              </div>
            </aside>
          </div>
        </section>

        <div className="ticker" aria-label="Focus areas">
          <span className="ticker-label">MARKET FOCUS</span>
          <div className="ticker-items">
            <span>Cloud infrastructure</span>
            <span>AI agents</span>
            <span>RAG systems</span>
            <span>Fintech engineering</span>
            <span>API architecture</span>
          </div>
        </div>

        <section className="section" id="about" aria-labelledby="about-title">
          <div className="section-heading">
            <div>
              <div className="section-kicker">01 / Profile</div>
              <h2 id="about-title">Build for the<br />long position.</h2>
            </div>
            <span className="section-count">01 — 04</span>
          </div>
          <div className="about-grid">
            <div>
              <p className="about-copy">
                I care about the layer where <strong>good ideas become dependable
                products</strong> — clean APIs, useful automation, thoughtful data
                systems, and deployments that hold up after the demo.
              </p>
              <div className="stats" aria-label="Career highlights">
                <div className="stat">
                  <span className="stat-value">5+</span>
                  <span className="stat-label">AI &amp; full-stack MVPs led</span>
                </div>
                <div className="stat">
                  <span className="stat-value">6+</span>
                  <span className="stat-label">Developers mentored</span>
                </div>
                <div className="stat">
                  <span className="stat-value">93%</span>
                  <span className="stat-label">Sentiment model precision</span>
                </div>
              </div>
            </div>
            <div className="work-list" id="work">
              <div className="work-row">
                <span className="work-date">2023 — now</span>
                <div>
                  <h3 className="work-role">AI/ML Coordinator</h3>
                  <p className="work-description">Led architecture, backend delivery, and deployment for AI MVPs while mentoring developers and coordinating agile hackathon teams.</p>
                </div>
                <span className="work-company">Innogeeks Club<br />KIET</span>
              </div>
              <div className="work-row">
                <span className="work-date">2026</span>
                <div>
                  <h3 className="work-role">AI Engineer Intern</h3>
                  <p className="work-description">Worked across TTS pipelines, data collection, fine-tuning, and Hermes-based agent development.</p>
                </div>
                <span className="work-company">Spearmint<br />Technologies</span>
              </div>
              <div className="work-row">
                <span className="work-date">2027</span>
                <div>
                  <h3 className="work-role">B.Tech, Information Technology</h3>
                  <p className="work-description">KIET Group of Institutions · AKTU. Coursework in systems, networks, databases, and data structures.</p>
                </div>
                <span className="work-company">Ghaziabad<br />India</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="projects" aria-labelledby="projects-title">
          <div className="section-heading">
            <div>
              <div className="section-kicker">02 / Selected work</div>
              <h2 id="projects-title">Systems in<br />the wild.</h2>
            </div>
            <span className="section-count">04 PROJECTS</span>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <a
                className={`project-card${project.featured ? " featured" : ""}`}
                href={project.href}
                key={project.index}
                rel="noreferrer"
                target="_blank"
              >
                <div className="project-top">
                  <span className="project-index">{project.index} / 04</span>
                  <span className="project-arrow"><ArrowUpRight /></span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-meta">
                  <div className="tags">
                    {project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
                  </div>
                  <span className="external-link">Open ↗</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="section" aria-labelledby="skills-title">
          <div className="section-heading">
            <div>
              <div className="section-kicker">03 / Capabilities</div>
              <h2 id="skills-title">The working<br />stack.</h2>
            </div>
            <span className="section-count">COMPOUNDING TOOLS</span>
          </div>
          <div className="skills-layout">
            <p className="skills-intro">
              A pragmatic toolkit for taking a product from architecture to
              deployment, with a bias toward clarity, speed, and systems that
              can be operated by real teams.
            </p>
            <div className="skill-groups">
              {skills.map(([name, list]) => (
                <div className="skill-group" key={name}>
                  <h3>{name}</h3>
                  <p>{list}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="recognition-title">
          <div className="section-heading">
            <div>
              <div className="section-kicker">04 / Signal</div>
              <h2 id="recognition-title">Proof of<br />momentum.</h2>
            </div>
            <span className="section-count">SELECTED SIGNALS</span>
          </div>
          <div className="recognition-grid">
            <div className="recognition-item">
              <strong>Co-inventor · IoT-AI telemedicine patent</strong>
              <span>India Patent No. 202511018153A, published April 2025.</span>
            </div>
            <div className="recognition-item">
              <strong>1st place · Solo AI agent track</strong>
              <span>Won among 500+ participants with an end-to-end autonomous AI solution.</span>
            </div>
            <div className="recognition-item">
              <strong>Top 5 finalist · 5+ regional hackathons</strong>
              <span>Delivered scalable prototypes under tight timelines with small teams.</span>
            </div>
            <div className="recognition-item">
              <strong>Open source contributor</strong>
              <span>Contributions across OpenClaw, Gemini CLI, GSSOC, and Hacktoberfest.</span>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-panel">
            <div>
              <div className="section-kicker">Let&apos;s talk</div>
              <h2 id="contact-title">Have a system<br />worth <em>shipping?</em></h2>
            </div>
            <div className="contact-actions">
              <a className="email-link" href="mailto:abhilash.m.git@gmail.com">abhilash.m.git@gmail.com</a>
              <a className="button" href="mailto:abhilash.m.git@gmail.com">
                Get in touch <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </section>

        <footer className="footer">
          <span>© 2026 Abhilash Maurya</span>
          <div className="footer-links">
            <a href="https://github.com/Abhilash-0322" rel="noreferrer" target="_blank">GitHub</a>
            <a href="https://www.linkedin.com/in/abhilash-maurya-b615b9277/" rel="noreferrer" target="_blank">LinkedIn</a>
            <a href="https://x.com/abhilash_glitch" rel="noreferrer" target="_blank">X / Twitter</a>
          </div>
          <span>Designed for the long term</span>
        </footer>
      </div>
    </main>
  );
}
