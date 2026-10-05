"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

type Project = {
  number: string;
  name: string;
  kind: string;
  description: string;
  stack: string;
  href: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    number: "01",
    name: "TalentInfra",
    kind: "AI / Hiring",
    description:
      "A bias-aware multi-agent hiring system that turns candidate signals into clearer, more accountable decisions.",
    stack: "FastAPI · Next.js · PostgreSQL · Groq · Azure",
    href: "https://zynd-hiring-app.azurewebsites.net",
    featured: true,
  },
  {
    number: "02",
    name: "ChainSentinel AI",
    kind: "Security",
    description:
      "Multi-chain smart contract risk and compliance intelligence for Ethereum, Solana, and Aptos.",
    stack: "FastAPI · MongoDB · WebSockets · Docker",
    href: "https://github.com/Abhilash-0322/chainsentinel.ai",
  },
  {
    number: "03",
    name: "Quadrant RAG",
    kind: "Knowledge",
    description:
      "A retrieval-augmented knowledge system with ingestion, embeddings, vector retrieval, and low-latency inference.",
    stack: "FastAPI · LangChain · Vector DBs · Docker",
    href: "https://github.com/Abhilash-0322/quadrant-rag",
  },
  {
    number: "04",
    name: "SolSniff",
    kind: "Web3 / Agents",
    description:
      "A Solana narrative and idea agent built to make emerging on-chain signals easier to explore.",
    stack: "Next.js · Groq · Prisma · Vercel",
    href: "https://solsniffer.vercel.app/",
  },
  {
    number: "05",
    name: "Zen Heaven",
    kind: "Wellness AI",
    description:
      "A mental wellness platform pairing sentiment-aware recommendations with Twilio-powered safety flows.",
    stack: "FastAPI · React · LangChain · Twilio",
    href: "https://hack-haven2-0.vercel.app/",
  },
  {
    number: "06",
    name: "Resume Analyzer",
    kind: "Product",
    description:
      "A free AI feedback tool that helps job seekers turn a resume into a sharper, more useful story.",
    stack: "AI · Product Design · Web",
    href: "https://resume-analyzer-pulse.vercel.app",
  },
];

const techGroups = [
  {
    title: "Build",
    items: "Python · C++ · JavaScript · SQL",
  },
  {
    title: "Backend",
    items: "FastAPI · Django · Express.js · LangChain",
  },
  {
    title: "Data",
    items: "PostgreSQL · MongoDB · Redis · Vector DBs",
  },
  {
    title: "Ship",
    items: "Docker · AWS · Azure · GitHub Actions",
  },
];

function SunIcon() {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 2.5v2M12 19.5v2M4.6 4.6 6 6M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4 6 18M18 6l1.4-1.4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
      <path
        d="M20 15.2A8.2 8.2 0 0 1 8.8 4 8.2 8.2 0 1 0 20 15.2Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function ArrowUpRight() {
  return <span aria-hidden="true">↗</span>;
}

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <button aria-label="Toggle color theme" className="theme-toggle" type="button" />;
  }

  const isDark = resolvedTheme === "dark";
  return (
    <button
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="theme-toggle"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      type="button"
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}

