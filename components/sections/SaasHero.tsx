import { profile } from "@/data/content";

export function SaasHero() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient pb-20 pt-16 md:pb-28 md:pt-24">
      <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23a855f7\' fill-opacity=\'0.04\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-80" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-violet-200">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            Available for cloud & AI roles
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            <span className="text-gradient">Production systems</span>
            <br />
            <span className="text-ink">for APIs, agents & cloud.</span>
          </h1>
          <p className="mt-6 text-lg text-muted md:text-xl">{profile.tagline}</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#work"
              className="rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:scale-[1.02]"
            >
              View shipped work
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-ink transition hover:border-violet-400/50 hover:bg-surface"
            >
              GitHub profile
            </a>
          </div>
        </div>

        <div className="relative mx-auto mt-16 max-w-4xl">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-violet-600/40 via-fuchsia-500/20 to-violet-600/40 blur-2xl" />
          <div className="glass-panel relative overflow-hidden rounded-2xl shadow-card">
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
              <span className="ml-3 flex-1 rounded-md bg-white/5 px-3 py-1 text-left text-xs text-muted">
                dashboard.{profile.name.split(" ")[0].toLowerCase()}.dev
              </span>
            </div>
            <div className="grid gap-4 p-6 md:grid-cols-3">
              <div className="rounded-xl border border-border bg-gradient-to-br from-violet-950/80 to-transparent p-4 md:col-span-2">
                <p className="text-xs font-medium uppercase tracking-wide text-violet-300/80">
                  Agent orchestration
                </p>
                <p className="mt-2 font-display text-2xl font-semibold text-ink">6 agents · live</p>
                <div className="mt-4 space-y-2">
                  {["Bias detector", "Skill verifier", "Credential issuer"].map((row) => (
                    <div
                      key={row}
                      className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2 text-sm"
                    >
                      <span className="text-muted">{row}</span>
                      <span className="text-emerald-400">OK</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-xl border border-border p-4">
                  <p className="text-xs text-muted">API latency</p>
                  <p className="font-display text-xl font-semibold text-ink">42ms</p>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />
                  </div>
                </div>
                <div className="rounded-xl border border-border p-4">
                  <p className="text-xs text-muted">Deploy</p>
                  <p className="text-sm text-violet-200">Azure · main</p>
                  <p className="mt-1 text-xs text-emerald-400/90">Healthy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
