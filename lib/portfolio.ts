export const profile = {
  name: "Abhilash Maurya",
  titles: ["Backend Developer", "Python Developer", "AI Systems Developer"],
  location: "Delhi NCR, India",
  email: "abhilash.m.git@gmail.com",
  phone: "+91 7880764235",
  bio: `Backend and AI systems developer with hands-on experience shipping FastAPI services, cloud deployments, multi-agent workflows, and RAG pipelines. B.Tech IT student at KIET; led campus AI MVPs and hackathon delivery. AWS Cloud Practitioner; comfortable on Azure and Docker-based CI/CD.`,
  links: {
    github: "https://github.com/Abhilash-0322",
    linkedin: "https://www.linkedin.com/in/abhilash-maurya-b615b9277/",
    x: "https://x.com/abhilash_glitch",
    resume: "/abhilash_python.pdf",
  },
};

export const pullQuotes = [
  {
    quote:
      "First place in the solo AI agent track — more than five hundred builders, one shipped system.",
    attribution: "Regional hackathon, 2025",
  },
  {
    quote:
      "Winning the MLH Solana track meant shipping under pressure: agents, APIs, and a demo that held up on stage.",
    attribution: "Brainwave Hackathon, AIMS DTU",
  },
  {
    quote:
      "Co-inventor on an IoT–AI telemedicine patent — engineering that had to clear real regulatory framing, not just slide decks.",
    attribution: "India 202511018153A, published Apr 2025",
  },
];

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  stack: string[];
  github?: string;
  live?: string;
  blurb: string[];
};

export const projects: Project[] = [
  {
    slug: "talentinfra",
    title: "TalentInfra",
    subtitle: "Zynd AICKATHON 2026 — bias-aware hiring agents",
    stack: ["FastAPI", "Next.js", "PostgreSQL", "Groq", "Azure"],
    github: "https://github.com/Abhilash-0322/zynd-aickathon",
    live: "https://zynd-hiring-app.azurewebsites.net",
    blurb: [
      "TalentInfra treats hiring as a systems problem: multiple specialized agents evaluate résumés and interview signals while explicit bias checks run in parallel. I owned the FastAPI orchestration layer, PostgreSQL schema for audit trails, and the Azure deployment path so judges could hit a live URL—not a localhost recording.",
      "The product narrative is compliance-minded without being theatrical: every recommendation links back to evidence spans in the candidate packet. Groq-backed inference keeps latency tolerable for demo-day flows. This was campus competition work, but the architecture mirrors what I want in production HR tech: observable agents, human override, and deployment you can hand to an ops team.",
    ],
  },
  {
    slug: "solsniff",
    title: "SolSniff",
    subtitle: "Solana narrative and idea agent",
    stack: ["Next.js", "Groq", "Prisma", "Vercel"],
    github: "https://github.com/Abhilash-0322/sol-sniff",
    live: "https://solsniffer.vercel.app/",
    blurb: [
      "SolSniff watches on-chain and social signals, then synthesizes founder-ready narratives—not price spam. The Next.js front end is intentionally editorial: long reads, cited sources, and agent summaries that a human can edit before sharing.",
      "Prisma models the ingestion pipeline; Groq handles structured extraction. Shipping on Vercel meant leaning into edge-friendly API routes and disciplined caching so free-tier demos stayed responsive during hackathon traffic spikes.",
    ],
  },
  {
    slug: "chainsentinel",
    title: "ChainSentinel AI",
    subtitle: "Multi-chain contract risk and compliance",
    stack: ["FastAPI", "Next.js", "MongoDB"],
    github: "https://github.com/Abhilash-0322/chainsentinel.ai",
    blurb: [
      "ChainSentinel scores smart contracts across chains with a backend built for analysts, not tourists. FastAPI services normalize bytecode metadata, run policy templates, and expose diffable reports. MongoDB stores heterogeneous chain artifacts without forcing a relational pretzel.",
      "The frontend reads like a case file: severity bands, cited code regions, and exportable PDF summaries. I prioritized explainability over flashy dashboards—finance and security reviewers need sentences, not heat maps alone.",
    ],
  },
  {
    slug: "quadrant-rag",
    title: "Quadrant RAG",
    subtitle: "Retrieval over custom knowledge bases",
    stack: ["FastAPI", "LangChain", "Vector DBs", "Docker"],
    github: "https://github.com/Abhilash-0322/quadrant-rag",
    blurb: [
      "Quadrant RAG is my reference implementation for teams that outgrow notebook prototypes. Ingestion, chunking, embedding refresh, and query routing live behind versioned FastAPI endpoints. LangChain glues the retrieval graph; vector stores swap via configuration.",
      "Docker Compose reproduces the full stack for reviewers and freelance clients. The documentation stresses operational knobs—batch sizes, re-embed schedules, and failure modes—because RAG in production is as much cron and monitoring as it is prompts.",
    ],
  },
  {
    slug: "resume-analyzer",
    title: "Resume Analyzer",
    subtitle: "Free AI résumé feedback",
    stack: ["Next.js", "AI APIs"],
    github: "https://github.com/Abhilash-0322/resume-analyzer",
    live: "https://resume-analyzer-pulse.vercel.app",
    blurb: [
      "A public tool that gives actionable résumé feedback without account friction. The UI is magazine-simple: upload, wait, read structured critiques aligned to role families. Backend prompts enforce specificity—verbs, metrics, and gap callouts instead of generic encouragement.",
      "It doubles as a portfolio proof point for humane AI UX: fast paths, clear limits, and copy that respects job seekers under stress.",
    ],
  },
  {
    slug: "zen-heaven",
    title: "Zen Heaven",
    subtitle: "Wellness AI with safety-oriented telephony",
    stack: ["FastAPI", "React", "LangChain", "Twilio"],
    github: "https://github.com/Abhilash-0322/HackHaven2.0",
    live: "https://hack-haven2-0.vercel.app/",
    blurb: [
      "Zen Heaven pairs sentiment-aware chat with Twilio escalation when language crosses safety thresholds. FastAPI coordinates model calls and logging; React delivers calm, readable sessions rather than gamified streaks.",
      "LangChain chains summarization and risk heuristics, but humans remain in the loop via configurable escalation lists—important when building mental-health adjacent software on hackathon timelines.",
    ],
  },
];