export default function Home() {
  return (
    <main>
      <div className="shell nav-wrap">
        <nav className="nav" aria-label="Main navigation">
          <a className="brand" href="#top">
            <span className="brand-mark">AM</span>
            <span>ABHILASH MAURYA</span>
          </a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#stack">Stack</a>
            <a href="#contact">Contact</a>
            <ThemeToggle />
          </div>
        </nav>
      </div>

      <section className="shell hero" id="top">
        <div>
          <p className="eyebrow">Backend · AI systems · Cloud</p>
          <h1>
            Calm systems
            <br />
            for <em>ambitious</em> ideas.
          </h1>
          <p className="hero-copy">
            I&apos;m Abhilash, a backend and AI systems developer who makes complex
            products feel dependable — from first API to production deployment.
          </p>
          <div className="availability">
            <span />
            OPEN TO WORK — Full-time · Internship · Freelance
          </div>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              Explore selected work <span className="arrow">↓</span>
            </a>
            <a className="button button-quiet" href="#contact">
              Let&apos;s connect <span className="arrow">↗</span>
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="orb" />
          <div className="mini-note">
            <strong>5+</strong>
            AI &amp; full-stack MVPs shipped
          </div>
          <div className="reef-card">
            <small>Currently building</small>
            <h2>Useful things.</h2>
            <p>with thoughtful infrastructure.</p>
          </div>
          <div className="vertical-label">DELHI NCR · INDIA</div>
        </div>
      </section>

      <div className="ticker" aria-label="Areas of focus">
        <div className="shell ticker-inner">
          <span>Open to work</span>
          <span>✳</span>
          <span>Backend &amp; APIs</span>
          <span>✳</span>
          <span>AI agents &amp; RAG</span>
          <span>✳</span>
          <span>Cloud infrastructure</span>
          <span>✳</span>
          <span>Fintech engineering</span>
        </div>
      </div>

      <section className="shell section" id="about">
        <div className="section-heading">
          <h2>
            Built with intent,
            <br />
            shipped with <em>care.</em>
          </h2>
          <span className="section-index">01 / ABOUT</span>
        </div>
        <div className="about-grid">
          <p className="about-lead">
            I like the part where an idea becomes a <mark>real system</mark> — with
            clean APIs, useful intelligence, and infrastructure that stays out of
            the way.
          </p>
          <div>
            <p className="about-detail">
              I&apos;m Abhilash Maurya, a B.Tech IT student at KIET and an AI/ML
              coordinator who leads teams through architecture, backend
              implementation, and deployment. My work sits where backend
              engineering, AI agents, and cloud infrastructure meet.
            </p>
            <p className="about-detail">
              Abhilash Maurya is OPEN TO WORK for full-time, internship, and
              freelance opportunities in backend, AI systems, cloud, and fintech.
            </p>
            <div className="about-links">
              <span className="pill">AWS Cloud Practitioner</span>
              <span className="pill">B.Tech IT · 2027</span>
              <span className="pill">Delhi NCR, India</span>
            </div>
          </div>
        </div>
        <div className="metrics">
          <div className="metric">
            <strong>5+</strong>
            <span>AI &amp; full-stack MVPs</span>
          </div>
          <div className="metric">
            <strong>6+</strong>
            <span>Developers mentored</span>
          </div>
          <div className="metric">
            <strong>1st</strong>
            <span>Solo AI hackathon track</span>
          </div>
          <div className="metric">
            <strong>2025</strong>
            <span>Patent published</span>
          </div>
        </div>
      </section>

      <section className="work-section section" id="work">
        <div className="shell">
          <div className="section-heading">
            <h2>
              Selected <em>work</em>
            </h2>
            <span className="section-index">02 / PROJECTS</span>
          </div>
          <div className="projects">
            {projects.map((project) => (
              <article
                className={`project-card${project.featured ? " featured" : ""}`}
                key={project.name}
              >
                <div className="project-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-kind">{project.kind}</span>
                </div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="project-bottom">
                  <span className="project-stack">{project.stack}</span>
                  <a
                    aria-label={`View ${project.name}`}
                    className="project-link"
                    href={project.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <ArrowUpRight />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="shell section" id="experience">
        <div className="section-heading">
          <h2>
            A little <em>context.</em>
          </h2>
          <span className="section-index">03 / EXPERIENCE</span>
        </div>
        <div className="experience-grid">
          <div className="experience-intro">
            <p>
              The best work happens when good technical decisions and good
              collaboration have room to reinforce each other.
            </p>
          </div>
          <div className="timeline">
            <article className="role">
              <div className="role-date">Nov 2023 — Present</div>
              <div>
                <h3>AI/ML Coordinator</h3>
                <span className="role-company">Innogeeks Club · KIET</span>
                <p>
                  Led 5+ AI and full-stack MVPs, mentored 6+ developers, and
                  coordinated agile teams of 3–6 across hackathon delivery.
                </p>
              </div>
            </article>
            <article className="role">
              <div className="role-date">Aug 2026</div>
              <div>
                <h3>AI Engineer Intern</h3>
                <span className="role-company">Spearmint Technologies · Remote</span>
                <p>
                  Worked on text-to-speech pipelines, fine-tuning, data
                  collection, and Hermes-based agent features.
                </p>
              </div>
            </article>
            <article className="role">
              <div className="role-date">Education</div>
              <div>
                <h3>B.Tech Information Technology</h3>
                <span className="role-company">KIET Group of Institutions · Expected 2027</span>
                <p>
                  Building a strong base across data structures, operating
                  systems, DBMS, and computer networks.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="stack-section section" id="stack">
        <div className="shell">
          <div className="section-heading">
            <h2>
              My working <em>palette.</em>
            </h2>
            <span className="section-index">04 / TOOLKIT</span>
          </div>
          <div className="stack-grid">
            {techGroups.map((group) => (
              <div className="stack-group" key={group.title}>
                <h3>{group.title}</h3>
                <p>{group.items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="shell contact" id="contact">
        <div>
          <p className="eyebrow">Have a good problem?</p>
          <h2>
            Let&apos;s make it
            <br />
            <em>work.</em>
          </h2>
          <p className="contact-copy">
            Abhilash Maurya is OPEN TO WORK for full-time, internship, and
            freelance opportunities across backend, AI systems, cloud, and
            fintech. If that sounds like your kind of problem, send a note.
          </p>
        </div>
        <div className="contact-card">
          <span>Start a conversation</span>
          <a href="mailto:abhilash.m.git@gmail.com">abhilash.m.git@gmail.com ↗</a>
          <a href="tel:+917880764235">+91 78807 64235 ↗</a>
          <a
            href="https://www.linkedin.com/in/abhilash-maurya-b615b9277/"
            rel="noreferrer"
            target="_blank"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://github.com/Abhilash-0322"
            rel="noreferrer"
            target="_blank"
          >
            GitHub ↗
          </a>
        </div>
      </section>

      <footer className="shell footer">
        <p>© 2026 Abhilash Maurya. Built for useful things.</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
