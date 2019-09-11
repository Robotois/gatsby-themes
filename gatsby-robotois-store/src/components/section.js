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
    backgroundColor: 'white',
  },
  gray: {
    backgroundColor: 'gray.0',
  },
  primary: {
    backgroundColor: 'primary',
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
