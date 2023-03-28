/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#e65100',
        accent: '#0095e6',
        warn: '#e60023',
      },
    },
  },
  plugins: [],
};
