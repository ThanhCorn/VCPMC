import React, { useState } from 'react';
import { Form, Checkbox, Input, Button } from 'antd';
import styled from 'styled-components';
import ConfirmFormEmail from './ConfirmFormEmail';

const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;

  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    letter-spacing: -0.002em;
  }
  .input {
    width: 300px;
    :hover {
      border: 2px solid green;
    }
  }
  .text-content {
    h1 {
      fontsize: 36px;
      font-weight: 700;
    }
    h3 {
      weight: 400;
      color: #fff;
      font-weight: 100;
      font-size: 16px;
    }
  }
`;

const FormItem = styled(Form.Item)`
  position: relative;
  display: flex;
  flex-direction: column;
  color: #fff;
  button {
    align-items: center;
    justify-content: center;
    display: flex;
    margin: 0 auto;
    border-radius: 8px;
    background-color: #ff7506;
  }
  .btn-forget {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    margin-bottom: 10px;
    color: #ff7506;
    text-decoration: underline;
    background-color: transparent;
    border: none;
    outline: none;
    :hover {
      color: none;
    }
  }
`;

const FormLogin = () => {
  const [forgetPassword, setForgetPassword] = useState(true);
  return (
    <>
      {forgetPassword ? (
        <FormContainer name="login-form" layout="vertical">
          <h1>Đăng nhập</h1>
          <span style={{ color: '#fff' }}>Tên đăng nhập</span>
          <FormItem
            required={false}
            name="email"
            rules={[
              { required: true, message: 'Hãy điền thông tin đăng nhập!' },
            ]}
          >
            <Input className="input" />
          </FormItem>
          <span style={{ color: '#fff' }}>Password</span>
          <FormItem
            required={false}
            name="password"
            rules={[{ required: true, message: 'Hãy điền mật khẩu của bạn!' }]}
          >
            <Input.Password className="input" />
          </FormItem>
          <FormItem
            name="remember"
            valuePropName="checked"
            wrapperCol={{ span: 24 }}
          >
            <Checkbox style={{ color: '#fff' }}>Ghi nhớ đăng nhập</Checkbox>
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              block
              size="large"
              style={{ width: '150px', backgroundColor: '#FF7506' }}
            >
              Đăng nhập
            </Button>
          </FormItem>
          <FormItem>
            <Button
              className="btn-forget"
              onClick={() => setForgetPassword(!forgetPassword)}
            >
              Quên mật khẩu?
            </Button>
          </FormItem>
        </FormContainer>
      ) : (
        <ConfirmFormEmail />
      )}
    </>
  );
};

export default FormLogin;
