import React, { Children, useState } from 'react';
import styled from 'styled-components';
import SideMenu from '../../components/SideMenu';
import PageContent from '../../components/PageContent';
import { RightOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import AuthorizedContract from '../../components/AuthorizedContract';
import MiningContract from '../../components/MiningContract';

const ContractManagement = () => {
  const [isAuthorizingOrMining, setIsisAuthorizingOrMining] = useState(false);

  return (
    <Wrapper>
      <div className="content">
        <h4 style={{ color: 'white' }}>
          Quản lý <RightOutlined /> Quản lý hợp đồng
        </h4>
        {!isAuthorizingOrMining ? (
          <h1>Danh sách hợp đồng</h1>
        ) : (
          <h1>Danh sách hợp đồng khai thác</h1>
        )}
        <div className="btn">
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
  height: 100vh;
  width: 100vw;
  display: flex;
  flex: 1;
  background-color: var(--primary-color);
  .content {
    margin-top: 50px;
    margin-left: 50px;
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
    .btn {
      margin-bottom: 20px;
      width: 309px;
      border: 1px solid #ff7506;
      border-radius: 24px;

      .button-1,
      .button-2 {
        border-radius: 24px;
        background: none;
      }
      .button-1 {
        border-top-right-radius: 24px;
        border-bottom-right-radius: 24px;
        border-right: none;
      }
      .button-2 {
        border-top-left-radius: 24px;
        border-bottom-left-radius: 24px;
        border-left: none;
      }
      .active {
        background: #b65100;
      }
    }
  }
`;
