import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import styled from 'styled-components';
import FormLogin from './FormLogin';

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

const ConfirmFormEmail = () => {
  const [forgetPassword, setForgetPassword] = useState(true);
  const [hideElements, setHideElements] = useState(false);

  const onFinish = (values: any) => {
    setHideElements(!hideElements);
  };
  return (
    <>
      {forgetPassword ? (
        <FormContainer name="login-form" layout="vertical" onFinish={onFinish}>
          <div className="text-content">
            <h1>Khôi phục lại mật khẩu</h1>
            {!hideElements ? (
              <h3>
                Vui lòng nhập địa chỉ email đã đăng ký để yêu cầu khôi phục mật
                khẩu
              </h3>
            ) : (
              <h3>
                Link khôi phục mật khẩu đã được gửi vào mail của bạn. Vui lòng
                kiểm tra mail.
                <br />
                Click vào đường link được đính kèm trong mail để chuyển đến
                trang đặt lại mật khẩu.
              </h3>
            )}
          </div>
          {!hideElements && (
            <>
              <span style={{ color: '#fff' }}>Email</span>
              <FormItem
                required={false}
                name="email"
                rules={[
                  {
                    required: true,
                    message: 'Hãy điền thông tin email của bạn!',
                  },
                  {
                    type: 'email',
                    message: 'Email không hợp lệ!',
                  },
                ]}
              >
                <Input className="input" style={{ width: '550px' }} />
              </FormItem>
            </>
          )}
          {!hideElements && (
            <FormItem>
              <Button
                type="primary"
                htmlType="submit"
                block
                size="large"
                style={{
                  width: '150px',
                  backgroundColor: '#FF7506',
                  marginTop: '10px',
                }}
              >
                Xác nhận
              </Button>
            </FormItem>
          )}
          <FormItem>
            <Button
              className="btn-forget"
              onClick={() => setForgetPassword(!forgetPassword)}
            >
              Quay lại đăng nhập
            </Button>
          </FormItem>
        </FormContainer>
      ) : (
        <FormLogin />
      )}
    </>
  );
};

export default ConfirmFormEmail;
