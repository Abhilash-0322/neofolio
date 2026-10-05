export type ProjectStatus = "Live" | "In progress" | "Archived";

export interface Project {
  id: string;
  name: string;
  stack: string;
  status: ProjectStatus;
  commits: number;
  lastDeploy: string;
  url?: string;
}

export const sidebarMetrics = [
  { label: "Active projects", value: "7", delta: "+2", trend: "up" as const },
  { label: "Deployments (30d)", value: "24", delta: "+18%", trend: "up" as const },
  { label: "API uptime", value: "99.4%", delta: "stable", trend: "neutral" as const },
  { label: "Open PRs", value: "3", delta: "−1", trend: "down" as const },
];

export const weeklyActivity = [
  { day: "Mon", value: 62 },
  { day: "Tue", value: 78 },
  { day: "Wed", value: 45 },
  { day: "Thu", value: 91 },
  { day: "Fri", value: 84 },
  { day: "Sat", value: 38 },
  { day: "Sun", value: 52 },
];

export const stackDistribution = [
  { label: "Python / FastAPI", pct: 38, color: "var(--chart-1)" },
  { label: "Next.js", pct: 28, color: "var(--chart-2)" },
  { label: "AI / Agents", pct: 22, color: "var(--chart-3)" },
  { label: "DevOps", pct: 12, color: "var(--chart-4)" },
];

export const projects: Project[] = [
  {
    id: "1",
    name: "TalentInfra",
    stack: "FastAPI, Next.js, PostgreSQL, Azure",
    status: "Live",
    commits: 142,
    lastDeploy: "2026-03-28",
    url: "https://zynd-hiring-app.azurewebsites.net",
  },
  {
    id: "2",
    name: "SolSniff",
    stack: "Next.js, Groq, Prisma",
    status: "Live",
    commits: 89,
    lastDeploy: "2026-03-15",
    url: "https://solsniffer.vercel.app/",
  },
  {
    id: "3",
    name: "ChainSentinel AI",
    stack: "FastAPI, Next.js, MongoDB",
    status: "Live",
    commits: 76,
    lastDeploy: "2026-02-20",
  },
  {
    id: "4",
    name: "Quadrant RAG",
    stack: "FastAPI, LangChain, Docker",
    status: "Live",
    commits: 54,
    lastDeploy: "2026-01-10",
  },
  {
    id: "5",
    name: "Resume Analyzer",
    stack: "Next.js, AI APIs",
    status: "Live",
    commits: 41,
    lastDeploy: "2026-03-01",
    url: "https://resume-analyzer-pulse.vercel.app",
  },
  {
    id: "6",
    name: "Zen Heaven",
    stack: "FastAPI, React, LangChain",
    status: "Archived",
    commits: 33,
    lastDeploy: "2025-11-08",
  },
  {
    id: "7",
    name: "dcXspotify",
    stack: "React, Node, Socket.io",
    status: "In progress",
    commits: 28,
    lastDeploy: "2026-03-30",
  },
];
