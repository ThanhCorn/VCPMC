import React, { Children, useState } from 'react'
import styled from 'styled-components'
import { PlusCircleOutlined, RightOutlined } from '@ant-design/icons'
import { Button, Col, DatePicker, List, Row, Switch, Input } from 'antd'
import { Link } from 'react-router-dom'

import { myIncome } from '../../myData'
import { Income } from '../../@types/myType'

import Page from '../../components/Page'

const { Search } = Input
const onSearch = (value: string) => console.log(value)

const DetailDistribution = () => {
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
            Phân phối doanh thu
            <RightOutlined />
          </span>
          <span> Chi tiết doanh thu</span>
        </div>

        <h1>Hợp đồng ủy quyền UQ123 - Quý 1 </h1>
        <div className='search-btn'>
          <div className='datepick'>
            <h3>Danh sách bản ghi</h3>
            <Search placeholder='Nhập tên bài hát...' onSearch={onSearch} style={{ width: 200 }} />
          </div>
          <div className=''>
            <h3>Danh sách bản ghi</h3>
            <h2 style={{ color: '#FF7506' }}>Cuộc gọi nhỡ</h2>
          </div>
        </div>
        <Container>
          <div className='container-1'>
            <Row className='row-1'>
              <Col span={1}>
                <p>STT</p>
              </Col>
              <Col span={2}>
                <p>Bài hát</p>
              </Col>
              <Col span={3}>
                <p>Số lượng phát</p>
              </Col>

              <Col span={3}>
                <p>Doanh thu (VNĐ) </p>
              </Col>
              <Col span={3}>
                <p>Hành chính phí (VNĐ) </p>
              </Col>
              <Col span={3}>
                <p>Nhuận bút (VNĐ) </p>
              </Col>
            </Row>

            <List
              itemLayout='horizontal'
              dataSource={myIncome}
              renderItem={(myIncome: Income) => (
                <List.Item key={myIncome.stt} style={{ alignItems: 'center', display: 'flex' }}>
                  <Row className='row-2'>
                    <Col span={1}>
                      <p> {myIncome.stt}</p>
                    </Col>
                    <Col span={4}>
                      <p>{myIncome.tenbaihat}</p>
                    </Col>
                    <Col span={3}>
                      <p>{myIncome.soluotphat}</p>
                    </Col>

                    <Col span={5}>
                      <p>{myIncome.doanhthu}</p>
                    </Col>
                    <Col span={4}>
                      <p>{myIncome.hanhchinhphi}</p>
                    </Col>
                    <Col>
                      <p>{myIncome.mucnhuanbut}</p>
                    </Col>
                  </Row>
                </List.Item>
              )}
            ></List>
            <Page data={myIncome} />
          </div>
          <div className='container-2'>
            <Row className='row-3'>
              <Col span={3}>
                <p>Đơn vị khai thác</p>
              </Col>
              <Col span={2}>
                <p>Số lượt phát</p>
              </Col>
              <Col span={3}>
                <p>Doanh thu (VNĐ)</p>
              </Col>
            </Row>
            <Row className='row-5'>
              <Col span={3}>
                <p>Tổng</p>
              </Col>
              <Col span={2}>
                <p>100</p>
              </Col>
              <Col span={3}>
                <p>900000000</p>
              </Col>
            </Row>
            <List
              itemLayout='horizontal'
              dataSource={myIncome}
              renderItem={(myIncome: Income) => (
                <List.Item key={myIncome.stt} style={{ alignItems: 'center', display: 'flex' }}>
                  <Row className='row-4'>
                    <Col span={7}>
                      <p> {myIncome.donvikhaithac}</p>
                    </Col>
                    <Col span={6}>
                      <p>{myIncome.soluotphat}</p>
                    </Col>
                    <Col>
                      <p>{myIncome.doanhthu}</p>
                    </Col>
                  </Row>
                </List.Item>
              )}
            ></List>
          </div>
        </Container>
      </div>
      <Link to='' className='link-option'>
        <PlusCircleOutlined />
        <p>Xuất dữ liệu</p>
      </Link>
    </Wrapper>
  )
}

export default DetailDistribution

const Container = styled.div`
  width: 1541px;
  display: flex;
  justify-content: space-between;
  .container-1 {
    margin-right: 20px;
    max-height: 722px;
    height: 722px;
    position: relative;
    background: rgba(47, 47, 65, 0.7);
    border: 1px solid rgba(47, 47, 65, 0.7);
    border-radius: 16px;
    margin: 10px 0;
    width: 60%;
    .ant-col {
    }
    .row-1,
    .row-2 {
      width: 1400px;
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
  .container-2 {
    max-height: 722px;
    height: 722px;
    margin-left: 20px;
    position: relative;
    background: rgba(47, 47, 65, 0.7);
    border: 1px solid rgba(47, 47, 65, 0.7);
    border-radius: 16px;
    margin: 10px 0;
    width: 35%;
    .row-5 {
      width: 1500px;

      padding-left: 35px;
      display: flex;
      align-items: center;
      .ant-col-3 {
        max-width: 10%;
      }
    }
    .row-3,
    .row-4 {
      width: 1500px;
      padding-left: 35px;
      display: flex;
      align-items: center;
      .ant-col-3 {
        max-width: 10%;
      }
    }
    .row-4 {
      border-bottom: 1px solid rgba(47, 47, 65, 0.7);
      p {
        color: #fff;
        opacity: 0.7;
      }
    }
    .row-3 {
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
    h1 {
      width: 700px;
      height: 48px;
      font-size: 36px;
      line-height: 48px;
      color: #ffffff;
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
`
