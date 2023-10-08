/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'baby-pink': '#FFFBFC',
        'borderPink':'#FFF3ED',
        'btnBlue':'#012454',
        'orange':'#FF6300'
      },
      // backgroundImage: {
      //   // 'background-img': "url('/img/hero-pattern.svg')",
      //   'web-logo': "url('/src/assets/images/logo.png')",
      // }
    },
  },
  plugins: [],
}

