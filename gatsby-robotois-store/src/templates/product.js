import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Product from '../components/product';

export const query = graphql`
  query($productID: String!, $skuID: String!) {
    product(id: { eq: $productID }) {
      name
      releaseDate(formatString: "MMMM D, YYYY")
      description
      videoId
      sku
      components {
        name
        description
        image
      }
    }
    stripeSku(id: { eq: $skuID }) {
      id
      price
      product {
        name
      }
    }
  }
`;

function ProductTemplate({ data: { product, stripeSku } }) {
  return (
    <Layout>
      <Product {...{ ...product, stripeSku }} />
    </Layout>
  );
}

export default ProductTemplate;
