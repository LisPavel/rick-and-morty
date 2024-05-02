import { Card, Flex, Form, Select, Typography } from "antd";
import { useCallback, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { EpisodeData } from "../../components/Episode";
import { EpisodesList } from "../../components/EpisodesList";
import { OrderDirection, useArrayOrder } from "../../hooks/useArrayOrder";
import { useGetData } from "../../hooks/useGetData";
import { compareByCreationDate } from "../../utils";

const { Title } = Typography;

const INITIAL_PAGE = 1;
export const Episodes = () => {
  const [page, setPage] = useState(INITIAL_PAGE);
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
