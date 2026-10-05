import Link from "next/link";
import { ThemeToggle } from "../components/theme-toggle";

const projects = [
  {
    index: "01",
    name: "TalentInfra",
    type: "Hiring intelligence",
    description:
      "A bias-aware, multi-agent hiring platform that turns candidate signals into transparent, explainable decisions.",
    stack: ["FastAPI", "Next.js", "PostgreSQL", "Groq", "Azure"],
    github: "https://github.com/Abhilash-0322/zynd-aickathon",
    live: "https://zynd-hiring-app.azurewebsites.net",
    accent: "amber",
  },
  {
    index: "02",
    name: "ChainSentinel AI",
    type: "Security intelligence",
    description:
      "Multi-chain smart contract risk and compliance intelligence for Ethereum, Solana, and Aptos ecosystems.",
    stack: ["Python", "FastAPI", "MongoDB", "WebSockets", "Groq"],
    github: "https://github.com/Abhilash-0322/chainsentinel.ai",
    accent: "red",
  },
  {
    index: "03",
    name: "Quadrant RAG",
    type: "Knowledge systems",
    description:
      "A production-shaped RAG system for private knowledge bases, from document ingestion to low-latency retrieval.",
    stack: ["FastAPI", "LangChain", "Vector DBs", "Docker"],
    github: "https://github.com/Abhilash-0322/quadrant-rag",
    accent: "green",
  },
  {
    index: "04",
    name: "SolSniff",
    type: "On-chain signals",
    description:
      "A Solana narrative and idea agent that helps turn fast-moving ecosystem noise into useful product signals.",
    stack: ["Next.js", "Groq", "Prisma", "Vercel"],
    github: "https://github.com/Abhilash-0322/sol-sniff",
    live: "https://solsniffer.vercel.app/",
    accent: "green",
  },
  {
    index: "05",
    name: "Zen Heaven",
    type: "Safety-first wellness",
    description:
      "An AI wellness platform pairing sentiment analysis with agent recommendations and Twilio safety escalation flows.",
    stack: ["FastAPI", "React", "LangChain", "Twilio"],
    github: "https://github.com/Abhilash-0322/HackHaven2.0",
    live: "https://hack-haven2-0.vercel.app/",
    accent: "amber",
  },
  {
    index: "06",
    name: "Resume Analyzer",
    type: "Career tooling",
    description:
      "A free AI resume feedback tool that gives candidates a sharper, more actionable view of their story.",
    stack: ["AI", "Next.js", "Vercel"],
    github: "https://github.com/Abhilash-0322/resume-analyzer",
    live: "https://resume-analyzer-pulse.vercel.app",
    accent: "red",
  },
];

const skills = [
  ["01", "Backend", "Python · FastAPI · Django · Express"],
  ["02", "AI systems", "LangChain · RAG · Agents · Groq"],
  ["03", "Cloud & data", "AWS · Azure · Docker · PostgreSQL"],
  ["04", "Foundations", "C++ · JavaScript · SQL · Linux"],
];

function ArrowUpRight() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" className="h-4 w-4">
      <path d="M3.5 12.5 12.5 3.5M5 3.5h7.5V11" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowDown() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" className="h-4 w-4">
      <path d="M8 2.5v10.75M4.25 9.5 8 13.25l3.75-3.75" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GridMark() {
  return (
    <span className="grid-mark" aria-hidden="true">
      <i />
      <i />
      <i />
      <i />
    </span>
  );
}

