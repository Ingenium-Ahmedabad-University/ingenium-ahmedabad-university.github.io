const resolveConfig = require('tailwindcss/resolveConfig');
const tailwindConfig = require('./tailwind.config.js');

const { theme } = resolveConfig(tailwindConfig);

module.exports = {
  siteMetadata: {
    title: 'Ingenium',
    author: 'Ingenium tech team',
    description: 'A Gatsby starter to set you up with Tailwind CSS',
  },
  pathPrefix: '/website',
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Ingenium',
        short_name: 'Ingenium',
        start_url: '/',
        background_color: theme.colors.white,
        theme_color: theme.colors.extended,
        icon: 'src/images/icon.svg',
      },
    },
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [require('tailwindcss'), require('autoprefixer')],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `raleway`,
          `oswald`,
          `Shadows Into Light`,
          `montserrat\:300,400,400i,700`,
          `abril fatface`,
          `source sans pro\:300,400,400i,700`, // you can also specify font weights and styles
        ],
        display: 'swap',
      },
    },
    'gatsby-plugin-catch-links',
    'gatsby-transformer-remark',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data`,
        name: 'data',
      },
    },
  ],
};