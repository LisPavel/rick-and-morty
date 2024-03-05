import React, { useState } from "react";
import characters from "../mock/characters.json";
import { CharacterData } from "../components/Character";
import CharactersList from "../components/CharactersList";
import { Typography } from "antd";

const { Title } = Typography;

const Characters = () => {
  const [charactersArray] = useState<CharacterData[]>(characters ?? []);
  return (
    <>
      <Title>Characters</Title>
      <CharactersList items={charactersArray} />
    </>
  );
};

export default Characters;