export default function Home() {
  return (
    <main>
      <nav className="site-nav">
        <Link href="#top" className="wordmark" aria-label="Abhilash Maurya home">
          <span className="wordmark-mark">A</span>
          <span>AM<span className="wordmark-dot">.</span></span>
        </Link>
        <div className="nav-links">
          <Link href="#work">Work</Link>
          <Link href="#about">About</Link>
          <Link href="#contact">Contact</Link>
        </div>
        <div className="nav-actions">
          <span className="nav-status"><span className="status-dot" />Available</span>
          <ThemeToggle />
        </div>
      </nav>

      <section className="hero section-shell" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> Independent developer · 2026</div>
          <div className="hero-title-wrap">
            <p className="hero-kicker">Systems for a moving world.</p>
            <h1>Building the <em>quiet</em><br />machinery behind<br /><span>big ideas.</span></h1>
          </div>
          <p className="hero-intro">
            I&apos;m Abhilash — a backend and AI systems developer turning complex
            problems into dependable products, one thoughtful layer at a time.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="#work">Explore selected work <ArrowDown /></Link>
            <Link className="button button-quiet" href="#contact">Let&apos;s talk <ArrowUpRight /></Link>
          </div>
        </div>
        <div className="hero-ledger" aria-label="Open to work status">
          <div className="ledger-topline">
            <span>Ledger no. 0322</span>
            <span>Delhi NCR / IN</span>
          </div>
          <div className="ledger-seal"><GridMark /></div>
          <p className="ledger-label">Current position</p>
          <p className="ledger-value">OPEN<br /><span>TO WORK</span></p>
          <div className="ledger-rule" />
          <p className="ledger-note">Full-time · Internship · Freelance</p>
          <p className="ledger-note ledger-note-muted">Backend / AI systems / Cloud / Fintech</p>
          <div className="ledger-bottom">
            <span>STATUS: ACTIVE</span>
            <span>●</span>
          </div>
        </div>
      </section>

      <div className="ticker" aria-label="Areas of focus">
        <div className="ticker-track">
          <span>BACKEND SYSTEMS <b>✳</b></span><span>AI INFRASTRUCTURE <b>✳</b></span><span>CLOUD ENGINEERING <b>✳</b></span><span>FINTECH TOOLS <b>✳</b></span><span>BACKEND SYSTEMS <b>✳</b></span><span>AI INFRASTRUCTURE <b>✳</b></span>
        </div>
      </div>

      <section className="section-shell work-section" id="work">
        <div className="section-heading">
          <div>
            <p className="section-number">01 / Selected work</p>
            <h2>Built to be <em>useful.</em></h2>
          </div>
          <p className="section-description">A few systems, products, and experiments where infrastructure meets imagination.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className={`project-card project-${project.accent}`} key={project.name}>
              <div className="project-meta"><span>{project.index}</span><span>{project.type}</span></div>
              <div className="project-visual"><GridMark /><span className="visual-caption">Built with intent</span></div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="project-footer">
                <div className="stack-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.name} on GitHub`}><ArrowUpRight /> GitHub</a>
                  {project.live && <a href={project.live} target="_blank" rel="noreferrer" aria-label={`Visit ${project.name}`}><ArrowUpRight /> Live</a>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="section-shell about-grid">
          <div>
            <p className="section-number">02 / About the operator</p>
            <h2>Good systems<br />feel <em>inevitable.</em></h2>
          </div>
          <div className="about-copy">
            <p className="about-lead">The best infrastructure disappears into the experience. That&apos;s the standard I bring to every API, agent, and deployment.</p>
            <p>I&apos;m a B.Tech IT student at KIET, an AWS Certified Cloud Practitioner, and an AI/ML Coordinator who has led 5+ MVPs from first architecture sketch to shipped prototype. My work lives where backend engineering, cloud infrastructure, and applied AI overlap.</p>
            <p className="open-copy"><span className="status-dot" /> I&apos;m currently <strong>open to work</strong> for full-time, internship, and freelance roles in backend, AI systems, cloud, and fintech.</p>
            <Link className="text-link" href="#contact">Start a conversation <ArrowUpRight /></Link>
          </div>
        </div>
      </section>

      <section className="section-shell capability-section">
        <div className="section-heading">
          <div>
            <p className="section-number">03 / Working knowledge</p>
            <h2>The working<br /><em>capital.</em></h2>
          </div>
          <p className="section-description">Tools are only useful when they help a team move with confidence.</p>
        </div>
        <div className="skills-grid">
          {skills.map(([number, title, details]) => (
            <div className="skill-row" key={number}><span className="skill-number">{number}</span><h3>{title}</h3><p>{details}</p><ArrowUpRight /></div>
          ))}
        </div>
        <div className="credentials">
          <span>Also in the ledger</span>
          <p>AWS Cloud Practitioner <i>·</i> Google AI Essentials <i>·</i> Patent co-inventor <i>·</i> MLH Solana track winner</p>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-shell contact-inner">
          <p className="section-number">04 / Make contact</p>
          <h2>Have a problem<br />worth <em>solving?</em></h2>
          <p className="contact-copy">I&apos;m open to work for full-time, internship, and freelance opportunities across backend, AI systems, cloud, and fintech.</p>
          <a className="contact-email" href="mailto:abhilash.m.git@gmail.com">abhilash.m.git@gmail.com <ArrowUpRight /></a>
          <div className="contact-details">
            <span>Based in Delhi NCR, India</span>
            <div><a href="https://github.com/Abhilash-0322" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/abhilash-maurya-b615b9277/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://x.com/abhilash_glitch" target="_blank" rel="noreferrer">X / Twitter</a></div>
          </div>
        </div>
      </section>

      <footer className="site-footer section-shell">
        <span>© 2026 Abhilash Maurya</span>
        <span>Designed for the long run <i>✳</i></span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
