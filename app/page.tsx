"use client";

import { useEffect, useState } from "react";

const projects = [
  {
    number: "01",
    title: "TalentInfra",
    type: "Bias-aware hiring infrastructure",
    description:
      "A multi-agent hiring workflow that makes candidate evaluation more structured, explainable, and fair.",
    tags: ["FastAPI", "Next.js", "PostgreSQL", "Groq", "Azure"],
    href: "https://github.com/Abhilash-0322/zynd-aickathon",
    live: "https://zynd-hiring-app.azurewebsites.net",
    featured: true,
  },
  {
    number: "02",
    title: "SolSniff",
    type: "Solana narrative agent",
    description:
      "An AI-native research surface for finding signals and shaping better ideas across the Solana ecosystem.",
    tags: ["Next.js", "Groq", "Prisma", "Vercel"],
    href: "https://github.com/Abhilash-0322/sol-sniff",
    live: "https://solsniffer.vercel.app/",
  },
  {
    number: "03",
    title: "ChainSentinel AI",
    type: "Smart contract risk & compliance",
    description:
      "Multi-chain analysis that turns contract risk into a clearer, faster compliance workflow.",
    tags: ["FastAPI", "Next.js", "MongoDB"],
    href: "https://github.com/Abhilash-0322/chainsentinel.ai",
  },
  {
    number: "04",
    title: "Quadrant RAG",
    type: "Knowledge base retrieval",
    description:
      "A focused RAG foundation for custom knowledge bases, with a deployment path built for real teams.",
    tags: ["FastAPI", "LangChain", "Vector DBs", "Docker"],
    href: "https://github.com/Abhilash-0322/quadrant-rag",
  },
  {
    number: "05",
    title: "Resume Analyzer",
    type: "Practical AI feedback",
    description:
      "A free tool that gives job seekers useful, direct feedback instead of generic resume advice.",
    tags: ["AI", "Next.js", "Product"],
    href: "https://github.com/Abhilash-0322/resume-analyzer",
    live: "https://resume-analyzer-pulse.vercel.app",
  },
  {
    number: "06",
    title: "Zen Heaven",
    type: "Wellness AI",
    description:
      "A sentiment-aware wellness experience with conversational support and Twilio safety flows.",
    tags: ["FastAPI", "React", "LangChain", "Twilio"],
    href: "https://github.com/Abhilash-0322/HackHaven2.0",
    live: "https://hack-haven2-0.vercel.app/",
  },
];

const principles = [
  {
    title: "Ship the useful slice",
    text: "Start with the smallest system that creates real value, then harden it with feedback.",
  },
  {
    title: "Make the path visible",
    text: "Good infrastructure is observable, documented, and understandable by the next engineer.",
  },
  {
    title: "AI with a job to do",
    text: "Use models where they improve a workflow—not just because the demo looks impressive.",
  },
];

const stackGroups = [
  { label: "Build", items: ["Python", "TypeScript", "C++", "SQL"] },
  { label: "Backend", items: ["FastAPI", "Django", "Express.js", "LangChain"] },
  { label: "Data", items: ["PostgreSQL", "MongoDB", "Redis", "Vector DBs"] },
  { label: "Ship", items: ["Docker", "AWS", "Azure", "GitHub Actions"] },
];

