import { Header } from "@/components/Header";
import { About } from "@/components/sections/About";
import { Craft } from "@/components/sections/Craft";
import { Hero } from "@/components/sections/Hero";
import { Honors } from "@/components/sections/Honors";
import { Path } from "@/components/sections/Path";
import { Reach } from "@/components/sections/Reach";
import { Works } from "@/components/sections/Works";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative mx-auto max-w-zen px-8 md:px-10">
        <div
          className="pointer-events-none fixed inset-y-0 left-1/2 -z-10 w-px -translate-x-1/2 bg-sumi/[0.04]"
          aria-hidden
        />
        <Hero />
        <About />
        <Path />
        <Craft />
        <Works />
        <Honors />
        <Reach />
      </main>
    </>
  );
}
