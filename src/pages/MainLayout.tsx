import React, { useContext, useEffect } from 'react'
import SideMenu from '../components/SideMenu'
import PageContent from '../components/PageContent'
import styled from 'styled-components'
import { UserContext } from '../context/UserContext'
import { Navigate } from 'react-router-dom'

interface MainLayoutProps {
  children?: React.ReactNode
}
const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { isLogin, setIsLogin, currentUser } = useContext(UserContext)

  return (
    <Wrapper>
      <SideMenu />
      <PageContent />
      {isLogin ? children : <Navigate to='/' />}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`
export default MainLayout
