import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';

export default function ProductImage({ image }) {
  const data = useStaticQuery(graphql`
    query {
      allImageSharp {
        edges {
          node {
            # Specify a fixed image and fragment.
            # The default width is 400 pixels
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  `);

  return (
    <Img
      fixed={
        data.allImageSharp.edges.find(element => {
          return element.node.fixed.src.split('/').pop() === image;
        }).node.fixed
      }
      alt="imagen del componente del kit"
    />
  );
}
