export const theme = {
  space: [0, 4, 8, 16, 32, 64],
  fonts: {
    body: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
  },
  fontSizes: [14, 16, 18, 20, 22, 24, 36, 48, 64],
  lineHeights: {
    body: 1.45,
    heading: 1.1,
  },
  colors: {
    gray: ['#F5F6F8', '#818A94', '#333', '#111'],
    background: '#fff',
    primary: '#3525E6',
  },
  sizes: {
    default: '100%',
    max: '100%',
    circle: 40,
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    Layout: {
      color: 'white',
      fontFamily: 'body',
      fontSize: 1,
      lineHeight: 'body',
    },
    Header: {
      backgroundColor: 'primary',
      color: 'background',
      fontWeight: 'bold',
      padding: 3,
      width: 'default',
      a: {
        color: 'inherit',
      },
    },
    Main: {
      width: 'default',
      padding: 0,
      margin: 0,
    },
    Container: {
      padding: 0,
      margin: 0,
    },
    h1: {
      color: 'primary',
      fontSize: 8,
      fontWeight: 'bold',
      lineHeight: 'heading',
      margin: '1rem 0 0',
    },
    h2: {
      color: 'primary',
      fontSize: 7,
      fontWeight: 'bold',
      lineHeight: 'heading',
      margin: '1rem 0 0',
    },
    ul: {
      borderTop: '1px solid',
      borderColor: 'gray.0',
      listStyle: 'none',
      padding: 0,
    },
    li: {
      borderBottom: '1px solid',
      borderColor: 'gray.1',
      padding: 2,
      '&:focus-within,&:hover': {
        backgroundColor: 'gray.0',
      },
    },
  },
};

export default theme;
