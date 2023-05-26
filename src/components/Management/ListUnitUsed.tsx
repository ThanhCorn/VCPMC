import {
  CloseOutlined,
  DownCircleFilled,
  DownOutlined,
  PlusOutlined,
  RightOutlined,
} from '@ant-design/icons';
import { Checkbox, Col, Dropdown, Input, List, Row, Switch } from 'antd';
import React, { useContext } from 'react';
import styled from 'styled-components';
import type { MenuProps } from 'antd';
import { Link } from 'react-router-dom';
import Page from '../Page';
import { DataContext, DataProps } from '../../context/DataContext';
import { doc, updateDoc } from '@firebase/firestore';
import { db } from '../../firebase';
const { Search } = Input;
const onSearch = (value: string) => console.log(value);

const items: MenuProps['items'] = [
  {
    label: 'Đang kích hoạt',
    key: '1',
  },
  {
    label: 'Ngừng kích hoạt',
    key: '2',
  },
];

const ListUnitUsed = () => {
  const { data } = useContext(DataContext);

  return (
    <Wrapper>
      <p style={{ opacity: '0.5', marginBottom: '0' }}>
        Quản lý <RightOutlined style={{ color: '#FFAC69' }} /> Đơn vị sử dụng
      </p>
      <h1>Danh sách đơn vị sử dụng</h1>
      <Search
        className="search"
        placeholder="Tên khoản giá trị, số hợp đồng,...."
        onSearch={onSearch}
        style={{ width: '200px', marginBottom: '20px' }}
      />
      <Container>
        <Row className="row-1">
          <Col span={1} className="col-1">
            <Dropdown menu={{ items }} placement="bottomLeft" arrow>
              <Checkbox>
                <DownCircleFilled style={{ color: '#347AFF' }} />
              </Checkbox>
            </Dropdown>
          </Col>

          <Col span={1}>
            <p>STT</p>
          </Col>
          <Col span={4}>
            <p>Tên tài khoản quản trị</p>
          </Col>
          <Col span={2}>
            <p>Số hợp đồng</p>
          </Col>
          <Col span={2}>
            <p>Admin</p>
          </Col>
          <Col span={3}>
            <p>Người dùng</p>
          </Col>
          <Col span={3}>
            <p>Thiết bị chỉ định </p>
          </Col>
          <Col span={3}>
            <p>Ngày hết hạn</p>
          </Col>
          <Col span={3}>
            <p>Trạng thái</p>
          </Col>
        </Row>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(data: DataProps) => (
            <List.Item
              key={data.STT}
              style={{ alignItems: 'center', display: 'flex' }}
            >
              <Row className="row-2">
                <Col span={1} className="col-1">
                  <Checkbox />
                </Col>
                <Col span={1}>
                  <p> {data.STT}</p>
                </Col>
                <Col span={4}>
                  <p>{data['Tên tài khoản quản trị']}</p>
                </Col>
                <Col span={2}>
                  <p>{data['Số hợp đồng']}</p>
                </Col>
                <Col span={2}>
                  <p>{data.Admin}</p>
                </Col>
                <Col span={3}>
                  <p style={{ transform: 'translateX(70px)' }}>
                    {data['Người dùng']}
                  </p>
                </Col>
                <Col span={3}>
                  <p style={{ transform: 'translateX(90px)' }}>
                    {data['Thiết bị chỉ định']}
                  </p>
                </Col>
                <Col span={3}>
                  <p>{data['Ngày hết hạn'].toDate().toLocaleString()}</p>
                </Col>
                <Col span={3}>
                  <p>
                    <Switch checked={data['Trạng thái']} />
                    {data['Trạng thái'] ? 'Đang kích hoạt' : ' Ngừng kích hoạt'}
                  </p>
                </Col>

                <Col
                  span={2}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Link
                    to="/management/used/detail"
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
                </Col>
              </Row>
            </List.Item>
          )}
        ></List>
        <Page data={data} />
      </Container>
      <div className="side-option">
        <div className="option">
          <Link to="" className="link-option">
            <div className="icon-2">
              <CloseOutlined />
            </div>
            <p>Xóa</p>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default ListUnitUsed;

const Container = styled.div`
  height: 800px;
  position: relative;
  width: 1541px;
  max-height: 722px;
  background: rgba(47, 47, 65, 0.7);
  border: 1px solid rgba(47, 47, 65, 0.7);
  border-radius: 16px;
  margin: 10px 0;
  .row-2 {
    border-bottom: 1px solid rgba(47, 47, 65, 0.7);
    p {
      color: #fff;
      opacity: 0.7;
    }
  }
  .row-1 {
    p {
      font-weight: bold;
      color: #ffac69;
      opacity: 1;
    }
  }
  .row-1,
  .row-2 {
    width: 1541px;
    padding-left: 35px;
    display: flex;
    align-items: center;
    p {
      font-size: 14px;
    }
    padding: 0 10px;
    .col-1 {
      width: 64px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 50px;
  margin-left: 50px;
  .search {
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
      width: 400px;
      height: 48px;
    }
  }
  .option {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 30%;
    right: 0;
    transform: translateY(-50%);
    .link-option {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      .icon {
        padding: 5px 0;
        margin-left: 0 !important;
      }
      svg {
        font-size: 2rem;
        margin-left: 10px;
      }
    }
    .button-option {
      .icon {
        margin-left: 10px !important;
      }
    }
    .button-option,
    .link-option {
      background: #2f2f41;
      border: none;
      width: 110px;
      height: 130px;

      .icon {
        background-color: rgba(114, 114, 136, 0.5);
        width: 50px;
        font-size: 2rem;
        color: #ff7506;
        border: 1px solid rgba(114, 114, 136, 0.5);
        border-radius: 50%;
      }
      .icon-2 {
        background-color: rgba(114, 114, 136, 0.5);
        width: 50px;
        font-size: 2rem;
        color: red;
        border: 1px solid rgba(114, 114, 136, 0.5);
        border-radius: 50%;
        padding-top: 5px;
      }
      p {
        color: #fff;
        opacity: 0.5;
        font-size: 12px;
      }
    }
  }
`;
