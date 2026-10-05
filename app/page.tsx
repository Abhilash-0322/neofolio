import { ConnectSection, ExperienceSection } from "@/components/ExperienceSection";
import { FooterBar } from "@/components/FooterBar";
import { HeroSection } from "@/components/HeroSection";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { TopAppBar } from "@/components/TopAppBar";

export default function Home() {
  return (
    <>
      <TopAppBar />
      <main className="mx-auto max-w-content space-y-16 px-4 py-8 md:px-6 md:py-12">
        <HeroSection />
        <ProjectsGrid />
        <ExperienceSection />
        <ConnectSection />
      </main>
      <FooterBar />
    </>
  );
}
