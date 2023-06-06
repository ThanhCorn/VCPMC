import { RightOutlined } from '@ant-design/icons'
import React from 'react'
import styled from 'styled-components'
import ListAuthorized from '../../../components/Management/Authority/ListAuthorized'

const AuthorizedUnit = () => {
  return (
    <Wrapper>
      <ListAuthorized />
    </Wrapper>
  )
}

export default AuthorizedUnit

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  flex: 1;
  background-color: var(--primary-color);
`
