import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// import { Grid } from '../';

const StyledWrapper = styled.div``;

const StyledBody = styled.div`
  display: flex;
  justify-content: flex-start;
  /*background: ${props => props.theme.colors.player1};*/
`;

const StyledSection = styled.div`
  display: block;
  width: 50%;
  background: white;
`;

const StyledItem = styled.div`
  display: inline-block;

  width: 100%;
  height: 25px;
  border: 1px solid black;
  background: white;
`;

const StyledPlayer = styled.div`
  display: inline-block;
  margin-left: 25px;
`;

const List = ({ historicalData }) => (
  <StyledWrapper>
    <p>Total de partidas jugadas: {historicalData.length}</p>
    <StyledBody>
      <StyledSection>
        {historicalData &&
          historicalData.map(value => (
            <StyledItem key={value.gameCounter}>
              <span>Partida {value.gameCounter}: </span>
              {value.currentPlayer === 0 && <span> Empate </span>}
              {value.currentPlayer !== 0 && <span> Jugador {value.currentPlayer} Gana </span>}
            </StyledItem>
          ))}
      </StyledSection>
      <StyledPlayer>
        <p />
      </StyledPlayer>
    </StyledBody>
  </StyledWrapper>
);

List.defaultProps = {};

List.propTypes = {
  historicalData: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default List;
