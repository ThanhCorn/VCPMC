import React from 'react';
import styled from 'styled-components';
import SideMenu from '../../components/SideMenu';
import PageContent from '../../components/PageContent';
import FormInfoContractDetail from '../../components/FormInfoContractDetail';

const InfoContractDetail = () => {
  return (
    <Wrapper>
      <FormInfoContractDetail />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  background-color: var(--primary-color);
`;
export default InfoContractDetail;
