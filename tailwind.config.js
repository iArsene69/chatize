/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      'primary': '#FFF000',
      'secondary': '#D9D9D9',
      'tertier': '#151515',
      'bg-primary': '#1B1B1B'
    },
    fontFamily: {
      barlow: "BarlowCondensed"
    },
    extend: {},
  },
  plugins: [],
}

