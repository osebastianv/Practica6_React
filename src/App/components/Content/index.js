import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import { Game, Ranking } from '../../../scenes';

const StyledWrapper = styled.div`
  padding: ${props => props.theme.space.md};
`;

const Content = () => (
  <StyledWrapper>
    <Route exact path="/" component={Game} />
    <Route exact path="/ranking" component={Ranking} />
  </StyledWrapper>
);

export default Content;
