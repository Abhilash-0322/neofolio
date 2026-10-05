"use client";

import { useEffect, useState } from "react";

type IconName =
  | "arrow"
  | "arrowUp"
  | "sun"
  | "moon"
  | "github"
  | "linkedin"
  | "mail"
  | "external"
  | "spark"
  | "map"
  | "copy";

function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (name === "github") {
    return (
      <svg {...common} viewBox="0 0 24 24">
        <path d="M15 22v-4.2c.1-1.2-.4-2-1-2.4 3.3-.4 6.7-1.6 6.7-7.2 0-1.6-.6-2.9-1.6-3.9.2-.4.7-1.9-.2-3.8 0 0-1.3-.4-4 1.5a13.5 13.5 0 0 0-7.3 0c-2.7-1.9-4-1.5-4-1.5-.9 1.9-.4 3.4-.2 3.8-1 1-1.6 2.3-1.6 3.9 0 5.6 3.4 6.8 6.7 7.2-.6.5-1.1 1.3-1.1 2.5V22" />
        <path d="M8.5 18c-3 .9-3-1.7-4.2-1.9M19 16.1c-1.2.2-1.2 2.8-4.2 1.9" />
      </svg>
    );
  }

  if (name === "linkedin") {
    return (
      <svg {...common}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
        <path d="M2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      </svg>
    );
  }

  if (name === "mail") {
    return (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    );
  }

  if (name === "sun") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="3.5" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
    );
  }

  if (name === "moon") {
    return (
      <svg {...common}>
        <path d="M20.7 15.2A8.7 8.7 0 0 1 8.8 3.3 8.7 8.7 0 1 0 20.7 15.2Z" />
      </svg>
    );
  }

  if (name === "map") {
    return (
      <svg {...common}>
        <path d="m9 18-6 3V6l6-3 6 3 6-3v15l-6 3-6-3Z" />
        <path d="M9 3v15M15 6v15" />
      </svg>
    );
  }

  if (name === "spark") {
    return (
      <svg {...common}>
        <path d="m12 3-1.4 5.6L5 10l5.6 1.4L12 17l1.4-5.6L19 10l-5.6-1.4L12 3Z" />
        <path d="m19 16-.6 2.4L16 19l2.4.6L19 22l.6-2.4L22 19l-2.4-.6L19 16Z" />
      </svg>
    );
  }

  if (name === "copy") {
    return (
      <svg {...common}>
        <rect x="8" y="8" width="12" height="12" rx="2" />
        <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
      </svg>
    );
  }

  if (name === "arrowUp") {
    return (
      <svg {...common}>
        <path d="M12 19V5M6 11l6-6 6 6" />
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

  return (
    <svg {...common}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

const projects = [
  {
    number: "01",
    title: "TalentInfra",
    description:
      "Bias-aware hiring intelligence built as a multi-agent system, from candidate signals to useful recommendations.",
    tags: ["FastAPI", "Next.js", "PostgreSQL", "Azure"],
    href: "https://github.com/Abhilash-0322/zynd-aickathon",
    live: "https://zynd-hiring-app.azurewebsites.net",
    accent: "coral",
  },
  {
    number: "02",
    title: "SolSniff",
    description:
      "A narrative and idea agent for the Solana ecosystem that turns noisy market context into a sharper starting point.",
    tags: ["Next.js", "Groq", "Prisma", "Vercel"],
    href: "https://github.com/Abhilash-0322/sol-sniff",
    live: "https://solsniffer.vercel.app/",
    accent: "blue",
  },
  {
    number: "03",
    title: "ChainSentinel AI",
    description:
      "Multi-chain smart contract risk and compliance workflows for teams that need signal before they ship.",
    tags: ["FastAPI", "Next.js", "MongoDB"],
    href: "https://github.com/Abhilash-0322/chainsentinel.ai",
    live: "",
    accent: "violet",
  },
  {
    number: "04",
    title: "Quadrant RAG",
    description:
      "A focused retrieval layer for custom knowledge bases, designed to make private information more useful.",
    tags: ["FastAPI", "LangChain", "Docker", "Vector DBs"],
    href: "https://github.com/Abhilash-0322/quadrant-rag",
    live: "",
    accent: "gold",
  },
];

const stack = [
  ["Build", "Python · FastAPI · Django · Express"],
  ["Interface", "React · Next.js · TypeScript"],
  ["Data", "PostgreSQL · MongoDB · Redis · Vector DBs"],
  ["Ship", "Docker · AWS · Azure · GitHub Actions"],
];

export default function Home() {
  const [theme, setTheme] = useState<"dusk" | "day">("dusk");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("skyline-theme");
    if (saved === "day" || saved === "dusk") setTheme(saved);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("skyline-theme", theme);
  }, [theme]);

  const copyEmail = async () => {
    await navigator.clipboard?.writeText("abhilash.m.git@gmail.com");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Abhilash Maurya home">
          <span className="wordmark-mark">A<span>.</span></span>
          <span className="wordmark-name">Abhilash Maurya</span>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="header-actions">
          <span className="availability"><i /> Open to work</span>
          <button
            className="theme-toggle"
            type="button"
            aria-label={`Switch to ${theme === "dusk" ? "light" : "dark"} theme`}
            onClick={() => setTheme(theme === "dusk" ? "day" : "dusk")}
          >
            <Icon name={theme === "dusk" ? "sun" : "moon"} size={16} />
            <span>{theme === "dusk" ? "Daylight" : "Dusk"}</span>
          </button>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> Delhi NCR, India · 28.6° N</div>
          <h1>
            Building the
            <em>systems</em>
            <span>behind the signal.</span>
          </h1>
          <p className="hero-intro">
            I&apos;m Abhilash — a backend and AI systems developer making useful
            products feel simple, from first API call to final deployment.
          </p>
          <div className="hero-cta">
            <a className="button button-primary" href="#work">
              Explore selected work <Icon name="arrow" size={16} />
            </a>
            <a className="button button-quiet" href="#contact">Let&apos;s talk <Icon name="arrow" size={16} /></a>
          </div>
          <div className="hero-meta">
            <span><b>Currently</b> AI/ML Coordinator · Innogeeks Club</span>
            <span><b>Previously</b> AI Engineer Intern · Spearmint</span>
          </div>
        </div>

        <div className="hero-scene" aria-label="Abstract skyline illustration">
          <div className="scene-sky-glow" />
          <div className="scene-moon"><span /></div>
          <div className="scene-stars"><i /><i /><i /><i /><i /><i /></div>
          <div className="scene-label scene-label-top">SKYLINE / 01</div>
          <div className="scene-grid" />
          <div className="skyline skyline-back">
            <i /><i /><i /><i /><i /><i /><i /><i />
          </div>
          <div className="skyline skyline-front">
            <i /><i /><i /><i /><i /><i /><i /><i /><i />
          </div>
          <div className="scene-signal"><span /><b>signal / clear</b></div>
          <div className="scene-coordinates">77° 26&apos; E<br />28° 40&apos; N</div>
          <div className="scene-caption">Where ideas<br />become infrastructure.</div>
        </div>
      </section>

      <section className="signal-strip" aria-label="Highlights">
        <div className="signal-item"><strong>5+</strong><span>AI &amp; full-stack<br />MVPs shipped</span></div>
        <div className="signal-item"><strong>01</strong><span>Patent co-inventor<br />IoT + AI telemedicine</span></div>
        <div className="signal-item"><strong>24/7</strong><span>Curious about<br />better systems</span></div>
        <div className="signal-note"><Icon name="spark" size={17} /><span>Systems should<br /><em>earn their complexity.</em></span></div>
      </section>

      <section className="section work-section" id="work">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Selected work <span>/ 2023 — now</span></p>
            <h2>Things I&apos;ve helped<br /><em>bring online.</em></h2>
          </div>
          <p className="section-aside">A few systems, products, and experiments<br />that made it past the whiteboard.</p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className={`project-card project-${project.accent}`} key={project.number}>
              <div className="project-number">{project.number}</div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-list">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
              <div className="project-links">
                {project.live && <a href={project.live} target="_blank" rel="noreferrer">Live site <Icon name="external" size={14} /></a>}
                <a href={project.href} target="_blank" rel="noreferrer">Source <Icon name="github" size={14} /></a>
              </div>
              <a className="project-arrow" href={project.href} target="_blank" rel="noreferrer" aria-label={`View ${project.title}`}>
                <Icon name="arrow" size={19} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="about-visual">
          <div className="about-orbit orbit-one" />
          <div className="about-orbit orbit-two" />
          <div className="about-core">AM<span>.</span></div>
          <div className="about-visual-label">BUILD<br />WITH<br />INTENT</div>
          <span className="about-dot dot-one" /><span className="about-dot dot-two" /><span className="about-dot dot-three" />
        </div>
        <div className="about-copy">
          <p className="section-kicker">A little context <span>/ behind the work</span></p>
          <h2>More curious<br />than <em>clever.</em></h2>
          <p className="about-lede">I like the part where a vague problem gets a clear shape.</p>
          <p>
            I&apos;m a B.Tech IT student at KIET, working across backend engineering,
            cloud infrastructure, and AI agents. I care about systems that hold up
            beyond the demo: understandable APIs, thoughtful data flows, and
            deployments that don&apos;t need a hero on call.
          </p>
          <a className="text-link" href="mailto:abhilash.m.git@gmail.com">More about my approach <Icon name="arrow" size={16} /></a>
          <div className="experience-row">
            <div><span>NOW</span><strong>AI/ML Coordinator</strong><small>Innogeeks Club · KIET</small></div>
            <div><span>2026</span><strong>AI Engineer Intern</strong><small>Spearmint Technologies</small></div>
          </div>
        </div>
      </section>

      <section className="section stack-section">
        <div className="stack-heading">
          <p className="section-kicker">The toolkit <span>/ what I reach for</span></p>
          <h2>Good tools,<br /><em>better judgment.</em></h2>
        </div>
        <div className="stack-grid">
          {stack.map(([label, items], index) => (
            <div className="stack-card" key={label}>
              <span className="stack-index">0{index + 1}</span>
              <span className="stack-label">{label}</span>
              <p>{items}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-topline"><span>Have a problem worth solving?</span><span>Let&apos;s make it legible.</span></div>
        <div className="contact-main">
          <h2>Say <em>hello.</em></h2>
          <div className="contact-detail">
            <p>I&apos;m open to backend, AI systems, and cloud-focused roles — as well as interesting freelance problems.</p>
            <button className="email-copy" type="button" onClick={copyEmail}>
              <span>{copied ? "Copied to clipboard" : "abhilash.m.git@gmail.com"}</span>
              <Icon name={copied ? "spark" : "copy"} size={16} />
            </button>
          </div>
        </div>
        <div className="contact-bottom">
          <a className="button button-light" href="mailto:abhilash.m.git@gmail.com">Start a conversation <Icon name="arrow" size={16} /></a>
          <div className="social-links">
            <a href="https://github.com/Abhilash-0322" target="_blank" rel="noreferrer"><Icon name="github" size={17} /> GitHub</a>
            <a href="https://www.linkedin.com/in/abhilash-maurya-b615b9277/" target="_blank" rel="noreferrer"><Icon name="linkedin" size={17} /> LinkedIn</a>
            <a href="https://x.com/abhilash_glitch" target="_blank" rel="noreferrer">𝕏 <span>Twitter</span></a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <span>© 2026 Abhilash Maurya</span>
        <span className="footer-status"><i /> Available for good work</span>
        <a href="#top">Back to top <Icon name="arrowUp" size={14} /></a>
      </footer>
    </main>
  );
}
