/** @jsx jsx */
import { useStaticQuery, graphql } from 'gatsby';
import { jsx, Flex, Styled } from 'theme-ui';
import Checkout from './checkout';
import Slide from './slide';
import Section from './section';

function showReleaseDate(date) {
  return new Date(date) > new Date();
}

function Product({ name, releaseDate, description, videoId, components, sku }) {
  const data = useStaticQuery(graphql`
    query {
      stripeSku(id: { eq: "sku_FZoNf75AsXfXtd" }) {
        id
        price
      }
    }
  `);
  const price = (data.stripeSku.price / 100).toLocaleString('es-MX', {
    style: 'currency',
    currency: 'MXN',
  });

  return (
    <Flex
      sx={{
        flexDirection: 'column',
      }}
    >
      <div
        sx={{
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
              bg: 'rgba(255,255,255,0)',
            }}
          >
            <div
              sx={{
                bg: 'rgba(255,255,255,.8)',
                padding: 48,
                borderRadius: 8,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
              }}
            >
              <Styled.h1 sx={{ margin: 3, color: '#3227b6', fontSize: 11 }}>{name}</Styled.h1>
              <Checkout type="primary" sku={sku} />
            </div>
          </div>
        </div>
      </div>
      <Styled.h2 sx={{ margin: 4, textAlign: 'center' }}>Descripción</Styled.h2>
      {components && components.map((component, idx) => {
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
        <div
          css={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          {showReleaseDate(releaseDate) ? (
            <h1 sx={{ textAlign: 'center', color: 'white' }}>
              Disponible para envio el{' '}
              {new Date(releaseDate).toLocaleDateString('es-MX', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </h1>
          ) : null}
          <h2 sx={{ textAlign: 'center', color: 'white', fontSize: 5 }}>
            MX{price}
          </h2>
          <Checkout type="light" sku={sku} />
        </div>
      </Section>
    </Flex>
  );
}

export default Product;
