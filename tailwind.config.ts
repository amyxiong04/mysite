import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#172033",
        cloud: "#f7f5ef",
        mist: "#e8edf2",
        navy: "#071426",
        slateblue: "#10243d",
        teal: "#43c7b5",
        lilac: "#9f8cff",
        lamp: "#ffd166",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 70px rgba(255, 209, 102, 0.35)",
        soft: "0 20px 70px rgba(15, 23, 42, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
