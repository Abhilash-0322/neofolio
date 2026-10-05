"use client";

import { useState } from "react";

type Project = {
  number: string;
  name: string;
  description: string;
  stack: string;
  type: string;
  href: string;
  live?: string;
  accent: string;
};

const projects: Project[] = [
  {
    number: "01",
    name: "TalentInfra",
    description:
      "A multi-agent hiring workspace that makes screening more structured, transparent, and bias-aware.",
    stack: "FastAPI / Next.js / PostgreSQL / Groq",
    type: "AI systems",
    href: "https://github.com/Abhilash-0322/zynd-aickathon",
    live: "https://zynd-hiring-app.azurewebsites.net",
    accent: "project-card--lime",
  },
  {
    number: "02",
    name: "SolSniff",
    description:
      "An agent for reading the Solana ecosystem: turn noisy narratives into useful project signals.",
    stack: "Next.js / Groq / Prisma / Vercel",
    type: "Product",
    href: "https://github.com/Abhilash-0322/sol-sniff",
    live: "https://solsniffer.vercel.app/",
    accent: "project-card--blue",
  },
  {
    number: "03",
    name: "ChainSentinel AI",
    description:
      "Multi-chain smart contract risk and compliance analysis, designed for faster technical due diligence.",
    stack: "FastAPI / Next.js / MongoDB",
    type: "AI systems",
    href: "https://github.com/Abhilash-0322/chainsentinel.ai",
    accent: "project-card--orange",
  },
  {
    number: "04",
    name: "Quadrant RAG",
    description:
      "A practical RAG foundation for custom knowledge bases, with clear seams for retrieval and evaluation.",
    stack: "FastAPI / LangChain / Vector DB / Docker",
    type: "Infrastructure",
    href: "https://github.com/Abhilash-0322/quadrant-rag",
    accent: "project-card--pink",
  },
  {
    number: "05",
    name: "Resume Analyzer",
    description:
      "A free, focused AI tool that turns a resume into specific, actionable feedback.",
    stack: "Python / LLMs / Next.js",
    type: "Product",
    href: "https://github.com/Abhilash-0322/resume-analyzer",
    live: "https://resume-analyzer-pulse.vercel.app",
    accent: "project-card--purple",
  },
  {
    number: "06",
    name: "Zen Heaven",
    description:
      "A wellness companion with sentiment-aware conversations and safety flows built for real users.",
    stack: "FastAPI / React / LangChain / Twilio",
    type: "Product",
    href: "https://github.com/Abhilash-0322/HackHaven2.0",
    live: "https://hack-haven2-0.vercel.app/",
    accent: "project-card--green",
  },
];

const filters = ["All", "AI systems", "Product", "Infrastructure"];

export default function WorkGrid() {
  const [activeFilter, setActiveFilter] = useState("All");
  const visibleProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.type === activeFilter);

  return (
    <>
      <div className="filter-row" role="tablist" aria-label="Filter selected work">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`filter-button ${activeFilter === filter ? "is-active" : ""}`}
            onClick={() => setActiveFilter(filter)}
            role="tab"
            aria-selected={activeFilter === filter}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="project-grid">
        {visibleProjects.map((project) => (
          <article className={`project-card ${project.accent}`} key={project.name}>
            <div className="project-card__topline">
              <span>{project.number}</span>
              <span>{project.type}</span>
            </div>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="project-card__footer">
              <span>{project.stack}</span>
              <div className="project-links">
                <a href={project.href} target="_blank" rel="noreferrer" aria-label={`${project.name} on GitHub`}>
                  GitHub ↗
                </a>
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer" aria-label={`${project.name} live site`}>
                    Live ↗
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
