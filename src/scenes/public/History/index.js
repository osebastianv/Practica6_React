import React from 'react';

import { List } from '../../../components';

const History = ({ historyData }) => (
  <List historyData={historyData} />
);

History.defaultProps = {
  ...List.defaultProps,
};

History.propTypes = {
  ...List.propTypes,
};

export default History;
