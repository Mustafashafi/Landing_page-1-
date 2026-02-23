/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#043873",
        secondary: "#4F9CF9",
        accent: "#FFE492",
        text: "#212529",
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
         'wave-pattern': "url('data:image/svg+xml;utf8,<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 1440 300\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 120 C 300 200, 500 0, 720 120 C 1000 250, 1200 -50, 1440 50 L1440 300 L0 300 Z\" fill=\"rgba(255,255,255,0.05)\"/></svg>')",
      }
    },
  },
  plugins: [],
}
