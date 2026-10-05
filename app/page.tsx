"use client";

import { useState } from "react";

const projects = [
  {
    number: "01",
    type: "AI / hiring",
    name: "TalentInfra",
    description:
      "A bias-aware hiring workspace that gives teams a clearer, kinder way to find signal in a noisy process.",
    stack: "FastAPI · Next.js · PostgreSQL · Azure",
    href: "https://zynd-hiring-app.azurewebsites.net",
    accent: "coral",
  },
  {
    number: "02",
    type: "Web3 / agent",
    name: "SolSniff",
    description:
      "A narrative and idea agent for the Solana ecosystem — turning market chatter into something you can reason about.",
    stack: "Next.js · Groq · Prisma · Vercel",
    href: "https://solsniffer.vercel.app/",
    accent: "blue",
  },
  {
    number: "03",
    type: "AI / infrastructure",
    name: "Quadrant RAG",
    description:
      "A practical retrieval system for custom knowledge bases, built to make asking your own data feel natural.",
    stack: "FastAPI · LangChain · Vector DB · Docker",
    href: "https://github.com/Abhilash-0322/quadrant-rag",
    accent: "yellow",
  },
];

const skills = [
  "Python",
  "FastAPI",
  "Next.js",
  "PostgreSQL",
  "Docker",
  "AWS",
  "Azure",
  "RAG",
  "AI agents",
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
      <path d="M8 2v11M3.5 9 8 13.5 12.5 9" />
    </svg>
  );
}

function Sun() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <circle cx="10" cy="10" r="3.2" />
      <path d="M10 1.5v2M10 16.5v2M1.5 10h2M16.5 10h2M4 4l1.4 1.4M14.6 14.6 16 16M16 4l-1.4 1.4M5.4 14.6 4 16" />
    </svg>
  );
}

function Moon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M16.8 12.3A7 7 0 0 1 7.7 3.2 7.5 7.5 0 1 0 16.8 12.3Z" />
    </svg>
  );
}

