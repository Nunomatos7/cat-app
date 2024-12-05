import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    line-height: 1.6;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  img {
    max-width: 100%;
    display: block;
    border-radius: 10px;
  }
`;

export default GlobalStyles;
