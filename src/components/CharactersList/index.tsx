import React from "react";
import "./index.scss";
import Character, { CharacterData } from "../Character";
import { List, ListItem } from "../List";

interface Props {
  items: CharacterData[];
}

const CharactersList = ({ items }: Props) => {
  return (
    <List>
      {items.map((c) => (
        <ListItem key={c.id}>
          {" "}
          <Character data={c} />
        </ListItem>
      ))}
    </List>
  );
};

export default CharactersList;
