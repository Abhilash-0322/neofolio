export const profile = {
  name: "Abhilash Maurya",
  title: "Backend & AI Systems Developer",
  tagline: "Ship APIs, agents, and cloud deployments that hold up in production.",
  location: "Delhi NCR, India",
  email: "abhilash.m.git@gmail.com",
  phone: "+91 7880764235",
  github: "https://github.com/Abhilash-0322",
  linkedin: "https://www.linkedin.com/in/abhilash-maurya-b615b9277/",
  x: "https://x.com/abhilash_glitch"
};

export const features = [
  {
    title: "Production APIs",
    description:
      "FastAPI and Django services with auth boundaries, real-time channels, and data models built for scale.",
    icon: "api"
  },
  {
    title: "AI Agents & RAG",
    description:
      "Multi-agent workflows, LangChain pipelines, and retrieval systems that go beyond demo slides.",
    icon: "brain"
  },
  {
    title: "Cloud & DevOps",
    description:
      "AWS and Azure deployments, Docker, GitHub Actions — infrastructure that matches the architecture.",
    icon: "cloud"
  },
  {
    title: "Full-stack delivery",
    description:
      "Next.js and React frontends paired with backends you can actually operate and extend.",
    icon: "layers"
  },
  {
    title: "Data & vectors",
    description:
      "PostgreSQL, MongoDB, Redis, and vector stores wired into production feature paths.",
    icon: "database"
  },
  {
    title: "Velocity under pressure",
    description:
      "Hackathon wins and campus MVPs — pattern recognition and shipping without sacrificing structure.",
    icon: "zap"
  }
] as const;

export const projects = [
  {
    name: "TalentInfra",
    label: "Multi-agent hiring · Zynd AICKATHON 2026",
    summary:
      "Bias-aware hiring with six specialist agents, WebSocket transparency, and W3C verifiable credentials on Azure.",
    stack: ["FastAPI", "Next.js", "PostgreSQL", "Groq", "Azure"],
    href: "https://github.com/Abhilash-0322/zynd-aickathon",
    live: "https://zynd-hiring-app.azurewebsites.net"
  },
  {
    name: "SolSniff",
    label: "Solana narrative agent",
    summary:
      "Autonomous agent across on-chain, GitHub, and social signals to surface narratives and build ideas.",
    stack: ["Next.js", "Groq", "Prisma", "Vercel"],
    href: "https://github.com/Abhilash-0322/sol-sniff",
    live: "https://solsniffer.vercel.app/"
  },
  {
    name: "ChainSentinel AI",
    label: "Multi-chain security",
    summary:
      "Smart contract risk and compliance scoring across Ethereum, Solana, and Aptos with live monitoring.",
    stack: ["FastAPI", "Next.js", "MongoDB"],
    href: "https://github.com/Abhilash-0322/chainsentinel.ai"
  },
  {
    name: "Quadrant RAG",
    label: "Custom knowledge RAG",
    summary:
      "Retrieval pipelines over custom corpora with FastAPI, LangChain, and containerized deployment.",
    stack: ["FastAPI", "LangChain", "Docker"],
    href: "https://github.com/Abhilash-0322/quadrant-rag"
  }
] as const;

export const stats = [
  { value: "5+", label: "AI MVPs led" },
  { value: "500+", label: "Hackathon field (solo win)" },
  { value: "AWS", label: "Cloud Practitioner" },
  { value: "Patent", label: "IoT-AI telemedicine (IN)" }
] as const;

export const navLinks = [
  { href: "#features", label: "Platform" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" }
] as const;
