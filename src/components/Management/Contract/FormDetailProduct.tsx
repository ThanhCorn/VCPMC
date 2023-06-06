import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import firebase from 'firebase/compat/app'
import 'firebase/firestore'
import { Modal, Input, List, Pagination, Checkbox, Button } from 'antd'
import { CloseOutlined, RightOutlined } from '@ant-design/icons'
import type { CheckboxChangeEvent } from 'antd/es/checkbox'
import { DataContext } from '../../../context/DataContext'

import Page from '../../Page'
import { Link, useNavigate } from 'react-router-dom'
import ListenButton from '../../ListenButton'

const onChange = (e: CheckboxChangeEvent) => {
  console.log(`checked = ${e.target.checked}`)
}

const { Search } = Input
const onSearch = (value: string) => console.log(value)
const DetailProduct: React.FC = () => {
  const navigate = useNavigate()
  const { data } = useContext(DataContext)

  return (
    <Wrapper>
      <div className='content'>
        <div className='header-text'>
          <span>
            Quản lý hợp đồng <RightOutlined />
          </span>
          <span>
            Chi tiết hợp đồng <RightOutlined />
          </span>
          <span> Chỉnh sửa danh sách tác phẩm uỷ quyền</span>
        </div>

        <h1 style={{ width: '1000px' }}>Hợp đồng uỷ quyền bài hát - BH123</h1>

        <div className='option-1'>
          <Search placeholder='Tên bản ghi, tên ca sĩ, tác giả,...' onSearch={onSearch} style={{ width: 200 }} />
        </div>
        <List
          bordered
          style={{
            color: '#fff',
            width: '73.6vw',
            border: '1px solid #727288',
            borderRadius: '16px',
            background: 'rgba(47, 47, 65, 0.7)'
          }}
          itemLayout='horizontal'
        >
          {data.map((item, index) => (
            <List.Item key={item['STT']} style={{ color: '#fff' }}>
              <Checkbox style={{ marginRight: '10px' }} onChange={onChange} value='checked'></Checkbox>
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
              <List.Item.Meta title={`${index === 0 ? 'Ca sĩ' : ''}`} description={item['Người ủy quyền']} />
              <List.Item.Meta title={`${index === 0 ? 'Tác giả' : ''}`} description={item['Tác giả']} />
              <List.Item.Meta
                title={`${index === 0 ? 'Ngày tải' : ''}`}
                description={item['Ngày tải'] ? item['Ngày tải'].toDate().toLocaleString() : ''}
              />
              <List.Item.Meta
                title={`${index === 0 ? 'Tình trạng' : ''}`}
                description={
                  item['Hiệu lực hợp đồng'][0] === 'Còn thời hạn'
                    ? `🌱${item['Hiệu lực hợp đồng'][2]}`
                    : `⚡${item['Hiệu lực hợp đồng'][5]}`
                }
              />
              <div>
                <ListenButton />
              </div>
            </List.Item>
          ))}
          <Page data={data} />
        </List>
        <div className='option'>
          <Link to='/management/contract/detail-authority' className='link-option'>
            <CloseOutlined className='icon' /> <br />
            <p>
              {' '}
              Từ chối <br />
              Bản ghi
            </p>
          </Link>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '50px'
          }}
        >
          <Button danger className='btn-huy'>
            Hủy
          </Button>
          <Button onClick={() => navigate('/management/contract/detail-authority')} type='primary' className='btn-luu'>
            Lưu
          </Button>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  background-color: var(--primary-color);
  .content {
    margin-top: 50px;
    margin-left: 50px;
    margin-right: 10px;
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
          margin-left: 15px;
          width: 50px;
          font-size: 2rem;
          color: #ff7506;
          border: 1px solid rgba(114, 114, 136, 0.5);
          border-radius: 50%;
          svg {
            color: red;
          }
        }
        p {
          color: #fff;
          opacity: 0.5;
          font-size: 12px;
        }
      }
    }
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
      width: 600px;
      height: 48px;
      font-size: 36px;
      line-height: 48px;
      color: #ffffff;
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
    height: 500px;
    .ant-spin-container {
      height: 500px;
    }
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

export default DetailProduct
