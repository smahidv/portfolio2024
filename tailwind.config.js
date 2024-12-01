/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        xs: '360px',
        mobi:'400px'
      },
      colors: {
        primary:'#FF5B57',
        primaryLight: '#FF928F',
        primaryLighter: '#FFC0C0',
        secondary: '#3A3636'
      },
      backgroundImage: {
        'hero': "url('/src/assets/headerBG.png')",
        'skillsBG': "url('/src/assets/skillsBG.png')",
        'educationBG': "url('/src/assets/educationBG.png')",
      },
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      }
    },
  },
  plugins: [],
}

