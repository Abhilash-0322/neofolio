"use client";

import { useEffect, useState } from "react";

const projects = [
  ["01", "TalentInfra", "AI systems", "A multi-agent hiring workspace that helps teams surface talent without amplifying bias.", "FastAPI · Next.js · PostgreSQL · Groq · Azure", "https://zynd-hiring-app.azurewebsites.net", "https://github.com/Abhilash-0322/zynd-aickathon"],
  ["02", "SolSniff", "Agent intelligence", "A narrative intelligence agent turning noisy Solana signals into clear, actionable ideas.", "Next.js · Groq · Prisma · Vercel", "https://solsniffer.vercel.app/", "https://github.com/Abhilash-0322/sol-sniff"],
  ["03", "ChainSentinel AI", "Security infrastructure", "Multi-chain smart contract risk analysis for teams who need signal before they ship.", "FastAPI · Next.js · MongoDB · WebSockets", null, "https://github.com/Abhilash-0322/chainsentinel.ai"],
  ["04", "Quadrant RAG", "Knowledge systems", "A grounded retrieval pipeline for asking better questions across private knowledge bases.", "Python · LangChain · Vector DB · Docker", null, "https://github.com/Abhilash-0322/quadrant-rag"],
] as const;

const skills = [
  ["01", "Backend systems", "APIs, services, data models, and reliability work that makes products feel calm."],
  ["02", "AI engineering", "Agents and RAG pipelines with useful retrieval and a clear path to production."],
  ["03", "Cloud & delivery", "Containerized deployments and release paths from first environment to scale."],
] as const;

const links = {
  github: "https://github.com/Abhilash-0322",
  linkedin: "https://www.linkedin.com/in/abhilash-maurya-b615b9277/",
  x: "https://x.com/abhilash_glitch",
};

const Arrow = () => <span aria-hidden>↗</span>;

