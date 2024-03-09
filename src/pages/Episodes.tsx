import React, { useState } from "react";
import episodes from "../mock/episode.json";
import { EpisodeData } from "../components/Episode";
import EpisodesList from "../components/EpisodesList";
import { Card, Typography } from "antd";

const { Title } = Typography;

const Episodes = () => {
  const [episodesArray] = useState<EpisodeData[]>(episodes ?? []);
  return (
    <>
      <Card title={<Title style={{ margin: 0 }}>Episodes</Title>}>
        <EpisodesList items={episodesArray} />
      </Card>
    </>
  );
};

export default Episodes;
