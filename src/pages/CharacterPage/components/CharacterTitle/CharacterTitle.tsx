import { LeftOutlined } from "@ant-design/icons";
import { Button, Space, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { CharacterData } from "../../../../components/Character";

const { Title } = Typography;

interface TitleProps {
  data: CharacterData;
}

export const CharacterTitle = ({ data }: TitleProps) => {
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
