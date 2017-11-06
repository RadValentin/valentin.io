module.exports = {
  siteMetadata: {
    author: 'Valentin Radulescu',
    title: 'Valentin Radulescu - Front-End Developer',
    description: 'Hi! I\'m Valentin, a Front-End Developer with a passion for creating immersive visual experiences.',
    url: 'https://valentin.io/'
  },
  plugins: [
    'gatsby-plugin-less',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-108625326-1'
      },
    }
  ],
}
