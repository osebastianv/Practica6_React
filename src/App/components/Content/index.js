import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import { Game, History } from '../../../scenes';

const StyledWrapper = styled.div`
  padding: ${props => props.theme.space.md};
`;

const Content = ({
  currentPlayer,
  currentTurn,
  gameData,
  gameOver,
  updateList,
  resetList,
  historyData,
}) => (
  <StyledWrapper>
    <Route
      exact
      path="/"
      component={() => (
        <Game
          currentPlayer={currentPlayer}
          currentTurn={currentTurn}
          gameData={gameData}
          gameOver={gameOver}
          updateList={updateList}
          resetList={resetList}
        />
      )}
    />
    <Route exact path="/history" component={() => <History historyData={historyData} />} />
  </StyledWrapper>
);

Content.defaultProps = {
  ...Game.defaultProps,
};

Content.propTypes = {
  ...Game.propTypes,
};

export default Content;
