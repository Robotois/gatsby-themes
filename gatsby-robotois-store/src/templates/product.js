import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Product from '../components/product';

export const query = graphql`
  query($productID: String!) {
    product(id: { eq: $productID }) {
      name
      releaseDate(formatString: "MMMM D, YYYY")
      description
      videoId
      slug
    }
  }
`;

const ProductTemplate = ({ data: { product } }) => (
  <Layout>
    {console.log(product)}
    <Product {...product} />
  </Layout>
);

export default ProductTemplate;
