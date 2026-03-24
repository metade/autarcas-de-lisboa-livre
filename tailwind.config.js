/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './_layouts/**/*.html',
    './_includes/**/*.html',
    './_pages/**/*.md',
    './_autarcas/**/*.md',
    './_juntas/**/*.md',
    './_propostas/**/*.md',
    './index.md',
  ],
  theme: {
    extend: {
      colors: {
        // Override default gray with warm stone tones (matches LIVRE brand aesthetic)
        gray: colors.stone,
        livre: {
          green: '#bdd600',
          'green-dark': '#8a9d00',
          'green-light': '#f3f8cc',
          dark: '#1c1c1a',
          red: '#ff4433',
          blue: '#00b4ed',
          purple: '#d971b5',
        },
      },
      fontFamily: {
        sans: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
