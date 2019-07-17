import React from 'react';
import { Link } from 'gatsby';
import { Styled } from 'theme-ui';
import useSiteMetadata from '../hooks/use-site-metadata';

function ProductList({ products }) {
  const meta = useSiteMetadata();
  return (
    <>
      <Styled.h1>{meta.headline}</Styled.h1>
      <Styled.ul>
        {products.map(product => {
          return (
            <Styled.li key={product.name}>
              <strong>
                <Link to={product.slug}> {product.name} </Link>
              </strong>
              <p>{product.description}</p>
              {new Date(product.releaseDate).toLocaleDateString('es-MX', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </Styled.li>
          );
        })}
      </Styled.ul>
    </>
  );
}

export default ProductList;
