import React, { useState } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { GAME_LIST } from "./constants/games";
import { Subtitle, Title } from "./styled.components";

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ListContainer = styled.div`
  width: 360px;
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  border-radius: 3px;
  font-size: 18px;
  margin: 10px 0;
`;

const CustomLink = styled(Link)`
  margin: 5px;
  width: 120px;
  height: 36px;
  padding: 10px 20px;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-family: Helvetica;
  font-size: 16px;
  font-weight: 500;
  background-color: blue;
  border: none;
  border-radius: 4px;
  color: white;
  opacity: 0.7;
  transition: opacity 0.8s;
  transition: transform 0.8s;
  &:hover {
    opacity: 1;
    transform: scale(1.01);
  }
`;

const GameList = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <MainContainer>
      <Title>Games List</Title>
      <Subtitle>Search game</Subtitle>
      <Input onChange={(e) => setSearchValue(e.target.value)} />
      <ListContainer>
        {GAME_LIST.map((game) => {
          if (game.name.toLocaleLowerCase().includes(searchValue)) {
            return (
              <CustomLink to={"/gameDetails/" + game.name} key={game.name}>
                {game.name}
              </CustomLink>
            );
          } else return null;
        })}
      </ListContainer>
    </MainContainer>
  );
};

export default GameList;
