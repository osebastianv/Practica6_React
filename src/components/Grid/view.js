import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Button } from '../';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const StyledSection = styled.div`
  display: block;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 80px 80px 80px;
  grid-gap: ${props => props.theme.space.md};
`;

const StyledItem = styled.div`
  display: flex;
  width: 80px;
  height: 80px;
  border: 1px solid black;
  padding: 3px;
`;

const StyledLetter = styled.div`
  font-size: 70px;
  color: ${(props) => {
    if (props.player === 1) {
      return props.theme.colors.player1;
    } else if (props.player === 2) {
      return props.theme.colors.player2;
    }
    return props.theme.colors.white;
  }};
`;

const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 25px;
`;

const StyledPlayer = styled.div`
  display: inline-block;
  margin-left: 25px;
`;

const Grid = ({
  currentPlayer, currentTurn, gameData, gameOver, updateList, resetList,
}) => (
  <StyledWrapper>
    <StyledSection>
      <StyledGrid>
        {gameData &&
          gameData.map(value => (
            <StyledItem
              onClick={() => {
                if (value.player === 0 && !gameOver) {
                  updateList(value.row);
                }
              }}
              key={value.row}
              player={value.player}
            >
              {value.turn !== 0 && value.turn}
              <StyledLetter player={value.player}>
                {value.player === 1 && 'O'}
                {value.player === 2 && 'X'}
              </StyledLetter>
            </StyledItem>
          ))}
      </StyledGrid>
      <StyledButton hidden={!updateList}>
        <Button onClick={resetList}>Reiniciar</Button>
      </StyledButton>
    </StyledSection>

    <StyledPlayer>
      Turno {currentTurn}:
      {!gameOver && <span> Jugador {currentPlayer} </span>}
      {gameOver && currentPlayer === 0 && <span> Empate </span>}
      {gameOver && currentPlayer !== 0 && <span> Jugador {currentPlayer} Gana </span>}
    </StyledPlayer>
  </StyledWrapper>
);
Grid.defaultProps = {
  currentPlayer: 1,
  currentTurn: 1,
  gameOver: false,
};

Grid.propTypes = {
  currentPlayer: PropTypes.number,
  currentTurn: PropTypes.number,
  gameData: PropTypes.arrayOf(PropTypes.any).isRequired,
  gameOver: PropTypes.bool,
  updateList: PropTypes.func.isRequired,
  resetList: PropTypes.func.isRequired,
};

export default Grid;
