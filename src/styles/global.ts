import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  a {
    text-decoration: none;
  }

  body, button, input, textarea {
    font: 600 16px 'Nunito', sans-serif;
  }

  body, html, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  button::-moz-focus-inner {
    border: 0;
  }

  ul {
    list-style: none;
  }

`;
