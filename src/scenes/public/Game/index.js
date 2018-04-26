import React from 'react';

import { Grid } from '../../../components';

const Game = ({
  currentPlayer, currentTurn, gameData, gameOver, updateList, resetList,
}) => (
  <Grid
    currentPlayer={currentPlayer}
    currentTurn={currentTurn}
    gameData={gameData}
    gameOver={gameOver}
    updateList={updateList}
    resetList={resetList}
  />
);

Game.defaultProps = {
  ...Grid.defaultProps,
};

Game.propTypes = {
  ...Grid.propTypes,
};

export default Game;
