import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        aurora: {
          night: "#050810",
          deep: "#0a1224",
          teal: "#2dd4bf",
          cyan: "#22d3ee",
          violet: "#a78bfa",
          magenta: "#e879f9",
          green: "#4ade80",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      animation: {
        "aurora-shift": "aurora-shift 18s ease-in-out infinite",
        "aurora-pulse": "aurora-pulse 8s ease-in-out infinite",
        twinkle: "twinkle 4s ease-in-out infinite",
      },
      keyframes: {
        "aurora-shift": {
          "0%, 100%": { transform: "translateX(-5%) scale(1)" },
          "50%": { transform: "translateX(5%) scale(1.05)" },
        },
        "aurora-pulse": {
          "0%, 100%": { opacity: "0.45" },
          "50%": { opacity: "0.75" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
