/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
            fontFamily: {
                heading: ['"Arvo", serif'],
                paragraph: ['"Quicksand", sans-serif'],
            },

            colors: {
                fontColor: '#402E32',
                footerYellow: '#FFDD85',
                yellow: '#FFCA76',
                purple: '#A573FF',
            },

            backgroundImage: {
              heroBackground: "url('/images/background_image.jpg')"
            }
          }

    }
  }

