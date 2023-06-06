import React, { Children, useState } from 'react'
import styled from 'styled-components'
import { PlusCircleOutlined, RightOutlined } from '@ant-design/icons'
import { Button, Col, DatePicker, List, Modal, Row, Switch, Input } from 'antd'
import { Link } from 'react-router-dom'

import { Device, Income, PartnerAuthorizer, myDevice, myIncome, myPartner } from '../../myData'
import Page from '../../components/Page'

const { Search } = Input
const onSearch = (value: string) => console.log(value)

const dateFormat = 'YYYY/MM/DD'
const DetailInComeProfit = () => {
  return (
    <Wrapper>
      <div className='content'>
        <div className='header-text'>
          <span>
            {' '}
            Doanh thu
            <RightOutlined />
          </span>
          <span>
            {' '}
            Báo cáo doanh thu
            <RightOutlined />
          </span>
          <span>
            {' '}
            Báo cáo chi tiết
            <RightOutlined />
          </span>
          <span> Lịch sử đồng bộ thiết bị</span>
        </div>

        <h1>Hợp đồng UQ123 - Kỳ tháng 3/2021 </h1>
        <div className='main-container'>
          <div className='container-2'>
            <h3>Danh sách thiết bị</h3>

            <div className='search-btn'>
              <Search placeholder='Nhập tên người dùng...' onSearch={onSearch} style={{ width: 200 }} />
            </div>
            <div style={{ display: 'flex' }}>
              <p style={{ marginRight: '20px' }}>
                Tổng thiêt bị: <span>8 thiết bị</span>
              </p>
              <p>
                Tổng lượt phát: <span>1783</span>
              </p>
            </div>
            <Container>
              <div className='container-1'>
                <Row className='row-1'>
                  <Col span={2}>
                    <p>STT</p>
                  </Col>
                  <Col span={4}>
                    <p>Tên thiết bị</p>
                  </Col>
                  <Col span={4}>
                    <p>Trạng thái</p>
                  </Col>

                  <Col span={6}>
                    <p>Thời gian đồng bộ dữ liệu</p>
                  </Col>
                  <Col span={4}>
                    <p>Tổng số lượt phát </p>
                  </Col>
                </Row>

                <List
                  itemLayout='horizontal'
                  dataSource={myDevice}
                  renderItem={(myDevice: Device) => (
                    <List.Item key={myDevice.stt} style={{ alignItems: 'center', display: 'flex' }}>
                      <Row className='row-2'>
                        <Col span={2}>
                          <p> {myDevice.stt}</p>
                        </Col>
                        <Col span={4}>
                          <p>{myDevice.tenthietbi}</p>
                        </Col>
                        <Col span={4}>
                          <p>{`${myDevice.trangthai ? 'Đang hoạt động' : 'Ngưng hoạt động'}`}</p>
                        </Col>

                        <Col span={6}>
                          <p>{myDevice.thoigiandongbo}</p>
                        </Col>
                        <Col span={4}>
                          <p>{myDevice.tongluotphat}</p>
                        </Col>
                      </Row>
                    </List.Item>
                  )}
                ></List>
                <Page data={myDevice} />
              </div>
              <div className='container-2'>
                <Row className='row-1'>
                  <Col span={3}>
                    <p>STT</p>
                  </Col>
                  <Col span={12}>
                    <p>Danh sách bài hát</p>
                  </Col>
                  <Col>
                    <p>Số lượt phát</p>
                  </Col>
                </Row>

                <List
                  itemLayout='horizontal'
                  dataSource={myIncome}
                  renderItem={(myIncome: Income) => (
                    <List.Item key={myIncome.stt} style={{ alignItems: 'center', display: 'flex' }}>
                      <Row className='row-2'>
                        <Col span={3}>
                          <p> {myIncome.stt}</p>
                        </Col>
                        <Col span={12}>
                          <p>{myIncome.danhsachbaihat}</p>
                        </Col>
                        <Col span={4}>
                          <p>{myIncome.soluotphat}</p>
                        </Col>
                      </Row>
                    </List.Item>
                  )}
                ></List>
                <Page data={myIncome} />
              </div>
            </Container>
          </div>
        </div>
      </div>
      <Link to='' className='link-option'>
        <PlusCircleOutlined />
        <p>Xuất dữ liệu</p>
      </Link>
    </Wrapper>
  )
}

export default DetailInComeProfit

const Container = styled.div`
  width: 1541px;
  display: flex;
  margin-right: 20px;
  max-height: 722px;
  height: 722px;
  margin: 10px 0;
  .container-2 {
    margin-right: 20px;
    position: relative;
    width: 700px;
    background: rgba(47, 47, 65, 0.7);
    border: 1px solid rgba(47, 47, 65, 0.7);
    border-radius: 16px;
    height: 722px;
    .row-1,
    .row-2 {
      width: 100%;
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
  }
  .container-1 {
    margin-right: 20px;
    position: relative;
    width: 900px;
    background: rgba(47, 47, 65, 0.7);
    border: 1px solid rgba(47, 47, 65, 0.7);
    border-radius: 16px;
    height: 722px;
    .row-1,
    .row-2 {
      width: 100%;
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
  }
`

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
    .main-container {
      display: flex;
      width: 1541px;
    }
    h1 {
      width: 700px;
      height: 48px;
      font-size: 36px;
      line-height: 48px;
      color: #ffffff;
    }

    .search-btn {
      display: flex;
      flex-direction: column;
      margin-right: 100px;
      .ant-input-wrapper {
        width: 300px;
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
`
