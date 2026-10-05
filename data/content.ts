export const site = {
  name: "Abhilash Maurya",
  title: "Backend & AI Systems Developer",
  tagline: "Building production AI, APIs, and hackathon-winning systems",
  location: "Delhi NCR, India (Ghaziabad)",
  email: "abhilash.m.git@gmail.com",
  phone: "+91 7880764235",
  resumePath: "/abhilash_python.pdf",
  bio:
    "Backend and AI systems developer with hands-on experience shipping FastAPI services, cloud deployments, multi-agent workflows, and RAG pipelines. B.Tech IT student at KIET; led campus AI MVPs and hackathon delivery. AWS Cloud Practitioner; comfortable on Azure and Docker-based CI/CD.",
};

export const links = {
  github: "https://github.com/Abhilash-0322",
  linkedin: "https://www.linkedin.com/in/abhilash-maurya-b615b9277/",
  x: "https://x.com/abhilash_glitch",
  leetcode: "https://leetcode.com/u/Abhilash_Maurya/",
  codeforces: "https://codeforces.com/profile/mauryaabhi2003",
};

export const talks = [
  {
    id: "T01",
    track: "AI Systems",
    title: "Multi-Agent Hiring Pipelines That Ship on Azure",
    abstract:
      "How we designed bias-aware agent orchestration, FastAPI backends, and a Next.js control plane for Zynd AICKATHON—and kept it running after demo day.",
    duration: "45 min",
    level: "Intermediate",
    tags: ["Agents", "FastAPI", "Azure"],
  },
  {
    id: "T02",
    track: "Production RAG",
    title: "RAG Beyond the Notebook: Ingestion, Vectors, and Ops",
    abstract:
      "Lessons from Quadrant RAG and campus MVPs: chunking strategies, retrieval quality, Dockerized services, and what breaks when real users show up.",
    duration: "40 min",
    level: "Intermediate",
    tags: ["LangChain", "Vector DBs", "Docker"],
  },
  {
    id: "T03",
    track: "Hackathon → Prod",
    title: "From 48 Hours to a Live URL",
    abstract:
      "Architecture shortcuts that win hackathons without painting you into a corner—deployment, auth boundaries, and mentoring teams of 3–6 under pressure.",
    duration: "35 min",
    level: "All levels",
    tags: ["Mentorship", "CI/CD", "MVP"],
  },
  {
    id: "T04",
    track: "Blockchain + AI",
    title: "ChainSentinel & SolSniff: Risk Narratives at Machine Speed",
    abstract:
      "Combining LLM reasoning with on-chain context for compliance storytelling and Solana ecosystem ideation—patterns that generalize outside crypto.",
    duration: "30 min",
    level: "Advanced",
    tags: ["LLMs", "Next.js", "Risk"],
  },
  {
    id: "T05",
    track: "Campus Leadership",
    title: "Leading Innogeeks: 5+ AI MVPs and a Room Full of Builders",
    abstract:
      "Coordinating agile squads, API design reviews, and hackathon delivery as AI/ML Coordinator—how to multiply output without burning out mentors.",
    duration: "25 min",
    level: "All levels",
    tags: ["Leadership", "FastAPI", "Teams"],
  },
];

export type TimelineKind = "win" | "finalist" | "patent" | "oss" | "build";

export const hackathonTimeline = [
  {
    year: "2026",
    month: "Jan",
    title: "Zynd AICKATHON — TalentInfra",
    outcome: "Shipped multi-agent hiring platform",
    detail:
      "FastAPI, Next.js, PostgreSQL, Groq on Azure. Live product after the event.",
    kind: "build" as TimelineKind,
    href: "https://zynd-hiring-app.azurewebsites.net",
  },
  {
    year: "2025",
    month: "Apr",
    title: "Patent published — IoT-AI telemedicine",
    outcome: "Co-inventor",
    detail: "India 202511018153A — published April 2025.",
    kind: "patent" as TimelineKind,
  },
  {
    year: "2025",
    month: "",
    title: "Solo AI agent hackathon track",
    outcome: "1st place · 500+ participants",
    detail: "End-to-end agent design, evaluation, and demo under solo constraints.",
    kind: "win" as TimelineKind,
  },
  {
    year: "2024",
    month: "",
    title: "Brainwave Hackathon — AIMS DTU",
    outcome: "MLH Solana track winners",
    detail: "Winning team on the MLH Solana track.",
    kind: "win" as TimelineKind,
  },
  {
    year: "2023–2025",
    month: "",
    title: "Regional hackathon circuit",
    outcome: "Top 5 finalist · 5+ events",
    detail: "Repeated podium finishes across campus and regional competitions.",
    kind: "finalist" as TimelineKind,
  },
  {
    year: "2023",
    month: "",
    title: "Open source & community",
    outcome: "GSSOC · Hacktoberfest",
    detail: "Merged PRs, reviews, and sustained contribution cadence.",
    kind: "oss" as TimelineKind,
  },
];

export const projects = [
  {
    name: "TalentInfra",
    subtitle: "Zynd AICKATHON 2026",
    description: "Multi-agent bias-aware hiring on Azure.",
    stack: "FastAPI, Next.js, PostgreSQL, Groq",
    github: "https://github.com/Abhilash-0322/zynd-aickathon",
    live: "https://zynd-hiring-app.azurewebsites.net",
  },
  {
    name: "SolSniff",
    subtitle: "Solana narrative agent",
    description: "Idea and narrative agent for ecosystem insights.",
    stack: "Next.js, Groq, Prisma",
    github: "https://github.com/Abhilash-0322/sol-sniff",
    live: "https://solsniffer.vercel.app/",
  },
  {
    name: "ChainSentinel AI",
    subtitle: "Multi-chain compliance",
    description: "Smart contract risk and compliance intelligence.",
    stack: "FastAPI, Next.js, MongoDB",
    github: "https://github.com/Abhilash-0322/chainsentinel.ai",
    live: null,
  },
  {
    name: "Quadrant RAG",
    subtitle: "Knowledge intelligence",
    description: "RAG over custom knowledge bases.",
    stack: "FastAPI, LangChain, Docker",
    github: "https://github.com/Abhilash-0322/quadrant-rag",
    live: null,
  },
];

export const navSections = [
  { id: "talks", label: "Talks" },
  { id: "timeline", label: "Wins" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];
