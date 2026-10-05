import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { NeuralBackdrop } from "@/components/NeuralBackdrop";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <>
      <NeuralBackdrop />
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
