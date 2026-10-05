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
        ink: {
          DEFAULT: "#e8e2d6",
          muted: "#a8a090",
          faint: "#6d756c",
        },
        forest: {
          DEFAULT: "#0f1813",
          deep: "#0a110d",
          card: "#152019",
          border: "#2a3d32",
          accent: "#3d5c4d",
        },
        wine: {
          DEFAULT: "#7a3340",
          light: "#9a4a58",
          deep: "#4a1f28",
          glow: "#c46b7a",
        },
        parchment: {
          DEFAULT: "#d4c4a8",
          dim: "#b8a88c",
        },
      },
      fontFamily: {
        serif: [
          "var(--font-cormorant)",
          "Cormorant Garamond",
          "Georgia",
          "serif",
        ],
        sans: ["var(--font-source)", "Source Sans 3", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "42rem",
        grid: "72rem",
      },
      backgroundImage: {
        "vellum-gradient":
          "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(122, 51, 64, 0.12), transparent), radial-gradient(ellipse 60% 40% at 100% 50%, rgba(61, 92, 77, 0.15), transparent)",
      },
    },
  },
  plugins: [],
};

export default config;
