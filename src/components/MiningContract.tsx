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
                  <button>Xem chi tiết</button>
                  <button>Lý do hủy</button>
                </div>
              </List.Item>
            ))}
            <Pagination defaultCurrent={1} total={100} />
          </List>
        </Container>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  position: relative;
  button {
    height: 48px;
  }
  display: flex;
  align-items: center;

  .option-1 {
    flex-direction: column;
    display: flex;
    margin-bottom: 20px;
    .ant-input-wrapper {
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
      width: 280px;
      height: 48px;
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
  }
  .ant-list-bordered .ant-list-item {
  }
`;
export default MiningContract;
