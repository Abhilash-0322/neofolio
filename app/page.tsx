import { Header } from "@/components/Header";
import { AboutSection } from "@/components/sections/AboutSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";

export default function Home() {
  return (
    <div className="journal-page min-h-screen" id="top">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-card focus:px-4 focus:py-2 focus:shadow-journal"
      >
        Skip to content
      </a>
      <Header />
      <main className="journal-content mx-auto max-w-3xl pb-24 pt-6">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <footer className="journal-content mx-auto max-w-3xl border-t border-border py-6 text-center text-sm text-muted">
        <p>Shipped systems, not just demos — {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
