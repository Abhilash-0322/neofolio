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
        display: [
          "var(--font-bebas)",
          "Impact",
          "Haettenschweiler",
          "sans-serif",
        ],
        sans: [
          "var(--font-dm-sans)",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      colors: {
        stage: {
          black: "#0a0a0b",
          floor: "#141416",
          curtain: "#1c0a12",
          gold: "#e8c547",
          amber: "#f59e0b",
          spotlight: "#fff8e7",
        },
      },
      maxWidth: {
        stage: "80rem",
      },
      boxShadow: {
        spotlight: "0 0 120px 40px rgba(255, 248, 231, 0.08)",
        podium: "0 24px 80px -20px rgba(0, 0, 0, 0.8)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
