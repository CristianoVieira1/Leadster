export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  border: {
    radius: '1.8rem'
  },
  font: {
    family: 'PlusJakartaSans, sans-serif',
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xxsmall: '0.8rem',
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '4.8rem',
      huge: '8.2rem'
    }
  },
  colors: {
    primary: '#007cf8',
    secondary: '#F0F8FF',
    green: '#1FCBAE',
    yellow: '#BCA53C',
    mainBg: '#06092B',
    lightBg: '#F2F2F2',
    white: '#ffffff',
    black: '#030517',
    lightGray: '#EAEAEA',
    gray: '#8F8F8F',
    darkGray: '#2E2F42',
    red: '#FF6347',
    textGray: '#1C3C50'
  },
  spacings: {
    xxsmall: '0.6rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const
