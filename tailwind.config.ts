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
        brutal: {
          black: "#0A0A0A",
          lime: "#C8F135",
          yellow: "#FFE500",
          paper: "#F4F0E8",
          muted: "#6B6B6B",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        brutal: "6px 6px 0 0 #0A0A0A",
        "brutal-lg": "10px 10px 0 0 #0A0A0A",
        "brutal-lime": "6px 6px 0 0 #C8F135",
      },
      borderWidth: {
        3: "3px",
        4: "4px",
      },
    },
  },
  plugins: [],
};

export default config;
