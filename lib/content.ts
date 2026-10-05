export const profile = {
  name: "Abhilash Maurya",
  titles: [
    "Backend Developer",
    "Python Developer",
    "AI Systems Developer",
    "DevOps Engineer",
  ],
  location: "Delhi NCR, India (Ghaziabad)",
  email: "abhilash.m.git@gmail.com",
  phone: "+91 7880764235",
  github: "https://github.com/Abhilash-0322",
  linkedin: "https://www.linkedin.com/in/abhilash-maurya-b615b9277/",
  x: "https://x.com/abhilash_glitch",
  bio: "Backend and AI systems developer with hands-on experience shipping FastAPI services, cloud deployments, multi-agent workflows, and RAG pipelines. B.Tech IT student at KIET; led campus AI MVPs and hackathon delivery. AWS Cloud Practitioner; comfortable on Azure and Docker-based CI/CD.",
};

export type SectionId =
  | "about"
  | "experience"
  | "education"
  | "skills"
  | "projects"
  | "achievements"
  | "contact";

export const sections: { id: SectionId; label: string; short: string }[] = [
  { id: "about", label: "About", short: "Abt" },
  { id: "experience", label: "Experience", short: "Exp" },
  { id: "education", label: "Education", short: "Edu" },
  { id: "skills", label: "Skills", short: "Skl" },
  { id: "projects", label: "Projects", short: "Prj" },
  { id: "achievements", label: "Achievements", short: "Ach" },
  { id: "contact", label: "Contact", short: "Con" },
];

export const experience = [
  {
    role: "AI Engineer Intern",
    org: "Spearmint Technologies",
    meta: "Part-time · Remote · Aug 2026 (~1 month)",
    bullets: [
      "Voice and agent features—TTS pipelines, fine-tuning, data collection, Hermes-based agents.",
      "Skills: Text-to-Speech, AI fine-tuning, web scraping, Hermes Agent, AI agents development.",
    ],
  },
  {
    role: "AI/ML Coordinator",
    org: "Innogeeks Club, KIET",
    meta: "Nov 2023 – Present",
    bullets: [
      "Led 5+ AI and full-stack MVPs (architecture, backend, deployment).",
      "Mentored 6+ developers (Python, FastAPI, ML, hackathon projects).",
      "Coordinated agile teams of 3–6 for hackathon prototypes.",
      "API planning, database modeling, design reviews.",
    ],
  },
];

export const education = [
  {
    degree: "B.Tech Information Technology",
    school: "KIET Group of Institutions (AKTU), Ghaziabad",
    meta: "Expected 2027",
  },
  {
    degree: "Intermediate (CBSE)",
    school: "Maharishi Vidya Mandir",
    meta: "",
  },
];

export const certifications = [
  "AWS Certified Cloud Practitioner",
  "Google AI Essentials (Coursera)",
];

export const skillGroups = [
  {
    name: "Languages",
    items: ["Python", "C++", "JavaScript", "SQL"],
  },
  {
    name: "Backend",
    items: ["FastAPI", "Django", "Express.js", "LangChain"],
  },
  {
    name: "Frontend",
    items: ["React", "Next.js"],
  },
  {
    name: "Data",
    items: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Redis",
      "Vector DBs",
      "Firebase",
    ],
  },
  {
    name: "Platform",
    items: [
      "Docker",
      "Git",
      "Linux",
      "AWS",
      "Azure",
      "GitHub Actions",
      "RAG",
      "AI agents",
    ],
  },
];

export const projects = [
  {
    name: "TalentInfra (Zynd AICKATHON 2026)",
    desc: "Multi-agent bias-aware hiring; FastAPI, Next.js, PostgreSQL, Groq, Azure.",
    github: "https://github.com/Abhilash-0322/zynd-aickathon",
    live: "https://zynd-hiring-app.azurewebsites.net",
  },
  {
    name: "SolSniff",
    desc: "Solana narrative / idea agent; Next.js, Groq, Prisma, Vercel.",
    github: "https://github.com/Abhilash-0322/sol-sniff",
    live: "https://solsniffer.vercel.app/",
  },
  {
    name: "ChainSentinel AI",
    desc: "Multi-chain smart contract risk & compliance; FastAPI, Next.js, MongoDB.",
    github: "https://github.com/Abhilash-0322/chainsentinel.ai",
    live: null,
  },
  {
    name: "Quadrant RAG",
    desc: "RAG over custom knowledge bases; FastAPI, LangChain, vector DBs, Docker.",
    github: "https://github.com/Abhilash-0322/quadrant-rag",
    live: null,
  },
  {
    name: "Resume Analyzer",
    desc: "Free AI resume feedback tool.",
    github: "https://github.com/Abhilash-0322/resume-analyzer",
    live: "https://resume-analyzer-pulse.vercel.app",
  },
  {
    name: "Zen Heaven",
    desc: "Wellness AI, sentiment, Twilio safety flows; FastAPI, React, LangChain.",
    github: "https://github.com/Abhilash-0322/HackHaven2.0",
    live: "https://hack-haven2-0.vercel.app/",
  },
  {
    name: "dcXspotify",
    desc: "Full-stack music + chat; React, Node, MongoDB, Socket.io, Clerk.",
    github: "https://github.com/Abhilash-0322/dcXspotify",
    live: null,
  },
];

export const achievements = [
  "MLH Solana track winning team — Brainwave Hackathon (AIMS DTU)",
  "1st place — solo AI agent hackathon track (500+ participants)",
  "Top 5 finalist — 5+ regional hackathons",
  "Co-inventor — IoT-AI telemedicine patent (India 202511018153A, published Apr 2025)",
  "Open source: GSSOC, Hacktoberfest, merged PRs and reviews",
];

export const codingProfiles = [
  { label: "LeetCode", url: "https://leetcode.com/u/Abhilash_Maurya/" },
  { label: "Codeforces", url: "https://codeforces.com/profile/mauryaabhi2003" },
  {
    label: "GeeksForGeeks",
    url: "https://www.geeksforgeeks.org/profile/mauryaabqern",
  },
  {
    label: "HackerRank",
    url: "https://www.hackerrank.com/profile/abhilash_0322",
  },
];
