import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Code2,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
  Terminal,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const projects = [
  {
    number: "01",
    name: "TalentInfra",
    type: "AI / Hiring infrastructure",
    description:
      "A bias-aware multi-agent hiring workspace that makes candidate signals more useful, explainable, and human.",
    stack: ["FastAPI", "Next.js", "PostgreSQL", "Groq", "Azure"],
    accent: "project-featured",
    github: "https://github.com/Abhilash-0322/zynd-aickathon",
    live: "https://zynd-hiring-app.azurewebsites.net",
  },
  {
    number: "02",
    name: "SolSniff",
    type: "Product / Intelligence",
    description:
      "A narrative discovery agent for the Solana ecosystem, built to turn noisy market ideas into a clear starting point.",
    stack: ["Next.js", "Groq", "Prisma", "Vercel"],
    accent: "project-moss",
    github: "https://github.com/Abhilash-0322/sol-sniff",
    live: "https://solsniffer.vercel.app/",
  },
  {
    number: "03",
    name: "ChainSentinel AI",
    type: "Security / Compliance",
    description:
      "Multi-chain smart contract risk intelligence for teams that need a sharper view before they ship or sign.",
    stack: ["FastAPI", "Next.js", "MongoDB", "AI"],
    accent: "project-amber",
    github: "https://github.com/Abhilash-0322/chainsentinel.ai",
  },
];

const skills = [
  "Python",
  "FastAPI",
  "Next.js",
  "PostgreSQL",
  "Docker",
  "AWS",
  "Azure",
  "LangChain",
  "RAG",
  "AI agents",
  "GitHub Actions",
  "Linux",
];

const experience = [
  {
    year: "2026",
    role: "AI Engineer Intern",
    company: "Spearmint Technologies",
    detail:
      "Building voice and agent features across TTS pipelines, model fine-tuning, and web-scraped datasets.",
  },
  {
    year: "2023—now",
    role: "AI/ML Coordinator",
    company: "Innogeeks Club · KIET",
    detail:
      "Leading 5+ AI and full-stack MVPs, mentoring developers, and turning hackathon constraints into shipped systems.",
  },
];

