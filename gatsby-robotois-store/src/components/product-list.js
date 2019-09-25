/** @jsx jsx */
import { jsx } from 'theme-ui';
// eslint-disable-next-line 
import React from 'react';
import { Link } from 'gatsby';
import { Styled } from 'theme-ui';
import ProductImage from './product-image';

function ProductList({ products }) {
  return (
    <ul sx={{
      display: 'grid',
      gridTemplateColumns: ['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)'],
      gridGap: 4,
    }}>
      {products.map(product => {
        return (
          <Styled.li key={product.id}>
            <Link to={product.slug}>
              <ProductImage image={product.image} />
              <Styled.h2 sx={{ pt: 3 }}>{product.name}</Styled.h2>
              <p className="summary">{product.description}</p>
              <span className="summary">
                {new Date(product.releaseDate).toLocaleDateString('es-MX', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
            </Link>
          </Styled.li>
        );
      })}
    </ul>
  );
}

export default ProductList;
