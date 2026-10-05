"use client";

import { useEffect, useState } from "react";

const projects = [
  {
    number: "01",
    name: "TalentInfra",
    description:
      "Bias-aware hiring intelligence built as a multi-agent system for better decisions.",
    tools: "FastAPI · Next.js · PostgreSQL · Groq · Azure",
    href: "https://zynd-hiring-app.azurewebsites.net",
  },
  {
    number: "02",
    name: "SolSniff",
    description:
      "A narrative and idea agent that helps make sense of the Solana ecosystem.",
    tools: "Next.js · Groq · Prisma · Vercel",
    href: "https://solsniffer.vercel.app/",
  },
  {
    number: "03",
    name: "ChainSentinel AI",
    description:
      "Multi-chain contract intelligence for risk scoring, compliance, and response.",
    tools: "Python · FastAPI · MongoDB · WebSockets · Docker",
    href: "https://github.com/Abhilash-0322/chainsentinel.ai",
  },
  {
    number: "04",
    name: "Quadrant RAG",
    description:
      "A retrieval system that turns private knowledge bases into useful answers.",
    tools: "FastAPI · LangChain · Vector DBs · LLMs · Docker",
    href: "https://github.com/Abhilash-0322/quadrant-rag",
  },
  {
    number: "05",
    name: "Zen Heaven",
    description:
      "Wellness AI with sentiment-aware recommendations and safety escalation flows.",
    tools: "FastAPI · React · LangChain · MongoDB · Twilio",
    href: "https://hack-haven2-0.vercel.app/",
  },
];

const socials = [
  ["GitHub", "https://github.com/Abhilash-0322"],
  ["LinkedIn", "https://www.linkedin.com/in/abhilash-maurya-b615b9277/"],
  ["X / Twitter", "https://x.com/abhilash_glitch"],
];

