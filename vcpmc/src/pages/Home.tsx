import React from 'react'
import styled from 'styled-components'
import { Form,Checkbox, Input, Button } from 'antd';
import logo from '../assets/logo.png'
import FormLogin from '../components/FormLogin';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  background-color: var(--primary-color);
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  img{
    height: 200.5px;    
    width: 260.5px;
    left: 0px;
    top: 0px;
    border-radius: 50%;
  }
`





const Home = () => {
    return (
        <Wrapper>
            <img src={logo} alt="logo" />
            <FormLogin />
        </Wrapper>
    )
}

export default Home