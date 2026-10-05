"use client";

import { useEffect, useState } from "react";

type IconProps = { size?: number };

const ArrowUpRight = ({ size = 15 }: IconProps) => (
  <svg aria-hidden="true" fill="none" height={size} viewBox="0 0 16 16" width={size}>
    <path d="M4 12 12 4M5 4h7v7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  </svg>
);

const ArrowDown = ({ size = 15 }: IconProps) => (
  <svg aria-hidden="true" fill="none" height={size} viewBox="0 0 16 16" width={size}>
    <path d="M8 2v11M3.5 8.5 8 13l4.5-4.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  </svg>
);

const Github = ({ size = 18 }: IconProps) => (
  <svg aria-hidden="true" fill="none" height={size} viewBox="0 0 24 24" width={size}>
    <path d="M9 19c-4.2 1.3-4.2-2.1-5.9-2.5M14.9 21v-3.3c0-1 .1-1.4-.5-2 2.9-.3 5.9-1.4 5.9-6.1a4.8 4.8 0 0 0-1.3-3.4 4.5 4.5 0 0 0-.1-3.4s-1.1-.4-3.5 1.3a12.2 12.2 0 0 0-6.4 0C6.6 2.4 5.5 2.8 5.5 2.8a4.5 4.5 0 0 0-.1 3.4A4.8 4.8 0 0 0 4.1 9.6c0 4.7 3 5.8 5.9 6.1-.6.5-.6 1-.6 2V21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  </svg>
);

const Sun = ({ size = 16 }: IconProps) => (
  <svg aria-hidden="true" fill="none" height={size} viewBox="0 0 24 24" width={size}>
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
  </svg>
);

const Moon = ({ size = 16 }: IconProps) => (
  <svg aria-hidden="true" fill="none" height={size} viewBox="0 0 24 24" width={size}>
    <path d="M20.2 15.3A8.5 8.5 0 0 1 8.7 3.8 8.5 8.5 0 1 0 20.2 15.3Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
  </svg>
);

