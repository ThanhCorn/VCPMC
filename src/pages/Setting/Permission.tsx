import React, { Children, useState } from 'react';
import styled from 'styled-components';
import { PlusCircleOutlined, RightOutlined } from '@ant-design/icons';
import { Button, Col, List, Row, Switch } from 'antd';
import { Link } from 'react-router-dom';
import { Input } from 'antd';
import { PartnerAuthorizer, myPartner } from '../../myData';
import Page from '../../components/Page';
import ListUser from '../../components/Setting/ListUser';
import ListRole from '../../components/Setting/ListRole';

const { Search } = Input;
const onSearch = (value: string) => console.log(value);

const Permission = () => {
  const [isRole, setIsRole] = useState(false);

  return (
    <Wrapper>
      <div className="content">
        <p style={{ color: 'white', opacity: '0.5' }}>
          Cài đặt
          <RightOutlined style={{ color: '#FFAC69' }} />
          Phân quyền người dùng
        </p>
        {!isRole ? (
          <h1>Danh sách người dùng</h1>
        ) : (
          <h1>Vai trò người dùng trên hệ thống</h1>
        )}
        <div className="search-btn">
          <div className="btn">
            <Button
              type="primary"
              onClick={() => setIsRole(false)}
              className={`button-1 ${!isRole ? 'active' : ''}`}
            >
              Danh sách người dùng
            </Button>
            <Button
              onClick={() => setIsRole(true)}
              type="primary"
              className={`button-2 ${isRole ? 'active' : ''}`}
            >
              Vai trò người dùng
            </Button>
          </div>
          <Search
            placeholder="Nhập tên người dùng..."
            onSearch={onSearch}
            style={{ width: 200 }}
          />
        </div>
        {isRole ? <ListRole /> : <ListUser />}
      </div>
      {isRole ? (
        <Link to="/setting/add-role" className="link-option">
          <PlusCircleOutlined />
          <p>Thêm vai trò</p>
        </Link>
      ) : (
        <Link to="/setting/add-user" className="link-option">
          <PlusCircleOutlined />
          <p>
            Thêm người <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; dùng
          </p>
        </Link>
      )}
    </Wrapper>
  );
};

export default Permission;

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
      width: 700px;
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
    .search-btn {
      display: flex;
      justify-content: space-between;
      width: 65vw;
      .ant-input-wrapper {
        width: 500px;
        background: #1e1e2e;
        span {
          button {
            height: 48px;
            background: #1e1e2e;
            border: 1px solid #727288;
            border-left: none;
            svg {
              color: #fff;
              height: 21px;
              width: 21px;
            }
          }
        }
      }
      .ant-input {
        background: #1e1e2e;
        color: #fff;
        border: 1px solid #727288;
        ::placeholder {
          color: #727288;
        }
        :hover {
          border-right: none;
        }
        height: 48px;
      }
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
    width: 319px;
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
`;
