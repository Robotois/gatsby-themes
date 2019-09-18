module.exports = ({ contentPath = 'data', basePath = '/' }) => {
  return {
    siteMetadata: {
      title: 'ROBOTOIS ACADEMY',
      headline: 'Academia Robotois',
      basePath,
      headerLinks: [
        {
          title: 'Curso',
          link: '/curso'
        },
        {
          title: 'Plataforma',
          link: '/plataforma'
        }
      ]
    },
    plugins: [
      'gatsby-plugin-theme-ui',
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'courses',
          path: contentPath,
        },
      },
      {
        resolve: 'gatsby-transformer-json',
        options: {
          typeName: 'Course',
        },
      },
      {
        resolve: 'gatsby-plugin-page-creator',
        options: {
          path: `${__dirname}/src/pages`,
        },
      },
    ],
  };
};
