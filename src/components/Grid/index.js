import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Button } from '../';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  background: ${props => props.theme.colors.player1};
`;

const StyledWrapper2 = styled.div`
  display: block;
`;

const StyledWrapper3 = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 80px 80px 80px;
  grid-gap: ${props => props.theme.space.md};
  background: ${props => props.theme.colors.player2};
`;

const StyledItem = styled.div`
  /*position: relative;*/
  width: 80px;
  height: 80px;
  background: green;
`;

const Box = ({ currentPlayer, gameData, gameOver }) => {
  // const gameData2 = [{ row: 0, player: 1 }];
  const gameData2 = [];
  for (let i = 0; i < 9; i += 1) {
    const boxObj = {
      row: i,
      player: 0,
    };
    gameData2.push(boxObj);
  }

  return (
    <StyledWrapper>
      <StyledWrapper2>
        <StyledWrapper3>
          {gameData2 &&
            gameData2.map(boxObj => (
              <StyledItem key={`box${boxObj.row}`}>
                <p>{boxObj.row}</p>
              </StyledItem>
            ))}
        </StyledWrapper3>
        <Button>Reset</Button>
      </StyledWrapper2>

      <div>Turno: Player 1</div>
    </StyledWrapper>
  );
};

Box.defaultProps = {
  currentPlayer: 1,
  // gameData: [{ row: 0, player: 1 }],  //quitar
  gameOver: false,
};

Box.propTypes = {
  currentPlayer: PropTypes.number,
  gameData: PropTypes.arrayOf(PropTypes.any).isRequired,
  gameOver: PropTypes.bool,
};

export default Box;
