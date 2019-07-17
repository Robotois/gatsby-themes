module.exports = ({ contentPath = 'data', basePath = '/' }) => ({
  siteMetadata: {
    title: 'Robotois themes',
    headline: 'Kit disponibles',
    basePath,
  },
  plugins: [
    'gatsby-plugin-theme-ui',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: contentPath,
      },
    },
    {
      resolve: 'gatsby-transformer-yaml',
      options: {
        typeName: 'Product',
      },
    },
  ],
});
