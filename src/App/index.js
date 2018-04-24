import React, { Component } from 'react';

import View from './view';

const CURRENT_PLAYER = 'currentPlayer';
const GAME_DATA = 'gameData';
const GAME_OVER = 'gameOver';

let currentPlayerSrc = localStorage.getItem(CURRENT_PLAYER);
if (!currentPlayerSrc) {
  currentPlayerSrc = 1;
  localStorage.setItem(CURRENT_PLAYER, currentPlayerSrc);
}

let gameDataSrc = localStorage.getItem(GAME_DATA);
// console.log('1', gameData);
if (!gameDataSrc) {
  localStorage.setItem(GAME_DATA, JSON.stringify([]));
}

const gameOverSrc = localStorage.getItem(GAME_OVER);
if (!gameOverSrc) {
  localStorage.setItem(GAME_OVER, false);
}

class App extends Component {
  state = {
    currentPlayer: !!currentPlayerSrc && JSON.parse(currentPlayerSrc),
    gameData: !!gameDataSrc && JSON.parse(gameDataSrc),
    gameOver: !!gameOverSrc && JSON.parse(gameOverSrc),
    allChecked: false,
  };

  componentDidMount() {
    if (!gameDataSrc) {
      this.resetList();
    }
  }

  resetList = () => {
    gameDataSrc = [];
    for (let i = 0; i < 9; i += 1) {
      const dataObj = {
        row: i,
        player: 0,
      };
      gameDataSrc.push(dataObj);
    }
    this.setState({
      gameData: gameDataSrc,
    });

    localStorage.setItem(GAME_DATA, JSON.stringify(gameDataSrc));
  };

  checkArray = (array, player) => false;

  check3in1 = (data, player, row) => {
    // const arrayAllChecked = data.filter(v => v.player !== 0);
    const areAllChecked = false;
    const arrayAllChecked = data.filter(v => v.player !== 0);
    console.log('arrayAllChecked', data);

    const array = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [3, 5, 7],
    ];
    // Posibles combinaciones
    /* array.push([0, 1, 2]);
    array.push([3, 4, 5]);
    array.push([6, 7, 8]);
    array.push([0, 3, 6]);
    array.push([1, 4, 7]);
    array.push([2, 5, 8]);
    array.push([0, 4, 8]);
    array.push([3, 5, 7]); */

    const filteredArray = array.filter((v) => {
      const exists = v.filter(p => p === row);
      const element = exists === true ? v : [];
      return element;
    });
    console.log('filteredArray', filteredArray);

    const isGameOver = this.checkArray(filteredArray, player);
    console.log('isGameOver', isGameOver);

    /* gameOver: isGameOver,
      allChecked: areAllChecked, */
  };

  updateList = (row) => {
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
      const newGameOver = this.check3in1(newGameData, prevState.currentPlayer, row);
      console.log('newGameOver', newGameOver);

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
        updateList={this.updateList}
        resetList={this.resetList}
      />
    );
  }
}

export default App;
