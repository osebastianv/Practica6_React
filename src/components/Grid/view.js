import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Button } from '../';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  /*background: ${props => props.theme.colors.player1};*/
`;

const StyledSection = styled.div`
  display: block;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 80px 80px 80px;
  grid-gap: ${props => props.theme.space.md};
  /*background: ${props => props.theme.colors.player2};*/
`;

const StyledItem = styled.div`
  /*position: relative;*/
  width: 80px;
  height: 80px;
  border: 1px solid black;
  background: ${(props) => {
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
  margin-left: 25px;
`;

const Grid = ({
  currentPlayer, gameData, gameOver, updateList, resetList,
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
              {value.row}
            </StyledItem>
          ))}
      </StyledGrid>
      <StyledButton>
        <Button onClick={resetList}>Reset</Button>
      </StyledButton>
    </StyledSection>

    <StyledPlayer>
      {!gameOver && <p> Turno: Jugador {currentPlayer} </p>}
      {gameOver && currentPlayer === 0 && <p> Empate </p>}
      {gameOver && currentPlayer !== 0 && <p> Jugador {currentPlayer} gana </p>}
    </StyledPlayer>
  </StyledWrapper>
);
Grid.defaultProps = {
  currentPlayer: 1,
  // gameData: [{ row: 0, player: 1 }],  //quitar
  gameOver: false,
};

Grid.propTypes = {
  currentPlayer: PropTypes.number,
  gameData: PropTypes.arrayOf(PropTypes.any).isRequired,
  gameOver: PropTypes.bool,
  updateList: PropTypes.func.isRequired,
  resetList: PropTypes.func.isRequired,
};

export default Grid;
