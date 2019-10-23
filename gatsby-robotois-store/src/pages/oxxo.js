/** @jsx jsx */
import { jsx } from 'theme-ui';
// eslint-disable-next-line
import React from 'react';
import { Styled } from 'theme-ui';
import Layout from '../components/layout';
// import { Redirect } from "@reach/router"
import Barcode from 'react-barcode';


const OxxoPage = (props) => {
  const data = props.location
    && props.location.state
    && props.location.state.data
    && props.location.state.data.source;

  console.log(props);


  if (!data) {
    return window && window.history.back();
  }

  const price = (data.amount / 100).toLocaleString('es-MX', {
    style: 'currency',
    currency: 'MXN',
  });

  return (
    <Layout>
      <div sx={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection: 'column',
        fontFamily: 'system-ui, sans-serif',
        px: [8, 14],
        '& section': {
          py: [8, 4]
        }
      }}>
        <div >
          <Styled.h1>Pago en efectivo</Styled.h1>
          <img
            sx={{
              width: [400, 400, 400],
            }}
            src={require(`../images/oxxo.png`)}
            alt="oxxo"
          />
        </div>
        <div sx={{
          lineHeight: 'body',
          '& label': {
            color: 'title',
            mr: 3,
            fontSize: [5, 6],
          },
          '& span': {
            color: 'title',
            fontSize: [5, 6],
            fontWeight: 'bold',
          }
        }}>
          <div sx={{
            mb: 8,
          }}>
            <Barcode value={data.oxxo.number} width={2} height={160} />
          </div>
          <div>
            <label>Valido hasta: </label>
            <span>{new Date(data.oxxo.expires_after).toLocaleDateString('es-MX', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}</span>
          </div>
          <div>
            <label>Precio: </label>
            <span>MX{price}</span>
          </div>
        </div>
        <div sx={{
          mt: 10,
          pb: 9,
          '& li': {
            color: 'title',
            fontSize: [3, 3],
          }
        }}>
          <Styled.h4>Instrucciones de pago en OXXO</Styled.h4>
          <ol>
            <li>Entregue la factura al cajero para que escanee el código de barras.</li>
            <li>Proporcione el pago en efectivo al cajero.</li>
            <li>Una vez completado el pago, guarde el recibo de su pago para sus registros.</li>
            <li>Para cualquier duda o aclaración, contacte al proveedor de los bienes o servicio.</li>
          </ol>
        </div>
      </div>
    </Layout>
  );
}

export default OxxoPage;
