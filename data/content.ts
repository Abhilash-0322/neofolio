export const profile = {
  name: "Abhilash Maurya",
  role: "Backend & AI Systems Developer",
  location: "Delhi NCR, India",
  email: "abhilash.m.git@gmail.com",
  phone: "+91 7880764235",
  github: "https://github.com/Abhilash-0322",
  x: "https://x.com/abhilash_glitch",
  linkedin: "https://www.linkedin.com/in/abhilash-maurya-b615b9277/"
} as const;

export const projects = [
  { number: "01", name: "TalentInfra", category: "AI / hiring intelligence", description: "Six specialist agents for bias-aware hiring, verifiable credentials, and live WebSocket decisions.", stack: ["FastAPI", "Next.js", "PostgreSQL", "Groq", "Azure"], href: "https://github.com/Abhilash-0322/zynd-aickathon", live: "https://zynd-hiring-app.azurewebsites.net" },
  { number: "02", name: "SolSniff", category: "Market intelligence", description: "A Solana narrative agent that turns on-chain, social, GitHub, and news signals into grounded product ideas.", stack: ["Next.js", "TypeScript", "Prisma", "Groq", "Vercel"], href: "https://github.com/Abhilash-0322/sol-sniff", live: "https://solsniffer.vercel.app/" },
  { number: "03", name: "ChainSentinel AI", category: "Security / compliance", description: "Multi-chain contract analysis with vulnerability detection, risk scoring, and real-time monitoring.", stack: ["Python", "FastAPI", "MongoDB", "WebSockets", "Docker"], href: "https://github.com/Abhilash-0322/chainsentinel.ai", live: undefined },
  { number: "04", name: "Quadrant RAG", category: "Knowledge systems", description: "A retrieval pipeline for custom knowledge bases: ingest, chunk, embed, retrieve, and answer.", stack: ["FastAPI", "LangChain", "Vector DBs", "Docker"], href: "https://github.com/Abhilash-0322/quadrant-rag", live: undefined }
] as const;

export const skills = [
  { label: "Backend", value: "FastAPI · Django · Express.js" },
  { label: "Intelligence", value: "RAG · LangChain · AI agents" },
  { label: "Data", value: "PostgreSQL · MongoDB · Redis · Vector DBs" },
  { label: "Platform", value: "AWS · Azure · Docker · GitHub Actions" }
] as const;

export const profiles = [
  ["LeetCode", "Abhilash_Maurya", "https://leetcode.com/u/Abhilash_Maurya/"],
  ["Codeforces", "mauryaabhi2003", "https://codeforces.com/profile/mauryaabhi2003"],
  ["GeeksForGeeks", "mauryaabqern", "https://www.geeksforgeeks.org/profile/mauryaabqern"],
  ["HackerRank", "abhilash_0322", "https://www.hackerrank.com/profile/abhilash_0322"]
] as const;
