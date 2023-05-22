import React from 'react';
import SideMenu from '../components/SideMenu';
import PageContent from '../components/PageContent';
import styled from 'styled-components';
import UserInfo from '../components/UserInfo';

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

const Dashboard = () => {
  return (
    <>
      <UserInfo />
    </>
  );
};

export default Dashboard;
