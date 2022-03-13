const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      black: colors.black,
      white: colors.white,
      grey: colors.gray,
      green: colors.emerald,
      orange: colors.orange,
      pink: {
        50: '#FFF2F9',
        100: '#FED0DA',
        200: '#FEAED8',
        300: '#F56D90',
      },
      purple: {
        50: '#E7E9F1',
        100: '#E6DAFE',
        200: '#DCBBFA',
        300: '#B38DFC',
      },
      red: {
        400: '#F49AAB',
        500: '#F7798B',
        600: '#EF5264',
        700: '#FE394B',
      },
      navy: {
        200: '#acacc2',
        400: '#575770',
        500: '#363651',
        600: '#1B1B4C',
        700: '#000040',
      },
    },
    fontFamily: {
      cuf: ['Lobster'],
      body: ['Roboto Condensed'],
    },
    extend: {
      backgroundImage: {
        stars: "url('assets/images/fond-comme-une-fusee.jpg')",
      },
    },
  },

  plugins: [],
}
