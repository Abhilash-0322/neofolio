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
          "var(--font-inter)",
          "system-ui",
          "sans-serif",
        ],
      },
      colors: {
        aurora: {
          deep: "#0a0e1a",
          navy: "#0f1729",
          violet: "#6d28d9",
          cyan: "#22d3ee",
        },
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.08)",
      },
      animation: {
        "aurora-drift": "aurora-drift 18s ease-in-out infinite alternate",
        "aurora-pulse": "aurora-pulse 12s ease-in-out infinite",
      },
      keyframes: {
        "aurora-drift": {
          "0%": { transform: "translate(0, 0) scale(1)" },
          "100%": { transform: "translate(4%, -3%) scale(1.08)" },
        },
        "aurora-pulse": {
          "0%, 100%": { opacity: "0.45" },
          "50%": { opacity: "0.7" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
