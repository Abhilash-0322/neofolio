import ThemeToggle from "@/components/theme-toggle";

const projects = [
  {
    number: "01",
    name: "TalentInfra",
    type: "AI hiring infrastructure",
    description: "A bias-aware, multi-agent hiring workflow that turns messy talent signals into explainable shortlists.",
    stack: "FastAPI · Next.js · PostgreSQL · Groq · Azure",
    href: "https://zynd-hiring-app.azurewebsites.net",
    github: "https://github.com/Abhilash-0322/zynd-aickathon",
    accent: "project-card--clay",
  },
  {
    number: "02",
    name: "SolSniff",
    type: "Narrative intelligence",
    description: "An idea agent for the Solana ecosystem, designed to make a fast-moving market easier to read.",
    stack: "Next.js · Groq · Prisma · Vercel",
    href: "https://solsniffer.vercel.app/",
    github: "https://github.com/Abhilash-0322/sol-sniff",
    accent: "project-card--ink",
  },
  {
    number: "03",
    name: "ChainSentinel AI",
    type: "Smart contract risk",
    description: "Multi-chain risk and compliance intelligence for teams that need signal before they ship.",
    stack: "FastAPI · Next.js · MongoDB",
    href: "https://github.com/Abhilash-0322/chainsentinel.ai",
    github: "https://github.com/Abhilash-0322/chainsentinel.ai",
    accent: "project-card--sage",
  },
  {
    number: "04",
    name: "Quadrant RAG",
    type: "Knowledge systems",
    description: "A practical RAG foundation for turning custom knowledge bases into useful, grounded answers.",
    stack: "FastAPI · LangChain · Vector DBs · Docker",
    href: "https://github.com/Abhilash-0322/quadrant-rag",
    github: "https://github.com/Abhilash-0322/quadrant-rag",
    accent: "project-card--sand",
  },
];

const skills = ["Python", "FastAPI", "AI agents", "RAG", "AWS", "Docker", "PostgreSQL", "Next.js", "Redis", "CI/CD"];

