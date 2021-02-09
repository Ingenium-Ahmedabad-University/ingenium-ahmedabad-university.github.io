module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Raleway'],
    },
    extend: {
      fontFamily: {
        'title-abril': 'Abril Fatface',
        'title-oswald': 'Oswald',
      },
      colors: {
        base: '#090919',
        'base-light': '#33334d',
        primary: '#00adb5',
        secondary: '#f05454',
      },
    },
  },
  darkmode: false,
  variants: {
    textColor: ['responsive', 'group-hover', 'hover', 'focus'],
  },
  plugins: [],
};
