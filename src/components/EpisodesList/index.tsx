import * as React from "react";
import { EpisodeData } from "../Episode";
import { List } from "antd";
import { NavLink } from "react-router-dom";
// import { List, ListItem } from "../List";
import "./index.scss";

interface Props {
  items: EpisodeData[];
}

const EpisodesList = ({ items }: Props) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={items}
      renderItem={(item) => (
        <List.Item key={item.id}>
          <List.Item.Meta
            title={<NavLink to={`/episodes/${item.id}`}>{item.name}</NavLink>}
            description={item.episode}
          />
        </List.Item>
      )}
    />
  );
};

export default EpisodesList;
