import React from 'react';

import { Grid } from '../../../components';

const Game = ({ currentPlayer, gameData, gameOver }) => (
  <Grid currentPlayer={currentPlayer} gameData={gameData} gameOver={gameOver} />
);

Game.defaultProps = {
  ...Grid.defaultProps,
};

Game.propTypes = {
  ...Grid.propTypes,
};

export default Game;
