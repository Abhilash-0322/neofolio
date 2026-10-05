import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0f0c1d",
        lavender: "#b8a5ff",
        lilac: "#8f7cf4",
        mist: "#e5ddff",
      },
    },
  },
  plugins: [],
};

export default config;
