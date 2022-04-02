module.exports = {
  purge: ['./src/*/.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Raleway'],
    },
    minHeight: {
      24: '6rem',
      0: '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      full: '100%',
      screen: '100vh',
    },
    maxHeight: {
      'half-screen': '50vh',
      '3/4-screen': '75vh',
      screen: '100vh',
      full: '100%',
    },
    // height:{
    //   '50vh':"50vh"
    // },
    extend: {
      fontFamily: {
        'title-abril': 'Abril Fatface',
        'title-oswald': 'Oswald',
        montserrat: 'montserrat',
        'shadow-into-light': 'Shadows Into Light',
      },
      colors: {
        base: '#090919',
        'base-light': '#33334d',
        primary: '#64B8FB',
        'primary-dark': '#0070F3',
        secondary: '#ff1cf7',
        'secondary-dark': '#b249f8',
        'secondary-last': '#f05454',
      },
      maxWidth: {
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '7/10': '70%',
        screen: '100vw',
      },
      minWidth: {
        screen: '100vw',
      },
    },
  },
  darkmode: false,
  variants: {
    textColor: ['responsive', 'group-hover', 'hover', 'focus'],
    width: ['responsive', 'group-hover', 'hover', 'focus'],
  },
  plugins: [],
};
