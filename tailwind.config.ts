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
      fontFamily: {
        sans: [
          "var(--font-plex-sans)",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        mono: ["var(--font-plex-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        grid: "72rem",
      },
      colors: {
        sol: {
          bg: "var(--sol-bg)",
          "bg-alt": "var(--sol-bg-alt)",
          fg: "var(--sol-fg)",
          muted: "var(--sol-muted)",
          emphasis: "var(--sol-emphasis)",
          border: "var(--sol-border)",
          blue: "var(--sol-blue)",
          cyan: "var(--sol-cyan)",
          green: "var(--sol-green)",
          yellow: "var(--sol-yellow)",
          orange: "var(--sol-orange)",
          red: "var(--sol-red)",
          violet: "var(--sol-violet)",
        },
      },
    },
  },
  plugins: [],
};

export default config;
