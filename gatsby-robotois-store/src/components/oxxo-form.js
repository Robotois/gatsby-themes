/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
// eslint-disable-next-line
import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import ProductImage from './product-image';

const fieldset = {
  flexDirection: 'column',
  border: 'background',
  '& label': {
    width: '100%',
    display: 'flex',
    color: 'label',
    fontFamily: 'system-ui, sans-serif',
    py: 2,
    alignItems: 'center',
    '& span': {
      flex: 1,
      display: 'flex',
      justifyContent: 'flex-end',
      px: 3
    },
    '& input': {
      flex: 3,
      border: 'none',
      height: 8,
      px: 2
    }
  }
};

function onChangeInput(e, oldState, updateState) {
  const { target } = e;
  const name = target.name;
  const value = target.value;

  updateState({
    ...oldState,
    [name]: value,
  })
}

const initialState = {
  address: "",
  city: "",
  email: "",
  name: "",
  state: "",
  suburb: "",
  zip: "",
};

export default function OxxoForm({ createOxxoSource }) {
  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const data = useStaticQuery(graphql`
  query {
    stripeSku(id: { eq: "sku_FZoNf75AsXfXtd" }) {
      id
      price
      product {
        name
      }
    }
  }
`);
  const productData = data.stripeSku;
  const price = (productData.price / 100).toLocaleString('es-MX', {
    style: 'currency',
    currency: 'MXN',
  });
  return (
    <div sx={{
      display: 'flex',
      flexDirection: ['column', 'row'],
      width: ['100%', '100vh'],
    }}>
      <section sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        mt: [14, 0],
      }}>
        <Styled.p sx={{ marginBottom: 0 }}>{productData.product.name}</Styled.p>
        <Styled.h1 sx={{ color: 'title', marginBottom: 10 }}>MX{price}</Styled.h1>
        <ProductImage image={"complete.png"} />
      </section>
      <section sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        paddingTop: [10, 0]
      }}>
        <Styled.h2>Pago en OXXO</Styled.h2>
        <section>
          <Styled.h4>Información de pago y envío</Styled.h4>
          <fieldset sx={{ ...fieldset }}>
            <label>
              <span>Nombre</span>
              <input name="name" placeholder="Armando González" required value={formData['name']} onChange={(e) => onChangeInput(e, formData, setFormData)} />
            </label>
            <label>
              <span>Email</span>
              <input name="email" type="email" placeholder="armando@example.com" required value={formData['email']} onChange={(e) => onChangeInput(e, formData, setFormData)} />
            </label>
            <label>
              <span>Dirección</span>
              <input name="address" placeholder="Avenida siempre viva 888" value={formData['address']} onChange={(e) => onChangeInput(e, formData, setFormData)} />
            </label>
            <label>
              <span>Colonia</span>
              <input name="suburb" placeholder="Mi colonia" value={formData['suburb']} onChange={(e) => onChangeInput(e, formData, setFormData)} />
            </label>
            <label>
              <span>Ciudad</span>
              <input name="city" placeholder="Springfield" value={formData['city']} onChange={(e) => onChangeInput(e, formData, setFormData)} />
            </label>
            <label>
              <span>Estado</span>
              <input name="state" placeholder="Ciudad de México" value={formData['state']} onChange={(e) => onChangeInput(e, formData, setFormData)} />
            </label>
            <label>
              <span>Código postal</span>
              <input name="zip" placeholder="13200" value={formData['zip']} onChange={(e) => onChangeInput(e, formData, setFormData)} />
            </label>
          </fieldset>
          <Styled.h4>* Solo envios dentro de México.</Styled.h4>
          <div sx={{ pb: 8, display: 'flex', justifyContent: 'flex-end' }}>
            <button
              sx={{
                height: 60,
                fontFamily: 'system-ui, sans-serif',
                fontSize: 6,
                color: 'white',
                bg: '#3227b6',
                borderRadius: 4,
                cursor: 'pointer',
                width: ['100%', '100%'],
              }}
              onClick={event => {
                setLoading(true);
                event.preventDefault();
                createOxxoSource(formData);
              }}
              disabled={loading}
            >
              {loading ? 'Procesando ...' : 'Generar orden de pago'}
            </button>
          </div>
        </section>
      </section>
    </div >
  )
}