import React from "react";
import { LocationData } from "../Location";
import "./index.scss";
import { List } from "antd";
import { NavLink } from "react-router-dom";

interface Props {
  items: LocationData[];
  loading?: boolean;
  lastItemRef?: React.Ref<HTMLElement>;
}

const LocationsList = ({ items, lastItemRef, ...rest }: Props) => {
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

export default LocationsList;
