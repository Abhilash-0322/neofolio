"use client";

import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Cloud,
  Code2,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Network,
  Orbit,
  Phone,
  ShieldCheck,
  Sparkles,
  Sun,
  Terminal,
  X,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "TalentInfra",
    description:
      "A bias-aware hiring workspace where specialized agents turn candidate signals into explainable, equitable recommendations.",
    tags: ["FastAPI", "Next.js", "PostgreSQL", "Azure"],
    type: "AI systems",
    icon: Network,
    color: "blue",
    github: "https://github.com/Abhilash-0322/zynd-aickathon",
    live: "https://zynd-hiring-app.azurewebsites.net",
  },
  {
    number: "02",
    title: "SolSniff",
    description:
      "A narrative intelligence agent for the Solana ecosystem—helping builders explore ideas, signals, and what might come next.",
    tags: ["Next.js", "Groq", "Prisma", "Vercel"],
    type: "Product",
    icon: Orbit,
    color: "violet",
    github: "https://github.com/Abhilash-0322/sol-sniff",
    live: "https://solsniffer.vercel.app/",
  },
  {
    number: "03",
    title: "ChainSentinel AI",
    description:
      "Multi-chain contract risk and compliance intelligence, designed to make on-chain decisions more legible and less reactive.",
    tags: ["FastAPI", "Next.js", "MongoDB"],
    type: "Fintech / Web3",
    icon: ShieldCheck,
    color: "orange",
    github: "https://github.com/Abhilash-0322/chainsentinel.ai",
    live: undefined,
  },
];

