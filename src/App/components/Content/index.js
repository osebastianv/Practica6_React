import React from 'react';
// import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import { Game, Ranking } from '../../../scenes';

const StyledWrapper = styled.div`
  padding: ${props => props.theme.space.md};
`;

const Content = ({
  currentPlayer, gameData, gameOver, addToList,
}) => (
  <StyledWrapper>
    <Route
      exact
      path="/"
      component={() => (
        <Game
          currentPlayer={currentPlayer}
          gameData={gameData}
          gameOver={gameOver}
          addToList={addToList}
        />
      )}
    />
    <Route exact path="/ranking" component={Ranking} />
  </StyledWrapper>
);

Content.defaultProps = {
  ...Game.defaultProps,
};

Content.propTypes = {
  ...Game.propTypes,
};

export default Content;