export default function Home() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("neofolio-theme");
    setDark(saved ? saved === "dark" : true);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    window.localStorage.setItem("neofolio-theme", dark ? "dark" : "light");
  }, [dark]);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText("abhilash.m.git@gmail.com");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = "mailto:abhilash.m.git@gmail.com";
    }
  }

  return (
    <main id="top">
      <div className="cathedral-glow" aria-hidden />
      <header className="site-header shell">
        <a className="brand" href="#top" aria-label="Abhilash Maurya home">
          <span className="brand-mark">A<span>†</span>M</span>
          <span className="brand-name">Abhilash Maurya</span>
        </a>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
          <a href="#work" onClick={() => setMenuOpen(false)}>Selected work</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <div className="header-actions">
          <button className="theme-toggle" type="button" onClick={() => setDark((value) => !value)} aria-label={`Switch to ${dark ? "light" : "dark"} mode`}>
            {dark ? "☼ Light" : "☾ Dark"}
          </button>
          <button className="menu-button" type="button" onClick={() => setMenuOpen((value) => !value)} aria-expanded={menuOpen} aria-label="Toggle navigation">
            {menuOpen ? "Close" : "Menu"} <span>☰</span>
          </button>
        </div>
      </header>

      <section className="hero shell">
        <div className="hero-meta"><span className="live-dot" /> Available for select opportunities <span className="meta-rule" /> Delhi NCR · India</div>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Backend / AI systems developer</p>
            <h1>Building systems<br /><i>with intent.</i></h1>
            <p className="hero-lede">I turn complex ideas into dependable products — from first architecture to production.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#work">Explore the work <Arrow /></a>
              <a className="inline-link" href="mailto:abhilash.m.git@gmail.com">Start a conversation <Arrow /></a>
            </div>
          </div>
          <div className="hero-art" aria-label="Abstract cathedral rose window">
            <div className="rose-window"><span /><span /><span /><span /><span /><span /></div>
            <div className="art-caption art-caption-top">28.6° N / 77.4° E</div>
            <div className="art-caption art-caption-bottom">SYSTEMS &amp; INTELLIGENCE</div>
            <div className="art-stamp">AM<span>EST. 2023</span></div>
          </div>
        </div>
        <div className="hero-foot"><span>Scroll to discover</span><span className="long-rule" /><span>01 — 05</span></div>
      </section>

      <section className="signal-band"><div className="shell signal-inner"><span>✠ A considered approach</span><p>The best engineering is felt before it is seen.</p><span>01</span></div></section>

      <section className="statement shell" id="about">
        <div className="section-index"><span>01</span><span>Point of view</span></div>
        <div className="statement-content"><h2>Useful software is<br /><i>quiet confidence.</i></h2><p>Good systems are clear in their intent, resilient in their shape, and ready for the next version. I care about the layer beneath the interface: the APIs, agents, data flows, and infrastructure that make a product endure.</p><div className="signature">A<span>†</span>M</div></div>
      </section>

      <section className="work-section" id="work"><div className="shell">
        <div className="section-heading"><div><p className="eyebrow">02 / Selected work</p><h2>Built beyond<br /><i>the demo.</i></h2></div><p className="heading-note">A handful of shipped systems,<br />experiments, and products.</p></div>
        <div className="project-list">{projects.map(([number, name, type, description, stack, live, github]) => <article className="project-row" key={name}><div className="project-number">{number}</div><div className="project-main"><div className="project-name-line"><h3>{name}</h3><span className="project-type">{type}</span></div><p>{description}</p><div className="project-footer"><span>{stack}</span><div className="project-links">{live && <a href={live} target="_blank" rel="noreferrer">Live <Arrow /></a>}<a href={github} target="_blank" rel="noreferrer">Source <Arrow /></a></div></div></div><a className="project-arrow" href={github} target="_blank" rel="noreferrer" aria-label={`Open ${name}`}><Arrow /></a></article>)}</div>
        <a className="more-work" href={links.github} target="_blank" rel="noreferrer">Browse the full archive on GitHub <Arrow /></a>
      </div></section>

      <section className="toolkit-section shell" id="capabilities">
        <div className="toolkit-top"><div><p className="eyebrow">03 / The toolkit</p><h2>Depth where<br /><i>it matters.</i></h2></div><span>Tools for ambitious, useful builds.</span></div>
        <div className="capability-list">{skills.map(([number, title, detail]) => <div className="capability" key={number}><span>{number}</span><h3>{title}</h3><p>{detail}</p></div>)}</div>
        <div className="skill-cloud">Python · FastAPI · Django · LangChain · PostgreSQL · MongoDB · Redis · AWS · Azure · Docker · GitHub Actions</div>
      </section>

      <section className="context-section shell">
        <div className="section-index"><span>04</span><span>A little context</span></div>
        <div className="context-grid"><h2>Curious by default.<br /><i>Useful on purpose.</i></h2><div><p>I’m a B.Tech IT student at KIET and AI/ML Coordinator at Innogeeks Club, where I lead teams building practical AI and full-stack MVPs.</p><p>Along the way: a patent, a Solana track win, five regional hackathon finals, and plenty of lessons from shipping.</p><a className="inline-link" href="mailto:abhilash.m.git@gmail.com">Ask for the résumé <Arrow /></a></div></div>
      </section>

      <section className="contact-section" id="contact"><div className="shell"><div className="contact-top"><p className="eyebrow">05 / Have a good problem?</p><span>No pitch deck required.</span></div><h2>Let&apos;s make it<br /><i>worth solving.</i></h2><div className="contact-bottom"><p>Open to conversations about cloud infrastructure, AI products, and work with a real user on the other side.</p><div className="contact-actions"><a className="contact-email" href="mailto:abhilash.m.git@gmail.com">abhilash.m.git@gmail.com <Arrow /></a><button className="copy-button" type="button" onClick={copyEmail}>{copied ? "Copied ✓" : "Copy email address"}</button></div></div></div></section>
      <footer className="footer shell"><span>© 2026 Abhilash Maurya</span><div className="footer-links"><a href={links.github}>GitHub</a><a href={links.linkedin}>LinkedIn</a><a href={links.x}>X</a></div><a className="back-top" href="#top">Back to top ↑</a></footer>
    </main>
  );
}
