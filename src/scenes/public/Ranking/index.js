import React from 'react';

import { List } from '../../../components';

const Ranking = ({ historicalCounter, historicalData }) => (
  <List historicalCounter={historicalCounter} historicalData={historicalData} />
);

Ranking.defaultProps = {
  ...List.defaultProps,
};

Ranking.propTypes = {
  ...List.propTypes,
};

export default Ranking;
