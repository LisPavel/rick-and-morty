import React, { useEffect, useRef } from "react";
import {
  Button,
  Card,
  Descriptions,
  DescriptionsProps,
  Space,
  Typography,
} from "antd";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import locations from "../mock/location.json";
import { LeftOutlined } from "@ant-design/icons";
import { LocationData } from "../components/Location";

const { Title } = Typography;
type Keys = keyof LocationData;

const toDescProps = (item: LocationData): DescriptionsProps["items"] => {
  return Object.entries(item)
    .filter(([key]) => (key as Keys) !== "name")
    .map(([key, value]) => ({
      label: key.replace(/^./, (match) => match.toUpperCase()),
      key,
      children: value,
    }));
};

const LocationPage = () => {
  const { id } = useParams<{ id: string }>();
  const data = locations.find((l) => l.id.toString() === id);

  if (data == null) {
    return <Navigate to="/not-found" />;
  }

  const items = useRef(toDescProps(data));

  useEffect(() => {
    items.current = toDescProps(data);
  }, [data]);

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

interface TitleProps {
  data: LocationData;
}

const LocationTitle = ({ data }: TitleProps) => {
  const navigate = useNavigate();
  return (
    <Space>
      <Button
        type="primary"
        shape="circle"
        icon={<LeftOutlined />}
        onClick={() => navigate(-1)}
      />

      <Title level={3} style={{ margin: 0 }}>
        {data.name}
      </Title>
    </Space>
  );
};

export default LocationPage;
