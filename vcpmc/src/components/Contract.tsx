import React, { useState } from 'react';
import styled from 'styled-components';
import firebase from 'firebase/compat/app';
import 'firebase/firestore';
import { Modal, Input, Button } from 'antd';
import {
  ContainerOutlined,
  CloseOutlined,
  FormOutlined,
} from '@ant-design/icons';
import { FilePdfOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { DataContext } from '../context/DataContext';
import { useContext } from 'react';
import SideMenu from './SideMenu';
import { RightOutlined } from '@ant-design/icons';
import PageContent from './PageContent';
import InfoContract from './InfoContract';
import AuthoritySong from './AuthoritySong';
const { TextArea } = Input;

const Contract: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data } = useContext(DataContext);
  const [isAuthorizingOrMining, setIsisAuthorizingOrMining] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Wrapper>
      <SideMenu />
      <div className="content">
        <PageContent />
        <h4 style={{ color: 'white' }}>
          Quản lý <RightOutlined /> Quản lý hợp đồng <RightOutlined /> Chi tiết
        </h4>
        {!isAuthorizingOrMining ? (
          <h1 style={{ width: '1000px' }}>
            Chi tiết hợp đồng uỷ quyền bài hát - BH123
          </h1>
        ) : (
          <h1 style={{ width: '1000px' }}>Hợp đồng ủy quyền bài hát - BH123</h1>
        )}
        <div className="btn">
          <Button
            type="primary"
            onClick={() => setIsisAuthorizingOrMining(false)}
            className={`button-1 ${!isAuthorizingOrMining ? 'active' : ''}`}
          >
            Thông tin hợp đồng
          </Button>
          <Button
            onClick={() => setIsisAuthorizingOrMining(true)}
            type="primary"
            className={`button-2 ${isAuthorizingOrMining ? 'active' : ''}`}
          >
            Tác phẩm ủy quyền
          </Button>
        </div>
        <div>
          {isAuthorizingOrMining ? <AuthoritySong /> : <InfoContract />}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  background-color: var(--primary-color);
  .content {
    margin-top: 50px;
    margin-left: 50px;
    margin-right: 10px;
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
const ModalContent = styled(Modal)`
  .ant-modal-content {
    background: #2f2f41;
  }
  .ant-modal-title {
    background: #2f2f41;
    color: #fff;
    margin-bottom: 30px;
    justify-content: center;
    align-items: center;
    display: flex;
  }
  .ant-input {
    color: #fff;
    border: 1px solid #727288;
    background: #2b2b3f;
    ::placeholder {
      color: #727288;
    }
  }
  .ant-modal-footer {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    .ant-btn-default {
      background: transparent !important;
      border: 1px solid #ff7506 !important;
      :hover {
        background: transparent !important;
        border: 1px solid #ff7506 !important;
      }
      span {
        color: #ff7506;
      }
    }
    .ant-btn-primary {
      background: #ff7506 !important;
    }
  }
`;
const Container = styled.div`
  position: relative;
  display: grid;
  padding-right: 0px !important;
  grid-template-columns: 1fr 1fr 1fr;
  .info-1 {
    display: flex;
    flex-direction: column;
    .info-content-1,
    .info-content-2 {
      h4 {
        margin: 0 0 0 10px;
        color: #fff;
        font-weight: 700;
        display: flex;
        justify-content: center;
        align-items: center;
        p {
          flex: 1;
          display: flex;
          transform: translateX(10px);
          color: #fff;
          font-weight: 400;
          opacity: 0.7;
        }
      }
    }
    .info-content-2 {
      h3 {
        color: #ffac69;
        margin-left: 10px;
        margin-bottom: 0;
        margin-top: 40px;
      }
    }
  }
  .info-2 {
    display: flex;
    flex-direction: column;
    .info-content-1,
    .info-content-2 {
      h4 {
        margin: 0 0 0 10px;
        color: #fff;
        font-weight: 700;
        display: flex;
        align-items: center;
        p {
          transform: translateX(10px);
          color: #fff;
          font-weight: 400;
          opacity: 0.7;
        }
      }
    }
    .info-content-1 {
      height: 250px;
    }
    .info-content-2 {
      margin-top: 60px;
    }
  }
  .info-3 {
    display: flex;
    flex-direction: column;
    .info-content-1,
    .info-content-2 {
      h4 {
        margin: 0 0 0 10px;
        color: #fff;
        font-weight: 700;
        display: flex;
        align-items: center;
        p {
          transform: translateX(10px);
          color: #fff;
          font-weight: 400;
          opacity: 0.7;
        }
      }
    }
    .info-content-1 {
      height: 250px;
    }
    .info-content-2 {
      margin-top: 60px;
    }
  }
  .info-4 {
    position: absolute;
    background-color: #2f2f41;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 330px;
    width: 110px;
    background: #2f2f41;
    border: 0px;
    margin-right: -24px;
    .icon {
      margin-top: 10px;
      margin-left: 20px;
      font-size: 1.5rem;
      width: 52px;
      height: 52px;
      color: #ff7506;
      background: rgba(114, 114, 136, 0.5);
      border-radius: 67px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    button {
      background: #2f2f41;
      cursor: pointer;
    }
  }
`;

export default Contract;
