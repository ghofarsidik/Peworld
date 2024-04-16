/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ungu-pj': '#5E50A1',
        'abu-pj': '#9EA0A5',
        'abu-bg': '#E4E6E7',
        'orange-pj': '#FAAF17',
      },
      fontFamily: {
        Osans : ['Open Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

