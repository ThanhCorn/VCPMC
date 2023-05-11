import React from 'react';
import styled from 'styled-components';
import SideMenu from '../../components/SideMenu';
import PageContent from '../../components/PageContent';
import FormAddNewContractAuthority from '../../components/FormAddNewContractAuthority';

const AddNewContractAuthority = () => {
  return (
    <Wrapper>
      <SideMenu />
      <PageContent />
      <FormAddNewContractAuthority />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  background-color: var(--primary-color);
`;
export default AddNewContractAuthority;