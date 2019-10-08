import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import ProductList from '../components/product-list';

function ProductsTemplate() {
  const data = useStaticQuery(graphql`
    query {
      allProduct(sort: { fields: releaseDate, order: ASC }) {
        nodes {
          id
          name
          image
          releaseDate(formatString: "MMMM D, YYYY")
          description
          slug
        }
      }
    }
  `);

  const products = data.allProduct.nodes;

  return (
    <Layout hasSearch>
      <ProductList products={products} />
    </Layout>
  );
}

export default ProductsTemplate;
