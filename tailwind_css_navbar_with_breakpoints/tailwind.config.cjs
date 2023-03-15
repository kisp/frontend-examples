/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px"
    },
    extend: {
      colors: {
        clifford: "#da373d",
        midnight: "#121063"
      }
    }
  },
  plugins: [],
}
