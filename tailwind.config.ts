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
        void: "#05080f",
        panel: "#0a1019",
        teal: {
          glow: "#2dd4bf",
          dim: "#0d9488",
        },
        magenta: {
          glow: "#e879f9",
          dim: "#c026d3",
        },
        line: "rgba(45, 212, 191, 0.12)",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        "teal-glow": "0 0 24px rgba(45, 212, 191, 0.35)",
        "magenta-glow": "0 0 24px rgba(232, 121, 249, 0.35)",
        card: "0 0 0 1px rgba(45, 212, 191, 0.15)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        scan: "scan 8s linear infinite",
      },
      keyframes: {
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
