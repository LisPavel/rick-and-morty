import React from "react";
import Location, { LocationData } from "../Location";
import "./index.scss";

interface Props {
  items: LocationData[];
}

const LocationsList = ({ items }: Props) => {
  return (
    <ul className="locations-list">
      {items.map((l) => (
        <li key={l.id} className="locations-list-item">
          <Location data={l} />
        </li>
      ))}
    </ul>
  );
};

export default LocationsList;
