"use client";

import { useEffect, useState } from "react";

type IconName =
  | "arrow"
  | "sun"
  | "moon"
  | "github"
  | "linkedin"
  | "x"
  | "mail"
  | "external"
  | "menu"
  | "close";

function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (name === "github") {
    return (
      <svg {...common} fill="currentColor" stroke="none">
        <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.81 1.3 3.5.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18a4.7 4.7 0 0 1 1.23 3.22c0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
      </svg>
    );
  }

  if (name === "linkedin") {
    return (
      <svg {...common}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
        <path d="M2 9h4v12H2zM4 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z" />
      </svg>
    );
  }

  if (name === "x") {
    return (
      <svg {...common}>
        <path d="m4 4 16 16M20 4 4 20" />
      </svg>
    );
  }

  if (name === "sun") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="3.5" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" />
      </svg>
    );
  }

  if (name === "moon") {
    return (
      <svg {...common}>
        <path d="M20.7 15.3A8.5 8.5 0 0 1 8.7 3.3 8.5 8.5 0 1 0 20.7 15.3Z" />
      </svg>
    );
  }

  if (name === "mail") {
    return (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="14" rx="1.5" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    );
  }

  if (name === "external") {
    return (
      <svg {...common}>
        <path d="M14 4h6v6M20 4l-9 9" />
        <path d="M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5" />
      </svg>
    );
  }

  if (name === "menu") {
    return (
      <svg {...common}>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </svg>
    );
  }

  if (name === "close") {
    return (
      <svg {...common}>
        <path d="m6 6 12 12M18 6 6 18" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  );
}

const projects = [
  {
    number: "01",
    title: "TalentInfra",
    category: "Multi-agent hiring intelligence",
    description:
      "A bias-aware hiring system that turns candidate signals into explainable, structured decisions. Shipped for the Zynd AIckathon with a FastAPI core and Azure deployment.",
    tags: ["FastAPI", "Next.js", "PostgreSQL", "Azure"],
    github: "https://github.com/Abhilash-0322/zynd-aickathon",
    live: "https://zynd-hiring-app.azurewebsites.net",
    featured: true,
  },
  {
    number: "02",
    title: "ChainSentinel AI",
    category: "Security & compliance intelligence",
    description:
      "AI-assisted smart contract analysis across Ethereum, Solana, and Aptos. Static analysis pipelines, risk scoring, and live alerts make complex security reports useful.",
    tags: ["Python", "MongoDB", "WebSockets", "Groq"],
    github: "https://github.com/Abhilash-0322/chainsentinel.ai",
    live: null,
    featured: false,
  },
  {
    number: "03",
    title: "Quadrant RAG",
    category: "Retrieval-augmented knowledge",
    description:
      "A production-minded RAG foundation for custom knowledge bases, from document ingestion and chunking through vector retrieval and low-latency answers.",
    tags: ["FastAPI", "LangChain", "Vector DBs", "Docker"],
    github: "https://github.com/Abhilash-0322/quadrant-rag",
    live: null,
    featured: false,
  },
  {
    number: "04",
    title: "SolSniff",
    category: "Narrative discovery for Solana",
    description:
      "A focused idea agent for making sense of fast-moving Solana narratives. A small, sharp product built with a full-stack web experience.",
    tags: ["Next.js", "Groq", "Prisma", "Vercel"],
    github: "https://github.com/Abhilash-0322/sol-sniff",
    live: "https://solsniffer.vercel.app/",
    featured: false,
  },
];

const capabilities = [
  ["01", "Backend systems", "Python · FastAPI · Django · Express"],
  ["02", "AI engineering", "Agents · RAG · LangChain · LLM workflows"],
  ["03", "Cloud & delivery", "AWS · Azure · Docker · GitHub Actions"],
  ["04", "Data foundations", "PostgreSQL · MongoDB · Redis · Vector DBs"],
];

