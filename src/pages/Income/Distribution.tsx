import React, { Children, useState } from 'react';
import styled from 'styled-components';
import { PlusCircleOutlined, RightOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, List, Row, Switch } from 'antd';
import { Link } from 'react-router-dom';
import { Input } from 'antd';
import { Income, PartnerAuthorizer, myIncome, myPartner } from '../../myData';
import Page from '../../components/Page';
import ListUser from '../../components/Setting/ListUser';
import ListRole from '../../components/Setting/ListRole';

const { Search } = Input;
const onSearch = (value: string) => console.log(value);

const Distribution = () => {
  return (
    <Wrapper>
      <div className="content">
        <p style={{ color: 'white', opacity: '0.5' }}>
          Doanh thu
          <RightOutlined style={{ color: '#FFAC69' }} />
          Phân phối doanh thu
        </p>
        <h1>Quản lý phân phối doanh thu</h1>
        <div className="search-btn">
          <div className="datepick">
            <p>Theo tháng</p>
            <DatePicker picker="month" />
          </div>
          <Search
            placeholder="Nhập tên người dùng..."
            onSearch={onSearch}
            style={{ width: 200 }}
          />
        </div>
        <h3>Danh sách hợp đồng ủy quyền</h3>
        <Container>
          <Row className="row-1">
            <Col span={1}>
              <p>STT</p>
            </Col>
            <Col span={3}>
              <p>Hợp đồng ủy quyền</p>
            </Col>
            <Col span={3}>
              <p>Người ủy quyền</p>
            </Col>
            <Col span={3}>
              <p>Số bài hát ủy quyền</p>
            </Col>
            <Col span={3}>
              <p>Doanh thu (VNĐ) </p>
            </Col>
            <Col span={4}>
              <p>Hành chính phí (VNĐ) </p>
            </Col>
            <Col span={4}>
              <p>Mức nhuận bút (VNĐ) </p>
            </Col>
            <Col span={3}>
              <p>Ngày chốt đối soát</p>
            </Col>
            <Col span={3}>
              <p>Chi tiết doanh thu</p>
            </Col>
          </Row>
          <List
            itemLayout="horizontal"
            dataSource={myIncome}
            renderItem={(myIncome: Income) => (
              <List.Item
                key={myIncome.stt}
                style={{ alignItems: 'center', display: 'flex' }}
              >
                <Row className="row-2">
                  <Col span={1}>
                    <p style={{ marginLeft: '18px' }}> {myIncome.stt}</p>
                  </Col>
                  <Col span={3}>
                    <p>{myIncome.hopdong}</p>
                  </Col>
                  <Col span={3}>
                    <p>{myIncome.nguoiuyquyen}</p>
                  </Col>
                  <Col span={3}>
                    <p>{myIncome.sobaihatuyquyen}</p>
                  </Col>

                  <Col span={3}>
                    <p>{myIncome.doanhthu}</p>
                  </Col>
                  <Col span={4}>
                    <p>{myIncome.hanhchinhphi}</p>
                  </Col>
                  <Col span={4}>
                    <p>{myIncome.mucnhuanbut}</p>
                  </Col>
                  <Col span={3}>
                    <p>{myIncome.ngaychot}</p>
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
                      to="/income/distribution/detail"
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
          <Page data={myIncome} />
        </Container>
      </div>
      <Link to="" className="link-option">
        <PlusCircleOutlined />
        <p>Xuất dữ liệu</p>
      </Link>
    </Wrapper>
  );
};

export default Distribution;

const Container = styled.div`
  width: 1541px;
  max-height: 722px;
  height: 722px;
  position: relative;
  background: rgba(47, 47, 65, 0.7);
  border: 1px solid rgba(47, 47, 65, 0.7);
  border-radius: 16px;
  margin: 10px 0;
  .row-1,
  .row-2 {
    width: 1541px;
    padding-left: 35px;
    display: flex;
    align-items: center;
    .ant-col-3 {
      max-width: 10%;
    }
  }
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
`;

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

  .datepick {
    display: flex;
    p {
      margin-right: 10px;
    }
    .ant-picker {
      background: #1e1e2e;
      color: #fff;
      border: 1px solid #727288;
      width: 200px;
      svg {
        color: #ff7506;
        font-size: 1.5rem;
      }
      input {
        color: #fff;
      }
    }
  }
`;