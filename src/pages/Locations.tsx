import React, { useState } from "react";
import LocationsList from "../components/LocationsList";
import items from "../mock/location.json";
import { LocationData } from "../components/Location";
import { Typography } from "antd";

const { Title } = Typography;

const Locations = () => {
  const [locationsArray] = useState<LocationData[]>(items ?? []);
  return (
    <>
      <Title>Locations</Title>
      <LocationsList items={locationsArray} />
    </>
  );
};

export default Locations;
