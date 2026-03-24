/** @type {import('tailwindcss').Config} */
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
        livre: {
          green: '#00A870',
          'green-dark': '#007a52',
          'green-light': '#e6f7f1',
          dark: '#1a1a2e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
