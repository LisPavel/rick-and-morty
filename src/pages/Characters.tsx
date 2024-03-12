import React, { useState } from "react";
import characters from "../mock/characters.json";
import { CharacterData } from "../components/Character";
import CharactersList from "../components/CharactersList";
import { Card, Flex, Form, Select, Typography } from "antd";
import { compareByCreationDate } from "./Episodes";
import { OrderDirection, useArrayOrder } from "../hooks/useArrayOrder";

const { Title } = Typography;

const Characters = () => {
  const [charactersArray] = useState<CharacterData[]>(characters ?? []);
  const { array: sortedArray, toggleOrder } = useArrayOrder(
    charactersArray,
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
            <Title style={{ margin: 0 }}>Characters</Title>
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
        <CharactersList items={sortedArray} style={{ overflow: "auto" }} />
      </Card>
    </>
  );
};

export default Characters;
