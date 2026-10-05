import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lab: {
          bg: "var(--lab-bg)",
          surface: "var(--lab-surface)",
          muted: "var(--lab-muted)",
          border: "var(--lab-border)",
          ink: "var(--lab-ink)",
          sub: "var(--lab-sub)",
          accent: "var(--lab-accent)",
          synapse: "var(--lab-synapse)",
          node: "var(--lab-node)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        lab: "var(--lab-shadow)",
        synapse: "var(--lab-glow)",
      },
      backgroundImage: {
        "lab-grid": "var(--lab-grid)",
      },
    },
  },
  plugins: [],
};

export default config;
