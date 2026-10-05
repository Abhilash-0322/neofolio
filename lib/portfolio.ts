export const profile = {
  name: "Abhilash Maurya",
  location: "Delhi NCR, India · Ghaziabad",
  titles: [
    "Backend Developer",
    "Python Developer",
    "AI Systems Developer",
    "DevOps Engineer",
  ],
  bio: `Backend and AI systems developer with hands-on experience shipping FastAPI services, cloud deployments, multi-agent workflows, and RAG pipelines. B.Tech IT student at KIET; led campus AI MVPs and hackathon delivery. AWS Cloud Practitioner; comfortable on Azure and Docker-based CI/CD.`,
  focus:
    "Cloud infrastructure · Backend & APIs · Systems engineering · AI agents & RAG",
  interests:
    "Cloud roles · AI systems · Fintech engineering · Freelance APIs & production AI",
  contact: {
    email: "abhilash.m.git@gmail.com",
    phone: "+91 7880764235",
    github: "https://github.com/Abhilash-0322",
    linkedin: "https://www.linkedin.com/in/abhilash-maurya-b615b9277/",
    x: "https://x.com/abhilash_glitch",
  },
  resumePath: "/abhilash_python.pdf",
};

export const experience = [
  {
    role: "AI Engineer Intern",
    org: "Spearmint Technologies",
    meta: "Part-time · Remote · Aug 2026 (~1 month)",
    bullets: [
      "Voice and agent features—TTS pipelines, fine-tuning, and data collection.",
      "Hermes-based agents; web scraping and teamwork on production AI features.",
    ],
    tags: ["TTS", "Fine-tuning", "Hermes Agent", "AI agents"],
  },
  {
    role: "AI/ML Coordinator",
    org: "Innogeeks Club, KIET",
    meta: "Nov 2023 – Present",
    bullets: [
      "Led 5+ AI and full-stack MVPs (architecture, backend, deployment).",
      "Mentored 6+ developers on Python, FastAPI, ML, and hackathon projects.",
      "Coordinated agile teams of 3–6; API planning, DB modeling, design reviews.",
    ],
    tags: ["FastAPI", "Mentorship", "Agile", "Deployment"],
  },
];

export const education = {
  degree: "B.Tech Information Technology",
  school: "KIET Group of Institutions (AKTU), Ghaziabad",
  year: "Expected 2027",
  secondary: "Intermediate (CBSE) — Maharishi Vidya Mandir",
};

export const certifications = [
  "AWS Certified Cloud Practitioner",
  "Google AI Essentials (Coursera)",
];

export const skills = {
  languages: ["Python", "C++", "JavaScript", "SQL"],
  backend: ["FastAPI", "Django", "Express.js", "LangChain"],
  frontend: ["React", "Next.js"],
  data: [
    "PostgreSQL",
    "MongoDB",
    "MySQL",
    "Redis",
    "Vector DBs",
    "Firebase",
  ],
  platform: [
    "Docker",
    "Git",
    "Linux",
    "AWS",
    "Azure",
    "GitHub Actions",
    "RAG",
    "AI agents",
  ],
};

export type Project = {
  name: string;
  description: string;
  stack: string[];
  github?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    name: "TalentInfra",
    description:
      "Multi-agent bias-aware hiring platform (Zynd AICKATHON 2026).",
    stack: ["FastAPI", "Next.js", "PostgreSQL", "Groq", "Azure"],
    github: "https://github.com/Abhilash-0322/zynd-aickathon",
    live: "https://zynd-hiring-app.azurewebsites.net",
  },
  {
    name: "SolSniff",
    description: "Solana narrative and idea agent.",
    stack: ["Next.js", "Groq", "Prisma", "Vercel"],
    github: "https://github.com/Abhilash-0322/sol-sniff",
    live: "https://solsniffer.vercel.app/",
  },
  {
    name: "ChainSentinel AI",
    description: "Multi-chain smart contract risk and compliance.",
    stack: ["FastAPI", "Next.js", "MongoDB"],
    github: "https://github.com/Abhilash-0322/chainsentinel.ai",
  },
  {
    name: "Quadrant RAG",
    description: "RAG over custom knowledge bases.",
    stack: ["FastAPI", "LangChain", "Vector DBs", "Docker"],
    github: "https://github.com/Abhilash-0322/quadrant-rag",
  },
  {
    name: "Resume Analyzer",
    description: "Free AI resume feedback tool.",
    stack: ["AI", "Full-stack"],
    github: "https://github.com/Abhilash-0322/resume-analyzer",
    live: "https://resume-analyzer-pulse.vercel.app",
  },
  {
    name: "Zen Heaven",
    description: "Wellness AI, sentiment, Twilio safety flows.",
    stack: ["FastAPI", "React", "LangChain"],
    github: "https://github.com/Abhilash-0322/HackHaven2.0",
    live: "https://hack-haven2-0.vercel.app/",
  },
  {
    name: "dcXspotify",
    description: "Full-stack music + chat.",
    stack: ["React", "Node", "MongoDB", "Socket.io", "Clerk"],
    github: "https://github.com/Abhilash-0322/dcXspotify",
  },
];

export const achievements = [
  "MLH Solana track winning team — Brainwave Hackathon (AIMS DTU)",
  "1st place — solo AI agent hackathon track (500+ participants)",
  "Top 5 finalist — 5+ regional hackathons",
  "Co-inventor — IoT-AI telemedicine patent (India 202511018153A, Apr 2025)",
  "Open source: GSSOC, Hacktoberfest, merged PRs and reviews",
];

export const codingProfiles = [
  { label: "LeetCode", href: "https://leetcode.com/u/Abhilash_Maurya/" },
  {
    label: "Codeforces",
    href: "https://codeforces.com/profile/mauryaabhi2003",
  },
  {
    label: "GeeksForGeeks",
    href: "https://www.geeksforgeeks.org/profile/mauryaabqern",
  },
  {
    label: "HackerRank",
    href: "https://www.hackerrank.com/profile/abhilash_0322",
  },
];
