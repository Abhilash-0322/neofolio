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
        sans: ["var(--font-dm)", "system-ui", "sans-serif"],
        display: ["var(--font-syne)", "system-ui", "sans-serif"],
      },
      colors: {
        memphis: {
          cream: "#FFF8E7",
          ink: "#0D0D0D",
          yellow: "#FFE900",
          pink: "#FF6B9D",
          cyan: "#00D4FF",
          orange: "#FF5C00",
          lime: "#B8FF57",
          purple: "#9B5DE5",
        },
      },
      boxShadow: {
        memphis: "6px 6px 0 0 #0D0D0D",
        "memphis-pink": "6px 6px 0 0 #FF6B9D",
        "memphis-cyan": "6px 6px 0 0 #00D4FF",
        "memphis-yellow": "6px 6px 0 0 #FFE900",
      },
    },
  },
  plugins: [],
};

export default config;
