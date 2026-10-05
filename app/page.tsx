"use client";

import { useEffect, useState } from "react";

const projects = [
  {
    index: "01",
    type: "multi-agent / hiring",
    name: "TalentInfra",
    description:
      "A bias-aware hiring workspace that turns candidate signals into explainable, structured decisions with a coordinated agent system.",
    tags: ["FastAPI", "Next.js", "PostgreSQL", "Azure"],
    github: "https://github.com/Abhilash-0322/zynd-aickathon",
    live: "https://zynd-hiring-app.azurewebsites.net",
    featured: true,
  },
  {
    index: "02",
    type: "web3 / intelligence",
    name: "SolSniff",
    description:
      "A narrative and idea agent for the Solana ecosystem, combining research workflows with a fast, focused product surface.",
    tags: ["Next.js", "Groq", "Prisma", "Vercel"],
    github: "https://github.com/Abhilash-0322/sol-sniff",
    live: "https://solsniffer.vercel.app",
    featured: false,
  },
  {
    index: "03",
    type: "security / compliance",
    name: "ChainSentinel AI",
    description:
      "Multi-chain smart contract risk analysis and compliance intelligence built for teams that need signal before exposure.",
    tags: ["FastAPI", "Next.js", "MongoDB", "Agents"],
    github: "https://github.com/Abhilash-0322/chainsentinel.ai",
    live: null,
    featured: false,
  },
  {
    index: "04",
    type: "knowledge / retrieval",
    name: "Quadrant RAG",
    description:
      "A production-minded RAG foundation for custom knowledge bases, with containerized APIs and pluggable vector search.",
    tags: ["Python", "LangChain", "Docker", "Vector DB"],
    github: "https://github.com/Abhilash-0322/quadrant-rag",
    live: null,
    featured: false,
  },
];

const stack = [
  { label: "backend", value: "Python · FastAPI · Django · Express.js" },
  { label: "ai systems", value: "LangChain · RAG · Agents · Groq" },
  { label: "data", value: "PostgreSQL · MongoDB · Redis · MySQL" },
  { label: "platform", value: "Docker · AWS · Azure · GitHub Actions" },
];

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M3 13 13 3M5 3h8v8" />
    </svg>
  );
}

function ArrowDown() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M8 2v11M4 9l4 4 4-4" />
    </svg>
  );
}

function ThemeIcon({ light }: { light: boolean }) {
  return light ? (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <circle cx="8" cy="8" r="3" />
      <path d="M8 1v2M8 13v2M1 8h2M13 8h2M3 3l1.5 1.5M11.5 11.5 13 13M13 3l-1.5 1.5M4.5 11.5 3 13" />
    </svg>
  ) : (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M13.2 10.5A5.5 5.5 0 0 1 5.5 2.8 5.6 5.6 0 1 0 13.2 10.5Z" />
    </svg>
  );
}

