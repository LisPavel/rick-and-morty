import { useNavigate } from "react-router-dom";
import { EpisodeData } from "../../../../components/Episode";
import { Button, Space, Typography } from "antd";
import { LeftOutlined } from "@ant-design/icons";

interface TitleProps {
  data: EpisodeData;
}

export const EpisodeTitle = ({ data }: TitleProps) => {
  const navigate = useNavigate();
  return (
    <Space>
      <Button
        type="primary"
        shape="circle"
        icon={<LeftOutlined />}
        onClick={() => navigate(-1)}
      />

      <Typography.Title level={3} style={{ margin: 0 }}>
        {data.name}
      </Typography.Title>
    </Space>
  );
};
