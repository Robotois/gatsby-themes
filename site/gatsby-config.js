module.exports = {
  plugins: [
    'gatsby-robotois-arduino',
    {
      resolve: 'gatsby-robotois-store',
      options: {
        contentPath: 'products',
        basePath: 'tienda',
      },
    },
    {
      resolve: 'gatsby-robotois-academy',
      options: {
        contentPath: 'courses',
        basePath: 'academia',
      },
    },
  ],
};
