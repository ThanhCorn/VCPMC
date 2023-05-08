import React, { useState, useEffect } from 'react';
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
  const [data, setData] = useState<DataProps[]>([]);
  const HieuLucHopDong = data.length > 0 ? data[0]['Hiệu lực hợp đồng'] : [];
  const HieuLucHopDongOptions = HieuLucHopDong.map((option, index) => ({
    label: option,
    key: index.toString(),
  }));

  useEffect(() => {
    const getData = async () => {
      const q = query(collection(db, 'contract'));
      const querySnapshot = await getDocs(q);
      const tempData: DataProps[] = [];
      querySnapshot.forEach((doc) => {
        tempData.push(doc.data() as DataProps);
      });
      setData(tempData);
    };
    getData();
  }, []);

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
      </Wrapper>
      <div>
        <List
          bordered
          style={{ color: '#fff', width: '73.6vw' }}
          itemLayout="horizontal"
        >
          <List.Item style={{ color: '#fff' }}>
            <List.Item.Meta title="STT" />
            <List.Item.Meta title="Số hợp đồng" />
            <List.Item.Meta title="Khách hàng" />
            <List.Item.Meta title="Quyền sở hữu" />
            <List.Item.Meta title="Ngày tạo" />
            <List.Item.Meta title="Ngày hiệu lực" />
            <List.Item.Meta title="Ngày hết hạn" />
            <List.Item.Meta title="Hiệu lực hợp đồng" />
            <List.Item.Meta title="" />
            <List.Item.Meta title="" />
          </List.Item>
          {data.map((item) => (
            <List.Item key={item['STT']} style={{ color: '#fff' }}>
              <p>{item['STT']}</p>
              <p>{item['Số hợp đồng']}</p>
              <p>{item['Khách hàng']}</p>
              <p>{item['Quyền sở hữu']}</p>
              <p>
                {item['Ngày tạo']
                  ? item['Ngày tạo'].toDate().toLocaleString()
                  : ''}
              </p>
              <p>
                {item['Ngày hiệu lực']
                  ? item['Ngày hiệu lực'].toDate().toLocaleString().slice(8, 18)
                  : ''}
              </p>
              <p>
                {item['Ngày hết hạn']
                  ? item['Ngày hết hạn'].toDate().toLocaleString().slice(8, 18)
                  : ''}
              </p>
              <p>{item['Hiệu lực hợp đồng'][0]}</p>
              <button>Xem chi tiết</button>
              <button>Lý do hủy</button>
            </List.Item>
          ))}
          <Pagination defaultCurrent={1} total={100} />
        </List>
      </div>
    </>
  );
};

const Wrapper = styled.div`
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
export default MiningContract;
