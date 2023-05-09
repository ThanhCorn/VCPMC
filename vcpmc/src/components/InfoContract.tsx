import React from 'react';
import styled from 'styled-components';

const InfoContract = () => {
  return (
    <Wrapper>
      <div>
        <h3 style={{ display: 'flex', alignItems: 'center' }}>
          Số hợp đồng: <p>BH123</p>
        </h3>
        <h3>
          Tên hợp đồng: <p>Hợp đồng ủy quyền tác phẩm âm nhạc</p>
        </h3>
      </div>
      <div></div>
      <div></div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
export default InfoContract;
