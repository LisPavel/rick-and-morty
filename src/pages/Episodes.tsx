import React, { useState } from "react";
import episodes from "../mock/episode.json";
import { EpisodeData } from "../components/Episode";
import EpisodesList from "../components/EpisodesList";

const Episodes = () => {
  const [episodesArray] = useState<EpisodeData[]>(episodes ?? []);
  return (
    <>
      <h1>Episodes</h1>
      <EpisodesList items={episodesArray} />
    </>
  );
};

export default Episodes;