export default function Home() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialDark = saved ? saved === "dark" : prefersDark;
    setDark(initialDark);
    document.documentElement.dataset.theme = initialDark ? "dark" : "light";
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? "dark" : "light";
    window.localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <main>
      <div className="page-shell">
        <header className="topbar">
          <a className="brand" href="#top" aria-label="Abhilash Maurya home">
            <span className="brand-mark">A</span>
            <span>ABHILASH / 26</span>
          </a>
          <nav className="nav" aria-label="Main navigation">
            <a href="#work">Selected work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <button className="theme-toggle mono" onClick={toggleTheme} type="button">
              {dark ? "☼ light" : "◐ dark"}
            </button>
          </nav>
        </header>

        <section className="hero" id="top">
          <div>
            <div className="eyebrow mono">Backend · AI systems · cloud</div>
            <h1>
              BUILDING
              <span className="accent">USEFUL</span>
              SYSTEMS.
            </h1>
            <div className="hero-intro">
              <p>
                I&apos;m Abhilash — a backend and AI systems developer turning
                complicated ideas into software that ships, scales, and helps
                someone.
              </p>
              <div className="hero-aside">
                <span className="availability mono">OPEN TO WORK</span>
                <span className="mono">
                  Delhi NCR, India
                  <br />
                  UTC +05:30
                </span>
              </div>
            </div>
          </div>

          <div className="hero-art" aria-label="Abstract magenta studio artwork">
            <span className="art-label mono">selected practice / 01</span>
            <div className="orbit" />
            <strong className="art-word">
              <span>THINK</span>
              <span>IN</span>
              <span>SYSTEMS</span>
            </strong>
            <span className="art-index mono">AM—001</span>
          </div>
        </section>

        <div className="ticker mono" aria-label="Areas of focus">
          <span>APIs THAT HOLD UP</span>
          <span>AI THAT EARNS ITS PLACE</span>
          <span>CLOUD WITHOUT THE MYSTIQUE</span>
          <span>APIs THAT HOLD UP</span>
        </div>

        <section className="section" id="about">
          <div className="section-heading">
            <h2>THE PRACTICE</h2>
            <span className="mono">/ 001 — how I work</span>
          </div>
          <div className="manifesto">
            <div className="manifesto-mark" aria-hidden="true">
              <strong>
                AI
                <br />
                + API
              </strong>
            </div>
            <div className="manifesto-copy">
              <h3>
                Strong foundations make room for <em>brave ideas.</em>
              </h3>
              <p>
                I care about the part after the demo. That means clear APIs,
                thoughtful data models, observable services, and AI features
                with a real job to do. From cloud infrastructure to agent
                workflows, I build systems that are easier to trust and
                simpler to grow.
              </p>
            </div>
          </div>
          <div className="stats" aria-label="Career highlights">
            <div className="stat">
              <strong>5+</strong>
              <span>AI &amp; full-stack MVPs led</span>
            </div>
            <div className="stat">
              <strong>6+</strong>
              <span>developers mentored</span>
            </div>
            <div className="stat">
              <strong>93%</strong>
              <span>sentiment classification precision</span>
            </div>
            <div className="stat">
              <strong>01</strong>
              <span>IoT-AI patent co-invented</span>
            </div>
          </div>
        </section>

        <section className="section" id="work">
          <div className="section-heading">
            <h2>SELECTED WORK</h2>
            <span className="mono">/ 002 — things I shipped</span>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <a
                className="project"
                href={project.href}
                key={project.number}
                rel="noreferrer"
                target="_blank"
              >
                <span className="project-number mono">{project.number}</span>
                <div>
                  <h3>{project.name}</h3>
                  <p className="summary">{project.description}</p>
                </div>
                <span className="tools mono">{project.tools}</span>
                <span className="project-link mono">view</span>
              </a>
            ))}
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-heading">
            <h2>IN THE FIELD</h2>
            <span className="mono">/ 003 — currently</span>
          </div>
          <div className="experience-grid">
            <div className="experience-intro">
              <p>
                Learning in public, shipping with people, and staying curious
                about the infrastructure underneath the interface.
              </p>
            </div>
            <div>
              <article className="role">
                <div className="role-header">
                  <div>
                    <h3>AI/ML Coordinator</h3>
                    <span className="company mono">Innogeeks Club · KIET</span>
                  </div>
                  <span className="date mono">NOV 2023 — NOW</span>
                </div>
                <p>
                  Led architecture, backend, and deployment for 5+ AI and
                  full-stack MVPs. Mentored 6+ developers and coordinated
                  agile teams through hackathon delivery.
                </p>
              </article>
              <article className="role">
                <div className="role-header">
                  <div>
                    <h3>AI Engineer Intern</h3>
                    <span className="company mono">Spearmint Technologies · remote</span>
                  </div>
                  <span className="date mono">AUG 2026</span>
                </div>
                <p>
                  Worked across text-to-speech pipelines, fine-tuning, web
                  scraping, and Hermes-based agent development.
                </p>
              </article>
              <article className="role">
                <div className="role-header">
                  <div>
                    <h3>B.Tech Information Technology</h3>
                    <span className="company mono">KIET Group of Institutions</span>
                  </div>
                  <span className="date mono">EXPECTED 2027</span>
                </div>
                <p>
                  Building a durable base in systems thinking through
                  algorithms, operating systems, databases, and networks.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section stack-section" id="stack">
          <div className="section-heading">
            <h2>THE TOOLKIT</h2>
            <span className="mono">/ 004 — familiar territory</span>
          </div>
          <div className="stack-grid">
            <div className="stack-item">
              <span className="mono">01 / languages</span>
              <strong>Python · C++ · JS · SQL</strong>
            </div>
            <div className="stack-item">
              <span className="mono">02 / backend</span>
              <strong>FastAPI · Django · Express</strong>
            </div>
            <div className="stack-item">
              <span className="mono">03 / data</span>
              <strong>Postgres · Mongo · Redis</strong>
            </div>
            <div className="stack-item">
              <span className="mono">04 / platform</span>
              <strong>Docker · AWS · Azure · CI/CD</strong>
            </div>
          </div>
        </section>

        <section className="section contact" id="contact">
          <h2>
            HAVE A
            <em>GOOD ONE?</em>
          </h2>
          <div className="contact-info">
            <p>
              Building a backend, an AI feature, or a product that needs a
              calm technical partner? Let&apos;s make it real.
            </p>
            <a className="email-link mono" href="mailto:abhilash.m.git@gmail.com">
              abhilash.m.git@gmail.com
            </a>
            <div className="socials">
              {socials.map(([name, href]) => (
                <a href={href} key={name} rel="noreferrer" target="_blank">
                  {name} ↗
                </a>
              ))}
            </div>
          </div>
        </section>

        <footer className="footer">
          <span>© 2026 Abhilash Maurya. Built with intent.</span>
          <span className="mono">NO MORE TABS / GO BUILD</span>
        </footer>
      </div>
    </main>
  );
}
