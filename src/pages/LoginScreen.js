import React from "react";

import { Form, Icon, Input, Button, Checkbox } from "antd";
import "./LoginScreen.css";
const FormItem = Form.Item;

class LoginScreen extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="form-wrapper">
        <div className="form-container">
          <div>{/*put your logo code here*/}</div>
          <div>
            <Form onSubmit={this.handleSubmit} className="login-form">
              <FormItem>
                {getFieldDecorator("IDNumber", {
                  rules: [
                    { required: true, message: "Please input your ID Number!" }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="Enter Your ID Number"
                  />
                )}
              </FormItem>

              <FormItem>
                <Button
                  className="login-screen-button"
                  type="primary"
                  htmlType="submit"
                >
                  Log in
                </Button>
              </FormItem>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(LoginScreen);

export default WrappedNormalLoginForm;
