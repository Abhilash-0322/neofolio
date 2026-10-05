"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const projects = [
  {
    number: "01",
    title: "TalentInfra",
    label: "Bias-aware hiring",
    description:
      "A multi-agent hiring system that turns candidate signals into fair, explainable recommendations.",
    stack: ["FastAPI", "Next.js", "PostgreSQL", "Groq"],
    href: "https://github.com/Abhilash-0322/zynd-aickathon",
    live: "https://zynd-hiring-app.azurewebsites.net",
    accent: "lavender",
  },
  {
    number: "02",
    title: "SolSniff",
    label: "Ideas for Solana",
    description:
      "An AI agent for discovering and shaping Solana narratives, built for fast-moving builders.",
    stack: ["Next.js", "Groq", "Prisma", "Vercel"],
    href: "https://github.com/Abhilash-0322/sol-sniff",
    live: "https://solsniffer.vercel.app/",
    accent: "peach",
  },
  {
    number: "03",
    title: "ChainSentinel AI",
    label: "Smart contract risk",
    description:
      "Multi-chain risk and compliance intelligence that helps teams inspect contracts before they ship.",
    stack: ["FastAPI", "Next.js", "MongoDB"],
    href: "https://github.com/Abhilash-0322/chainsentinel.ai",
    accent: "mint",
  },
  {
    number: "04",
    title: "Quadrant RAG",
    label: "Knowledge retrieval",
    description:
      "A production-minded RAG foundation for asking better questions of private knowledge bases.",
    stack: ["FastAPI", "LangChain", "Vector DB", "Docker"],
    href: "https://github.com/Abhilash-0322/quadrant-rag",
    accent: "blue",
  },
];

