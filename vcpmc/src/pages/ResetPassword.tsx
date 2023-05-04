import React from 'react';
import styled from 'styled-components';
import { Form, Checkbox, Input, Button } from 'antd';
import logo from '../assets/logo.png';
import FormLogin from '../components/FormLogin';
import VN from '../assets/VNlogo.png';
import { DownOutlined } from '@ant-design/icons';
import FormResetPassword from '../components/FormResetPassword';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  background-color: var(--primary-color);
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  img {
    height: 200.5px;
    width: 260.5px;
    left: 0px;
    top: 0px;
    border-radius: 50%;
  }
`;

const Language = styled.p`
  position: fixed;
  top: 0;
  right: 0;
  margin-right: 30px;
  color: #fff;
  border: 1px solid #fff;
  padding: 5px 5px;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.015em;
  border-radius: 4px;

  img {
    margin: 0 5px;
    width: 22px;
    height: 22px;
  }
`;

const ResetPassword = () => {
  return (
    <Wrapper>
      <Language>
        Tiếng việt <img src={VN} alt="VN" />
        <DownOutlined />
      </Language>
      <img src={logo} alt="logo" />
      <FormResetPassword />
    </Wrapper>
  );
};

export default ResetPassword;
