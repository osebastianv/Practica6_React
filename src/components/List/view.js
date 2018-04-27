import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import GridView from '../Grid/view';

const StyledWrapper = styled.div``;

const StyledBody = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const StyledSection = styled.div`
  display: block;
  width: 240px;
`;

const StyledLine = styled.div`
  width: 220px;
  height: 2px;
  margin: 1px;
  background: black;
`;

const StyledItem = styled.div`
  display: block;
  width: 220px;
  height: 30px;
  margin: 0px;
  padding: 5px;
  background: ${(props) => {
    if (props.selected === true) {
      return props.theme.colors.grayLight;
    }
    return props.theme.colors.white;
  }};
`;

const StyledPlayer = styled.div`
  display: inline-block;
  margin-left: 50px;
`;

const List = ({ historyData, listSelectedIndex, selectElement }) => (
  <StyledWrapper>
    <p>Total de partidas jugadas: {historyData.length}</p>
    <StyledBody>
      <StyledSection>
        {historyData && historyData.length > 0 && <StyledLine />}
        {historyData &&
          historyData.map(value => (
            <Fragment>
              <StyledItem
                key={value.gameCounter}
                onClick={() => {
                  selectElement(value.gameCounter);
                }}
                selected={listSelectedIndex === value.gameCounter}
              >
                <span>Partida {value.gameCounter}: </span>
                {value.currentPlayer === 0 && <span> Empate </span>}
                {value.currentPlayer !== 0 && <span> Jugador {value.currentPlayer} Gana </span>}
              </StyledItem>
              <StyledLine />
            </Fragment>
          ))}
      </StyledSection>
      <StyledPlayer>
        {historyData &&
          historyData.length > 0 &&
          listSelectedIndex > 0 && (
            <div>
              <GridView
                currentPlayer={historyData[listSelectedIndex - 1].currentPlayer}
                currentTurn={historyData[listSelectedIndex - 1].currentTurn}
                gameData={historyData[listSelectedIndex - 1].gameData}
                gameOver={historyData[listSelectedIndex - 1].gameOver}
              />
            </div>
          )}
      </StyledPlayer>
    </StyledBody>
  </StyledWrapper>
);

List.defaultProps = {
  listSelectedIndex: 0,
};

List.propTypes = {
  historyData: PropTypes.arrayOf(PropTypes.any).isRequired,
  listSelectedIndex: PropTypes.number,
  selectElement: PropTypes.func.isRequired,
};

export default List;
