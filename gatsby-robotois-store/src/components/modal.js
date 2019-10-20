/** @jsx jsx */
import { jsx } from 'theme-ui';
// eslint-disable-next-line
import React from 'react';

export default function Modal({ open, onClose, children }) {
  if (!open) {
    return null;
  }
  return (
    <div sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'fixed',
      zIndex: 1,
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      overflow: 'auto',
      backgroundColor: 'background',
    }}
    >
      <div
        role="button"
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          fontSize: 9,
          cursor: 'pointer'
        }}
        onClick={onClose}
      >&times;</div>
      {children}
    </div>
  );
}
