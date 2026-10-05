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
        forest: {
          canvas: "var(--forest-canvas)",
          surface: "var(--forest-surface)",
          ink: "var(--forest-ink)",
          muted: "var(--forest-muted)",
          moss: "var(--forest-moss)",
          fern: "var(--forest-fern)",
          bark: "var(--forest-bark)",
          mist: "var(--forest-mist)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      animation: {
        "canopy-drift": "canopy-drift 22s ease-in-out infinite",
        "spore-float": "spore-float 14s ease-in-out infinite",
        "light-dapple": "light-dapple 10s ease-in-out infinite",
      },
      keyframes: {
        "canopy-drift": {
          "0%, 100%": { transform: "translateX(-4%) scale(1)" },
          "50%": { transform: "translateX(4%) scale(1.04)" },
        },
        "spore-float": {
          "0%, 100%": { opacity: "0.35", transform: "translateY(0)" },
          "50%": { opacity: "0.7", transform: "translateY(-12px)" },
        },
        "light-dapple": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "0.85" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
