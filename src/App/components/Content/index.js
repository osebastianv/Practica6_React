import React from 'react';
// import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import { Game, Ranking } from '../../../scenes';

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
  historicalCounter,
  historicalData,
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
    <Route
      exact
      path="/ranking"
      component={() => (
        <Ranking historicalCounter={historicalCounter} historicalData={historicalData} />
      )}
    />
  </StyledWrapper>
);

Content.defaultProps = {
  ...Game.defaultProps,
};

Content.propTypes = {
  ...Game.propTypes,
};

export default Content;
