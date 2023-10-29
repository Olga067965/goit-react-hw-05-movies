import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    width: 100vw;
    overflow-x: hidden;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    font-family: 'Roboto', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #0077b6;
    background-color: #EBF5FB;
    letter-spacing: 0.03em;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.6;
    transition: background-color 0.3s, color 0.3s;
  }

  a {
    text-decoration: none;
    color: #0077b6;
    transition: color 0.3s;
  }

  a:hover {
    color: #005b8f;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  button {
    font-family: 'Roboto', 'Helvetica Neue', sans-serif;
    padding: 10px 20px;
    margin: 0;
    background-color: #0077b6;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }

  button:hover {
    background-color: #005b8f;
    color: #fffff;
  }
`;
