import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledWrapper = styled.nav`
  display: flex;
  justify-content: flex-start;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  font-size: ${props => props.theme.fontSizes.md};
  margin-right: 30px;
  &.active {
    border-bottom: 6px solid ${props => props.theme.colors.white};
  }
  &:last-child {
    margin-right: 0;
  }
`;

const Menu = () => (
  <StyledWrapper>
    <StyledLink exact to="/">
      Juego
    </StyledLink>
    <StyledLink to="/history">Histórico</StyledLink>
  </StyledWrapper>
);

export default Menu;
