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
        ink: "var(--ink)",
        muted: "var(--muted)",
        surface: "var(--surface)",
        border: "var(--border)",
        accent: "var(--accent)",
        accentSoft: "var(--accent-soft)"
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        display: ["var(--font-display)"]
      },
      boxShadow: {
        card: "0 4px 24px -4px rgba(88, 28, 135, 0.25)",
        glow: "0 0 80px -20px rgba(168, 85, 247, 0.55)"
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(168, 85, 247, 0.35), transparent), radial-gradient(ellipse 60% 40% at 100% 0%, rgba(124, 58, 237, 0.2), transparent), linear-gradient(180deg, #0f0720 0%, #130a28 40%, #0a0614 100%)"
      }
    }
  },
  plugins: []
};

export default config;
