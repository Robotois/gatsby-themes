module.exports = ({ contentPath = 'data', basePath = '/', title, headerLinks, downloadFilesLabel }) => {
  return {
    siteMetadata: {
      title: title || 'ROBOTOIS ACADEMY',
      headline: 'Academia Robotois',
      downloadFilesLabel: downloadFilesLabel || 'Descargar Archivos',
      basePath,
      headerLinks: headerLinks || [
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
