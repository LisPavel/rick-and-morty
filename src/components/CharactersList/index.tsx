import React from "react";
import { CharacterData } from "../Character";
import { Avatar, List } from "antd";
import { NavLink } from "react-router-dom";
import "./index.scss";

interface Props {
  items: CharacterData[];
}

const CharactersList = ({ items }: Props) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={items}
      renderItem={(item) => (
        <List.Item key={item.id}>
          <List.Item.Meta
            avatar={<Avatar src={item.image} />}
            title={<NavLink to={`/characters/${item.id}`}>{item.name}</NavLink>}
            description={item.species}
          />
        </List.Item>
      )}
    />
    // <List>
    //   {items.map((c) => (
    //     <ListItem key={c.id}>
    //       {" "}
    //       <Character data={c} />
    //     </ListItem>
    //   ))}
    // </List>
  );
};

export default CharactersList;
