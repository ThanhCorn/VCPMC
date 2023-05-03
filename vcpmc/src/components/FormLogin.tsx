import React from 'react'
import { Form, Checkbox, Input, Button } from 'antd';
import styled from 'styled-components';

const FormContainer = styled(Form)`
    display: flex;
    flex-direction: column;

    h1{
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        letter-spacing: -0.002em;
    }
    input{
           border: none;
    background: #2B2B3F;
    width: var(--input-width);
        :hover{
            border: 1px solid #347AFF;
        }
    }
`

const FormItem = styled(Form.Item)`

    color: #fff;

     button{
        align-items: center;
        justify-content: center;
        display: flex;
        margin:0 auto;
    }
    .btn-forget{
        color: red;
        text-decoration: underline;
        background-color: transparent;
        border:none;
        outline: none;
    }
`



const FormLogin = () => {
    return (
        <FormContainer name="login-form" layout='vertical' >
            <h1>Đăng nhập</h1>
            <FormItem
                required={false}
                label="Tên đăng nhập"
                name="email"
                style={{ color: "#fff" }}
                rules={[{ required: true, message: 'Hãy điền thông tin đăng nhập!' }]}

            >
                <Input />
            </FormItem>
            <FormItem
                required={false}
                label="Password"
                name="password"
                style={{ color: "#fff" }}
                rules={[{ required: true, message: 'Hãy điền mật khẩu của bạn!' }]}
            >
                <Input />
            </FormItem>
            <FormItem name="remember" valuePropName="checked" wrapperCol={{ span: 24 }}>
                <Checkbox style={{ color: "#fff" }}>Ghi nhớ đăng nhập</Checkbox>
            </FormItem>
            <FormItem>
                <Button type="primary" htmlType="submit" block size="large" style={{ width: "150px" }}>
                    Đăng nhập
                </Button>
            </FormItem>
            <FormItem>
                <Button className="btn-forget">
                    Quên mật khẩu?
                </Button>
            </FormItem>
        </FormContainer>
    )
}

export default FormLogin