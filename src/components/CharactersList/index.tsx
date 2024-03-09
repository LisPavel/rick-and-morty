import React from "react";
import { CharacterData } from "../Character";
import { Avatar, List, ListProps } from "antd";
import { NavLink } from "react-router-dom";
import "./index.scss";

interface Props extends ListProps<CharacterData> {
  items: CharacterData[];
}

const CharactersList = ({ items, ...rest }: Props) => {
  return (
    <List
      {...rest}
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
