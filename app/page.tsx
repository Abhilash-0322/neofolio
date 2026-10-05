"use client";

import { useEffect, useState, type ReactNode } from "react";

type IconName =
  | "arrow"
  | "sun"
  | "moon"
  | "github"
  | "linkedin"
  | "mail"
  | "external"
  | "spark"
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
        <path d="M20.5 14.3A8.5 8.5 0 0 1 9.7 3.5 8.5 8.5 0 1 0 20.5 14.3Z" />
      </svg>
    );
  }
  if (name === "github") {
    return (
      <svg {...common} fill="currentColor" stroke="none">
        <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.68-3.75-1.32-3.75-1.32-.5-1.3-1.24-1.65-1.24-1.65-1-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.99 1.68 2.6 1.2 3.23.91.1-.71.39-1.2.7-1.48-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.21 1.16-2.99-.12-.29-.5-1.42.11-2.95 0 0 .94-.3 3.08 1.14a10.7 10.7 0 0 1 5.6 0c2.14-1.45 3.08-1.14 3.08-1.14.61 1.53.23 2.66.11 2.95.72.78 1.16 1.77 1.16 2.99 0 4.27-2.6 5.22-5.08 5.5.4.35.75 1.03.75 2.08v3.1c0 .3.2.65.76.54A11.1 11.1 0 0 0 12 .9Z" />
      </svg>
    );
  }
  if (name === "linkedin") {
    return (
      <svg {...common} fill="currentColor" stroke="none">
        <path d="M5.1 7.2A1.6 1.6 0 1 0 5.1 4a1.6 1.6 0 0 0 0 3.2ZM3.7 9h2.8v9.2H3.7V9Zm4.6 0h2.7v1.26h.04c.38-.72 1.31-1.48 2.7-1.48 2.89 0 3.43 1.9 3.43 4.37v5.05h-2.8v-4.48c0-1.07-.02-2.45-1.5-2.45-1.5 0-1.73 1.17-1.73 2.37v4.56H8.3V9Z" />
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
  if (name === "external") {
    return (
      <svg {...common}>
        <path d="M14 5h5v5M19 5l-8 8" />
        <path d="M18 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
      </svg>
    );
  }
  if (name === "spark") {
    return (
      <svg {...common}>
        <path d="m12 2 1.35 6.65L20 10l-6.65 1.35L12 18l-1.35-6.65L4 10l6.65-1.35L12 2Z" />
        <path d="m19 16 .52 2.48L22 19l-2.48.52L19 22l-.52-2.48L16 19l2.48-.52L19 16Z" />
      </svg>
    );
  }
  if (name === "copy") {
    return (
      <svg {...common}>
        <rect x="8" y="8" width="11" height="11" rx="2" />
        <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
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
    name: "TalentInfra",
    type: "AI hiring infrastructure",
    description:
      "A multi-agent, bias-aware hiring workflow that turns messy candidate signals into structured, explainable decisions.",
    stack: ["FastAPI", "Next.js", "PostgreSQL", "Groq", "Azure"],
    href: "https://zynd-hiring-app.azurewebsites.net",
    github: "https://github.com/Abhilash-0322/zynd-aickathon",
    accent: "coral",
  },
  {
    number: "02",
    name: "SolSniff",
    type: "Narrative intelligence",
    description:
      "A Solana idea agent for finding the story behind on-chain momentum, with a focused interface and fast AI summaries.",
    stack: ["Next.js", "Groq", "Prisma", "Vercel"],
    href: "https://solsniffer.vercel.app/",
    github: "https://github.com/Abhilash-0322/sol-sniff",
    accent: "lime",
  },
  {
    number: "03",
    name: "ChainSentinel AI",
    type: "Risk & compliance",
    description:
      "Multi-chain smart contract analysis that gives teams a clearer route from transaction data to risk-aware action.",
    stack: ["FastAPI", "Next.js", "MongoDB"],
    href: "https://github.com/Abhilash-0322/chainsentinel.ai",
    github: "https://github.com/Abhilash-0322/chainsentinel.ai",
    accent: "lavender",
  },
  {
    number: "04",
    name: "Quadrant RAG",
    type: "Knowledge systems",
    description:
      "A practical RAG foundation for custom knowledge bases: ingestion, retrieval, evaluation, and deployment in one place.",
    stack: ["FastAPI", "LangChain", "Vector DB", "Docker"],
    href: "https://github.com/Abhilash-0322/quadrant-rag",
    github: "https://github.com/Abhilash-0322/quadrant-rag",
    accent: "gold",
  },
];

const toolGroups = [
  { label: "Build", items: ["Python", "TypeScript", "FastAPI", "Django", "Next.js"] },
  { label: "Ship", items: ["Docker", "AWS", "Azure", "GitHub Actions", "Linux"] },
  { label: "Think", items: ["RAG", "AI agents", "LangChain", "PostgreSQL", "Redis"] },
];

function ArrowLink({
  href,
  children,
  external = false,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  return (
    <a
      className="arrow-link"
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      {children} <Icon name={external ? "external" : "arrow"} size={15} />
    </a>
  );
}

export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("theme") as "dark" | "light" | null;
    const nextTheme = saved ?? "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("theme", nextTheme);
  }

  async function copyEmail() {
    await navigator.clipboard?.writeText("abhilash.m.git@gmail.com");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <main>
      <div className="noise" />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Abhilash Maurya home">
          <span className="brand-mark">AM</span>
          <span className="brand-name">abhilash<span>.dev</span></span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#work">Selected work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="header-actions">
          <span className="availability"><i /> Open to work</span>
          <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>
            {theme === "dark" ? <Icon name="sun" size={16} /> : <Icon name="moon" size={16} />}
          </button>
        </div>
      </header>

      <section className="hero section-shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> Delhi NCR · India</p>
          <h1>I build the<br /><em>systems</em> behind<br />good ideas.</h1>
          <p className="hero-summary">
            Backend and AI systems developer making ambitious products reliable,
            legible, and ready for the real world.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">See selected work <Icon name="arrow" size={17} /></a>
            <ArrowLink href="mailto:abhilash.m.git@gmail.com">Let&apos;s talk</ArrowLink>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit orbit-three" />
          <div className="hero-sphere"><span>AI</span></div>
          <div className="code-float code-float-top"><span>01</span> agent.run()</div>
          <div className="code-float code-float-bottom">ship <span>→</span> learn</div>
          <div className="hero-art-note">designing for<br /><strong>signal / scale</strong></div>
        </div>
        <div className="hero-foot">
          <span>Scroll to explore</span>
          <span className="scroll-line" />
          <span>01 / 05</span>
        </div>
      </section>

      <section className="statement section-shell">
        <p className="section-kicker">The short version</p>
        <div className="statement-copy">
          <h2>Less demo.<br /><em>More durable.</em></h2>
          <p>
            I care about the unglamorous parts that make technology matter:
            good boundaries, useful APIs, sensible infrastructure, and AI that
            earns its place in a product.
          </p>
        </div>
        <div className="stat-row">
          <div><strong>05+</strong><span>AI & full-stack<br />MVPs led</span></div>
          <div><strong>06+</strong><span>developers<br />mentored</span></div>
          <div><strong>01</strong><span>patent<br />co-invented</span></div>
          <div><strong>∞</strong><span>curiosity<br />in progress</span></div>
        </div>
      </section>

      <section className="work-section section-shell" id="work">
        <div className="section-heading">
          <div>
            <p className="section-kicker">A few things I&apos;ve shipped</p>
            <h2>Selected <em>work</em></h2>
          </div>
          <span className="heading-count">2024—26 / 04 projects</span>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <div className={`project-index index-${project.accent}`}>{project.number}</div>
              <div className="project-main">
                <p className="project-type">{project.type}</p>
                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tag-row">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </div>
              <div className="project-visual" aria-hidden="true">
                <div className={`visual-grid visual-${project.accent}`}>
                  <div className="visual-orb" />
                  <span className="visual-label">{project.number} / LIVE SYSTEM</span>
                  <span className="visual-signal">↗</span>
                </div>
              </div>
              <div className="project-links">
                <ArrowLink href={project.href} external>View project</ArrowLink>
                <a href={project.github} target="_blank" rel="noreferrer" className="icon-link" aria-label={`${project.name} on GitHub`}><Icon name="github" size={17} /></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section section-shell" id="about">
        <div className="about-aside">
          <p className="section-kicker">More than a stack</p>
          <div className="aside-mark"><Icon name="spark" size={25} /></div>
          <p className="aside-note">The good stuff<br />is in the details.</p>
        </div>
        <div className="about-content">
          <h2>Curious by default.<br /><em>Precise by practice.</em></h2>
          <p className="about-lead">
            I&apos;m Abhilash — an IT student at KIET, AI/ML coordinator at Innogeeks,
            and a builder who likes getting close to the infrastructure.
          </p>
          <div className="experience">
            <div className="experience-item">
              <span className="experience-date">AUG 2026 — NOW</span>
              <div><h3>AI Engineer Intern <small>· Spearmint Technologies</small></h3><p>Voice and agent features, TTS pipelines, fine-tuning, and data collection.</p></div>
            </div>
            <div className="experience-item">
              <span className="experience-date">NOV 2023 — NOW</span>
              <div><h3>AI/ML Coordinator <small>· Innogeeks Club, KIET</small></h3><p>Leading teams from first architecture sketch to deployed hackathon MVP.</p></div>
            </div>
          </div>
          <ArrowLink href="https://www.linkedin.com/in/abhilash-maurya-b615b9277/" external>More about my experience</ArrowLink>
        </div>
      </section>

      <section className="toolkit-section section-shell">
        <div className="section-heading">
          <div><p className="section-kicker">The working toolkit</p><h2>Tools for<br /><em>the job.</em></h2></div>
          <p className="heading-note">Always learning. Never<br />collecting for the sake of it.</p>
        </div>
        <div className="tool-groups">
          {toolGroups.map((group) => (
            <div className="tool-group" key={group.label}>
              <span className="tool-label">{group.label}</span>
              <div>{group.items.map((item) => <span className="tool-pill" key={item}>{item}</span>)}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-section section-shell" id="contact">
        <div className="contact-ornament"><span>04</span><div className="contact-ring" /></div>
        <div className="contact-content">
          <p className="section-kicker">Have a problem worth solving?</p>
          <h2>Let&apos;s make<br /><em>something useful.</em></h2>
          <p className="contact-copy">Available for backend, AI systems, and cloud engineering roles — and select freelance projects.</p>
          <div className="contact-actions">
            <a className="button button-primary" href="mailto:abhilash.m.git@gmail.com"><Icon name="mail" size={17} /> Start a conversation</a>
            <button className="copy-button" type="button" onClick={copyEmail}><Icon name="copy" size={16} /> {copied ? "Copied" : "Copy email"}</button>
          </div>
        </div>
      </section>

      <footer className="site-footer section-shell">
        <div className="footer-top">
          <a className="brand" href="#top"><span className="brand-mark">AM</span><span className="brand-name">abhilash<span>.dev</span></span></a>
          <div className="socials">
            <a href="https://github.com/Abhilash-0322" target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github" /></a>
            <a href="https://www.linkedin.com/in/abhilash-maurya-b615b9277/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin" /></a>
            <a href="mailto:abhilash.m.git@gmail.com" aria-label="Email"><Icon name="mail" /></a>
          </div>
        </div>
        <div className="footer-bottom"><span>© 2026 Abhilash Maurya</span><span>Built with intent · Delhi NCR</span><a href="#top">Back to top ↑</a></div>
      </footer>
    </main>
  );
}
