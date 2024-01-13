import colors from 'tailwindcss/colors'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: colors.sky[200],
          hover: colors.sky[300],
          blue: colors.blue[900],
          dark: colors.sky[950]
        }
      }
    },
  },
  plugins: [],
}

