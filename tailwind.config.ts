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
      fontFamily: {
        sans: [
          "var(--font-space)",
          "system-ui",
          "sans-serif",
        ],
        display: [
          "var(--font-bebas)",
          "Impact",
          "sans-serif",
        ],
        tag: [
          "var(--font-marker)",
          "cursive",
        ],
      },
      maxWidth: {
        grid: "72rem",
      },
      colors: {
        concrete: {
          50: "#f4f2ef",
          100: "#e8e5e0",
          200: "#d1cdc6",
          300: "#b5afa5",
          400: "#968f84",
          500: "#7a7369",
          600: "#625c54",
          700: "#4f4a44",
          800: "#3d3935",
          900: "#2a2724",
        },
        alley: {
          950: "#070708",
          900: "#0c0c0f",
          800: "#14141a",
          700: "#1c1c24",
          600: "#26262f",
        },
        spray: {
          magenta: "#ff2d92",
          cyan: "#00e8ff",
          lime: "#c8ff00",
          orange: "#ff5c1a",
        },
      },
      boxShadow: {
        sticker:
          "4px 4px 0 0 rgb(var(--shadow-sticker) / 1)",
        "sticker-lg":
          "6px 6px 0 0 rgb(var(--shadow-sticker) / 1)",
      },
      backgroundImage: {
        "concrete-grid":
          "linear-gradient(rgb(var(--grid-line) / 0.35) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--grid-line) / 0.35) 1px, transparent 1px)",
        "alley-glow":
          "radial-gradient(ellipse 80% 50% at 20% 0%, rgb(var(--glow-1) / 0.45), transparent 55%), radial-gradient(ellipse 60% 40% at 90% 20%, rgb(var(--glow-2) / 0.35), transparent 50%), radial-gradient(ellipse 50% 30% at 50% 100%, rgb(var(--glow-3) / 0.25), transparent 45%)",
      },
      backgroundSize: {
        concrete: "24px 24px",
      },
    },
  },
  plugins: [],
};

export default config;
