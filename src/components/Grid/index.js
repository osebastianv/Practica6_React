import React, { Component } from 'react';
import PropTypes from 'prop-types';

import GridView from './view';

class Grid extends Component {
  static defaultProps = {
    currentPlayer: 0,
    gameData: [],
    gameOver: false,
  };
  static propTypes = {
    currentPlayer: PropTypes.number,
    gameData: PropTypes.arrayOf(PropTypes.any),
    gameOver: PropTypes.bool,
    updateList: PropTypes.func.isRequired,
    resetList: PropTypes.func.isRequired,
  };
  render() {
    console.log('4', this.props.gameData);
    return (
      <GridView
        currentPlayer={this.props.currentPlayer}
        gameData={this.props.gameData}
        gameOver={this.props.gameOver}
        updateList={this.props.updateList}
        resetList={this.props.resetList}
      />
    );
  }
}

export default Grid;
