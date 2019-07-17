import React from 'react';
import { Styled } from 'theme-ui';

function Product({ name, releaseDate, description }) {
  return (
    <>
      <Styled.h1>{name})</Styled.h1>
      <p>{description}</p>
      {new Date(releaseDate).toLocaleDateString('es-MX', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })}
    </>
  );
}

export default Product;
