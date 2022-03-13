import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { GAME_LIST } from "./constants/games";
import { Title } from "./styled.components";

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% - 60px);
  padding: 30px 20px;
`;

const Headers = styled.div`
  width: 100%;
  text-align: left;
  font-size: 1.2em;
  margin: 0;
  margin-bottom: 5px;
  font-weight: 700;
`;

const Description = styled(Headers)`
  font-size: 1.2em;
  font-weight: 500;
  margin-bottom: 15px;
`;

const ListItem = styled.li`
  margin: 10px 0;
  text-align: justify;
  text-justify: inter-word;
`;

const Text = styled.div`
  width: 100%;
`;

const BoldText = styled(Text)`
  font-weight: 700;
`;

const OrderedList = styled.ol`
  padding-left: 1.8em;
  margin: 0;
`;
const GameDetails = () => {
  const { gameName } = useParams();
  const game = GAME_LIST.find((game) => game.name === gameName);
  if (!game) {
    return null;
  } else {
    return (
      <GameContainer>
        <Title>{game.name}</Title>
        <Headers>Description</Headers>
        <Description>{game.description}</Description>
        <Headers>Instructions</Headers>
        {game.instructions.length === 1 ? (
          <div>{game.instructions[0]}</div>
        ) : (
          <OrderedList>
            {game.instructions.map((instruction, index) => {
              if (Array.isArray(instruction)) {
                return (
                  <OrderedList key={index}>
                    {instruction.map((subInstruction, subIndex) => {
                      return (
                        <ListItem key={subIndex}>{subInstruction}</ListItem>
                      );
                    })}
                  </OrderedList>
                );
              } else {
                return <ListItem key={index}>{instruction}</ListItem>;
              }
            })}
          </OrderedList>
        )}
        <Headers>Point system</Headers>

        {game.pointSystem.lowerPrimary && (
          <>
            <BoldText>P1/P2</BoldText>
            {game.pointSystem.lowerPrimary.map((instruction, index) => {
              return <Text key={index}>{instruction}</Text>;
            })}
            <br />
          </>
        )}
        {game.pointSystem.upperPrimary && (
          <>
            <BoldText>P3-P6</BoldText>
            <Text>{game.pointSystem.upperPrimary}</Text>
          </>
        )}
      </GameContainer>
    );
  }
};

export default GameDetails;
