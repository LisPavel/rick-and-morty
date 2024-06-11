import { Button, Card, Form, FormProps, Input } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

type FieldType = {
  username?: string;
  password?: string;
};
const { Item } = Form;
const { Password } = Input;

export const Login = () => {
  const { login } = useAuth();
  const location = useLocation();
  const from = location.state?.from || "/";
  const navigate = useNavigate();
  const handleFinish: FormProps<Required<FieldType>>["onFinish"] = (values) => {
    login(values, () => navigate(from, { replace: true }));
  };
  return (
    <Card style={{ maxWidth: "700px", margin: "auto" }}>
      <Form name="basic" labelCol={{ span: 8 }} onFinish={handleFinish}>
        <Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Для входа введите логин" }]}
        >
          <Input />
        </Item>
        <Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Введите пароль для входа" }]}
        >
          <Password />
        </Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};
