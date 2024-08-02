/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
    `./src/templates/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Work Sans', sans-serif"],
        crete: ["'Crete Round', serif"],
      },
      colors: {
        primary: "rgba(255,246,239,.9)",
        pink: "hsla(8,79%,72%,.1)",
      },
    },
  },
  plugins: [],
};
