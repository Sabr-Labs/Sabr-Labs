/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "brand-blue": "#0B8CE9",
        "brand-dark": "#0A1628",
        "brand-navy": "#0F2137",
        "brand-light": "#F7FAFC",
        "brand-cyan": "#0B8CE9",
        "brand-accent": "#06B6D4",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
};
