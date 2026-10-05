const projects = [
  {
    number: "01",
    name: "TalentInfra",
    type: "Multi-agent hiring platform",
    description:
      "A bias-aware hiring system that turns job requirements and candidate signals into explainable, structured shortlists.",
    tags: ["FastAPI", "Next.js", "PostgreSQL", "Azure"],
    link: "https://github.com/Abhilash-0322/zynd-aickathon",
    live: "https://zynd-hiring-app.azurewebsites.net",
    accent: "coral",
  },
  {
    number: "02",
    name: "SolSniff",
    type: "Solana narrative agent",
    description:
      "An AI research companion for discovering emerging Solana ideas, combining market context with a focused, fast interface.",
    tags: ["Next.js", "Groq", "Prisma", "Vercel"],
    link: "https://github.com/Abhilash-0322/sol-sniff",
    live: "https://solsniffer.vercel.app/",
    accent: "blue",
  },
  {
    number: "03",
    name: "ChainSentinel AI",
    type: "Smart contract intelligence",
    description:
      "Multi-chain risk and compliance workflows that help teams review contracts with more context and less manual effort.",
    tags: ["FastAPI", "Next.js", "MongoDB", "AI"],
    link: "https://github.com/Abhilash-0322/chainsentinel.ai",
    accent: "lime",
  },
  {
    number: "04",
    name: "Quadrant RAG",
    type: "Knowledge base infrastructure",
    description:
      "A production-minded RAG foundation for connecting custom knowledge bases to useful, grounded answers.",
    tags: ["Python", "LangChain", "Vector DB", "Docker"],
    link: "https://github.com/Abhilash-0322/quadrant-rag",
    accent: "violet",
  },
];

const capabilities = [
  {
    title: "Backend systems",
    text: "FastAPI, Django, Express, PostgreSQL, MongoDB, Redis, and the API contracts that keep products dependable.",
  },
  {
    title: "AI that ships",
    text: "Agent workflows, RAG pipelines, evaluation-minded integrations, and interfaces that make complex models useful.",
  },
  {
    title: "Cloud & delivery",
    text: "Docker, Linux, AWS, Azure, GitHub Actions, and the operational details between a local demo and a live service.",
  },
];

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M3.5 12.5 12 4m0 0H5.5M12 4v6.5" />
    </svg>
  );
}

function Spark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m12 2 1.8 7.2L21 11l-7.2 1.8L12 20l-1.8-7.2L3 11l7.2-1.8L12 2Z" />
    </svg>
  );
}

