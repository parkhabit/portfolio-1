import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'selector',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        typewriter1: "typewriter1 18s steps(26, end) infinite",
        typewriter2: "typewriter2 18s steps(22, end) infinite",
        typewriter3: "typewriter3 18s steps(26, end) infinite",
        caret: "caret 1s steps(1, end) infinite",
      },
      keyframes: {
        typewriter1: {
          '0%': {
            width: '0',
          },
          '10%': {
            width: '0',
          },
          '20%': {
            width: '12rem',
          },
          '30%': {
            width: '12rem',
          },
          '40%': {
            width: '0',
          },
          '100%': {
            width: '0',
          },
        },
        typewriter2: {
          '0%': {
            width: '0',
          },
          '40%': {
            width: '0',
          },
          '50%': {
            width: '10.2rem',
          },
          '60%': {
            width: '10.2rem',
          },
          '70%': {
            width: '0',
          },
          '100%': {
            width: '0',
          },
        },
        typewriter3: {
          '0%': {
            width: '0',
          },
          '70%': {
            width: '0',
          },
          '80%': {
            width: '11.5rem',
          },
          '90%': {
            width: '11.5rem',
          },
          '100%': {
            width: '0',
          },
        },
        caret: {
          '0%': {
            opacity: '0',
          },
          '50%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0',
          },
        }
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
