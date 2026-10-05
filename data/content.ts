export const profile = {
  name: "Abhilash Maurya",
  role: "Backend & AI Systems Developer",
  location: "Delhi NCR, India (Ghaziabad)",
  email: "abhilash.m.git@gmail.com",
  phone: "+91 7880764235",
  github: "https://github.com/Abhilash-0322",
  x: "https://x.com/abhilash_glitch",
  linkedin: "https://www.linkedin.com/in/abhilash-maurya-b615b9277/",
  bio:
    "Backend and AI systems developer shipping FastAPI services, cloud deployments, multi-agent workflows, and RAG pipelines. B.Tech IT at KIET; AWS Cloud Practitioner; comfortable on Azure and Docker-based CI/CD."
};

export const codingProfiles = [
  {
    name: "LeetCode",
    handle: "Abhilash_Maurya",
    href: "https://leetcode.com/u/Abhilash_Maurya/",
    color: "#ff5cab",
    accent: "#ff5cab",
    description: "Data structures, algorithms & contest problems"
  },
  {
    name: "Codeforces",
    handle: "mauryaabhi2003",
    href: "https://codeforces.com/profile/mauryaabhi2003",
    color: "#3dd9ff",
    accent: "#3dd9ff",
    description: "Competitive programming & rated rounds"
  },
  {
    name: "GeeksForGeeks",
    handle: "mauryaabqern",
    href: "https://www.geeksforgeeks.org/profile/mauryaabqern",
    color: "#5ce1a8",
    accent: "#5ce1a8",
    description: "CS fundamentals, interview prep & practice"
  },
  {
    name: "HackerRank",
    handle: "abhilash_0322",
    href: "https://www.hackerrank.com/profile/abhilash_0322",
    color: "#b57bff",
    accent: "#b57bff",
    description: "Skill certifications & domain challenges"
  }
] as const;

export const storySections = [
  {
    id: "genesis",
    chapter: "I",
    eyebrow: "Origin Story",
    title: "From Campus MVPs to Production APIs",
    body:
      "Engineering practice built across backend services, AI agents, and cloud delivery — not as isolated experiments, but as repeated cycles of design, ship, and iterate. Led AI MVPs at Innogeeks Club KIET while interning on voice and agent systems at Spearmint Technologies.",
    quote: "“The best portfolios are built in production, not in slide decks.”"
  },
  {
    id: "systems",
    chapter: "II",
    eyebrow: "Backend Forge",
    title: "APIs, Data, and Real Deployments",
    body:
      "FastAPI and Django services with clear auth boundaries, thoughtful database modeling, and Docker-ready deployments. Experience spans PostgreSQL, MongoDB, Redis, and vector stores — with CI/CD on GitHub Actions and cloud targets on AWS and Azure.",
    quote: "“Architecture should make the next feature cheaper, not harder.”"
  },
  {
    id: "intelligence",
    chapter: "III",
    eyebrow: "AI Systems",
    title: "Agents, RAG, and Shipped Intelligence",
    body:
      "Multi-agent orchestration, RAG over custom knowledge bases, sentiment and safety workflows, and LLM integrations that go beyond demos. From hiring bias agents to narrative detectors on Solana — intelligence layers wired to real user outcomes.",
    quote: "“Agents are only useful when retrieval, tools, and guardrails agree.”"
  },
  {
    id: "web3",
    chapter: "IV",
    eyebrow: "On-Chain",
    title: "Security Across Chains",
    body:
      "Smart contract risk analysis and compliance scoring across Ethereum, Solana, and Aptos ecosystems. ChainSentinel AI combines FastAPI analysis engines with live monitoring — security-first thinking for decentralized workloads.",
    quote: "“In Web3, trust is compiled from tests, audits, and observability.”"
  },
  {
    id: "velocity",
    chapter: "V",
    eyebrow: "Hackathon Gear",
    title: "Fast Builds Without Fragile Code",
    body:
      "MLH Solana track winner, solo AI agent track champion (500+ participants), and repeated top-finisher across regional hackathons. Velocity comes from pattern recognition and disciplined scaffolding — not from skipping structure.",
    quote: "“Speed and quality are a pair — pick both.”"
  }
] as const;

