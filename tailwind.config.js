/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#C3A4E5', // violet
          dark: '#721172'   // dark violet
        },
        background: {
          light: '#FFFFFF', // white
          dark: '#000000'   // black
        },
        text: {
          light: '#000000', // black
          dark: '#FFFFFF'   // white
        }
      }
    },
  },
  plugins: [],
}
