import React, { useState } from "react";
import LocationsList from "../components/LocationsList";
import items from "../mock/location.json";
import { LocationData } from "../components/Location";

const Locations = () => {
  const [locationsArray] = useState<LocationData[]>(items ?? []);
  return (
    <>
      <h1>Locations</h1>
      <LocationsList items={locationsArray} />
    </>
  );
};

export default Locations;
