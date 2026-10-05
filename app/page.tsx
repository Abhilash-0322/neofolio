"use client";

import { useEffect, useState } from "react";

const projects = [
  ["01", "TalentInfra", "AI / Hiring infrastructure", "Bias-aware multi-agent hiring workspace.", ["FastAPI", "Next.js", "PostgreSQL", "Azure"], "https://zynd-hiring-app.azurewebsites.net", "https://github.com/Abhilash-0322/zynd-aickathon"],
  ["02", "SolSniff", "Research / Web3 intelligence", "Solana narratives turned into grounded build ideas.", ["Next.js", "Groq", "Prisma", "Vercel"], "https://solsniffer.vercel.app/", "https://github.com/Abhilash-0322/sol-sniff"],
  ["03", "ChainSentinel AI", "Security / Compliance", "Cross-chain smart contract risk analysis.", ["FastAPI", "Next.js", "MongoDB"], "", "https://github.com/Abhilash-0322/chainsentinel.ai"],
  ["04", "Quadrant RAG", "Knowledge intelligence", "Grounded retrieval across private knowledge bases.", ["Python", "LangChain", "Vector DB", "Docker"], "", "https://github.com/Abhilash-0322/quadrant-rag"],
] as const;

const skills = [
  ["01", "Backend systems", "APIs, services, data models and reliability work that makes products feel calm."],
  ["02", "AI engineering", "Agents and RAG pipelines with useful retrieval and a clear path to production."],
  ["03", "Cloud & delivery", "Containerized deployments and release paths from first environment to scale."],
] as const;

const Arrow = () => <span className="arrow" aria-hidden="true">↗</span>;

