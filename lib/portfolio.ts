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

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  stack: string[];
  github?: string;
  live?: string;
  summary: string;
};

export const projects: Project[] = [
  {
    slug: "talentinfra",
    title: "TalentInfra",
    subtitle: "Zynd AICKATHON 2026 — bias-aware hiring agents",
    stack: ["FastAPI", "Next.js", "PostgreSQL", "Groq", "Azure"],
    github: "https://github.com/Abhilash-0322/zynd-aickathon",
    live: "https://zynd-hiring-app.azurewebsites.net",
    summary:
      "Multi-agent hiring pipeline with bias checks, audit trails, and Azure deployment for live demos.",
  },
  {
    slug: "solsniff",
    title: "SolSniff",
    subtitle: "Solana narrative and idea agent",
    stack: ["Next.js", "Groq", "Prisma", "Vercel"],
    github: "https://github.com/Abhilash-0322/sol-sniff",
    live: "https://solsniffer.vercel.app/",
    summary:
      "Cross-source Solana signals synthesized into founder-ready narratives on Vercel.",
  },
  {
    slug: "chainsentinel",
    title: "ChainSentinel AI",
    subtitle: "Multi-chain contract risk and compliance",
    stack: ["FastAPI", "Next.js", "MongoDB"],
    github: "https://github.com/Abhilash-0322/chainsentinel.ai",
    summary:
      "Analyst-grade contract scoring with explainable reports across chains.",
  },
  {
    slug: "quadrant-rag",
    title: "Quadrant RAG",
    subtitle: "Retrieval over custom knowledge bases",
    stack: ["FastAPI", "LangChain", "Vector DBs", "Docker"],
    github: "https://github.com/Abhilash-0322/quadrant-rag",
    summary:
      "Production-shaped RAG with Docker Compose for full-stack review.",
  },
  {
    slug: "resume-analyzer",
    title: "Resume Analyzer",
    subtitle: "Free AI résumé feedback",
    stack: ["Next.js", "AI APIs"],
    github: "https://github.com/Abhilash-0322/resume-analyzer",
    live: "https://resume-analyzer-pulse.vercel.app",
    summary: "Public tool with structured, role-aware résumé critiques.",
  },
  {
    slug: "zen-heaven",
    title: "Zen Heaven",
    subtitle: "Wellness AI with safety-oriented telephony",
    stack: ["FastAPI", "React", "LangChain", "Twilio"],
    github: "https://github.com/Abhilash-0322/HackHaven2.0",
    live: "https://hack-haven2-0.vercel.app/",
    summary:
      "Sentiment-aware chat with Twilio escalation when safety thresholds trigger.",
  },
];

export const experience = [
  {
    role: "AI Engineer Intern",
    org: "Spearmint Technologies",
    period: "Aug 2026 · Part-time, Remote",
    detail:
      "Voice and agent features—TTS pipelines, fine-tuning, data collection, and Hermes-based agents.",
  },
  {
    role: "AI/ML Coordinator",
    org: "Innogeeks Club, KIET",
    period: "Nov 2023 – Present",
    detail:
      "Led five-plus AI MVPs, mentored six-plus developers, and ran agile squads for hackathon delivery.",
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

export const navSections = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "connect", label: "Connect" },
] as const;
