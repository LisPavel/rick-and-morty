import { List } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
import { LocationData } from "../Location";
import "./LocationsList.scss";

interface Props {
  items: LocationData[];
  loading?: boolean;
  lastItemRef?: React.Ref<HTMLElement>;
}

export const LocationsList = ({ items, lastItemRef, ...rest }: Props) => {
  return (
    <List
      {...rest}
      itemLayout="horizontal"
      dataSource={items}
      renderItem={(item, index) => {
        if (index + 1 === items.length - 5) {
          return (
            <List.Item ref={lastItemRef} key={item.id}>
              <List.Item.Meta
                title={
                  <NavLink to={`/locations/${item.id}`}>{item.name}</NavLink>
                }
                description={item.type}
              />
            </List.Item>
          );
        }
        return (
          <List.Item key={item.id}>
            <List.Item.Meta
              title={
                <NavLink to={`/locations/${item.id}`}>{item.name}</NavLink>
              }
              description={item.type}
            />
          </List.Item>
        );
      }}
    />
  );
};
