module.exports = {
  content: [
    './src/_includes/components/**/*.{html,js,njk}',
    './src/_includes/**/*.{html,js,njk}',
    './src/**/*.{html,js,njk}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        superfunk: {
          dark: '#171717',
          'dark-2': '#292929',
          blue: '#2399CA',
          'blue-light': '#27AAE1',
          green: '#7EB239',
          'green-light': '#8CC63F',
          pink: '#E53E94',
          'pink-light': '#E53E94',
          yellow: '#FFEB00',
        },
      },
      height: {
        headerlogo: '3.75rem',
      },
      width: {
        headerlogo: '10.375rem',
      },
    },
  },
  plugins: [],
};
