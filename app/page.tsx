import { ThemeToggle } from "@/components/theme-toggle";

const projects = [
  {
    number: "01",
    name: "TalentInfra",
    description:
      "A multi-agent, bias-aware hiring workspace that turns better hiring decisions into a product.",
    stack: ["FastAPI", "Next.js", "PostgreSQL", "Azure"],
    href: "https://github.com/Abhilash-0322/zynd-aickathon",
    live: "https://zynd-hiring-app.azurewebsites.net",
  },
  {
    number: "02",
    name: "SolSniff",
    description:
      "A Solana narrative and idea agent for making sense of noisy market conversations.",
    stack: ["Next.js", "Groq", "Prisma", "Vercel"],
    href: "https://github.com/Abhilash-0322/sol-sniff",
    live: "https://solsniffer.vercel.app/",
  },
  {
    number: "03",
    name: "ChainSentinel AI",
    description:
      "Multi-chain compliance intelligence with vulnerability detection, risk scoring, and live alerts.",
    stack: ["Python", "FastAPI", "MongoDB", "WebSockets"],
    href: "https://github.com/Abhilash-0322/chainsentinel.ai",
  },
  {
    number: "04",
    name: "Quadrant RAG",
    description:
      "A retrieval-augmented knowledge system for custom documents, built for low-latency inference.",
    stack: ["FastAPI", "LangChain", "Vector DBs", "Docker"],
    href: "https://github.com/Abhilash-0322/quadrant-rag",
  },
  {
    number: "05",
    name: "Resume Analyzer",
    description:
      "A free AI tool that turns a resume into focused, actionable feedback in seconds.",
    stack: ["AI", "Next.js", "Product", "Vercel"],
    href: "https://github.com/Abhilash-0322/resume-analyzer",
    live: "https://resume-analyzer-pulse.vercel.app",
  },
  {
    number: "06",
    name: "Zen Heaven",
    description:
      "An AI wellness platform pairing sentiment insights with human-centered safety flows.",
    stack: ["FastAPI", "React", "LangChain", "Twilio"],
    href: "https://github.com/Abhilash-0322/HackHaven2.0",
    live: "https://hack-haven2-0.vercel.app/",
  },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/Abhilash-0322" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abhilash-maurya-b615b9277/",
  },
  { label: "X", href: "https://x.com/abhilash_glitch" },
];

