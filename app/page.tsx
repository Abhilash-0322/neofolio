import { SiteHeader, Hero } from "@/components/Hero";
import {
  ContactSection,
  ProjectsSection,
  SkillsSection,
} from "@/components/Sections";
import { WorkSection } from "@/components/WorkSection";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <WorkSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </>
  );
}
