import { BlobField } from "@/components/effects/BlobField";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { AboutSection } from "@/components/sections/AboutSection";
import { CodingProfilesSection } from "@/components/sections/CodingProfilesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { HighlightsStrip } from "@/components/sections/HighlightsStrip";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { WorkSection } from "@/components/sections/WorkSection";

export default function Home() {
  return (
    <>
      <BlobField />
      <div className="relative min-h-screen">
        <SiteHeader />
        <main>
          <HeroSection />
          <AboutSection />
          <WorkSection />
          <ProjectsSection />
          <HighlightsStrip />
          <SkillsSection />
          <CodingProfilesSection />
          <ContactSection />
        </main>
      </div>
    </>
  );
}