const toolkit = [
  "Python",
  "FastAPI",
  "Django",
  "TypeScript",
  "Next.js",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "AWS",
  "Azure",
  "Docker",
  "GitHub Actions",
  "LangChain",
  "RAG",
  "AI agents",
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16">
      <path d="M3 13 13 3M5 3h8v8" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.46-1.16-1.11-1.47-1.11-1.47-.9-.61.07-.6.07-.6 1 .08 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.1.64-1.35-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.55 9.55 0 0 1 12 7c.85 0 1.7.12 2.5.34 1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

export default function Home() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme") as Theme | null;
    const initialTheme =
      savedTheme ??
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    setTheme(initialTheme);
    document.documentElement.dataset.theme = initialTheme;
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("theme", nextTheme);
  }

  return (
    <main>
      <nav className="nav shell">
        <a className="wordmark" href="#top" aria-label="Abhilash Maurya home">
          <span className="wordmark-mark">A</span>
          <span>Abhilash<span className="wordmark-dot">.</span></span>
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          type="button"
        >
          <span className="theme-icon">{theme === "light" ? "☾" : "☼"}</span>
          <span className="theme-label">{theme === "light" ? "Dark" : "Light"}</span>
        </button>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <div className="availability">
            <span className="pulse" />
            OPEN TO WORK
          </div>
          <p className="eyebrow">Backend · AI systems · Cloud</p>
          <h1>
            Building useful
            <em> systems,</em>
            <br />
            one thoughtful
            <br />
            <span className="underlined">commit</span> at a time.
          </h1>
          <p className="hero-intro">
            I&apos;m Abhilash, a backend and AI systems developer in Delhi NCR.
            I turn ambitious ideas into fast, dependable products that work
            beyond the demo.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              Explore my work <ArrowIcon />
            </a>
            <a className="button button-quiet" href="mailto:abhilash.m.git@gmail.com">
              Let&apos;s talk <span>↗</span>
            </a>
          </div>
        </div>
        <div className="hero-aside">
          <div className="portrait-card">
            <div className="portrait-orbit orbit-one" />
            <div className="portrait-orbit orbit-two" />
            <div className="portrait-initials">AM</div>
            <span className="portrait-caption">EST. 2023 / INDIA</span>
            <span className="portrait-coordinate">28° 40&apos; N · 77° 13&apos; E</span>
          </div>
          <div className="aside-note">
            <span className="note-line" />
            <p>Currently learning<br /><strong>how to make AI feel human.</strong></p>
          </div>
        </div>
      </section>

      <div className="marquee-wrap" aria-hidden="true">
        <div className="marquee">
          <span>BACKEND ENGINEERING</span><i>✳</i><span>AI SYSTEMS</span><i>✳</i>
          <span>CLOUD INFRASTRUCTURE</span><i>✳</i><span>OPEN SOURCE</span><i>✳</i>
          <span>BACKEND ENGINEERING</span><i>✳</i><span>AI SYSTEMS</span><i>✳</i>
          <span>CLOUD INFRASTRUCTURE</span><i>✳</i><span>OPEN SOURCE</span><i>✳</i>
        </div>
      </div>

      <section className="section shell" id="work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2>Things I&apos;ve shipped.</h2>
          </div>
          <p className="section-intro">
            A small archive of systems, experiments, and products built with
            good people and better questions.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className={`project-card ${project.accent}`} key={project.title}>
              <div className="project-topline">
                <span>{project.number}</span>
                <a href={project.href} target="_blank" rel="noreferrer" aria-label={`${project.title} on GitHub`}>
                  <GithubIcon />
                </a>
              </div>
              <div className="project-visual">
                <span className="visual-symbol">{project.number === "01" ? "✦" : project.number === "02" ? "◌" : project.number === "03" ? "⌁" : "⊹"}</span>
                <span className="visual-label">{project.label}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-list">
                {project.stack.map((item) => <span key={item}>{item}</span>)}
              </div>
              {project.live && (
                <a className="project-link" href={project.live} target="_blank" rel="noreferrer">
                  Visit live project <ArrowIcon />
                </a>
              )}
            </article>
          ))}
        </div>
        <div className="more-work">
          <span>More experiments in the lab</span>
          <a href="https://github.com/Abhilash-0322" target="_blank" rel="noreferrer">View GitHub <ArrowIcon /></a>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="shell about-grid">
          <div>
            <p className="eyebrow">A little context</p>
            <h2>Curious by nature.<br /><em>Practical by choice.</em></h2>
            <p className="about-copy">
              I&apos;m a B.Tech IT student at KIET who likes working at the
              intersection of infrastructure and intelligence. My favorite
              projects take a fuzzy problem, give it a clear API, and put it in
              the hands of real people.
            </p>
            <p className="about-copy">
              Outside the editor, I lead the AI/ML community at Innogeeks,
              mentor developers, and find excuses to join another hackathon.
            </p>
            <a className="text-link" href="mailto:abhilash.m.git@gmail.com">Say hello <ArrowIcon /></a>
          </div>
          <div className="timeline">
            <p className="eyebrow">The short version</p>
            <div className="timeline-item">
              <span className="timeline-year">2026 — now</span>
              <div><strong>AI Engineer Intern</strong><span>Spearmint Technologies · Remote</span></div>
            </div>
            <div className="timeline-item">
              <span className="timeline-year">2023 — now</span>
              <div><strong>AI/ML Coordinator</strong><span>Innogeeks Club, KIET</span></div>
            </div>
            <div className="timeline-item">
              <span className="timeline-year">2023 — 27</span>
              <div><strong>B.Tech Information Technology</strong><span>KIET Group of Institutions</span></div>
            </div>
            <div className="recognition">
              <span className="recognition-star">✦</span>
              <div><strong>Small wins, big energy</strong><span>MLH winner · patent co-inventor · hackathon finalist</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="toolkit-section shell">
        <div className="section-heading compact">
          <div><p className="eyebrow">My toolkit</p><h2>Always learning.</h2></div>
          <p className="section-intro">The tools I reach for when an idea needs to become a reliable thing.</p>
        </div>
        <div className="toolkit">
          {toolkit.map((item, index) => <span className={index % 4 === 0 ? "tool-highlight" : ""} key={item}>{item}</span>)}
        </div>
      </section>

      <footer className="footer shell" id="contact">
        <div className="footer-main">
          <p className="eyebrow">Have a good problem?</p>
          <h2>Let&apos;s make<br /><em>something useful.</em></h2>
          <a className="footer-email" href="mailto:abhilash.m.git@gmail.com">abhilash.m.git@gmail.com <ArrowIcon /></a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Abhilash Maurya</span>
          <div className="social-links">
            <a href="https://github.com/Abhilash-0322" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/abhilash-maurya-b615b9277/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://x.com/abhilash_glitch" target="_blank" rel="noreferrer">X / Twitter</a>
          </div>
          <span className="footer-location">Made with intention · Delhi NCR</span>
        </div>
      </footer>
    </main>
  );
}
