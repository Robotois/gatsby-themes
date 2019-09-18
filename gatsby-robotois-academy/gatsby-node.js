const fs = require('fs');
// 1. make sure the data dir exists
exports.onPreBootstrap = ({ reporter }, options) => {
  const contentPath = options.contentPath || 'data';

  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`);
    fs.mkdirSync(contentPath);
  }
};

// 2. define the course type
exports.sourceNodes = ({ actions }) => {
  actions.createTypes(`
    type Course implements Node @dontInfer {
      id: ID!
      title: String!
      description: String!
      releaseDate: Date! @dateformat @proxy(from: "release_date")
      videoId: String!
      code: String!
      slug: String!
    }
  `);
};
// 3.- define resolvers for any custom fields (slug)
exports.createResolvers = ({ createResolvers }, options) => {
  const basePath = options.basePath || '/';

  // Quick-and-dirty helper to convert strings into URL-friendly slugs.
  const slugify = str => {
    const slug = str && str
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-') // si tiene algun caracter raro en el nombre se sustituye por -
      .replace(/(^-|-$)+/g, ''); // si empieza o termina con - se limpia

    return `/${basePath}/${slug}`.replace(/\/\/+/g, '/'); // para evitar multiples / por que `basePath` puede cambiar
  };

  createResolvers({
    Course: {
      slug: {
        resolve: source => slugify(source.title),
      },
    },
  });
};
// 4. Query for courses and create pages
exports.createPages = async ({ actions, graphql, reporter }, options) => {
  const basePath = options.basePath || '/';
  actions.createPage({
    path: basePath,
    component: require.resolve('./src/templates/courses.js'),
  });

  const result = await graphql(`
    query {
      allCourse(sort: { fields: releaseDate, order: ASC }) {
        nodes {
          id
          slug
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic('error loading courses', result.errors);
    return;
  }

  const courses = result.data.allCourse.nodes;

  courses.forEach(course => {
    const slug = course.slug;

    actions.createPage({
      path: slug,
      component: require.resolve('./src/templates/course.js'),
      context: {
        courseID: course.id,
      },
    });
  });
};
