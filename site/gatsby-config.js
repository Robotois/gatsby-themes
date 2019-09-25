module.exports = {
  plugins: [
    'gatsby-robotois-arduino',
    {
      resolve: 'gatsby-robotois-store',
      options: {
        contentPath: 'products',
        basePath: 'tienda',
        title: 'Tienda Robotois',
        headerLinks: [
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
    },
    {
      resolve: 'gatsby-robotois-academy',
      options: {
        contentPath: 'courses',
        basePath: 'academia',
        title: 'Robotois'
      },
    },
  ],
};
