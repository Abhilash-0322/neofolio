export const profile = {
  name: "Abhilash Maurya",
  role: "AI Agents & Full-Stack Developer",
  location: "Delhi, India",
  email: "abhilash.m.git@gmail.com",
  github: "https://github.com/Abhilash-0322",
  x: "https://x.com/abhilash_glitch",
  linkedin: "https://www.linkedin.com/in/abhilash-maurya-b615b9277/"
};

export const storySections = [
  {
    id: "genesis",
    chapter: "I",
    eyebrow: "The Genesis",
    title: "Where Parallel Timelines Converge",
    body: "Every system starts with a single spark. Mine ignited across multiple dimensions simultaneously \u2014 full-stack architectures, artificial intelligence, and the decentralized frontier. Not as separate journeys, but as parallel threads of the same story, each informing and strengthening the others. The result: an engineering practice that doesn\u2019t fit neatly into one box, because the most interesting problems never do.",
    quote: "\u201cThe most interesting engineers are the ones who refuse to be confined to a single timeline.\u201d"
  },
  {
    id: "systems",
    chapter: "II",
    eyebrow: "The Architect\u2019s Forge",
    title: "Building Foundations That Hold Universes",
    body: "Production APIs aren\u2019t just endpoints \u2014 they\u2019re the nervous system of digital worlds. Auth boundaries stand as sentinels. Real-time channels carry the pulse of live interaction. Media pipelines transform raw data into rich experiences. Cloud infrastructure bends to serve the architecture, not the other way around. When the foundation is right, everything built on top becomes inevitable.",
    quote: "\u201cClean architecture isn\u2019t about perfection. It\u2019s about making complexity feel simple.\u201d"
  },
  {
    id: "intelligence",
    chapter: "III",
    eyebrow: "The Intelligence Nexus",
    title: "Teaching Machines to Think With Purpose",
    body: "AI isn\u2019t magic \u2014 it\u2019s engineering with different constraints and extraordinary possibilities. Agents that reason through multi-step problems. Sentiment models that understand the nuance human communication carries. Safety workflows that protect users when it matters most. RAG pipelines that retrieve with surgical precision. Every model deployed is a promise: that intelligence will serve a real purpose, not just a demo slide.",
    quote: "\u201cThe gap between a demo and a deployed system is where real engineering lives.\u201d"
  },
  {
    id: "web3",
    chapter: "IV",
    eyebrow: "The Decentralized Frontier",
    title: "Navigating the Cross-Chain Multiverse",
    body: "Smart contracts written across Solidity, Rust, and Move \u2014 each chain a different universe with its own physics. Risk analysis engines that scan for vulnerabilities before they become exploits. Compliance scoring that bridges regulatory worlds. The decentralized frontier demands a security-first mindset and the rare ability to think across blockchain ecosystems simultaneously.",
    quote: "\u201cIn Web3, security isn\u2019t a feature \u2014 it\u2019s the foundation upon which trust is built.\u201d"
  },
  {
    id: "velocity",
    chapter: "V",
    eyebrow: "The Velocity Protocol",
    title: "When Speed Becomes a Superpower",
    body: "Hackathon victories aren\u2019t about shortcuts \u2014 they\u2019re about pattern recognition, architectural instinct honed over countless builds, and the ability to ship production-quality code at prototype speed. Solo execution under extreme constraints. Rapid iteration cycles that refuse to sacrifice structural integrity. Speed, not as a compromise, but as an amplifier of quality.",
    quote: "\u201cVelocity without quality is just noise. Velocity with quality changes everything.\u201d"
  }
] as const;

