import dynamic from "next/dynamic";
import { FloatingNav } from "@/components/layout/FloatingNav";
import { NarrativeEffects } from "@/components/effects/NarrativeEffects";
import { Hero } from "@/components/sections/Hero";
import { StorySections } from "@/components/sections/StorySections";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { CodingProfiles } from "@/components/sections/CodingProfiles";
import { Outro } from "@/components/sections/Outro";

const AmbientScene = dynamic(
  () => import("@/components/effects/AmbientScene").then((mod) => mod.AmbientScene),
  { ssr: false }
);

export default function Home() {
  return (
    <main>
      <AmbientScene />
      <div className="timeline-rail" aria-hidden>
        <div className="timeline-progress" />
      </div>

      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-md focus:bg-black focus:px-4 focus:py-2"
      >
        Skip to content
      </a>

      <FloatingNav />
      <NarrativeEffects />

      <Hero />
      <StorySections />
      <CapabilitiesSection />
      <ProjectsSection />
      <AchievementsSection />
      <CodingProfiles />
      <Outro />
    </main>
  );
}
