import { RightOutlined } from '@ant-design/icons';
import React from 'react';
import styled from 'styled-components';

const FormAddInfoRecord = () => {
  return (
    <Wrapper>
      <p>
        Quản lý <RightOutlined /> Quản lý hợp đồng <RightOutlined /> Thêm bản
        ghi
      </p>
      <h1>Thêm thông tin bản ghi</h1>
      <div className="content"></div>
    </Wrapper>
  );
};

export default FormAddInfoRecord;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 50px;
  margin-left: 50px;
  .content {
    display: flex;
    align-self: center;
    background: #2b2b3f;
    width: 670px;
    height: 570px;
  }
`;
