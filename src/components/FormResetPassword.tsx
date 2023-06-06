import React, { useState } from 'react'
import { Form, Input, Button } from 'antd'
import styled from 'styled-components'

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
    width: 585px;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
 h1 {
    color: #FF4747;
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
  }
`

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
`

const FormResetPassword = () => {
  const [forgetPassword, setForgetPassword] = useState(true)
  const [isConnected, setIsConnected] = useState(true)
  return (
    <>
      {!isConnected ? (
        <FormContainer name='login-form' layout='vertical'>
          <h1>Đặt lại mật khẩu</h1>
          <span style={{ color: '#fff' }}>Mật khẩu mới</span>
          <FormItem
            required={false}
            name='password'
            rules={[{ required: true, message: 'Hãy điền thông tin mật khẩu!' }]}
          >
            <Input.Password className='input' />
          </FormItem>
          <span style={{ color: '#fff' }}>Nhập lại mật khẩu mới</span>
          <FormItem
            required={false}
            name='confirmPassword'
            rules={[{ required: true, message: 'Hãy xác nhận mật khẩu của bạn!' }]}
          >
            <Input.Password className='input' />
          </FormItem>
          <FormItem>
            <Button
              type='primary'
              htmlType='submit'
              block
              size='large'
              style={{ width: '150px', backgroundColor: '#FF7506' }}
            >
              Lưu mật khẩu
            </Button>
          </FormItem>
        </FormContainer>
      ) : (
        <FormContainer name='login-form' layout='vertical'>
          <div className='text-content'>
            <h1>Không thể kết nối!!</h1>
            <h3>
              Dường như đã có chút trục trặc hoặc link này đã hết hạn. Vui lòng thử lại hoặc yêu cầu gửi lại link để đặt
              lại mật khẩu của bạn.
            </h3>
          </div>
          <FormItem>
            <Button
              type='primary'
              htmlType='submit'
              block
              size='large'
              style={{
                width: '150px',
                backgroundColor: 'transparent',
                color: '#FF7506',
                border: '1px solid #FF7506',
                marginTop: '20px'
              }}
            >
              Yêu cầu gửi lại link
            </Button>
          </FormItem>
        </FormContainer>
      )}
    </>
  )
}

export default FormResetPassword