export const projects = [
  {
    name: "TalentInfra",
    label: "ZYND AICKATHON 2026 · Bias-Aware Hiring Infra",
    period: "February 2026",
    impact:
      "Six specialist AI agents working in concert to fix algorithmic bias in hiring: privacy guardian anonymizes profiles, bias detector scans job descriptions for linguistic and structural bias patterns, skill verifier validates evidence and assigns confidence scores, candidate matcher generates objective rankings, credential issuer mints W3C Verifiable Credentials with SHA-256 integrity proofs, and the orchestrator synthesizes the final ADVANCE / HOLD / REJECT decision — all streamed live to the frontend via WebSocket.",
    architecture:
      "Single-process Python monolith: FastAPI + WebSocket + Next.js 15 static export served by one uvicorn process. Each agent registers a DID on the Zynd Protocol registry at startup for authenticated inter-agent identity. PostgreSQL (Azure Flexible Server) in production, SQLite locally. Groq LLM (llama-3.3-70b-versatile + llama-3.1-8b-instant) for agent reasoning. CI/CD via GitHub Actions → Azure App Service.",
    stack: ["Python", "FastAPI", "Next.js 15", "WebSocket", "PostgreSQL", "Groq", "W3C VCs", "Zynd Protocol", "Azure", "Docker"],
    href: "https://github.com/Abhilash-0322/zynd-aickathon",
    live: "https://zynd-hiring-app.azurewebsites.net",
    why: "Complete end-to-end demonstration of multi-agent orchestration, verifiable credential issuance, privacy-preserving pipelines, real-time WebSocket transparency, and full Azure production deployment — solving a real problem in algorithmic hiring."
  },
  {
    name: "SolSniff",
    label: "Superteam Earn Bounty · Solana AI Agent",
    period: "February 2026",
    impact:
      "Autonomous AI agent that monitors the Solana ecosystem across four data streams — on-chain metrics (Helius RPC, DeFiLlama TVL), GitHub developer activity (trending repos, commit velocity across Solana orgs), social signals (LunarCrush Galaxy Score, Reddit r/solana), and crypto news (CryptoPanic sentiment) — to detect emerging narratives before they become obvious and generate 12–35 concrete, grounded build ideas per analysis run.",
    architecture:
      "Next.js 14 App Router monolith for Vercel serverless deployment. Groq SDK (Llama 3.3 70B) powers two chained agents: Narrative Detector clusters cross-source signals (scored 0–100) into 4–7 ranked narratives with confidence scores and trend direction; Idea Generator produces 3–5 product ideas per narrative with problem, solution, audience, feasibility, and technical requirements. Neon PostgreSQL via Prisma v5 for persistence; in-memory cache for sub-second dashboard loads.",
    stack: ["Next.js 14", "TypeScript", "Groq", "Llama 3.3 70B", "Prisma", "Neon PostgreSQL", "Vercel", "Helius RPC", "DeFiLlama", "LunarCrush"],
    href: "https://github.com/Abhilash-0322/sol-sniff",
    live: "https://solsniff-vercel-c9lcjcpqx-abhilash-maruyas-projects.vercel.app/",
    why: "Showcases fully autonomous AI agent pipelines, multi-source data synthesis, structured LLM output with JSON mode, and production Vercel deployment — all applied to a real Superteam Earn bounty on the Solana ecosystem."
  },
  {
    name: "dcXspotify",
    label: "Full-Stack Music Platform",
    period: "Active in 2025 · Updated Sep 2025",
    impact:
      "Full-stack music and chat system with admin control surfaces, strong auth boundaries, and real-time channels for production-style usage.",
    architecture:
      "React + TypeScript client, Node/Express API layer, MongoDB persistence, Socket.io real-time transport, Clerk auth, Cloudinary media pipeline.",
    stack: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Socket.io", "Clerk", "Cloudinary"],
    href: "https://github.com/Abhilash-0322/dcXspotify",
    live: "https://music-chat-3fcw.onrender.com/",
    why: "Shows end-to-end product engineering across UX, backend reliability, and platform administration."
  },
  {
    name: "chainsentinel.ai",
    label: "Multi-Chain Security",
    period: "Updated Jul 2025",
    impact:
      "AI compliance and smart contract risk engine across Ethereum, Solana, and Aptos with structured severity scoring and live monitoring.",
    architecture:
      "FastAPI analysis engine, Next.js front-end, MongoDB data layer, WebSocket alerts, model-driven vulnerability classification.",
    stack: ["FastAPI", "Python", "Next.js", "MongoDB", "WebSockets", "Solidity", "Rust", "Move"],
    href: "https://github.com/Abhilash-0322/chainsentinel.ai",
    live: "https://deploybackend-icvu.onrender.com/",
    why: "Validates security depth, cross-chain context switching, and practical AI in infra-critical workflows."
  },
  {
    name: "Zen-Heaen",
    label: "AI Safety + Recommendation",
    period: "Updated Jul 2025",
    impact:
      "Mood-aware recommendation and sentiment pipeline paired with alerting flows for safer user interaction contexts.",
    architecture:
      "React/Tailwind interface, FastAPI services, LangChain-style agent orchestration, Twilio automation, MongoDB storage.",
    stack: ["React", "FastAPI", "MongoDB", "Twilio", "LangChain", "Tailwind"],
    href: "https://github.com/Abhilash-0322/HackHaven2.0",
    live: "https://hack-haven2-0.vercel.app/",
    why: "Strong signal of practical AI integration under rapid-delivery constraints."
  }
] as const;

export const achievements = [
  "Winner — ZYND AICKATHON 2026: built TalentInfra, a 6-agent bias-aware hiring infrastructure with W3C Verifiable Credentials and DID-based agent identity, deployed live on Azure.",
  "Co-inventor of an IoT-AI telemedicine patent (India Patent No. 202511018153A, published April 2025).",
  "1st place in a solo AI agent hackathon track with 500+ participants.",
  "Top 10 finalist across multiple regional hackathons for pressure-tested prototypes.",
  "Superteam Earn bounty submission: SolSniff — autonomous Solana narrative detection agent using Groq LLM across 4 live data sources, live on Vercel.",
  "Open source contributor through GSSOC and Hacktoberfest with merged pull requests and issue reviews.",
  "Active experimentation in autonomous agent security, smart-wallet AI workflows, and API-level monetization patterns."
] as const;
