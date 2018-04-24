import React, { Component } from 'react';

import View from './view';

const CURRENT_PLAYER = 'currentPlayer';
const GAME_DATA = 'gameData';
const GAME_OVER = 'gameOver';

let currentPlayer = localStorage.getItem(CURRENT_PLAYER);
if (!currentPlayer) {
  currentPlayer = 1;
  localStorage.setItem(CURRENT_PLAYER, currentPlayer);
}

let gameData = localStorage.getItem(GAME_DATA);
// console.log('1', gameData);
if (!gameData) {
  gameData = [];
  for (let i = 0; i < 9; i += 1) {
    const dataObj = {
      row: i,
      player: 0,
    };
    gameData.push(dataObj);
  }
  // console.log('2', gameData);
  localStorage.setItem(GAME_DATA, JSON.stringify(gameData));
}

const gameOver = localStorage.getItem(GAME_OVER);
if (!gameOver) {
  localStorage.setItem(GAME_OVER, false);
}

class App extends Component {
  state = {
    currentPlayer: currentPlayer && JSON.parse(currentPlayer),
    gameData: !!gameData && JSON.parse(gameData),
    gameOver: !!gameOver && JSON.parse(gameOver),
  };

  checkArray = (array, player) => false;

  check3in1 = (data, player, row) => {
    const array = [];
    // Posibles combinaciones
    array.push([0, 1, 2]);
    array.push([3, 4, 5]);
    array.push([6, 7, 8]);
    array.push([0, 3, 6]);
    array.push([1, 4, 7]);
    array.push([2, 5, 8]);
    array.push([0, 4, 8]);
    array.push([3, 5, 7]);

    const filteredArray = array.filter((v) => {
      const exists = v.filter(p => p === row);
      const element = exists === true ? v : [];
      return element;
    });
    console.log('filteredArray', filteredArray);

    const isGameOver = this.checkArray(filteredArray, player);
    console.log('isGameOver', isGameOver);

    return isGameOver;
  };

  addToList = (row) => {
    // const valor = e.target.class;
    // console.log('e', e);
    // console.log('e.target', e.target);
    console.log('row', row);

    this.setState((prevState) => {
      const newGameData = prevState.gameData;

      if (newGameData[row].player !== 0) {
        return {};
      }

      newGameData[row].player = prevState.currentPlayer;
      localStorage.setItem(GAME_DATA, JSON.stringify(newGameData));

      // Comprobamos si hay 3 en raya
      const newGameOver = this.check3in1(row, prevState.currentPlayer);

      let newPlayer = prevState.currentPlayer;
      if (!newGameOver) {
        newPlayer = newPlayer === 1 ? 2 : 1;
      }

      // const newData = prevState.dataList.concat(breedObj);
      // localStorage.setItem(GAME_DATA, JSON.stringify(newData));
      return {
        currentPlayer: newPlayer,
        gameData: newGameData,
        gameOver: newGameOver,
      };
    });
  };

  render() {
    return (
      <View
        currentPlayer={this.state.currentPlayer}
        gameData={this.state.gameData}
        gameOver={this.state.gameOver}
        addToList={this.addToList}
      />
    );
  }
}

export default App;
