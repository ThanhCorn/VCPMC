import React from 'react';
import styled from 'styled-components';
import SideMenu from '../../../components/SideMenu';
import PageContent from '../../../components/PageContent';
import FormAddInfoRecord from '../../../components/Management/FormAddInfoRecord';

const AddInfoRecord = () => {
  return (
    <Wrapper>
      <FormAddInfoRecord />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  background-color: var(--primary-color);
`;
export default AddInfoRecord;
