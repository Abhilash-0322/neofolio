export const profile = {
  name: "Abhilash Maurya",
  titles: ["Backend Developer", "Python Developer", "AI / AI Systems Developer"],
  role: "Backend & AI Systems Developer",
  location: "Delhi NCR, India (Ghaziabad)",
  email: "abhilash.m.git@gmail.com",
  phone: "+91 7880764235",
  github: "https://github.com/Abhilash-0322",
  linkedin: "https://www.linkedin.com/in/abhilash-maurya-b615b9277/",
  x: "https://x.com/abhilash_glitch",
  bio:
    "Backend and AI systems developer with hands-on experience shipping FastAPI services, cloud deployments, multi-agent workflows, and RAG pipelines. B.Tech IT student at KIET; led campus AI MVPs and hackathon delivery. AWS Cloud Practitioner; comfortable on Azure and Docker-based CI/CD."
};

export const experience = [
  {
    id: "spearmint",
    period: "Aug 2026",
    route: "Spearmint Technologies",
    role: "AI Engineer Intern · Part-time, Remote",
    platform: "Voice & Agents",
    summary:
      "Voice and agent features—TTS pipelines, fine-tuning, data collection, Hermes-based agents.",
    tags: ["TTS", "Fine-tuning", "Web scraping", "Hermes Agent", "AI agents"]
  },
  {
    id: "innogeeks",
    period: "Nov 2023 – Present",
    route: "Innogeeks Club, KIET",
    role: "AI/ML Coordinator",
    platform: "Campus AI MVPs",
    summary:
      "Led 5+ AI and full-stack MVPs; mentored 6+ developers; coordinated agile teams of 3–6 for hackathon prototypes.",
    tags: ["FastAPI", "Mentorship", "API design", "Deployment"]
  }
] as const;

export const education = [
  {
    school: "KIET Group of Institutions (AKTU), Ghaziabad",
    degree: "B.Tech Information Technology",
    period: "Expected 2027"
  },
  {
    school: "Maharishi Vidya Mandir",
    degree: "Intermediate (CBSE)",
    period: ""
  }
] as const;

export const certifications = [
  "AWS Certified Cloud Practitioner",
  "Google AI Essentials (Coursera)"
] as const;

export const skillGroups = [
  { label: "Languages", items: ["Python", "C++", "JavaScript", "SQL"] },
  { label: "Backend", items: ["FastAPI", "Django", "Express.js", "LangChain"] },
  { label: "Frontend", items: ["React", "Next.js"] },
  {
    label: "Data",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "vector DBs", "Firebase"]
  },
  {
    label: "Platform",
    items: ["Docker", "Git", "Linux", "AWS", "Azure", "GitHub Actions", "RAG", "AI agents"]
  }
] as const;

export const projects = [
  {
    name: "TalentInfra",
    line: "Zynd AICKATHON 2026",
    description: "Multi-agent bias-aware hiring; FastAPI, Next.js, PostgreSQL, Groq, Azure.",
    href: "https://github.com/Abhilash-0322/zynd-aickathon",
    live: "https://zynd-hiring-app.azurewebsites.net"
  },
  {
    name: "SolSniff",
    line: "Solana narrative agent",
    description: "Narrative and idea agent; Next.js, Groq, Prisma, Vercel.",
    href: "https://github.com/Abhilash-0322/sol-sniff",
    live: "https://solsniffer.vercel.app/"
  },
  {
    name: "ChainSentinel AI",
    line: "Multi-chain risk",
    description: "Smart contract risk and compliance; FastAPI, Next.js, MongoDB.",
    href: "https://github.com/Abhilash-0322/chainsentinel.ai",
    live: undefined
  },
  {
    name: "Quadrant RAG",
    line: "Knowledge bases",
    description: "RAG over custom knowledge bases; FastAPI, LangChain, vector DBs, Docker.",
    href: "https://github.com/Abhilash-0322/quadrant-rag",
    live: undefined
  },
  {
    name: "Resume Analyzer",
    line: "AI feedback",
    description: "Free AI resume feedback tool.",
    href: "https://github.com/Abhilash-0322/resume-analyzer",
    live: "https://resume-analyzer-pulse.vercel.app"
  },
  {
    name: "Zen Heaven",
    line: "Wellness AI",
    description: "Sentiment and Twilio safety flows; FastAPI, React, LangChain.",
    href: "https://github.com/Abhilash-0322/HackHaven2.0",
    live: "https://hack-haven2-0.vercel.app/"
  },
  {
    name: "dcXspotify",
    line: "Music + chat",
    description: "Full-stack music and chat; React, Node, MongoDB, Socket.io, Clerk.",
    href: "https://github.com/Abhilash-0322/dcXspotify",
    live: undefined
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
