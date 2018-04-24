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

  /*background: ${props =>
    (props.player === 1
      ? props.theme.colors.player1
      : props.player === 2
        ? props.theme.colors.player2
        : props.theme.colors.white)};*/
`;

const Grid = ({
  currentPlayer, gameData, gameOver, updateList, resetList,
}) => (
  // console.log('3a', gameData, 'b', currentPlayer, 'c', gameOver);
  <StyledWrapper>
    <StyledSection>
      <StyledGrid>
        {gameData &&
          gameData.map(value => (
            <StyledItem
              onClick={() => {
                if (value.player === 0) {
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
      <Button onClick={resetList}>Reset</Button>
    </StyledSection>

    <div>
      Turno: Player 1 --- {currentPlayer} --- {gameOver}
    </div>
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
  addToList: PropTypes.func.isRequired,
};

export default Grid;
