"use client";

import { useEffect, useState } from "react";

const projects = [
  {
    number: "01",
    name: "TalentInfra",
    type: "Multi-agent hiring infrastructure",
    description:
      "Bias-aware hiring workflow where specialist agents anonymize, verify, match, and explain candidate decisions in real time.",
    stack: "FastAPI · Next.js · PostgreSQL · Groq · Azure",
    href: "https://github.com/Abhilash-0322/zynd-aickathon",
    live: "https://zynd-hiring-app.azurewebsites.net",
    featured: true
  },
  {
    number: "02",
    name: "SolSniff",
    type: "Autonomous Solana intelligence",
    description:
      "Two chained agents turn on-chain, developer, social, and news signals into ranked narratives and grounded product ideas.",
    stack: "Next.js 14 · Groq · Prisma · Neon · Vercel",
    href: "https://github.com/Abhilash-0322/sol-sniff",
    live: "https://solsniffer.vercel.app/",
    featured: true
  },
  {
    number: "03",
    name: "ChainSentinel AI",
    type: "Multi-chain security intelligence",
    description:
      "Static analysis, risk scoring, compliance reports, and live alerts for contracts across Ethereum, Solana, and Aptos.",
    stack: "Python · FastAPI · MongoDB · WebSockets",
    href: "https://github.com/Abhilash-0322/chainsentinel.ai",
    live: "https://deploybackend-icvu.onrender.com/",
    featured: false
  },
  {
    number: "04",
    name: "Quadrant RAG",
    type: "Knowledge retrieval system",
    description:
      "A containerized RAG platform for ingesting custom knowledge bases, indexing evidence, and serving low-latency answers.",
    stack: "FastAPI · LangChain · Vector DBs · Docker",
    href: "https://github.com/Abhilash-0322/quadrant-rag",
    featured: false
  }
];

const capabilities = [
  ["01", "Backend systems", "FastAPI, Django, Express, API design, auth boundaries, real-time transport"],
  ["02", "AI engineering", "Agents, RAG pipelines, LLM orchestration, evaluation, prompt systems"],
  ["03", "Cloud & delivery", "Docker, AWS, Azure, Linux, GitHub Actions, deployment workflows"],
  ["04", "Data foundations", "PostgreSQL, MongoDB, Redis, MySQL, Firebase, vector databases"]
];

const links = [
  ["GitHub", "https://github.com/Abhilash-0322"],
  ["LinkedIn", "https://www.linkedin.com/in/abhilash-maurya-b615b9277/"],
  ["X / Twitter", "https://x.com/abhilash_glitch"]
];

