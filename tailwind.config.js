/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      },
      spacing: {
        '30':'7.5rem',
        '18':'4.5rem',
        '58':'14.5rem',
      },
    },
  },
  plugins: [],
}