module.exports = {
  siteMetadata: {
    title: `Sergio Leonardo`,
    description: `Passionate Software Developer based in Seattle, WA.`,
    author: `Sergio Leonardo`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sergio Leonardo | Portfolio`,
        short_name: `Sergio Leonardo`,
        start_url: `/`,
        background_color: `#0D213C`,
        theme_color: `#0D213C`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-remove-serviceworker',
    {
      resolve: "gatsby-plugin-transition-link",
      options: {
        injectPageProps: true,
        layout: require.resolve(`./src/components/layout.js`)
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