export default function Home() {
  const [dark, setDark] = useState(true);
  const [menu, setMenu] = useState(false);
  const [filter, setFilter] = useState("All");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("oceanic-theme");
    setDark(saved ? saved === "dark" : true);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    window.localStorage.setItem("oceanic-theme", dark ? "dark" : "light");
  }, [dark]);

  const shown = filter === "All" ? projects : projects.filter((p) => p[2].startsWith(filter));
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("abhilash.m.git@gmail.com");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      window.location.href = "mailto:abhilash.m.git@gmail.com";
    }
  };

  return (
    <main>
      <div className="ocean-motion" aria-hidden="true"><i /><i /><i /></div>
      <header className="shell header">
        <a className="brand" href="#top"><b>AM<span>/</span></b><span>Abhilash Maurya</span></a>
        <nav className={menu ? "open" : ""}><a href="#work" onClick={() => setMenu(false)}>Work</a><a href="#about" onClick={() => setMenu(false)}>About</a><a href="#contact" onClick={() => setMenu(false)}>Contact</a></nav>
        <div className="head-actions"><button className="theme" onClick={() => setDark((v) => !v)} aria-label="Toggle color theme">{dark ? "☼ Light" : "◐ Dark"}</button><button className="menub" onClick={() => setMenu((v) => !v)} aria-expanded={menu}>{menu ? "Close" : "Menu"}</button></div>
      </header>

      <section className="shell hero" id="top">
        <p className="availability"><i /> AVAILABLE FOR SELECT OPPORTUNITIES <span /> DELHI NCR · INDIA</p>
        <div className="hero-grid"><div><p className="eyebrow">Backend / AI systems developer</p><h1>Systems<br /><em>with a pulse.</em></h1><p className="lede">I build the APIs, agents, and cloud infrastructure that turn ambitious ideas into dependable products.</p><div className="hero-actions"><a className="button" href="#work">Explore the work <Arrow /></a><a className="under" href="mailto:abhilash.m.git@gmail.com">Start a conversation <Arrow /></a></div></div><div className="art"><div className="sun" /><div className="wash w1" /><div className="wash w2" /><div className="ring r1" /><div className="ring r2" /><small className="arttop">28.6° N / 77.4° E</small><small className="artbottom">SYSTEMS &amp; INTELLIGENCE</small><strong>AM<small>EST. 2023</small></strong></div></div>
        <div className="hero-foot">SCROLL TO DISCOVER <i /> 01 — 05</div>
      </section>

      <section className="signal"><div className="shell signal-in"><span>≈ A considered approach</span><p>The best engineering is felt before it is seen.</p><b>01</b></div></section>
      <section className="shell statement" id="about"><div className="index">01 <span>Point of view</span></div><div><h2>Useful software is<br /><em>quiet confidence.</em></h2><p>Good systems are clear in their intent, resilient in their shape, and ready for the next version. I care about the layer beneath the interface: APIs, agents, data flows and infrastructure that make a product endure.</p><div className="signature">A<span>/</span>M</div></div></section>

      <section className="work" id="work"><div className="shell"><div className="heading"><div><p className="eyebrow">02 / Selected work</p><h2>Built beyond<br /><em>the demo.</em></h2></div><p>A few systems from the last season of building — each made for the messy middle between an idea and production.</p></div><div className="filters">{["All", "AI", "Security", "Research"].map((x) => <button className={filter === x ? "active" : ""} key={x} onClick={() => setFilter(x)}>{x}</button>)}</div><div className="projects">{shown.map(([no, name, type, desc, tags, live, source]) => <article key={name}><div className="pnum">{no}<small>/ 04</small></div><div><label>{type}</label><h3>{name}</h3><p>{desc}</p><div className="tags">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div><div className="plinks">{live && <a href={live} target="_blank" rel="noreferrer">Live build <Arrow /></a>}<a href={source} target="_blank" rel="noreferrer">Source <Arrow /></a></div></article>)}</div><a className="under archive" href="https://github.com/Abhilash-0322" target="_blank" rel="noreferrer">Browse the full archive on GitHub <Arrow /></a></div></section>

      <section className="toolkit shell"><div className="heading"><div><p className="eyebrow">03 / The toolkit</p><h2>Depth where<br /><em>it matters.</em></h2></div><span className="mark">✳</span></div><div className="skills">{skills.map(([no, title, detail]) => <div key={no}><b>{no}</b><h3>{title}</h3><p>{detail}</p><strong>↗</strong></div>)}</div><p className="skillline">Python · FastAPI · Django · LangChain · PostgreSQL · MongoDB · Redis · AWS · Azure · Docker · GitHub Actions</p></section>
      <section className="shell context"><div className="index">04 <span>/ A little context</span></div><div className="context-grid"><h2>Curious by default.<br /><em>Useful on purpose.</em></h2><div><p>I’m a B.Tech IT student at KIET and AI/ML Coordinator at Innogeeks Club, where I lead teams building practical AI and full-stack MVPs.</p><p>Along the way: a patent, a Solana track win, five regional hackathon finals, and plenty of lessons from shipping.</p><a className="under" href="https://github.com/Abhilash-0322" target="_blank" rel="noreferrer">Read more on GitHub <Arrow /></a></div></div></section>
      <footer className="contact" id="contact"><div className="shell"><div className="contact-top">05 / HAVE A GOOD PROBLEM? <span>NO PITCH DECK REQUIRED.</span></div><h2>Let&apos;s make it<br /><em>worth solving.</em></h2><div className="contact-foot"><p>Open to conversations about cloud infrastructure, AI products, and work with a real user on the other side.</p><div><a href="mailto:abhilash.m.git@gmail.com">abhilash.m.git@gmail.com <Arrow /></a><button onClick={copyEmail}>{copied ? "Copied ✓" : "Copy email address"}</button></div></div><div className="footer"><span>© 2026 Abhilash Maurya</span><div><a href="https://github.com/Abhilash-0322">GitHub</a><a href="https://www.linkedin.com/in/abhilash-maurya-b615b9277/">LinkedIn</a><a href="https://x.com/abhilash_glitch">X / Twitter</a></div><a href="#top">Back to top ↑</a></div></div></footer>
    </main>
  );
}