const NetworkIcon = () => (
  <svg aria-hidden="true" fill="none" height="20" viewBox="0 0 24 24" width="20">
    <circle cx="5" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="19" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="19" cy="18" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="m7.3 11 9.4-4M7.3 13l9.4 4" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const ShieldIcon = () => (
  <svg aria-hidden="true" fill="none" height="20" viewBox="0 0 24 24" width="20">
    <path d="M12 3 20 6v5.5c0 4.8-3.2 8-8 9.5-4.8-1.5-8-4.7-8-9.5V6l8-3Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" />
    <path d="m8.5 12 2.2 2.2 4.8-5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  </svg>
);

const SearchIcon = () => (
  <svg aria-hidden="true" fill="none" height="20" viewBox="0 0 24 24" width="20">
    <circle cx="10.7" cy="10.7" r="6.2" stroke="currentColor" strokeWidth="1.5" />
    <path d="m15.3 15.3 5 5" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
  </svg>
);

const projects = [
  {
    name: "TalentInfra",
    type: "Flagship build · 2026",
    description: "A bias-aware hiring system where multi-agent workflows turn messy candidate data into explainable decisions.",
    tags: ["FastAPI", "Next.js", "PostgreSQL", "Azure"],
    link: "https://zynd-hiring-app.azurewebsites.net",
    icon: <NetworkIcon />,
  },
  {
    name: "SolSniff",
    type: "Product experiment",
    description: "An AI agent for finding and shaping new Solana narratives.",
    tags: ["Next.js", "Groq", "Prisma"],
    link: "https://solsniffer.vercel.app/",
    icon: <SearchIcon />,
  },
  {
    name: "ChainSentinel AI",
    type: "Risk & compliance",
    description: "Multi-chain smart contract risk intelligence for safer on-chain decisions.",
    tags: ["FastAPI", "MongoDB", "AI"],
    link: "https://github.com/Abhilash-0322/chainsentinel.ai",
    icon: <ShieldIcon />,
  },
];

const stack = ["Python", "FastAPI", "Next.js", "PostgreSQL", "Docker", "AWS", "Azure", "LangChain", "Redis", "GitHub Actions"];

export default function Home() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const shouldUseLight = savedTheme === "light";
    setIsLight(shouldUseLight);
    document.documentElement.classList.toggle("light", shouldUseLight);
  }, []);

  const toggleTheme = () => {
    const nextIsLight = !isLight;
    setIsLight(nextIsLight);
    document.documentElement.classList.toggle("light", nextIsLight);
    window.localStorage.setItem("theme", nextIsLight ? "light" : "dark");
  };

  return (
    <main>
      <div className="site-shell">
        <header className="topbar">
          <a className="brand" href="#" aria-label="Abhilash Maurya home">
            <span className="brand-mark">AM</span>
            <span>Abhilash Maurya</span>
          </a>
          <nav className="nav" aria-label="Main navigation">
            <a href="#work">Selected work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="top-actions">
            <span className="availability">OPEN TO WORK</span>
            <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={`Switch to ${isLight ? "dark" : "light"} theme`}>
              {isLight ? <Moon /> : <Sun />}
            </button>
          </div>
        </header>

        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-grid">
            <div>
              <div className="eyebrow"><span className="eyebrow-line" /> Backend · AI systems · Cloud</div>
              <h1 id="hero-title">Software with a <span>signal.</span></h1>
              <p className="hero-copy">
                I&apos;m Abhilash, a backend and AI systems developer building reliable products that move from an interesting idea to a useful, shipped system.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#work">Explore my work <ArrowDown /></a>
                <a className="button button-ghost" href="mailto:abhilash.m.git@gmail.com">Let&apos;s talk <ArrowUpRight /></a>
              </div>
            </div>
            <div className="hero-aside">
              <div className="harbor-card">
                <div className="card-topline"><span>System / 001</span><span>Live signal</span></div>
                <div className="signal-graph" aria-hidden="true">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((bar) => <span className="bar" key={bar} />)}
                </div>
                <div className="card-caption">
                  <strong>Built for the next shore.</strong>
                  From APIs and agents to the infrastructure beneath them — I care about the details that make products hold up.
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="ticker" aria-label="Areas of focus">
          {["APIs that last", "Agents with context", "Cloud without drama", "Open source by default"].map((item) => <span className="ticker-item" key={item}>{item}</span>)}
        </div>

        <section className="section" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <div><div className="section-label">01 / Selected work</div><h2 id="work-title">Things I&apos;ve<br />helped ship.</h2></div>
            <p className="section-intro">A few systems, experiments, and collaborations from the last stretch of the journey.</p>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.name}>
                <div className="project-meta"><span className="project-index">0{index + 1}</span><span>{project.type}</span></div>
                <div className="project-icon">{project.icon}</div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="project-bottom">
                  <div className="tags">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
                  <a className="project-link" href={project.link} target="_blank" rel="noreferrer">View <ArrowUpRight size={13} /></a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="split-section" id="about" aria-label="Experience and toolkit">
          <div>
            <div className="section-label">02 / The route so far</div>
            <h2>A little<br />context.</h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-date">AUG 2026 — NOW</div>
                <div><h3>AI Engineer Intern <span>· Spearmint Technologies</span></h3><p>Building voice and agent features, fine-tuning models, and turning data collection into better product behavior.</p></div>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">NOV 2023 — NOW</div>
                <div><h3>AI/ML Coordinator <span>· Innogeeks Club, KIET</span></h3><p>Led 5+ AI and full-stack MVPs while mentoring developers and coordinating teams through fast hackathon builds.</p></div>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">2023 — 2027</div>
                <div><h3>B.Tech Information Technology <span>· KIET Group of Institutions</span></h3><p>Learning in public, building often, and studying the systems that make software dependable.</p></div>
              </div>
            </div>
          </div>
          <div>
            <div className="section-label">03 / The toolkit</div>
            <h2>Useful<br />by design.</h2>
            <div className="stack-grid">
              {stack.map((item) => <div className="stack-item" key={item}><span className="stack-dot" />{item}</div>)}
            </div>
            <div className="recognition">
              <strong>Also on the chart</strong>
              <p>AWS Certified Cloud Practitioner · patent co-inventor · MLH Solana track winner · open-source contributor</p>
            </div>
          </div>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <div className="section-label">04 / Make contact</div>
          <h2 id="contact-title">Have a system<br />in mind? <span>Let&apos;s build it.</span></h2>
          <div className="contact-details">
            <a className="contact-email" href="mailto:abhilash.m.git@gmail.com"><small>Best way to reach me</small>abhilash.m.git@gmail.com</a>
            <div className="socials">
              <a href="https://github.com/Abhilash-0322" target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a>
              <a href="https://www.linkedin.com/in/abhilash-maurya-b615b9277/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href="https://x.com/abhilash_glitch" target="_blank" rel="noreferrer">X ↗</a>
            </div>
          </div>
        </section>

        <footer className="footer">
          <p>© 2026 Abhilash Maurya. Made with intent.</p>
          <p>Delhi NCR <span>·</span> India</p>
        </footer>
      </div>
    </main>
  );
}