export default function Home() {
  const [nightMode, setNightMode] = useState(false);

  return (
    <div className={`site-shell${nightMode ? " night-mode" : ""}`}>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Abhilash Maurya home">
          <span className="wordmark-mark">AM</span>
          <span>Abhilash Maurya</span>
        </a>
        <nav className="main-nav" aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <button
          className="theme-toggle"
          onClick={() => setNightMode((mode) => !mode)}
          aria-label={nightMode ? "Switch to light theme" : "Switch to dark theme"}
          type="button"
        >
          {nightMode ? <Sun /> : <Moon />}
          <span>{nightMode ? "Day mode" : "Night mode"}</span>
        </button>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> Open to work</div>
            <h1>
              Building useful
              <br />
              <em>things</em> for the
              <br />
              real world.
            </h1>
            <p className="hero-intro">
              I&apos;m Abhilash — a backend and AI systems developer who likes
              turning complicated ideas into dependable software.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#work">
                See selected work <ArrowDown />
              </a>
              <a className="text-link" href="mailto:abhilash.m.git@gmail.com">
                Let&apos;s talk <ArrowUpRight />
              </a>
            </div>
          </div>
          <div className="hero-note" aria-label="A note about Abhilash">
            <div className="tape tape-top" />
            <div className="note-heading">a little note</div>
            <p>
              I care about the part after the demo: the APIs, the edge cases,
              the deployment, and the person who has to use it at 2am.
            </p>
            <div className="note-signoff">
              <span>— Abhilash</span>
              <span className="scribble">✳</span>
            </div>
            <div className="note-stamp">DEL<br />NCR</div>
          </div>
        </section>

        <div className="ticker" aria-hidden="true">
          <div className="ticker-track">
            <span>Backend systems</span><b>✳</b><span>AI that works</span><b>✳</b>
            <span>Cloud native</span><b>✳</b><span>Thoughtful software</span><b>✳</b>
            <span>Backend systems</span><b>✳</b><span>AI that works</span><b>✳</b>
            <span>Cloud native</span><b>✳</b><span>Thoughtful software</span><b>✳</b>
          </div>
        </div>

        <section className="work section-wrap" id="work">
          <div className="section-heading">
            <div>
              <span className="kicker">Selected work / 2024—26</span>
              <h2>Things I&apos;ve<br /><em>made.</em></h2>
            </div>
            <p className="section-aside">
              A few projects from the notebook. Some are live, some are still
              teaching me something new.
            </p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <a
                className={`project-card ${project.accent}`}
                href={project.href}
                key={project.name}
                target="_blank"
                rel="noreferrer"
              >
                <div className="project-topline">
                  <span>{project.number}</span>
                  <span>{project.type}</span>
                  <span className="card-arrow"><ArrowUpRight /></span>
                </div>
                <div className="project-illustration" aria-hidden="true">
                  <div className="illustration-shape" />
                  <span>{project.number === "01" ? "talent / signal" : project.number === "02" ? "ideas / orbit" : "ask / retrieve"}</span>
                </div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="project-stack">{project.stack}</div>
              </a>
            ))}
          </div>
          <div className="all-projects">
            <a className="text-link" href="https://github.com/Abhilash-0322" target="_blank" rel="noreferrer">
              Explore more on GitHub <ArrowUpRight />
            </a>
          </div>
        </section>

        <section className="about section-wrap" id="about">
          <div className="about-label">
            <span className="kicker">A bit about me</span>
            <div className="vertical-rule" />
            <span className="tiny-note">Currently in Delhi NCR<br />India, IST</span>
          </div>
          <div className="about-content">
            <h2>
              Systems thinker.
              <br />
              <em>People person.</em>
            </h2>
            <div className="about-columns">
              <p>
                I&apos;m a B.Tech IT student at KIET and an AI/ML coordinator at
                Innogeeks Club. I&apos;ve led small teams, shipped MVPs, and
                learned that the best technical decision is usually the one
                that helps the next person move faster.
              </p>
              <p>
                My sweet spot is where backend engineering meets AI: useful
                APIs, reliable agents, clear data flows, and deployments that
                don&apos;t need a ceremony to update.
              </p>
            </div>
            <div className="skill-list">
              {skills.map((skill) => <span key={skill}>{skill}</span>)}
            </div>
          </div>
        </section>

        <section className="experience section-wrap">
          <div className="section-heading compact">
            <div>
              <span className="kicker">The path so far</span>
              <h2>Notes from<br /><em>the field.</em></h2>
            </div>
          </div>
          <div className="timeline">
            <div className="timeline-entry">
              <div className="timeline-date">Aug 2026 — now</div>
              <div className="timeline-role">
                <h3>AI Engineer Intern</h3>
                <p>Spearmint Technologies · Remote</p>
              </div>
              <p className="timeline-detail">TTS pipelines, fine-tuning, data collection, and agent features.</p>
            </div>
            <div className="timeline-entry">
              <div className="timeline-date">Nov 2023 — now</div>
              <div className="timeline-role">
                <h3>AI/ML Coordinator</h3>
                <p>Innogeeks Club, KIET</p>
              </div>
              <p className="timeline-detail">Led 5+ MVPs, mentored 6+ developers, and helped teams ship.</p>
            </div>
          </div>
        </section>

        <section className="contact section-wrap" id="contact">
          <div className="contact-card">
            <div className="contact-tape" />
            <span className="kicker">Have a good problem?</span>
            <h2>Let&apos;s make<br /><em>something useful.</em></h2>
            <a className="button button-light" href="mailto:abhilash.m.git@gmail.com">
              Start a conversation <ArrowUpRight />
            </a>
            <span className="contact-doodle" aria-hidden="true">↗</span>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <div className="footer-name">Abhilash<br />Maurya<span>.</span></div>
        <div className="footer-links">
          <a href="mailto:abhilash.m.git@gmail.com">Email <ArrowUpRight /></a>
          <a href="https://github.com/Abhilash-0322" target="_blank" rel="noreferrer">GitHub <ArrowUpRight /></a>
          <a href="https://www.linkedin.com/in/abhilash-maurya-b615b9277/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight /></a>
        </div>
        <div className="footer-meta">
          <span>© 2026</span>
          <span>Made with intent &amp; a little caffeine</span>
        </div>
      </footer>
    </div>
  );
}
