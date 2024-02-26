import * as React from "react";
import "./index.scss";
import Episode, { EpisodeData } from "../Episode";

interface Props {
  items: EpisodeData[];
}

const EpisodesList = ({ items }: Props) => {
  return (
    <ul className="episodes-list">
      {items.map((e) => (
        <li key={e.id} className="episodes-list-item">
          <Episode data={e} />
        </li>
      ))}
    </ul>
  );
};

export default EpisodesList;
