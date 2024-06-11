import "./Location.scss";

export interface LocationData {
  id: number;
  name: string;
  type: string;
  dimension: string;
  created: string;
}

interface Props {
  data: LocationData;
}

export const Location = ({ data }: Props) => {
  return (
    <div className="location">
      <div className="location-name">{data.name}</div>
      <div className="location-type">{data.type}</div>
      <div className="location-dimension">{data.dimension}</div>
      <div className="location-created">{data.created}</div>
    </div>
  );
};
