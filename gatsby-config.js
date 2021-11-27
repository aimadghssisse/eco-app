require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `POD POINT`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@podpont`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,

    // set config sass
    "gatsby-plugin-sass",
    // load src direct
    "gatsby-plugin-resolve-src",
    //load ostcss plugin
    "gatsby-plugin-postcss",
    //load config prismic
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: process.env.PRISMIC_REPO_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN
      }
    },
    {
      resolve: 'gatsby-source-bigcommerce',
      options: {
        clientId: process.env.BIG_COMMERCE_CLIENT_ID,
        secret: process.env.BIG_COMMERCE_CLIENT_SECRET,
        accessToken: process.env.BIG_COMMERCE_ACCESS_TOKEN,
        storeHash: process.env.BIG_COMMERCE_SITE_HASH,
        //endpoint: "/catalog/products",

        nodeName: "BigCommerceNode",
        //apiVersion: 'v2',
        endpoints: {
          BigCommerceNodeProducts: "/catalog/products?include=images,variants,custom_fields",
          BigCommerceNodeCategories: "/catalog/categories"
        }
      }
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      }
    },
    {
      resolve: `gatsby-plugin-react-redux-persist`,
      options: {
        // [required] - path to your createStore module
        pathToCreateStoreModule: './src/store',
        // [optional] - options passed to `serialize-javascript`
        // info: https://github.com/yahoo/serialize-javascript#options
        // will be merged with these defaults:
        serialize: {
          space: 0,
          // if `isJSON` is set to `false`, `eval` is used to deserialize redux state,
          // otherwise `JSON.parse` is used
          isJSON: true,
          unsafe: false,
          ignoreFunction: true
        },
        // [optional] - if true will clean up after itself on the client, default:
        cleanupOnClient: true,
        // [optional] - name of key on `window` where serialized state will be stored, default:
        windowKey: '__PRELOADED_STATE__'
      }
    },
    `gatsby-plugin-nodejs`
  ]
}
