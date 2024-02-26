import React, { useState } from "react";
import characters from "../mock/characters.json";
import { CharacterData } from "../components/Character";
import CharactersList from "../components/CharactersList";

const Characters = () => {
  const [charactersArray] = useState<CharacterData[]>(characters ?? []);
  return (
    <>
      <h1>Characters</h1>
      <CharactersList items={charactersArray} />
    </>
  );
};

export default Characters;
