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
  background: ${props =>
    (props.player === 1
      ? props.theme.colors.player1
      : props.player === 2
        ? props.theme.colors.player2
        : props.theme.colors.white)};
`;

const Grid = ({
  currentPlayer, gameData, gameOver, addToList,
}) => (
  // console.log('3a', gameData, 'b', currentPlayer, 'c', gameOver);
  <StyledWrapper>
    <StyledSection>
      <StyledGrid>
        {gameData &&
          gameData.map(value => (
            // console.log('5', value);
            <StyledItem onClick={() => addToList(value.row)} key={value.row} player={value.player}>
              {value.row}
            </StyledItem>
          ))}
      </StyledGrid>
      <Button>Reset</Button>
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
