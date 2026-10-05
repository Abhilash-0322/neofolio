"use client";

import { useEffect, useState } from "react";

type IconProps = {
  size?: number;
};

function ArrowUpRight({ size = 16 }: IconProps) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowDown({ size = 16 }: IconProps) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 4v15m0 0 6-6m-6 6-6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SunIcon({ size = 16 }: IconProps) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
      <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function MoonIcon({ size = 16 }: IconProps) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M20.2 15.1A8.5 8.5 0 0 1 8.9 3.8 8.51 8.51 0 1 0 20.2 15.1Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  );
}

function GithubIcon({ size = 17 }: IconProps) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .7a11.4 11.4 0 0 0-3.61 22.2c.57.1.78-.25.78-.55v-2.15c-3.18.7-3.85-1.53-3.85-1.53-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.03 1.76 2.7 1.25 3.36.95.1-.74.4-1.25.73-1.54-2.54-.29-5.21-1.27-5.21-5.65 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.45.11-3.03 0 0 .96-.31 3.15 1.17A10.9 10.9 0 0 1 12 5.94c.97 0 1.94.13 2.85.38 2.19-1.48 3.15-1.17 3.15-1.17.62 1.58.23 2.74.11 3.03.73.8 1.18 1.82 1.18 3.07 0 4.39-2.68 5.35-5.23 5.63.41.36.78 1.06.78 2.14v3.18c0 .3.21.66.79.55A11.4 11.4 0 0 0 12 .7Z" />
    </svg>
  );
}

function LinkedInIcon({ size = 17 }: IconProps) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M5.3 3.5a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM3.4 9.6h3.8v11H3.4v-11Zm6.1 0h3.6v1.5h.05c.5-1 1.73-2.05 3.57-2.05 3.82 0 4.53 2.51 4.53 5.78v5.77h-3.76v-5.12c0-1.22-.02-2.79-1.7-2.79-1.7 0-1.96 1.33-1.96 2.7v5.2H9.5v-11Z" />
    </svg>
  );
}

const projects = [
  {
    number: "01",
    title: "TalentInfra",
    description:
      "A multi-agent hiring system that makes candidate evaluation more explainable, balanced, and useful for real teams.",
    tags: ["FastAPI", "Next.js", "PostgreSQL", "Azure"],
    link: "https://zynd-hiring-app.azurewebsites.net",
    github: "https://github.com/Abhilash-0322/zynd-aickathon",
    featured: true,
  },
  {
    number: "02",
    title: "SolSniff",
    description:
      "A narrative discovery agent for Solana ideas. Turns noisy market context into a sharper starting point for research.",
    tags: ["Next.js", "Groq", "Prisma", "Vercel"],
    link: "https://solsniffer.vercel.app/",
    github: "https://github.com/Abhilash-0322/sol-sniff",
    featured: false,
  },
  {
    number: "03",
    title: "ChainSentinel AI",
    description:
      "Multi-chain smart contract risk and compliance tooling built to surface issues before they become expensive ones.",
    tags: ["FastAPI", "Next.js", "MongoDB", "AI"],
    link: "https://github.com/Abhilash-0322/chainsentinel.ai",
    github: "https://github.com/Abhilash-0322/chainsentinel.ai",
    featured: false,
  },
  {
    number: "04",
    title: "Quadrant RAG",
    description:
      "A focused RAG foundation for custom knowledge bases, from ingestion and retrieval to a deployable API.",
    tags: ["FastAPI", "LangChain", "Vector DB", "Docker"],
    link: "https://github.com/Abhilash-0322/quadrant-rag",
    github: "https://github.com/Abhilash-0322/quadrant-rag",
    featured: false,
  },
  {
    number: "05",
    title: "Zen Heaven",
    description:
      "A wellness companion combining sentiment signals with human-in-the-loop safety flows for moments that matter.",
    tags: ["React", "FastAPI", "LangChain", "Twilio"],
    link: "https://hack-haven2-0.vercel.app/",
    github: "https://github.com/Abhilash-0322/HackHaven2.0",
    featured: false,
  },
];

const skills = [
  ["Build", "Python · FastAPI · Django · Express.js"],
  ["Ship", "AWS · Azure · Docker · GitHub Actions"],
  ["Think", "RAG · AI agents · LangChain · vector DBs"],
  ["Store", "PostgreSQL · MongoDB · Redis · Firebase"],
];

