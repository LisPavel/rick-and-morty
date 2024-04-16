import { Card, Descriptions, DescriptionsProps } from "antd";
import { useEffect, useRef } from "react";
import { Navigate, useParams } from "react-router-dom";
import { LocationData } from "../../components/Location";
import locations from "../../mock/location.json";
import { LocationTitle } from "./components/LocationTitle";

type Keys = keyof LocationData;

const toDescProps = (
  item: LocationData | undefined,
): DescriptionsProps["items"] => {
  return Object.entries(item ?? {})
    .filter(([key]) => (key as Keys) !== "name")
    .map(([key, value]) => ({
      label: key.replace(/^./, (match) => match.toUpperCase()),
      key,
      children: value,
    }));
};

export const LocationPage = () => {
  const { id } = useParams<{ id: string }>();
  const data = locations.find((l) => l.id.toString() === id);
  const items = useRef(toDescProps(data));

  useEffect(() => {
    items.current = toDescProps(data);
  }, [data]);

  if (data == null) {
    return <Navigate to="/not-found" />;
  }

  return (
    <Card title={<LocationTitle data={data} />}>
      <Descriptions
        bordered
        items={items.current}
        style={{ marginTop: "1rem" }}
      />
    </Card>
  );
};
