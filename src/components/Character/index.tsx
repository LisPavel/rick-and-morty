import React from "react";
import "./index.scss";

export interface CharacterData {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  created: string;
}

interface Props {
  data: CharacterData;
}

const Character = ({ data }: Props) => {
  return (
    <div className="character">
      <img src={data.image} alt={data.name} />
      <div className="character-name">{data.name}</div>
      <div className="character-status">{data.status}</div>
      <div className="character-species">{data.species}</div>
      <div className="character-type">{data.type}</div>
      <div className="character-gender">{data.gender}</div>
      <div className="character-created">{data.created}</div>
    </div>
  );
};

export default Character;
