import { ThemeToggle } from "@/components/ui/ThemeToggle";

type IconName =
  | "arrow"
  | "check"
  | "code"
  | "external"
  | "github"
  | "linkedin"
  | "mail"
  | "map"
  | "terminal"
  | "spark";

function Icon({ name, size = 16 }: { name: IconName; size?: number }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true
  };

  const paths: Record<IconName, React.ReactNode> = {
    arrow: <><path d="M5 12h13" /><path d="m13 6 6 6-6 6" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    code: <><path d="m8 9-4 3 4 3" /><path d="m16 9 4 3-4 3" /><path d="m14 5-4 14" /></>,
    external: <><path d="M14 5h5v5" /><path d="m19 5-8 8" /><path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" /></>,
    github: <><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.5 5.5 0 0 0 19.3 4 5.1 5.1 0 0 0 19.2.3S18 .0 15 2.1a13.4 13.4 0 0 0-6 0C6 0 4.8.3 4.8.3A5.1 5.1 0 0 0 4.7 4 5.5 5.5 0 0 0 3.2 7.5c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 9 18v4" /><path d="M9 18c-4.5 2-5-2-7-2" /></>,
    linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" /><path d="M2 9h4v12H2z" /><path d="M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" /></>,
    mail: <><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-10 6L2 7" /></>,
    map: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    terminal: <><path d="m4 17 6-5-6-5" /><path d="M12 19h8" /></>,
    spark: <><path d="m12 3-1.4 5.1a4 4 0 0 1-2.7 2.7L3 12l4.9 1.4a4 4 0 0 1 2.7 2.7L12 21l1.4-4.9a4 4 0 0 1 2.7-2.7L21 12l-4.9-1.4a4 4 0 0 1-2.7-2.7L12 3Z" /></>
  };

  return <svg {...common}>{paths[name]}</svg>;
}

const projects = [
  {
    number: "01",
    name: "TalentInfra",
    type: "Multi-agent hiring infrastructure",
    description:
      "Bias-aware hiring workflow with specialist agents for privacy, skill verification, matching, and verifiable credentials. Real-time decisions stream over WebSockets.",
    stack: ["FastAPI", "Next.js", "PostgreSQL", "Groq", "Azure"],
    href: "https://github.com/Abhilash-0322/zynd-aickathon",
    live: "https://zynd-hiring-app.azurewebsites.net"
  },
  {
    number: "02",
    name: "SolSniff",
    type: "Autonomous Solana narrative agent",
    description:
      "Scans on-chain, developer, social, and news signals to surface emerging narratives and generate grounded product ideas for builders.",
    stack: ["Next.js", "TypeScript", "Prisma", "Groq", "Vercel"],
    href: "https://github.com/Abhilash-0322/sol-sniff",
    live: "https://solsniffer.vercel.app/"
  },
  {
    number: "03",
    name: "ChainSentinel AI",
    type: "Multi-chain security intelligence",
    description:
      "AI-powered compliance platform for Ethereum, Solana, and Aptos, with static analysis, risk scoring, report generation, and live monitoring.",
    stack: ["Python", "FastAPI", "MongoDB", "WebSockets", "Docker"],
    href: "https://github.com/Abhilash-0322/chainsentinel.ai",
    live: "https://deploybackend-icvu.onrender.com/"
  },
  {
    number: "04",
    name: "Quadrant RAG",
    type: "Retrieval-augmented knowledge system",
    description:
      "Document ingestion and retrieval platform for custom knowledge bases, with chunking, embeddings, vector search, and low-latency inference.",
    stack: ["FastAPI", "LangChain", "Vector DBs", "LLMs", "Docker"],
    href: "https://github.com/Abhilash-0322/quadrant-rag"
  },
  {
    number: "05",
    name: "Zen Heaven",
    type: "AI wellness and safety platform",
    description:
      "Sentiment-aware recommendations with agent workflows and Twilio-powered safety escalation. Iterative model tuning reached 93% sentiment precision.",
    stack: ["FastAPI", "React", "LangChain", "MongoDB", "Twilio"],
    href: "https://github.com/Abhilash-0322/HackHaven2.0",
    live: "https://hack-haven2-0.vercel.app/"
  },
  {
    number: "06",
    name: "dcXspotify",
    type: "Full-stack music and chat platform",
    description:
      "Music experience with admin controls, Clerk authentication, Cloudinary media flows, and real-time chat over Socket.io.",
    stack: ["React", "Node.js", "MongoDB", "Socket.io", "Clerk"],
    href: "https://github.com/Abhilash-0322/dcXspotify"
  }
];

