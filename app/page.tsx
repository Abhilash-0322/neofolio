"use client";

import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Github,
  Linkedin,
  Moon,
  Sun,
  Terminal,
} from "lucide-react";

const projects = [
  {
    number: "01 / Featured",
    kind: "AI + hiring",
    title: "TalentInfra",
    description:
      "A multi-agent hiring workspace designed to make candidate evaluation more structured, transparent, and bias-aware.",
    tags: ["FastAPI", "Next.js", "PostgreSQL", "Azure"],
    link: "https://zynd-hiring-app.azurewebsites.net",
    featured: true,
    icon: BriefcaseBusiness,
  },
  {
    number: "02",
    kind: "On-chain intelligence",
    title: "SolSniff",
    description:
      "A narrative and idea agent for the Solana ecosystem, turning noisy signals into clearer, useful starting points.",
    tags: ["Next.js", "Groq", "Prisma", "Vercel"],
    link: "https://solsniffer.vercel.app/",
    icon: Code2,
  },
  {
    number: "03",
    kind: "Security systems",
    title: "ChainSentinel AI",
    description:
      "Multi-chain smart contract risk and compliance tooling for teams that need an extra layer of context before shipping.",
    tags: ["FastAPI", "Next.js", "MongoDB"],
    link: "https://github.com/Abhilash-0322/chainsentinel.ai",
    icon: Cloud,
  },
  {
    number: "04",
    kind: "Knowledge systems",
    title: "Quadrant RAG",
    description:
      "A deployable retrieval-augmented generation stack for asking better questions of custom knowledge bases.",
    tags: ["Python", "LangChain", "Docker", "Vector DB"],
    link: "https://github.com/Abhilash-0322/quadrant-rag",
    icon: Terminal,
  },
];

const skills = [
  ["Backend", "Python · FastAPI · Django · Express.js"],
  ["AI systems", "LangChain · RAG · Agents · Fine-tuning"],
  ["Data", "PostgreSQL · MongoDB · Redis · Vector DBs"],
  ["Cloud & delivery", "AWS · Azure · Docker · GitHub Actions"],
];

