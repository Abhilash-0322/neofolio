import { Nav } from "@/components/Nav";
import { BootHero } from "@/components/sections/BootHero";
import { Whoami } from "@/components/sections/Whoami";
import { ExperienceLog } from "@/components/sections/ExperienceLog";
import { ProjectsCommands } from "@/components/sections/ProjectsCommands";
import { SkillsMan } from "@/components/sections/SkillsMan";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <BootHero />
        <Whoami />
        <ExperienceLog />
        <ProjectsCommands />
        <SkillsMan />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
