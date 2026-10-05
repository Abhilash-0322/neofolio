"use client";

import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const projects = [
  {
    number: "01 / 06",
    name: "TalentInfra",
    description: "A bias-aware hiring system that turns a panel of specialized agents into a fairer candidate signal.",
    tags: ["FastAPI", "Next.js", "PostgreSQL", "Azure"],
    href: "https://zynd-hiring-app.azurewebsites.net",
  },
  {
    number: "02 / 06",
    name: "SolSniff",
    description: "A narrative and idea agent for the Solana ecosystem, built for finding signal in fast-moving conversations.",
    tags: ["Next.js", "Groq", "Prisma", "Vercel"],
    href: "https://solsniffer.vercel.app/",
  },
  {
    number: "03 / 06",
    name: "ChainSentinel AI",
    description: "Multi-chain smart contract risk and compliance tooling that makes technical risk easier to act on.",
    tags: ["FastAPI", "Next.js", "MongoDB"],
    href: "https://github.com/Abhilash-0322/chainsentinel.ai",
  },
  {
    number: "04 / 06",
    name: "Quadrant RAG",
    description: "A practical retrieval pipeline for custom knowledge bases, from ingestion to grounded answers.",
    tags: ["LangChain", "Vector DB", "Docker"],
    href: "https://github.com/Abhilash-0322/quadrant-rag",
  },
  {
    number: "05 / 06",
    name: "Resume Analyzer",
    description: "An accessible AI feedback tool that helps candidates turn a resume into a clearer story.",
    tags: ["Python", "AI", "Web App"],
    href: "https://resume-analyzer-pulse.vercel.app",
  },
  {
    number: "06 / 06",
    name: "Zen Heaven",
    description: "A wellness companion combining sentiment, conversational AI, and safety-aware Twilio flows.",
    tags: ["FastAPI", "React", "LangChain"],
    href: "https://hack-haven2-0.vercel.app/",
  },
];

const skills = [
  ["Build with", "Python · TypeScript · JavaScript · C++ · SQL"],
  ["Ship with", "FastAPI · Django · Next.js · Express · React"],
  ["Store in", "PostgreSQL · MongoDB · MySQL · Redis · Firebase"],
  ["Run on", "AWS · Azure · Docker · Linux · GitHub Actions"],
];

