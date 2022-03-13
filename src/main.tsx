import React, { useState } from "react";
import styled from "styled-components";
import Board from "./components/board";
import Chance from "./components/chance";
import Dice from "./components/dice";
import GroupSelection from "./components/groupSelection";
import PointSystem from "./components/pointSystem";
import {
  MIDDLE_PRIMARY_STARTING_VALUES,
  UPPER_PRIMARY_STARTING_VALUES,
} from "./constants/playerStartingValues";
import PlayerPositionProps from "./interface/playerPositions";
import { Button, Title } from "./styled.components";

const MainContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: white;
  height: 100%;
  margin-right: 10%;
`;

const Dashboard = styled.div<{ hard: boolean }>`
  padding: 10px;
  flex-direction: column;
  justify-items: center;
  align-items: flex-start;
`;

const BoardContainer = styled.div`
  margin-top: 25vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BoardSetting = ({ setLevel }: { setLevel: (value: boolean) => void }) => {
  return (
    <BoardContainer>
      <Title>Level Selection</Title>
      <Button borderColor="#3EBBFE" onClick={() => setLevel(false)}>
        P3/P4
      </Button>
      <Button borderColor="#3EBBFE" onClick={() => setLevel(true)}>
        P5/P6
      </Button>
    </BoardContainer>
  );
};

const Main = () => {
  const [level, setLevel] = useState<boolean | undefined>();
  const [selectedGroup, setSelectedGroup] = useState("");
  const [playerPosition, setPlayerPosition] = useState<PlayerPositionProps>(
    level ? UPPER_PRIMARY_STARTING_VALUES : MIDDLE_PRIMARY_STARTING_VALUES
  );
  console.log(playerPosition);
  if (level === undefined) return <BoardSetting setLevel={setLevel} />;
  else {
    return (
      <MainContainer>
        <Board
          hard={level}
          selectedGroup={selectedGroup}
          playerPosition={playerPosition}
          setSelectedGroup={setSelectedGroup}
          setPlayerPosition={setPlayerPosition}
        />
        <Dashboard hard={level}>
          {selectedGroup ? (
            <Dice
              playerPosition={playerPosition}
              selectedGroup={selectedGroup}
              setPlayerPosition={setPlayerPosition}
            />
          ) : (
            <GroupSelection
              playerPosition={playerPosition}
              hard={level}
              setSelectedGroup={setSelectedGroup}
            />
          )}
          <Chance selectedGroup={selectedGroup} />
          <PointSystem
            hard={level}
            playerPosition={playerPosition}
            setPlayerPosition={setPlayerPosition}
          />
        </Dashboard>
      </MainContainer>
    );
  }
};

export default Main;
