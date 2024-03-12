import React, { /*  useEffect, */ useState } from "react";
import LocationsList from "../components/LocationsList";
import items from "../mock/location.json";
import { LocationData } from "../components/Location";
import { Card, Flex, Form, Select, Typography } from "antd";
import { compareByCreationDate } from "./Episodes";
import { OrderDirection, useArrayOrder } from "../hooks/useArrayOrder";
import { useSearchParams } from "react-router-dom";

const { Title } = Typography;

const Locations = () => {
  const [locationsArray] = useState<LocationData[]>(items ?? []);
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    array: sortedArray,
    order,
    toggleOrder,
  } = useArrayOrder(
    locationsArray,
    compareByCreationDate,
    (searchParams.get("order") as OrderDirection) ?? undefined,
  );
  const handleChangeSortDirection = (value: OrderDirection) => {
    setSearchParams(value ? { order: value } : {});
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
                value={order}
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
