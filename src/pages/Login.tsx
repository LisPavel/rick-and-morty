import React from "react";
import { Form, Input, Card, FormProps, Button } from "antd";
import { useAuth } from "../context/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

type FieldType = {
  username?: string;
  password?: string;
};
const { Item } = Form;
const { Password } = Input;

const Login = () => {
  const { user, login, logout } = useAuth();
  const location = useLocation();
  const from = location.state?.from || "/";
  const navigate = useNavigate();
  // TODO: remove console.logs
  const handleFinish: FormProps<Required<FieldType>>["onFinish"] = (values) => {
    console.log(values);
    login(values, () => navigate(from, { replace: true }));
  };
  const handleFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo,
  ) => {
    console.log(errorInfo);
  };
  // TODO: remove auth user info
  return (
    <Card style={{ maxWidth: "700px", margin: "auto" }}>
      <p>{user?.name || "not loggen in"}</p>
      {!!user && (
        <Button onClick={() => logout(() => navigate("/"))}>logout</Button>
      )}
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        onFinish={handleFinish}
        onFinishFailed={handleFinishFailed}
      >
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

export default Login;
