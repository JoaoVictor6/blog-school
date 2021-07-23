import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    max-width: 100%;
  }
  body, *{
    scroll-behavior: smooth;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #263238;
    font-family: "Roboto", sans-serif;
  }

`;

export default GlobalStyle;
