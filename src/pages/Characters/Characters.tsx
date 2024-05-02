import React, { useCallback, useRef, useState } from "react";
import { CharacterData } from "../../components/Character";
import { CharactersList } from "../../components/CharactersList";
import { Card, Flex, Form, Select, Typography } from "antd";
import { OrderDirection, useArrayOrder } from "../../hooks/useArrayOrder";
import { useSearchParams } from "react-router-dom";
import { useGetData } from "../../hooks/useGetData";
import { compareByCreationDate } from "../../utils";

const { Title } = Typography;

const INITIAL_PAGE = 1;
export const Characters = () => {
  const [page, setPage] = useState(INITIAL_PAGE);
  const {
    data: charactersArray,
    loading,
    hasMore,
  } = useGetData<CharacterData>("character", page);

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
        <CharactersList
          loading={loading}
          items={sortedArray}
          style={{ overflow: "auto" }}
          lastItemRef={lastItemRef}
        />
      </Card>
    </>
  );
};
