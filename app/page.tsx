const projects = [
  {
    number: "01",
    name: "TalentInfra",
    type: "MULTI-AGENT HIRING",
    description:
      "A bias-aware hiring system that orchestrates specialist agents across candidate analysis, scoring, and human review.",
    stack: "FastAPI · Next.js · PostgreSQL · Groq · Azure",
    href: "https://github.com/Abhilash-0322/zynd-aickathon",
    live: "https://zynd-hiring-app.azurewebsites.net"
  },
  {
    number: "02",
    name: "ChainSentinel AI",
    type: "RISK & COMPLIANCE",
    description:
      "Multi-chain smart contract intelligence that turns noisy on-chain signals into an actionable risk surface.",
    stack: "FastAPI · Next.js · MongoDB · AI agents",
    href: "https://github.com/Abhilash-0322/chainsentinel.ai"
  },
  {
    number: "03",
    name: "Quadrant RAG",
    type: "KNOWLEDGE SYSTEMS",
    description:
      "A deployable retrieval-augmented generation foundation for private knowledge bases and grounded answers.",
    stack: "FastAPI · LangChain · Vector DB · Docker",
    href: "https://github.com/Abhilash-0322/quadrant-rag"
  },
  {
    number: "04",
    name: "SolSniff",
    type: "NARRATIVE AGENT",
    description:
      "A Solana-native idea agent that finds emerging narratives and helps turn signals into sharper hypotheses.",
    stack: "Next.js · Groq · Prisma · Vercel",
    href: "https://github.com/Abhilash-0322/sol-sniff",
    live: "https://solsniffer.vercel.app/"
  }
];

const capabilities = [
  {
    index: "01",
    title: "BACKEND SYSTEMS",
    text: "FastAPI services, clean contracts, resilient data models, and APIs designed for the next feature—not just the next demo."
  },
  {
    index: "02",
    title: "CLOUD / DEVOPS",
    text: "Containerized delivery, CI/CD, and practical cloud infrastructure across AWS, Azure, Linux, and GitHub Actions."
  },
  {
    index: "03",
    title: "AI THAT SHIPS",
    text: "RAG pipelines, agent workflows, and evaluation-minded product surfaces that connect models to useful outcomes."
  }
];

function ArrowUpRight() {
  return (
    <svg aria-hidden="true" viewBox="0 0 18 18">
      <path d="M4 14 14 4M6 4h8v8" />
    </svg>
  );
}

function ArrowDown() {
  return (
    <svg aria-hidden="true" viewBox="0 0 18 18">
      <path d="M9 2v13M4 10l5 5 5-5" />
    </svg>
  );
}

function BracketMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 42 42">
      <path d="M14 8 4 21l10 13M28 8l10 13-10 13" />
      <path d="m24 5-6 32" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <div className="grain" />
      <nav className="nav shell" aria-label="Main navigation">
        <a className="wordmark" href="#top" aria-label="Abhilash Maurya home">
          <span className="wordmark-mark">
            <BracketMark />
          </span>
          <span>AM<span className="wordmark-dot">.</span></span>
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#about">About</a>
        </div>
        <a className="nav-contact" href="mailto:abhilash.m.git@gmail.com">
          Let&apos;s talk <ArrowUpRight />
        </a>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="pulse" />
            Open to backend · AI · cloud roles
          </div>
          <h1>
            I build the <em>machinery</em>
            <br />
            behind useful AI.
          </h1>
          <p className="hero-intro">
            Backend and AI systems developer turning ambitious ideas into
            shipped products, reliable APIs, and cloud infrastructure that
            holds up beyond the demo.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              Explore selected work <ArrowDown />
            </a>
            <a className="text-link" href="mailto:abhilash.m.git@gmail.com">
              Start a conversation <ArrowUpRight />
            </a>
          </div>
        </div>

        <div className="hero-art" aria-label="Cyber mesh lattice graphic">
          <div className="art-label art-label-top">SYSTEM / 5070</div>
          <div className="art-label art-label-bottom">DELHI NCR · 28.6°N</div>
          <div className="lattice">
            <span className="lattice-line line-one" />
            <span className="lattice-line line-two" />
            <span className="lattice-line line-three" />
            <span className="lattice-line line-four" />
            <span className="node node-a" />
            <span className="node node-b" />
            <span className="node node-c" />
            <span className="node node-d" />
            <span className="node node-e" />
            <span className="core">
              <span className="core-inner">AI</span>
            </span>
          </div>
          <div className="art-coordinates">
            <span>LAT 28°40&apos;N</span>
            <span>LINK: ACTIVE</span>
          </div>
        </div>
      </section>

      <div className="ticker" aria-label="Areas of expertise">
        <div className="ticker-track">
          <span>BACKEND SYSTEMS</span><i>✳</i>
          <span>AI AGENTS</span><i>✳</i>
          <span>CLOUD INFRASTRUCTURE</span><i>✳</i>
          <span>RAG PIPELINES</span><i>✳</i>
          <span>BACKEND SYSTEMS</span><i>✳</i>
          <span>AI AGENTS</span><i>✳</i>
          <span>CLOUD INFRASTRUCTURE</span><i>✳</i>
          <span>RAG PIPELINES</span><i>✳</i>
        </div>
      </div>

      <section className="intro-section shell" id="about">
        <p className="section-kicker">[ 00 / PROFILE ]</p>
        <div className="intro-grid">
          <h2>
            The interesting part is
            <br />
            <span>between the model</span>
            <br />
            and the real world.
          </h2>
          <div className="intro-body">
            <p>
              I&apos;m Abhilash Maurya, a backend and AI systems developer based
              in Delhi NCR. I care about the layer where good engineering makes
              powerful ideas dependable.
            </p>
            <p>
              From multi-agent workflows to APIs and cloud deployments, I work
              across the stack to make complex systems feel clear, fast, and
              ready for real users.
            </p>
            <a className="text-link" href="#capabilities">
              How I can help <ArrowUpRight />
            </a>
          </div>
        </div>
        <div className="stats">
          <div className="stat">
            <strong>05<span>+</span></strong>
            <span>AI / full-stack MVPs led</span>
          </div>
          <div className="stat">
            <strong>06<span>+</span></strong>
            <span>Developers mentored</span>
          </div>
          <div className="stat">
            <strong>01</strong>
            <span>Published IoT-AI patent</span>
          </div>
          <div className="stat">
            <strong>∞</strong>
            <span>Curiosity in production</span>
          </div>
        </div>
      </section>

      <section className="work-section shell" id="work">
        <div className="section-heading">
          <div>
            <p className="section-kicker">[ 01 / SELECTED WORK ]</p>
            <h2>Things I&apos;ve <em>shipped.</em></h2>
          </div>
          <span className="section-aside">2024 — 2026 / 04 PROJECTS</span>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project" key={project.name}>
              <div className="project-number">{project.number}</div>
              <div className="project-info">
                <p className="project-type">{project.type}</p>
                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <p className="project-stack">{project.stack}</p>
              </div>
              <div className="project-links">
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer">
                    Live site <ArrowUpRight />
                  </a>
                )}
                <a href={project.href} target="_blank" rel="noreferrer">
                  Source <ArrowUpRight />
                </a>
              </div>
              <span className="project-arrow"><ArrowUpRight /></span>
            </article>
          ))}
        </div>
      </section>

      <section className="capabilities-section shell" id="capabilities">
        <div className="section-heading">
          <div>
            <p className="section-kicker">[ 02 / CAPABILITIES ]</p>
            <h2>Built for the <em>hard parts.</em></h2>
          </div>
        </div>
        <div className="capabilities-grid">
          {capabilities.map((capability) => (
            <article className="capability" key={capability.index}>
              <span className="capability-index">{capability.index}</span>
              <h3>{capability.title}</h3>
              <p>{capability.text}</p>
              <span className="capability-rule" />
            </article>
          ))}
        </div>
        <div className="toolbelt">
          <span>THE TOOLBELT</span>
          <p>Python / TypeScript / FastAPI / Next.js / PostgreSQL / Docker / AWS / Azure / LangChain / Linux</p>
        </div>
      </section>

      <section className="contact-section shell">
        <div className="contact-orbit" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <p className="section-kicker">[ 03 / CONTACT ]</p>
        <h2>Have a system<br /><em>worth building?</em></h2>
        <p className="contact-copy">
          Tell me what you&apos;re working on. I&apos;m always interested in
          thoughtful products, tricky infrastructure, and ideas with somewhere
          to go.
        </p>
        <a className="button button-primary" href="mailto:abhilash.m.git@gmail.com">
          abhilash.m.git@gmail.com <ArrowUpRight />
        </a>
      </section>

      <footer className="footer shell">
        <span>© 2026 ABHILASH MAURYA</span>
        <span>BUILT WITH INTENT / DELHI, INDIA</span>
        <div className="footer-links">
          <a href="https://github.com/Abhilash-0322" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/abhilash-maurya-b615b9277/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://x.com/abhilash_glitch" target="_blank" rel="noreferrer">X</a>
        </div>
      </footer>
    </main>
  );
}
