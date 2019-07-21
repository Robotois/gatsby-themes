/** @jsx jsx */
import { jsx } from 'theme-ui';
import Section from './section';

const sharedStyles = {
  flex: 1,
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

function TextComponent({ title, description }) {
  return (
    <>
      <h3>{title}</h3>
      <p>{description}</p>
    </>
  );
}

function Slide(props) {
  const { invert, title, description, image } = props;

  return (
    <Section {...rest}>
      <div
        sx={{
          borderRight: '4px solid #3525E6',
          ...sharedStyles,
        }}
      >
        one
      </div>
      <div
        sx={{
          ...sharedStyles,
        }}
      >
        two
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
        }}
      />
    </Section>
  );
}

export default Slide;
