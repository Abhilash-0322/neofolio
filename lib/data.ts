export const profile = {
  name: "Abhilash Maurya",
  titles: ["Backend Developer", "Python Developer", "AI Systems Developer"],
  location: "Delhi NCR, India",
  email: "abhilash.m.git@gmail.com",
  phone: "+91 7880764235",
  github: "https://github.com/Abhilash-0322",
  linkedin: "https://www.linkedin.com/in/abhilash-maurya-b615b9277/",
  x: "https://x.com/abhilash_glitch",
  bio: "Backend and AI systems developer shipping FastAPI services, cloud deployments, multi-agent workflows, and RAG pipelines. B.Tech IT at KIET; AWS Cloud Practitioner.",
};

export type SkillBar = { label: string; value: number; group: string };

export const skillBars: SkillBar[] = [
  { label: "Python", value: 92, group: "Languages" },
  { label: "FastAPI / Django", value: 88, group: "Backend" },
  { label: "LangChain / Agents", value: 85, group: "AI" },
  { label: "PostgreSQL / MongoDB", value: 82, group: "Data" },
  { label: "Docker / CI/CD", value: 80, group: "Platform" },
  { label: "AWS / Azure", value: 78, group: "Cloud" },
  { label: "Next.js / React", value: 75, group: "Frontend" },
  { label: "RAG / Vector DBs", value: 84, group: "AI" },
];

export const impactMetrics = [
  { label: "MVPs led", value: "5+", delta: "+campus AI" },
  { label: "Devs mentored", value: "6+", delta: "Innogeeks" },
  { label: "Hackathon wins", value: "3", delta: "MLH + solo 500+" },
  { label: "Patents", value: "1", delta: "IoT telemedicine" },
];

export const stackDistribution = [
  { label: "Backend", pct: 35, color: "bg-accent" },
  { label: "AI / ML", pct: 28, color: "bg-accent2" },
  { label: "Cloud / DevOps", pct: 22, color: "bg-metric" },
  { label: "Frontend", pct: 15, color: "bg-warn" },
];

export type Project = {
  name: string;
  impact: string;
  metric: string;
  metricLabel: string;
  stack: string[];
  github?: string;
  live?: string;
  bars: number[];
};

export const projects: Project[] = [
  {
    name: "TalentInfra",
    impact: "Multi-agent bias-aware hiring platform",
    metric: "6",
    metricLabel: "agent roles orchestrated",
    stack: ["FastAPI", "Next.js", "PostgreSQL", "Groq", "Azure"],
    github: "https://github.com/Abhilash-0322/zynd-aickathon",
    live: "https://zynd-hiring-app.azurewebsites.net",
    bars: [72, 88, 65, 90, 78],
  },
  {
    name: "Quadrant RAG",
    impact: "Custom knowledge-base RAG pipeline",
    metric: "∞",
    metricLabel: "KB chunks indexed",
    stack: ["FastAPI", "LangChain", "Docker", "Vector DB"],
    github: "https://github.com/Abhilash-0322/quadrant-rag",
    bars: [85, 92, 70, 88],
  },
  {
    name: "ChainSentinel AI",
    impact: "Multi-chain contract risk & compliance",
    metric: "4+",
    metricLabel: "chains analyzed",
    stack: ["FastAPI", "Next.js", "MongoDB"],
    github: "https://github.com/Abhilash-0322/chainsentinel.ai",
    bars: [80, 75, 82, 68],
  },
  {
    name: "SolSniff",
    impact: "Solana narrative / idea agent",
    metric: "1st",
    metricLabel: "solo agent track (500+)",
    stack: ["Next.js", "Groq", "Prisma", "Vercel"],
    github: "https://github.com/Abhilash-0322/sol-sniff",
    live: "https://solsniffer.vercel.app/",
    bars: [70, 95, 60, 85],
  },
  {
    name: "Resume Analyzer",
    impact: "Free AI resume feedback at scale",
    metric: "10k+",
    metricLabel: "sessions potential",
    stack: ["AI", "Vercel"],
    github: "https://github.com/Abhilash-0322/resume-analyzer",
    live: "https://resume-analyzer-pulse.vercel.app",
    bars: [88, 76, 82],
  },
  {
    name: "Zen Heaven",
    impact: "Wellness AI with Twilio safety flows",
    metric: "24/7",
    metricLabel: "sentiment routing",
    stack: ["FastAPI", "React", "LangChain"],
    github: "https://github.com/Abhilash-0322/HackHaven2.0",
    live: "https://hack-haven2-0.vercel.app/",
    bars: [78, 84, 71, 80],
  },
];

export const experience = [
  {
    role: "AI Engineer Intern",
    org: "Spearmint Technologies",
    period: "Aug 2026 · Remote",
    highlights: ["TTS pipelines", "Fine-tuning", "Hermes agents"],
  },
  {
    role: "AI/ML Coordinator",
    org: "Innogeeks Club, KIET",
    period: "Nov 2023 – Present",
    highlights: ["5+ MVPs", "Agile teams 3–6", "API & DB design"],
  },
];

export const certifications = [
  "AWS Certified Cloud Practitioner",
  "Google AI Essentials (Coursera)",
];
