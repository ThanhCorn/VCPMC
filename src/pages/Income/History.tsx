import React, { useEffect } from 'react'
import styled from 'styled-components'
import { PlusCircleOutlined, RightOutlined } from '@ant-design/icons'
import { Button, Col, DatePicker, List, Row, Switch, Input } from 'antd'
import { Link } from 'react-router-dom'

import { myIncome } from '../../myData'
import Page from '../../components/Page'

import { Income } from '../../@types/myType'

const { Search } = Input
const onSearch = (value: string) => console.log(value)

const History = () => {
  return (
    <Wrapper>
      <div className='content'>
        <div className='header-text'>
          <span>
            Doanh thu
            <RightOutlined />
          </span>
          <span> Lịch sử đối soát</span>
        </div>
        <h1>Lịch sử đối soát doanh thu doanh thu</h1>
        <div className='search-btn'>
          <div className='datepick'>
            <p>Thời gian thực hiện</p>
            <DatePicker picker='month' />
          </div>
          <Search placeholder='Nhập tên người dùng...' onSearch={onSearch} style={{ width: 200 }} />
        </div>
        <h3>Danh sách hợp đồng khai thác đã đối soát</h3>
        <Container>
          <Row className='row-1'>
            <Col span={1}>
              <p>STT</p>
            </Col>
            <Col span={3}>
              <p>Số hợp đồng</p>
            </Col>
            <Col span={3}>
              <p>Đơn vị khai thác</p>
            </Col>
            <Col span={3}>
              <p>Thời hạn hợp đồng</p>
            </Col>
            <Col span={3}>
              <p>Loại hợp đồng </p>
            </Col>
            <Col span={2}>
              <p>Tổng lượt phát</p>
            </Col>
            <Col span={3}>
              <p>Tổng doanh thu </p>
            </Col>
            <Col span={3}>
              <p>Doanh thu chưa phân phối</p>
            </Col>
            <Col span={3}>
              <p>Ngày chốt đối soát</p>
            </Col>
          </Row>
          <List
            itemLayout='horizontal'
            dataSource={myIncome}
            renderItem={(myIncome: Income) => (
              <List.Item key={myIncome.stt} style={{ alignItems: 'center', display: 'flex' }}>
                <Row className='row-2'>
                  <Col span={1}>
                    <p style={{ marginLeft: '18px' }}> {myIncome.stt}</p>
                  </Col>
                  <Col span={3}>
                    <p>{myIncome.hopdong}</p>
                  </Col>
                  <Col span={3}>
                    <p>{myIncome.donvikhaithac}</p>
                  </Col>
                  <Col span={3}>
                    <p>{myIncome.thoihanhopdong}</p>
                  </Col>

                  <Col span={3}>
                    <p>{myIncome.loaihopdong}</p>
                  </Col>
                  <Col span={2}>
                    <p>{myIncome.tongsoluotphat}</p>
                  </Col>
                  <Col span={3}>
                    <p>{myIncome.doanhthu}</p>
                  </Col>
                  <Col span={3}>
                    <p>{myIncome.doanhthuchuaphanphoi}</p>
                  </Col>
                  <Col span={3}>
                    <p>{myIncome.ngaychot}</p>
                  </Col>

                  <Col
                    span={2}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Link
                      to='/income/detail/profit'
                      style={{
                        background: 'transparent',
                        border: 'none',
                        textDecoration: 'underline',
                        color: '#ff7506',
                        cursor: 'pointer'
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
      <Link to='' className='link-option'>
        <PlusCircleOutlined />
        <p>Xuất file</p>
      </Link>
    </Wrapper>
  )
}

export default History

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
`