export const experience = [
  {
    role: "AI Engineer Intern",
    org: "Spearmint Technologies",
    period: "Aug 2026 · Part-time, Remote",
    detail:
      "Voice and agent features—TTS pipelines, fine-tuning, data collection, and Hermes-based agents for production experiments.",
  },
  {
    role: "AI/ML Coordinator",
    org: "Innogeeks Club, KIET",
    period: "Nov 2023 – Present",
    detail:
      "Led five-plus AI and full-stack MVPs, mentored six-plus developers, and ran agile squads of three to six for hackathon delivery—API design, data modeling, and review culture.",
  },
];

export const education = {
  degree: "B.Tech Information Technology",
  school: "KIET Group of Institutions (AKTU), Ghaziabad",
  year: "Expected 2027",
};

export const skills = {
  languages: "Python, C++, JavaScript, SQL",
  backend: "FastAPI, Django, Express.js, LangChain",
  frontend: "React, Next.js",
  data: "PostgreSQL, MongoDB, MySQL, Redis, vector DBs, Firebase",
  platform: "Docker, Git, Linux, AWS, Azure, GitHub Actions, RAG, AI agents",
};

export const certifications = [
  "AWS Certified Cloud Practitioner",
  "Google AI Essentials (Coursera)",
];

export const achievements = [
  "MLH Solana track winning team — Brainwave Hackathon (AIMS DTU)",
  "1st place — solo AI agent hackathon track (500+ participants)",
  "Top 5 finalist — 5+ regional hackathons",
  "Co-inventor — IoT-AI telemedicine patent (India 202511018153A)",
  "Open source: GSSOC, Hacktoberfest, merged PRs and reviews",
];
