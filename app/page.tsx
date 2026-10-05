"use client";

import { useEffect, useState } from "react";

type IconName =
  | "arrow"
  | "arrowUp"
  | "briefcase"
  | "check"
  | "code"
  | "github"
  | "globe"
  | "heart"
  | "layers"
  | "linkedin"
  | "mail"
  | "menu"
  | "moon"
  | "sun"
  | "terminal"
  | "x"
  | "zap";

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

  switch (name) {
    case "arrow":
      return <svg {...common}><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></svg>;
    case "arrowUp":
      return <svg {...common}><path d="M12 19V5" /><path d="m6 11 6-6 6 6" /></svg>;
    case "briefcase":
      return <svg {...common}><rect x="3" y="6" width="18" height="13" rx="2" /><path d="M8 6V4h8v2M3 11h18M10 11v2h4v-2" /></svg>;
    case "check":
      return <svg {...common}><path d="m5 12 4 4L19 6" /></svg>;
    case "code":
      return <svg {...common}><path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14" /></svg>;
    case "github":
      return <svg {...common}><path d="M15 22v-4.1c.1-1.1-.4-2.2-1-2.9 3.3-.4 6.8-1.6 6.8-7.2 0-1.6-.6-2.9-1.6-3.9.2-.4.7-1.9-.2-3.8 0 0-1.3-.4-4.1 1.5a14 14 0 0 0-7.5 0C4.6-.3 3.3.1 3.3.1c-.9 1.9-.4 3.4-.2 3.8-1 1-1.6 2.3-1.6 3.9 0 5.6 3.5 6.8 6.8 7.2-.6.6-1 1.5-1 2.9V22M7.3 18c-3.1 1.5-3.1-1.4-4.4-1.7" /></svg>;
    case "globe":
      return <svg {...common}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></svg>;
    case "heart":
      return <svg {...common}><path d="M20.8 8.7c0 5.4-8.8 10.3-8.8 10.3S3.2 14.1 3.2 8.7A4.7 4.7 0 0 1 12 6a4.7 4.7 0 0 1 8.8 2.7Z" /></svg>;
    case "layers":
      return <svg {...common}><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5M3 16l9 5 9-5" /></svg>;
    case "linkedin":
      return <svg {...common}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" /></svg>;
    case "mail":
      return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>;
    case "menu":
      return <svg {...common}><path d="M4 7h16M4 12h16M4 17h16" /></svg>;
    case "moon":
      return <svg {...common}><path d="M20.5 15.2A8.5 8.5 0 0 1 8.8 3.5 8.5 8.5 0 1 0 20.5 15.2Z" /></svg>;
    case "sun":
      return <svg {...common}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>;
    case "terminal":
      return <svg {...common}><path d="m4 5 6 7-6 7M12 19h8" /></svg>;
    case "x":
      return <svg {...common}><path d="M18 3 6 21M6 3l12 18" /></svg>;
    case "zap":
      return <svg {...common}><path d="m13 2-9 12h7l-1 8 9-12h-7l1-8Z" /></svg>;
  }
}

const projects = [
  {
    number: "01",
    title: "TalentInfra",
    description: "A multi-agent hiring platform designed to surface talent without the usual bias.",
    tags: ["FastAPI", "Next.js", "Postgres", "Azure"],
    accent: "violet",
    href: "https://github.com/Abhilash-0322/zynd-aickathon",
    live: "https://zynd-hiring-app.azurewebsites.net",
  },
  {
    number: "02",
    title: "SolSniff",
    description: "A Solana narrative agent that turns noisy market signals into useful ideas.",
    tags: ["Next.js", "Groq", "Prisma", "Vercel"],
    accent: "cyan",
    href: "https://github.com/Abhilash-0322/sol-sniff",
    live: "https://solsniffer.vercel.app/",
  },
  {
    number: "03",
    title: "ChainSentinel AI",
    description: "Multi-chain smart contract risk and compliance analysis for faster decisions.",
    tags: ["FastAPI", "Next.js", "MongoDB"],
    accent: "orange",
    href: "https://github.com/Abhilash-0322/chainsentinel.ai",
  },
  {
    number: "04",
    title: "Quadrant RAG",
    description: "A production-minded RAG foundation for private knowledge bases and teams.",
    tags: ["LangChain", "Vector DB", "Docker"],
    accent: "green",
    href: "https://github.com/Abhilash-0322/quadrant-rag",
  },
];

const tools = ["Python", "FastAPI", "Next.js", "PostgreSQL", "Docker", "AWS", "LangChain", "TypeScript"];

