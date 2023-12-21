/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors:{
        primary: '#D8BC59',
        one:'#EADFB9'
      },
    },
  },
  plugins: [],
}

