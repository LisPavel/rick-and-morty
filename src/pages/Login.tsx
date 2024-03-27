import React from "react";
import { Form, Input, Card, FormProps, Button } from "antd";

type FieldType = {
  username?: string;
  password?: string;
};
const { Item } = Form;
const { Password } = Input;

const Login = () => {
  const handleFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log(values);
  };
  const handleFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo,
  ) => {
    console.log(errorInfo);
  };
  return (
    <Card style={{ maxWidth: "700px", margin: "auto" }}>
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
