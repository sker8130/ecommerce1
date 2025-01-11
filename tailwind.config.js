/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {
      fontFamily:{
        jakarta: ['Plus Jakarta Sans','serif'],
      },
      maxWidth: {
        1480: "1480px",
      },
      colors: {
        primary: "#000",
        secondary: "#fa2828",
        gray: "#ebebe9",
        lightGray: "#8a8a8a",
      },
      size: {
        13: "13px",
      }
    },
  },
  plugins: [],
}