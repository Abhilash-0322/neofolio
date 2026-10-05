import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Footer } from "@/components/Footer";
import { GridBackground } from "@/components/GridBackground";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <>
      <GridBackground />
      <Header />
      <main className="relative z-10">
        <Hero />
        <About />
        <ExperienceTimeline />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
