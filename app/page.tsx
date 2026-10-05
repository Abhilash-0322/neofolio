"use client";

import { useEffect, useState } from "react";

type IconName =
  | "arrow"
  | "arrowDown"
  | "briefcase"
  | "check"
  | "code"
  | "external"
  | "github"
  | "linkedin"
  | "mail"
  | "moon"
  | "plane"
  | "sun";

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

  const paths: Record<IconName, React.ReactNode> = {
    arrow: <path d="M5 12h13m-6-6 6 6-6 6" />,
    arrowDown: <path d="M12 5v14m-6-6 6 6 6-6" />,
    briefcase: (
      <>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    code: (
      <>
        <path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14" />
      </>
    ),
    external: (
      <>
        <path d="M14 5h5v5M19 5l-8 8" />
        <path d="M18 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
      </>
    ),
    github: (
      <path d="M15 22v-3.9c.04-1-.4-1.8-1-2.1 3.3-.37 6.8-1.6 6.8-7.1 0-1.57-.55-2.86-1.45-3.86.14-.36.63-1.83-.14-3.8 0 0-1.18-.38-3.88 1.47a13.4 13.4 0 0 0-7.06 0C7.57.85 6.38 1.23 6.38 1.23c-.77 1.97-.28 3.44-.14 3.8-.9 1-1.45 2.29-1.45 3.86 0 5.48 3.5 6.73 6.8 7.1-.43.23-.83.67-.97 1.3-.87.4-3.08 1.06-4.44-1.26 0 0-.8-1.44-2.33-1.55 0 0-1.48-.02-.1.92 0 0 .99.46 1.67 2.2 0 0 .88 2.67 5.14 1.76V22" />
    ),
    linkedin: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    moon: <path d="M21 15.6A9 9 0 0 1 8.4 3 9 9 0 1 0 21 15.6Z" />,
    plane: (
      <>
        <path d="m3 11 18-8-8 18-2-8-8-2Z" />
        <path d="m11 13 4-4" />
      </>
    ),
    sun: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" />
      </>
    ),
  };

  return <svg {...common}>{paths[name]}</svg>;
}

const projects = [
  {
    number: "01",
    title: "TalentInfra",
    description:
      "A bias-aware hiring intelligence system where specialized agents coordinate sourcing, evaluation, and explainable recommendations.",
    stack: ["FastAPI", "Next.js", "Postgres", "Azure"],
    category: "Multi-agent / HR tech",
    href: "https://github.com/Abhilash-0322/zynd-aickathon",
    live: "https://zynd-hiring-app.azurewebsites.net",
    visual: "talent",
  },
  {
    number: "02",
    title: "ChainSentinel AI",
    description:
      "Multi-chain security intelligence for contract scanning, vulnerability detection, risk scoring, and real-time compliance alerts.",
    stack: ["Python", "WebSockets", "MongoDB", "Groq"],
    category: "Security / Web3",
    href: "https://github.com/Abhilash-0322/chainsentinel.ai",
    visual: "sentinel",
  },
  {
    number: "03",
    title: "Quadrant RAG",
    description:
      "A production-minded knowledge layer for ingesting private documents, retrieving the right context, and answering with grounded output.",
    stack: ["FastAPI", "LangChain", "Vector DB", "Docker"],
    category: "RAG / Infrastructure",
    href: "https://github.com/Abhilash-0322/quadrant-rag",
    visual: "quadrant",
  },
  {
    number: "04",
    title: "Zen Heaven",
    description:
      "An AI wellness platform combining sentiment analysis, agent recommendations, and Twilio safety escalation flows.",
    stack: ["FastAPI", "React", "Twilio", "MongoDB"],
    category: "AI / Social impact",
    href: "https://github.com/Abhilash-0322/HackHaven2.0",
    live: "https://hack-haven2-0.vercel.app/",
    visual: "zen",
  },
];

const skills = [
  ["01", "Backend & APIs", "Python · FastAPI · Django · Express"],
  ["02", "AI Systems", "RAG · LangChain · Agents · LLM orchestration"],
  ["03", "Data Layer", "Postgres · MongoDB · Redis · Vector DBs"],
  ["04", "Cloud & Delivery", "AWS · Azure · Docker · GitHub Actions"],
];

