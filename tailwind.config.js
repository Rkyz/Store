/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'roboto': ['Roboto', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors:{
        'Darkmode': '#323048',
        'maindark': '#252F45',
        'DarkBad': '#13182B',
        'lightmode' : '#FFFF',
        "primary": "#6777EF", //"#1565C0",
        'lightbad' : '#E3E4E8',
        'lightsun' : '#F4F6F9'
      },
      animation: {
        loader: 'loader 0.6s infinite alternate',
        bganimate: 'bganimate 0.6s infinite alternate',
      },
      keyframes: {
        loader: {
          to: {
            opacity: 0.1,
            transform: 'translate3d(0, -1rem, 0)'
          }
        },
        bganimate:{
          from: {
            opacity: 0.7
          },
          to: {
            opacity: 0.3
          }
        }
      }
    },
  },
  plugins: [],
}

