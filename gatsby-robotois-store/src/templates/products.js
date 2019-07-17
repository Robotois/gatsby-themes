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
          releaseDate
          description
          slug
        }
      }
    }
  `);

  const products = data.allProduct.nodes;

  return (
    <Layout>
      <ProductList products={products} />
    </Layout>
  );
}

export default ProductsTemplate;
