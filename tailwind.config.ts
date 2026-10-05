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
        ink: "#11110f",
        paper: "#f1eee7",
        signal: "#ff5a1f",
        "signal-soft": "#ffb18f",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        mono: ["var(--font-ibm-plex-mono)", "monospace"],
      },
      boxShadow: {
        card: "5px 5px 0 rgba(17, 17, 15, 0.95)",
        "card-light": "5px 5px 0 rgba(255, 90, 31, 0.7)",
      },
    },
  },
  plugins: [],
};

export default config;
