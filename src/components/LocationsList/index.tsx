import React from "react";
import Location, { LocationData } from "../Location";
import "./index.scss";
import { List, ListItem } from "../List";

interface Props {
  items: LocationData[];
}

const LocationsList = ({ items }: Props) => {
  return (
    <List className="locations-list">
      {items.map((l) => (
        <ListItem key={l.id} className="locations-list-item">
          <Location data={l} />
        </ListItem>
      ))}
    </List>
  );
};

export default LocationsList;