export default function Home() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(savedTheme ? savedTheme === "dark" : prefersDark);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    window.localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <div className="site-shell">
      <nav className="nav" aria-label="Main navigation">
        <div className="container nav-inner">
          <a className="brand" href="#top" aria-label="Abhilash Maurya home">
            <span className="brand-mark">A</span>
            <span>Abhilash Maurya</span>
          </a>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <span className="availability">Open to work</span>
            <button
              className="theme-toggle"
              type="button"
              aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
              onClick={() => setDark((current) => !current)}
            >
              {dark ? <Sun size={15} strokeWidth={1.7} /> : <Moon size={15} strokeWidth={1.7} />}
            </button>
          </div>
        </div>
      </nav>

      <main id="top">
        <section className="container hero">
          <div>
            <p className="eyebrow">Backend · AI systems · Cloud</p>
            <h1>
              I build the systems <em>behind</em> ambitious ideas.
            </h1>
            <p className="hero-copy">
              I&apos;m <strong>Abhilash Maurya</strong>, a backend and AI systems developer from Delhi NCR.
              I turn complex product ideas into calm, reliable software — from the first API to the final deployment.
            </p>
            <div className="hero-actions">
              <a className="button" href="#work">
                See selected work <ArrowDownRight size={15} />
              </a>
              <a className="button ghost" href="mailto:abhilash.m.git@gmail.com">
                Start a conversation <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
          <aside className="hero-note">
            <p>Currently based in</p>
            <strong>Delhi NCR, India</strong>
            <p style={{ marginTop: 22 }}>Available for</p>
            <strong>Backend & AI roles</strong>
          </aside>
        </section>

        <section className="container section" id="work">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 className="section-title">Things I&apos;ve shipped.</h2>
            </div>
            <p className="section-intro">
              Production-minded experiments across AI, fintech, infrastructure, and the spaces in between.
            </p>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <a className="project-card" href={project.href} key={project.name} target="_blank" rel="noreferrer">
                <div className="project-index">
                  <span>{project.number}</span>
                  <span className="project-arrow">↗</span>
                </div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="tags">
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="container section" id="about">
          <div className="about-layout">
            <div>
              <p className="eyebrow">A little context</p>
              <p className="about-lede">
                Thoughtful engineering for software that has somewhere to go.
              </p>
              <div className="facts">
                <div className="fact">
                  <span className="fact-label">Education</span>
                  <strong>B.Tech IT · KIET</strong>
                </div>
                <div className="fact">
                  <span className="fact-label">Expected</span>
                  <strong>2027</strong>
                </div>
                <div className="fact">
                  <span className="fact-label">Certification</span>
                  <strong>AWS Cloud Practitioner</strong>
                </div>
                <div className="fact">
                  <span className="fact-label">Also</span>
                  <strong>AI Essentials · Google</strong>
                </div>
              </div>
            </div>
            <div className="about-body">
              <p>
                I care about the layer where a good idea becomes a dependable product. My work lives in APIs,
                data models, agent workflows, and the infrastructure that lets them keep working after the demo.
              </p>
              <p>
                At Innogeeks Club, I lead AI and full-stack MVPs, mentor developers, and help teams move from
                architecture to a shipped prototype. I&apos;ve also worked on voice features and agent development
                as an AI Engineer Intern at Spearmint Technologies.
              </p>
              <p>
                Away from the editor, I&apos;m usually learning in public, contributing to open source, or finding
                a better way to explain a complicated system.
              </p>
            </div>
          </div>
        </section>

        <section className="container section" id="experience">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Where I&apos;ve been</p>
              <h2 className="section-title">The short version.</h2>
            </div>
          </div>
          <div className="experience-list">
            <article className="experience-item">
              <span className="experience-date">Nov 2023 — now</span>
              <div>
                <h3>AI / ML Coordinator</h3>
                <p>Led 5+ AI and full-stack MVPs, mentored 6+ developers, and coordinated small teams through architecture, APIs, and deployment.</p>
              </div>
              <span className="experience-company">Innogeeks Club · KIET</span>
            </article>
            <article className="experience-item">
              <span className="experience-date">Aug 2026</span>
              <div>
                <h3>AI Engineer Intern</h3>
                <p>Built voice and agent features, explored fine-tuning workflows, and contributed to data collection and Hermes-based agents.</p>
              </div>
              <span className="experience-company">Spearmint Technologies</span>
            </article>
          </div>
        </section>

        <section className="container section" id="skills">
          <div className="skills-layout">
            <div>
              <p className="eyebrow">The toolkit</p>
              <h2 className="section-title">Good tools, better judgment.</h2>
            </div>
            <div className="skills-list">
              {skills.map(([label, value]) => (
                <div className="skill-group" key={label}>
                  <h3>{label}</h3>
                  <p>{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container contact-section" id="contact">
          <div>
            <p className="eyebrow">Have a project in mind?</p>
            <h2 className="section-title">Let&apos;s make it work in the real world.</h2>
          </div>
          <div className="contact-detail">
            <p>Open to backend, AI systems, and cloud-focused roles, as well as thoughtful freelance collaborations.</p>
            <a className="email-link" href="mailto:abhilash.m.git@gmail.com">abhilash.m.git@gmail.com</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Abhilash Maurya</span>
          <div className="socials">
            <a href="https://github.com/Abhilash-0322" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={15} /></a>
            <a href="https://www.linkedin.com/in/abhilash-maurya-b615b9277/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={15} /></a>
            <a href="mailto:abhilash.m.git@gmail.com" aria-label="Email"><Mail size={15} /></a>
          </div>
          <span>Built with intention.</span>
        </div>
      </footer>
    </div>
  );
}
