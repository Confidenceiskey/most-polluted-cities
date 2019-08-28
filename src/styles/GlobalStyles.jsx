import React from 'react';
import { createGlobalStyle } from 'styled-components';

const MainStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: calc(100vh - 90px);
    background: linear-gradient(to bottom, #454545 0vh, 
                #696969 30vh, #2F80ED 60vh, #56CCF2 100vh);
  }
`;

const GlobalStyle = () => {
  return (
    <MainStyle />
  );
}

export default GlobalStyle;
