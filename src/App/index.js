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

let gameOverSrc = localStorage.getItem(GAME_OVER);
if (!gameOverSrc) {
  gameOverSrc = false;
  localStorage.setItem(GAME_OVER, gameOverSrc);
}

class App extends Component {
  state = {
    currentPlayer: !!currentPlayerSrc && JSON.parse(currentPlayerSrc),
    gameData: !!gameDataSrc && JSON.parse(gameDataSrc),
    gameOver: !!gameOverSrc && JSON.parse(gameOverSrc),
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
    localStorage.setItem(GAME_DATA, JSON.stringify(gameDataSrc));

    currentPlayerSrc = 1;
    localStorage.setItem(CURRENT_PLAYER, currentPlayerSrc);

    gameOverSrc = false;
    localStorage.setItem(GAME_OVER, gameOverSrc);

    this.setState({
      currentPlayer: currentPlayerSrc,
      gameData: gameDataSrc,
      gameOver: gameOverSrc,
    });
  };

  checkGameOver = (data, player) => {
    // Combinaciones de victoria
    const arrayWin = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    let isGameOver = false;
    for (let i = 0; i < arrayWin.length; i += 1) {
      const [a, b, c] = arrayWin[i];
      console.log(
        '[',
        a,
        ', ',
        b,
        ', ',
        c,
        ']',
        ' -> [',
        data[a].player,
        ', ',
        data[b].player,
        ', ',
        data[c].player,
        ']',
        '-Player-',
        player,
      );
      // if (((data[a].player === data[b].player) === data[c].player) === player) {
      if (
        data[a].player === data[b].player &&
        data[b].player === data[c].player &&
        data[c].player === player
      ) {
        // console.log('Ganador');
        isGameOver = true;
        break;
      }
    }

    return isGameOver;
  };

  checkEndOfGame = (data) => {
    // Combinaciones de victoria
    let isEndOfGame = true;

    for (let i = 0; i < data.length; i += 1) {
      if (data[i].player === 0) {
        isEndOfGame = false;
        break;
      }
    }

    return isEndOfGame;
  };

  updateList = (row) => {
    // console.log('row', row);

    this.setState((prevState) => {
      const newGameData = prevState.gameData;

      if (newGameData[row].player !== 0) {
        return {};
      }

      let newPlayer = prevState.currentPlayer;

      // Update square clicked
      newGameData[row].player = prevState.currentPlayer;
      localStorage.setItem(GAME_DATA, JSON.stringify(newGameData));

      let newGameOver = this.checkGameOver(newGameData, prevState.currentPlayer);
      if (newGameOver === false) {
        const isEndOfGame = this.checkEndOfGame(newGameData);
        if (isEndOfGame === true) {
          newPlayer = 0;
          newGameOver = true;
        }
      }

      if (!newGameOver) {
        // Next Player
        newPlayer = prevState.currentPlayer === 1 ? 2 : 1;
      }

      localStorage.setItem(GAME_OVER, newGameOver);
      localStorage.setItem(CURRENT_PLAYER, newPlayer);

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
