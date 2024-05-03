/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      "Nsans-light": ['Nsans light'],
      "Nsans-bold": ['Nsans bold'],
      "Nsans-Medium": ['Nsans Medium'],
      "Nsans-regular": ['Nsans regular']
    }
  },
  plugins: [require('tailwind-scrollbar-hide')],
}