const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#5f0fd1',
        },
        secondary: {
          DEFAULT: '#0fa6d1',
        },
        grey: {
          lightest: '#999',
          lighter: '#666',
          light: '#333',
          DEFAULT: '#222',
          dark: '#111',
        },
        gray: colors.stone,
        white: '#FFFFFF',
        black: '#050505',
      },
    },
    fontFamily: {
      primary: ['Inter'],
      secondary: ['Inconsolata'],
      tertiary: ['Audiowide'],
    },
  },
  plugins: [],
};
