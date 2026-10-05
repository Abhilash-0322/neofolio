"use client";

import { useEffect, useState } from "react";

const projects = [
  {
    number: "01",
    name: "TalentInfra",
    description:
      "Bias-aware hiring workflows with multi-agent evaluation, transparent scoring, and a production deployment.",
    stack: "FastAPI · Next.js · PostgreSQL · Azure",
    href: "https://github.com/Abhilash-0322/zynd-aickathon",
  },
  {
    number: "02",
    name: "SolSniff",
    description:
      "A narrative and idea agent for the Solana ecosystem, built to turn noisy market signals into useful context.",
    stack: "Next.js · Groq · Prisma · Vercel",
    href: "https://solsniffer.vercel.app/",
  },
  {
    number: "03",
    name: "ChainSentinel AI",
    description:
      "Multi-chain smart contract risk and compliance analysis for teams that need answers before they ship.",
    stack: "FastAPI · Next.js · MongoDB",
    href: "https://github.com/Abhilash-0322/chainsentinel.ai",
  },
  {
    number: "04",
    name: "Quadrant RAG",
    description:
      "A focused retrieval system for custom knowledge bases, from ingestion through grounded responses.",
    stack: "FastAPI · LangChain · Vector DB · Docker",
    href: "https://github.com/Abhilash-0322/quadrant-rag",
  },
  {
    number: "05",
    name: "Resume Analyzer",
    description:
      "Free, direct AI feedback for resumes—designed to turn a vague application into an actionable next edit.",
    stack: "AI · Next.js · Product thinking",
    href: "https://resume-analyzer-pulse.vercel.app",
  },
];

const skillGroups = [
  { title: "Build", items: ["Python", "FastAPI", "Django", "React / Next.js", "TypeScript"] },
  { title: "Ship", items: ["AWS · Azure", "Docker", "GitHub Actions", "Linux", "PostgreSQL"] },
  { title: "Think", items: ["AI agents", "RAG systems", "LangChain", "Redis", "System design"] },
];

