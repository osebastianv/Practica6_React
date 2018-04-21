import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, injectGlobal } from 'styled-components';
import { normalize } from 'polished';

import { Header, Content, Menu } from './components';
import theme from '../theme';

injectGlobal`
  ${normalize()}
`;

injectGlobal`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
`;

const App = ({ currentPlayer, gameData, gameOver }) => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <div>
        <Header>
          <Menu />
        </Header>
        <Content currentPlayer={currentPlayer} gameData={gameData} gameOver={gameOver} />
      </div>
    </ThemeProvider>
  </BrowserRouter>
);

App.defaultProps = {
  ...Content.defaultProps,
};

App.propTypes = {
  ...Content.propTypes,
};

export default App;
