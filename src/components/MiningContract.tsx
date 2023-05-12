import React, { useState, useEffect, useContext } from 'react';
import type { MenuProps } from 'antd';
import {
  Space,
  Button,
  Dropdown,
  Input,
  List,
  Pagination,
  Typography,
} from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { db } from '../firebase';
import styled from 'styled-components';
import type { PaginationProps } from 'antd';
import {
  collection,
  getDocs,
  query,
  onSnapshot,
  Timestamp,
  doc,
} from 'firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/firestore';
import { DataContext } from '../context/DataContext';
import { Link } from 'react-router-dom';

const { Search } = Input;
const onSearch = (value: string) => console.log(value);

interface DataProps {
  STT: number;
  'Số hợp đồng': string;
  'Tên hợp đồng': string;
  'Quyền sở hữu': string;
  'Người ủy quyền': string;
  'Ngày tạo': firebase.firestore.Timestamp;
  'Ngày hết hạn': firebase.firestore.Timestamp;
  'Ngày hiệu lực': firebase.firestore.Timestamp;
  'Khách hàng': string;
  'Hiệu lực hợp đồng': string[];
}

const items: MenuProps['items'] = [
  {
    label: 'Người biểu diễn',
    key: '1',
  },
  {
    label: 'Nhà diễn xuất',
    key: '2',
  },
];
const handleMenuClick: MenuProps['onClick'] = (e) => {
  console.log('click', e);
};
const menuProps = {
  items,
  onClick: handleMenuClick,
};

const MiningContract = () => {
  const { data } = useContext(DataContext);
  const HieuLucHopDong = data.length > 0 ? data[0]['Hiệu lực hợp đồng'] : [];
  const HieuLucHopDongOptions = HieuLucHopDong.map((option, index) => ({
    label: option,
    key: index.toString(),
  }));

  return (
    <>
      <Wrapper className="option">
        <div className="option-1">
          <Search
            placeholder="input search text"
            onSearch={onSearch}
            style={{ width: 200 }}
          />
        </div>
        <Container>
          <List
            bordered
            style={{ color: '#fff', width: '73.6vw' }}
            itemLayout="horizontal"
          >
            {data.map((item, index) => (
              <List.Item key={item['STT']} style={{ color: '#fff' }}>
                <List.Item.Meta
                  title={`${index === 0 ? 'STT' : ''}`}
                  description={item['STT']}
                  style={{ maxWidth: '80px' }}
                />
                <List.Item.Meta
                  title={`${index === 0 ? 'Số hợp đồng' : ''}`}
                  description={item['Số hợp đồng']}
                  style={{ maxWidth: '170px' }}
                />
                <List.Item.Meta
                  title={`${index === 0 ? 'Khách hàng' : ''}`}
                  description={item['Khách hàng']}
                  style={{ maxWidth: '309px' }}
                />
                <List.Item.Meta
                  title={`${index === 0 ? 'Ngày tạo' : ''}`}
                  description={
                    item['Ngày tạo']
                      ? item['Ngày tạo'].toDate().toLocaleString()
                      : ''
                  }
                />
                <List.Item.Meta
                  title={`${index === 0 ? 'Ngày hiệu lực' : ''}`}
                  description={
                    item['Ngày hiệu lực']
                      ? item['Ngày hiệu lực']
                          .toDate()
                          .toLocaleString()
                          .slice(8, 18)
                      : ''
                  }
                />
                <List.Item.Meta
                  title={`${index === 0 ? 'Ngày hết hạn' : ''}`}
                  description={
                    item['Ngày hết hạn']
                      ? item['Ngày hết hạn']
                          .toDate()
                          .toLocaleString()
                          .slice(8, 18)
                      : ''
                  }
                />
                <List.Item.Meta
                  title={`${index === 0 ? 'Hiệu lực hợp đồng' : ''}`}
                  description={item['Hiệu lực hợp đồng'][0]}
                />
                <div>
                  <Link
                    to="/management/contract/1"
                    style={{
                      background: 'transparent',
                      border: 'none',
                      textDecoration: 'underline',
                      color: '#ff7506',
                      cursor: 'pointer',
                    }}
                  >
                    Xem chi tiết
                  </Link>

                  <button
                    style={{
                      background: 'transparent',
                      border: 'none',
                      textDecoration: 'underline',
                      color: '#ff7506',
                      cursor: 'pointer',
                    }}
                  >
                    Sao chép hợp đồng
                  </button>
                </div>
              </List.Item>
            ))}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '0 23px',
              }}
            >
              <p style={{ display: 'flex', letterSpacing: ' 0.015em' }}>
                Hiển thị{' '}
                <span
                  style={{
                    padding: '0 10px',
                    border: '1px solid #FF7506',
                    borderRadius: '4px',
                  }}
                >
                  {data.length}
                </span>{' '}
                hàng trong mỗi trang
              </p>
              <Pagination defaultCurrent={1} total={100} />
            </div>
          </List>
        </Container>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 20px;
  button {
    height: 48px;
  }
  display: flex;
  position: relative;
  align-items: center;
  .option-1 {
    width: 50%;
    .space-1 {
      margin-right: 20px;
      p {
        height: 24px;
        font-style: normal;
        font-size: 16px;
        line-height: 24px;
        color: #fff;
      }
    }
    .space-2 {
      p {
        height: 24px;
        font-style: normal;
        font-size: 16px;
        line-height: 24px;
        color: #fff;
      }
      .ant-btn {
        width: 130px !important;
        span {
          margin-left: 40px !important;
        }
      }
    }
    display: flex;
    .ant-space {
      .ant-btn {
        background: #1e1e2e;
        border: 1px solid #ff7506;
        display: flex;
        width: 160px;
        height: 40px;
        align-items: center;
        .ant-space-item {
          font-size: 16px;
          font-weight: 400;
          color: #fff;
          span {
            margin-left: 70px;
            color: #ff7506;
            width: 10.54px;
            height: 6.25px;
          }
        }
      }
    }
  }
  .option-2 {
    flex-direction: column;
    display: flex;
    width: 501px;
    transform: translate(35%, 0);
    .ant-input-wrapper {
      width: 501px;

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
      width: 510px;
      height: 48px;
    }
  }
  .side-option {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0px;
    right: 0px;
    transform: translateY(150%);
    button {
      color: #fff;
      font-size: 12px;
      font-weight: 500;
      background-color: #2f2f41;
      width: 110px;
      line-height: 18px;
      height: 130px;
      background: #2f2f41;
      border: none;
      h3 {
        font-size: 12px;
      }
    }
    .icon-setting {
      font-size: 2rem;
      color: #ff7506;
    }
  }
`;

const Container = styled.div`
  position: absolute;
  top: 100px;
  left: 0;
  .ant-list {
    width: 1533px !important;
    max-height: 727px;
  }
  .ant-list .ant-list-item .ant-list-item-meta .ant-list-item-meta-title {
    color: #ffac69;
    font-size: 14px;
    line-height: 20px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  .ant-list .ant-list-item .ant-list-item-meta .ant-list-item-meta-description {
    color: #fff;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }
  .ant-list-bordered .ant-list-item {
    border-top: 1px solid #727288;
  }
`;

export default MiningContract;
