import React, { useEffect, useRef } from "react";
import {
  Button,
  Card,
  Descriptions,
  DescriptionsProps,
  Flex,
  Space,
  Typography,
} from "antd";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import characters from "../mock/characters.json";
import { LeftOutlined } from "@ant-design/icons";
import { CharacterData } from "../components/Character";

const { Title } = Typography;
type Keys = keyof CharacterData;
const notDescriptionKeys: Keys[] = ["name", "image"];

const toDescProps = (item: CharacterData): DescriptionsProps["items"] => {
  return Object.entries(item)
    .filter(([key]) => !notDescriptionKeys.includes(key as Keys))
    .map(([key, value]) => ({
      label: key.replace(/^./, (match) => match.toUpperCase()),
      key,
      children: value,
    }));
};

const CharacterPage = () => {
  const { id } = useParams<{ id: string }>();
  const data = characters.find((c) => c.id.toString() === id);

  if (data == null) {
    return <Navigate to="/not-found" />;
  }

  const items = useRef(toDescProps(data));

  useEffect(() => {
    items.current = toDescProps(data);
  }, [data]);

  return (
    <Card title={<CharacterTitle data={data} />}>
      <Flex gap="middle">
        <img
          src={data.image}
          style={{
            maxHeight: "15rem",
            width: "auto",
            borderTopLeftRadius: "1rem",
            borderBottomLeftRadius: "1rem",
            alignSelf: "flex-start",
          }}
        />
        <Descriptions
          bordered
          column={{ xxl: 1 }}
          items={items.current}
          style={{ flexGrow: 1 }}
        />
      </Flex>
    </Card>
  );
};

interface TitleProps {
  data: CharacterData;
}

const CharacterTitle = ({ data }: TitleProps) => {
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

export default CharacterPage;
