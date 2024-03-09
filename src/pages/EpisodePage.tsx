import React, { useEffect, useRef } from "react";
import { EpisodeData } from "../components/Episode";
import {
  Button,
  Card,
  Descriptions,
  DescriptionsProps,
  Space,
  Typography,
} from "antd";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import episodes from "../mock/episode.json";
import { LeftOutlined } from "@ant-design/icons";

const { Title } = Typography;
type Keys = keyof EpisodeData;

const toDescProps = (item: EpisodeData): DescriptionsProps["items"] => {
  return Object.entries(item)
    .filter(([key]) => (key as Keys) !== "episode")
    .map(([key, value]) => ({
      label: key.replace(/^./, (match) => match.toUpperCase()),
      key,
      children: value,
    }));
};

const EpisodePage = () => {
  const { id } = useParams<{ id: string }>();
  const data = episodes.find((e) => e.id === Number(id));

  if (data == null) {
    return <Navigate to="/not-found" />;
  }

  const items = useRef(toDescProps(data));

  useEffect(() => {
    items.current = toDescProps(data);
  }, [data]);

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

interface TitleProps {
  data: EpisodeData;
}

const EpisodeTitle = ({ data }: TitleProps) => {
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

export default EpisodePage;
