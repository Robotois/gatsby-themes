/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Styled } from 'theme-ui';
import Checkout from './checkout';
import Slide from './slide';
import Section from './section';

function Product({
  name,
  releaseDate,
  description,
  videoId,
  components,
  sku,
  price,
}) {
  return (
    <div
      sx={{
        width: '98vw',
        height: 640,
      }}
    >
      <div
        sx={{
          width: '100%',
          height: '100%',
          position: 'relative',
        }}
      >
        <iframe
          frameBorder="0"
          height="100%"
          width="100%"
          title="Video"
          src={`https://youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&showinfo=0&autohide=0&loop=1&playlist=${videoId}`}
        />
        <div
          sx={{
            width: '100%',
            height: 640,
            position: 'absolute',
            top: 0,
            left: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bg: 'rgba(255,255,255,.6)',
          }}
        >
          <div
            sx={{
              bg: 'rgba(255,255,255,.90)',
              padding: 48,
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <Styled.h1 sx={{ margin: 3 }}>{name}</Styled.h1>
            <Checkout type="primary" sku={sku} />
          </div>
        </div>
      </div>
      <Styled.h2 sx={{ margin: 4, textAlign: 'center' }}>Descripción</Styled.h2>
      {components.map((component, idx) => {
        const invert = !!(idx % 2);
        return (
          <Slide
            invert={invert}
            type={invert ? 'gray' : 'light'}
            {...component}
            key={component.name}
          />
        );
      })}
      <Section type="primary">
        <div>
          <h2 sx={{ textAlign: 'center', color: 'white', fontSize: 5 }}>
            {price}
          </h2>
          <Checkout type="light" sku={sku} />
        </div>
      </Section>
    </div>
  );
}

export default Product;
