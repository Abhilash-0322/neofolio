"use client";

import { achievements, testimonials } from "@/data/content";
import { motion } from "framer-motion";

export function HighlightsStrip() {
  return (
    <section className="border-y border-white/60 bg-white/50 py-14">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-lavender">
          Wins & kind words
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="font-display text-xl font-semibold text-ink">
              Achievements
            </h3>
            <ul className="mt-4 space-y-3">
              {achievements.map((item, i) => (
                <motion.li
                  key={item.title}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex gap-4 rounded-2xl bg-gradient-to-r from-mint/20 to-transparent p-4"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-lavender/30 text-lg">
                    ★
                  </span>
                  <div>
                    <p className="font-semibold text-ink">{item.title}</p>
                    <p className="text-sm text-muted">{item.detail}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold text-ink">
              Testimonials
            </h3>
            <div className="mt-4 space-y-4">
              {testimonials.map((t) => (
                <blockquote
                  key={t.author}
                  className="rounded-3xl border border-blush/40 bg-blush/10 p-6"
                >
                  <p className="text-muted">&ldquo;{t.quote}&rdquo;</p>
                  <footer className="mt-4 text-sm font-semibold text-ink">
                    {t.author}
                    <span className="block font-normal text-muted">
                      {t.context}
                    </span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
