export const profile = {
  name: "Abhilash Maurya",
  role: "Backend & AI systems developer",
  location: "Delhi NCR, India",
  email: "abhilash.m.git@gmail.com",
  phone: "+91 7880764235",
  github: "https://github.com/Abhilash-0322",
  linkedin: "https://www.linkedin.com/in/abhilash-maurya-b615b9277/",
  x: "https://x.com/abhilash_glitch",
  bio: "I build the dependable layer behind useful products: FastAPI services, cloud deployments, multi-agent workflows, and RAG pipelines. I care about the path from an idea to a system people can actually use.",
};

export type QuestionId =
  | "about"
  | "experience"
  | "projects"
  | "stack"
  | "proof"
  | "contact";

export const questions: { id: QuestionId; number: string; question: string; short: string }[] = [
  { id: "about", number: "01", question: "Who is Abhilash?", short: "About" },
  { id: "experience", number: "02", question: "What have you shipped?", short: "Experience" },
  { id: "projects", number: "03", question: "What are you building?", short: "Projects" },
  { id: "stack", number: "04", question: "What is in your toolkit?", short: "Stack" },
  { id: "proof", number: "05", question: "What backs it up?", short: "Proof" },
  { id: "contact", number: "06", question: "How can we work together?", short: "Contact" },
];

export const experience = [
  {
    role: "AI Engineer Intern",
    org: "Spearmint Technologies",
    date: "Aug 2026 · Remote",
    bullets: [
      "Built voice and agent features across TTS pipelines, fine-tuning, and data collection.",
      "Worked with web scraping and Hermes-based agents to turn experiments into usable workflows.",
    ],
  },
  {
    role: "AI/ML Coordinator",
    org: "Innogeeks Club, KIET",
    date: "Nov 2023 — Present",
    bullets: [
      "Led 5+ AI and full-stack MVPs from architecture through backend and deployment.",
      "Mentored 6+ developers and coordinated teams of 3–6 for hackathon prototypes.",
      "Owned API planning, data modeling, and design reviews.",
    ],
  },
];

export const projects = [
  {
    name: "TalentInfra",
    tag: "AI / hiring",
    description: "A bias-aware hiring system built as a multi-agent workflow.",
    stack: "FastAPI · Next.js · PostgreSQL · Groq · Azure",
    github: "https://github.com/Abhilash-0322/zynd-aickathon",
    live: "https://zynd-hiring-app.azurewebsites.net",
  },
  {
    name: "SolSniff",
    tag: "Agent / crypto",
    description: "An agent that finds and develops narratives around Solana ideas.",
    stack: "Next.js · Groq · Prisma · Vercel",
    github: "https://github.com/Abhilash-0322/sol-sniff",
    live: "https://solsniffer.vercel.app/",
  },
  {
    name: "Quadrant RAG",
    tag: "Knowledge systems",
    description: "A RAG foundation for searching custom knowledge bases.",
    stack: "FastAPI · LangChain · Vector DBs · Docker",
    github: "https://github.com/Abhilash-0322/quadrant-rag",
    live: null,
  },
  {
    name: "ChainSentinel AI",
    tag: "Risk / compliance",
    description: "Multi-chain smart contract risk and compliance analysis.",
    stack: "FastAPI · Next.js · MongoDB",
    github: "https://github.com/Abhilash-0322/chainsentinel.ai",
    live: null,
  },
];

export const skillGroups = [
  { name: "Build", items: "Python, C++, JavaScript, SQL, React, Next.js" },
  { name: "Backend", items: "FastAPI, Django, Express.js, LangChain" },
  { name: "Data", items: "PostgreSQL, MongoDB, MySQL, Redis, vector DBs" },
  { name: "Ship", items: "Docker, Linux, AWS, Azure, GitHub Actions, CI/CD" },
];

export const achievements = [
  "MLH Solana track winning team — Brainwave Hackathon, AIMS DTU",
  "1st place — solo AI agent hackathon track, 500+ participants",
  "Top 5 finalist at 5+ regional hackathons",
  "Co-inventor on IoT-AI telemedicine patent India 202511018153A",
  "Open-source contributor across GSSOC, Hacktoberfest, and merged PRs",
];
