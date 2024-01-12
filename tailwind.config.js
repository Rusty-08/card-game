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
          cream: '#DCF2F1',
          ['light-blue']: '#7FC7D9',
          medium: '#365486',
          dark: '#0F1035',
        }
      }
    },
  },
  plugins: [],
}

