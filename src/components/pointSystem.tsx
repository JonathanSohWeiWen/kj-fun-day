import React, { useState } from "react";
import styled from "styled-components";
import {
  MIDDLE_PRIMARY_STARTING_VALUES,
  UPPER_PRIMARY_STARTING_VALUES,
} from "../constants/playerStartingValues";
import PlayerPositionProps from "../interface/playerPositions";
import { Container, Subtitle, Title } from "../styled.components";

interface PointSystemProps {
  hard: boolean;
  playerPosition: PlayerPositionProps;
  setPlayerPosition: (value: PlayerPositionProps) => void;
}

const ScoreContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 630px;
  @media (max-width: 1800px) {
    width: 420px;
  }
`;

const SubContainer = styled.div<{ selected: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 170px;
  border-radius: 5px;
  padding: 15px;
  margin: 5px;
  background-color: #f3f3f3;
  &:hover {
    opacity: 0.8;
  }
`;

const TextContainer = styled.div<{ rowHeight?: number }>`
  height: ${(props) => props.rowHeight || 1}em;
  font-size: 20px;
  font-weight: 400;
  padding: 5px 0;
  text-align: center;
  margin-bottom: 10px;
`;

const BoldText = styled.span`
  font-weight: 700;
`;

const PointsInput = styled.input`
  width: 100px;
  font-size: 40px;
  text-align: center;
  height: 55px;
  border: none;
  border-bottom: 3px solid black;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &:focus {
    outline: none;
  }
`;

const PointsContainer = styled.div`
  z-index: 100;
  width: 50%;
  height: 200px;
  padding: 15px;
  top: 5vh;
  left: 25%;
  background-color: white;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const PointsButton = styled.button<{ color: string }>`
  background-color: ${(props) => props.color};
  width: 100px;
  height: 30px;
  color: white;
  border: none;
  font-size: 18px;
  border-radius: 5px;
  margin-left: 5px;
`;

const PointSystem = ({
  hard,
  playerPosition,
  setPlayerPosition,
}: PointSystemProps) => {
  const [selectedGroup, setSelectedGroup] = useState("");

  const PointModifier = ({ group }: { group: string }) => {
    const [points, setPoints] = useState<number | undefined>();

    const modifyPoints = (type: "PLUS" | "MINUS", group: string) => {
      if (points) {
        setPlayerPosition({
          ...playerPosition,
          [group]: {
            ...playerPosition[group],
            points:
              type === "PLUS"
                ? playerPosition[group].points + points
                : playerPosition[group].points - points,
          },
        });
        setPoints(undefined);
        setSelectedGroup("");
      }
    };

    return (
      <PointsContainer>
        <button
          onClick={() => setSelectedGroup("")}
          style={{
            fontWeight: 600,
            position: "absolute",
            top: "10px",
            right: "10px",
            background: "transparent",
            border: "none",
          }}
        >
          x
        </button>
        <div style={{ fontSize: "20px", textAlign: "center" }}>
          How many points would you like to add/minus?
        </div>
        <PointsInput
          type={"number"}
          onChange={(e) => setPoints(parseInt(e.target.value))}
          value={points}
        />
        <div>
          <PointsButton
            color="#F71A1A"
            onClick={() => modifyPoints("MINUS", group)}
          >
            Minus
          </PointsButton>
          <PointsButton
            color="#00862F"
            onClick={() => modifyPoints("PLUS", group)}
          >
            Add
          </PointsButton>
        </div>
      </PointsContainer>
    );
  };
  const groups = hard
    ? Object.keys(UPPER_PRIMARY_STARTING_VALUES)
    : Object.keys(MIDDLE_PRIMARY_STARTING_VALUES);
  return (
    <Container>
      <Title>Scoreboard</Title>
      <ScoreContainer>
        {selectedGroup && <PointModifier group={selectedGroup} />}
        {groups.map((group) => {
          return (
            <SubContainer
              selected={group === selectedGroup}
              key={group}
              onClick={() => setSelectedGroup(group)}
            >
              <Subtitle color={playerPosition[group].color}>{group}</Subtitle>
              <TextContainer>
                <BoldText>{playerPosition[group].points}</BoldText> points
              </TextContainer>
              <TextContainer rowHeight={2}>
                {playerPosition[group].currentGame}
              </TextContainer>
            </SubContainer>
          );
        })}
      </ScoreContainer>
    </Container>
  );
};

export default PointSystem;
