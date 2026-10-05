import { HeroDashboard } from "@/components/HeroDashboard";
import { ImpactMetrics } from "@/components/ImpactMetrics";
import { ProjectCards } from "@/components/ProjectCards";
import { SkillBars } from "@/components/SkillBars";
import { StackChart } from "@/components/StackChart";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-4 py-8 sm:px-6 lg:py-12">
      <div className="mb-6 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-slate-600">
        <span>neofolio · data viz</span>
        <span>port 5027</span>
      </div>

      <div className="space-y-8">
        <HeroDashboard />
        <ImpactMetrics />
        <div className="grid gap-6 lg:grid-cols-2">
          <SkillBars />
          <StackChart />
        </div>
        <ProjectCards />
      </div>

      <footer className="mt-12 border-t border-grid py-6 text-center font-mono text-[10px] text-slate-600">
        Built with Next.js 14 · dashboard-style portfolio
      </footer>
    </main>
  );
}
