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
        canvas: "#FAF9F7",
        ink: "#2C2C2C",
        muted: "#6B6B6B",
        rule: "#E8E6E3",
        accent: "#4A5568",
      },
      fontFamily: {
        sans: [
          "var(--font-dm-sans)",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        serif: ["var(--font-source-serif)", "Georgia", "serif"],
      },
      fontSize: {
        "display": ["2.75rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
      },
    },
  },
  plugins: [],
};

export default config;
