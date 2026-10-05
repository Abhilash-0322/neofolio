"use client";

import { useEffect, useState } from "react";

type IconName =
  | "arrow"
  | "github"
  | "linkedin"
  | "mail"
  | "moon"
  | "sun"
  | "external"
  | "spark"
  | "copy";

function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  const common = {
    fill: "none",
    height: size,
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.8,
    viewBox: "0 0 24 24",
    width: size,
  };

  const paths: Record<IconName, React.ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    github: (
      <path d="M15 22v-4.1c.05-1.25-.5-2.1-1.1-2.6 3.6-.4 7.4-1.75 7.4-7.8a6.1 6.1 0 0 0-1.65-4.25A5.7 5.7 0 0 0 21.5.8S20.15.35 16.95 2.5a13.4 13.4 0 0 0-7.9 0C5.85.35 4.5.8 4.5.8a5.7 5.7 0 0 0-.15 4.45A6.1 6.1 0 0 0 2.7 7.5c0 6.05 3.8 7.4 7.4 7.8-.6.5-1.1 1.45-1.1 2.6V22" />
    ),
    linkedin: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
        <path d="M2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
    mail: (
      <>
        <rect height="16" rx="2" width="20" x="2" y="4" />
        <path d="m22 7-10 6L2 7" />
      </>
    ),
    moon: (
      <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3 6.6 6.6 0 0 0 21 12.8Z" />
    ),
    sun: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
      </>
    ),
    external: (
      <>
        <path d="M14 3h7v7" />
        <path d="M10 14 21 3" />
        <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
      </>
    ),
    spark: (
      <>
        <path d="m12 3-1.4 5.6L5 10l5.6 1.4L12 17l1.4-5.6L19 10l-5.6-1.4L12 3Z" />
        <path d="m19 16-.6 2.4L16 19l2.4.6L19 22l.6-2.4L22 19l-2.4-.6L19 16Z" />
      </>
    ),
    copy: (
      <>
        <rect height="13" rx="2" width="13" x="8" y="8" />
        <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
      </>
    ),
  };

  return <svg aria-hidden="true" {...common}>{paths[name]}</svg>;
}

const projects = [
  {
    number: "01",
    title: "TalentInfra",
    description:
      "A multi-agent hiring platform designed to surface capability without amplifying bias.",
    tags: ["FastAPI", "Next.js", "PostgreSQL", "Azure"],
    href: "https://github.com/Abhilash-0322/zynd-aickathon",
    live: "https://zynd-hiring-app.azurewebsites.net",
    color: "project-lilac",
  },
  {
    number: "02",
    title: "SolSniff",
    description:
      "An idea agent for finding the signal in Solana narratives, built for fast-moving markets.",
    tags: ["Next.js", "Groq", "Prisma", "Vercel"],
    href: "https://github.com/Abhilash-0322/sol-sniff",
    live: "https://solsniffer.vercel.app/",
    color: "project-mint",
  },
  {
    number: "03",
    title: "ChainSentinel AI",
    description:
      "Multi-chain smart contract risk and compliance workflows that make complex systems legible.",
    tags: ["FastAPI", "Next.js", "MongoDB"],
    href: "https://github.com/Abhilash-0322/chainsentinel.ai",
    color: "project-peach",
  },
];

const skills = [
  "Python",
  "FastAPI",
  "Django",
  "TypeScript",
  "Next.js",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Docker",
  "AWS",
  "Azure",
  "LangChain",
  "RAG",
  "AI agents",
  "GitHub Actions",
  "Linux",
];

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = saved ? saved === "dark" : prefersDark;
    setDark(isDark);
    document.documentElement.dataset.theme = isDark ? "dark" : "light";
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? "dark" : "light";
    window.localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle color theme">
      <Icon name={dark ? "sun" : "moon"} size={17} />
    </button>
  );
}

