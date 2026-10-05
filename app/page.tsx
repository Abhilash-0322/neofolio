const projects = [
  {
    number: "01",
    title: "TalentInfra",
    type: "Multi-agent hiring",
    description:
      "A bias-aware hiring workflow that combines specialist agents, verifiable credentials, and transparent WebSocket updates.",
    stack: "FastAPI · Next.js · PostgreSQL · Groq · Azure",
    href: "https://github.com/Abhilash-0322/zynd-aickathon",
    live: "https://zynd-hiring-app.azurewebsites.net"
  },
  {
    number: "02",
    title: "SolSniff",
    type: "Research agent",
    description:
      "An autonomous Solana analyst that turns on-chain, developer, social, and news signals into grounded product ideas.",
    stack: "Next.js · Groq · Prisma · Neon · Vercel",
    href: "https://github.com/Abhilash-0322/sol-sniff",
    live: "https://solsniffer.vercel.app/"
  },
  {
    number: "03",
    title: "ChainSentinel AI",
    type: "Security intelligence",
    description:
      "Multi-chain smart contract risk and compliance analysis built for earlier, clearer security decisions.",
    stack: "FastAPI · Next.js · MongoDB · WebSockets",
    href: "https://github.com/Abhilash-0322/chainsentinel.ai",
    live: null
  },
  {
    number: "04",
    title: "Quadrant RAG",
    type: "Knowledge systems",
    description:
      "A deployable retrieval layer for precise questions over private knowledge bases and custom vector indexes.",
    stack: "Python · FastAPI · LangChain · Docker",
    href: "https://github.com/Abhilash-0322/quadrant-rag",
    live: null
  },
  {
    number: "05",
    title: "Resume Analyzer",
    type: "Developer tool",
    description:
      "Free AI feedback that helps candidates make their experience more legible, specific, and useful to reviewers.",
    stack: "Python · AI · Vercel",
    href: "https://github.com/Abhilash-0322/resume-analyzer",
    live: "https://resume-analyzer-pulse.vercel.app"
  },
  {
    number: "06",
    title: "Zen Heaven",
    type: "Wellness AI",
    description:
      "Sentiment-aware wellness support with Twilio safety flows and human-first escalation paths.",
    stack: "FastAPI · React · LangChain · Twilio",
    href: "https://github.com/Abhilash-0322/HackHaven2.0",
    live: "https://hack-haven2-0.vercel.app/"
  }
] as const;

const skills = [
  "Python",
  "FastAPI",
  "AI agents",
  "RAG",
  "PostgreSQL",
  "Docker",
  "AWS",
  "Azure",
  "Next.js",
  "GitHub Actions",
  "Redis",
  "Linux"
];

export default function Home() {
  return (
    <main>
      <nav className="nav wrap" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Abhilash Maurya home">
          <span className="monogram">AM</span>
          <span>Abhilash Maurya</span>
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-resume" href="mailto:abhilash.m.git@gmail.com">
          Let&apos;s talk <span>↗</span>
        </a>
      </nav>

      <section className="hero wrap" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Backend · AI systems · Cloud</p>
          <h1>Thoughtful systems<br /><em>made to matter.</em></h1>
          <p className="lede">
            I&apos;m Abhilash, a backend and AI systems developer from Delhi NCR. I build
            reliable APIs, useful agent workflows, and cloud infrastructure that holds up
            beyond the demo.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">See selected work <span>↓</span></a>
            <a className="text-link" href="mailto:abhilash.m.git@gmail.com">Start a conversation <span>↗</span></a>
          </div>
        </div>
        <div className="hero-art" aria-label="Watercolor abstract illustration">
          <div className="wash wash-blue" />
          <div className="wash wash-coral" />
          <div className="wash wash-gold" />
          <div className="art-note"><span>01</span><strong>Make it useful.</strong><small>Make it last.</small></div>
          <div className="art-stroke" />
        </div>
      </section>

      <section className="stats wrap" aria-label="At a glance">
        <div><strong>10<span>+</span></strong><small>systems shipped</small></div>
        <div><strong>06<span>+</span></strong><small>developers mentored</small></div>
        <div><strong>02</strong><small>hackathon wins</small></div>
        <div><strong>2027</strong><small>B.Tech graduation</small></div>
      </section>

      <section className="section wrap" id="work">
        <div className="section-heading">
          <p className="eyebrow"><span /> Selected work</p>
          <p className="section-intro">A few systems I&apos;ve shaped from first sketch to deployed product.</p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className={`project-card ${index === 0 ? "featured" : ""}`} key={project.title}>
              <div className="project-meta"><span>{project.number} / 06</span><span>{project.type}</span></div>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="tags">{project.stack.split(" · ").map((tag) => <span key={tag}>{tag}</span>)}</div>
              <div className="project-links">
                <a href={project.href} target="_blank" rel="noreferrer">Source <span>↗</span></a>
                {project.live && <a href={project.live} target="_blank" rel="noreferrer">Live product <span>↗</span></a>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section about-section wrap" id="about">
        <div className="section-heading">
          <p className="eyebrow"><span /> The practice</p>
          <p className="section-intro">The work is technical. The approach is human.</p>
        </div>
        <div className="about-grid">
          <div>
            <h2>Clarity before complexity.</h2>
            <p>
              I care about the quiet details that make software trustworthy: clear API
              boundaries, observable deployments, deliberate data models, and AI features
              with a real job to do.
            </p>
            <p>
              At Innogeeks Club, I&apos;ve led 5+ AI and full-stack MVPs and mentored 6+
              developers. Today, I&apos;m also building voice and agent features at Spearmint
              Technologies.
            </p>
          </div>
          <div className="experience-card">
            <p className="card-label">Working across</p>
            <div className="skill-list">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
            <div className="credential"><span>✦</span><div><strong>AWS Certified Cloud Practitioner</strong><small>Google AI Essentials · Co-inventor on an IoT-AI telemedicine patent</small></div></div>
          </div>
        </div>
      </section>

      <section className="contact wrap" id="contact">
        <div><p className="eyebrow"><span /> Have a system to ship?</p><h2>Let&apos;s make something<br /><em>worth keeping.</em></h2></div>
        <a className="button button-light" href="mailto:abhilash.m.git@gmail.com">Email Abhilash <span>↗</span></a>
      </section>

      <footer className="footer wrap">
        <span>© 2026 Abhilash Maurya</span>
        <span>Built with care in Delhi NCR.</span>
        <div><a href="https://github.com/Abhilash-0322" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/abhilash-maurya-b615b9277/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://x.com/abhilash_glitch" target="_blank" rel="noreferrer">X</a></div>
      </footer>
    </main>
  );
}
