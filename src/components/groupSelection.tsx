import React from "react";
import styled from "styled-components";
import {
  MIDDLE_PRIMARY_STARTING_VALUES,
  UPPER_PRIMARY_STARTING_VALUES,
} from "../constants/playerStartingValues";
import PlayerPositionProps from "../interface/playerPositions";
import { Button, Container, Title } from "../styled.components";

interface GroupSelectionProps {
  playerPosition: PlayerPositionProps;
  setSelectedGroup: (value: string) => void;
  hard: boolean;
}

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 540px;
  @media (max-width: 1800px) {
    width: 360px;
  }
`;

const GroupSelection = ({
  playerPosition,
  setSelectedGroup,
  hard,
}: GroupSelectionProps) => {
  const groupNames = hard
    ? Object.keys(UPPER_PRIMARY_STARTING_VALUES)
    : Object.keys(MIDDLE_PRIMARY_STARTING_VALUES);
  return (
    <Container>
      <Title>Select group</Title>
      <ButtonContainer>
        {groupNames.map((groupName) => {
          return (
            <Button
              borderColor={playerPosition[groupName].color}
              key={groupName}
              onClick={() => setSelectedGroup(groupName)}
            >
              {groupName}
            </Button>
          );
        })}
      </ButtonContainer>
    </Container>
  );
};

export default GroupSelection;
