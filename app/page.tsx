import { Header } from "@/components/layout/Header";
import { SaasHero } from "@/components/sections/SaasHero";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { ProjectsShowcase } from "@/components/sections/ProjectsShowcase";
import { StatsBar } from "@/components/sections/StatsBar";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <SaasHero />
        <StatsBar />
        <FeatureGrid />
        <ProjectsShowcase />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
