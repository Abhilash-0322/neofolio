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
      colors: {
        coffee: {
          bg: "var(--coffee-bg)",
          surface: "var(--coffee-surface)",
          ink: "var(--coffee-text)",
          muted: "var(--coffee-muted)",
          accent: "var(--coffee-accent)",
          caramel: "var(--coffee-caramel)",
          foam: "var(--coffee-foam)",
          roast: "var(--coffee-roast)",
          crema: "var(--coffee-crema)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      animation: {
        "steam-rise": "steam-rise 12s ease-in-out infinite",
        "steam-drift": "steam-drift 16s ease-in-out infinite",
        shimmer: "shimmer 8s ease-in-out infinite",
      },
      keyframes: {
        "steam-rise": {
          "0%, 100%": { transform: "translateY(0) scale(1)", opacity: "0.35" },
          "50%": { transform: "translateY(-8%) scale(1.04)", opacity: "0.55" },
        },
        "steam-drift": {
          "0%, 100%": { transform: "translateX(-3%)" },
          "50%": { transform: "translateX(4%)" },
        },
        shimmer: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.7" },
        },
      },
      backgroundImage: {
        "coffee-gradient": "var(--coffee-gradient)",
      },
    },
  },
  plugins: [],
};

export default config;
