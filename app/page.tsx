import {
  ArrowDown,
  ArrowUpRight,
  Award,
  BrainCircuit,
  Cloud,
  Database,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Terminal,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const projects = [
  {
    number: "01 / 06",
    title: "TalentInfra",
    description:
      "Bias-aware hiring infrastructure where specialist agents turn candidate data into explainable, useful signals.",
    tags: ["FastAPI", "Next.js", "PostgreSQL", "Azure"],
    href: "https://zynd-hiring-app.azurewebsites.net",
  },
  {
    number: "02 / 06",
    title: "SolSniff",
    description:
      "A narrative and idea agent for the Solana ecosystem, built to surface the signal behind fast-moving on-chain culture.",
    tags: ["Next.js", "Groq", "Prisma", "Vercel"],
    href: "https://solsniffer.vercel.app/",
  },
  {
    number: "03 / 06",
    title: "ChainSentinel AI",
    description:
      "Multi-chain smart contract risk and compliance analysis, bringing structured reasoning to a noisy security workflow.",
    tags: ["FastAPI", "Next.js", "MongoDB"],
    href: "https://github.com/Abhilash-0322/chainsentinel.ai",
  },
  {
    number: "04 / 06",
    title: "Quadrant RAG",
    description:
      "A focused RAG foundation for private knowledge bases: ingestion, retrieval, and deployment without the demo glue.",
    tags: ["Python", "LangChain", "Vector DB", "Docker"],
    href: "https://github.com/Abhilash-0322/quadrant-rag",
  },
  {
    number: "05 / 06",
    title: "Resume Analyzer",
    description:
      "Free AI feedback that helps candidates make their experience clearer, sharper, and easier for hiring systems to understand.",
    tags: ["AI", "Next.js", "Product"],
    href: "https://resume-analyzer-pulse.vercel.app",
  },
  {
    number: "06 / 06",
    title: "Zen Heaven",
    description:
      "Wellness AI with sentiment-aware conversations and Twilio safety flows designed for moments that need more care.",
    tags: ["FastAPI", "React", "LangChain", "Twilio"],
    href: "https://hack-haven2-0.vercel.app/",
  },
];

const experiences = [
  {
    date: "AUG 2026",
    role: "AI Engineer Intern",
    company: "Spearmint Technologies · Remote",
    description: "Built voice, fine-tuning, data collection, and Hermes-based agent workflows.",
  },
  {
    date: "NOV 2023 — NOW",
    role: "AI/ML Coordinator",
    company: "Innogeeks Club · KIET",
    description: "Led 5+ AI and full-stack MVPs, mentored developers, and coordinated agile hackathon teams.",
  },
];

const toolGroups = [
  { label: "Build", value: "Python · TypeScript · C++ · SQL" },
  { label: "Ship", value: "FastAPI · Django · Next.js · Express" },
  { label: "Store", value: "PostgreSQL · MongoDB · Redis · Vector DBs" },
  { label: "Scale", value: "AWS · Azure · Docker · GitHub Actions" },
];

const recognitions = [
  "MLH Solana track winning team — Brainwave Hackathon",
  "1st place, solo AI agent track — 500+ participants",
  "Co-inventor, IoT-AI telemedicine patent — India 202511018153A",
  "Open source contributor — GSSOC, Hacktoberfest, OpenClaw",
];

export default function Home() {
  return (
    <main>
      <div className="site-shell">
        <header className="site-header">
          <a className="wordmark" href="#top" aria-label="Abhilash Maurya home">
            <span className="mark">AM</span>
            <span>Abhilash Maurya</span>
          </a>
          <nav className="header-nav" aria-label="Main navigation">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <ThemeToggle />
          </nav>
        </header>

        <section className="hero" id="top">
          <div>
            <div className="status-pill">
              <span className="pulse-dot" />
              Open to work
            </div>
            <h1>
              Systems that
              <br />
              <em>think</em> clearly.
            </h1>
            <p className="hero-copy">
              I&apos;m Abhilash — a <strong>backend &amp; AI systems developer</strong> in Delhi NCR,
              building reliable products where cloud infrastructure meets intelligent software.
            </p>
            <div className="hero-actions">
              <a className="button-primary" href="#work">
                Explore selected work <ArrowDown size={15} />
              </a>
              <a className="button-quiet" href="mailto:abhilash.m.git@gmail.com">
                Let&apos;s talk <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
          <div className="hero-art" aria-label="Abstract systems visualization">
            <div className="art-grid" />
            <div className="art-orbit" />
            <div className="art-core">
              <span>building at</span>
              <strong>the edge</strong>
            </div>
          </div>
        </section>

        <section className="section" id="work">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Selected systems</span>
              <h2>Work with a pulse.</h2>
            </div>
            <p>06 projects · from first commit to deployed product</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <span className="project-number">{project.number}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-footer">
                  <div className="tag-list">
                    {project.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a className="project-link" href={project.href} target="_blank" rel="noreferrer">
                    View <ArrowUpRight size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="about">
          <div className="section-heading">
            <div>
              <span className="eyebrow">The short version</span>
              <h2>Useful over flashy.</h2>
            </div>
          </div>
          <div className="about-layout">
            <p className="about-lede">
              I care about the layer <em>under</em> the interface — the one that makes a product
              trustworthy.
            </p>
            <div>
              <p className="about-detail">
                I&apos;m a B.Tech IT student at KIET, working across backend APIs, cloud deployments,
                multi-agent workflows, and RAG pipelines. My favorite problems sit between
                infrastructure and product: taking a good idea and giving it a dependable spine.
              </p>
              <p className="about-detail">
                Outside the code, I lead AI/ML initiatives at Innogeeks, mentor builders, and
                compete in hackathons. I&apos;m currently looking for cloud, AI systems, and fintech
                engineering opportunities.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Experience</span>
              <h2>In the loop.</h2>
            </div>
            <p>Learning fast · shipping often</p>
          </div>
          <div className="experience-list">
            {experiences.map((experience) => (
              <div className="experience-row" key={experience.role}>
                <span className="experience-date">{experience.date}</span>
                <div>
                  <h3 className="experience-role">{experience.role}</h3>
                  <p className="experience-description">{experience.description}</p>
                </div>
                <span className="experience-company">{experience.company}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <div>
              <span className="eyebrow">My toolkit</span>
              <h2>From idea to uptime.</h2>
            </div>
          </div>
          <div className="toolkit">
            {toolGroups.map((group, index) => (
              <div className="tool-group" key={group.label}>
                <h3>
                  {index === 0 && <Terminal size={13} />}
                  {index === 1 && <BrainCircuit size={13} />}
                  {index === 2 && <Database size={13} />}
                  {index === 3 && <Cloud size={13} />}
                  &nbsp; {group.label}
                </h3>
                <p>{group.value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="recognition-layout">
            <div>
              <span className="eyebrow">Signal</span>
              <h2 className="about-lede" style={{ marginTop: "22px" }}>
                Built in public,
                <br />
                <em>backed by proof.</em>
              </h2>
            </div>
            <div className="recognition-list">
              {recognitions.map((recognition) => (
                <div className="recognition-item" key={recognition}>
                  <span className="recognition-icon">
                    <Award size={16} />
                  </span>
                  <span>{recognition}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div>
            <span className="eyebrow">Have a hard problem?</span>
            <h2>
              Let&apos;s make
              <br />
              it <em>work.</em>
            </h2>
          </div>
          <div className="contact-aside">
            <span>
              Available for full-time roles, freelance builds, and conversations about AI systems.
            </span>
            <a href="mailto:abhilash.m.git@gmail.com">abhilash.m.git@gmail.com</a>
          </div>
        </section>

        <footer>
          <span>© 2026 Abhilash Maurya · Delhi NCR, India</span>
          <div className="socials">
            <a href="https://github.com/Abhilash-0322" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={15} />
            </a>
            <a
              href="https://www.linkedin.com/in/abhilash-maurya-b615b9277/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={15} />
            </a>
            <a href="mailto:abhilash.m.git@gmail.com" aria-label="Email">
              <Mail size={15} />
            </a>
            <span aria-label="Based in Delhi NCR">
              <MapPin size={15} />
            </span>
          </div>
        </footer>
      </div>
    </main>
  );
}
