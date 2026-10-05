import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Contributions } from "@/components/sections/Contributions";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { TableOfContents } from "@/components/TableOfContents";

export default function Home() {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-readme px-4 py-8 md:px-6 md:py-12">
        <div className="rounded-lg border border-readme-border bg-readme-surface p-6 shadow-sm md:p-10">
          <Hero />
          <TableOfContents />
          <main className="mt-10 space-y-14 md:space-y-16">
            <About />
            <Contributions />
            <Experience />
            <Skills />
            <Projects />
            <Contact />
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
