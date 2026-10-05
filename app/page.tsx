"use client";

import { useEffect, useState } from "react";

const projects = [
  {
    number: "01",
    title: "TalentInfra",
    description:
      "A bias-aware hiring system where specialist agents score, challenge, and explain candidate matches.",
    stack: "FastAPI / Next.js / PostgreSQL / Groq",
    tag: "AI systems",
    href: "https://github.com/Abhilash-0322/zynd-aickathon",
    live: "https://zynd-hiring-app.azurewebsites.net",
  },
  {
    number: "02",
    title: "SolSniff",
    description:
      "A narrative and idea agent for Solana that turns noisy on-chain signals into a sharper research brief.",
    stack: "Next.js / Prisma / Groq / Vercel",
    tag: "Intelligence",
    href: "https://github.com/Abhilash-0322/sol-sniff",
    live: "https://solsniffer.vercel.app/",
  },
  {
    number: "03",
    title: "ChainSentinel AI",
    description:
      "Multi-chain contract risk and compliance analysis, built to make technical findings legible to teams.",
    stack: "FastAPI / Next.js / MongoDB",
    tag: "Fintech",
    href: "https://github.com/Abhilash-0322/chainsentinel.ai",
  },
];

const skills = [
  "Python",
  "FastAPI",
  "Django",
  "TypeScript",
  "PostgreSQL",
  "Redis",
  "LangChain",
  "Docker",
  "AWS",
  "Azure",
  "GitHub Actions",
  "RAG",
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const stored = window.localStorage.getItem("slate-theme");
    if (stored) setDark(stored === "dark");
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    window.localStorage.setItem("slate-theme", next ? "dark" : "light");
  }

  return (
    <main className={dark ? "site dark" : "site"}>
      <div className="grain" aria-hidden="true" />
      <header className="nav shell">
        <a className="brand" href="#top" aria-label="Abhilash Maurya home">
          <span className="brand-mark">AM</span>
          <span className="brand-name">Abhilash Maurya</span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#work">Selected work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <button
          className="theme-toggle"
          type="button"
          onClick={toggleTheme}
          aria-label={`Switch to ${dark ? "light" : "dark"} theme`}
        >
          <span className="theme-icon">{dark ? "☼" : "◐"}</span>
          <span>{dark ? "Light" : "Dark"} mode</span>
        </button>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            Backend / AI systems / Cloud
          </div>
          <h1>
            I build the machinery behind{" "}
            <em>useful AI.</em>
          </h1>
          <p className="hero-intro">
            Backend and AI systems developer focused on APIs, agents, and
            infrastructure that hold up beyond the demo. Based in Delhi NCR,
            working globally.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              See selected work <Arrow />
            </a>
            <a className="text-link" href="#contact">
              Start a conversation <Arrow />
            </a>
          </div>
        </div>
        <aside className="hero-card" aria-label="Availability and profile">
          <div className="card-topline">
            <span>Portfolio / 2026</span>
            <span>New Delhi · IN</span>
          </div>
          <div className="card-seal">AM</div>
          <div className="card-title">Open to work</div>
          <p>
            Looking for cloud, AI systems, backend, or fintech engineering
            roles where good infrastructure makes ambitious products possible.
          </p>
          <div className="card-rule" />
          <div className="card-meta">
            <span>Currently</span>
            <strong>Building agentic systems</strong>
          </div>
          <div className="card-meta">
            <span>Availability</span>
            <strong className="available">
              <i /> 2026 — selective
            </strong>
          </div>
        </aside>
      </section>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          <span>Production-minded engineering</span>
          <b>✳</b>
          <span>APIs that stay legible</span>
          <b>✳</b>
          <span>AI with a point of view</span>
          <b>✳</b>
          <span>Production-minded engineering</span>
          <b>✳</b>
          <span>APIs that stay legible</span>
          <b>✳</b>
        </div>
      </div>

      <section className="section shell work-section" id="work">
        <div className="section-heading">
          <div>
            <p className="section-kicker">01 — Field notes</p>
            <h2>Selected work</h2>
          </div>
          <p className="section-aside">
            A few systems, products, and experiments from the workbench.
          </p>
        </div>
        <div className="projects">
          {projects.map((project) => (
            <article className="project" key={project.title}>
              <div className="project-number">{project.number}</div>
              <div className="project-main">
                <div className="project-head">
                  <div>
                    <span className="project-tag">{project.tag}</span>
                    <h3>{project.title}</h3>
                  </div>
                  <a
                    className="round-link"
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Arrow />
                  </a>
                </div>
                <p>{project.description}</p>
                <div className="project-footer">
                  <span>{project.stack}</span>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer">
                      Live project <Arrow />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="more-work">
          <span>More in the archive</span>
          <a
            className="text-link"
            href="https://github.com/Abhilash-0322"
            target="_blank"
            rel="noreferrer"
          >
            View GitHub <Arrow />
          </a>
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="shell about-grid">
          <div className="about-title">
            <p className="section-kicker">02 — The person</p>
            <h2>Systems thinker.<br /><em>Product instinct.</em></h2>
          </div>
          <div className="about-copy">
            <p className="large-copy">
              I&apos;m Abhilash — an IT student, AI/ML coordinator, and builder
              who likes getting close to the difficult part of a product.
            </p>
            <p>
              My work sits at the intersection of backend engineering, cloud
              infrastructure, and applied AI. I care about clean interfaces,
              useful abstractions, and shipping work that people can actually
              rely on.
            </p>
            <a className="text-link" href="mailto:abhilash.m.git@gmail.com">
              Get in touch <Arrow />
            </a>
          </div>
        </div>
      </section>

      <section className="section shell experience-section">
        <div className="section-heading">
          <div>
            <p className="section-kicker">03 — Experience</p>
            <h2>In the field</h2>
          </div>
        </div>
        <div className="experience-list">
          <div className="experience-row">
            <div className="experience-date">AUG 2026 — NOW</div>
            <div className="experience-role">
              <h3>AI Engineer Intern</h3>
              <p>Spearmint Technologies · Remote</p>
              <span>Agents · TTS · Fine-tuning · Data collection</span>
            </div>
            <div className="experience-index">01</div>
          </div>
          <div className="experience-row">
            <div className="experience-date">NOV 2023 — NOW</div>
            <div className="experience-role">
              <h3>AI/ML Coordinator</h3>
              <p>Innogeeks Club, KIET</p>
              <span>Architecture · Mentoring · Hackathon delivery</span>
            </div>
            <div className="experience-index">02</div>
          </div>
        </div>
        <div className="signal-grid">
          <div className="signal">
            <strong>5+</strong>
            <span>AI & full-stack MVPs led</span>
          </div>
          <div className="signal">
            <strong>6+</strong>
            <span>Developers mentored</span>
          </div>
          <div className="signal">
            <strong>01</strong>
            <span>Published IoT-AI patent</span>
          </div>
          <div className="signal">
            <strong>Top 5</strong>
            <span>Hackathon finalist</span>
          </div>
        </div>
      </section>

      <section className="section toolkit-section">
        <div className="shell toolkit-grid">
          <div>
            <p className="section-kicker">04 — Toolkit</p>
            <h2>Tools of the trade</h2>
          </div>
          <div className="skill-list">
            {skills.map((skill, index) => (
              <span className="skill" key={skill}>
                <small>{String(index + 1).padStart(2, "0")}</small>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section shell" id="contact">
        <div className="contact-inner">
          <p className="section-kicker">05 — Next chapter</p>
          <h2>Have a hard problem<br /><em>worth building?</em></h2>
          <p className="contact-copy">
            I&apos;m always interested in thoughtful teams, ambitious systems,
            and projects that make the complexity worth it.
          </p>
          <a className="button button-light" href="mailto:abhilash.m.git@gmail.com">
            Say hello <Arrow />
          </a>
          <div className="contact-email">abhilash.m.git@gmail.com</div>
        </div>
      </section>

      <footer className="footer shell">
        <span>© 2026 Abhilash Maurya</span>
        <span>Built with care in Delhi NCR</span>
        <div className="footer-links">
          <a href="https://github.com/Abhilash-0322" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/abhilash-maurya-b615b9277/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://x.com/abhilash_glitch" target="_blank" rel="noreferrer">X</a>
        </div>
      </footer>
    </main>
  );
}
