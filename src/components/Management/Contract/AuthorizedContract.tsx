import React, { useState, useEffect, useContext } from 'react'
import type { MenuProps } from 'antd'
import { Space, Button, Dropdown, Input, List, Pagination, Modal } from 'antd'
import { DownOutlined, PlusCircleOutlined, RightOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import { toast } from 'react-toastify'
import 'firebase/firestore'
import InfoContract from './FormContract'
import { DataContext, DataProps } from '../../../context/DataContext'
import AuthoritySong from './AuthoritySong'
import { Link } from 'react-router-dom'
import Page from '../../Page'
import { AppDispatch, RootState } from '../../../app/store'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { fetchData } from '../../../features/layoutSlice'

const { Search } = Input
const onSearch = (value: string) => console.log(value)

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

type Props = {
  children?: React.ReactNode | null
}

const AuthorizedContract = ({ children }: Props) => {
  const dispatch: AppDispatch = useDispatch()
  const data2 = useSelector<RootState, DataProps[]>((state) => state.view.data2)
  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])
  const HieuLucHopDong = data2.length > 0 ? data2[0]['Hiệu lực hợp đồng'] : []
  const HieuLucHopDongOptions = HieuLucHopDong.map((option, index) => ({
    label: option,
    key: index.toString()
  }))

  return (
    <>
      <Wrapper className='option'>
        <div className='option-1'>
          <Space className='space-1'>
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
          <Space className='space-2'>
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
        <div className='option-2'>
          <Search
            placeholder='Tên hợp đồng, số hợp đồng, người uỷ quyền...'
            onSearch={onSearch}
            style={{ width: 200 }}
          />
        </div>
        <Container>
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
            {data2.map((item, index) => (
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
                  title={`${index === 0 ? 'Tên hợp đồng' : ''}`}
                  description={item['Tên hợp đồng']}
                  style={{ maxWidth: '309px' }}
                />
                <List.Item.Meta title={`${index === 0 ? 'Quyền sở hữu' : ''}`} description={item['Quyền sở hữu']} />
                <List.Item.Meta title={`${index === 0 ? 'Người ủy quyền' : ''}`} description={item['Người ủy quyền']} />
                <List.Item.Meta
                  title={`${index === 0 ? 'Hiệu lực hợp đồng' : ''}`}
                  description={`${
                    item['Hiệu lực hợp đồng'][0] === 'Còn thời hạn'
                      ? `🌱${item['Hiệu lực hợp đồng'][0]}`
                      : `⚡${item['Hiệu lực hợp đồng'][0]}`
                  }`}
                />
                <List.Item.Meta
                  title={`${index === 0 ? 'Ngày tạo' : ''}`}
                  description={item['Ngày tạo'] ? item['Ngày tạo'].toDate().toLocaleString() : ''}
                />
                <div style={{ width: '170px' }}>
                  <Link
                    to='/management/contract/detail-authority'
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
                  {item['Hiệu lực hợp đồng'][0] === 'Còn thời hạn' ? (
                    ' '
                  ) : (
                    <button
                      style={{
                        background: 'transparent',
                        border: 'none',
                        textDecoration: 'underline',
                        color: '#ff7506'
                      }}
                    >
                      Lý do hủy
                    </button>
                  )}
                </div>
              </List.Item>
            ))}
          </List>
          <Page data={data2} />
        </Container>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 20px;
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
    width: 501px;
    transform: translate(35%, 0);
    .ant-input-wrapper {
      width: 501px;

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
      margin-top: 10px;
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

const ModalContainer = styled(Modal)`
  background: #1e1e2e;
  height: 100%;
  .dvwUQJ .ant-modal-content {
    background: rgb(30, 30, 46);
    height: 100%;
  }
  .ant-modal-content {
    background: #1e1e2e;
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
`
export default AuthorizedContract
