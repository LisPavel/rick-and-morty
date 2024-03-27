import React, { useState } from "react";
import characters from "../mock/characters.json";
import { CharacterData } from "../components/Character";
import CharactersList from "../components/CharactersList";
import { Card, Flex, Form, Select, Typography } from "antd";
import { compareByCreationDate } from "./Episodes";
import { OrderDirection, useArrayOrder } from "../hooks/useArrayOrder";
import { useSearchParams } from "react-router-dom";

const { Title } = Typography;

const Characters = () => {
  const [charactersArray] = useState<CharacterData[]>(characters ?? []);
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    array: sortedArray,
    order,
    toggleOrder,
  } = useArrayOrder(
    charactersArray,
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
            <Title style={{ margin: 0 }}>Characters</Title>
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
        <CharactersList items={sortedArray} style={{ overflow: "auto" }} />
      </Card>
    </>
  );
};

export default Characters;
