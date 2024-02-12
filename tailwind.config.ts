import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f3f4f6",
          100: "#e7e9ed",
          200: "#c3c8d3",
          300: "#9fa5b9",
          400: "#565f86",
          500: "#0d1733",
          600: "#0c1530",
          700: "#0a1228",
          800: "#080f20",
          900: "#070d1b",
        },
        secondary: {
          50: "#f7f7f7",
          100: "#efefef",
          200: "#dfe0e0",
          300: "#cfcfcf",
          400: "#b0b0b0",
          500: "#919191",
          600: "#828282",
          700: "#6e6e6e",
          800: "#595959",
          900: "#4a4a4a",
        },
        accent: {
          50: "#f5f7f9",
          100: "#ebeff4",
          200: "#ccd5e3",
          300: "#adbcd2",
          400: "#7089b3",
          500: "#335692",
          600: "#2f4f89",
          700: "#273f6f",
          800: "#1f314b",
          900: "#19273d",
        },
        success: {
          50: "#f3f9f6",
          100: "#e7f3ed",
          200: "#c3e0d3",
          300: "#9fbdb9",
          400: "#569186",
          500: "#0d6653",
          600: "#0c5e4c",
          700: "#0a5141",
          800: "#083936",
          900: "#072e2e",
        },
        warning: {
          50: "#f9f8f6",
          100: "#f3f1ed",
          200: "#e3dcd3",
          300: "#d3c8b9",
          400: "#b3a186",
          500: "#938653",
        },
      },
      plugins: [],
    },
  },
};
export default config;
