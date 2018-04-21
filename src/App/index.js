import React, { Component } from 'react';

import View from './view';

const CURRENT_PLAYER = 'currentPlayer';
const GAME_DATA = 'gamedata';
const GAME_OVER = 'gameOver';

let currentPlayer = localStorage.getItem(CURRENT_PLAYER);
if (!currentPlayer) {
  currentPlayer = 1;
  localStorage.setItem(CURRENT_PLAYER, currentPlayer);
}

let gamedata = localStorage.getItem(GAME_DATA);
console.log('gamedata', gamedata);
if (!gamedata) {
  gamedata = [];
  for (let i = 0; i < 9; i += 1) {
    const dataObj = {
      row: i,
      player: 0,
    };
    gamedata.push(dataObj);
  }
  console.log(gamedata);
  localStorage.setItem(GAME_DATA, JSON.stringify(gamedata));
}

const gameOver = localStorage.getItem(GAME_OVER);
if (!gameOver) {
  localStorage.setItem(GAME_OVER, false);
}

class App extends Component {
  state = {
    currentPlayer: currentPlayer && JSON.parse(currentPlayer),
    gamedata: !!gamedata && JSON.parse(gamedata),
    gameOver: !!gameOver && JSON.parse(gameOver),
  };
  render() {
    return (
      <View
        currentPlayer={this.state.currentPlayer}
        gamedata={this.state.gamedata}
        gameOver={this.state.gameOver}
      />
    );
  }
}

export default App;