export const projects = [
  {
    name: "TalentInfra",
    label: "Zynd AICKATHON 2026 · Bias-aware hiring",
    period: "2026",
    impact:
      "Multi-agent hiring pipeline with bias detection, skill verification, and W3C verifiable credentials — streamed live over WebSockets.",
    architecture:
      "FastAPI + Next.js 15, PostgreSQL on Azure, Groq LLMs, GitHub Actions CI/CD to Azure App Service.",
    stack: ["Python", "FastAPI", "Next.js", "PostgreSQL", "Groq", "Azure", "Docker"],
    href: "https://github.com/Abhilash-0322/zynd-aickathon",
    live: "https://zynd-hiring-app.azurewebsites.net",
    why: "End-to-end multi-agent orchestration with production Azure deployment."
  },
  {
    name: "SolSniff",
    label: "Solana narrative AI agent",
    period: "2026",
    impact:
      "Autonomous agent synthesizing on-chain, GitHub, social, and news signals into ranked narratives and concrete build ideas.",
    architecture: "Next.js 14, Groq Llama 3.3, Prisma on Neon PostgreSQL, Vercel serverless.",
    stack: ["Next.js", "TypeScript", "Groq", "Prisma", "Vercel"],
    href: "https://github.com/Abhilash-0322/sol-sniff",
    live: "https://solsniffer.vercel.app/",
    why: "Structured LLM pipelines on live multi-source data — Superteam Earn bounty delivery."
  },
  {
    name: "ChainSentinel AI",
    label: "Multi-chain risk & compliance",
    period: "2025",
    impact: "AI-driven smart contract risk engine with severity scoring and monitoring across major chains.",
    architecture: "FastAPI analysis engine, Next.js UI, MongoDB, WebSocket alerts.",
    stack: ["FastAPI", "Next.js", "MongoDB", "Solidity", "Rust", "Move"],
    href: "https://github.com/Abhilash-0322/chainsentinel.ai",
    live: undefined,
    why: "Cross-chain security depth with practical AI classification."
  },
  {
    name: "Quadrant RAG",
    label: "Custom knowledge RAG",
    period: "2025",
    impact: "Retrieval-augmented generation over custom corpora with containerized FastAPI services.",
    architecture: "FastAPI, LangChain, vector databases, Docker.",
    stack: ["FastAPI", "LangChain", "Vector DB", "Docker"],
    href: "https://github.com/Abhilash-0322/quadrant-rag",
    live: undefined,
    why: "Demonstrates production-minded RAG architecture and ops."
  },
  {
    name: "Resume Analyzer",
    label: "AI resume feedback",
    period: "2025",
    impact: "Free tool delivering structured AI feedback on resumes for job seekers.",
    architecture: "Full-stack deployment on Vercel with LLM-backed analysis flows.",
    stack: ["Next.js", "AI", "Vercel"],
    href: "https://github.com/Abhilash-0322/resume-analyzer",
    live: "https://resume-analyzer-pulse.vercel.app",
    why: "User-facing AI product with clear utility and live hosting."
  },
  {
    name: "Zen Heaven",
    label: "Wellness AI & safety flows",
    period: "2025",
    impact: "Sentiment-aware recommendations with Twilio safety alerting for sensitive contexts.",
    architecture: "FastAPI, React, LangChain, MongoDB.",
    stack: ["FastAPI", "React", "LangChain", "Twilio", "MongoDB"],
    href: "https://github.com/Abhilash-0322/HackHaven2.0",
    live: "https://hack-haven2-0.vercel.app/",
    why: "Shows responsible AI integration under hackathon constraints."
  }
] as const;

export const achievements = [
  "MLH Solana track winning team — Brainwave Hackathon (AIMS DTU).",
  "1st place — solo AI agent hackathon track (500+ participants).",
  "Top 5 finalist — 5+ regional hackathons.",
  "Co-inventor — IoT-AI telemedicine patent (India 202511018153A, published Apr 2025).",
  "AWS Certified Cloud Practitioner; Google AI Essentials (Coursera).",
  "Open source: GSSOC, Hacktoberfest, merged PRs and reviews."
] as const;
