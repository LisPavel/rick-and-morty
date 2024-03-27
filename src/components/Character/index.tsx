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
  const { image, name, status, species, type, gender, created } = data;
  return (
    <div className="character">
      <img src={image} alt={name} />
      <div className="character-name">{name}</div>
      <div className="character-status">{status}</div>
      <div className="character-species">{species}</div>
      <div className="character-type">{type}</div>
      <div className="character-gender">{gender}</div>
      <div className="character-created">{created}</div>
    </div>
  );
};

export default Character;
