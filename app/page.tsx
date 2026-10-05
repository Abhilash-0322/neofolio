"use client";

import { useEffect, useState } from "react";

const projects = [
  {
    index: "01",
    name: "TalentInfra",
    type: "AI hiring infrastructure",
    description:
      "A multi-agent hiring workspace designed to make screening more explainable, balanced, and useful for teams.",
    stack: ["FastAPI", "Next.js", "PostgreSQL", "Azure"],
    accent: "coral",
    href: "https://zynd-hiring-app.azurewebsites.net",
    source: "https://github.com/Abhilash-0322/zynd-aickathon",
  },
  {
    index: "02",
    name: "SolSniff",
    type: "Market narrative agent",
    description:
      "A focused AI tool that turns noisy Solana signals into clearer narratives and ideas for curious builders.",
    stack: ["Next.js", "Groq", "Prisma", "Vercel"],
    accent: "violet",
    href: "https://solsniffer.vercel.app/",
    source: "https://github.com/Abhilash-0322/sol-sniff",
  },
  {
    index: "03",
    name: "ChainSentinel AI",
    type: "Smart contract intelligence",
    description:
      "Multi-chain risk and compliance workflows that help teams inspect contracts before they become incidents.",
    stack: ["FastAPI", "Next.js", "MongoDB"],
    accent: "blue",
    href: "https://github.com/Abhilash-0322/chainsentinel.ai",
    source: "https://github.com/Abhilash-0322/chainsentinel.ai",
  },
];

const skills = [
  "Python",
  "FastAPI",
  "Next.js",
  "PostgreSQL",
  "Docker",
  "AWS",
  "Azure",
  "LangChain",
  "RAG",
  "AI agents",
  "GitHub Actions",
];

