import React, { useState } from "react";
import PlayerPositionProps from "../interface/playerPositions";
import { Button, Container, Subtitle, Title } from "../styled.components";

interface DiceProps {
  setPlayerPosition: (value: PlayerPositionProps) => void;
  playerPosition: PlayerPositionProps;
  selectedGroup: string;
}

const Dice = ({
  selectedGroup,
  playerPosition,
  setPlayerPosition,
}: DiceProps) => {
  const [rollNumber, setRollNumber] = useState(0);

  const rollDice = () => {
    const diceValue = Math.floor(Math.random() * 6) + 1;
    setRollNumber(diceValue);

    setPlayerPosition({
      ...playerPosition,
      [selectedGroup]: {
        ...playerPosition[selectedGroup],
        rollNumber: diceValue,
      },
    });
  };

  return (
    <Container>
      <Title>{selectedGroup} Dice roll</Title>
      {rollNumber > 0 && <Subtitle>{rollNumber}</Subtitle>}
      <Button borderColor="black" onClick={rollDice}>
        Roll
      </Button>
    </Container>
  );
};

export default Dice;
