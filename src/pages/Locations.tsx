import React, { useState } from "react";
import LocationsList from "../components/LocationsList";
import items from "../mock/location.json";
import { LocationData } from "../components/Location";
import { Card, Flex, Form, Select, Typography } from "antd";
import { compareByCreationDate } from "./Episodes";
import { OrderDirection, useArrayOrder } from "../hooks/useArrayOrder";

const { Title } = Typography;

const Locations = () => {
  const [locationsArray] = useState<LocationData[]>(items ?? []);
  const { array: sortedArray, toggleOrder } = useArrayOrder(
    locationsArray,
    compareByCreationDate,
  );
  const handleChangeSortDirection = (value: OrderDirection) => {
    toggleOrder(value ?? "");
  };
  return (
    <>
      <Card
        title={
          <Flex
            style={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <Title style={{ margin: 0 }}>Locations</Title>
            <Form.Item label="Sort by creation date" style={{ margin: 0 }}>
              <Select
                style={{ width: 120 }}
                allowClear
                options={[
                  { value: "asc", label: "Ascending" },
                  { value: "desc", label: "Descending" },
                ]}
                onChange={handleChangeSortDirection}
              />
            </Form.Item>
          </Flex>
        }
      >
        <LocationsList items={sortedArray} />
      </Card>
    </>
  );
};

export default Locations;
