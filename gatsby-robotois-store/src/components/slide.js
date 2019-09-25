/** @jsx jsx */
import { jsx } from 'theme-ui';
// eslint-disable-next-line
import React from 'react';
import Section from './section';
import { Styled } from 'theme-ui';
import ProductImage from './product-image';

const sharedStyles = {
  flex: 1,
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const mobile = {
  '@media (max-width: 800px)': {
    fontSize: 8,
    padding: 3,
    borderRight: 'none',
  },
};

function TextComponent({ name, description = 'Some description' }) {
  return (
    <div
      sx={{
        width: ['90%', 300, 400],
      }}
    >
      <Styled.h3>{name}</Styled.h3>
      <Styled.p>{description}</Styled.p>
    </div>
  );
}

function Slide(props) {
  const { invert, name, description, image, ...rest } = props;
  return (
    <Section
      {...rest}
      css={{
        '@media (max-width: 800px)': {
          flexDirection: invert ? 'column-reverse' : 'column',
        },
      }}
    >
      <div
        sx={{
          borderRight: '4px solid #3525E6',
          ...sharedStyles,
          ...mobile,
        }}
      >
        {invert ? (
          <TextComponent name={name} description={description} />
        ) : (
            <ProductImage image={image} />
          )}
      </div>
      <div
        sx={{
          ...sharedStyles,
          ...mobile,
        }}
      >
        {invert ? (
          <ProductImage image={image} />
        ) : (
            <TextComponent name={name} description={description} />
          )}
      </div>
      <div
        sx={{
          width: 'circle',
          height: 'circle',
          backgroundColor: 'primary',
          borderRadius: '50%',
          position: 'relative',
          top: 0,
          right: '50%',
          '@media (max-width: 800px)': {
            display: 'none',
          },
        }}
      />
    </Section>
  );
}

export default Slide;
