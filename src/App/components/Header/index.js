import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';

import logo from './logo.png';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${props => props.color};
  background: ${props => props.theme.colors.primary};
  padding: ${props => `${props.theme.space.sm} ${props.theme.space.md}`};
`;

const StyledTitle = styled.h1`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  img {
    margin-right: ${props => props.theme.space.sm};
  }
`;

const StyledImg = styled.img`
  height: 70px;
  width: 70px;
`;

const Header = ({ children, theme }) => (
  <StyledHeader color={theme.colors.white}>
    <StyledTitle>
      <StyledImg src={logo} alt="" />3 en Raya
    </StyledTitle>
    {children}
  </StyledHeader>
);

Header.defaultProps = {
  children: undefined,
};

Header.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default withTheme(Header);
