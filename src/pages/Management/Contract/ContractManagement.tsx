import React, { Children, useState } from 'react'
import styled from 'styled-components'
import SideMenu from '../../../components/SideMenu'
import PageContent from '../../../components/PageContent'
import { PlusCircleOutlined, RightOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import AuthorizedContract from '../../../components/Management/Contract/AuthorizedContract'
import MiningContract from '../../../components/Management/Contract/MiningContract'
import { Link } from 'react-router-dom'

const ContractManagement = () => {
  const [isAuthorizingOrMining, setIsisAuthorizingOrMining] = useState(false)

  return (
    <Wrapper>
      <div className='content'>
        <div className='header-text'>
          <span>
            Quản lý <RightOutlined />
          </span>
          <span>Quản lý hợp đồng</span>
        </div>

        {!isAuthorizingOrMining ? <h1>Danh sách hợp đồng</h1> : <h1>Danh sách hợp đồng khai thác</h1>}
        <div className='btn'>
          <Button
            type='primary'
            onClick={() => setIsisAuthorizingOrMining(false)}
            className={`button-1 ${!isAuthorizingOrMining ? 'active' : ''}`}
          >
            Hợp đồng ủy quyền
          </Button>
          <Button
            onClick={() => setIsisAuthorizingOrMining(true)}
            type='primary'
            className={`button-2 ${isAuthorizingOrMining ? 'active' : ''}`}
          >
            Hợp đồng khai thác
          </Button>
        </div>
        <div>{isAuthorizingOrMining ? <MiningContract /> : <AuthorizedContract />}</div>
      </div>

      <Link to='/new-contract' className='link-option'>
        <PlusCircleOutlined />
        <p>
          Thêm hợp <br /> &nbsp;&nbsp;&nbsp;&nbsp; đồng
        </p>
      </Link>
    </Wrapper>
  )
}

export default ContractManagement

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
    .header-text {
      display: flex;
      align-items: center;
      color: #fff;
      opacity: 0.5;

      svg {
        color: #ffac69;
        margin-right: 5px;
      }
    }
    h1 {
      width: 600px;
      height: 48px;
      font-size: 36px;
      line-height: 48px;
      color: #ffffff;
    }
  }
  .link-option {
    flex-direction: column;
    position: fixed;
    top: 30%;
    right: 0;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    background: #2f2f41;
    border: none;
    width: 110px;
    height: 130px;
    .icon {
      background-color: rgba(114, 114, 136, 0.5);
      margin-left: 15px;
      width: 50px;
      font-size: 2rem;
      border: 1px solid rgba(114, 114, 136, 0.5);
      border-radius: 50%;
    }
    p {
      color: #fff;
      opacity: 0.5;
      font-size: 12px;
    }
    svg {
      color: #ff7506;

      font-size: 2rem;
      margin-left: 7px;
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
`
