import React, { useState, useEffect, useContext } from 'react'
import type { MenuProps } from 'antd'
import { Input, List, Pagination } from 'antd'
import styled from 'styled-components'
import firebase from 'firebase/compat/app'
import 'firebase/firestore'
import { DataContext } from '../../../context/DataContext'
import { Link } from 'react-router-dom'
import Page from '../../Page'

const { Search } = Input
const onSearch = (value: string) => console.log(value)

interface DataProps {
  STT: number
  'Số hợp đồng': string
  'Tên hợp đồng': string
  'Quyền sở hữu': string
  'Người ủy quyền': string
  'Ngày tạo': firebase.firestore.Timestamp
  'Ngày hết hạn': firebase.firestore.Timestamp
  'Ngày hiệu lực': firebase.firestore.Timestamp
  'Khách hàng': string
  'Hiệu lực hợp đồng': string[]
}

const items: MenuProps['items'] = [
  {
    label: 'Người biểu diễn',
    key: '1'
  },
  {
    label: 'Nhà diễn xuất',
    key: '2'
  }
]
const handleMenuClick: MenuProps['onClick'] = (e) => {
  console.log('click', e)
}
const menuProps = {
  items,
  onClick: handleMenuClick
}

const MiningContract = () => {
  const { data } = useContext(DataContext)
  const HieuLucHopDong = data.length > 0 ? data[0]['Hiệu lực hợp đồng'] : []
  const HieuLucHopDongOptions = HieuLucHopDong.map((option, index) => ({
    label: option,
    key: index.toString()
  }))

  return (
    <>
      <Wrapper className='option'>
        <div className='option-1'>
          <Search placeholder='Tên hợp đồng, tên tác giả,...' onSearch={onSearch} style={{ width: '200px' }} />
        </div>
        <Container>
          <List bordered style={{ color: '#fff', width: '73.6vw' }} itemLayout='horizontal'>
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
                  description={item['Ngày tạo'] ? item['Ngày tạo'].toDate().toLocaleString() : ''}
                />
                <List.Item.Meta
                  title={`${index === 0 ? 'Ngày hiệu lực' : ''}`}
                  description={
                    item['Ngày hiệu lực'] ? item['Ngày hiệu lực'].toDate().toLocaleString().slice(8, 18) : ''
                  }
                />
                <List.Item.Meta
                  title={`${index === 0 ? 'Ngày hết hạn' : ''}`}
                  description={item['Ngày hết hạn'] ? item['Ngày hết hạn'].toDate().toLocaleString().slice(8, 18) : ''}
                />
                <List.Item.Meta
                  title={`${index === 0 ? 'Hiệu lực hợp đồng' : ''}`}
                  description={item['Hiệu lực hợp đồng'][0]}
                />
                <div>
                  <Link
                    to='/management/contract/detail-mining'
                    style={{
                      background: 'transparent',
                      border: 'none',
                      textDecoration: 'underline',
                      color: '#ff7506',
                      cursor: 'pointer',
                      marginRight: '10px'
                    }}
                  >
                    Xem chi tiết
                  </Link>

                  <Link
                    to='/management/contract/copy'
                    style={{
                      background: 'transparent',
                      border: 'none',
                      textDecoration: 'underline',
                      color: '#ff7506',
                      cursor: 'pointer'
                    }}
                  >
                    Sao chép hợp đồng
                  </Link>
                </div>
              </List.Item>
            ))}
          </List>
          <Page data={data} />
        </Container>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  margin-bottom: 20px;
  button {
    height: 48px;
  }
  position: relative;
  align-items: center;
  .option-1 {
    width: 50%;
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
`

const Container = styled.div`
  position: absolute;
  top: 100px;
  left: 0;
  .ant-list {
    height: 300px;
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
`

export default MiningContract
