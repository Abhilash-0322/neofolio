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
        luxury: {
          ink: "var(--lux-ink)",
          muted: "var(--lux-muted)",
          subtle: "var(--lux-subtle)",
          surface: "var(--lux-surface)",
          border: "var(--lux-border)",
          rose: "#c9a87c",
          blush: "#e8b4b8",
          copper: "#b76e79",
          gold: "#d4af37",
          champagne: "#f7e7ce",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      animation: {
        shimmer: "shimmer 12s ease-in-out infinite",
        "rose-glow": "rose-glow 10s ease-in-out infinite",
      },
      keyframes: {
        shimmer: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.65" },
        },
        "rose-glow": {
          "0%, 100%": { transform: "scale(1) translate(0, 0)" },
          "50%": { transform: "scale(1.08) translate(2%, -2%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
