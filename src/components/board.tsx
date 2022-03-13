import React from "react";
import styled from "styled-components";
import { HARD_TILE_POSITIONS } from "../constants/tilePositions";
import PlayerPositionProps from "../interface/playerPositions";
import { Tile } from "./tile";

interface BoardProps {
  hard: boolean;
  selectedGroup: string;
  playerPosition: PlayerPositionProps;
  setPlayerPosition: (value: PlayerPositionProps) => void;
  setSelectedGroup: (value: string) => void;
}

const HardContainer = styled.div`
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
  width: calc(90vh + 90px);
  height: calc((5vh + 6px) * 16);
  left: 5%;
  position: fixed;
`;

// const EasyContainer = styled.div`
//   padding: 30px 15px;
//   display: flex;
//   flex-wrap: wrap;
//   width: calc(60vh + 90px);
//   height: calc(60vh + 65px);
// `;

const Board = ({
  hard,
  playerPosition,
  selectedGroup,
  setPlayerPosition,
  setSelectedGroup,
}: BoardProps) => {
  return (
    <HardContainer>
      {HARD_TILE_POSITIONS.map((tileType, index) => {
        return (
          <Tile
            key={index}
            hard={true}
            index={index}
            tileType={tileType}
            selectedGroup={selectedGroup}
            playerPositions={playerPosition}
            setPlayerPosition={setPlayerPosition}
            setSelectedGroup={setSelectedGroup}
          />
        );
      })}
    </HardContainer>
  );
};

export default Board;
