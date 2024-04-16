import { LocationData } from "@/components/Location";
import { LeftOutlined } from "@ant-design/icons";
import { Button, Space, Typography } from "antd";
import { useNavigate } from "react-router-dom";

interface TitleProps {
  data: LocationData;
}

export const LocationTitle = ({ data }: TitleProps) => {
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
