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
        headline: [
          "var(--font-playfair)",
          "Georgia",
          "Times New Roman",
          "serif",
        ],
        body: [
          "var(--font-source-serif)",
          "Georgia",
          "Times New Roman",
          "serif",
        ],
        masthead: [
          "var(--font-unifraktur)",
          "Georgia",
          "serif",
        ],
        sans: [
          "var(--font-source-serif)",
          "Georgia",
          "serif",
        ],
      },
      colors: {
        newsprint: "#f2ebe0",
        ink: "#121212",
        rule: "#2a2a2a",
      },
      maxWidth: {
        broadsheet: "68rem",
      },
    },
  },
  plugins: [],
};

export default config;