export default function Home() {
  return (
    <main>
      <nav className="site-nav" aria-label="Main navigation">
        <a className="wordmark" href="#top" aria-label="Abhilash Maurya home">
          <span className="wordmark-mark">AM</span>
          <span className="wordmark-name">Abhilash Maurya</span>
        </a>
        <div className="nav-links">
          <a href="#work">Selected work</a>
          <a href="#story">Story</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="nav-actions">
          <span className="availability-pill">
            <span className="status-dot" />
            Open to work
          </span>
          <ThemeToggle />
        </div>
      </nav>

      <section className="hero section-shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-line" />
            Backend / AI systems developer
          </p>
          <h1>
            Systems with
            <span className="headline-accent"> roots.</span>
            <br />
            Products with
            <span className="headline-accent"> reach.</span>
          </h1>
          <p className="hero-intro">
            I&apos;m Abhilash — I build dependable backend and AI systems for
            ideas that deserve to grow beyond the demo.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              Explore the work <ArrowDownRight size={17} />
            </a>
            <a className="text-link" href="mailto:abhilash.m.git@gmail.com">
              Start a conversation <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-label="System availability overview">
          <div className="canopy-orbit orbit-one" />
          <div className="canopy-orbit orbit-two" />
          <div className="canopy-orbit orbit-three" />
          <div className="hero-tree">
            <div className="tree-crown">
              <span className="leaf leaf-a" />
              <span className="leaf leaf-b" />
              <span className="leaf leaf-c" />
              <span className="leaf leaf-d" />
              <span className="leaf leaf-e" />
            </div>
            <div className="tree-trunk" />
          </div>
          <div className="hero-node node-top">
            <span className="node-label">Now</span>
            <strong>Building</strong>
            <span>at the edge of useful</span>
          </div>
          <div className="hero-node node-bottom">
            <span className="node-label">Based in</span>
            <strong>Delhi NCR</strong>
            <span>India · UTC +5:30</span>
          </div>
          <div className="hero-coordinates">
            <span>28° 40&apos; N</span>
            <span className="coordinate-line" />
            <span>77° 13&apos; E</span>
          </div>
        </div>
      </section>

      <section className="signal-strip" aria-label="Highlights">
        <div className="section-shell signal-grid">
          <div className="signal-item">
            <span className="signal-value">06</span>
            <span className="signal-label">Systems shipped</span>
          </div>
          <div className="signal-item">
            <span className="signal-value">02</span>
            <span className="signal-label">Cloud environments</span>
          </div>
          <div className="signal-item">
            <span className="signal-value">01</span>
            <span className="signal-label">Patent co-invented</span>
          </div>
          <div className="signal-note">
            <Sparkles size={15} />
            <span>Curious by default. Precise by practice.</span>
          </div>
        </div>
      </section>

      <section className="section-shell work-section" id="work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-line" />
              Selected work
            </p>
            <h2>Ideas, given infrastructure.</h2>
          </div>
          <p className="heading-aside">
            A small sample of things I&apos;ve designed, built, deployed, and
            learned from.
          </p>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className={`project-card ${project.accent}`} key={project.name}>
              <div className="project-visual">
                <div className="project-grid" />
                <span className="project-number">{project.number}</span>
                <div className="project-signal">
                  <span className="signal-ring" />
                  <span className="signal-ring signal-ring-two" />
                  <span className="signal-core" />
                </div>
                <span className="project-kind">{project.type}</span>
              </div>
              <div className="project-body">
                <div className="project-title-row">
                  <div>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                  </div>
                  <a
                    className="round-link"
                    href={project.live ?? project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.name}`}
                  >
                    <ArrowUpRight size={19} />
                  </a>
                </div>
                <div className="tag-list">
                  {project.stack.map((item) => (
                    <span className="tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
                <a
                  className="project-source"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  View on GitHub <ExternalLink size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="work-footnote">
          <Terminal size={17} />
          <span>More experiments, open source, and side quests</span>
          <a href="https://github.com/Abhilash-0322" target="_blank" rel="noreferrer">
            github.com/Abhilash-0322 <ArrowUpRight size={15} />
          </a>
        </div>
      </section>

      <section className="story-section" id="story">
        <div className="section-shell story-grid">
          <div className="story-intro">
            <p className="eyebrow">
              <span className="eyebrow-line" />
              The throughline
            </p>
            <h2>Make the complex feel considered.</h2>
            <p>
              I like the layer where product ambition meets technical
              reality: the APIs, decisions, data flows, and small details that
              make a system trustworthy.
            </p>
            <p>
              From agent workflows to cloud deployments, I care about building
              things that stay useful after the launch post.
            </p>
          </div>
          <div className="story-detail">
            <div className="experience-list">
              {experience.map((item) => (
                <div className="experience-item" key={item.company}>
                  <span className="experience-year">{item.year}</span>
                  <div>
                    <h3>{item.role}</h3>
                    <p className="experience-company">{item.company}</p>
                    <p>{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="credentials">
              <div className="credential">
                <span className="credential-icon">AWS</span>
                <span>AWS Certified<br />Cloud Practitioner</span>
              </div>
              <div className="credential">
                <span className="credential-icon">AI</span>
                <span>Google AI<br />Essentials</span>
              </div>
              <div className="credential">
                <span className="credential-icon">IN</span>
                <span>Patent co-inventor<br />India · 2025</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell toolkit-section">
        <div className="section-heading compact-heading">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-line" />
              Toolkit
            </p>
            <h2>Tools for the terrain.</h2>
          </div>
          <p className="heading-aside">
            The right abstraction is the one that helps the work move forward.
          </p>
        </div>
        <div className="skills-wrap">
          {skills.map((skill) => (
            <span className="skill-pill" key={skill}>
              <Check size={14} />
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-shell contact-inner">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-line" />
              Next chapter
            </p>
            <h2>Have a good problem?</h2>
            <p className="contact-copy">
              I&apos;m open to backend, AI systems, cloud, and product-minded
              engineering roles. Tell me what you&apos;re building.
            </p>
          </div>
          <a className="contact-button" href="mailto:abhilash.m.git@gmail.com">
            <span>abhilash.m.git@gmail.com</span>
            <ArrowUpRight size={22} />
          </a>
        </div>
      </section>

      <footer className="site-footer section-shell">
        <div className="footer-location">
          <MapPin size={15} />
          <span>Delhi NCR, India</span>
        </div>
        <div className="footer-links">
          <a href="mailto:abhilash.m.git@gmail.com" aria-label="Email Abhilash">
            <Mail size={16} />
          </a>
          <a
            href="https://github.com/Abhilash-0322"
            target="_blank"
            rel="noreferrer"
            aria-label="Abhilash on GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/abhilash-maurya-b615b9277/"
            target="_blank"
            rel="noreferrer"
            aria-label="Abhilash on LinkedIn"
          >
            <Linkedin size={16} />
          </a>
        </div>
        <span className="footer-copyright">© {new Date().getFullYear()} AM</span>
      </footer>
    </main>
  );
}
