/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'Darkmode': '#323048',
        'maindark': '#252F45',
      }
    },
  },
  plugins: [],
}

