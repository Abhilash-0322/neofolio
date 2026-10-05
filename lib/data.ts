export const profile = {
  name: "Abhilash Maurya",
  titles: [
    "Backend Developer",
    "Python Developer",
    "AI / AI Systems Developer",
  ],
  location: "Delhi NCR, India (Ghaziabad)",
  email: "abhilash.m.git@gmail.com",
  phone: "+91 7880764235",
  github: "https://github.com/Abhilash-0322",
  linkedin: "https://www.linkedin.com/in/abhilash-maurya-b615b9277/",
  x: "https://x.com/abhilash_glitch",
  resumePath: "/abhilash_python.pdf",
  bio:
    "Backend and AI systems developer with hands-on experience shipping FastAPI services, cloud deployments, multi-agent workflows, and RAG pipelines. B.Tech IT student at KIET; led campus AI MVPs and hackathon delivery. AWS Cloud Practitioner; comfortable on Azure and Docker-based CI/CD.",
};

export type Experience = {
  role: string;
  org: string;
  period: string;
  type?: string;
  summary?: string;
  bullets?: string[];
  tags?: string[];
};

export const experience: Experience[] = [
  {
    role: "AI Engineer Intern",
    org: "Spearmint Technologies",
    type: "Part-time, Remote",
    period: "Aug 2026",
    summary:
      "Voice and agent features—TTS pipelines, fine-tuning, data collection, Hermes-based agents.",
    tags: [
      "Text-to-Speech",
      "AI fine-tuning",
      "web scraping",
      "Hermes Agent",
      "AI agents",
    ],
  },
  {
    role: "AI/ML Coordinator",
    org: "Innogeeks Club, KIET",
    period: "Nov 2023 – Present",
    bullets: [
      "Led 5+ AI and full-stack MVPs (architecture, backend, deployment)",
      "Mentored 6+ developers (Python, FastAPI, ML, hackathon projects)",
      "Coordinated agile teams of 3–6 for hackathon prototypes",
      "API planning, database modeling, design reviews",
    ],
  },
];

export const education = [
  {
    degree: "B.Tech Information Technology",
    school: "KIET Group of Institutions (AKTU), Ghaziabad",
    period: "Expected 2027",
  },
  {
    degree: "Intermediate (CBSE)",
    school: "Maharishi Vidya Mandir",
    period: "",
  },
];

export const certifications = [
  "AWS Certified Cloud Practitioner",
  "Google AI Essentials (Coursera)",
];

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
    label: "Data",
    items: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Redis",
      "vector DBs",
      "Firebase",
    ],
  },
  {
    label: "Platform",
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

export type Project = {
  name: string;
  description: string;
  stack: string;
  github?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    name: "TalentInfra",
    description:
      "Multi-agent bias-aware hiring platform (Zynd AICKATHON 2026).",
    stack: "FastAPI, Next.js, PostgreSQL, Groq, Azure",
    github: "https://github.com/Abhilash-0322/zynd-aickathon",
    live: "https://zynd-hiring-app.azurewebsites.net",
  },
  {
    name: "SolSniff",
    description: "Solana narrative and idea agent.",
    stack: "Next.js, Groq, Prisma, Vercel",
    github: "https://github.com/Abhilash-0322/sol-sniff",
    live: "https://solsniffer.vercel.app/",
  },
  {
    name: "ChainSentinel AI",
    description: "Multi-chain smart contract risk and compliance.",
    stack: "FastAPI, Next.js, MongoDB",
    github: "https://github.com/Abhilash-0322/chainsentinel.ai",
  },
  {
    name: "Quadrant RAG",
    description: "RAG over custom knowledge bases.",
    stack: "FastAPI, LangChain, vector DBs, Docker",
    github: "https://github.com/Abhilash-0322/quadrant-rag",
  },
  {
    name: "Resume Analyzer",
    description: "Free AI resume feedback tool.",
    stack: "AI / web stack",
    github: "https://github.com/Abhilash-0322/resume-analyzer",
    live: "https://resume-analyzer-pulse.vercel.app",
  },
  {
    name: "Zen Heaven",
    description: "Wellness AI, sentiment, Twilio safety flows.",
    stack: "FastAPI, React, LangChain",
    github: "https://github.com/Abhilash-0322/HackHaven2.0",
    live: "https://hack-haven2-0.vercel.app/",
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
  { label: "LeetCode", url: "https://leetcode.com/u/Abhilash_Maurya/" },
  {
    label: "Codeforces",
    url: "https://codeforces.com/profile/mauryaabhi2003",
  },
  {
    label: "GeeksForGeeks",
    url: "https://www.geeksforgeeks.org/profile/mauryaabqern",
  },
  {
    label: "HackerRank",
    url: "https://www.hackerrank.com/profile/abhilash_0322",
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];
