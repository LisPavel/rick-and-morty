import React from "react";
import "./index.scss";

export interface EpisodeData {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  created: string;
}

interface Props {
  data: EpisodeData;
}

const Episode = ({ data }: Props) => {
  return (
    <div className="episode">
      <div className="episode-name">{data.name}</div>
      <div className="episode-number">{data.episode}</div>
      <div className="episode-air-date">{data.air_date}</div>
      <div className="episode-created">{data.created}</div>
    </div>
  );
};

export default Episode;
