/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#e65100',
        accent: '#303F9F',
        warn: '#D32F2F',
      },
    },
  },
  plugins: [],
};
