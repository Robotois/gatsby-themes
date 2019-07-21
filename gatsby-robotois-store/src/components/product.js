/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Styled } from 'theme-ui';
import Button from './button';
import Slide from './slide';

function Product({ name, releaseDate, description, videoId }) {
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
          frameborder="0"
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
            background: 'rgba(255,255,255,.6)',
          }}
        >
          <div
            sx={{
              background: 'rgba(255,255,255,.90)',
              padding: 48,
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <Styled.h1 sx={{ margin: 3 }}>{name}</Styled.h1>
            <Button type="purple" onClick={() => alert(1232)} />
          </div>
        </div>
      </div>
      <Styled.h2 sx={{ margin: 4, textAlign: 'center' }}>Descripción</Styled.h2>
      <Slide />
      <Slide type="gray" invert />
    </div>
  );
}

export default Product;
