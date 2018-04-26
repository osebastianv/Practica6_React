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

const App = ({
  currentPlayer, currentTurn, gameData, gameOver, updateList, resetList,
}) => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <div>
        <Header>
          <Menu />
        </Header>
        <Content
          currentPlayer={currentPlayer}
          currentTurn={currentTurn}
          gameData={gameData}
          gameOver={gameOver}
          updateList={updateList}
          resetList={resetList}
        />
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
