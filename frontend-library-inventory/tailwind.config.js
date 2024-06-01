/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown_100: '#f2dfd3',
        brown_200: '#964b00',
        brown_300: '#7c3f06',
        brown_400: '#633309',
        brown_500: '#1f1204',
      }
    },
  },
  plugins: [],
}