const capabilities = [
  ["Backend & APIs", "Python · FastAPI · Django · Express.js", "01"],
  ["AI Systems", "Agents · RAG · LangChain · LLM workflows", "02"],
  ["Data & Infra", "PostgreSQL · MongoDB · Redis · Docker", "03"],
  ["Cloud Delivery", "AWS · Azure · GitHub Actions · Linux", "04"]
];

const profiles = [
  ["LeetCode", "Abhilash_Maurya", "https://leetcode.com/u/Abhilash_Maurya/"],
  ["Codeforces", "mauryaabhi2003", "https://codeforces.com/profile/mauryaabhi2003"],
  ["GeeksForGeeks", "mauryaabqern", "https://www.geeksforgeeks.org/profile/mauryaabqern"],
  ["HackerRank", "abhilash_0322", "https://www.hackerrank.com/profile/abhilash_0322"]
];

function ExternalLink({ href, label }: { href: string; label: string }) {
  return (
    <a className="underline-link inline-flex items-center gap-2 text-sm font-medium text-ink/80 hover:text-aurora" href={href} target="_blank" rel="noreferrer">
      {label} <Icon name="external" size={14} />
    </a>
  );
}

export default function Home() {
  return (
    <main className="site-shell">
      <div className="content-layer">
        <header className="container flex items-center justify-between gap-6 py-5">
          <a href="#top" className="flex items-center gap-3 font-mono text-xs font-bold tracking-[0.13em] text-ink">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-ink text-xs text-canvas">AM</span>
            <span className="hidden sm:inline">ABHILASH / PORTFOLIO</span>
          </a>
          <nav className="flex items-center gap-5 text-xs font-medium text-muted sm:gap-7" aria-label="Main navigation">
            <a className="underline-link hover:text-ink" href="#work">Work</a>
            <a className="underline-link hover:text-ink" href="#about">About</a>
            <a className="underline-link hover:text-ink" href="#contact">Contact</a>
            <ThemeToggle />
          </nav>
        </header>

        <section id="top" className="container grid min-h-[680px] items-center gap-14 pb-24 pt-20 lg:grid-cols-[1.16fr_0.84fr]">
          <div>
            <div className="eyebrow mb-7"><span className="status-dot" /> Available for cloud & AI systems roles</div>
            <h1 className="max-w-4xl text-[clamp(3.3rem,8vw,7.3rem)] font-semibold leading-[0.91] tracking-[-0.085em]">
              Building the <span className="aurora-text">systems</span> behind useful AI.
            </h1>
            <p className="body-copy mt-8 max-w-xl text-[1.06rem]">
              I&apos;m Abhilash Maurya, a backend and AI systems developer shipping FastAPI services, agent workflows, and cloud-ready products from Delhi NCR.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a href="#work" className="focus-ring inline-flex items-center gap-3 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-canvas transition hover:bg-aurora">
                See selected work <Icon name="arrow" size={17} />
              </a>
              <a href="mailto:abhilash.m.git@gmail.com" className="focus-ring inline-flex items-center gap-2 rounded-full border border-line/15 px-5 py-3 text-sm font-semibold text-ink transition hover:border-aurora/50 hover:text-aurora">
                <Icon name="mail" size={15} /> Let&apos;s talk
              </a>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 text-xs text-muted">
              <span className="inline-flex items-center gap-2"><Icon name="map" size={14} /> Ghaziabad, India</span>
              <span className="inline-flex items-center gap-2"><Icon name="terminal" size={14} /> Python · APIs · AI infrastructure</span>
            </div>
          </div>

          <div className="relative">
            <div className="grid-texture glass relative overflow-hidden rounded-3xl p-6 sm:p-8">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-aurora/20 blur-3xl" />
              <div className="relative">
                <div className="mb-12 flex items-center justify-between border-b border-line/10 pb-4 font-mono text-[0.67rem] uppercase tracking-[0.16em] text-muted">
                  <span>system_profile.json</span><span className="text-aurora">v.2026</span>
                </div>
                <div className="space-y-4 font-mono text-xs leading-relaxed text-muted">
                  <div><span className="text-aurora">const</span> engineer = {"{"}</div>
                  <div className="pl-5">name: <span className="text-ink">&quot;Abhilash Maurya&quot;</span>,</div>
                  <div className="pl-5">focus: [<span className="text-ink">&quot;backend&quot;</span>, <span className="text-ink">&quot;agents&quot;</span>],</div>
                  <div className="pl-5">ships: <span className="text-lime-600 dark:text-lime-300">true</span>,</div>
                  <div className="pl-5">location: <span className="text-ink">&quot;IN / NCR&quot;</span></div>
                  <div>{"}"}</div>
                </div>
                <div className="mt-14 flex items-end justify-between border-t border-line/10 pt-5">
                  <div><div className="font-mono text-[0.65rem] uppercase tracking-widest text-muted">Current mode</div><div className="mt-2 flex items-center gap-2 text-sm font-semibold"><span className="status-dot" /> Building</div></div>
                  <Icon name="spark" size={29} />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-line/10 bg-card px-4 py-3 shadow-xl sm:block">
              <div className="font-mono text-[0.62rem] uppercase tracking-wider text-muted">AWS certified</div>
              <div className="mt-1 flex items-center gap-2 text-sm font-semibold"><Icon name="check" size={14} /> Cloud Practitioner</div>
            </div>
          </div>
        </section>

        <div className="container border-y hairline py-5">
          <div className="flex flex-wrap items-center justify-between gap-5 text-xs text-muted">
            <span className="font-mono uppercase tracking-[0.18em]">01 / A practical builder</span>
            <span>From architecture decisions to production deployment.</span>
            <span className="hidden font-mono text-aurora sm:inline">SCROLL TO EXPLORE ↓</span>
          </div>
        </div>

        <section id="about" className="section container">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div><div className="eyebrow">About the work</div><h2 className="section-title">Good infrastructure makes ambitious products feel simple.</h2></div>
            <div className="max-w-2xl">
              <p className="body-copy text-lg">I work across the layers where product ideas become dependable systems: APIs with clear boundaries, data pipelines that stay observable, and AI features grounded in useful context.</p>
              <p className="body-copy mt-5">As AI/ML Coordinator at Innogeeks Club, I&apos;ve led 5+ AI and full-stack MVPs, mentored 6+ developers, and helped teams move from architecture sketches to working deployments under real deadlines.</p>
              <div className="mt-9 grid gap-5 border-t hairline pt-7 sm:grid-cols-3">
                <div><div className="text-3xl font-semibold tracking-tight">5+</div><div className="mt-1 text-xs text-muted">AI / full-stack MVPs led</div></div>
                <div><div className="text-3xl font-semibold tracking-tight">6+</div><div className="mt-1 text-xs text-muted">developers mentored</div></div>
                <div><div className="text-3xl font-semibold tracking-tight">93%</div><div className="mt-1 text-xs text-muted">sentiment precision</div></div>
              </div>
            </div>
          </div>
        </section>

        <section className="container pb-28">
          <div className="grid gap-4 md:grid-cols-2">
            {capabilities.map(([title, detail, number]) => (
              <div key={title} className="glass rounded-2xl p-6 transition hover:border-aurora/40">
                <div className="flex items-start justify-between gap-5"><span className="font-mono text-xs text-aurora">{number}</span><Icon name={title === "AI Systems" ? "spark" : title === "Backend & APIs" ? "code" : "terminal"} size={19} /></div>
                <h3 className="mt-9 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted">{detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="work" className="section border-y hairline bg-canvas/40">
          <div className="container">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div><div className="eyebrow">Selected work</div><h2 className="section-title">Systems built to leave the demo.</h2></div>
              <a href="https://github.com/Abhilash-0322" target="_blank" rel="noreferrer" className="underline-link inline-flex items-center gap-2 pb-1 text-sm font-medium text-muted hover:text-ink">More on GitHub <Icon name="arrow" size={15} /></a>
            </div>
            <div className="mt-14 grid gap-5 md:grid-cols-2">
              {projects.map((project) => (
                <article key={project.name} className="project-card glass flex flex-col rounded-2xl p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-mono text-xs text-aurora">{project.number}</span>
                    <div className="flex items-center gap-3 text-muted">
                      <a href={project.href} target="_blank" rel="noreferrer" aria-label={`${project.name} on GitHub`} className="transition hover:text-ink"><Icon name="github" size={17} /></a>
                      {project.live && <a href={project.live} target="_blank" rel="noreferrer" aria-label={`${project.name} live demo`} className="transition hover:text-ink"><Icon name="external" size={16} /></a>}
                    </div>
                  </div>
                  <div className="mt-10"><h3 className="text-2xl font-semibold tracking-tight">{project.name}</h3><p className="mt-1 font-mono text-[0.67rem] uppercase tracking-wider text-aurora">{project.type}</p></div>
                  <p className="body-copy mt-5 text-sm">{project.description}</p>
                  <div className="mt-auto flex flex-wrap gap-2 border-t hairline pt-5 mt-8">{project.stack.map((item) => <span key={item} className="rounded-full border border-line/10 px-2.5 py-1 font-mono text-[0.63rem] text-muted">{item}</span>)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section container">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div><div className="eyebrow">Experience & education</div><h2 className="section-title">Learning by leading, shipping, and sharing.</h2></div>
            <div className="space-y-9">
              <div className="border-l-2 border-aurora/40 pl-6">
                <div className="font-mono text-xs text-aurora">NOV 2023 — PRESENT</div>
                <h3 className="mt-2 text-xl font-semibold">AI/ML Coordinator</h3><p className="mt-1 text-sm text-muted">Innogeeks Club, KIET · Ghaziabad</p>
                <p className="body-copy mt-4 text-sm">Leading architecture, backend implementation, deployment workflows, design reviews, and agile teams of 3–6 across hackathon projects.</p>
              </div>
              <div className="border-l-2 border-line/15 pl-6">
                <div className="font-mono text-xs text-muted">AUG 2026</div>
                <h3 className="mt-2 text-xl font-semibold">AI Engineer Intern</h3><p className="mt-1 text-sm text-muted">Spearmint Technologies · Remote</p>
                <p className="body-copy mt-4 text-sm">Worked on text-to-speech pipelines, AI fine-tuning, web scraping, and Hermes-based agent features.</p>
              </div>
              <div className="border-l-2 border-line/15 pl-6">
                <div className="font-mono text-xs text-aurora">EXPECTED 2027</div>
                <h3 className="mt-2 text-xl font-semibold">B.Tech, Information Technology</h3><p className="mt-1 text-sm text-muted">KIET Group of Institutions (AKTU) · 75.45%</p>
                <p className="body-copy mt-4 text-sm">Coursework includes data structures, operating systems, databases, and computer networks.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="container pb-28">
          <div className="grid gap-5 md:grid-cols-2">
            <div className="glass rounded-2xl p-7">
              <div className="eyebrow">Recognition</div>
              <h3 className="mt-5 text-2xl font-semibold tracking-tight">Signals that compound.</h3>
              <ul className="mt-7 space-y-4 text-sm text-muted">
                {["Co-inventor of IoT-AI telemedicine patent (India 202511018153A).", "1st place in a solo AI-agent track among 500+ participants.", "Top 5 finalist across 5+ regional hackathons.", "Open-source contributions to OpenClaw and Gemini CLI."].map((item) => <li key={item} className="flex gap-3"><span className="mt-1 text-aurora"><Icon name="check" size={15} /></span><span>{item}</span></li>)}
              </ul>
            </div>
            <div className="glass rounded-2xl p-7">
              <div className="eyebrow">Credentials</div>
              <h3 className="mt-5 text-2xl font-semibold tracking-tight">Tools with context.</h3>
              <div className="mt-7 flex flex-wrap gap-2">{["AWS Certified Cloud Practitioner", "Google AI Essentials", "Python", "SQL", "JavaScript", "C++", "AWS", "Azure", "Docker", "Git", "Linux"].map((item) => <span key={item} className="rounded-full border border-line/10 px-3 py-2 text-xs text-muted">{item}</span>)}</div>
            </div>
          </div>
        </section>

        <section className="border-y hairline bg-canvas/40 py-20">
          <div className="container">
            <div className="flex flex-wrap items-end justify-between gap-6"><div><div className="eyebrow">Practice</div><h2 className="section-title">Always close to the fundamentals.</h2></div><p className="body-copy max-w-sm text-sm">Competitive programming keeps my thinking sharp and my implementation honest.</p></div>
            <div className="mt-11 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {profiles.map(([name, handle, href]) => <a key={name} href={href} target="_blank" rel="noreferrer" className="glass rounded-xl p-5 transition hover:-translate-y-1 hover:border-aurora/40"><div className="flex items-center justify-between"><span className="font-semibold">{name}</span><Icon name="arrow" size={15} /></div><div className="mt-3 font-mono text-xs text-muted">@{handle}</div></a>)}
            </div>
          </div>
        </section>

        <section id="contact" className="container py-28">
          <div className="relative overflow-hidden rounded-3xl bg-ink px-6 py-16 text-canvas sm:px-14">
            <div className="absolute -right-10 -top-32 h-72 w-72 rounded-full bg-aurora/35 blur-3xl" />
            <div className="relative max-w-2xl"><div className="eyebrow text-lime-300 before:bg-lime-300">Open to what&apos;s next</div><h2 className="mt-6 text-[clamp(2.4rem,6vw,5rem)] font-semibold leading-[0.95] tracking-[-0.07em]">Let&apos;s build something that matters.</h2><p className="mt-6 max-w-lg text-sm leading-7 text-canvas/65">I&apos;m interested in backend, cloud, AI systems, and finance-oriented engineering roles — and in collaborating on products where reliable execution matters.</p><div className="mt-9 flex flex-wrap gap-4"><a href="mailto:abhilash.m.git@gmail.com" className="inline-flex items-center gap-2 rounded-full bg-lime-300 px-5 py-3 text-sm font-semibold text-ink transition hover:bg-white"><Icon name="mail" size={15} /> abhilash.m.git@gmail.com</a><a href="https://www.linkedin.com/in/abhilash-maurya-b615b9277/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-canvas/25 px-5 py-3 text-sm font-semibold transition hover:border-canvas/70"><Icon name="linkedin" size={15} /> LinkedIn</a></div></div>
          </div>
        </section>

        <footer className="container flex flex-wrap items-center justify-between gap-5 border-t hairline py-7 text-xs text-muted">
          <span>© {new Date().getFullYear()} Abhilash Maurya</span>
          <div className="flex items-center gap-5"><a href="https://github.com/Abhilash-0322" target="_blank" rel="noreferrer" className="hover:text-ink"><Icon name="github" size={16} /></a><a href="https://x.com/abhilash_glitch" target="_blank" rel="noreferrer" className="font-semibold hover:text-ink">𝕏</a><span className="font-mono">DELHI NCR / IN</span></div>
        </footer>
      </div>
    </main>
  );
}
