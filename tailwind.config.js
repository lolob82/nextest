/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f6f8f6',
          100: '#e8ebe8',
          200: '#d1d7d1',
          300: '#b9c3b9',
          400: '#a2afa2',
          500: '#87a96b',
          600: '#6b8e4e',
          700: '#557240',
          800: '#455b35',
          900: '#3a4c2e',
        },
        earth: {
          50: '#faf8f3',
          100: '#f4f0e6',
          200: '#e8dcc7',
          300: '#d9c4a0',
          400: '#c8a677',
          500: '#a67c52',
          600: '#8b6914',
          700: '#664a0f',
          800: '#543c0d',
          900: '#46320b',
        }
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}