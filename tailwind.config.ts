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
        studio: {
          bg: "#07070a",
          surface: "#0e0e14",
          raised: "#14141c",
          border: "#22222e",
          muted: "#6b6775",
          text: "#e4e2ea",
          dim: "#a39fad",
          accent: "#6ee7d6",
          violet: "#a78bfa",
          amber: "#fbbf24",
          rose: "#fb7185",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-dm-sans)",
          "system-ui",
          "sans-serif",
        ],
        mono: [
          "var(--font-jetbrains)",
          "ui-monospace",
          "monospace",
        ],
      },
      maxWidth: {
        grid: "72rem",
      },
      animation: {
        "bar-pulse": "bar-pulse 2.4s ease-in-out infinite",
        "bar-pulse-slow": "bar-pulse 3.6s ease-in-out infinite",
      },
      keyframes: {
        "bar-pulse": {
          "0%, 100%": { transform: "scaleY(0.35)", opacity: "0.35" },
          "50%": { transform: "scaleY(1)", opacity: "0.85" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
