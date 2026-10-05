"use client";

import { useEffect, useState } from "react";

const projects = [
  {
    number: "01",
    title: "TalentInfra",
    description:
      "A multi-agent, bias-aware hiring workspace that turns messy hiring signals into explainable shortlists.",
    stack: ["FastAPI", "Next.js", "PostgreSQL", "Groq", "Azure"],
    type: "AI / PRODUCT",
    href: "https://github.com/Abhilash-0322/zynd-aickathon",
    live: "https://zynd-hiring-app.azurewebsites.net",
  },
  {
    number: "02",
    title: "ChainSentinel AI",
    description:
      "Multi-chain security intelligence for smart contracts, with static analysis, risk scoring, and live alerts.",
    stack: ["Python", "FastAPI", "MongoDB", "WebSockets", "Docker"],
    type: "SECURITY / INFRA",
    href: "https://github.com/Abhilash-0322/chainsentinel.ai",
  },
  {
    number: "03",
    title: "Quadrant RAG",
    description:
      "A retrieval layer for custom knowledge bases: ingest, embed, retrieve, and answer with low-latency APIs.",
    stack: ["FastAPI", "LangChain", "Vector DB", "LLMs", "Docker"],
    type: "RAG / BACKEND",
    href: "https://github.com/Abhilash-0322/quadrant-rag",
  },
  {
    number: "04",
    title: "SolSniff",
    description:
      "A narrative and idea agent for Solana that makes fast-moving ecosystem signals easier to explore.",
    stack: ["Next.js", "Groq", "Prisma", "Vercel"],
    type: "AGENTS / WEB3",
    href: "https://github.com/Abhilash-0322/sol-sniff",
    live: "https://solsniffer.vercel.app/",
  },
];

