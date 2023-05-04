import React from 'react';
import SideMenu from '../components/SideMenu';
import PageContent from '../components/PageContent';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

const Dashboard = () => {
  return (
    <Wrapper>
      <SideMenu />
      <PageContent />
    </Wrapper>
  );
};

export default Dashboard;