export default function Home() {
  return (
    <main>
      <nav className="site-nav shell" aria-label="Main navigation">
        <a href="#" className="wordmark" aria-label="Abhilash Maurya home">
          <span className="wordmark__mark">A</span>
          <span>abhilash<span className="wordmark__dot">.</span></span>
        </a>
        <div className="nav-links">
          <a href="#work">Selected work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <ThemeToggle />
      </nav>

      <section className="hero shell">
        <div className="hero__copy">
          <div className="eyebrow"><span className="eyebrow__line" /> Backend · AI · Cloud</div>
          <h1>Building systems<br /><em>with a point of view.</em></h1>
          <p className="hero__intro">
            I&apos;m Abhilash — a backend and AI systems developer making useful things
            for the web, the cloud, and the teams shipping on them.
          </p>
          <div className="hero__actions">
            <a className="button button--dark" href="#work">See selected work <span>↘</span></a>
            <a className="text-link" href="mailto:abhilash.m.git@gmail.com">Let&apos;s talk <span>↗</span></a>
          </div>
        </div>

        <div className="hero__art" aria-label="Abstract terracotta studio artwork">
          <div className="hero__stamp">AM<br /><small>studio / 26</small></div>
          <div className="orbit orbit--one" />
          <div className="orbit orbit--two" />
          <div className="hero__shape hero__shape--sun" />
          <div className="hero__shape hero__shape--block" />
          <div className="hero__shape hero__shape--circle" />
          <div className="hero__caption"><span>01</span> Systems that hold up</div>
        </div>
      </section>

      <section className="availability shell" aria-label="Availability">
        <div className="availability__status"><span className="status-dot" /> Open to work</div>
        <p>Looking for backend, AI systems, or cloud engineering roles<span> — let&apos;s build something with staying power.</span></p>
        <a href="mailto:abhilash.m.git@gmail.com">Get in touch <span>↗</span></a>
      </section>

      <section className="intro-band shell" id="about">
        <div className="section-label">/ 01 — A little context</div>
        <div className="intro-band__content">
          <h2>Beyond demos.<br /><em>Into the real world.</em></h2>
          <div>
            <p className="large-copy">
              I care about the unglamorous parts that make ambitious products work:
              strong APIs, clear data models, useful automation, and deployments you can trust.
            </p>
            <p className="muted-copy">
              Currently studying Information Technology at KIET, while leading AI/ML work at
              Innogeeks Club and shipping production-minded experiments across AI, fintech, and web3.
            </p>
            <a className="text-link" href="https://github.com/Abhilash-0322" target="_blank" rel="noreferrer">More on GitHub <span>↗</span></a>
          </div>
        </div>
      </section>

      <section className="work-section shell" id="work">
        <div className="section-heading">
          <div className="section-label">/ 02 — Selected work</div>
          <p>Things I&apos;ve helped bring to life.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className={`project-card ${project.accent}`} key={project.name}>
              <div className="project-card__top">
                <span className="project-card__number">{project.number}</span>
                <span className="project-card__arrow">↗</span>
              </div>
              <div className="project-card__visual" aria-hidden="true">
                <span className="visual-line visual-line--one" />
                <span className="visual-line visual-line--two" />
                <span className="visual-square" />
                <span className="visual-dot" />
              </div>
              <div className="project-card__body">
                <p className="project-card__type">{project.type}</p>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="project-card__footer">
                  <span>{project.stack}</span>
                  <a href={project.href} target="_blank" rel="noreferrer" aria-label={`View ${project.name}`}>View project ↗</a>
                </div>
              </div>
              <a className="project-card__hit-area" href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`} />
              <a className="project-card__github" href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.name} on GitHub`}>GitHub ↗</a>
            </article>
          ))}
        </div>
        <div className="all-work"><a className="text-link" href="https://github.com/Abhilash-0322" target="_blank" rel="noreferrer">Explore all experiments <span>↗</span></a></div>
      </section>

      <section className="journey shell">
        <div className="section-label">/ 03 — The journey so far</div>
        <div className="journey__grid">
          <div className="journey__intro">
            <h2>A practice built<br /><em>in public.</em></h2>
            <p>Curious by default. Serious about the craft. Always looking for the next hard problem worth solving.</p>
          </div>
          <div className="timeline">
            <div className="timeline__item">
              <span className="timeline__date">2026 — now</span>
              <div><h3>AI Engineer Intern <small>↗</small></h3><p>Spearmint Technologies <span>·</span> Remote / Part-time</p><p className="timeline__detail">Voice pipelines, fine-tuning, data collection, and Hermes-based agents.</p></div>
            </div>
            <div className="timeline__item">
              <span className="timeline__date">2023 — now</span>
              <div><h3>AI/ML Coordinator <small>↗</small></h3><p>Innogeeks Club, KIET <span>·</span> Ghaziabad</p><p className="timeline__detail">Led 5+ MVPs, mentored 6+ developers, and coordinated hackathon teams.</p></div>
            </div>
            <div className="timeline__item">
              <span className="timeline__date">2023 — 2027</span>
              <div><h3>B.Tech Information Technology</h3><p>KIET Group of Institutions <span>·</span> AKTU</p><p className="timeline__detail">Learning the fundamentals, then finding better ways to apply them.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="toolkit shell">
        <div className="section-label">/ 04 — The toolkit</div>
        <div className="toolkit__grid">
          <h2>Comfortable<br /><em>in the stack.</em></h2>
          <div className="skill-cloud">
            {skills.map((skill, index) => <span className={index % 3 === 0 ? "skill skill--filled" : "skill"} key={skill}>{skill}</span>)}
          </div>
        </div>
      </section>

      <section className="contact shell" id="contact">
        <div className="contact__top">
          <div className="section-label">/ 05 — Say hello</div>
          <span className="contact__stamp">Delhi NCR · India</span>
        </div>
        <h2>Have a good<br /><em>problem?</em></h2>
        <a className="contact__email" href="mailto:abhilash.m.git@gmail.com">abhilash.m.git@gmail.com <span>↗</span></a>
        <div className="contact__meta">
          <div><span>Elsewhere</span><a href="https://www.linkedin.com/in/abhilash-maurya-b615b9277/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://x.com/abhilash_glitch" target="_blank" rel="noreferrer">X / Twitter ↗</a><a href="https://github.com/Abhilash-0322" target="_blank" rel="noreferrer">GitHub ↗</a></div>
          <div><span>Profiles</span><a href="https://leetcode.com/u/Abhilash_Maurya/" target="_blank" rel="noreferrer">LeetCode ↗</a><a href="https://codeforces.com/profile/mauryaabhi2003" target="_blank" rel="noreferrer">Codeforces ↗</a></div>
        </div>
      </section>

      <footer className="site-footer shell">
        <span>© {new Date().getFullYear()} Abhilash Maurya</span>
        <span>Built with care in Delhi NCR</span>
        <a href="#">Back to top ↑</a>
      </footer>
    </main>
  );
}
