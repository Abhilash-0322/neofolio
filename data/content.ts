export const profile = {
  name: "Abhilash Maurya",
  titles: ["Backend Developer", "Python Developer", "AI Systems Developer", "DevOps Engineer"],
  role: "Backend & AI Systems Developer",
  location: "Delhi NCR, India (Ghaziabad)",
  email: "abhilash.m.git@gmail.com",
  phone: "+91 7880764235",
  github: "https://github.com/Abhilash-0322",
  x: "https://x.com/abhilash_glitch",
  linkedin: "https://www.linkedin.com/in/abhilash-maurya-b615b9277/",
  bio:
    "Backend and AI systems developer with hands-on experience shipping FastAPI services, cloud deployments, multi-agent workflows, and RAG pipelines. B.Tech IT student at KIET; led campus AI MVPs and hackathon delivery. AWS Cloud Practitioner; comfortable on Azure and Docker-based CI/CD.",
  resumePath: "/abhilash_python.pdf",
};

export const experience = [
  {
    role: "AI Engineer Intern",
    org: "Spearmint Technologies",
    period: "Aug 2026 · Part-time, Remote",
    summary:
      "Voice and agent features—TTS pipelines, fine-tuning, data collection, and Hermes-based agents.",
    skills: ["TTS", "Fine-tuning", "Web scraping", "Hermes Agent", "AI agents"],
  },
  {
    role: "AI/ML Coordinator",
    org: "Innogeeks Club, KIET",
    period: "Nov 2023 – Present",
    summary:
      "Led 5+ AI and full-stack MVPs; mentored 6+ developers; coordinated agile teams for hackathon prototypes.",
    skills: ["FastAPI", "Architecture", "Mentorship", "API planning", "Deployment"],
  },
] as const;

export const education = {
  degree: "B.Tech Information Technology",
  school: "KIET Group of Institutions (AKTU), Ghaziabad",
  period: "Expected 2027",
  prior: "Intermediate (CBSE) — Maharishi Vidya Mandir",
};

export const certifications = [
  "AWS Certified Cloud Practitioner",
  "Google AI Essentials (Coursera)",
] as const;

export const skills = {
  languages: ["Python", "C++", "JavaScript", "SQL"],
  backend: ["FastAPI", "Django", "Express.js", "LangChain"],
  frontend: ["React", "Next.js"],
  data: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Vector DBs", "Firebase"],
  platform: ["Docker", "Git", "Linux", "AWS", "Azure", "GitHub Actions", "RAG", "AI agents"],
};

export const projects = [
  {
    name: "TalentInfra",
    label: "Zynd AICKATHON 2026 · Multi-agent hiring",
    stack: ["FastAPI", "Next.js", "PostgreSQL", "Groq", "Azure"],
    href: "https://github.com/Abhilash-0322/zynd-aickathon",
    live: "https://zynd-hiring-app.azurewebsites.net",
    summary:
      "Bias-aware multi-agent hiring infrastructure with live orchestration and Azure deployment.",
  },
  {
    name: "SolSniff",
    label: "Solana narrative / idea agent",
    stack: ["Next.js", "Groq", "Prisma", "Vercel"],
    href: "https://github.com/Abhilash-0322/sol-sniff",
    live: "https://solsniffer.vercel.app/",
    summary: "Autonomous agent detecting Solana narratives and generating grounded product ideas.",
  },
  {
    name: "ChainSentinel AI",
    label: "Multi-chain smart contract risk",
    stack: ["FastAPI", "Next.js", "MongoDB"],
    href: "https://github.com/Abhilash-0322/chainsentinel.ai",
    summary: "Risk and compliance scoring across chains with structured severity analysis.",
  },
  {
    name: "Quadrant RAG",
    label: "Custom knowledge RAG",
    stack: ["FastAPI", "LangChain", "Vector DBs", "Docker"],
    href: "https://github.com/Abhilash-0322/quadrant-rag",
    summary: "Production RAG over custom knowledge bases with containerized deployment.",
  },
  {
    name: "Resume Analyzer",
    label: "AI resume feedback",
    stack: ["Next.js", "AI"],
    href: "https://github.com/Abhilash-0322/resume-analyzer",
    live: "https://resume-analyzer-pulse.vercel.app",
    summary: "Free tool for structured AI feedback on resumes.",
  },
  {
    name: "Zen Heaven",
    label: "Wellness AI & safety flows",
    stack: ["FastAPI", "React", "LangChain", "Twilio"],
    href: "https://github.com/Abhilash-0322/HackHaven2.0",
    live: "https://hack-haven2-0.vercel.app/",
    summary: "Sentiment-aware wellness features with Twilio safety workflows.",
  },
  {
    name: "dcXspotify",
    label: "Full-stack music + chat",
    stack: ["React", "Node", "MongoDB", "Socket.io", "Clerk"],
    href: "https://github.com/Abhilash-0322/dcXspotify",
    summary: "Real-time music and chat experience with authenticated sessions.",
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
  { name: "LeetCode", href: "https://leetcode.com/u/Abhilash_Maurya/" },
  { name: "Codeforces", href: "https://codeforces.com/profile/mauryaabhi2003" },
  {
    name: "GeeksForGeeks",
    href: "https://www.geeksforgeeks.org/profile/mauryaabqern",
  },
  { name: "HackerRank", href: "https://www.hackerrank.com/profile/abhilash_0322" },
] as const;
