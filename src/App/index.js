import React, { Component } from 'react';

import View from './view';

const CURRENT_PLAYER = 'currentPlayer';
const CURRENT_TURN = 'currentTurn';
const GAME_DATA = 'gameData';
const GAME_OVER = 'gameOver';
const HISTORICAL_DATA = 'historicalData';

let currentPlayerSrc = localStorage.getItem(CURRENT_PLAYER);
if (!currentPlayerSrc) {
  currentPlayerSrc = 1;
  localStorage.setItem(CURRENT_PLAYER, currentPlayerSrc);
}

let currentTurnSrc = localStorage.getItem(CURRENT_TURN);
if (!currentTurnSrc) {
  currentTurnSrc = 1;
  localStorage.setItem(CURRENT_TURN, currentTurnSrc);
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

const historicalDataSrc = localStorage.getItem(HISTORICAL_DATA);
if (!historicalDataSrc) {
  localStorage.setItem(HISTORICAL_DATA, JSON.stringify([]));
}

class App extends Component {
  state = {
    currentPlayer: !!currentPlayerSrc && JSON.parse(currentPlayerSrc),
    currentTurn: !!currentTurnSrc && JSON.parse(currentTurnSrc),
    gameData: !!gameDataSrc && JSON.parse(gameDataSrc),
    gameOver: !!gameOverSrc && JSON.parse(gameOverSrc),
    historicalData: !!historicalDataSrc && JSON.parse(historicalDataSrc),
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
        turn: 0,
      };
      gameDataSrc.push(dataObj);
    }
    localStorage.setItem(GAME_DATA, JSON.stringify(gameDataSrc));

    currentPlayerSrc = 1;
    localStorage.setItem(CURRENT_PLAYER, currentPlayerSrc);

    currentTurnSrc = 1;
    localStorage.setItem(CURRENT_TURN, currentTurnSrc);

    gameOverSrc = false;
    localStorage.setItem(GAME_OVER, gameOverSrc);

    // historicalDataSrc = localStorage.getItem(HISTORICAL_DATA);
    console.log('reset1 historicalDataSrc', historicalDataSrc);

    this.setState({
      currentPlayer: currentPlayerSrc,
      currentTurn: currentTurnSrc,
      gameData: gameDataSrc,
      gameOver: gameOverSrc,
      // historicalData: historicalDataSrc,
    });
    console.log('reset2 historicalDataSrc', historicalDataSrc);
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
      /* console.log(
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
      ); */
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
      let newTurn = prevState.currentTurn;

      // Update square clicked
      newGameData[row].player = prevState.currentPlayer;
      newGameData[row].turn = prevState.currentTurn;
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
        newTurn += 1;
      }

      localStorage.setItem(GAME_OVER, newGameOver);
      localStorage.setItem(CURRENT_PLAYER, newPlayer);
      localStorage.setItem(CURRENT_TURN, newTurn);

      const newHistoricalData = prevState.historicalData;
      if (newGameOver) {
        console.log('1-historicalDataSrc', historicalDataSrc);
        console.log('2-historicalData', newHistoricalData);

        newHistoricalData.push({
          currentPlayer: newPlayer,
          currentTurn: newTurn,
          gameData: newGameData,
          gameOver: newGameOver,
        });
        localStorage.setItem(HISTORICAL_DATA, JSON.stringify(newHistoricalData));
      }

      return {
        currentPlayer: newPlayer,
        currentTurn: newTurn,
        gameData: newGameData,
        gameOver: newGameOver,
        historicalData: newHistoricalData,
      };
    });
  };

  render() {
    return (
      <View
        currentPlayer={this.state.currentPlayer}
        currentTurn={this.state.currentTurn}
        gameData={this.state.gameData}
        gameOver={this.state.gameOver}
        updateList={this.updateList}
        resetList={this.resetList}
        historicalData={this.state.historicalData}
      />
    );
  }
}

export default App;
