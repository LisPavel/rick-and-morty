import React, { useState } from "react";
import episodes from "../mock/episode.json";
import { EpisodeData } from "../components/Episode";
import EpisodesList from "../components/EpisodesList";
import { Card, Flex, Form, Select, Typography } from "antd";
import { OrderDirection, useArrayOrder } from "../hooks/useArrayOrder";
import { useSearchParams } from "react-router-dom";

const { Title } = Typography;

export const compareByCreationDate: <T extends { created: string }>(
  a: T,
  b: T,
) => number = (a, b) => {
  return new Date(a.created).getTime() - new Date(b.created).getTime();
};

const Episodes = () => {
  const [episodesArray] = useState<EpisodeData[]>(episodes ?? []);
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    array: sortedArray,
    order,
    toggleOrder,
  } = useArrayOrder(
    episodesArray,
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
            <Title style={{ margin: 0 }}>Episodes</Title>
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
        <EpisodesList items={sortedArray} />
      </Card>
    </>
  );
};

export default Episodes;