function ProjectVisual({ type }: { type: string }) {
  if (type === "talent") {
    return (
      <div className="visual visual-talent" aria-hidden="true">
        <div className="visual-topline"><span>AGENT NETWORK</span><span>● LIVE</span></div>
        <div className="agent-graph">
          <span className="graph-node node-main">T</span>
          <span className="graph-node node-a">S</span>
          <span className="graph-node node-b">E</span>
          <span className="graph-node node-c">R</span>
          <i className="graph-line line-a" /><i className="graph-line line-b" /><i className="graph-line line-c" />
        </div>
        <div className="visual-footer"><span>BIAS CHECK</span><strong>98.4%</strong><span>●</span></div>
      </div>
    );
  }

  if (type === "sentinel") {
    return (
      <div className="visual visual-sentinel" aria-hidden="true">
        <div className="visual-topline"><span>THREAT MONITOR</span><span>BLOCK 04</span></div>
        <div className="radar"><div className="radar-sweep" /><span className="radar-dot dot-one" /><span className="radar-dot dot-two" /></div>
        <div className="visual-footer"><span>RISK INDEX</span><strong>0.08 <em>LOW</em></strong></div>
      </div>
    );
  }

  if (type === "quadrant") {
    return (
      <div className="visual visual-quadrant" aria-hidden="true">
        <div className="visual-topline"><span>RETRIEVAL TRACE</span><span>Q-RAG / 04</span></div>
        <div className="trace-list">
          <div><i />knowledge_base / finance.pdf <b>0.94</b></div>
          <div><i />knowledge_base / risk.md <b>0.89</b></div>
          <div><i />knowledge_base / api.json <b>0.82</b></div>
        </div>
        <div className="visual-footer"><span>LATENCY</span><strong>142ms</strong><span>⌁ GROUNDED</span></div>
      </div>
    );
  }

  return (
    <div className="visual visual-zen" aria-hidden="true">
      <div className="visual-topline"><span>WELLNESS SIGNAL</span><span>PRIVATE</span></div>
      <div className="zen-orbit"><span className="orbit-core">●</span><i /><i /><i /></div>
      <div className="visual-footer"><span>MOOD VECTOR</span><strong>STEADY</strong><span>↗ +12%</span></div>
    </div>
  );
}

