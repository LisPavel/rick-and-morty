import React, { useState } from "react";
import episodes from "../mock/episode.json";
import { EpisodeData } from "../components/Episode";
import EpisodesList from "../components/EpisodesList";
import { Card, Flex, Form, Select, Typography } from "antd";
import { OrderDirection, useArrayOrder } from "../hooks/useArrayOrder";

const { Title } = Typography;

export const compareByCreationDate: <T extends { created: string }>(
  a: T,
  b: T,
) => number = (a, b) => {
  return new Date(a.created).getTime() - new Date(b.created).getTime();
};

const Episodes = () => {
  const [episodesArray] = useState<EpisodeData[]>(episodes ?? []);
  const { array: sortedArray, toggleOrder } = useArrayOrder<EpisodeData>(
    episodesArray,
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
            <Title style={{ margin: 0 }}>Episodes</Title>
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
        <EpisodesList items={sortedArray} />
      </Card>
    </>
  );
};

export default Episodes;
