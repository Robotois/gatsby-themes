// get environment vars
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = ({ contentPath = 'data', basePath = '/', title, headerLinks }) => {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw Error(
      'You have not set stripe secret key, check https://www.gatsbyjs.org/docs/environment-variables/',
    );
  }

  if (!process.env.GATSBY_STRIPE_PUBLIC_KEY) {
    throw Error(
      'You have not set stripe public key, check https://www.gatsbyjs.org/docs/environment-variables/',
    );
  }

  return {
    siteMetadata: {
      title: 'ROBOTOIS',
      headline: 'Kit disponibles',
      basePath,
      headerLinks: headerLinks || [
        {
          title: 'Academia',
          link: '/academia'
        },
        {
          title: 'Plataforma',
          link: '/plataforma'
        }
      ]
    },
    plugins: [
      'gatsby-plugin-theme-ui',
      'gatsby-plugin-sharp',
      'gatsby-transformer-sharp',
      'gatsby-plugin-stripe',
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'products',
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
        resolve: 'gatsby-plugin-page-creator',
        options: {
          path: `${__dirname}/src/pages`,
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
