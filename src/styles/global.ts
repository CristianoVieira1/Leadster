import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'PlusJakartaSans';
    font-style: normal;
    font-weight: 100;
    font-display: swap;
    src: local('PlusJakartaSans Light'), local('PlusJakartaSans-Light'),
        url('/fonts/PlusJakartaSans-Light.ttf') format('ttf');
  }

@font-face {
    font-family: 'PlusJakartaSans';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local('PlusJakartaSans Medium'), local('PlusJakartaSans-Medium'),
        url('/fonts/PlusJakartaSans-Medium.ttf') format('ttf');
  }

  @font-face {
    font-family: 'PlusJakartaSans';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local('PlusJakartaSans Bold'), local('PlusJakartaSans-Bold'),
        url('/fonts/PlusJakartaSans-Bold.ttf') format('ttf');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
    }
  `}

`

export default GlobalStyles
