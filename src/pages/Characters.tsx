import React, { useState } from "react";
import characters from "../mock/characters.json";
import { CharacterData } from "../components/Character";
import CharactersList from "../components/CharactersList";
import { Card, Typography } from "antd";

const { Title } = Typography;

const Characters = () => {
  const [charactersArray] = useState<CharacterData[]>(characters ?? []);
  return (
    <>
      <Card title={<Title style={{ margin: 0 }}>Characters</Title>}>
        <CharactersList items={charactersArray} style={{ overflow: "auto" }} />
      </Card>
    </>
  );
};

export default Characters;
