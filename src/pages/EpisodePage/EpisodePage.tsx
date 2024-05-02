import { Card, Descriptions, DescriptionsProps } from "antd";
import { useEffect, useRef } from "react";
import { Navigate, useParams } from "react-router-dom";
import { EpisodeData } from "../../components/Episode";
import episodes from "../../mock/episode.json";
import { EpisodeTitle } from "./components/EpisodeTitle";

type Keys = keyof EpisodeData;

const toDescProps = (
  item: EpisodeData | undefined,
): DescriptionsProps["items"] => {
  return Object.entries(item ?? [])
    .filter(([key]) => (key as Keys) !== "episode")
    .map(([key, value]) => ({
      label: key.replace(/^./, (match) => match.toUpperCase()),
      key,
      children: value,
    }));
};

export const EpisodePage = () => {
  const { id } = useParams<{ id: string }>();
  const data = episodes.find((e) => e.id === Number(id));

  const items = useRef(toDescProps(data));

  useEffect(() => {
    items.current = toDescProps(data);
  }, [data]);

  if (data == null) {
    return <Navigate to="/not-found" />;
  }

  return (
    <Card title={<EpisodeTitle data={data} />}>
      <Descriptions
        bordered
        items={items.current}
        style={{ marginTop: "1rem" }}
      />
    </Card>
  );
};
