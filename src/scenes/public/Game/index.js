import React from 'react';

import { Grid } from '../../../components';

const Game = ({
  currentPlayer, gameData, gameOver, addToList,
}) => (
  <Grid
    currentPlayer={currentPlayer}
    gameData={gameData}
    gameOver={gameOver}
    addToList={addToList}
  />
);

Game.defaultProps = {
  ...Grid.defaultProps,
};

Game.propTypes = {
  ...Grid.propTypes,
};

export default Game;