function ProjectCard({
  project,
}: {
  project: (typeof projects)[number];
}) {
  return (
    <article className={`project-card ${project.color}`}>
      <div className="project-visual">
        <span className="project-number">{project.number} / 03</span>
        <div className="project-shape" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <span className="project-type mono">SHIPPED_SYSTEM</span>
      </div>
      <div className="project-body">
        <div className="project-title-row">
          <h3>{project.title}</h3>
          <a href={project.href} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}>
            <Icon name="github" size={18} />
          </a>
        </div>
        <p>{project.description}</p>
        <div className="tag-list">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={project.href} target="_blank" rel="noreferrer">
            Case notes <Icon name="arrow" size={15} />
          </a>
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" className="muted-link">
              Live <Icon name="external" size={13} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main>
      <div className="announcement">
        <div className="container announcement-inner">
          <span className="pulse-dot" />
          <span>OPEN TO WORK</span>
          <span className="announcement-detail">Backend · AI systems · Cloud infrastructure</span>
          <a href="mailto:abhilash.m.git@gmail.com">Let&apos;s talk <Icon name="arrow" size={13} /></a>
        </div>
      </div>

      <header className="site-header">
        <div className="container nav">
          <a className="brand" href="#top" aria-label="Abhilash Maurya home">
            <span className="brand-mark">AM</span>
            <span>Abhilash Maurya</span>
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#toolbox">Toolbox</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="nav-actions">
            <ThemeToggle />
            <a className="nav-cta" href="#contact">
              Start a conversation <Icon name="arrow" size={15} />
            </a>
          </div>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="grid-paper hero-grid" aria-hidden="true" />
        <div className="container hero-inner">
          <div className="hero-copy">
            <div className="eyebrow fade-up">Backend + AI systems developer</div>
            <h1 className="display-font fade-up delay-1">
              Systems that stay useful <em>after</em> the demo.
            </h1>
            <p className="hero-description fade-up delay-2">
              I&apos;m Abhilash—a developer who turns fuzzy problems into dependable
              APIs, intelligent workflows, and infrastructure people can build on.
            </p>
            <div className="hero-actions fade-up delay-3">
              <a href="#work" className="button button-primary">
                Explore selected work <Icon name="arrow" size={16} />
              </a>
              <a href="mailto:abhilash.m.git@gmail.com" className="text-link">
                <Icon name="mail" size={16} /> Get in touch
              </a>
            </div>
            <div className="hero-meta fade-up delay-3">
              <span>Based in Delhi NCR, India</span>
              <span className="meta-line" />
              <span className="mono">IST / UTC+5:30</span>
            </div>
          </div>

          <div className="hero-console fade-up delay-2">
            <div className="console-top">
              <div className="console-dots"><i /><i /><i /></div>
              <span className="mono">abhilash@localhost:~</span>
              <span className="console-status">● online</span>
            </div>
            <div className="console-body mono">
              <p><b className="syntax-purple">const</b> developer = {"{"}</p>
              <p className="indent"><span className="syntax-blue">name</span>: <span className="syntax-green">&quot;Abhilash Maurya&quot;</span>,</p>
              <p className="indent"><span className="syntax-blue">focus</span>: [</p>
              <p className="indent-2"><span className="syntax-green">&quot;backend&quot;</span>, <span className="syntax-green">&quot;agents&quot;</span>,</p>
              <p className="indent-2"><span className="syntax-green">&quot;cloud infrastructure&quot;</span></p>
              <p className="indent">],</p>
              <p className="indent"><span className="syntax-blue">ships</span>: <span className="syntax-orange">true</span>,</p>
              <p className="indent"><span className="syntax-blue">available</span>: <span className="syntax-orange">true</span>,</p>
              <p><b className="syntax-purple">{"}"}</b></p>
              <p className="console-prompt"><span>→</span> build something useful_</p>
            </div>
            <div className="console-footer">
              <span><Icon name="spark" size={15} /> accepting interesting problems</span>
              <span className="mono">v.2026</span>
            </div>
          </div>
        </div>
        <div className="scroll-cue mono">SCROLL TO EXPLORE <Icon name="arrow" size={14} /></div>
      </section>

      <section className="proof-strip">
        <div className="container proof-grid">
          <div><strong>5+</strong><span>AI &amp; full-stack<br />MVPs led</span></div>
          <div><strong>6+</strong><span>Developers<br />mentored</span></div>
          <div><strong>01</strong><span>Published<br />IoT-AI patent</span></div>
          <div><strong>∞</strong><span>Curiosity for<br />hard problems</span></div>
        </div>
      </section>

      <section className="section work-section" id="work">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">Selected work</div>
              <h2 className="display-font section-title">Things I&apos;ve<br /><em>made real.</em></h2>
            </div>
            <p className="section-copy">A few systems from the intersection of backend engineering, AI, and products with a point of view.</p>
          </div>
          <div className="projects-grid">
            {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
          </div>
          <div className="all-work">
            <a href="https://github.com/Abhilash-0322" target="_blank" rel="noreferrer" className="button button-outline">
              Browse all on GitHub <Icon name="external" size={15} />
            </a>
          </div>
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="container about-grid">
          <div className="about-aside">
            <div className="eyebrow">A little context</div>
            <div className="about-stamp">
              <span>BUILD</span>
              <span>WITH</span>
              <span>INTENT</span>
            </div>
          </div>
          <div className="about-content">
            <h2 className="display-font">Good engineering is a form of <em>care.</em></h2>
            <p className="large-copy">The best systems feel obvious to the people using them. I care about the less-visible work that gets you there: clean boundaries, thoughtful APIs, useful observability, and the discipline to keep complexity in its place.</p>
            <p>Currently studying Information Technology at KIET and coordinating AI/ML projects at Innogeeks Club. I&apos;ve shipped hackathon winners, led small teams, and learned that the fastest way to make something better is to make it real early.</p>
            <div className="about-links">
              <a href="https://www.linkedin.com/in/abhilash-maurya-b615b9277/" target="_blank" rel="noreferrer">More on LinkedIn <Icon name="external" size={14} /></a>
              <a href="mailto:abhilash.m.git@gmail.com">Email me <Icon name="arrow" size={14} /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="section toolbox-section" id="toolbox">
        <div className="container">
          <div className="section-heading compact-heading">
            <div>
              <div className="eyebrow">The toolbox</div>
              <h2 className="display-font section-title">Practical by<br /><em>default.</em></h2>
            </div>
            <p className="section-copy">Tools are only useful when they help you move with confidence. These are the ones I reach for most.</p>
          </div>
          <div className="skills-list">
            {skills.map((skill, index) => <span key={skill} className={index % 5 === 0 ? "skill-highlight" : ""}>{skill}</span>)}
          </div>
          <div className="experience-row">
            <div className="experience-line" />
            <div className="experience-item">
              <span className="mono experience-date">AUG 2026 — NOW</span>
              <div><h3>AI Engineer Intern</h3><p>Spearmint Technologies · Remote</p></div>
            </div>
            <div className="experience-item">
              <span className="mono experience-date">NOV 2023 — NOW</span>
              <div><h3>AI/ML Coordinator</h3><p>Innogeeks Club · KIET</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="grid-paper contact-grid" aria-hidden="true" />
        <div className="container contact-inner">
          <div className="eyebrow">Have a problem worth solving?</div>
          <h2 className="display-font">Let&apos;s make it<br /><em>useful.</em></h2>
          <p>I&apos;m open to backend, AI systems, and cloud infrastructure roles—as well as thoughtful freelance work.</p>
          <a href="mailto:abhilash.m.git@gmail.com" className="contact-email">abhilash.m.git@gmail.com <Icon name="arrow" size={20} /></a>
          <div className="social-links">
            <a href="https://github.com/Abhilash-0322" target="_blank" rel="noreferrer"><Icon name="github" size={17} /> GitHub</a>
            <a href="https://www.linkedin.com/in/abhilash-maurya-b615b9277/" target="_blank" rel="noreferrer"><Icon name="linkedin" size={17} /> LinkedIn</a>
            <a href="https://x.com/abhilash_glitch" target="_blank" rel="noreferrer">𝕏 X / Twitter</a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Abhilash Maurya</span>
          <span className="footer-note"><span className="pulse-dot" /> Made with intent in Delhi NCR</span>
          <a href="#top" className="back-top">Back to top <Icon name="arrow" size={14} /></a>
        </div>
      </footer>
    </main>
  );
}
