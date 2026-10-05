export const profile = {
  name: "Abhilash Maurya",
  titles: [
    "Backend Developer",
    "Python Developer",
    "AI / AI Systems Developer",
    "DevOps Engineer"
  ],
  location: "Delhi NCR, India (Ghaziabad)",
  email: "abhilash.m.git@gmail.com",
  phone: "+91 7880764235",
  github: "https://github.com/Abhilash-0322",
  linkedin: "https://www.linkedin.com/in/abhilash-maurya-b615b9277/",
  x: "https://x.com/abhilash_glitch",
  resume: "/abhilash_python.pdf",
  bio:
    "Backend and AI systems developer with hands-on experience shipping FastAPI services, cloud deployments, multi-agent workflows, and RAG pipelines. B.Tech IT student at KIET; led campus AI MVPs and hackathon delivery. AWS Cloud Practitioner; comfortable on Azure and Docker-based CI/CD.",
  focus:
    "Cloud infrastructure, backend & APIs, systems engineering, AI agents & RAG. Open to cloud, AI systems, and fintech-oriented engineering roles—and freelance work on APIs, deployments, and production AI features."
};

export const experience = [
  {
    role: "AI Engineer Intern",
    org: "Spearmint Technologies",
    meta: "Part-time · Remote · Aug 2026 (~1 month)",
    summary:
      "Voice and agent features—TTS pipelines, fine-tuning, data collection, Hermes-based agents.",
    skills: [
      "Text-to-Speech",
      "AI fine-tuning",
      "Web scraping",
      "Hermes Agent",
      "AI agents",
      "Teamwork"
    ]
  },
  {
    role: "AI/ML Coordinator",
    org: "Innogeeks Club, KIET",
    meta: "Nov 2023 – Present",
    bullets: [
      "Led 5+ AI and full-stack MVPs (architecture, backend, deployment)",
      "Mentored 6+ developers (Python, FastAPI, ML, hackathon projects)",
      "Coordinated agile teams of 3–6 for hackathon prototypes",
      "API planning, database modeling, design reviews"
    ]
  }
] as const;

export const education = [
  {
    degree: "B.Tech Information Technology",
    school: "KIET Group of Institutions (AKTU), Ghaziabad",
    meta: "Expected 2027"
  },
  {
    degree: "Intermediate (CBSE)",
    school: "Maharishi Vidya Mandir",
    meta: ""
  }
] as const;

export const certifications = [
  "AWS Certified Cloud Practitioner",
  "Google AI Essentials (Coursera)"
] as const;

export const skillGroups = [
  {
    label: "Languages",
    items: ["Python", "C++", "JavaScript", "SQL"]
  },
  {
    label: "Backend",
    items: ["FastAPI", "Django", "Express.js", "LangChain"]
  },
  {
    label: "Frontend",
    items: ["React", "Next.js"]
  },
  {
    label: "Data",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Vector DBs", "Firebase"]
  },
  {
    label: "Platform",
    items: ["Docker", "Git", "Linux", "AWS", "Azure", "GitHub Actions", "RAG", "AI agents"]
  }
] as const;

export const projects = [
  {
    name: "TalentInfra",
    tagline: "Zynd AICKATHON 2026 — Multi-agent bias-aware hiring",
    stack: ["FastAPI", "Next.js", "PostgreSQL", "Groq", "Azure"],
    href: "https://github.com/Abhilash-0322/zynd-aickathon",
    live: "https://zynd-hiring-app.azurewebsites.net"
  },
  {
    name: "SolSniff",
    tagline: "Solana narrative / idea agent",
    stack: ["Next.js", "Groq", "Prisma", "Vercel"],
    href: "https://github.com/Abhilash-0322/sol-sniff",
    live: "https://solsniffer.vercel.app/"
  },
  {
    name: "ChainSentinel AI",
    tagline: "Multi-chain smart contract risk & compliance",
    stack: ["FastAPI", "Next.js", "MongoDB"],
    href: "https://github.com/Abhilash-0322/chainsentinel.ai",
    live: null
  },
  {
    name: "Quadrant RAG",
    tagline: "RAG over custom knowledge bases",
    stack: ["FastAPI", "LangChain", "Vector DBs", "Docker"],
    href: "https://github.com/Abhilash-0322/quadrant-rag",
    live: null
  },
  {
    name: "Resume Analyzer",
    tagline: "Free AI resume feedback tool",
    stack: ["AI", "Web"],
    href: "https://github.com/Abhilash-0322/resume-analyzer",
    live: "https://resume-analyzer-pulse.vercel.app"
  },
  {
    name: "Zen Heaven",
    tagline: "Wellness AI, sentiment, Twilio safety flows",
    stack: ["FastAPI", "React", "LangChain"],
    href: "https://github.com/Abhilash-0322/HackHaven2.0",
    live: "https://hack-haven2-0.vercel.app/"
  },
  {
    name: "dcXspotify",
    tagline: "Full-stack music + chat",
    stack: ["React", "Node", "MongoDB", "Socket.io", "Clerk"],
    href: "https://github.com/Abhilash-0322/dcXspotify",
    live: null
  }
] as const;

export const achievements = [
  "MLH Solana track winning team — Brainwave Hackathon (AIMS DTU)",
  "1st place — solo AI agent hackathon track (500+ participants)",
  "Top 5 finalist — 5+ regional hackathons",
  "Co-inventor — IoT-AI telemedicine patent (India 202511018153A, published Apr 2025)",
  "Open source: GSSOC, Hacktoberfest, merged PRs and reviews"
] as const;

export const codingProfiles = [
  {
    name: "LeetCode",
    href: "https://leetcode.com/u/Abhilash_Maurya/"
  },
  {
    name: "Codeforces",
    href: "https://codeforces.com/profile/mauryaabhi2003"
  },
  {
    name: "GeeksForGeeks",
    href: "https://www.geeksforgeeks.org/profile/mauryaabqern"
  },
  {
    name: "HackerRank",
    href: "https://www.hackerrank.com/profile/abhilash_0322"
  }
] as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" }
] as const;
