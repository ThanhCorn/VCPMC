import React from 'react';
import styled from 'styled-components';
import SideMenu from '../../../components/SideMenu';
import PageContent from '../../../components/PageContent';
import FormDetailProduct from '../../../components/FormDetailProduct';

const DetailProduct = () => {
  return (
    <Wrapper>
      <FormDetailProduct />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  background-color: var(--primary-color);
`;
export default DetailProduct;
