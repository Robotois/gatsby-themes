// get environment vars
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = ({ contentPath = 'data', basePath = '/' }) => {
  console.log('**************');
  console.log(process.env.NODE_ENV);
  console.log('**************');

  console.log(process.env.STRIPE_SECRET_KEY);
  console.log('****+++++++++++**********');

  return {
    siteMetadata: {
      title: 'ROBOTOIS',
      headline: 'Kit disponibles',
      basePath,
    },
    plugins: [
      'gatsby-plugin-theme-ui',
      'gatsby-plugin-sharp',
      'gatsby-transformer-sharp',
      'gatsby-plugin-stripe',
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
      {
        resolve: 'gatsby-source-stripe',
        options: {
          objects: ['Sku'],
          secretKey: process.env.STRIPE_SECRET_KEY,
          downloadFiles: true,
        },
      },
    ],
  };
};
