export const profile = {
  name: "Abhilash Maurya",
  titles: [
    "Backend Developer",
    "Python Developer",
    "AI / AI Systems Developer",
    "DevOps Engineer",
  ],
  location: "Delhi NCR, India (Ghaziabad)",
  email: "abhilash.m.git@gmail.com",
  phone: "+91 7880764235",
  links: {
    github: "https://github.com/Abhilash-0322",
    linkedin: "https://www.linkedin.com/in/abhilash-maurya-b615b9277/",
    x: "https://x.com/abhilash_glitch",
    leetcode: "https://leetcode.com/u/Abhilash_Maurya/",
    codeforces: "https://codeforces.com/profile/mauryaabhi2003",
    geeksforgeeks: "https://www.geeksforgeeks.org/profile/mauryaabqern",
    hackerrank: "https://www.hackerrank.com/profile/abhilash_0322",
  },
  bio:
    "Backend and AI systems developer with hands-on experience shipping FastAPI services, cloud deployments, multi-agent workflows, and RAG pipelines. B.Tech IT student at KIET; led campus AI MVPs and hackathon delivery. AWS Cloud Practitioner; comfortable on Azure and Docker-based CI/CD.",
  focus: [
    "cloud infrastructure",
    "backend & APIs",
    "systems engineering",
    "AI agents & RAG",
  ],
  interests: [
    "cloud-related roles",
    "AI systems roles",
    "finance / fintech-oriented engineering",
  ],
  experience: [
    {
      role: "AI Engineer Intern",
      company: "Spearmint Technologies",
      period: "Aug 2026 (~1 month)",
      modality: "Part-time, Remote",
      summary:
        "Voice and agent features—TTS pipelines, fine-tuning, data collection, Hermes-based agents.",
      skills: [
        "Text-to-Speech",
        "AI fine-tuning",
        "web scraping",
        "Hermes Agent",
        "AI agents development",
      ],
    },
    {
      role: "AI/ML Coordinator",
      company: "Innogeeks Club, KIET",
      period: "Nov 2023 – Present",
      bullets: [
        "Led 5+ AI and full-stack MVPs (architecture, backend, deployment)",
        "Mentored 6+ developers (Python, FastAPI, ML, hackathon projects)",
        "Coordinated agile teams of 3–6 for hackathon prototypes",
        "API planning, database modeling, design reviews",
      ],
    },
  ],
  education: [
    {
      degree: "B.Tech Information Technology",
      school: "KIET Group of Institutions (AKTU), Ghaziabad",
      detail: "Expected 2027",
    },
    {
      degree: "Intermediate (CBSE)",
      school: "Maharishi Vidya Mandir",
    },
  ],
  certifications: [
    "AWS Certified Cloud Practitioner",
    "Google AI Essentials (Coursera)",
  ],
  skills: {
    languages: ["Python", "C++", "JavaScript", "SQL"],
    backend: ["FastAPI", "Django", "Express.js", "LangChain"],
    frontend: ["React", "Next.js"],
    data: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Redis",
      "vector DBs",
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
  },
  projects: [
    {
      name: "TalentInfra",
      context: "Zynd AICKATHON 2026",
      description:
        "Multi-agent bias-aware hiring; FastAPI, Next.js, PostgreSQL, Groq, Azure",
      github: "https://github.com/Abhilash-0322/zynd-aickathon",
      live: "https://zynd-hiring-app.azurewebsites.net",
      tags: ["Azure", "Multi-agent", "FastAPI"],
    },
    {
      name: "SolSniff",
      description:
        "Solana narrative / idea agent; Next.js, Groq, Prisma, Vercel",
      github: "https://github.com/Abhilash-0322/sol-sniff",
      live: "https://solsniffer.vercel.app/",
      tags: ["AI agents", "Next.js", "Groq"],
    },
    {
      name: "ChainSentinel AI",
      description:
        "Multi-chain smart contract risk & compliance; FastAPI, Next.js, MongoDB",
      github: "https://github.com/Abhilash-0322/chainsentinel.ai",
      tags: ["FastAPI", "Security", "MongoDB"],
    },
    {
      name: "Quadrant RAG",
      description:
        "RAG over custom knowledge bases; FastAPI, LangChain, vector DBs, Docker",
      github: "https://github.com/Abhilash-0322/quadrant-rag",
      tags: ["RAG", "Docker", "LangChain"],
    },
    {
      name: "Resume Analyzer",
      description: "Free AI resume feedback tool",
      github: "https://github.com/Abhilash-0322/resume-analyzer",
      live: "https://resume-analyzer-pulse.vercel.app",
      tags: ["AI", "FastAPI"],
    },
    {
      name: "Zen Heaven",
      description:
        "Wellness AI, sentiment, Twilio safety flows; FastAPI, React, LangChain",
      github: "https://github.com/Abhilash-0322/HackHaven2.0",
      live: "https://hack-haven2-0.vercel.app/",
      tags: ["LangChain", "Safety flows"],
    },
    {
      name: "dcXspotify",
      description:
        "Full-stack music + chat; React, Node, MongoDB, Socket.io, Clerk",
      github: "https://github.com/Abhilash-0322/dcXspotify",
      tags: ["Real-time", "Full-stack"],
    },
  ],
  achievements: [
    "MLH Solana track winning team — Brainwave Hackathon (AIMS DTU)",
    "1st place — solo AI agent hackathon track (500+ participants)",
    "Top 5 finalist — 5+ regional hackathons",
    "Co-inventor — IoT-AI telemedicine patent (India 202511018153A, published Apr 2025)",
    "Open source: GSSOC, Hacktoberfest, merged PRs and reviews",
  ],
};

export const navLinks = [
  { href: "#cloud", label: "Cloud" },
  { href: "#ai-systems", label: "AI Systems" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
] as const;
