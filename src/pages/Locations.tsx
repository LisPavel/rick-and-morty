import React, { /*  useEffect, */ useCallback, useRef, useState } from "react";
import { LocationsList } from "../components/LocationsList";
import { LocationData } from "../components/Location";
import { Card, Flex, Form, Select, Typography } from "antd";
import { compareByCreationDate } from "./Episodes";
import { OrderDirection, useArrayOrder } from "../hooks/useArrayOrder";
import { useSearchParams } from "react-router-dom";
import { useGetData } from "../hooks/useGetData";

const { Title } = Typography;

const Locations = () => {
  const [page, setPage] = useState(1);
  const {
    data: locationsArray,
    loading,
    hasMore,
  } = useGetData<LocationData>("location", page);

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
        <LocationsList
          loading={loading}
          lastItemRef={lastItemRef}
          items={sortedArray}
        />
      </Card>
    </>
  );
};

export default Locations;
