import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PlayerPositionProps from "../interface/playerPositions";
import { checkValidPath, getBorderColor, selectGame } from "../util";

import gold from "../assets/gold.jpg";
import jail from "../assets/jail.jpg";
import chest from "../assets/chest.png";

interface tileProps {
  hard: boolean;
  index: number;
  tileType: number;
  selectedGroup: string;
  playerPositions: PlayerPositionProps;
  setPlayerPosition: (value: PlayerPositionProps) => void;
  setSelectedGroup: (value: string) => void;
}

const Container = styled.div<{
  borderColor: string;
  zIndex: number;
  tileType: number;
}>`
  border: 5px solid ${(props) => props.borderColor};
  width: 4vh;
  height: 4vh;
  margin-bottom: -4.5px;
  margin-right: -4.5px;
  z-index: ${(props) => props.zIndex};
  display: flex;
  justify-self: center;
  align-self: center;
`;

const ImageContainer = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;

export const Tile = ({
  hard,
  tileType,
  playerPositions,
  index,
  selectedGroup,
  setPlayerPosition,
  setSelectedGroup,
}: tileProps) => {
  const [borderColor, setBorderColor] = useState(
    tileType === 0 ? "white" : getBorderColor(index, playerPositions) || "black"
  );
  const [zIndex, setZIndex] = useState(
    tileType === 0 ? 0 : borderColor === "black" ? 1 : 2
  );

  useEffect(() => {
    const newBorderColor = getBorderColor(index, playerPositions);
    if (tileType > 0) {
      if (newBorderColor) {
        setBorderColor(newBorderColor);
        setZIndex(2);
      } else {
        setBorderColor("black");
        setZIndex(1);
      }
    }
  }, [playerPositions, tileType, index]);

  const movePosition = () => {
    if (playerPositions[selectedGroup].rollNumber > 0 && tileType > 0) {
      const validPosition = checkValidPath(
        playerPositions[selectedGroup].position,
        playerPositions[selectedGroup].rollNumber,
        hard,
        "START"
      );
      if (validPosition.includes(index)) {
        const game = selectGame(playerPositions);
        setPlayerPosition({
          ...playerPositions,
          [selectedGroup]: {
            ...playerPositions[selectedGroup],
            position: index,
            rollNumber: 0,
            currentGame: tileType === 1 ? game : "",
          },
        });
        setSelectedGroup("");
      }
    }
  };

  return (
    <Container
      tileType={tileType}
      borderColor={borderColor}
      zIndex={zIndex}
      onClick={movePosition}
    >
      {/* {index} */}
      {tileType === 2 && (
        <ImageContainer src={jail} width={"100%"} alt="JAIL" />
      )}
      {tileType === 3 && (
        <ImageContainer src={gold} width={"100%"} alt="GOLD" />
      )}
      {tileType === 4 && (
        <ImageContainer src={chest} width={"100%"} alt="CHEST" />
      )}
    </Container>
  );
};
