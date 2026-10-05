import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FFFBF7",
        ink: "#2D3142",
        muted: "#6B7289",
        peach: "#FFB5A7",
        lavender: "#CDB4DB",
        mint: "#B8E0D2",
        sky: "#A2D2FF",
        blush: "#FFC8DD",
        card: "#FFFFFF"
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"]
      },
      borderRadius: {
        blob: "42% 58% 70% 30% / 45% 45% 55% 55%"
      },
      boxShadow: {
        soft: "0 8px 40px rgba(45, 49, 66, 0.08)",
        card: "0 4px 24px rgba(166, 122, 255, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
