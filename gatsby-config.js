module.exports = {
  siteMetadata: {
   title: `Peter Hironaka`,
   description: `Hello, my name is Peter Hironaka. I’m a Front-End Developer based in sunny Venice, California. `
 },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-glamor`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
