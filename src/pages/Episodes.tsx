import React, { useCallback, useRef, useState } from "react";
import { EpisodeData } from "../components/Episode";
import { EpisodesList } from "../components/EpisodesList";
import { Card, Flex, Form, Select, Typography } from "antd";
import { OrderDirection, useArrayOrder } from "../hooks/useArrayOrder";
import { useSearchParams } from "react-router-dom";
import { useGetData } from "../hooks/useGetData";

const { Title } = Typography;

export const compareByCreationDate: <T extends { created: string }>(
  a: T,
  b: T,
) => number = (a, b) => {
  return new Date(a.created).getTime() - new Date(b.created).getTime();
};

const Episodes = () => {
  const [page, setPage] = useState(1);
  const {
    data: episodesArray,
    loading,
    hasMore,
  } = useGetData<EpisodeData>("episode", page);

  const observer = useRef<IntersectionObserver | null>(null);
  const lastItemRef = useCallback(
    (node: HTMLElement | null) => {
      if (loading) {
        return;
      }
      if (observer.current) {
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver(([node]) => {
        if (!node) return;
        if (!node.isIntersecting || !hasMore) return;
        setPage((prevState) => prevState + 1);
      });
      if (node) {
        observer.current.observe(node);
      }
    },
    [loading, hasMore],
  );

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
        <EpisodesList
          items={sortedArray}
          loading={loading}
          hasMore={hasMore}
          lastItemRef={lastItemRef}
        />
      </Card>
    </>
  );
};

export default Episodes;
