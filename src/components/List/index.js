import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ListView from './view';

class List extends Component {
  static defaultProps = {};
  static propTypes = {
    historyData: PropTypes.arrayOf(PropTypes.any).isRequired,
  };
  // state = {
  //  listSelectedIndex: 0,
  // };

  // selectElement = () => {};

  render() {
    // console.log('4', this.props.gameData);
    return (
      <ListView
        historyData={this.props.historyData}
        // listSelectedIndex={this.state.listSelectedIndex}
        // selectElement={this.selectElement}
      />
    );
  }
}

export default List;
