/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['App.tsx', './src/**/*.tsx'],
  theme: {
    colors: {
      red: {
        100: '#F4E6E7',
        300: '#F3BABD',
        500: '#BF3B44',
      },

      green: {
        100: '#E5F0DB',
        300: '#CBE4B4',
        500: '#639339',
      },

      gray: {
        100: '#FAFAFA',
        200: '#EFF0F0',
        300: '#DDDEDF',
        400: '#B9BBBC',
        500: '#5C6265',
        800: '#333638',
        900: '#1B1D1E',
      },

      white: '#FFFFFF',
      black: '#000000',

      transparent: 'transparent',
    },

    fontFamily: {
      body: 'NunitoSans_400Regular',
      title: 'NunitoSans_700Bold',
    },

    fontSize: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 18,
      xl: 20,
      '2xl': 24,
      '3xl': 32,
    },

    extend: {},
  },
  plugins: [],
}