function ArrowUpRight() {
  return <span aria-hidden="true" className="arrow">↗</span>;
}

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const current = document.documentElement.dataset.theme;
    if (current === "light" || current === "dark") setTheme(current);
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("portfolio-theme", next);
    setTheme(next);
  }

  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#top" aria-label="Abhilash Maurya home">
          <span className="brand-mark">AM</span>
          <span className="brand-name">Abhilash Maurya</span>
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#stack">Stack</a>
          <a href="#contact">Contact</a>
        </div>
        <button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}>
          <span aria-hidden="true">{theme === "dark" ? "☼" : "☾"}</span>
          <span className="theme-label">{theme === "dark" ? "Light mode" : "Dark mode"}</span>
        </button>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> Delhi NCR · India <span className="eyebrow-slash">/</span> Available for the next build</div>
          <h1>Backend systems.<br /><em>AI that ships.</em></h1>
          <p className="hero-lede">
            I&apos;m Abhilash, a backend and AI systems developer building reliable APIs,
            agents, and cloud infrastructure for ideas that need to work beyond the demo.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore selected work <ArrowUpRight /></a>
            <a className="button button-quiet" href="mailto:abhilash.m.git@gmail.com">Let&apos;s talk <span aria-hidden="true">→</span></a>
          </div>
        </div>
        <div className="hero-aside">
          <div className="status-card">
            <div className="status-card-top"><span className="live-dot" /> OPEN TO WORK</div>
            <p>Backend, AI systems,<br />and cloud engineering roles.</p>
            <a href="mailto:abhilash.m.git@gmail.com">abhilash.m.git@gmail.com <ArrowUpRight /></a>
          </div>
          <div className="hero-index">SCROLL TO EXPLORE <span>↓</span></div>
        </div>
      </section>

      <section className="signal-bar">
        <div className="shell signal-items">
          <span>FASTAPI</span><i>✳</i><span>NEXT.JS</span><i>✳</i><span>AWS + AZURE</span><i>✳</i><span>AI AGENTS</span><i>✳</i><span>RAG SYSTEMS</span>
        </div>
      </section>

      <section className="section shell" id="work">
        <div className="section-heading">
          <div>
            <p className="kicker">01 / Selected work</p>
            <h2>Systems with a<br /><span>point of view.</span></h2>
          </div>
          <p className="section-intro">A few builds across AI, fintech, and developer infrastructure. Each one started as a hard problem and ended as something people could use.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className={`project-card ${project.featured ? "featured" : ""}`} key={project.title}>
              <div className="project-top"><span className="project-number">{project.number}</span><span className="project-type">{project.type}</span></div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-row">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
              <div className="project-links">
                <a href={project.href} target="_blank" rel="noreferrer">GitHub <ArrowUpRight /></a>
                {project.live && <a href={project.live} target="_blank" rel="noreferrer">Live site <ArrowUpRight /></a>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="shell about-layout">
          <div className="about-title">
            <p className="kicker">02 / The short version</p>
            <h2>More signal.<br /><span>Less noise.</span></h2>
          </div>
          <div className="about-content">
            <p className="about-lede">I like the part where a sketch becomes a service, and a service becomes dependable.</p>
            <p>My work sits at the intersection of backend engineering and applied AI. I&apos;ve led campus AI MVPs, mentored developers, shipped hackathon products, and deployed systems on AWS and Azure. These days, I&apos;m especially interested in cloud infrastructure, AI agents, RAG, and finance-oriented engineering.</p>
            <div className="principles">
              {principles.map((principle, index) => (
                <div className="principle" key={principle.title}>
                  <span className="principle-index">0{index + 1}</span>
                  <div><h3>{principle.title}</h3><p>{principle.text}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section shell experience-section">
        <div className="section-heading compact">
          <div><p className="kicker">03 / Experience</p><h2>Building, leading,<br /><span>learning in public.</span></h2></div>
        </div>
        <div className="experience-list">
          <div className="experience-row">
            <div className="experience-date">Aug 2026<span>~ 1 month</span></div>
            <div className="experience-role"><h3>AI Engineer Intern <span>↗</span></h3><p>Spearmint Technologies · Part-time, Remote</p></div>
            <div className="experience-detail">TTS pipelines, fine-tuning, web scraping, and Hermes-based agent development.</div>
          </div>
          <div className="experience-row">
            <div className="experience-date">Nov 2023<span>— Present</span></div>
            <div className="experience-role"><h3>AI/ML Coordinator <span>↗</span></h3><p>Innogeeks Club · KIET</p></div>
            <div className="experience-detail">Led 5+ AI and full-stack MVPs, mentored 6+ developers, and coordinated teams of 3–6 through hackathon delivery.</div>
          </div>
          <div className="experience-row">
            <div className="experience-date">Expected<span>2027</span></div>
            <div className="experience-role"><h3>B.Tech Information Technology</h3><p>KIET Group of Institutions · AKTU</p></div>
            <div className="experience-detail">Based in Ghaziabad, Delhi NCR. AWS Certified Cloud Practitioner.</div>
          </div>
        </div>
      </section>

      <section className="stack-section" id="stack">
        <div className="shell">
          <div className="section-heading stack-heading">
            <div><p className="kicker">04 / Working stack</p><h2>The tools behind<br /><span>the work.</span></h2></div>
            <p className="section-intro">Comfortable moving from schema to endpoint to deployment. Always learning the tool that makes the system simpler.</p>
          </div>
          <div className="stack-grid">
            {stackGroups.map((group) => (
              <div className="stack-group" key={group.label}>
                <span className="stack-label">{group.label}</span>
                {group.items.map((item) => <span className="stack-item" key={item}>{item}</span>)}
              </div>
            ))}
          </div>
          <div className="recognition"><span>Also in the mix</span><p>Google AI Essentials · GSSOC · Hacktoberfest · Open source · IoT-AI telemedicine patent co-inventor</p></div>
        </div>
      </section>

      <section className="contact-section shell" id="contact">
        <div className="contact-mark">AM</div>
        <p className="kicker">05 / Start a conversation</p>
        <h2>Have a problem<br /><em>worth solving?</em></h2>
        <a className="contact-email" href="mailto:abhilash.m.git@gmail.com">abhilash.m.git@gmail.com <ArrowUpRight /></a>
        <div className="social-links">
          <a href="https://github.com/Abhilash-0322" target="_blank" rel="noreferrer">GitHub <ArrowUpRight /></a>
          <a href="https://www.linkedin.com/in/abhilash-maurya-b615b9277/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight /></a>
          <a href="https://x.com/abhilash_glitch" target="_blank" rel="noreferrer">X / Twitter <ArrowUpRight /></a>
        </div>
      </section>

      <footer className="footer shell">
        <span>© 2026 Abhilash Maurya</span>
        <span>Built with Next.js · Delhi NCR, India</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
