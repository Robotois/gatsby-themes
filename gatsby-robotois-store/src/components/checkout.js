/** @jsx jsx */
import { jsx } from 'theme-ui';
// eslint-disable-next-line
import React, { useState } from 'react';
import Modal from './checkout-modal'

const styles = {
  width: 200,
  height: 52,
  borderRadius: 30,
  fontSize: 3,
  fontWeight: 400,
  letterSpacing: 0,
  lineHeight: 1,
  cursor: 'pointer',
  border: 'none',
};


export default function Checkout({ type, sku }) {
  const [showModal, toggleModal] = useState(false);

  return (
    <>
      <button
        sx={{
          ...styles,
          bg: type === 'primary' ? '#3227b6' : 'white',
          color: type === 'primary' ? 'text' : '#3227b6',
          fontFamily: 'system-ui, sans-serif',
          fontSize: 6,
        }}
        onClick={() => toggleModal(true)}
      >
        Comprar
      </button>
      {showModal ? <Modal open={showModal} onClose={() => toggleModal(false)} sku={sku} /> : null}
    </>
  );
}