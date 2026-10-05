import { ThemeToggle } from "@/components/theme-toggle";

const projects = [
  {
    number: "01",
    title: "TalentInfra",
    description:
      "A multi-agent hiring system that makes candidate screening more explainable and bias-aware.",
    stack: "FastAPI · Next.js · PostgreSQL · Groq · Azure",
    href: "https://zynd-hiring-app.azurewebsites.net",
    source: "https://github.com/Abhilash-0322/zynd-aickathon",
    featured: true
  },
  {
    number: "02",
    title: "SolSniff",
    description:
      "An idea agent for Solana narratives—turning noisy market signals into a clear starting point.",
    stack: "Next.js · Groq · Prisma · Vercel",
    href: "https://solsniffer.vercel.app/",
    source: "https://github.com/Abhilash-0322/sol-sniff"
  },
  {
    number: "03",
    title: "ChainSentinel AI",
    description:
      "Multi-chain smart contract risk and compliance analysis for teams shipping in web3.",
    stack: "FastAPI · Next.js · MongoDB",
    href: "https://github.com/Abhilash-0322/chainsentinel.ai",
    source: "https://github.com/Abhilash-0322/chainsentinel.ai"
  },
  {
    number: "04",
    title: "Quadrant RAG",
    description:
      "A focused retrieval system for asking useful questions of private knowledge bases.",
    stack: "FastAPI · LangChain · Vector DB · Docker",
    href: "https://github.com/Abhilash-0322/quadrant-rag",
    source: "https://github.com/Abhilash-0322/quadrant-rag"
  },
  {
    number: "05",
    title: "Resume Analyzer",
    description:
      "Free, practical AI feedback for making a resume clearer, sharper, and easier to hire from.",
    stack: "Python · AI · Next.js",
    href: "https://resume-analyzer-pulse.vercel.app",
    source: "https://github.com/Abhilash-0322/resume-analyzer"
  }
];

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M3 13 13 3M5 3h8v8" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.5a9.5 9.5 0 0 0-3 18.51c.48.09.66-.21.66-.46v-1.68c-2.7.59-3.27-1.14-3.27-1.14a2.57 2.57 0 0 0-1.08-1.42c-.88-.6.07-.59.07-.59a2 2 0 0 1 1.46.98 2 2 0 0 0 2.73.78 2 2 0 0 1 .6-1.26c-2.15-.25-4.41-1.08-4.41-4.79a3.74 3.74 0 0 1 1-2.6 3.47 3.47 0 0 1 .1-2.56s.81-.26 2.63.99a9.06 9.06 0 0 1 4.79 0c1.82-1.25 2.63-.99 2.63-.99a3.47 3.47 0 0 1 .1 2.56 3.74 3.74 0 0 1 .99 2.6c0 3.72-2.27 4.54-4.42 4.78a2.25 2.25 0 0 1 .64 1.75v2.59c0 .25.18.55.67.46A9.5 9.5 0 0 0 12 2.5Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <div className="page-shell">
        <header className="site-header">
          <a className="wordmark" href="#top" aria-label="Abhilash Maurya home">
            <span className="wordmark-mark">AM</span>
            <span className="wordmark-name">
              Abhilash Maurya
              <small>Backend · AI · Cloud</small>
            </span>
          </a>
          <nav className="main-nav" aria-label="Main navigation">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
          <ThemeToggle />
        </header>

        <section className="hero" id="top">
          <div className="hero-copy">
            <div className="availability">
              <span className="pulse-dot" />
              Open to work
            </div>
            <p className="eyebrow">Backend developer · AI systems · Delhi NCR</p>
            <h1>
              Systems that hold up
              <em> after the demo.</em>
            </h1>
            <p className="hero-intro">
              I build reliable APIs, intelligent agents, and cloud infrastructure
              for products that need to do more than look good in a pitch.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                See selected work <ArrowUpRight />
              </a>
              <a className="text-link" href="mailto:abhilash.m.git@gmail.com">
                Let&apos;s talk <span>↗</span>
              </a>
            </div>
          </div>
          <div className="hero-note">
            <span className="note-label">Currently</span>
            <p>
              Building the bridge between
              <br />
              ambitious ideas and
              <br />
              <strong>shippable systems.</strong>
            </p>
            <span className="note-line" />
            <span className="note-index">01 / 04</span>
          </div>
        </section>

        <section className="signal-bar" aria-label="Experience highlights">
          <div>
            <strong>05+</strong>
            <span>AI & full-stack MVPs led</span>
          </div>
          <div>
            <strong>06+</strong>
            <span>Developers mentored</span>
          </div>
          <div>
            <strong>02</strong>
            <span>Cloud certifications</span>
          </div>
          <div className="signal-location">
            <span className="small-arrow">↳</span>
            <span>Based in<br />India · IST</span>
          </div>
        </section>

        <section className="work-section section" id="work">
          <div className="section-heading">
            <p className="eyebrow">Selected work</p>
            <h2>Things I&apos;ve helped<br /><em>make real.</em></h2>
            <p className="section-aside">
              A few systems, products, and experiments from the workbench.
            </p>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article className={`project ${project.featured ? "project-featured" : ""}`} key={project.title}>
                <span className="project-number">{project.number}</span>
                <div className="project-main">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <span className="project-stack">{project.stack}</span>
                </div>
                <div className="project-links">
                  <a href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}>
                    <ArrowUpRight />
                  </a>
                  <a href={project.source} target="_blank" rel="noreferrer" aria-label={`${project.title} on GitHub`}>
                    <GithubIcon />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section section" id="about">
          <div className="section-heading">
            <p className="eyebrow">A little context</p>
            <h2>Practical by nature,<br /><em>curious by default.</em></h2>
          </div>
          <div className="about-grid">
            <div className="about-copy">
              <p className="large-copy">
                I&apos;m Abhilash, a B.Tech IT student and backend engineer who likes
                working where software meets a messy, interesting problem.
              </p>
              <p>
                From multi-agent workflows to production APIs, I care about the
                unglamorous details: clear boundaries, good data models, observable
                deployments, and software that stays understandable after the team
                moves on.
              </p>
              <a className="text-link" href="mailto:abhilash.m.git@gmail.com">
                Get in touch <span>↗</span>
              </a>
            </div>
            <div className="experience-list">
              <div className="experience-item">
                <span className="experience-date">2023 — now</span>
                <div>
                  <h3>AI/ML Coordinator</h3>
                  <p>Innogeeks Club, KIET</p>
                  <small>Leading projects, people, and delivery.</small>
                </div>
              </div>
              <div className="experience-item">
                <span className="experience-date">2026</span>
                <div>
                  <h3>AI Engineer Intern</h3>
                  <p>Spearmint Technologies</p>
                  <small>Agents, TTS, fine-tuning, and data.</small>
                </div>
              </div>
              <div className="experience-item">
                <span className="experience-date">2027</span>
                <div>
                  <h3>B.Tech Information Technology</h3>
                  <p>KIET Group of Institutions</p>
                  <small>Expected graduation · AKTU</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="toolkit-section section">
          <div className="toolkit-label">
            <p className="eyebrow">The toolkit</p>
            <span>What I reach for</span>
          </div>
          <div className="toolkit-items">
            <span>Python</span><span>FastAPI</span><span>Next.js</span><span>PostgreSQL</span>
            <span>Docker</span><span>AWS</span><span>Azure</span><span>RAG</span>
            <span>AI agents</span><span>GitHub Actions</span>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <p className="eyebrow">Have a good problem?</p>
          <h2>Let&apos;s make it<br /><em>worth solving.</em></h2>
          <a className="contact-email" href="mailto:abhilash.m.git@gmail.com">
            abhilash.m.git@gmail.com <ArrowUpRight />
          </a>
        </section>

        <footer className="site-footer">
          <span>© 2026 Abhilash Maurya</span>
          <div className="footer-links">
            <a href="https://github.com/Abhilash-0322" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/abhilash-maurya-b615b9277/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://x.com/abhilash_glitch" target="_blank" rel="noreferrer">X / Twitter</a>
          </div>
          <span>Designed with intent</span>
        </footer>
      </div>
    </main>
  );
}