const skills = [
  { label: "Python", icon: Terminal },
  { label: "FastAPI", icon: Code2 },
  { label: "AI agents", icon: Sparkles },
  { label: "AWS / Azure", icon: Cloud },
  { label: "Docker", icon: BriefcaseBusiness },
  { label: "PostgreSQL", icon: Network },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/Abhilash-0322", icon: Github },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abhilash-maurya-b615b9277/",
    icon: Linkedin,
  },
  { label: "Email", href: "mailto:abhilash.m.git@gmail.com", icon: Mail },
];

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDark = storedTheme ? storedTheme === "dark" : prefersDark;
    setDarkMode(shouldUseDark);
    document.documentElement.classList.toggle("dark", shouldUseDark);
  }, []);

  function toggleTheme() {
    const nextTheme = !darkMode;
    setDarkMode(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme);
    window.localStorage.setItem("theme", nextTheme ? "dark" : "light");
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <main>
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#top" aria-label="Abhilash Maurya home">
            <span className="brand-mark">AM</span>
            <span>abhilash.maurya</span>
          </a>

          <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
            <a href="#work" onClick={closeMenu}>Work</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#experience" onClick={closeMenu}>Experience</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </nav>

          <div className="nav-actions">
            <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label="Toggle color theme">
              {darkMode ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <a className="nav-cta" href="#contact">Let&apos;s talk <ArrowUpRight size={16} /></a>
            <button
              className="menu-toggle"
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
      </header>

      <section className="hero container" id="top">
        <div className="hero-copy">
          <div className="availability"><span className="pulse-dot" /> Open to work</div>
          <p className="eyebrow">Backend · AI systems · Cloud</p>
          <h1>I build the<br /><span>behind-the-scenes</span><br />of what&apos;s next.</h1>
          <p className="hero-intro">
            I&apos;m Abhilash, a backend and AI systems developer turning ambitious ideas into
            reliable, deployable products.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">See selected work <ArrowUpRight size={17} /></a>
            <a className="button button-quiet" href="mailto:abhilash.m.git@gmail.com">Get in touch <Mail size={17} /></a>
          </div>
          <div className="hero-footnote"><span className="line" /> Based in Delhi NCR, India</div>
        </div>

        <div className="hero-visual" aria-label="Abhilash Maurya profile illustration">
          <div className="visual-grid" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="visual-card card-top">
            <Cloud size={17} /><span>cloud-native</span><i />
          </div>
          <div className="visual-card card-bottom">
            <Sparkles size={17} /><span>built with intent</span>
          </div>
          <div className="portrait">
            <span className="portrait-glow" />
            <div className="portrait-head">AM</div>
            <span className="portrait-label">ABHILASH<br /><small>MAURYA</small></span>
          </div>
          <div className="visual-caption"><span>01</span><span>systems that<br />make sense</span></div>
        </div>
      </section>

      <section className="logo-strip" aria-label="Areas of expertise">
        <div className="container logo-items">
          <span>Currently exploring</span>
          <span className="logo-pill"><Cloud size={16} /> cloud infrastructure</span>
          <span className="logo-pill"><Sparkles size={16} /> applied AI</span>
          <span className="logo-pill"><Code2 size={16} /> developer tools</span>
          <span className="logo-pill"><ShieldCheck size={16} /> fintech systems</span>
        </div>
      </section>

      <section className="section container" id="work">
        <div className="section-heading">
          <div><p className="eyebrow">Selected work</p><h2>Things I&apos;ve<br /><em>shipped.</em></h2></div>
          <p className="section-note">A small selection of systems, products, and experiments built for the real world.</p>
        </div>
        <div className="project-list">
          {projects.map((project) => {
            const ProjectIcon = project.icon;
            return (
              <article className={`project-card ${project.color}`} key={project.title}>
                <div className="project-topline">
                  <span className="project-number">{project.number}</span>
                  <span className="project-type">{project.type}</span>
                  <ProjectIcon className="project-icon" size={24} />
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer">GitHub <Github size={15} /></a>
                  {project.live && <a href={project.live} target="_blank" rel="noreferrer">Live project <ExternalLink size={15} /></a>}
                </div>
              </article>
            );
          })}
        </div>
        <a className="all-work" href="https://github.com/Abhilash-0322" target="_blank" rel="noreferrer">
          Explore all projects <ArrowUpRight size={17} />
        </a>
      </section>

      <section className="statement-section" id="about">
        <div className="container statement-grid">
          <p className="eyebrow">A little about me</p>
          <div>
            <h2>Good software feels<br /><span>inevitable.</span></h2>
            <p className="statement-copy">
              The best products hide their complexity. I care about the thoughtful layers underneath:
              clear APIs, resilient infrastructure, and AI that actually helps someone do their job.
            </p>
            <a className="text-link" href="mailto:abhilash.m.git@gmail.com">Let&apos;s build something useful <ArrowUpRight size={16} /></a>
          </div>
        </div>
      </section>

      <section className="section container experience-section" id="experience">
        <div className="section-heading compact">
          <div><p className="eyebrow">The path so far</p><h2>Experience &amp;<br /><em>momentum.</em></h2></div>
          <p className="section-note">Learning in public, building with good people, and staying curious about the next hard problem.</p>
        </div>
        <div className="experience-list">
          <div className="experience-row">
            <span className="experience-date">Aug 2026 — now</span>
            <div><h3>AI Engineer Intern <small>· Spearmint Technologies</small></h3><p>Voice and agent features, TTS pipelines, fine-tuning, and data collection.</p></div>
            <span className="experience-index">01</span>
          </div>
          <div className="experience-row">
            <span className="experience-date">Nov 2023 — now</span>
            <div><h3>AI/ML Coordinator <small>· Innogeeks Club, KIET</small></h3><p>Leading MVPs, mentoring developers, and coordinating teams from first sketch to shipped prototype.</p></div>
            <span className="experience-index">02</span>
          </div>
        </div>
        <div className="skills-block">
          <p className="eyebrow">Tools I reach for</p>
          <div className="skills-list">{skills.map((skill) => { const SkillIcon = skill.icon; return <span key={skill.label}><SkillIcon size={16} />{skill.label}</span>; })}</div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="container contact-inner">
          <div><p className="eyebrow">Have a project in mind?</p><h2>Let&apos;s make it<br /><span>real.</span></h2></div>
          <div className="contact-right">
            <p>I&apos;m currently open to backend, AI systems, and cloud engineering opportunities.</p>
            <a className="button button-light" href="mailto:abhilash.m.git@gmail.com">Start a conversation <ArrowUpRight size={17} /></a>
            <div className="contact-details"><a href="mailto:abhilash.m.git@gmail.com"><Mail size={15} /> abhilash.m.git@gmail.com</a><a href="tel:+917880764235"><Phone size={15} /> +91 78807 64235</a></div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-inner">
          <span>© 2026 Abhilash Maurya</span>
          <div className="footer-socials">{socialLinks.map(({ label, href, icon: Icon }) => <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} aria-label={label}><Icon size={17} /></a>)}</div>
          <span className="footer-built"><Check size={15} /> available for good work</span>
        </div>
      </footer>
    </main>
  );
}
