import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        paper: "var(--paper)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        accent: "var(--accent)",
        margin: "var(--margin)",
        rule: "var(--rule)",
        card: "var(--card)",
        border: "var(--border)"
      },
      fontFamily: {
        journal: ["var(--font-journal)"],
        hand: ["var(--font-hand)"],
        mono: ["var(--font-mono)"]
      },
      boxShadow: {
        journal: "var(--shadow-journal)"
      }
    }
  },
  plugins: []
};

export default config;
