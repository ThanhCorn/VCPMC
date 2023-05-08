import React, { useState } from 'react';
import styled from 'styled-components';
import SideMenu from '../components/SideMenu';
import PageContent from '../components/PageContent';
import { RightOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import AuthorizedContract from '../components/AuthorizedContract';
import MiningContract from '../components/MiningContract';

const ContractManagement = () => {
  const [isAuthorizingOrMining, setIsisAuthorizingOrMining] = useState(false);

  return (
    <Wrapper>
      <SideMenu />
      <div className="content">
        <PageContent />
        <h4 style={{ color: 'white' }}>
          Quản lý <RightOutlined /> Quản lý hợp đồng
        </h4>
        {!isAuthorizingOrMining ? (
          <h1>Danh sách hợp đồng</h1>
        ) : (
          <h1>Danh sách hợp đồng khai thác</h1>
        )}
        <div>
          <Button
            type="primary"
            onClick={() => setIsisAuthorizingOrMining(false)}
            className={`button-1 ${!isAuthorizingOrMining ? 'active' : ''}`}
          >
            Hợp đồng ủy quyền
          </Button>
          <Button
            onClick={() => setIsisAuthorizingOrMining(true)}
            type="primary"
            className={`button-2 ${isAuthorizingOrMining ? 'active' : ''}`}
          >
            Hợp đồng khai thác
          </Button>
        </div>
        <div>
          {isAuthorizingOrMining ? <MiningContract /> : <AuthorizedContract />}
        </div>
      </div>
    </Wrapper>
  );
};

export default ContractManagement;

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  background-color: var(--primary-color);
  .content {
    margin-left: 30px;
    margin-right: 70px;
    flex: 1;
    h1 {
      margin-top: -20px;
      width: 600px;
      height: 48px;
      font-size: 36px;
      line-height: 48px;
      color: #ffffff;
    }
    h4 {
      font-weight: 200;
      opacity: 0.5;
      font-size: 16px;
      svg {
        color: #ffac69;
      }
    }
    .button-1,
    .button-2 {
      border: 1px solid #ff7506;
      border-radius: 24px;
      background: none;
      :hover {
        background: #b65100;
      }
    }
    .button-1 {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    .button-2 {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
    .active {
      background-color: #b65100;
    }
  }
`;