export default function Home() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <main>
      <header className="site-shell topbar">
        <a className="brand" href="#top" aria-label="Abhilash Maurya home">
          <span className="brand-mark">A</span>
          <span>Abhilash Maurya</span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <button
            className="theme-toggle"
            type="button"
            aria-label={`Switch to ${dark ? "light" : "dark"} theme`}
            onClick={() => setDark((current) => !current)}
          >
            <span className="theme-dot" />
            <span>{dark ? "Light" : "Dark"} mode</span>
          </button>
        </nav>
      </header>

      <section className="site-shell hero" id="top">
        <div>
          <div className="eyebrow">Backend · AI systems · Cloud</div>
          <h1>
            I build the <em>infrastructure</em> behind useful ideas.
          </h1>
          <p className="hero-copy">
            Backend and AI systems developer based in Delhi NCR. I turn ambitious
            product ideas into reliable APIs, agent workflows, and cloud deployments.
          </p>
          <div className="hero-actions">
            <a className="button-primary" href="#work">
              See selected work <span>↘</span>
            </a>
            <a className="text-link" href="mailto:abhilash.m.git@gmail.com">
              Let&apos;s talk
            </a>
          </div>
        </div>
        <div className="portrait-card" aria-label="Abstract portrait card">
          <div className="portrait-shape" />
          <div className="portrait-label">
            <span>AM / 03—22</span>
            <span>Ghaziabad, IN</span>
          </div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          <span>OPEN TO WORK</span><span className="marquee-dot">✳</span>
          <span>Backend engineering</span><span className="marquee-dot">✳</span>
          <span>AI systems</span><span className="marquee-dot">✳</span>
          <span>Cloud infrastructure</span><span className="marquee-dot">✳</span>
          <span>OPEN TO WORK</span><span className="marquee-dot">✳</span>
          <span>Backend engineering</span><span className="marquee-dot">✳</span>
          <span>AI systems</span><span className="marquee-dot">✳</span>
          <span>Cloud infrastructure</span><span className="marquee-dot">✳</span>
        </div>
      </div>

      <section className="site-shell section" id="about">
        <div className="section-heading">
          <div className="section-label">01 / Experience</div>
          <div>
            <h2>
              Systems-minded, <em className="serif">people-focused.</em>
            </h2>
            <p className="section-intro">
              I care about the layer where thoughtful product decisions meet
              engineering that can actually be operated. My work sits between
              APIs, infrastructure, and AI that earns its place in the stack.
            </p>
          </div>
        </div>
        <div className="experience-grid">
          <article className="experience-item">
            <div className="experience-date">Aug 2026<br />Present</div>
            <div>
              <h3 className="experience-role">AI Engineer Intern</h3>
              <p className="experience-place">Spearmint Technologies · Remote</p>
              <p className="experience-copy">
                Building voice and agent features across TTS pipelines, fine-tuning,
                web scraping, and Hermes-based agent workflows.
              </p>
            </div>
          </article>
          <article className="experience-item">
            <div className="experience-date">Nov 2023<br />Present</div>
            <div>
              <h3 className="experience-role">AI / ML Coordinator</h3>
              <p className="experience-place">Innogeeks Club · KIET</p>
              <p className="experience-copy">
                Led 5+ AI and full-stack MVPs, mentored 6+ developers, and helped
                teams turn hackathon prototypes into deployed systems.
              </p>
            </div>
          </article>
          <article className="experience-item">
            <div className="experience-date">2023—27</div>
            <div>
              <h3 className="experience-role">B.Tech, Information Technology</h3>
              <p className="experience-place">KIET Group of Institutions</p>
              <p className="experience-copy">
                A practical education shaped by building in public, shipping with
                teams, and learning systems from first principles.
              </p>
            </div>
          </article>
          <article className="experience-item">
            <div className="experience-date">Always<br />learning</div>
            <div>
              <h3 className="experience-role">AWS Certified Cloud Practitioner</h3>
              <p className="experience-place">Plus Google AI Essentials</p>
              <p className="experience-copy">
                Currently exploring finance-oriented engineering, production AI
                patterns, and the craft of making complex systems feel simple.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="projects-section section" id="work">
        <div className="site-shell">
          <div className="section-heading">
            <div className="section-label">02 / Selected work</div>
            <div>
              <h2>
                Shipped, not just <em className="serif">sketched.</em>
              </h2>
              <p className="section-intro">
                A selection of systems I&apos;ve designed, built, and pushed into the
                world. Open each one for the details.
              </p>
            </div>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <a
                className="project-row"
                href={project.href}
                key={project.number}
                target="_blank"
                rel="noreferrer"
              >
                <span className="project-number">{project.number}</span>
                <div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </div>
                <div className="project-stack">{project.stack}</div>
                <span className="project-arrow">↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="site-shell section">
        <div className="skills-layout">
          <div>
            <div className="section-label">03 / The toolkit</div>
            <h2>
              Enough range to see the <em>whole shape.</em>
            </h2>
          </div>
          <div className="skill-groups">
            {skillGroups.map((group) => (
              <div className="skill-group" key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="site-shell closing" id="contact">
        <div className="section-label">04 / Next chapter</div>
        <h2>
          Have a hard problem? <em>Let&apos;s make it legible.</em>
        </h2>
        <a className="button-primary" href="mailto:abhilash.m.git@gmail.com">
          Start a conversation <span>↗</span>
        </a>
      </section>

      <footer className="site-shell footer">
        <div className="footer-content">
          <span className="footer-note">© 2026 Abhilash Maurya · Built with intent</span>
          <div className="footer-links">
            <a href="https://github.com/Abhilash-0322" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/abhilash-maurya-b615b9277/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="mailto:abhilash.m.git@gmail.com">Email</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