export default function Home() {
  const [isDark, setIsDark] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = isDark ? "dark" : "light";
  }, [isDark]);

  const copyEmail = async () => {
    await navigator.clipboard?.writeText("abhilash.m.git@gmail.com");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <main>
      <div className="site-shell">
        <header className="site-header">
          <a className="wordmark" href="#top" aria-label="Abhilash Maurya home">
            AM<span className="wordmark-dot">.</span>
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#work">Selected work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="header-actions">
            <span className="availability"><i /> Open to work</span>
            <button className="theme-toggle" onClick={() => setIsDark((value) => !value)} aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}>
              <Icon name={isDark ? "sun" : "moon"} size={16} />
              <span>{isDark ? "Light" : "Dark"}</span>
            </button>
          </div>
        </header>

        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow"><span>00</span> Systems / AI / Cloud</p>
            <h1>Building the<br /><em>infrastructure</em><br />behind better ideas.</h1>
            <p className="hero-intro">I&apos;m Abhilash — a backend and AI systems developer turning ambitious products into reliable, deployed software.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore selected work <Icon name="arrow" size={16} /></a>
              <button className="text-button" onClick={copyEmail}>{copied ? "Email copied ✓" : "Copy my email"} <Icon name="mail" size={15} /></button>
            </div>
          </div>
          <div className="hero-aside">
            <div className="orbit-mark" aria-hidden="true">
              <div className="orbit-ring ring-one" /><div className="orbit-ring ring-two" /><div className="orbit-ring ring-three" />
              <div className="orbit-center"><Icon name="plane" size={24} /></div>
              <span className="orbit-label label-top">DEL / IN</span>
              <span className="orbit-label label-bottom">AVAILABLE // 2026</span>
            </div>
            <p className="aside-note">Designing systems that stay calm under pressure.</p>
          </div>
          <a className="scroll-cue" href="#work"><span>Scroll to explore</span><Icon name="arrowDown" size={15} /></a>
        </section>

        <section className="signal-strip" aria-label="Current status">
          <div><span className="signal-label">CURRENT SIGNAL</span><strong>OPEN TO WORK</strong></div>
          <div><span className="signal-label">LOOKING FOR</span><span>Backend · AI systems · Cloud</span></div>
          <div><span className="signal-label">BASED IN</span><span>Delhi NCR, India</span></div>
          <div className="signal-status"><i /> Accepting conversations</div>
        </section>

        <section className="work-section section-pad" id="work">
          <div className="section-heading">
            <div><p className="eyebrow"><span>01</span> Selected work</p><h2>Systems with<br /><em>a point of view.</em></h2></div>
            <p className="section-deck">A few experiments and shipped systems across agents, security, retrieval, and the human side of technology.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <ProjectVisual type={project.visual} />
                <div className="project-body">
                  <div className="project-meta"><span>{project.number} / {project.category}</span><a href={project.href} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}><Icon name="github" size={17} /></a></div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-bottom">
                    <div className="stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                    <div className="project-links"><a href={project.href} target="_blank" rel="noreferrer">GitHub <Icon name="external" size={14} /></a>{project.live && <a href={project.live} target="_blank" rel="noreferrer">Live <Icon name="external" size={14} /></a>}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section section-pad" id="about">
          <div className="section-heading about-heading">
            <div><p className="eyebrow"><span>02</span> The short version</p><h2>Less hype.<br /><em>More signal.</em></h2></div>
            <div className="about-copy"><p>I work at the intersection of backend engineering and applied AI. My favorite problems have a little bit of ambiguity, a lot of moving parts, and a clear human outcome at the end.</p><p>From FastAPI services and data models to cloud deployments and agent workflows, I care about the seams where products either become dependable — or don&apos;t.</p></div>
          </div>
          <div className="metrics-row">
            <div className="metric"><strong>5<span>+</span></strong><span>AI & full-stack<br />MVPs led</span></div>
            <div className="metric"><strong>6<span>+</span></strong><span>Developers<br />mentored</span></div>
            <div className="metric"><strong>01</strong><span>Patent<br />co-invented</span></div>
            <div className="metric"><strong>93<span>%</span></strong><span>Sentiment model<br />precision</span></div>
          </div>
        </section>

        <section className="capabilities-section section-pad">
          <div className="section-heading compact-heading"><div><p className="eyebrow"><span>03</span> Capabilities</p><h2>Built across<br /><em>the stack.</em></h2></div><p className="section-deck">A practical toolkit for taking an idea from first API call to a system people can trust.</p></div>
          <div className="capability-list">{skills.map(([number, title, detail]) => <div className="capability" key={number}><span className="cap-number">{number}</span><h3>{title}</h3><p>{detail}</p><Icon name="arrow" size={17} /></div>)}</div>
          <div className="credential-line"><span><Icon name="check" size={15} /> AWS Certified Cloud Practitioner</span><span><Icon name="check" size={15} /> Google AI Essentials</span><span><Icon name="check" size={15} /> B.Tech IT · KIET · 2027</span></div>
        </section>

        <section className="contact-section section-pad" id="contact">
          <div className="contact-inner">
            <p className="eyebrow"><span>04</span> Let&apos;s talk</p>
            <h2>Have a hard problem?<br /><em>Send it my way.</em></h2>
            <p className="contact-copy">I&apos;m currently open to backend, AI systems, and cloud engineering opportunities — and selective freelance work where the problem is worth solving well.</p>
            <a className="button button-light" href="mailto:abhilash.m.git@gmail.com">Start a conversation <Icon name="arrow" size={16} /></a>
            <div className="contact-links"><a href="mailto:abhilash.m.git@gmail.com"><Icon name="mail" size={16} /> abhilash.m.git@gmail.com</a><a href="https://www.linkedin.com/in/abhilash-maurya-b615b9277/" target="_blank" rel="noreferrer"><Icon name="linkedin" size={16} /> LinkedIn</a><a href="https://github.com/Abhilash-0322" target="_blank" rel="noreferrer"><Icon name="github" size={16} /> GitHub</a></div>
          </div>
          <div className="contact-coordinate" aria-hidden="true"><span>28.6692° N</span><span>77.4538° E</span><i /><strong>AM</strong></div>
        </section>

        <footer className="site-footer"><span>© 2026 Abhilash Maurya</span><span>Designed & engineered with intent</span><a href="#top">Back to top ↑</a></footer>
      </div>
    </main>
  );
}
