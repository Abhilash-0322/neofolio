import { CssCharts } from "@/components/CssCharts";
import { ProjectTable } from "@/components/ProjectTable";
import { Sidebar } from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 overflow-auto p-6 lg:p-8">
        <header className="mb-8">
          <h1 className="text-2xl font-semibold text-white">Overview</h1>
          <p className="mt-1 text-sm text-slate-400">
            Backend & AI systems — deployment and project health at a glance.
          </p>
        </header>
        <div className="space-y-8">
          <CssCharts />
          <ProjectTable />
        </div>
      </main>
    </div>
  );
}
