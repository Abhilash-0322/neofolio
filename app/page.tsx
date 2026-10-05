"use client";

import { useEffect, useState } from "react";

type Project = {
  number: string;
  title: string;
  type: string;
  description: string;
  stack: string[];
  href: string;
};

const projects: Project[] = [
  {
    number: "01",
    title: "TalentInfra",
    type: "AI hiring infrastructure",
    description:
      "A multi-agent hiring workspace that makes candidate evaluation more structured, explainable, and bias-aware.",
    stack: ["FastAPI", "Next.js", "PostgreSQL", "Groq"],
    href: "https://github.com/Abhilash-0322/zynd-aickathon",
  },
  {
    number: "02",
    title: "SolSniff",
    type: "On-chain intelligence",
    description:
      "A narrative discovery agent for Solana that turns noisy market signals into clear, researchable ideas.",
    stack: ["Next.js", "Groq", "Prisma", "Vercel"],
    href: "https://solsniffer.vercel.app/",
  },
  {
    number: "03",
    title: "ChainSentinel AI",
    type: "Risk & compliance",
    description:
      "Multi-chain smart contract analysis designed to surface risk before it becomes an expensive surprise.",
    stack: ["FastAPI", "Next.js", "MongoDB"],
    href: "https://github.com/Abhilash-0322/chainsentinel.ai",
  },
  {
    number: "04",
    title: "Quadrant RAG",
    type: "Knowledge systems",
    description:
      "A deployable RAG foundation for custom knowledge bases, with the practical pieces needed beyond a demo.",
    stack: ["FastAPI", "LangChain", "Vector DB", "Docker"],
    href: "https://github.com/Abhilash-0322/quadrant-rag",
  },
];

function ArrowUpRight() {
  return <span aria-hidden="true">↗</span>;
}

function SunIcon() {
  return (
    <svg className="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg className="moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M20 15.2A8.5 8.5 0 0 1 8.8 4a8.5 8.5 0 1 0 11.2 11.2Z" />
    </svg>
  );
}

