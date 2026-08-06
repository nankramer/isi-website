import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        earth: {
          950: "#0D0D0D",
          900: "#1A1A1A",
          800: "#2A2A2A",
          700: "#3A3A3A",
          600: "#4A4A4A",
          500: "#6A6A6A",
          400: "#8A8A8A",
          300: "#AAAAAA",
        },
        gold: {
          DEFAULT: "#B8860B",
          light: "#D4A843",
          dark: "#8B6914",
          50: "#FBF8F0",
          100: "#F5F0E8",
          200: "#EDE4D0",
          300: "#D4A843",
          400: "#B8860B",
          500: "#8B6914",
        },
        parchment: "#FBF8F0",
        stone: "#F5F0E8",
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        body: ["Source Sans 3", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "fade-in-delay": "fadeIn 0.8s ease-out 0.2s forwards",
        "fade-in-delay-2": "fadeIn 0.8s ease-out 0.4s forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
