import React, { useEffect, useState } from "react";
import { CHANCE_OPTIONS } from "../constants/chance";
import { Button, Container, Subtitle, Title } from "../styled.components";

const Chance = ({ selectedGroup }: { selectedGroup: string }) => {
  const [chance, setChance] = useState(
    "See which lucky (or unlucky) chance you receive!"
  );

  useEffect(() => {
    setChance("See which lucky (or unlucky) chance you receive!");
  }, [selectedGroup]);

  return (
    <Container>
      <Title>Chance</Title>
      <Subtitle rows={2}>{chance}</Subtitle>
      <Button
        hoverReverse={true}
        borderColor="#CFB03D"
        onClick={() =>
          setChance(CHANCE_OPTIONS[Math.floor(Math.random() * 10)])
        }
      >
        CHANCE
      </Button>
    </Container>
  );
};

export default Chance;
