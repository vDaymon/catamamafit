/** @type {import('tailwindcss').Config} */
      module.exports = {
        content: [
          "./src/**/*.{js,jsx,ts,tsx}",
        ],
        theme: {
          extend: {
            colors: {
              primary: {
                light: '#fc9fff',
                DEFAULT: '#ff81e3',
                dark: '#ff62b4',
              },
              accent: {
                purple: '#bf9cfc',
                pink: '#fc9fff',
                coral: '#ff6568',
              },
            },
          },
        },
        plugins: [],
      }