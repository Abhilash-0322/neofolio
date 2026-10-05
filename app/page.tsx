import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Contact } from "@/components/sections/Contact";
import { StageHero } from "@/components/sections/StageHero";
import { HackathonTimeline } from "@/components/sections/HackathonTimeline";
import { Projects } from "@/components/sections/Projects";
import { Talks } from "@/components/sections/Talks";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <StageHero />
        <Talks />
        <HackathonTimeline />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
