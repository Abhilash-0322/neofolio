export const profile = {
  name: "Abhilash Maurya",
  titles: ["Backend Developer", "Python Developer", "AI Systems Developer"],
  location: "Delhi NCR, India",
  bio:
    "Backend and AI systems developer shipping FastAPI services, cloud deployments, multi-agent workflows, and RAG pipelines. B.Tech IT at KIET; AWS Cloud Practitioner.",
  email: "abhilash.m.git@gmail.com",
  phone: "+91 7880764235",
  github: "https://github.com/Abhilash-0322",
  linkedin: "https://www.linkedin.com/in/abhilash-maurya-b615b9277/",
  x: "https://x.com/abhilash_glitch",
};

export const skillGroups = [
  { label: "Python", category: "lang" },
  { label: "C++", category: "lang" },
  { label: "JavaScript", category: "lang" },
  { label: "SQL", category: "lang" },
  { label: "FastAPI", category: "backend" },
  { label: "Django", category: "backend" },
  { label: "LangChain", category: "backend" },
  { label: "Next.js", category: "frontend" },
  { label: "React", category: "frontend" },
  { label: "PostgreSQL", category: "data" },
  { label: "MongoDB", category: "data" },
  { label: "Redis", category: "data" },
  { label: "Vector DBs", category: "data" },
  { label: "Docker", category: "platform" },
  { label: "AWS", category: "platform" },
  { label: "Azure", category: "platform" },
  { label: "GitHub Actions", category: "platform" },
  { label: "RAG", category: "ai" },
  { label: "AI Agents", category: "ai" },
];

export type Project = {
  name: string;
  description: string;
  stack: string[];
  github: string;
  live?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "TalentInfra",
    description:
      "Multi-agent bias-aware hiring platform for Zynd AICKATHON — orchestration, scoring, and fair screening at scale.",
    stack: ["FastAPI", "Next.js", "PostgreSQL", "Groq", "Azure"],
    github: "https://github.com/Abhilash-0322/zynd-aickathon",
    live: "https://zynd-hiring-app.azurewebsites.net",
    featured: true,
  },
  {
    name: "SolSniff",
    description:
      "Solana narrative and idea agent — research and ideation with Groq-backed reasoning.",
    stack: ["Next.js", "Groq", "Prisma", "Vercel"],
    github: "https://github.com/Abhilash-0322/sol-sniff",
    live: "https://solsniffer.vercel.app/",
    featured: true,
  },
  {
    name: "ChainSentinel AI",
    description:
      "Multi-chain smart contract risk and compliance analysis for DeFi teams.",
    stack: ["FastAPI", "Next.js", "MongoDB"],
    github: "https://github.com/Abhilash-0322/chainsentinel.ai",
    featured: true,
  },
  {
    name: "Quadrant RAG",
    description: "Production RAG over custom knowledge bases with LangChain and Docker.",
    stack: ["FastAPI", "LangChain", "Vector DBs", "Docker"],
    github: "https://github.com/Abhilash-0322/quadrant-rag",
  },
  {
    name: "Resume Analyzer",
    description: "Free AI resume feedback — structured scoring and actionable suggestions.",
    stack: ["AI", "Vercel"],
    github: "https://github.com/Abhilash-0322/resume-analyzer",
    live: "https://resume-analyzer-pulse.vercel.app",
  },
  {
    name: "Zen Heaven",
    description: "Wellness AI with sentiment analysis and Twilio safety flows.",
    stack: ["FastAPI", "React", "LangChain"],
    github: "https://github.com/Abhilash-0322/HackHaven2.0",
    live: "https://hack-haven2-0.vercel.app/",
  },
];

export const experience = [
  {
    role: "AI Engineer Intern",
    org: "Spearmint Technologies",
    period: "Aug 2026 · Remote",
    detail: "TTS pipelines, fine-tuning, Hermes agents, and data collection for voice features.",
  },
  {
    role: "AI/ML Coordinator",
    org: "Innogeeks Club, KIET",
    period: "Nov 2023 – Present",
    detail:
      "Led 5+ AI MVPs, mentored 6+ developers, coordinated hackathon teams of 3–6.",
  },
];

export const education = {
  degree: "B.Tech Information Technology",
  school: "KIET Group of Institutions (AKTU), Ghaziabad",
  year: "Expected 2027",
};

export const certifications = [
  "AWS Certified Cloud Practitioner",
  "Google AI Essentials (Coursera)",
];

export const achievements = [
  "MLH Solana track winner — Brainwave Hackathon (AIMS DTU)",
  "1st place — solo AI agent track (500+ participants)",
  "Top 5 finalist — 5+ regional hackathons",
  "Co-inventor — IoT-AI telemedicine patent (IN 202511018153A)",
];

export const codingProfiles = [
  { label: "LeetCode", href: "https://leetcode.com/u/Abhilash_Maurya/" },
  { label: "Codeforces", href: "https://codeforces.com/profile/mauryaabhi2003" },
  { label: "GFG", href: "https://www.geeksforgeeks.org/profile/mauryaabqern" },
  { label: "HackerRank", href: "https://www.hackerrank.com/profile/abhilash_0322" },
];
