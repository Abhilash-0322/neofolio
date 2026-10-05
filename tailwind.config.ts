import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "var(--font-source-sans)",
          "system-ui",
          "Segoe UI",
          "sans-serif",
        ],
        serif: [
          "var(--font-source-serif)",
          "Georgia",
          "Times New Roman",
          "serif",
        ],
      },
      colors: {
        slate: {
          ink: "#0f172a",
          panel: "#1e293b",
          rule: "#cbd5e1",
          wash: "#f1f5f9",
          parchment: "#f8fafc",
        },
        trust: {
          gold: "#92702a",
          goldMuted: "#b8954a",
        },
      },
      maxWidth: {
        brief: "68rem",
      },
      boxShadow: {
        dossier: "0 1px 0 0 rgb(15 23 42 / 0.06), 0 4px 24px -4px rgb(15 23 42 / 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
