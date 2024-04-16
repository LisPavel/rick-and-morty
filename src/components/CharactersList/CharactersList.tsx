import React from "react";
import { CharacterData } from "../Character";
import { Avatar, List, ListProps } from "antd";
import { NavLink } from "react-router-dom";
import "./CharactersList.scss";

interface Props extends ListProps<CharacterData> {
  items: CharacterData[];
  loading: boolean;
  lastItemRef?: React.Ref<HTMLElement>;
}

export const CharactersList = ({ items, lastItemRef, ...rest }: Props) => {
  return (
    <List
      {...rest}
      itemLayout="horizontal"
      dataSource={items}
      renderItem={(item, index) => {
        if (index + 1 === items.length - 5) {
          return (
            <List.Item key={item.id} ref={lastItemRef}>
              <List.Item.Meta
                avatar={<Avatar src={item.image} />}
                title={
                  <NavLink to={`/characters/${item.id}`}>{item.name}</NavLink>
                }
                description={item.species}
              />
            </List.Item>
          );
        }
        return (
          <List.Item key={item.id}>
            <List.Item.Meta
              avatar={<Avatar src={item.image} />}
              title={
                <NavLink to={`/characters/${item.id}`}>{item.name}</NavLink>
              }
              description={item.species}
            />
          </List.Item>
        );
      }}
    />
  );
};
