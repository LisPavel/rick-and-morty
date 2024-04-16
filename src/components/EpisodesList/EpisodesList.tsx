import * as React from "react";
import { EpisodeData } from "../Episode";
import { List } from "antd";
import { NavLink } from "react-router-dom";
// import { List, ListItem } from "../List";
import "./EpisodesList.scss";

interface Props {
  items: EpisodeData[];
  loading: boolean;
  hasMore: boolean;
  lastItemRef?: React.Ref<HTMLElement>;
}

export const EpisodesList = ({ items, loading, lastItemRef }: Props) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={items}
      renderItem={(item, index) => {
        if (index + 1 === items.length - 5) {
          return (
            <List.Item key={item.id} ref={lastItemRef}>
              <List.Item.Meta
                title={
                  <NavLink to={`/episodes/${item.id}`}>{item.name}</NavLink>
                }
                description={item.episode}
              />
            </List.Item>
          );
        }
        return (
          <List.Item key={item.id}>
            <List.Item.Meta
              title={<NavLink to={`/episodes/${item.id}`}>{item.name}</NavLink>}
              description={item.episode}
            />
          </List.Item>
        );
      }}
      loading={loading}
    />
  );
};
