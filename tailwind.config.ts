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
        forge: {
          bg: "var(--forge-bg)",
          surface: "var(--forge-surface)",
          ink: "var(--forge-text)",
          muted: "var(--forge-muted)",
          accent: "var(--forge-accent)",
          copper: "var(--forge-copper)",
          steel: "var(--forge-steel)",
          concrete: "var(--forge-concrete)",
          iron: "var(--forge-iron)",
          ember: "var(--forge-ember)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      animation: {
        "ember-pulse": "ember-pulse 10s ease-in-out infinite",
        "spark-drift": "spark-drift 14s ease-in-out infinite",
        shimmer: "shimmer 8s ease-in-out infinite",
      },
      keyframes: {
        "ember-pulse": {
          "0%, 100%": { transform: "scale(1)", opacity: "0.35" },
          "50%": { transform: "scale(1.05)", opacity: "0.55" },
        },
        "spark-drift": {
          "0%, 100%": { transform: "translateX(-2%)" },
          "50%": { transform: "translateX(3%)" },
        },
        shimmer: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.65" },
        },
      },
      backgroundImage: {
        "forge-gradient": "var(--forge-gradient)",
      },
    },
  },
  plugins: [],
};

export default config;