export default function Home() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const isDark = savedTheme ? savedTheme === "dark" : true;
    setDark(isDark);
    document.documentElement.dataset.theme = isDark ? "dark" : "light";
  }, []);

  function toggleTheme() {
    const nextTheme = dark ? "light" : "dark";
    setDark(!dark);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("theme", nextTheme);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <main className="relative">
      <nav className="nav shell">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Abhilash Maurya home">
          <span className="brand-mark">AM</span>
          <span>abhilash<span className="brand-dot">.</span></span>
        </a>
        <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </div>
        <div className="nav-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${dark ? "light" : "dark"} theme`}>
            <Icon name={dark ? "sun" : "moon"} size={17} />
          </button>
          <a className="nav-cta" href="mailto:abhilash.m.git@gmail.com">Let&apos;s talk <Icon name="arrow" size={15} /></a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
            <Icon name="menu" size={20} />
          </button>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> OPEN TO WORK <span className="eyebrow-separator">/</span> 2026</div>
          <h1>Building systems<br />that <span className="gradient-text">think forward.</span></h1>
          <p className="hero-lede">
            I&apos;m Abhilash — a backend and AI systems developer turning complex ideas into reliable, scalable products.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore my work <Icon name="arrow" size={17} /></a>
            <a className="button button-ghost" href="mailto:abhilash.m.git@gmail.com"><Icon name="mail" size={17} /> Get in touch</a>
          </div>
          <div className="hero-proof">
            <div className="avatar-stack" aria-hidden="true">
              <span>AM</span>
              <span className="proof-symbol"><Icon name="zap" size={13} /></span>
            </div>
            <p>Shipping from <strong>Delhi NCR, India</strong><br /><span>Currently building the next useful thing.</span></p>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="orb orb-one" />
          <div className="orb orb-two" />
          <div className="grid-lines" />
          <div className="code-card">
            <div className="code-bar"><span /><span /><span /><small>agent.py</small></div>
            <div className="code-content">
              <p><i>01</i><b>class</b> <em>ReliableSystem</em>:</p>
              <p><i>02</i>&nbsp;&nbsp;<b>def</b> <em>ship</em>(self):</p>
              <p><i>03</i>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-key">return</span> <span className="code-string">&quot;impact&quot;</span></p>
              <p><i>04</i></p>
              <p><i>05</i><span className="code-comment"># make it useful.</span></p>
            </div>
            <div className="code-cursor" />
          </div>
          <div className="floating-chip chip-one"><span className="chip-icon"><Icon name="layers" size={15} /></span> AI systems</div>
          <div className="floating-chip chip-two"><span className="chip-icon"><Icon name="globe" size={15} /></span> Cloud native</div>
          <div className="hero-cross cross-one">+</div>
          <div className="hero-cross cross-two">+</div>
        </div>
      </section>

      <div className="ticker-wrap">
        <div className="ticker">
          {[...tools, ...tools].map((tool, index) => (
            <span key={`${tool}-${index}`}><b>✳</b>{tool}</span>
          ))}
        </div>
      </div>

      <section className="section shell about-section" id="about">
        <div className="section-label"><span>01</span> / ABOUT</div>
        <div className="about-grid">
          <h2>More than code.<br /><span>Systems with intent.</span></h2>
          <div className="about-copy">
            <p>I care about the space where thoughtful engineering meets real-world momentum. From a first API call to a system serving its first thousand users, I build with clarity, curiosity, and a bias toward shipping.</p>
            <p>Currently studying Information Technology at KIET and leading AI/ML initiatives at Innogeeks Club. I&apos;m happiest deep in a backend, sketching architecture, or helping a team make its ambitious idea real.</p>
            <a className="text-link" href="https://github.com/Abhilash-0322" target="_blank" rel="noreferrer">More about my journey <Icon name="arrow" size={16} /></a>
          </div>
        </div>
        <div className="stat-grid">
          <div className="stat"><strong>5<span>+</span></strong><small>AI & full-stack<br />MVPs shipped</small></div>
          <div className="stat"><strong>6<span>+</span></strong><small>Developers<br />mentored</small></div>
          <div className="stat"><strong>2027</strong><small>B.Tech IT<br />graduation</small></div>
          <div className="stat stat-highlight"><strong>∞</strong><small>Curiosity<br />in production</small></div>
        </div>
      </section>

      <section className="section shell work-section" id="work">
        <div className="section-heading">
          <div className="section-label"><span>02</span> / SELECTED WORK</div>
          <a className="text-link desktop-link" href="https://github.com/Abhilash-0322" target="_blank" rel="noreferrer">View all on GitHub <Icon name="arrow" size={16} /></a>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className={`project-card ${project.accent}`} key={project.title}>
              <div className="project-top"><span className="project-number">{project.number}</span><span className="project-status"><span /> shipped</span></div>
              <div className="project-visual">
                <div className="visual-rings"><span /><span /><span /></div>
                <div className="visual-core"><Icon name={project.accent === "orange" ? "briefcase" : project.accent === "green" ? "layers" : "zap"} size={22} /></div>
                <div className="visual-spark spark-a" /><div className="visual-spark spark-b" />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <div className="project-links">
                  <a href={project.href} target="_blank" rel="noreferrer">Case study <Icon name="arrow" size={14} /></a>
                  {project.live && <a href={project.live} target="_blank" rel="noreferrer" aria-label={`${project.title} live site`}><Icon name="globe" size={14} /> Live</a>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell experience-section" id="experience">
        <div className="section-label"><span>03</span> / EXPERIENCE</div>
        <div className="experience-list">
          <div className="experience-row">
            <div className="experience-date">AUG 2026 <span>— PRESENT</span></div>
            <div className="experience-main"><h3>AI Engineer Intern <span>@ Spearmint Technologies</span></h3><p>Building voice and agent features — from TTS pipelines and fine-tuning to data collection and Hermes-based agents.</p><div className="mini-tags"><span>AI agents</span><span>Fine-tuning</span><span>TTS</span></div></div>
            <div className="experience-arrow"><Icon name="arrowUp" size={18} /></div>
          </div>
          <div className="experience-row">
            <div className="experience-date">NOV 2023 <span>— PRESENT</span></div>
            <div className="experience-main"><h3>AI/ML Coordinator <span>@ Innogeeks Club, KIET</span></h3><p>Leading the technical direction for AI and full-stack MVPs while mentoring developers and coordinating fast-moving hackathon teams.</p><div className="mini-tags"><span>Leadership</span><span>Architecture</span><span>Mentorship</span></div></div>
            <div className="experience-arrow"><Icon name="arrowUp" size={18} /></div>
          </div>
        </div>
      </section>

      <section className="section shell recognition-section">
        <div className="recognition-card">
          <div className="recognition-mark"><Icon name="zap" size={25} /></div>
          <div><div className="section-label">A FEW SIGNALS</div><h2>Built, recognized,<br /><span>still learning.</span></h2></div>
          <div className="recognition-list">
            <div><span>01</span><p>MLH Solana track winning team<br /><small>Brainwave Hackathon · AIMS DTU</small></p></div>
            <div><span>02</span><p>Co-inventor on an IoT-AI telemedicine patent<br /><small>India 202511018153A · Published Apr 2025</small></p></div>
            <div><span>03</span><p>AWS Certified Cloud Practitioner<br /><small>Plus Google AI Essentials</small></p></div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="shell contact-inner">
          <div className="contact-orbit orbit-left" aria-hidden="true" /><div className="contact-orbit orbit-right" aria-hidden="true" />
          <div className="section-label"><span>04</span> / HAVE A PROJECT IN MIND?</div>
          <h2>Let&apos;s make something<br /><span>meaningful.</span></h2>
          <p>Whether you&apos;re solving a hard systems problem or starting from a blank canvas, I&apos;d love to hear about it.</p>
          <a className="button button-primary" href="mailto:abhilash.m.git@gmail.com">Start a conversation <Icon name="arrow" size={17} /></a>
        </div>
      </section>

      <footer className="footer shell">
        <div className="footer-top">
          <a className="brand" href="#top"><span className="brand-mark">AM</span><span>abhilash<span className="brand-dot">.</span></span></a>
          <div className="social-links">
            <a href="https://github.com/Abhilash-0322" target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github" size={17} /></a>
            <a href="https://www.linkedin.com/in/abhilash-maurya-b615b9277/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin" size={17} /></a>
            <a href="https://x.com/abhilash_glitch" target="_blank" rel="noreferrer" aria-label="X"><Icon name="x" size={16} /></a>
            <a href="mailto:abhilash.m.git@gmail.com" aria-label="Email"><Icon name="mail" size={17} /></a>
          </div>
        </div>
        <div className="footer-bottom"><span>© 2026 Abhilash Maurya</span><span>Designed & built with intent <Icon name="heart" size={13} /></span><a href="#top">Back to top <Icon name="arrowUp" size={13} /></a></div>
      </footer>
    </main>
  );
}
