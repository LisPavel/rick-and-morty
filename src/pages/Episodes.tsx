import React, { useState } from "react";
import episodes from "../mock/episode.json";
import { EpisodeData } from "../components/Episode";
import EpisodesList from "../components/EpisodesList";
import { Typography } from "antd";

const { Title } = Typography;

const Episodes = () => {
  const [episodesArray] = useState<EpisodeData[]>(episodes ?? []);
  return (
    <>
      <Title>Episodes</Title>
      <EpisodesList items={episodesArray} />
    </>
  );
};

export default Episodes;
