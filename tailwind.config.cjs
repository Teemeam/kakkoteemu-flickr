/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['"Montserrat"', 'sans-serif'],
      },
      minHeight: {
        '100px': '100px',
      },
      minWidth: {
        '200px': '200px',
      },
      width: {
        '400px': '400px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    require('tailwind-scrollbar-hide'),
  ],
}