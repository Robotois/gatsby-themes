/** @jsx jsx */
import { jsx } from 'theme-ui';
const styles = {
  width: '100%',
  height: 640,
  color: 'gray.1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const types = {
  light: {
    bg: 'background',
  },
  gray: {
    bg: 'backgroundLighten20',
  },
  primary: {
    bg: 'primary',
  },
};

function Section({ children, type, centerContent, ...rest }) {
  return (
    <div
      sx={{
        ...styles,
        ...types[type || 'light'],
      }}
      {...rest}
    >
      {children}
    </div>
  );
}

export default Section;
