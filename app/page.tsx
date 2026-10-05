"use client";

import { useEffect, useState, type SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function ArrowUpRight({ className = "" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3.5 12.5 12.5 3.5M5 3.5h7.5V11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Github({ className = "" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .7a11.3 11.3 0 0 0-3.58 22.02c.57.1.78-.25.78-.55v-2.17c-3.18.7-3.85-1.35-3.85-1.35-.52-1.32-1.27-1.67-1.27-1.67-1.04-.7.08-.69.08-.69 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.73-1.53-2.54-.29-5.2-1.27-5.2-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.12 1.17a10.9 10.9 0 0 1 5.68 0c2.16-1.48 3.12-1.17 3.12-1.17.62 1.57.23 2.73.11 3.02.73.8 1.18 1.82 1.18 3.07 0 4.4-2.67 5.37-5.21 5.65.41.36.78 1.06.78 2.14v3.17c0 .3.21.65.79.54A11.3 11.3 0 0 0 12 .7Z" />
    </svg>
  );
}

function Linkedin({ className = "" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M5.2 3.2a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM3.3 9h3.8v11.7H3.3V9Zm6.2 0h3.6v1.6h.05c.5-.95 1.72-1.95 3.55-1.95 3.8 0 4.5 2.5 4.5 5.75v6.3h-3.75v-5.58c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.68H9.5V9Z" />
    </svg>
  );
}

function Mail({ className = "" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="2.25" y="3.5" width="15.5" height="13" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="m3 5 7 5.25L17 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Sun({ className = "" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="3.1" stroke="currentColor" strokeWidth="1.4" />
      <path d="M10 1.75v2M10 16.25v2M18.25 10h-2M3.75 10h-2M15.83 4.17l-1.42 1.42M5.59 14.41l-1.42 1.42M15.83 15.83l-1.42-1.42M5.59 5.59 4.17 4.17" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function Moon({ className = "" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M16.9 12.72A7.55 7.55 0 0 1 7.28 3.1 7.56 7.56 0 1 0 16.9 12.72Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Menu({ className = "" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M3 5.5h14M3 10h14M3 14.5h14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function Close({ className = "" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="m4 4 12 12M16 4 4 16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

const projects = [
  {
    number: "01",
    title: "TalentInfra",
    description:
      "A multi-agent hiring workspace that makes candidate evaluation more transparent and bias-aware.",
    tags: ["FastAPI", "Next.js", "PostgreSQL", "Azure"],
    href: "https://zynd-hiring-app.azurewebsites.net",
    github: "https://github.com/Abhilash-0322/zynd-aickathon",
    featured: true,
  },
  {
    number: "02",
    title: "SolSniff",
    description:
      "An AI agent for finding the signal in Solana narratives, ideas, and fast-moving ecosystem noise.",
    tags: ["Next.js", "Groq", "Prisma", "Vercel"],
    href: "https://solsniffer.vercel.app/",
    github: "https://github.com/Abhilash-0322/sol-sniff",
  },
  {
    number: "03",
    title: "ChainSentinel AI",
    description:
      "Multi-chain smart contract risk and compliance analysis for teams that need to move with confidence.",
    tags: ["FastAPI", "Next.js", "MongoDB"],
    href: "https://github.com/Abhilash-0322/chainsentinel.ai",
    github: "https://github.com/Abhilash-0322/chainsentinel.ai",
  },
  {
    number: "04",
    title: "Quadrant RAG",
    description:
      "A focused retrieval system for turning custom knowledge bases into useful, grounded answers.",
    tags: ["FastAPI", "LangChain", "Vector DB", "Docker"],
    href: "https://github.com/Abhilash-0322/quadrant-rag",
    github: "https://github.com/Abhilash-0322/quadrant-rag",
  },
];

const skills = [
  { label: "Backend", value: "FastAPI · Django · Express.js" },
  { label: "AI systems", value: "RAG · Agents · LangChain" },
  { label: "Data", value: "PostgreSQL · MongoDB · Redis" },
  { label: "Cloud & DevOps", value: "AWS · Azure · Docker · CI/CD" },
];

export default function Home() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDark = storedTheme ? storedTheme === "dark" : prefersDark;
    setDark(shouldUseDark);
    document.documentElement.classList.toggle("dark", shouldUseDark);
  }, []);

  function toggleTheme() {
    const nextTheme = !dark;
    setDark(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme);
    window.localStorage.setItem("theme", nextTheme ? "dark" : "light");
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <main>
      <nav className="site-nav">
        <a className="brand" href="#top" aria-label="Abhilash Maurya home">
          <span className="brand-mark">AM</span>
          <span className="brand-name">Abhilash Maurya</span>
        </a>

        <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </div>

        <div className="nav-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${dark ? "light" : "dark"} mode`}>
            {dark ? <Sun /> : <Moon />}
          </button>
          <a className="nav-cta" href="mailto:abhilash.m.git@gmail.com">
            Let&apos;s talk <ArrowUpRight />
          </a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
            {menuOpen ? <Close /> : <Menu />}
          </button>
        </div>
      </nav>

      <section className="hero page-shell" id="top">
        <div className="hero-copy">
          <div className="status-pill"><span className="status-dot" /> Open to work <span className="status-separator" /> 2026</div>
          <p className="eyebrow">Backend developer <span>/</span> AI systems <span>/</span> cloud</p>
          <h1>I build the systems <em>behind</em> useful ideas.</h1>
          <p className="hero-intro">
            I&apos;m Abhilash — a backend and AI systems developer focused on shipping reliable APIs, thoughtful agent workflows, and cloud infrastructure that holds up beyond the demo.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">See selected work <ArrowUpRight /></a>
            <a className="text-link" href="mailto:abhilash.m.git@gmail.com">Start a conversation <span>↗</span></a>
          </div>
        </div>
        <div className="hero-aside">
          <div className="portrait-card">
            <div className="portrait-grid" />
            <div className="monogram">AM<span>.</span></div>
            <div className="portrait-caption">
              <span>Based in</span>
              <strong>Delhi NCR, India</strong>
            </div>
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
          </div>
          <div className="hero-aside-note"><span>01</span><p>Curious by default.<br />Precise by practice.</p></div>
        </div>
        <a className="scroll-cue" href="#work"><span>Scroll to explore</span><i /></a>
      </section>

      <div className="marquee-band" aria-label="Areas of focus">
        <div className="marquee-track">
          <span>APIs that scale</span><b>✦</b><span>AI that works</span><b>✦</b><span>Cloud with intent</span><b>✦</b><span>APIs that scale</span><b>✦</b><span>AI that works</span><b>✦</b><span>Cloud with intent</span><b>✦</b>
        </div>
      </div>

      <section className="section page-shell work-section" id="work">
        <div className="section-heading">
          <div><p className="eyebrow">Selected work</p><h2>Things I&apos;ve shipped.</h2></div>
          <p className="section-summary">A few systems, products, and experiments where infrastructure meets imagination.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className={`project-card ${project.featured ? "featured" : ""}`} key={project.number}>
              <div className="project-topline"><span>{project.number}</span><span className="project-type">{project.featured ? "Featured build" : "Selected project"}</span></div>
              <div className="project-content">
                <div><h3>{project.title}</h3><p>{project.description}</p></div>
                <a className="round-arrow" href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}><ArrowUpRight /></a>
              </div>
              <div className="project-footer">
                <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <a className="github-link" href={project.github} target="_blank" rel="noreferrer"><Github /> Source</a>
              </div>
            </article>
          ))}
        </div>
        <div className="all-projects"><a className="text-link" href="https://github.com/Abhilash-0322" target="_blank" rel="noreferrer">Explore all on GitHub <ArrowUpRight /></a></div>
      </section>

      <section className="about-section" id="about">
        <div className="page-shell about-layout">
          <div className="about-statement"><p className="eyebrow">A little context</p><h2>Good engineering should feel <em>quiet.</em></h2></div>
          <div className="about-copy">
            <p className="large-copy">The best systems disappear into the experience. I care about the details that make that possible: a clean API, a grounded answer, a deployment that doesn&apos;t wake anyone up.</p>
            <p>As an AI/ML Coordinator at KIET&apos;s Innogeeks Club, I&apos;ve led teams through 5+ MVPs — from architecture and database modeling to the last deployment. I&apos;m happiest where product thinking, systems design, and a little healthy curiosity overlap.</p>
            <a className="text-link" href="mailto:abhilash.m.git@gmail.com">More about my approach <ArrowUpRight /></a>
          </div>
        </div>
      </section>

      <section className="section page-shell experience-section" id="experience">
        <div className="section-heading compact-heading"><div><p className="eyebrow">Experience & toolkit</p><h2>Built in the real world.</h2></div></div>
        <div className="experience-grid">
          <div className="timeline">
            <div className="timeline-item"><span className="timeline-date">Aug 2026</span><div><h3>AI Engineer Intern</h3><p className="timeline-company">Spearmint Technologies <span>· Part-time, remote</span></p><p>Voice and agent features across TTS pipelines, fine-tuning, data collection, and Hermes-based workflows.</p></div></div>
            <div className="timeline-item"><span className="timeline-date">Nov 2023 — now</span><div><h3>AI/ML Coordinator</h3><p className="timeline-company">Innogeeks Club, KIET <span>· Leadership</span></p><p>Leading cross-functional teams, mentoring developers, and turning hackathon ideas into working products.</p></div></div>
            <div className="timeline-item"><span className="timeline-date">Expected 2027</span><div><h3>B.Tech, Information Technology</h3><p className="timeline-company">KIET Group of Institutions <span>· AKTU</span></p><p>Building a strong foundation in systems, software, and the questions in between.</p></div></div>
          </div>
          <div className="skills-panel">
            <p className="panel-label">What I work with</p>
            {skills.map((skill) => <div className="skill-row" key={skill.label}><span>{skill.label}</span><strong>{skill.value}</strong></div>)}
            <div className="recognition"><span className="recognition-star">✦</span><div><p>Also recognized for</p><strong>AWS Certified Cloud Practitioner · Google AI Essentials · Co-inventor, IoT-AI telemedicine patent</strong></div></div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="page-shell contact-inner">
          <p className="eyebrow">Have a problem worth solving?</p>
          <h2>Let&apos;s make something <em>useful.</em></h2>
          <p>Whether it&apos;s a new product, a complex backend, or an AI idea ready to become real — I&apos;d like to hear about it.</p>
          <a className="contact-email" href="mailto:abhilash.m.git@gmail.com">abhilash.m.git@gmail.com <ArrowUpRight /></a>
        </div>
      </section>

      <footer className="footer page-shell">
        <span>© 2026 Abhilash Maurya</span>
        <div className="footer-links"><a href="https://github.com/Abhilash-0322" target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a><a href="https://www.linkedin.com/in/abhilash-maurya-b615b9277/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a><a href="mailto:abhilash.m.git@gmail.com" aria-label="Email"><Mail /></a></div>
        <span className="footer-note">Designed with intent <i>✦</i></span>
      </footer>
    </main>
  );
}
