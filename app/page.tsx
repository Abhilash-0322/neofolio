"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const projects = [
  {
    number: "01",
    name: "TalentInfra",
    description:
      "A bias-aware hiring workspace where specialized agents turn messy candidate data into explainable shortlists.",
    stack: "FastAPI · Next.js · PostgreSQL · Groq · Azure",
    label: "AICKATHON / 2026",
    href: "https://zynd-hiring-app.azurewebsites.net",
    repo: "https://github.com/Abhilash-0322/zynd-aickathon",
  },
  {
    number: "02",
    name: "SolSniff",
    description:
      "A narrative and idea agent for the Solana ecosystem, built to make noisy market signals easier to explore.",
    stack: "Next.js · Groq · Prisma · Vercel",
    label: "PRODUCT / LIVE",
    href: "https://solsniffer.vercel.app/",
    repo: "https://github.com/Abhilash-0322/sol-sniff",
  },
  {
    number: "03",
    name: "ChainSentinel AI",
    description:
      "Multi-chain smart contract risk and compliance analysis with an API-first backend for teams that ship in public.",
    stack: "FastAPI · Next.js · MongoDB",
    label: "SECURITY / AI",
    href: "https://github.com/Abhilash-0322/chainsentinel.ai",
    repo: "https://github.com/Abhilash-0322/chainsentinel.ai",
  },
  {
    number: "04",
    name: "Quadrant RAG",
    description:
      "A practical retrieval system for custom knowledge bases, from ingestion and embeddings to grounded answers.",
    stack: "FastAPI · LangChain · Vector DBs · Docker",
    label: "INFRA / OPEN SOURCE",
    href: "https://github.com/Abhilash-0322/quadrant-rag",
    repo: "https://github.com/Abhilash-0322/quadrant-rag",
  },
];

const skills = [
  "Python",
  "FastAPI",
  "AI agents",
  "RAG systems",
  "PostgreSQL",
  "AWS / Azure",
  "Docker",
  "Next.js",
];

export default function Home() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme") as Theme | null;
    if (savedTheme === "dark" || savedTheme === "light") {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((current) => (current === "light" ? "dark" : "light"));

  return (
    <main className="site-shell">
      <nav className="nav container" aria-label="Main navigation">
        <a className="wordmark" href="#top" aria-label="Back to top">
          AM<span>.</span>
        </a>
        <div className="nav-links">
          <a href="#work">Selected work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}>
            <span className="theme-icon" aria-hidden="true">{theme === "light" ? "◐" : "☼"}</span>
            {theme === "light" ? "Dark mode" : "Light mode"}
          </button>
        </div>
      </nav>

      <section id="top" className="hero container">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> Open to work · 2026</div>
          <h1>Building the<br /><em>useful</em> internet.</h1>
          <p className="hero-intro">
            I&apos;m Abhilash — a backend and AI systems developer in Delhi NCR. I turn complex ideas into
            dependable products, from the first API to a cloud deployment that stays up.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">See selected work <span>↘</span></a>
            <a className="text-link" href="mailto:abhilash.m.git@gmail.com">Let&apos;s talk <span>↗</span></a>
          </div>
        </div>
        <div className="hero-aside">
          <div className="aside-rule" />
          <p>Backend<br />AI systems<br />Cloud infrastructure</p>
          <span className="aside-location">Delhi NCR / India</span>
        </div>
        <div className="hero-index">01 <span>/</span> 04</div>
      </section>

      <div className="ticker" aria-label="Areas of focus">
        <div className="ticker-inner">
          <span>APIs that scale</span><b>✳</b><span>Agents with purpose</span><b>✳</b>
          <span>Infrastructure that lasts</span><b>✳</b><span>APIs that scale</span><b>✳</b>
          <span>Agents with purpose</span><b>✳</b><span>Infrastructure that lasts</span>
        </div>
      </div>

      <section id="work" className="section container work-section">
        <div className="section-heading">
          <p className="section-kicker">01 / Selected work</p>
          <h2>Things I&apos;ve<br /><em>shipped.</em></h2>
          <p className="section-note">A few systems, products, and experiments that made it out of the notebook.</p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project" key={project.name}>
              <div className="project-number">{project.number}</div>
              <div className="project-main">
                <div className="project-meta"><span>{project.label}</span><span>{project.stack}</span></div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="project-links">
                  <a href={project.href} target="_blank" rel="noreferrer">View project <span>↗</span></a>
                  <a className="repo-link" href={project.repo} target="_blank" rel="noreferrer">Source <span>↗</span></a>
                </div>
              </div>
              <div className="project-arrow" aria-hidden="true">↗</div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="container about-grid">
          <div className="section-heading">
            <p className="section-kicker">02 / The short version</p>
            <h2>More than<br /><em>the stack.</em></h2>
          </div>
          <div className="about-copy">
            <p className="large-copy">
              Good software is a conversation between people, constraints, and possibility. I like being in
              the middle of that conversation — making architecture legible, teams faster, and ambitious ideas
              shippable.
            </p>
            <p>
              I&apos;m currently studying Information Technology at KIET and coordinating AI/ML work at Innogeeks
              Club, where I&apos;ve led 5+ MVPs and mentored developers across backend, ML, and hackathon builds.
            </p>
            <div className="about-details">
              <div><span>Currently</span><strong>AI/ML Coordinator<br />Innogeeks Club, KIET</strong></div>
              <div><span>Previously</span><strong>AI Engineer Intern<br />Spearmint Technologies</strong></div>
              <div><span>Credentials</span><strong>AWS Cloud Practitioner<br />Google AI Essentials</strong></div>
            </div>
          </div>
        </div>
      </section>

      <section className="capabilities container">
        <div className="capabilities-heading">
          <p className="section-kicker">03 / What I bring</p>
          <h2>Curious by<br /><em>default.</em></h2>
        </div>
        <div className="capability-content">
          <p className="capability-lede">The toolkit changes. The care doesn&apos;t.</p>
          <div className="skill-list">
            {skills.map((skill, index) => <span key={skill}><i>0{index + 1}</i>{skill}</span>)}
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="container contact-inner">
          <p className="section-kicker">04 / Start a conversation</p>
          <h2>Have a hard<br />problem?</h2>
          <a className="contact-email" href="mailto:abhilash.m.git@gmail.com">abhilash.m.git@gmail.com <span>↗</span></a>
          <div className="contact-bottom">
            <span>Available for backend, AI systems & cloud roles.</span>
            <div className="social-links">
              <a href="https://github.com/Abhilash-0322" target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href="https://www.linkedin.com/in/abhilash-maurya-b615b9277/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href="https://x.com/abhilash_glitch" target="_blank" rel="noreferrer">X ↗</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer container">
        <span>© 2026 Abhilash Maurya</span>
        <span>Made with intention in Delhi NCR</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
