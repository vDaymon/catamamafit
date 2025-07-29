/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'], // Aquí se establece como predeterminada
      },
      colors: {
        primary: {
          light: '#db779d',
          DEFAULT: '#ff81e3',
          dark: '#c84678',
        },
        accent: {
          purple: '#bf9cfc',
          pink: '#fc9fff',
          coral: '#ff6568',
          blue: '#e3fafa',
        },
      },
    },
  },
  plugins: [],
};