export default function Home() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.dataset.theme === "dark");
  }, []);

  function toggleTheme() {
    const nextTheme = dark ? "light" : "dark";
    setDark(!dark);
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("theme", nextTheme);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <main>
      <div className="grain" aria-hidden="true" />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Abhilash Maurya home">
          <span className="brand-mark">AM</span>
          <span className="brand-name">Abhilash Maurya</span>
        </a>

        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
          <a href="#work" onClick={closeMenu}>Selected work</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <button className="nav-theme mobile-theme" onClick={toggleTheme} aria-label="Toggle color theme">
            <Icon name={dark ? "sun" : "moon"} size={16} />
            <span>{dark ? "Light mode" : "Dark mode"}</span>
          </button>
        </nav>

        <div className="header-actions">
          <span className="header-location">IN / 28.67° N</span>
          <button className="nav-theme" onClick={toggleTheme} aria-label="Toggle color theme">
            <Icon name={dark ? "sun" : "moon"} size={17} />
          </button>
          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
          >
            <Icon name={menuOpen ? "close" : "menu"} size={20} />
          </button>
        </div>
      </header>

      <div id="top" className="hero page-grid">
        <div className="hero-kicker reveal">
          <span className="status-dot" />
          <span>Available for select opportunities</span>
          <span className="kicker-line" />
          <span>2026 — Present</span>
        </div>
        <div className="hero-copy reveal reveal-delay">
          <p className="eyebrow">Backend / AI systems / Cloud</p>
          <h1>
            Building the
            <br />
            <em>quiet machinery</em>
            <br />
            behind useful things.
          </h1>
          <div className="hero-bottom">
            <p className="hero-intro">
              I&apos;m Abhilash — a backend and AI systems developer based in Delhi NCR. I
              build dependable APIs, agentic workflows, and cloud infrastructure that hold up
              beyond the demo.
            </p>
            <a className="round-link" href="#work" aria-label="Scroll to selected work">
              <Icon name="arrow" size={23} />
            </a>
          </div>
        </div>
        <div className="hero-side reveal reveal-delay-2">
          <div className="vertical-label">ABHILASH MAURYA / PORTFOLIO</div>
          <div className="hero-index">01<span>/</span>04</div>
        </div>
      </div>

      <section className="manifesto section-rule" id="about">
        <div className="page-grid">
          <p className="section-label">A short note<span className="label-line" /></p>
          <div className="manifesto-content">
            <p className="large-copy">
              Good software should feel <em>inevitable</em> — clear to use, resilient under
              pressure, and thoughtfully made beneath the surface.
            </p>
            <div className="manifesto-detail">
              <p>
                My work sits at the intersection of backend engineering and applied AI. I like
                the unglamorous but important parts: modeling the data, shaping the API,
                orchestrating the agents, and getting the thing deployed.
              </p>
              <a className="text-link" href="#contact">
                Let&apos;s talk <Icon name="arrow" size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="work-section section-rule" id="work">
        <div className="page-grid section-heading">
          <p className="section-label">Selected work<span className="label-line" /></p>
          <div>
            <p className="section-count">04 / Projects</p>
            <h2>Systems with<br /><em>something to say.</em></h2>
          </div>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className={project.featured ? "project featured" : "project"} key={project.title}>
              <div className="project-number">{project.number}</div>
              <div className="project-main">
                <div className="project-title-row">
                  <div>
                    <p className="project-category">{project.category}</p>
                    <h3>{project.title}</h3>
                  </div>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} on GitHub`}>
                      <Icon name="github" size={17} />
                    </a>
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noreferrer" aria-label={`${project.title} live site`}>
                        <Icon name="external" size={16} />
                      </a>
                    )}
                  </div>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="tag-list">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
              <div className="project-arrow"><Icon name="arrow" size={22} /></div>
            </article>
          ))}
        </div>
      </section>

      <section className="experience section-rule">
        <div className="page-grid">
          <p className="section-label">Experience<span className="label-line" /></p>
          <div className="experience-content">
            <div className="experience-entry">
              <div className="experience-meta">
                <span>Aug 2026 — now</span>
                <span>Remote</span>
              </div>
              <div>
                <h3>AI Engineer Intern</h3>
                <p className="company">Spearmint Technologies</p>
                <p className="experience-description">
                  Voice and agent features — TTS pipelines, fine-tuning, data collection, and
                  Hermes-based agent development.
                </p>
              </div>
            </div>
            <div className="experience-entry">
              <div className="experience-meta">
                <span>Nov 2023 — now</span>
                <span>KIET · Ghaziabad</span>
              </div>
              <div>
                <h3>AI/ML Coordinator</h3>
                <p className="company">Innogeeks Club</p>
                <p className="experience-description">
                  Led 5+ AI and full-stack MVPs, mentored 6+ developers, and coordinated small
                  teams through fast-paced hackathon delivery.
                </p>
              </div>
            </div>
            <div className="education-row">
              <span className="mini-label">Currently learning</span>
              <p>B.Tech, Information Technology <em>· Expected 2027</em></p>
            </div>
          </div>
        </div>
      </section>

      <section className="capabilities section-rule">
        <div className="page-grid">
          <p className="section-label">Capabilities<span className="label-line" /></p>
          <div className="capabilities-content">
            <p className="capabilities-intro">The tools are always changing.<br /><em>The fundamentals stay.</em></p>
            <div className="capability-list">
              {capabilities.map(([number, title, tools]) => (
                <div className="capability" key={number}>
                  <span className="capability-number">{number}</span>
                  <h3>{title}</h3>
                  <p>{tools}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="proof section-rule">
        <div className="page-grid">
          <p className="section-label">In the record<span className="label-line" /></p>
          <div className="proof-grid">
            <div className="proof-item">
              <span className="proof-number">01</span>
              <p>Co-inventor on an IoT-AI telemedicine patent</p>
              <span className="proof-note">India 202511018153A · 2025</span>
            </div>
            <div className="proof-item">
              <span className="proof-number">02</span>
              <p>1st place in an AI-agent track</p>
              <span className="proof-note">500+ participants</span>
            </div>
            <div className="proof-item">
              <span className="proof-number">03</span>
              <p>Top 5 finalist at regional hackathons</p>
              <span className="proof-note">5+ events</span>
            </div>
            <div className="proof-item">
              <span className="proof-number">04</span>
              <p>AWS Certified Cloud Practitioner</p>
              <span className="proof-note">Amazon Web Services</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer" id="contact">
        <div className="page-grid footer-top">
          <p className="section-label">Get in touch<span className="label-line" /></p>
          <div className="footer-copy">
            <p className="footer-kicker">Open to work · Delhi NCR / Remote</p>
            <h2>Have a good<br /><em>problem?</em></h2>
            <a className="email-link" href="mailto:abhilash.m.git@gmail.com">
              abhilash.m.git@gmail.com <Icon name="arrow" size={20} />
            </a>
          </div>
        </div>
        <div className="page-grid footer-bottom">
          <p>© {new Date().getFullYear()} Abhilash Maurya</p>
          <div className="social-links">
            <a href="https://github.com/Abhilash-0322" target="_blank" rel="noreferrer"><Icon name="github" size={16} /> GitHub</a>
            <a href="https://www.linkedin.com/in/abhilash-maurya-b615b9277/" target="_blank" rel="noreferrer"><Icon name="linkedin" size={16} /> LinkedIn</a>
            <a href="https://x.com/abhilash_glitch" target="_blank" rel="noreferrer"><Icon name="x" size={16} /> X</a>
          </div>
          <a className="back-top" href="#top">Back to top <Icon name="arrow" size={15} /></a>
        </div>
      </footer>
    </main>
  );
}
