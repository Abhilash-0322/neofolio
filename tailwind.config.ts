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
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        display: ["var(--font-cinzel)", "Georgia", "serif"],
      },
      colors: {
        cinema: {
          bg: "#070708",
          panel: "#0e0e10",
          muted: "#8a8580",
          gold: "#c9a962",
          goldDim: "#8a7340",
          cream: "#e8e4dc",
        },
      },
      animation: {
        "fade-in": "fadeIn 1.2s ease-out forwards",
        "slide-up": "slideUp 1s ease-out forwards",
        pulseSoft: "pulseSoft 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
