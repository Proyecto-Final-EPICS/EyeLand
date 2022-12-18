/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'font-sans',
    'font-serif',
    'font-mono',
    'border-black',
    'tracking-normal',
    'tracking-wide',
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#0D9748",
        secondary: "#41FB99",
        terciary: "#9BE931",
        cuaternary: "#FBFF48",
      }
    },
  },
  plugins: [],
}