function ArrowUpRight() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const isDark = savedTheme ? savedTheme === "dark" : true;
    setDark(isDark);
    document.documentElement.classList.toggle("light", !isDark);
  }, []);

  function toggleTheme() {
    const nextDark = !dark;
    setDark(nextDark);
    document.documentElement.classList.toggle("light", !nextDark);
    window.localStorage.setItem("theme", nextDark ? "dark" : "light");
  }

  async function copyEmail() {
    await navigator.clipboard.writeText("abhilash.m.git@gmail.com");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <main>
      <nav className="site-nav shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Abhilash Maurya home">
          <span className="brand-mark">A<span>/</span>M</span>
          <span className="brand-name">Abhilash Maurya</span>
        </a>
        <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
        <div className="nav-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${dark ? "light" : "dark"} theme`}>
            <span className="theme-icon">{dark ? "☼" : "☾"}</span>
            <span className="theme-label">{dark ? "Light" : "Dark"}</span>
          </button>
          <a className="nav-cta" href="#contact">Let&apos;s talk <ArrowUpRight /></a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>
            <span />
            <span />
          </button>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> Open to work <span className="eyebrow-rule" /> Delhi NCR · India</div>
          <h1>Building systems<br /><em>that move ideas.</em></h1>
          <p className="hero-intro">
            I&apos;m Abhilash — a backend and AI systems developer turning ambitious
            products into dependable, shipped software.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">See selected work <ArrowUpRight /></a>
            <a className="button button-quiet" href="mailto:abhilash.m.git@gmail.com">Get in touch <ArrowUpRight /></a>
          </div>
        </div>
        <div className="hero-aside" aria-label="Introduction">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="hero-monogram">AM<span>.</span></div>
          <p className="aside-note">Backend / AI / Cloud<br /><span>Selected builds, 2023—26</span></p>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          <span>Backend systems</span><b>✳</b><span>AI products</span><b>✳</b><span>Cloud infrastructure</span><b>✳</b><span>Product-minded engineering</span><b>✳</b>
          <span>Backend systems</span><b>✳</b><span>AI products</span><b>✳</b><span>Cloud infrastructure</span><b>✳</b><span>Product-minded engineering</span><b>✳</b>
        </div>
      </div>

      <section className="work-section shell section-pad" id="work">
        <div className="section-heading">
          <div>
            <p className="section-kicker">01 / Selected work</p>
            <h2>Useful software,<br /><span>thoughtfully shipped.</span></h2>
          </div>
          <p className="section-summary">A small collection of products where infrastructure, intelligence, and a clear user outcome meet.</p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className={`project-card ${project.accent}`} key={project.name}>
              <div className="project-number">{project.index}</div>
              <div className="project-content">
                <p className="project-type">{project.type}</p>
                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <div className="stack-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
              </div>
              <div className="project-links">
                <a href={project.href} target="_blank" rel="noreferrer" aria-label={`View ${project.name}`}>View project <ArrowUpRight /></a>
                <a className="source-link" href={project.source} target="_blank" rel="noreferrer" aria-label={`${project.name} source code`}>Source <ArrowUpRight /></a>
              </div>
              <div className="project-art" aria-hidden="true"><span>{project.index}</span></div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section shell section-pad" id="about">
        <div className="section-heading about-heading">
          <div>
            <p className="section-kicker">02 / The person behind it</p>
            <h2>Curious by default.<br /><span>Serious about craft.</span></h2>
          </div>
        </div>
        <div className="about-grid">
          <div className="about-copy">
            <p className="large-copy">I like the part where a rough idea becomes a system people can rely on.</p>
            <p>As an AI/ML Coordinator at Innogeeks, I&apos;ve led teams through 5+ MVPs — from architecture and database design to the last deployment. I care about the details that make ambitious software feel calm: clear APIs, observable services, and interfaces that get out of the way.</p>
            <a className="text-link" href="https://github.com/Abhilash-0322" target="_blank" rel="noreferrer">More on GitHub <ArrowUpRight /></a>
          </div>
          <div className="experience">
            <p className="mini-label">Experience</p>
            <div className="experience-row"><span>AI Engineer Intern</span><span>Spearmint Technologies <small>2026</small></span></div>
            <div className="experience-row"><span>AI/ML Coordinator</span><span>Innogeeks Club, KIET <small>2023—Present</small></span></div>
            <div className="experience-row"><span>B.Tech, Information Technology</span><span>KIET Group of Institutions <small>2023—2027</small></span></div>
            <div className="recognition"><span className="recognition-mark">✦</span><span>Co-inventor on an IoT-AI telemedicine patent<br /><small>India 202511018153A · Published 2025</small></span></div>
          </div>
        </div>
      </section>

      <section className="toolkit-section shell">
        <div className="toolkit-label"><p className="section-kicker">03 / The toolkit</p><p className="toolkit-note">Always learning, usually building.</p></div>
        <div className="skill-cloud">{skills.map((skill, index) => <span className={index % 4 === 0 ? "skill-highlight" : ""} key={skill}>{skill}</span>)}</div>
      </section>

      <section className="contact-section shell section-pad" id="contact">
        <div className="contact-inner">
          <p className="section-kicker">04 / Have a good problem?</p>
          <h2>Let&apos;s make it<br /><em>real.</em></h2>
          <p className="contact-copy">Open to backend, AI systems, and cloud engineering roles — and the occasional interesting collaboration.</p>
          <div className="contact-actions">
            <a className="button button-primary" href="mailto:abhilash.m.git@gmail.com">abhilash.m.git@gmail.com <ArrowUpRight /></a>
            <button className="button button-outline" onClick={copyEmail}>{copied ? "Email copied ✓" : "Copy email"}</button>
          </div>
        </div>
        <div className="contact-stamp" aria-hidden="true">OPEN<br /><span>TO WORK</span></div>
      </section>

      <footer className="site-footer shell">
        <span>© 2026 Abhilash Maurya</span>
        <div><a href="https://www.linkedin.com/in/abhilash-maurya-b615b9277/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://x.com/abhilash_glitch" target="_blank" rel="noreferrer">X / Twitter</a><a href="https://github.com/Abhilash-0322" target="_blank" rel="noreferrer">GitHub</a></div>
        <span>Built with intention<span className="footer-dot"> • </span>5156</span>
      </footer>
    </main>
  );
}
