import React, { useState } from 'react';
import styled from 'styled-components';
import firebase from 'firebase/compat/app';
import 'firebase/firestore';
import { Modal, Input, List, Pagination, Checkbox, Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { DataContext } from '../context/DataContext';
import { useContext } from 'react';
import { RightOutlined } from '@ant-design/icons';

const onChange = (e: CheckboxChangeEvent) => {
  console.log(`checked = ${e.target.checked}`);
};

const { Search } = Input;
const onSearch = (value: string) => console.log(value);
const DetailProduct: React.FC = () => {
  const { data } = useContext(DataContext);

  return (
    <Wrapper>
      <div className="content">
        <h4 style={{ color: 'white' }}>
          Quản lý hợp đồng <RightOutlined /> Chi tiết hợp đồng <RightOutlined />{' '}
          Chỉnh sửa danh sách tác phẩm uỷ quyền
        </h4>

        <h1 style={{ width: '1000px' }}>Hợp đồng uỷ quyền bài hát - BH123</h1>

        <div className="option-1">
          <Search
            placeholder="Tên bản ghi, tên ca sĩ, tác giả,..."
            onSearch={onSearch}
            style={{ width: 200 }}
          />
        </div>
        <List
          bordered
          style={{
            color: '#fff',
            width: '73.6vw',
            border: '1px solid #727288',
            borderRadius: '16px',
            background: 'rgba(47, 47, 65, 0.7)',
          }}
          itemLayout="horizontal"
        >
          {data.map((item, index) => (
            <List.Item key={item['STT']} style={{ color: '#fff' }}>
              <Checkbox
                style={{ marginRight: '10px' }}
                onChange={onChange}
                value="checked"
              ></Checkbox>
              <List.Item.Meta
                title={`${index === 0 ? 'STT' : ''}`}
                description={item['STT']}
                style={{ maxWidth: '80px' }}
              />
              <List.Item.Meta
                title={`${index === 0 ? 'Tên bản ghi' : ''}`}
                description={item['Tên bản ghi']}
                style={{ maxWidth: '170px' }}
              />
              <List.Item.Meta
                title={`${index === 0 ? 'Mã ISRC' : ''}`}
                description={item['Mã ISRC']}
                style={{ maxWidth: '309px' }}
              />
              <List.Item.Meta
                title={`${index === 0 ? 'Ca sĩ' : ''}`}
                description={item['Người ủy quyền']}
              />
              <List.Item.Meta
                title={`${index === 0 ? 'Tác giả' : ''}`}
                description={item['Tác giả']}
              />
              <List.Item.Meta
                title={`${index === 0 ? 'Ngày tải' : ''}`}
                description={
                  item['Ngày tải']
                    ? item['Ngày tải'].toDate().toLocaleString()
                    : ''
                }
              />
              <List.Item.Meta
                title={`${index === 0 ? 'Tình trạng' : ''}`}
                description={
                  item['Hiệu lực hợp đồng'][0] === 'Còn thời hạn'
                    ? `🌱${item['Hiệu lực hợp đồng'][2]}`
                    : `⚡${item['Hiệu lực hợp đồng'][5]}`
                }
              />
              <div style={{ width: '170px' }}>
                <button
                  style={{
                    background: 'transparent',
                    border: 'none',
                    textDecoration: 'underline',
                    color: '#ff7506',
                    cursor: 'pointer',
                  }}
                >
                  Nghe
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
        <div className="info-4">
          <button style={{ borderRadius: '16px 0px 0px 0px' }}>
            <CloseOutlined className="icon" /> <br />
            Từ chối <br />
            Bản ghi
          </button>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '50px',
          }}
        >
          <Button
            danger
            style={{
              height: '48px',
              marginRight: '20px',
              backgroundColor: 'transparent',
              width: '168px',
              color: '#FF7506',
              border: '1px solid #FF7506',
            }}
          >
            Hủy
          </Button>
          <Button
            type="primary"
            htmlType="submit"
            style={{
              height: '48px',
              width: '168px',
              backgroundColor: '#FF7506',
            }}
          >
            Lưu
          </Button>
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
        width: 600px;
        height: 48px;
      }
    }
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
  .ant-modal-content {
    height: 100%;
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
  margin-bottom: 0 auto;
  position: relative;
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
  .info-4 {
    position: absolute;
    margin-left: 50px;
    background-color: #2f2f41;
    top: 0;
    right: 0;
    transform: translateY(200%);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 110px;
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

export default DetailProduct;