export default function Home() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    setDark(savedTheme === "dark");
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    window.localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Abhilash Maurya home">
          <span className="brand-mark">AM</span>
          <span className="brand-name">Abhilash Maurya</span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <button
          className="theme-toggle"
          type="button"
          onClick={() => setDark((value) => !value)}
          aria-label={`Switch to ${dark ? "light" : "dark"} theme`}
        >
          {dark ? <SunIcon /> : <MoonIcon />}
          <span>{dark ? "Light" : "Dark"}</span>
        </button>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <div className="availability"><span className="pulse-dot" /> OPEN TO WORK</div>
          <p className="eyebrow">Backend / AI systems / Cloud</p>
          <h1>
            Useful systems,
            <br />
            <em>quietly</em> shipped.
          </h1>
          <p className="hero-intro">
            I&apos;m Abhilash, a backend and AI systems developer focused on the
            space between a promising idea and a dependable product.
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
        <div className="hero-aside">
          <div className="hero-note">
            <span className="note-line" />
            <p>
              Building APIs, agent workflows, and cloud infrastructure that hold
              up beyond the demo.
            </p>
          </div>
          <div className="hero-coordinate">
            <span>28.67° N</span>
            <span>77.44° E</span>
            <span>DELHI NCR, IN</span>
          </div>
        </div>
      </section>

      <section className="signal-strip" aria-label="Highlights">
        <div className="shell signal-grid">
          <div className="signal-item">
            <strong>5+</strong>
            <span>AI &amp; full-stack MVPs led</span>
          </div>
          <div className="signal-item">
            <strong>2027</strong>
            <span>B.Tech IT · KIET</span>
          </div>
          <div className="signal-item">
            <strong>01</strong>
            <span>AWS Cloud Practitioner</span>
          </div>
          <div className="signal-item signal-availability">
            <strong><span className="pulse-dot" /> Now</strong>
            <span>Available for the right build</span>
          </div>
        </div>
      </section>

      <section className="section shell" id="work">
        <div className="section-heading">
          <p className="eyebrow">Selected work</p>
          <h2>Things I&apos;ve helped<br /><em>make real.</em></h2>
          <p className="section-caption">
            A few systems from the intersection of AI, infrastructure, and
            product thinking.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className={`project-card ${project.featured ? "project-featured" : ""}`} key={project.title}>
              <div className="project-topline">
                <span>{project.number}</span>
                <span className="project-arrow"><ArrowUpRight /></span>
              </div>
              <div className="project-content">
                <p className="project-kicker">{project.featured ? "Featured build" : "Project"}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <div className="project-footer">
                <div className="tag-list">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer">Source</a>
                  {project.link !== project.github && (
                    <a href={project.link} target="_blank" rel="noreferrer">Live <ArrowUpRight size={13} /></a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section about-section shell" id="about">
        <div className="about-intro">
          <p className="eyebrow">A little context</p>
          <h2>Technical by trade.<br /><em>Curious by default.</em></h2>
        </div>
        <div className="about-body">
          <p className="about-lede">
            I like working on the parts of software that need both clear
            thinking and follow-through: the API contract, the data model, the
            deployment pipeline, the edge case no one wrote down.
          </p>
          <p>
            Currently studying Information Technology at KIET and coordinating
            AI/ML work at Innogeeks Club. I&apos;ve shipped hackathon-winning
            systems, mentored builders, and learned that the best AI feature is
            the one a team can actually operate.
          </p>
          <a className="text-link" href="https://github.com/Abhilash-0322" target="_blank" rel="noreferrer">
            More on GitHub <ArrowUpRight />
          </a>
        </div>
      </section>

      <section className="skills-section">
        <div className="shell">
          <div className="skills-heading">
            <p className="eyebrow">Working toolkit</p>
            <span>04 / 04</span>
          </div>
          <div className="skills-grid">
            {skills.map(([label, value]) => (
              <div className="skill-row" key={label}>
                <span className="skill-label">{label}</span>
                <span>{value}</span>
                <ArrowUpRight size={15} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section experience-section shell">
        <div>
          <p className="eyebrow">Experience / now</p>
          <h2>Where I&apos;ve<br /><em>been useful.</em></h2>
        </div>
        <div className="experience-list">
          <article className="experience-row">
            <div>
              <p className="experience-period">AUG 2026 — NOW</p>
              <h3>AI Engineer Intern</h3>
            </div>
            <div>
              <p className="experience-company">Spearmint Technologies <span>↗</span></p>
              <p className="experience-description">Voice and agent features, TTS pipelines, fine-tuning, and data collection.</p>
            </div>
          </article>
          <article className="experience-row">
            <div>
              <p className="experience-period">NOV 2023 — NOW</p>
              <h3>AI/ML Coordinator</h3>
            </div>
            <div>
              <p className="experience-company">Innogeeks Club · KIET <span>↗</span></p>
              <p className="experience-description">Leading MVPs, mentoring developers, and helping small teams turn a weekend idea into a working system.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="contact-section shell" id="contact">
        <div className="contact-number">05</div>
        <p className="eyebrow">Have a system in mind?</p>
        <h2>Let&apos;s build something<br /><em>worth keeping.</em></h2>
        <a className="contact-email" href="mailto:abhilash.m.git@gmail.com">
          abhilash.m.git@gmail.com <ArrowUpRight size={21} />
        </a>
        <div className="contact-meta">
          <span>Delhi NCR, India</span>
          <span>Available for new work</span>
        </div>
      </section>

      <footer className="site-footer shell">
        <span>© {new Date().getFullYear()} Abhilash Maurya</span>
        <div className="social-links">
          <a href="https://github.com/Abhilash-0322" target="_blank" rel="noreferrer" aria-label="GitHub"><GithubIcon /></a>
          <a href="https://www.linkedin.com/in/abhilash-maurya-b615b9277/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
          <a href="https://x.com/abhilash_glitch" target="_blank" rel="noreferrer" aria-label="X">X</a>
        </div>
        <a className="back-top" href="#top">Back to top <ArrowUpRight size={14} /></a>
      </footer>
    </main>
  );
}
