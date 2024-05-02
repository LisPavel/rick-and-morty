import React from "react";
import "./Episode.scss";

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

export const Episode = ({ data }: Props) => {
  return (
    <div className="episode">
      <div className="episode-name">{data.name}</div>
      <div className="episode-number">{data.episode}</div>
      <div className="episode-air-date">{data.air_date}</div>
      <div className="episode-created">{data.created}</div>
    </div>
  );
};
