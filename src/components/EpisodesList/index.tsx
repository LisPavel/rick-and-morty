import * as React from "react";
import "./index.scss";
import Episode, { EpisodeData } from "../Episode";
import { List, ListItem } from "../List";

interface Props {
  items: EpisodeData[];
}

const EpisodesList = ({ items }: Props) => {
  return (
    <List className="episodes-list">
      {items.map((e) => (
        <ListItem key={e.id} className="episodes-list-item">
          <Episode data={e} />
        </ListItem>
      ))}
    </List>
  );
};

export default EpisodesList;