function Github() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.8a9.2 9.2 0 0 0-2.9 17.93c.46.08.63-.2.63-.44v-1.56c-2.56.56-3.1-1.09-3.1-1.09-.42-1.07-1.03-1.36-1.03-1.36-.84-.58.06-.57.06-.57.93.07 1.42.96 1.42.96.83 1.42 2.19 1.01 2.72.77.08-.6.33-1.01.59-1.24-2.04-.23-4.18-1.02-4.18-4.54 0-1 .36-1.82.96-2.46-.1-.24-.42-1.17.09-2.43 0 0 .79-.25 2.53.94a8.72 8.72 0 0 1 4.6 0c1.74-1.19 2.53-.94 2.53-.94.51 1.26.19 2.19.09 2.43.6.64.96 1.46.96 2.46 0 3.53-2.15 4.31-4.2 4.54.33.29.63.84.63 1.69v2.5c0 .24.17.52.64.43A9.2 9.2 0 0 0 12 2.8Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="site-shell">
      <aside className="sidebar">
        <div className="sidebar-inner">
          <a className="monogram" href="#top" aria-label="Back to top">
            AM<span>.</span>
          </a>

          <div className="side-intro">
            <p className="eyebrow">Independent developer</p>
            <h1>Abhilash<br />Maurya<span className="dot">.</span></h1>
            <p className="side-copy">
              Backend and AI systems developer building calm, capable software
              for the real world.
            </p>
          </div>

          <nav className="side-nav" aria-label="Main navigation">
            <a className="active" href="#work"><span>01</span>Selected work</a>
            <a href="#capabilities"><span>02</span>Capabilities</a>
            <a href="#journey"><span>03</span>Journey</a>
            <a href="#contact"><span>04</span>Contact</a>
          </nav>

          <div className="side-bottom">
            <div className="availability">
              <span className="status-dot" />
              <span>Open to good problems</span>
            </div>
            <div className="side-links">
              <a href="mailto:abhi.m.git@gmail.com">Email <ArrowUpRight /></a>
              <a href="https://github.com/Abhilash-0322" target="_blank" rel="noreferrer">GitHub <ArrowUpRight /></a>
              <a href="https://www.linkedin.com/in/abhilash-maurya-b615b9277/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight /></a>
            </div>
          </div>
        </div>
      </aside>

      <div className="content" id="top">
        <section className="hero section-pad">
          <div className="hero-kicker"><Spark /> Delhi NCR · India · 2026</div>
          <div className="hero-heading">
            <p className="hero-label">I make complex things</p>
            <h2>feel <em>simple.</em></h2>
          </div>
          <div className="hero-foot">
            <p>
              I design and ship backend platforms, AI agents, and cloud-native
              products with a bias toward clarity, usefulness, and momentum.
            </p>
            <a className="round-link" href="#work" aria-label="Explore selected work">
              <ArrowUpRight />
            </a>
          </div>
          <div className="hero-stamp" aria-hidden="true">
            <span>BUILD</span><span>WITH</span><span>INTENT</span>
          </div>
        </section>

        <section className="work section-pad" id="work">
          <div className="section-header">
            <div>
              <p className="eyebrow">A few things I&apos;ve shipped</p>
              <h3>Selected work<span className="dot">.</span></h3>
            </div>
            <span className="section-count">04 / 04</span>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className={`project-card ${project.accent}`} key={project.name}>
                <div className="card-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-type">{project.type}</span>
                </div>
                <div className="project-visual" aria-hidden="true">
                  <div className="visual-grid" />
                  <div className="visual-orbit orbit-one" />
                  <div className="visual-orbit orbit-two" />
                  <span className="visual-mark">{project.number === "01" ? "TI" : project.number === "02" ? "SS" : project.number === "03" ? "CS" : "QR"}</span>
                </div>
                <div className="project-body">
                  <h4>{project.name}</h4>
                  <p>{project.description}</p>
                  <div className="card-foot">
                    <div className="tag-list">
                      {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                    </div>
                    <div className="project-links">
                      <a href={project.link} target="_blank" rel="noreferrer" aria-label={`${project.name} on GitHub`}><Github /></a>
                      {project.live && <a href={project.live} target="_blank" rel="noreferrer" aria-label={`View ${project.name} live`}><ArrowUpRight /></a>}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="capabilities section-pad" id="capabilities">
          <div className="section-header">
            <div>
              <p className="eyebrow">What I bring to the table</p>
              <h3>Useful by default<span className="dot">.</span></h3>
            </div>
          </div>
          <div className="capability-list">
            {capabilities.map((capability, index) => (
              <div className="capability" key={capability.title}>
                <span className="cap-number">0{index + 1}</span>
                <h4>{capability.title}</h4>
                <p>{capability.text}</p>
                <span className="cap-arrow"><ArrowUpRight /></span>
              </div>
            ))}
          </div>
        </section>

        <section className="journey section-pad" id="journey">
          <div className="section-header">
            <div>
              <p className="eyebrow">The path so far</p>
              <h3>In the making<span className="dot">.</span></h3>
            </div>
          </div>
          <div className="timeline">
            <div className="timeline-item current">
              <div className="timeline-date">2023 — now</div>
              <div>
                <h4>AI/ML Coordinator <span>· Innogeeks Club, KIET</span></h4>
                <p>Leading AI and full-stack MVPs, mentoring developers, and helping teams turn ambitious ideas into working products.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">Aug 2026</div>
              <div>
                <h4>AI Engineer Intern <span>· Spearmint Technologies</span></h4>
                <p>Building voice and agent features across TTS pipelines, fine-tuning, data collection, and Hermes-based agents.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">Always</div>
              <div>
                <h4>Learning in public <span>· open source & hackathons</span></h4>
                <p>From winning tracks at Brainwave to contributing to open source: the fastest way to grow is to keep shipping.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="contact section-pad" id="contact">
          <div className="contact-card">
            <div className="contact-spark"><Spark /></div>
            <p className="eyebrow">Have a problem worth solving?</p>
            <h3>Let&apos;s make<br /><em>something useful.</em></h3>
            <a className="contact-link" href="mailto:abhi.m.git@gmail.com">abhi.m.git@gmail.com <ArrowUpRight /></a>
          </div>
        </section>

        <footer className="footer section-pad">
          <span>© 2026 Abhilash Maurya</span>
          <span>Built with intent<span className="dot">.</span></span>
          <a href="#top">Back to top ↑</a>
        </footer>
      </div>
    </main>
  );
}
