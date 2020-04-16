module.exports = {
  siteMetadata : {
    title: 'my Gtasby Site',
    author: 'flo preynat'
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      },
    },
    'gatsby-transformer-remark'
  ]
}
