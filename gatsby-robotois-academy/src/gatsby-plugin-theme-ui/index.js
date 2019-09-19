const heading = {
  fontFamily: 'system-ui, sans-serif',
  lineHeight: 'heading',
  fontWeight: 'heading',
  color: 'title',
};
// eslint-disable-next-line 
const border = '1px solid red';
const dark = '#1A2232';

export default {
  // useCustomProperties: true,
  // initialColorMode: "dark",
  breakpoints: ["992px", "1200px", "1920px"],
  space: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 72, 80, 128, 256, 512],
  sizes: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 72, 80, 128, 256, 512],
  fontSizes: [10, 12, 14, 16, 18, 20, 22, 24, 32, 40, 48, 64],
  fontWeights: {
    body: 300,
    heading: 500,
  },
  lineHeights: {
    body: 1.675,
    heading: 1.125,
  },
  letterSpacings: {
    heading: "1.5",
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "inherit",
  },
  colors: {
    grayText: '#e6e6e6',
    background: dark,
    backgroundLighten10: '#232B3B',
    backgroundLighten20: '#2C3648',
    primary: '#A085FF',
    secondary: '#85FFD0',
    error: 'salmon',
    purpleText: '#a085ff',
    purpleRobotois: '#3227b6',
    text: 'white',
    primaryLighten10: "#9D82FF",
    primaryLighten50: "#B298FF",
    primaryLighten70: "#D2C8FF",
    title: 'rgba(255, 255, 255, 0.9);',
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      fontSize: [3, 4],
      color: "text",
    },
    Header: {
      ...heading,
      color: 'text',
      bg: 'brackground',
      height: 60,
      px: 3,
      flexDirection: 'row',
      display: 'flex',
      alignItems: 'center',
      '& a:first-of-type': {
        width: 400
      },
      '& a': {
        textDecoration: 'none',
        color: 'primary',
        mx: 10
      },
      '& div': {
        width: [0, '100%'],
      }
    },
    Layout: {
      bg: 'background',
      color: 'primary',
    },
    Container: {
      maxWidth: 1200,
    },
    h1: {
      ...heading,
      fontSize: 8,
    },
    h2: {
      ...heading,
      fontSize: 6,
    },
    h3: {
      ...heading,
      fontSize: 5,
    },
    h4: {
      ...heading,
      fontSize: 3,
    },
    h5: {
      ...heading,
      fontSize: 2,
    },
    h6: {
      ...heading,
      fontSize: 1,
    },
    li: {
      // py: 0,
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      flexDirection: 'column',
      ".summary": {
        fontSize: 4,
        lineHeight: 1.6,
        fontWeight: 300,
        opacity: 0.7,
        // mb: 3,
        fontFamily: 'system-ui, sans-serif',
      },
      ".active": {
        borderLeft: "3px solid",
        borderColor: "primary",
        backgroundColor: "backgroundLighten10",
      },
      a: {
        px: 5,
        py: 4,
        borderLeft: "3px solid",
        borderColor: "background",
        fontSize: 5,
        width: "100%",
        textDecoration: "none",
      },
      p: {
        color: 'title'
      },
      span: {
        color: 'secondary',
        fontSize: 0,
      },
      ":hover": {
        a: { borderColor: "backgroundLighten10" },
        ".active": {
          borderColor: "primary",
        },
      },
    },
    p: {
      color: 'title',
      lineHeight: 1.675,
      fontFamily: 'system-ui, sans-serif',
      fontSize: 4,
    },
    nav: {
      bg: 'background',
    },
    a: {
      color: "primary",
      textDecoration: "none",
      ":hover": {
        color: "secondary",
        textDecoration: "underline",
      },
    },
  },
};