const tools = [
  "Python",
  "FastAPI",
  "Django",
  "TypeScript",
  "Next.js",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "LangChain",
  "Docker",
  "AWS",
  "Azure",
  "GitHub Actions",
  "Linux",
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    const nextTheme = savedTheme === "light" || (!savedTheme && prefersLight) ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("portfolio-theme", nextTheme);
  }

  return (
    <main>
      <div className="grain" aria-hidden="true" />
      <aside className="side-rail">
        <a className="brand-mark" href="#top" aria-label="Back to top">
          AM<span>_</span>
        </a>
        <div className="rail-line" />
        <p className="rail-label">DELHI NCR / IN</p>
        <div className="rail-bottom">
          <span className="rail-index">© 2026</span>
          <span className="rail-index">5142</span>
        </div>
      </aside>

      <div className="site-shell" id="top">
        <header className="topbar">
          <a className="wordmark" href="#top">
            ABHILASH<span>MAURYA</span>
          </a>
          <nav className="nav-links" aria-label="Main navigation">
            <a href="#work">Selected work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="topbar-actions">
            <a className="availability" href="mailto:abhilash.m.git@gmail.com">
              <span className="pulse" />
              Open to work
            </a>
            <button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}>
              <span className="theme-icon" aria-hidden="true">{theme === "dark" ? "☼" : "◐"}</span>
              <span className="theme-word">{theme === "dark" ? "Light" : "Dark"}</span>
            </button>
          </div>
        </header>

        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot" /> Backend / AI systems / cloud</div>
            <h1 id="hero-title">
              I build the
              <br />
              <em>machinery</em>
              <br />
              behind useful AI.
            </h1>
            <p className="hero-intro">
              Backend and AI systems developer focused on the layer where ambitious ideas become
              stable, shipped products.
            </p>
            <div className="hero-cta">
              <a className="button button-primary" href="#work">Explore the builds <Arrow /></a>
              <a className="text-link" href="mailto:abhilash.m.git@gmail.com">Start a conversation <Arrow /></a>
            </div>
          </div>

          <div className="hero-console" aria-label="System status display">
            <div className="console-header">
              <span>AM / SYSTEMS LOG</span>
              <span className="console-status"><span className="pulse" /> ONLINE</span>
            </div>
            <div className="console-core">
              <div className="core-orbit orbit-one" />
              <div className="core-orbit orbit-two" />
              <div className="core-center">AM</div>
              <div className="core-node node-one">API</div>
              <div className="core-node node-two">AI</div>
              <div className="core-node node-three">OPS</div>
              <div className="core-cross cross-a" />
              <div className="core-cross cross-b" />
            </div>
            <div className="console-readout">
              <div><span>BUILD_MODE</span><strong>PRODUCTION</strong></div>
              <div><span>PRIMARY_STACK</span><strong>PY / TS</strong></div>
              <div><span>LATENCY</span><strong>LOW_ISH</strong></div>
            </div>
            <div className="signal">
              <span>SIGNAL</span>
              <div className="signal-bars"><i /><i /><i /><i /><i /><i /><i /><i /></div>
              <span className="signal-value">98.4%</span>
            </div>
          </div>

          <div className="hero-meta">
            <span>Currently building systems at the intersection of</span>
            <strong>intelligence × infrastructure</strong>
          </div>
        </section>

        <div className="ticker" aria-hidden="true">
          <div className="ticker-track">
            <span>SHIP WITH INTENT</span><b>✳</b><span>MAKE COMPLEXITY USEFUL</span><b>✳</b><span>SHIP WITH INTENT</span><b>✳</b><span>MAKE COMPLEXITY USEFUL</span><b>✳</b>
          </div>
        </div>

        <section className="section work-section" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <div>
              <p className="section-kicker">01 / Field notes</p>
              <h2 id="work-title">Selected <em>builds.</em></h2>
            </div>
            <p className="section-note">A few things I&apos;ve taken from idea to infrastructure.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-card-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-type">{project.type}</span>
                  <a className="project-arrow" href={project.href} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}><Arrow /></a>
                </div>
                <div className="project-visual" aria-hidden="true">
                  <span className="visual-grid" />
                  <span className={`visual-spark spark-${project.number}`} />
                  <span className="visual-label">0{project.number} / 24</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-list">
                  {project.stack.map((item) => <span key={item}>{item}</span>)}
                </div>
                <div className="project-links">
                  <a href={project.href} target="_blank" rel="noreferrer">GitHub <Arrow /></a>
                  {project.live && <a href={project.live} target="_blank" rel="noreferrer">Live system <Arrow /></a>}
                </div>
              </article>
            ))}
          </div>
          <a className="archive-link" href="https://github.com/Abhilash-0322" target="_blank" rel="noreferrer">Browse the full archive <Arrow /></a>
        </section>

        <section className="section about-section" id="about" aria-labelledby="about-title">
          <div className="about-stamp">PROFILE<br /><span>AM–26</span></div>
          <div className="section-heading">
            <div>
              <p className="section-kicker">02 / Operator profile</p>
              <h2 id="about-title">Built for the<br /><em>messy middle.</em></h2>
            </div>
            <p className="section-note">The space between a good demo and something people can rely on.</p>
          </div>
          <div className="about-layout">
            <div className="about-copy">
              <p className="lead">I&apos;m Abhilash — a backend and AI systems developer in Delhi NCR. I like working close to the metal, but always with the person on the other side of the API in mind.</p>
              <p>From multi-agent workflows to cloud deployments, I design the connective tissue that lets products move quickly without falling apart. Currently studying Information Technology at KIET and leading AI/ML work at Innogeeks Club.</p>
              <a className="text-link" href="mailto:abhilash.m.git@gmail.com">Let&apos;s make something durable <Arrow /></a>
            </div>
            <div className="timeline">
              <div className="timeline-item">
                <span className="timeline-year">2026 — now</span>
                <div><strong>AI Engineer Intern</strong><span>Spearmint Technologies / Remote</span></div>
              </div>
              <div className="timeline-item">
                <span className="timeline-year">2023 — now</span>
                <div><strong>AI/ML Coordinator</strong><span>Innogeeks Club, KIET</span></div>
              </div>
              <div className="timeline-item">
                <span className="timeline-year">2023 — 27</span>
                <div><strong>B.Tech Information Technology</strong><span>KIET / AKTU University</span></div>
              </div>
            </div>
          </div>
          <div className="impact-row">
            <div><strong>05+</strong><span>AI / full-stack MVPs led</span></div>
            <div><strong>06+</strong><span>Developers mentored</span></div>
            <div><strong>01</strong><span>IoT-AI patent co-invented</span></div>
            <div><strong>Top 5</strong><span>Regional hackathon finalist</span></div>
          </div>
        </section>

        <section className="section toolkit-section" aria-labelledby="toolkit-title">
          <div className="toolkit-heading">
            <p className="section-kicker">03 / Working inventory</p>
            <h2 id="toolkit-title">Tools of the <em>trade.</em></h2>
          </div>
          <div className="tool-cloud">
            {tools.map((tool, index) => <span className={index % 5 === 0 ? "featured-tool" : ""} key={tool}>{tool}</span>)}
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-topline"><span>04 / Open channel</span><span>Let&apos;s talk about the next build.</span></div>
          <h2 id="contact-title">Have a hard<br /><em>problem?</em></h2>
          <a className="contact-email" href="mailto:abhilash.m.git@gmail.com">abhilash.m.git@gmail.com <Arrow /></a>
          <div className="contact-bottom">
            <div className="social-links">
              <a href="https://github.com/Abhilash-0322" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
              <a href="https://www.linkedin.com/in/abhilash-maurya-b615b9277/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
              <a href="https://x.com/abhilash_glitch" target="_blank" rel="noreferrer">X / Twitter <Arrow /></a>
            </div>
            <span className="footer-note">Designed + shipped by AM / 2026</span>
          </div>
        </section>
      </div>
    </main>
  );
}
