/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "bebas-neue": "var(--font-bebas-neue)",
        manrope: "var(--font-manrope)",
      },
      colors: {
        "color-primary": "var(--color-primary)",
        "color-text-primary": "var(--color-text-primary)",
        "color-text-secondary": "var(--color-text-secondary)",
      },
      screens: {
        xs: "480px",
        ss: "560px",
      },
    },
  },
  plugins: [],
};