export default function Home() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const shouldUseLight = savedTheme === "light";
    setIsLight(shouldUseLight);
    document.documentElement.dataset.theme = shouldUseLight ? "light" : "dark";
  }, []);

  function toggleTheme() {
    const nextIsLight = !isLight;
    setIsLight(nextIsLight);
    document.documentElement.dataset.theme = nextIsLight ? "light" : "dark";
    window.localStorage.setItem("theme", nextIsLight ? "light" : "dark");
  }

  return (
    <>
      <header className="container nav">
        <a className="brand" href="#top" aria-label="Abhilash Maurya home">
          <span className="brand-mark">AM</span>
          <span>Abhilash Maurya</span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="nav-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle color theme">
            <SunIcon />
            <MoonIcon />
          </button>
          <a className="nav-cta" href="#contact">
            Let&apos;s talk <ArrowUpRight />
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">Open to work · 2026</div>
              <h1>
                Systems with
                <br />
                <span>substance.</span>
              </h1>
              <p className="hero-intro">
                I&apos;m Abhilash — a backend and AI systems developer building the
                reliable layer behind ambitious products.
              </p>
              <div className="hero-buttons">
                <a className="button-primary" href="#work">
                  Explore selected work <ArrowUpRight />
                </a>
                <a className="button-ghost" href="mailto:abhilash.m.git@gmail.com">
                  Get in touch
                </a>
              </div>
            </div>

            <div className="hero-card">
              <span className="card-label">The short version</span>
              <p className="card-heading">
                Turning complex ideas into <em>calm, capable</em> systems.
              </p>
              <div className="card-footer">
                <span><i className="status-dot" />Available for new roles</span>
                <span>Delhi NCR · India</span>
              </div>
            </div>
          </div>
        </section>

        <div className="ticker" aria-label="Specialties">
          <div className="ticker-track">
            {[...Array(2)].flatMap(() => [
              "Backend engineering",
              "AI agents",
              "Cloud infrastructure",
              "RAG pipelines",
              "Production-minded APIs",
            ]).map((item, index) => (
              <span className="ticker-item" key={`${item}-${index}`}>{item}</span>
            ))}
          </div>
        </div>

        <section className="section projects" id="work">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="eyebrow">Selected work</div>
                <h2 className="section-title">Built to be useful.</h2>
              </div>
              <p className="section-note">
                A few systems I&apos;ve shipped across AI, fintech, and developer tooling.
              </p>
            </div>
            <div className="project-list">
              {projects.map((project) => (
                <article className="project" key={project.number}>
                  <span className="project-number">{project.number}</span>
                  <div>
                    <h3>{project.title}</h3>
                    <p className="project-type">{project.type}</p>
                  </div>
                  <div>
                    <p className="project-description">{project.description}</p>
                    <div className="project-stack">
                      {project.stack.map((technology) => (
                        <span className="chip" key={technology}>{technology}</span>
                      ))}
                    </div>
                  </div>
                  <a className="project-link" href={project.href} target="_blank" rel="noreferrer" aria-label={`View ${project.title}`}>
                    <ArrowUpRight />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section about" id="about">
          <div className="container about-grid">
            <div>
              <div className="eyebrow">A little context</div>
              <p className="about-lead">
                Good engineering is equal parts <em>clarity</em>, curiosity, and care.
              </p>
              <p className="about-body">
                I work at the intersection of backend engineering and applied AI. From
                FastAPI services and data models to agent workflows and cloud deployments,
                I like making the complicated feel dependable.
              </p>
            </div>
            <div>
              <div className="timeline">
                <div className="timeline-entry">
                  <span className="timeline-date">Aug 2026</span>
                  <div>
                    <p className="timeline-role">AI Engineer Intern</p>
                    <p className="timeline-company">Spearmint Technologies · Remote</p>
                  </div>
                </div>
                <div className="timeline-entry">
                  <span className="timeline-date">Nov 2023 — Now</span>
                  <div>
                    <p className="timeline-role">AI/ML Coordinator</p>
                    <p className="timeline-company">Innogeeks Club, KIET</p>
                  </div>
                </div>
                <div className="timeline-entry">
                  <span className="timeline-date">Expected 2027</span>
                  <div>
                    <p className="timeline-role">B.Tech in Information Technology</p>
                    <p className="timeline-company">KIET Group of Institutions · AKTU</p>
                  </div>
                </div>
              </div>
              <div className="stats">
                <div className="stat">
                  <span className="stat-number">05+</span>
                  <span className="stat-label">AI & full-stack MVPs led</span>
                </div>
                <div className="stat">
                  <span className="stat-number">06+</span>
                  <span className="stat-label">Developers mentored</span>
                </div>
                <div className="stat">
                  <span className="stat-number">01</span>
                  <span className="stat-label">Published patent</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="container contact-inner">
            <div className="eyebrow">Have a good problem?</div>
            <h2 className="contact-title">Let&apos;s make it <span>real.</span></h2>
            <p className="contact-copy">
              I&apos;m currently open to backend, AI systems, and cloud engineering roles.
              Tell me what you&apos;re building.
            </p>
            <a className="button-primary" href="mailto:abhilash.m.git@gmail.com">
              Start a conversation <ArrowUpRight />
            </a>
            <br />
            <a className="contact-email" href="mailto:abhilash.m.git@gmail.com">
              abhilash.m.git@gmail.com
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© 2026 Abhilash Maurya. Built with intention.</span>
          <div className="footer-links">
            <a href="https://github.com/Abhilash-0322" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/abhilash-maurya-b615b9277/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://x.com/abhilash_glitch" target="_blank" rel="noreferrer">X</a>
          </div>
        </div>
      </footer>
    </>
  );
}
