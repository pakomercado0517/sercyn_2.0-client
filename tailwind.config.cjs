/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sercynBlue: "#064273",
        sercynBlueLight: "#1da2d8",
        sercynSand: "#eccca2",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
