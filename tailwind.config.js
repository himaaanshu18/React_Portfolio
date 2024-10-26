/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'anime': {
          '0%': { borderColor: 'blue', transformTranslate: '0,0px' ,boxShadow: '10px 10px 100px 50px blue'},
          '25%': { borderColor: 'rgb(239, 244, 11)', boxShadow: '10px 10px 100px 50px rgb(239, 244, 11)' },
          '50%': { borderColor: 'rgb(12, 12, 199)',transform: 'translate(0,10px)', boxShadow: '10px 10px 100px 50px rgb(12, 12, 199)' },
          '75%': {  borderColor: 'rgb(130, 217, 160)', boxShadow: '10px 10px 100px 50px rgb(130, 217, 160)' },
          '100%': {borderColor: 'rgb(50, 55, 205)', transform: 'translate(0,0px)' , boxShadow: '10px 10px 100px 50px rgb(50, 55, 205)' }
        }
      },
      animation:{
        'anime':'anime 3s infinite'
      }
    },
  },
  plugins: [],
}