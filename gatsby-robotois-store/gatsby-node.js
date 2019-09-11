const fs = require('fs');
// 1. make sure the data dir exists
exports.onPreBootstrap = ({ reporter }, options) => {
  const contentPath = options.contentPath || 'data';

  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`);
    fs.mkdirSync(contentPath);
  }
};

// 2. define the product type
exports.sourceNodes = ({ actions }) => {
  actions.createTypes(`
    type Component implements Node @dontInfer {
      name: String
      description: String
      image: String
    }
    type Product implements Node @dontInfer {
      id: ID!
      name: String!
      description: String!
      releaseDate: Date! @dateformat @proxy(from: "release_date")
      videoId: String!
      sku: String!
      slug: String!
      components: [Component]
    }
  `);
};
// 3.- define resolvers for any custom fields (slug)
exports.createResolvers = ({ createResolvers }, options) => {
  const basePath = options.basePath || '/';

  // Quick-and-dirty helper to convert strings into URL-friendly slugs.
  const slugify = str => {
    const slug = str
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-') // si tiene algun caracter raro en el nombre se sustituye por -
      .replace(/(^-|-$)+/g, ''); // si empieza o termina con - se limpia

    return `/${basePath}/${slug}`.replace(/\/\/+/g, '/'); // para evitar multiples / por que `basePath` puede cambiar
  };

  createResolvers({
    Product: {
      slug: {
        resolve: source => slugify(source.name),
      },
    },
  });
};
// 4. Query for products and create pages
exports.createPages = async ({ actions, graphql, reporter }, options) => {
  const basePath = options.basePath || '/';
  actions.createPage({
    path: basePath,
    component: require.resolve('./src/templates/products.js'),
  });

  const result = await graphql(`
    query {
      allProduct(sort: { fields: releaseDate, order: ASC }) {
        nodes {
          id
          slug
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic('error loading products', result.errors);
    return;
  }

  const products = result.data.allProduct.nodes;

  products.forEach(product => {
    const slug = product.slug;

    actions.createPage({
      path: slug,
      component: require.resolve('./src/templates/product.js'),
      context: {
        productID: product.id,
      },
    });
  });
};
