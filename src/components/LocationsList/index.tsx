import React from "react";
import { LocationData } from "../Location";
import "./index.scss";
import { List } from "antd";
import { NavLink } from "react-router-dom";

interface Props {
  items: LocationData[];
}

const LocationsList = ({ items }: Props) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={items}
      renderItem={(item) => (
        <List.Item key={item.id}>
          <List.Item.Meta
            title={<NavLink to={`/locations/${item.id}`}>{item.name}</NavLink>}
            description={item.type}
          />
        </List.Item>
      )}
    />
  );
};

export default LocationsList;