export default function Home() {
  const [night, setNight] = useState(false);

  useEffect(() => {
    setNight(localStorage.getItem("theme") === "night");
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = night ? "night" : "day";
    localStorage.setItem("theme", night ? "night" : "day");
  }, [night]);

  return (
    <main className="site-shell">
      <header className="container topbar">
        <a className="brand" href="#">
          <span className="brand-mark">AM</span>
          <span>Abhilash Maurya</span>
        </a>
        <nav className="nav" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <button
            className="theme-toggle"
            aria-label={`Switch to ${night ? "day" : "night"} theme`}
            onClick={() => setNight((current) => !current)}
          >
            {night ? <Sun size={14} /> : <Moon size={14} />}
            {night ? "Day" : "Night"}
          </button>
        </nav>
      </header>

      <section className="container hero">
        <div>
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            Open to work · Delhi NCR / Remote
          </div>
          <h1 className="display">
            Backend
            <br />
            <em>&amp; AI systems</em>
            <br />
            developer.
          </h1>
          <p className="hero-copy">
            I build reliable APIs, cloud infrastructure, and AI workflows that
            move from a promising idea to something people can actually use.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              See selected work <ArrowDownRight size={16} />
            </a>
            <a className="button button-quiet" href="mailto:abhilash.m.git@gmail.com">
              Let&apos;s talk <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <div className="hero-aside" aria-label="Profile summary">
          <div className="signal-card">
            <div className="signal-top mono">
              <span>Current signal</span>
              <span>2026 / 08</span>
            </div>
            <h2>Systems with a point of view.</h2>
            <p>
              Production-minded engineering, calm interfaces, and a bias
              toward shipping the useful version first.
            </p>
            <div className="signal-graph" aria-hidden="true">
              {Array.from({ length: 8 }, (_, index) => (
                <i key={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-border" id="work">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                Selected work
              </div>
              <h2 className="display">
                Things I&apos;ve
                <br />
                shipped.
              </h2>
            </div>
            <p>
              A few systems, products, and experiments where backend depth met
              a real user problem.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <article
                  className={`project-card ${project.featured ? "featured" : ""}`}
                  key={project.title}
                >
                  <div>
                    <div className="project-top">
                      <span className="project-number mono">{project.number}</span>
                      <span className="project-kind mono">{project.kind}</span>
                    </div>
                    <div className="project-icon">
                      <Icon size={21} strokeWidth={1.7} />
                    </div>
                    <h3>{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                  </div>
                  <div className="project-bottom">
                    <div className="tags">
                      {project.tags.map((tag) => (
                        <span className="tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      className="arrow-link"
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View project <ArrowUpRight size={14} />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-border" id="about">
        <div className="container about-grid">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              The short version
            </div>
            <h2 className="display">
              Curious by default.
              <br />
              <span>Useful on purpose.</span>
            </h2>
            <p className="about-copy">
              I&apos;m Abhilash, a B.Tech IT student and backend / AI systems
              developer. I enjoy the messy middle: shaping an idea, choosing
              the right architecture, and getting it into the hands of a user.
              Currently learning in public from Delhi NCR, India.
            </p>
          </div>
          <div className="principles">
            <div className="principle">
              <span className="principle-number">01</span>
              <div>
                <h3>Make it dependable</h3>
                <p>Good systems earn trust in the details: APIs, logs, and graceful failure.</p>
              </div>
            </div>
            <div className="principle">
              <span className="principle-number">02</span>
              <div>
                <h3>Keep the signal high</h3>
                <p>Less ceremony, clearer interfaces, and context that helps people decide.</p>
              </div>
            </div>
            <div className="principle">
              <span className="principle-number">03</span>
              <div>
                <h3>Share what works</h3>
                <p>Mentoring, open source, and shipping in teams make the work compound.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-border">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                Experience
              </div>
              <h2 className="display">Where I&apos;ve been useful.</h2>
            </div>
          </div>
          <div className="experience-list">
            <div className="experience-row">
              <div className="experience-time">AUG 2026 — NOW</div>
              <div>
                <h3>AI Engineer Intern · Spearmint Technologies</h3>
                <p>Voice and agent features, TTS pipelines, fine-tuning, data collection, and Hermes-based agents.</p>
              </div>
              <div className="experience-type">PART-TIME<br />REMOTE</div>
            </div>
            <div className="experience-row">
              <div className="experience-time">NOV 2023 — NOW</div>
              <div>
                <h3>AI/ML Coordinator · Innogeeks Club, KIET</h3>
                <p>Led 5+ AI and full-stack MVPs, mentored 6+ developers, and coordinated agile hackathon teams.</p>
              </div>
              <div className="experience-type">COMMUNITY<br />LEADERSHIP</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-border">
        <div className="container skills-wrap">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              Working toolkit
            </div>
            <h2 className="display">The tools behind the work.</h2>
          </div>
          <div className="skill-groups">
            {skills.map(([title, list]) => (
              <div className="skill-group" key={title}>
                <h3>{title}</h3>
                <p>{list}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="container contact-content">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            Have a good problem?
          </div>
          <h2 className="display">Let&apos;s make it real.</h2>
          <p>
            I&apos;m open to backend, AI systems, cloud, and product engineering
            roles. Tell me what you&apos;re building.
          </p>
          <a className="button button-primary" href="mailto:abhilash.m.git@gmail.com">
            abhilash.m.git@gmail.com <ArrowUpRight size={16} />
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-row">
          <span>© 2026 Abhilash Maurya · Built with intent.</span>
          <div className="footer-links">
            <a href="https://github.com/Abhilash-0322" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={15} />
            </a>
            <a href="https://www.linkedin.com/in/abhilash-maurya-b615b9277/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={15} />
            </a>
            <a href="https://x.com/abhilash_glitch" target="_blank" rel="noreferrer" aria-label="X">
              𝕏
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
