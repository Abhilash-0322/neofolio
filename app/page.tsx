"use client";

import { useEffect, useState } from "react";

const projects = [
  {
    number: "01",
    title: "TalentInfra",
    meta: "FastAPI · Next.js · PostgreSQL · Azure",
    description:
      "A bias-aware multi-agent hiring platform that helps teams make more considered, explainable decisions.",
    github: "https://github.com/Abhilash-0322/zynd-aickathon",
    live: "https://zynd-hiring-app.azurewebsites.net",
  },
  {
    number: "02",
    title: "SolSniff",
    meta: "Next.js · Groq · Prisma · Vercel",
    description:
      "A narrative and idea agent for the Solana ecosystem, turning noisy signals into useful context.",
    github: "https://github.com/Abhilash-0322/sol-sniff",
    live: "https://solsniffer.vercel.app/",
  },
  {
    number: "03",
    title: "ChainSentinel AI",
    meta: "FastAPI · Next.js · MongoDB",
    description:
      "Multi-chain smart contract risk and compliance tooling for safer on-chain decisions.",
    github: "https://github.com/Abhilash-0322/chainsentinel.ai",
  },
  {
    number: "04",
    title: "Quadrant RAG",
    meta: "FastAPI · LangChain · Vector DB · Docker",
    description:
      "A reusable RAG foundation for asking better questions of custom knowledge bases.",
    github: "https://github.com/Abhilash-0322/quadrant-rag",
  },
  {
    number: "05",
    title: "Zen Heaven",
    meta: "FastAPI · React · LangChain · Twilio",
    description:
      "A wellness AI with sentiment-aware conversations and thoughtful safety flows.",
    github: "https://github.com/Abhilash-0322/HackHaven2.0",
    live: "https://hack-haven2-0.vercel.app/",
  },
];

const skills = [
  "Python",
  "FastAPI",
  "AI agents",
  "RAG",
  "PostgreSQL",
  "Docker",
  "AWS",
  "Azure",
  "Next.js",
  "LangChain",
  "GitHub Actions",
  "Redis",
];

export default function Home() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = storedTheme ? storedTheme === "dark" : prefersDark;
    setDark(isDark);
    document.body.dataset.theme = isDark ? "dark" : "light";
  }, []);

  function toggleTheme() {
    const nextTheme = !dark;
    setDark(nextTheme);
    document.body.dataset.theme = nextTheme ? "dark" : "light";
    window.localStorage.setItem("theme", nextTheme ? "dark" : "light");
  }

  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Abhilash Maurya home">
          <span className="brand-mark" />
          <span>abhilash / maurya</span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#work">work</a>
          <a href="#about">about</a>
          <a href="#contact">contact</a>
          <button
            className="theme-button"
            onClick={toggleTheme}
            aria-label={`Switch to ${dark ? "light" : "dark"} theme`}
          >
            <span className="theme-dot" />
            {dark ? "light" : "dark"}
          </button>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-line" />
              backend / ai systems / delhi ncr
            </p>
            <h1>
              I make
              <br />
              complex
              <br />
              systems <em>work.</em>
            </h1>
          </div>
          <div className="hero-copy">
            <p>
              I&apos;m Abhilash — a backend and AI systems developer shipping
              APIs, agents, and cloud infrastructure that hold up beyond the
              demo.
            </p>
            <div className="hero-actions">
              <a className="button-primary" href="#contact">
                Let&apos;s talk <span className="button-arrow">↗</span>
              </a>
              <a className="text-link" href="#work">
                See the work
              </a>
            </div>
          </div>
        </div>
        <span className="scribble">open to work ✳</span>
      </section>

      <section className="section-wrap" id="work">
        <div className="section-heading">
          <h2>Selected work</h2>
          <p>Things I&apos;ve built &amp; shipped / 2024—26</p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project" key={project.number}>
              <span className="project-number">{project.number}</span>
              <div>
                <h3 className="project-title">{project.title}</h3>
                <div className="project-meta">{project.meta}</div>
              </div>
              <p className="project-desc">{project.description}</p>
              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} on GitHub`}
                >
                  ↗
                </a>
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Visit ${project.title} live site`}
                  >
                    ◉
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-band" id="about">
        <div className="about-grid">
          <span className="about-label">A little context</span>
          <div className="about-main">
            <h2>
              Useful software, with a little <em>care</em> baked in.
            </h2>
            <p>
              I&apos;m a B.Tech Information Technology student at KIET, where I
              also coordinate AI/ML work for Innogeeks Club. I&apos;ve led
              campus MVPs, mentored builders, and competed in enough hackathons
              to know the difference between an idea and a shippable system.
            </p>
            <div className="about-details">
              <div className="detail">
                <span>Based in</span>
                <strong>Ghaziabad, India</strong>
              </div>
              <div className="detail">
                <span>Currently</span>
                <strong>Building &amp; learning</strong>
              </div>
              <div className="detail">
                <span>Studying</span>
                <strong>B.Tech IT · 2027</strong>
              </div>
              <div className="detail">
                <span>Certified</span>
                <strong>AWS Cloud Practitioner</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-wrap">
        <div className="experience-grid">
          <div className="section-heading">
            <h2>Now &amp; then</h2>
            <p>Experience</p>
          </div>
          <div className="experience-list">
            <article className="experience-item">
              <div className="experience-top">
                <h3>AI Engineer Intern · Spearmint Technologies</h3>
                <time>Aug 2026</time>
              </div>
              <p>
                Voice and agent features: TTS pipelines, fine-tuning, data
                collection, and Hermes-based agent development.
              </p>
            </article>
            <article className="experience-item">
              <div className="experience-top">
                <h3>AI/ML Coordinator · Innogeeks Club, KIET</h3>
                <time>Nov 2023 — now</time>
              </div>
              <p>
                Led 5+ AI and full-stack MVPs, mentored 6+ developers, and
                coordinated agile teams of 3–6 through hackathon delivery.
              </p>
            </article>
            <div className="tag-cloud" aria-label="Skills">
              {skills.map((skill) => (
                <span className="tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-wrap" id="contact">
        <div className="contact-section">
          <h2>
            Have a good
            <br />
            problem? <em>hello.</em>
          </h2>
          <div className="contact-aside">
            <p>
              I&apos;m open to backend, AI systems, and cloud engineering roles
              — and to a good freelance build.
            </p>
            <a href="mailto:abhilash.m.git@gmail.com">abhilash.m.git@gmail.com ↗</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <span>© 2026 Abhilash Maurya</span>
        <div className="footer-links">
          <a href="https://github.com/Abhilash-0322" target="_blank" rel="noreferrer">
            github
          </a>
          <a
            href="https://www.linkedin.com/in/abhilash-maurya-b615b9277/"
            target="_blank"
            rel="noreferrer"
          >
            linkedin
          </a>
          <a href="https://x.com/abhilash_glitch" target="_blank" rel="noreferrer">
            x
          </a>
        </div>
      </footer>
    </main>
  );
}
