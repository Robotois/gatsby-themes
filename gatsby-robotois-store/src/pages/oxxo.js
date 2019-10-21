/** @jsx jsx */
import { jsx } from 'theme-ui';
// eslint-disable-next-line
import React from 'react';
import { Styled } from 'theme-ui';
import Layout from '../components/layout';
import { navigate } from 'gatsby';

const Success = (props) => {
  const data = props.location.state.data.source;

  if (!data) {
    return navigate('/');
  }

  const price = (data.amount / 100).toLocaleString('es-MX', {
    style: 'currency',
    currency: 'MXN',
  });
  return (
    <Layout>
      <div sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        fontFamily: 'system-ui, sans-serif',
        px: [8, 0],
        '& section': {
          py: [8, 4]
        }
      }}>

        <img
          sx={{
            width: [300, 300, 400],
          }}
          src={require(`../images/oxxo.png`)}
          alt="success"
        />
        <section sx={{
          width: ['100%', 700],
          '& label': {
            color: 'title',
            mr: 3,
            fontSize: [4, 5],
          },
          '& span': {
            color: 'title',
            fontSize: [4, 5],
            fontWeight: 'body',
          }
        }}>
          <Styled.h2>Presenta este documento en tu tienda OXXO mas cercana</Styled.h2>
          <div>
            <label>Referencia: </label>
            <span>{data.oxxo.number}</span>
          </div>
          <div>
            <label>Valido hasta: </label>
            <span>{data.oxxo.expires_after}</span>
          </div>
          <div>
            <label>Precio: </label>
            <span>MX{price}</span>
          </div>
          <div>
            <span>{data.oxxo.number}</span>
          </div>
        </section>
        <section sx={{
          width: ['100%', 700],
          '& li': {
            color: 'title',
            fontSize: [3, 4],
          }
        }}>
          <Styled.h3>Instrucciones de pago en OXXO</Styled.h3>
          <ol>
            <li>Entregue la factura al cajero para que escanee el código de barras.</li>
            <li>Proporcione el pago en efectivo al cajero.</li>
            <li>Una vez completado el pago, guarde el recibo de su pago para sus registros.</li>
            <li>Para cualquier duda o aclaración, contacte al proveedor de los bienes o servicio.</li>
          </ol>
        </section>
      </div>
    </Layout>
  );
}

export default Success;
