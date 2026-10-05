export const profile = {
  name: "Abhilash Maurya",
  role: "Backend & AI Systems Developer",
  tagline:
    "I design and ship reliable APIs, cloud deployments, and production AI systems—from multi-agent orchestration to RAG pipelines.",
  location: "Delhi NCR, India",
  email: "abhilash.m.git@gmail.com",
  phone: "+91 7880764235",
  github: "https://github.com/Abhilash-0322",
  x: "https://x.com/abhilash_glitch",
  linkedin: "https://www.linkedin.com/in/abhilash-maurya-b615b9277/",
  availability:
    "Open to cloud engineering, AI systems, and fintech-oriented roles",
  education: {
    degree: "B.Tech, Information Technology",
    school: "KIET Group of Institutions (AKTU), Ghaziabad",
    year: "Expected 2027",
  },
};

export const navItems = [
  { href: "#home", label: "Entrance" },
  { href: "#about", label: "Curator" },
  { href: "#experience", label: "Timeline" },
  { href: "#projects", label: "Exhibits" },
  { href: "#skills", label: "Collection" },
  { href: "#contact", label: "Visit" },
] as const;

export const aboutParagraphs = [
  "Backend and AI systems developer with hands-on experience shipping FastAPI services, cloud deployments, multi-agent workflows, and RAG pipelines.",
  "B.Tech IT student at KIET; led campus AI MVPs and hackathon delivery. AWS Cloud Practitioner; comfortable on Azure and Docker-based CI/CD.",
  "Focus: cloud infrastructure, backend & APIs, systems engineering, AI agents & RAG—employer- and client-ready work that goes beyond demos.",
] as const;

export const experience = [
  {
    title: "AI Engineer Intern",
    org: "Spearmint Technologies",
    period: "Aug 2026 · Part-time, Remote",
    summary:
      "Voice and agent features—TTS pipelines, fine-tuning, data collection, and Hermes-based agents.",
    tags: ["TTS", "Fine-tuning", "Hermes Agent", "AI agents"],
  },
  {
    title: "AI/ML Coordinator",
    org: "Innogeeks Club, KIET",
    period: "Nov 2023 – Present",
    summary:
      "Led 5+ AI and full-stack MVPs; mentored 6+ developers; coordinated agile teams for hackathon prototypes.",
    tags: ["FastAPI", "Mentorship", "MVP delivery", "Architecture"],
  },
] as const;

export const skillGroups = [
  {
    label: "Languages",
    items: ["Python", "C++", "JavaScript", "SQL"],
  },
  {
    label: "Backend",
    items: ["FastAPI", "Django", "Express.js", "LangChain"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js"],
  },
  {
    label: "Data & platform",
    items: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Docker",
      "AWS",
      "Azure",
      "GitHub Actions",
      "RAG",
      "AI agents",
    ],
  },
] as const;

export const certifications = [
  "AWS Certified Cloud Practitioner",
  "Google AI Essentials (Coursera)",
] as const;

export const projects = [
  {
    name: "TalentInfra",
    label: "Zynd AICKATHON 2026 · Multi-agent hiring",
    period: "2026",
    impact:
      "Bias-aware hiring with specialist AI agents, verifiable credentials, and live WebSocket transparency on Azure.",
    stack: ["FastAPI", "Next.js", "PostgreSQL", "Groq", "Azure"],
    href: "https://github.com/Abhilash-0322/zynd-aickathon",
    live: "https://zynd-hiring-app.azurewebsites.net",
  },
  {
    name: "SolSniff",
    label: "Solana narrative detection agent",
    period: "2026",
    impact:
      "Autonomous agent synthesizing on-chain, GitHub, and social signals into ranked build ideas.",
    stack: ["Next.js", "Groq", "Prisma", "Vercel"],
    href: "https://github.com/Abhilash-0322/sol-sniff",
    live: "https://solsniffer.vercel.app/",
  },
  {
    name: "ChainSentinel AI",
    label: "Multi-chain contract risk",
    period: "2025",
    impact:
      "Risk and compliance scoring across Ethereum, Solana, and Aptos with structured severity output.",
    stack: ["FastAPI", "Next.js", "MongoDB"],
    href: "https://github.com/Abhilash-0322/chainsentinel.ai",
  },
  {
    name: "Quadrant RAG",
    label: "Custom knowledge RAG",
    period: "2025",
    impact: "RAG pipelines over custom knowledge bases with containerized deployment.",
    stack: ["FastAPI", "LangChain", "Docker"],
    href: "https://github.com/Abhilash-0322/quadrant-rag",
  },
  {
    name: "Resume Analyzer",
    label: "AI resume feedback",
    period: "2025",
    impact: "Free tool for structured resume feedback powered by LLM workflows.",
    stack: ["Next.js", "AI"],
    href: "https://github.com/Abhilash-0322/resume-analyzer",
    live: "https://resume-analyzer-pulse.vercel.app",
  },
  {
    name: "Zen Heaven",
    label: "Wellness AI & safety flows",
    period: "2025",
    impact: "Sentiment-aware recommendations with Twilio safety alerting.",
    stack: ["FastAPI", "React", "LangChain"],
    href: "https://github.com/Abhilash-0322/HackHaven2.0",
    live: "https://hack-haven2-0.vercel.app/",
  },
] as const;

export const achievements = [
  "MLH Solana track winning team — Brainwave Hackathon (AIMS DTU)",
  "1st place — solo AI agent hackathon track (500+ participants)",
  "Top 5 finalist — 5+ regional hackathons",
  "Co-inventor — IoT-AI telemedicine patent (India 202511018153A, Apr 2025)",
  "Open source: GSSOC, Hacktoberfest, merged PRs and reviews",
] as const;

export const codingProfiles = [
  {
    name: "LeetCode",
    handle: "Abhilash_Maurya",
    href: "https://leetcode.com/u/Abhilash_Maurya/",
  },
  {
    name: "Codeforces",
    handle: "mauryaabhi2003",
    href: "https://codeforces.com/profile/mauryaabhi2003",
  },
  {
    name: "GeeksForGeeks",
    handle: "mauryaabqern",
    href: "https://www.geeksforgeeks.org/profile/mauryaabqern",
  },
  {
    name: "HackerRank",
    handle: "abhilash_0322",
    href: "https://www.hackerrank.com/profile/abhilash_0322",
  },
] as const;