export default function Home() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    const shouldUseLight =
      savedTheme === "light" ||
      (!savedTheme && window.matchMedia("(prefers-color-scheme: light)").matches);
    setLight(shouldUseLight);
    document.documentElement.dataset.theme = shouldUseLight ? "light" : "dark";
  }, []);

  function toggleTheme() {
    const nextLight = !light;
    setLight(nextLight);
    document.documentElement.dataset.theme = nextLight ? "light" : "dark";
    window.localStorage.setItem("portfolio-theme", nextLight ? "light" : "dark");
  }

  return (
    <main>
      <div className="shell">
        <nav className="nav" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="Abhilash Maurya home">
            <span className="brand-mark">AM</span>
            <span>abhilash.m</span>
          </a>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <button
              className="theme-toggle"
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${light ? "dark" : "light"} theme`}
            >
              <ThemeIcon light={light} />
            </button>
          </div>
        </nav>

        <section className="hero" id="top">
          <div>
            <p className="eyebrow">
              <span className="pulse" />
              Backend + AI systems developer
            </p>
            <h1>
              Shipping systems
              <br />
              that <em>think clearly.</em>
            </h1>
            <p className="hero-copy">
              I&apos;m Abhilash — I build dependable APIs, agent workflows, and
              cloud infrastructure for products that need to work beyond the
              demo.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore selected work <ArrowDown />
              </a>
              <a className="button button-ghost" href="mailto:abhilash.m.git@gmail.com">
                Let&apos;s talk <ArrowUpRight />
              </a>
            </div>
          </div>

          <aside className="hero-side">
            <div className="status-card">
              <p className="card-label">current availability</p>
              <h2 className="status-title">
                <span className="pulse" />
                Open to work
              </h2>
              <p>
                Looking for backend, AI systems, and cloud-focused opportunities
                where thoughtful engineering has room to compound.
              </p>
              <div className="status-meta">
                <span>based in</span>
                <strong>Delhi NCR / IST</strong>
              </div>
              <div className="signal" aria-hidden="true">
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>
            </div>
          </aside>
        </section>

        <section className="section" id="work">
          <div className="section-heading">
            <div>
              <p className="section-kicker">01 / selected output</p>
              <h2 className="section-title">Built for the real world.</h2>
            </div>
            <p className="section-note">
              A few systems where backend depth, useful AI, and product speed
              meet.
            </p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article
                className={`project-card${project.featured ? " featured" : ""}`}
                key={project.name}
              >
                <div>
                  <div className="project-topline">
                    <span className="project-index">{project.index}</span>
                    <span className="project-type">{project.type}</span>
                  </div>
                  <h3 className="project-name">{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                </div>
                <div className="project-bottomline">
                  <div className="tag-list">
                    {project.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noreferrer">
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="about">
          <div className="section-heading">
            <div>
              <p className="section-kicker">02 / context</p>
              <h2 className="section-title">The person behind the stack.</h2>
            </div>
          </div>
          <div className="about-grid">
            <p className="about-lede">
              Curious by default. Precise when it counts. Always looking for
              the useful abstraction.
            </p>
            <div>
              <p className="about-copy">
                I&apos;m a B.Tech IT student at KIET and an AI/ML coordinator at
                Innogeeks Club. I&apos;ve led teams through 5+ AI and full-stack
                MVPs, from architecture and data models to the final deploy.
              </p>
              <p className="about-copy">
                My sweet spot is the layer where ideas become infrastructure:
                a clean API, a resilient agent loop, a deployment you can
                observe, and a product surface that makes the complexity feel
                simple.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <div>
              <p className="section-kicker">03 / timeline</p>
              <h2 className="section-title">Experience in motion.</h2>
            </div>
          </div>
          <div className="experience-list">
            <div className="experience-item">
              <span className="experience-period">2026 — now</span>
              <div>
                <h3 className="experience-role">AI Engineer Intern</h3>
                <span className="experience-company">Spearmint Technologies</span>
              </div>
              <span className="experience-note">TTS · agents · fine-tuning</span>
            </div>
            <div className="experience-item">
              <span className="experience-period">2023 — now</span>
              <div>
                <h3 className="experience-role">AI/ML Coordinator</h3>
                <span className="experience-company">Innogeeks Club, KIET</span>
              </div>
              <span className="experience-note">teams · architecture · delivery</span>
            </div>
            <div className="experience-item">
              <span className="experience-period">2024 — now</span>
              <div>
                <h3 className="experience-role">B.Tech Information Technology</h3>
                <span className="experience-company">KIET Group of Institutions</span>
              </div>
              <span className="experience-note">AKTU · expected 2027</span>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <div>
              <p className="section-kicker">04 / toolkit</p>
              <h2 className="section-title">Tools, used thoughtfully.</h2>
            </div>
          </div>
          <div className="stack-layout">
            <p>
              The best stack is the one that disappears behind a fast,
              maintainable experience. These are the tools I reach for when
              building that kind of system.
            </p>
            <div className="stack-groups">
              {stack.map((item) => (
                <div className="stack-group" key={item.label}>
                  <h3>{item.label}</h3>
                  <p>{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-box">
            <div>
              <p className="section-kicker">05 / next signal</p>
              <h2>Have a hard problem? Let&apos;s make it legible.</h2>
              <p>
                If you&apos;re building a platform, an AI product, or the
                infrastructure underneath one, I&apos;d love to hear what you&apos;re
                working on.
              </p>
            </div>
            <div className="contact-links">
              <a className="contact-link" href="mailto:abhilash.m.git@gmail.com">
                <span>abhilash.m.git@gmail.com</span>
                <span>email ↗</span>
              </a>
              <a
                className="contact-link"
                href="https://github.com/Abhilash-0322"
                target="_blank"
                rel="noreferrer"
              >
                <span>github.com/Abhilash-0322</span>
                <span>github ↗</span>
              </a>
              <a
                className="contact-link"
                href="https://www.linkedin.com/in/abhilash-maurya-b615b9277/"
                target="_blank"
                rel="noreferrer"
              >
                <span>linkedin / abhilash-maurya</span>
                <span>linkedin ↗</span>
              </a>
            </div>
          </div>
        </section>

        <footer>
          <span>© 2026 Abhilash Maurya / built with intent</span>
          <div className="footer-links">
            <a href="https://x.com/abhilash_glitch" target="_blank" rel="noreferrer">
              X
            </a>
            <a href="https://leetcode.com/u/Abhilash_Maurya/" target="_blank" rel="noreferrer">
              LeetCode
            </a>
            <a href="#top">Back to top ↑</a>
          </div>
        </footer>
      </div>
    </main>
  );
}
