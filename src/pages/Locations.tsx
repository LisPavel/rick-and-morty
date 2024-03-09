import React, { useState } from "react";
import LocationsList from "../components/LocationsList";
import items from "../mock/location.json";
import { LocationData } from "../components/Location";
import { Card, Typography } from "antd";

const { Title } = Typography;

const Locations = () => {
  const [locationsArray] = useState<LocationData[]>(items ?? []);
  return (
    <>
      <Card title={<Title style={{ margin: 0 }}>Locations</Title>}>
        <LocationsList items={locationsArray} />
      </Card>
    </>
  );
};

export default Locations;
