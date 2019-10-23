/** @jsx jsx */
// eslint-disable-next-line
import React from 'react';
import { jsx } from 'theme-ui';
import { Styled } from 'theme-ui';
import Layout from '../components/layout';
import { Link } from 'gatsby';

const SuccessPage = () => (
  <Layout>
    <div
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '85vh',
        width: '90vw',
        flexDirection: ['column', 'row'],
        px: [0, 5],
        pt: [0, 5, 0],
      }}
    >
      <div>
        <Styled.h2> GRACIAS POR TU COMPRA </Styled.h2>
        <Styled.p>
          En unos momentos recibirás un email de robotois con la confirmacion de
          tu compra.
        </Styled.p>
        <Link
          to="/"
          style={{
            color: '#3525e6',
            'font-family': 'Montserrat-Regular, Montserrat, serif',
            padding: 10,
          }}
        >
          Regresar al inicio
        </Link>
      </div>
      <div
        sx={{
          mt: [5, 0, 0],
        }}
      >
        <img
          sx={{
            width: ['100%'],
          }}
          src={require(`../images/celebration.svg`)}
          alt="success"
        />
      </div>
    </div>
  </Layout>
);

export default SuccessPage;
