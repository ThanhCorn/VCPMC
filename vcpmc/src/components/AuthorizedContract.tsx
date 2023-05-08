import React, { useState, useEffect } from 'react';
import type { MenuProps } from 'antd';
import { Space, Button, Dropdown, Input } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { db } from '../firebase';
import styled from 'styled-components';
import {
  collection,
  getDocs,
  query,
  onSnapshot,
  Timestamp,
  doc,
} from 'firebase/firestore';
import 'firebase/firestore';

const { Search } = Input;
const onSearch = (value: string) => console.log(value);

interface DataProps {
  STT: number;
  'Số hợp đồng': string;
  'Tên hợp đồng': string;
  'Quyền sở hữu': string;
  'Người ủy quyền': string;
  'Ngày tạo': string;
  'Ngày hết hạn': string;
  'Ngày hiệu lực': string;
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

const AuthorizedContract = () => {
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
    <Wrapper className="option">
      <div className="option-1">
        <Space className="space-1">
          <p>Quyền sở hữu:</p>
          <Dropdown menu={menuProps}>
            <Button>
              <Space>
                Tất cả
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
        </Space>
        <Space className="space-2">
          <p>Hợp đồng ủy quyền:</p>
          <Dropdown menu={{ items: HieuLucHopDongOptions }}>
            <Button>
              <Space>
                Tất cả
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
        </Space>
      </div>
      <Space className="option-2">
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          style={{ width: 200 }}
        />
      </Space>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  button {
    height: 48px;
  }
  display: flex;
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
    margin-left: 70px;
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
      width: 510px;
      height: 48px;
    }
  }
`;
export default AuthorizedContract;
