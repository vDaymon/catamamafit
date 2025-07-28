/** @type {import('tailwindcss').Config} */
      module.exports = {
        content: [
          "./src/**/*.{js,jsx,ts,tsx}",
        ],
        theme: {
          extend: {
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
              },
            },
          },
        },
        plugins: [],
      }