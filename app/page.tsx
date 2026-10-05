import { SidebarNav } from "@/components/SidebarNav";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Overview } from "@/components/sections/Overview";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";

export default function Home() {
  return (
    <div className="lg:flex lg:min-h-screen">
      <SidebarNav />
      <main className="flex-1 lg:ml-[min(100%,17.5rem)]">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 px-4 py-8 sm:px-6 sm:py-10 lg:gap-8 lg:px-10 lg:py-12">
          <Overview />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </main>
    </div>
  );
}
