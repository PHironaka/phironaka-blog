module.exports = {
  siteMetadata: {
   title: `Peter Hironaka`,
   url: `https://blog.peterhironaka.com`
   description: `Hello, my name is Peter Hironaka. I’m a Freelance Web Developer based in sunny Venice, California. This is my blog where I pontificate about whatever I feel like. Mostly coing web stuff. As you were. `
 },
  plugins: [

    {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 8,
      }
    },

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