export default function Home() {
  return (
    <div className="shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Abhilash Maurya home">
          <span className="wordmark-mark">AM</span>
          <span>abhilash / portfolio</span>
        </a>
        <div className="header-actions">
          <a className="header-link" href="mailto:abhilash.m.git@gmail.com">
            let&apos;s talk ↗
          </a>
          <ThemeToggle />
        </div>
      </header>

      <main className="main" id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div>
            <p className="eyebrow">/ backend · ai · cloud · fintech</p>
            <h1 id="hero-title">
              Building systems
              <br />
              that <em>ship.</em>
            </h1>
            <p className="hero-intro">
              I&apos;m <strong>Abhilash Maurya</strong> — a backend and AI
              systems developer in Delhi NCR. I build FastAPI services, agent
              workflows, and cloud infrastructure that work beyond the demo.
            </p>
            <div className="hero-links">
              <a className="primary-button" href="#work">
                explore my work <span className="arrow">↘</span>
              </a>
              <a className="ghost-button" href="#contact">
                get in touch
              </a>
            </div>
          </div>

          <aside className="availability-card" aria-label="Current availability">
            <div className="status-line">
              <span className="status-dot" />
              OPEN TO WORK
            </div>
            <h2>Let&apos;s build something useful.</h2>
            <p>
              Available for full-time roles, internships, and freelance
              projects across backend engineering, AI systems, cloud
              infrastructure, and fintech.
            </p>
            <div className="role-tags">
              <span className="role-tag">full-time</span>
              <span className="role-tag">internship</span>
              <span className="role-tag">freelance</span>
            </div>
          </aside>
        </section>

        <section className="section" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <h2 id="work-title">Selected work</h2>
            <span>01 — 06 / things I&apos;ve shipped</span>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <div className="project-top">
                  <span className="project-number">{project.number}</span>
                  <a
                    className="project-link"
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.name} on GitHub`}
                  >
                    ↗
                  </a>
                </div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="project-stack">
                  {project.stack.map((technology) => (
                    <span className="skill" key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="about" aria-labelledby="about-title">
          <div className="section-heading">
            <h2 id="about-title">A little context</h2>
            <span>02 — the person behind the APIs</span>
          </div>
          <div className="about-grid">
            <div>
              <p className="about-copy">
                I care about the layer between an idea and a dependable
                product: the <strong>API design, data model, deployment
                workflow, and thoughtful AI</strong> that make software
                useful.
              </p>
              <p className="about-copy">
                At KIET, I lead AI and full-stack MVPs with Innogeeks Club,
                mentor developers, and coordinate teams of 3–6 through
                hackathon delivery. I&apos;m currently pursuing a B.Tech in
                Information Technology, expected 2027.
              </p>
            </div>
            <div className="skill-groups">
              <div className="skill-group">
                <h3>backend & systems</h3>
                <p>Python · FastAPI · Django · Express.js · SQL · Redis</p>
              </div>
              <div className="skill-group">
                <h3>ai & data</h3>
                <p>LangChain · RAG · AI agents · vector databases · Groq</p>
              </div>
              <div className="skill-group">
                <h3>cloud & delivery</h3>
                <p>AWS · Azure · Docker · Linux · GitHub Actions · Firebase</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="experience-title">
          <div className="section-heading">
            <h2 id="experience-title">Experience</h2>
            <span>03 — where I&apos;ve learned by doing</span>
          </div>
          <div className="experience-grid">
            <div>
              <article className="experience-item">
                <span className="experience-date">NOV 2023 — PRESENT</span>
                <h3>AI/ML Coordinator</h3>
                <h4>Innogeeks Club · KIET</h4>
                <p>
                  Led 5+ AI and full-stack MVPs from architecture to
                  deployment, while mentoring 6+ developers and coordinating
                  agile hackathon teams.
                </p>
              </article>
              <article className="experience-item">
                <span className="experience-date">AUG 2026 · REMOTE</span>
                <h3>AI Engineer Intern</h3>
                <h4>Spearmint Technologies · Part-time</h4>
                <p>
                  Worked across text-to-speech, fine-tuning, web scraping,
                  Hermes-based agents, and AI feature development.
                </p>
              </article>
            </div>
            <div className="skill-groups">
              <div className="skill-group">
                <h3>recognition</h3>
                <p>
                  1st place in a 500+ participant AI-agent track · MLH Solana
                  track winning team · Top 5 in 5+ regional hackathons
                </p>
              </div>
              <div className="skill-group">
                <h3>also</h3>
                <p>
                  Co-inventor of an IoT-AI telemedicine patent (India
                  202511018153A) · AWS Certified Cloud Practitioner · Google AI
                  Essentials
                </p>
              </div>
              <div className="skill-group">
                <h3>education</h3>
                <p>
                  B.Tech Information Technology · KIET Group of Institutions ·
                  Expected 2027
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div>
            <p className="section-kicker">/ say hello</p>
            <h2>
              Have a problem worth
              <br />
              <em>building for?</em>
            </h2>
          </div>
          <div className="contact-details">
            <a className="text-link" href="mailto:abhilash.m.git@gmail.com">
              abhilash.m.git@gmail.com
            </a>
            <br />
            Ghaziabad · Delhi NCR · India
            <br />
            <a className="text-link" href="tel:+917880764235">
              +91 7880764235
            </a>
          </div>
        </section>

        <footer className="site-footer">
          <span>© 2026 Abhilash Maurya</span>
          <div className="footer-links">
            {socialLinks.map((link) => (
              <a href={link.href} key={link.label} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </footer>
      </main>
    </div>
  );
}