export default function Home() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" onClick={closeMenu} aria-label="Abhilash Maurya home">
          AM<span>.</span>
        </a>
        <nav className={menuOpen ? "site-nav is-open" : "site-nav"} aria-label="Main navigation">
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
        <div className="header-actions">
          <span className="availability"><i /> Open to work</span>
          <button
            className="theme-toggle"
            type="button"
            onClick={() => setDark((value) => !value)}
            aria-label={`Switch to ${dark ? "light" : "dark"} theme`}
          >
            <span aria-hidden>{dark ? "☼" : "◐"}</span>
            <b>{dark ? "Light" : "Dark"}</b>
          </button>
          <button
            className="menu-toggle"
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            <span /><span />
          </button>
        </div>
      </header>

      <section className="hero section-wrap" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span>Delhi NCR, India</span><span className="eyebrow-line" /><span>Available worldwide</span></p>
          <h1>Building the<br /><em>infrastructure</em><br />behind intelligence.</h1>
          <p className="hero-intro">
            I&apos;m Abhilash Maurya — a backend and AI systems developer focused on
            making ambitious ideas reliable, observable, and ready for the real world.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">See selected work <span>↘</span></a>
            <a className="text-link" href="mailto:abhilash.m.git@gmail.com">Let&apos;s talk <span>↗</span></a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="photo-frame">
            <div className="hero-photo" role="img" aria-label="Abstract server room in monochrome" />
            <div className="photo-caption"><span>01 / 01</span><span>Systems in motion</span></div>
          </div>
          <div className="hero-stamp">AI<br />/ SYS<br />/ 26</div>
        </div>
        <div className="hero-bottom">
          <span>Scroll to explore</span><span className="scroll-line" /><span>01 — 06</span>
        </div>
      </section>

      <section className="statement section-wrap">
        <p className="section-label">A short introduction</p>
        <div className="statement-grid">
          <h2>Useful software<br /><span>starts with care.</span></h2>
          <div>
            <p className="large-copy">
              The best engineering is quiet. It is the API that holds under pressure,
              the agent that cites its sources, and the deployment that does not need
              babysitting.
            </p>
            <p className="muted-copy">I work across the stack, with a bias toward clear thinking, resilient foundations, and shipping.</p>
          </div>
        </div>
      </section>

      <section className="work-section section-wrap" id="work">
        <div className="section-heading">
          <div><p className="section-label">Selected work</p><h2>Things I&apos;ve<br /><span>shipped.</span></h2></div>
          <p className="heading-note">A small selection of systems built for real users, real constraints, and the occasional impossible deadline.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className={project.featured ? "project-card featured" : "project-card"} key={project.name}>
              <div className="project-top"><span>{project.number}</span><span>{project.type}</span></div>
              <div className="project-body">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <small>{project.stack}</small>
              </div>
              <div className="project-links">
                <a href={project.href} target="_blank" rel="noreferrer">View source <span>↗</span></a>
                {project.live && <a href={project.live} target="_blank" rel="noreferrer">Live project <span>↗</span></a>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section section-wrap" id="about">
        <div className="section-heading">
          <div><p className="section-label">What I bring</p><h2>Built for<br /><span>the whole picture.</span></h2></div>
          <p className="heading-note">Curiosity is useful when it comes with ownership. I like knowing how the pieces connect — and making them connect better.</p>
        </div>
        <div className="capability-list">
          {capabilities.map(([number, title, description]) => (
            <div className="capability" key={number}>
              <span className="capability-number">{number}</span><h3>{title}</h3><p>{description}</p><span className="capability-arrow">↗</span>
            </div>
          ))}
        </div>
        <div className="experience-grid">
          <div><p className="section-label">Experience</p><h3>Hands-on, from<br />idea to production.</h3></div>
          <div className="experience-item"><p className="experience-date">NOV 2023 — PRESENT</p><h4>AI/ML Coordinator <span>↗</span></h4><p>Innogeeks Club, KIET</p><small>Led 5+ AI and full-stack MVPs, mentored 6+ developers, and coordinated agile teams of 3–6 through hackathon delivery.</small></div>
          <div className="experience-item"><p className="experience-date">AUG 2026</p><h4>AI Engineer Intern <span>↗</span></h4><p>Spearmint Technologies · Remote</p><small>Voice and agent features, TTS pipelines, fine-tuning, data collection, and Hermes-based agents.</small></div>
        </div>
      </section>

      <section className="proof-section section-wrap">
        <div className="proof-intro"><p className="section-label">Signals &amp; proof</p><h2>Always<br /><span>in motion.</span></h2></div>
        <div className="proof-list">
          <div><strong>01</strong><p>Co-inventor of an IoT-AI telemedicine patent<br /><small>India Patent No. 202511018153A</small></p></div>
          <div><strong>02</strong><p>1st place — solo AI agent hackathon track<br /><small>500+ participants</small></p></div>
          <div><strong>03</strong><p>AWS Certified Cloud Practitioner<br /><small>Cloud infrastructure fundamentals</small></p></div>
          <div><strong>04</strong><p>Open-source contributor<br /><small>GSSOC · Hacktoberfest · Gemini CLI</small></p></div>
        </div>
      </section>

      <section className="contact-section section-wrap" id="contact">
        <p className="section-label">Have a system to build?</p>
        <h2>Let&apos;s make<br /><em>it real.</em></h2>
        <a className="contact-email" href="mailto:abhilash.m.git@gmail.com">abhilash.m.git@gmail.com <span>↗</span></a>
        <div className="contact-bottom">
          <div><span className="availability"><i /> Open to work</span><p>Backend · AI systems · Cloud engineering</p></div>
          <div className="social-links">{links.map(([name, href]) => <a href={href} target="_blank" rel="noreferrer" key={name}>{name} <span>↗</span></a>)}</div>
        </div>
      </section>

      <footer className="site-footer section-wrap"><span>© 2026 Abhilash Maurya</span><span>Designed &amp; engineered with intent.</span><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
