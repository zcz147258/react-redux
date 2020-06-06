import React, { Component } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import obj from './index.less'
console.log(obj)
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 8 },
  };
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
    onFinish = values => {
      console.log('Success:', values);
    };
  
    onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    }
  render() {
    return (
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          <Form.Item
            label="用户名"
            className="first"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>记住我</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
    );
  }
}

export default Login;
