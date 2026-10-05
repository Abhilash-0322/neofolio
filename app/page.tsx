"use client";

import { useEffect, useState } from "react";

type Project = {
  title: string;
  type: string;
  description: string;
  stack: string[];
  github: string;
  live?: string;
  accent: string;
};

const projects: Project[] = [
  {
    title: "TalentInfra",
    type: "MULTI-AGENT HIRING",
    description:
      "Bias-aware hiring intelligence that coordinates agents across candidate signals, role fit, and transparent scoring.",
    stack: ["FastAPI", "Next.js", "PostgreSQL", "Azure"],
    github: "https://github.com/Abhilash-0322/zynd-aickathon",
    live: "https://zynd-hiring-app.azurewebsites.net",
    accent: "mint",
  },
  {
    title: "ChainSentinel AI",
    type: "SECURITY INTELLIGENCE",
    description:
      "Multi-chain smart contract analysis with static detection, risk scoring, live alerts, and AI-assisted explanations.",
    stack: ["Python", "FastAPI", "MongoDB", "WebSockets"],
    github: "https://github.com/Abhilash-0322/chainsentinel.ai",
    accent: "violet",
  },
  {
    title: "Quadrant RAG",
    type: "KNOWLEDGE SYSTEMS",
    description:
      "A production-minded RAG pipeline for custom knowledge bases, from document ingestion to low-latency grounded answers.",
    stack: ["LangChain", "Vector DB", "Docker", "LLMs"],
    github: "https://github.com/Abhilash-0322/quadrant-rag",
    accent: "amber",
  },
  {
    title: "Zen Heaven",
    type: "WELLNESS AI",
    description:
      "Sentiment-aware wellness workflows with recommendation agents and Twilio safety escalation flows for high-risk moments.",
    stack: ["FastAPI", "React", "LangChain", "Twilio"],
    github: "https://github.com/Abhilash-0322/HackHaven2.0",
    live: "https://hack-haven2-0.vercel.app/",
    accent: "blue",
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
  "RAG",
  "AI agents",
  "GitHub Actions",
];

function ArrowUpRight() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    if (savedTheme === "light") setTheme("light");
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    window.localStorage.setItem("portfolio-theme", nextTheme);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("abhilash.m.git@gmail.com");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = "mailto:abhilash.m.git@gmail.com";
    }
  };

  return (
    <main className="site-shell" data-theme={theme}>
      <div className="noise" aria-hidden="true" />
      <header className="nav-wrap">
        <a className="wordmark" href="#top" aria-label="Back to top">
          <span className="wordmark-mark">AM</span>
          <span>abhilash<span className="muted">.dev</span></span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#work">work</a>
          <a href="#about">about</a>
          <a href="#contact">contact</a>
        </nav>
        <button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}>
          <span className="theme-icon" aria-hidden="true">{theme === "dark" ? "☼" : "☾"}</span>
          {theme === "dark" ? "light mode" : "dark mode"}
        </button>
      </header>

      <section className="hero section-pad" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> open to work <span className="eyebrow-rule" /> delhi ncr · india</div>
          <h1>
            I build the
            <span className="headline-accent">systems behind</span>
            <span>the interface.</span>
          </h1>
          <p className="hero-intro">
            Backend developer &amp; AI systems builder shipping APIs, agent workflows, and cloud infrastructure that hold up beyond the demo.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">view selected work <ArrowUpRight /></a>
            <button className="button button-quiet" onClick={copyEmail}>
              {copied ? "email copied ✓" : "copy email"}
            </button>
          </div>
        </div>
        <div className="hero-terminal terminal-window" aria-label="Developer status terminal">
          <div className="terminal-topbar">
            <span className="terminal-dots"><i /><i /><i /></span>
            <span>~/abhilash/status</span>
            <span className="terminal-lock">⌁</span>
          </div>
          <div className="terminal-body">
            <p><span className="prompt">➜</span> whoami</p>
            <p className="terminal-output">abhilash.maurya</p>
            <p><span className="prompt">➜</span> cat current_focus.txt</p>
            <p className="terminal-output long-output">distributed systems<br />+ applied ai<br />+ cloud infrastructure</p>
            <p><span className="prompt">➜</span> uptime</p>
            <p className="terminal-output">building useful things since 2023 <span className="cursor" /></p>
          </div>
          <div className="terminal-footer"><span>STATUS</span><strong>● OPERATIONAL</strong><span className="terminal-footer-right">v2.0.26</span></div>
        </div>
      </section>

      <div className="ticker" aria-label="Areas of focus">
        <span>PYTHON</span><b>✳</b><span>FASTAPI</span><b>✳</b><span>AI AGENTS</span><b>✳</b><span>CLOUD SYSTEMS</span><b>✳</b><span>RAG PIPELINES</span><b>✳</b><span>PYTHON</span>
      </div>

      <section className="proof-strip section-pad">
        <div className="proof-item"><strong>05<span>+</span></strong><span>AI &amp; full-stack<br />MVPs led</span></div>
        <div className="proof-item"><strong>06<span>+</span></strong><span>Developers<br />mentored</span></div>
        <div className="proof-item"><strong>93<span>%</span></strong><span>Sentiment model<br />precision</span></div>
        <div className="proof-item"><strong>01</strong><span>Published<br />IoT-AI patent</span></div>
        <p className="proof-note">I care about the layer<br />where ideas become reliable.</p>
      </section>

      <section className="work-section section-pad" id="work">
        <div className="section-heading">
          <div><span className="section-kicker">01 / selected work</span><h2>Things I&apos;ve shipped.</h2></div>
          <span className="section-index">[ 04 projects ]</span>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className={`project-card accent-${project.accent}`} key={project.title}>
              <div className="project-number">0{index + 1}</div>
              <div className="project-type">{project.type}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="stack-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer">source <ArrowUpRight /></a>
                {project.live && <a href={project.live} target="_blank" rel="noreferrer">live <ArrowUpRight /></a>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section section-pad" id="about">
        <div className="section-heading">
          <div><span className="section-kicker">02 / the operator</span><h2>Built for the messy middle.</h2></div>
        </div>
        <div className="about-grid">
          <div className="about-statement">
            <p className="big-copy">The interesting work starts after the hello world.</p>
            <p>I&apos;m a B.Tech IT student and AI/ML Coordinator at KIET, where I lead small teams from a rough problem statement to an architecture, a working product, and a deployment people can actually use.</p>
            <p>My sweet spot is backend engineering with an AI edge: well-shaped APIs, observable data flows, and agent systems grounded in real context.</p>
          </div>
          <div className="experience-list">
            <div className="experience-item">
              <div className="experience-date">NOV 2023 — PRESENT</div>
              <div><h3>AI/ML Coordinator</h3><p>Innogeeks Club · KIET</p><span>Architecture · Mentorship · Delivery</span></div>
            </div>
            <div className="experience-item">
              <div className="experience-date">AUG 2026</div>
              <div><h3>AI Engineer Intern</h3><p>Spearmint Technologies · Remote</p><span>Agents · TTS · Fine-tuning</span></div>
            </div>
            <div className="credential-row"><span>AWS CERTIFIED CLOUD PRACTITIONER</span><span>GOOGLE AI ESSENTIALS</span></div>
          </div>
        </div>
        <div className="skills-line"><span>toolbox</span>{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
      </section>

      <section className="contact-section section-pad" id="contact">
        <div className="contact-card">
          <span className="section-kicker">03 / initiate a connection</span>
          <h2>Have a system<br /><span>worth building?</span></h2>
          <p>Tell me what you&apos;re working on. I&apos;m open to backend, AI systems, cloud, and fintech opportunities.</p>
          <a className="button button-primary" href="mailto:abhilash.m.git@gmail.com">start a conversation <ArrowUpRight /></a>
          <div className="contact-meta"><span>abhilash.m.git@gmail.com</span><span>+91 7880764235</span></div>
        </div>
      </section>

      <footer className="footer section-pad">
        <span>© 2026 ABHILASH MAURYA</span>
        <div className="footer-links"><a href="https://github.com/Abhilash-0322" target="_blank" rel="noreferrer">github <ArrowUpRight /></a><a href="https://www.linkedin.com/in/abhilash-maurya-b615b9277/" target="_blank" rel="noreferrer">linkedin <ArrowUpRight /></a><a href="https://x.com/abhilash_glitch" target="_blank" rel="noreferrer">x <ArrowUpRight /></a></div>
        <span className="footer-right">designed in the terminal <span className="footer-prompt">▮</span></span>
      </footer>
    </main>
  );
}
