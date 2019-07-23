/** @jsx jsx */
import { jsx } from 'theme-ui';
const styles = {
  width: 200,
  height: 52,
  borderRadius: 30,
  // fontFamily: "Montserrat-Regular, 'Montserrat, serif",
  fontSize: 3,
  fontWeight: 400,
  letterSpacing: 0,
  lineHeight: 1,
  cursor: 'pointer',
  border: 'none',
};

const types = {
  primary: {
    backgroundColor: 'primary',
    color: 'white',
  },
  light: {
    backgroundColor: 'white',
    color: 'primary',
  },
};

function Button(props) {
  const { type } = props;
  return (
    <button
      sx={{
        ...styles,
        variant: `buttons.${type}` || 'primary',
      }}
      {...props}
    >
      {props.children}
    </button>
  );
}

Button.defaultProps = {
  children: 'Comprar kit',
};

export default Button;