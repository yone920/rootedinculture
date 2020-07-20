module.exports = {
  siteMetadata: {
    title: `Rooted In Culture`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `YoneDesign`,
    nab: "Habibi",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-fonts`,
    //   options: {
    //     fonts: [
    //       `Roboto sans serif\:300,400,400i,700`          // `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
    //     ],
    //     display: 'swap'
    //   }
    // },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          // {
          //   family: `Raleway`,
          //   variants: [`400`, `700`]
          // },
          {
            family: `Playball`,
            variants: [`400`]
          },
          {
            family: `Roboto`,
            subsets: [`latin`]
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages-data`,
        path: `${__dirname}/src/posts/`,
      },
    },

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // your WordPress source
        baseUrl: `rootedinculture.net`,
        protocol: `https`,
        // is it hosted on wordpress.com, or self-hosted?
        hostingWPCOM: false,
        // does your site use the Advanced Custom Fields Plugin?
        useACF: true,
      },
    },
    {
      resolve: `gatsby-source-shopify`,
      options: {
        shopName: `rooted-in-culture-test`,
        accessToken: `56092a7ec1c498c4830dfb5b558badc9`,
        verbose: true,
        paginationSize: 250,
      }
    },
    `gatsby-plugin-netlify`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "MyFontsWebfontsKit",
        path: `${__dirname}/src/fonts/`
      }
    },
    // {
    // 	resolve: `gatsby-source-instagram`,
    // 	options: {
    // 		username: `yonayon`,
    // 		access_token: "EAAH1LIZCvTMIBAGhNSn6NM9wo0KRDIf2PkOVEaZC1TD1bavNZA92jz4g27guhJiyvgDnomW1fHZAZCU0cVvQKlqPhtfKzJHknW91bD5mRc90XZC3Xgg4NNASsHdji71Te0cSZB5mBRE1lZAyuNxgoFjf8ZAn2guOCbmnC9A7azm7yQwZDZD",
    // 		instagram_id: "660273534017699",
    // 		paginate: 100,
    // 		maxPosts: 1000,
    // 	},
    // },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `1759947270`,
      },
    },
    // rootedincultureflowers
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
