import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import SideMenu from '../../components/SideMenu'
import PageContent from '../../components/PageContent'
import { Button, Dropdown, Input, Space } from 'antd'
import {
  AppstoreOutlined,
  CheckOutlined,
  CloseOutlined,
  DownOutlined,
  FormOutlined,
  RightOutlined,
  UnorderedListOutlined
} from '@ant-design/icons'
import { items, items2, items3, items4 } from '../../MenuDropDown'
import ListView from '../../components/Management/Contract/ListView'
import GridView from '../../components/Management/Contract/GridView'
import { useDispatch, useSelector } from 'react-redux'
import { setGridView, setListView } from '../../features/layoutSlice'

import { RootState } from '../../app/store'
import { Link } from 'react-router-dom'
import { DataContext } from '../../context/DataContext'
const { Search } = Input
const onSearch = (value: string) => console.log(value)

const RecordStore = () => {
  const isListView = useSelector((state: RootState) => state.view.isListView)
  const [isChecked, setIsChecked] = React.useState(false)
  const { isKhoBanGhi, setIsKhoBanGhi } = useContext(DataContext)
  const dispatch = useDispatch()

  return (
    <Wrapper>
      <div className='content'>
        <h1>Kho bản ghi</h1>
        <Search onSearch={onSearch} placeholder='Tên bản ghi, tên ca sĩ,...' />
        <div className='option-1'>
          <Space className='space-1'>
            <p>Thể loại:</p>
            <Dropdown menu={{ items: items }}>
              <Button className='button-1'>
                <Space>
                  Tất cả
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
          </Space>
          <Space className='space-2'>
            <p>Định dạng:</p>
            <Dropdown menu={{ items: items2 }}>
              <Button className='button-1'>
                <Space>
                  Tất cả
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
          </Space>
          <Space className='space-3'>
            <p>Thời gian sử dụng:</p>
            <Dropdown menu={{ items: items3 }}>
              <Button className='button-1'>
                <Space>
                  Tất cả
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
          </Space>
          <Space className='space-4'>
            <p>Trạng thái:</p>
            <Dropdown menu={{ items: items4 }}>
              <Button className='button-2'>
                <Space>
                  Tất cả
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
          </Space>
          <Space className='space-5'>
            <Button
              onClick={() => {
                dispatch(setListView(false))
              }}
            >
              <UnorderedListOutlined className={`${isListView ? 'svg-active' : null}`} />
            </Button>
            <Button
              onClick={() => {
                dispatch(setGridView(true))
              }}
            >
              <AppstoreOutlined className={`${!isListView ? 'svg-active' : null}`} />
            </Button>
          </Space>
          <div className='option'>
            <Link to='/record-approval' className='link-option' onClick={() => setIsKhoBanGhi(false)}>
              <div className='icon'>
                <FormOutlined />
              </div>
              <p>
                &nbsp;&nbsp;Quản lý <br />
                phê duyệt
              </p>
            </Link>
          </div>
        </div>
        {isListView ? (
          <ListView listView={isListView} isKhoBanGhi={isKhoBanGhi} />
        ) : (
          <GridView gridView={isListView} isKhoBanGhi={isKhoBanGhi} isChecked={isChecked} />
        )}
      </div>
    </Wrapper>
  )
}

export default RecordStore

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: var(--primary-color);
  display: flex;
  .content {
    margin-left: 50px;
    margin-top: 50px;
    .option-1 {
      margin-top: 20px;
      width: 1541px;
      display: flex;
      p {
        opacity: 1 !important;
      }
      .space-1,
      .space-2,
      .space-3 {
        margin-right: 50px;
        .button-1 {
          background: #1e1e2e;
          color: #fff;
          width: 131px;
          height: 40px;
          border: 1px solid #ff7506;
          .ant-space {
            display: flex;
            justify-content: space-between;
          }
        }
      }
      .space-4 {
        margin: auto;
        margin-left: 0;
        .button-2 {
          background: #1e1e2e;
          color: #fff;
          width: 200px;
          height: 40px;
          border: 1px solid #ff7506;
          .ant-space {
            display: flex;
            justify-content: space-between;
          }
        }
      }
      .space-5 {
        button {
          background: transparent;
          border: none;
          color: #fff;
          svg {
            font-size: 2rem;
          }
        }
      }
    }

    .ant-input-wrapper {
      background: #1e1e2e;
      width: 517px;
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
    .svg-active {
      color: #ff7506;
    }
    .ant-input {
      background: #1e1e2e;
      color: #fff;
      border: 1px solid #727288;
      width: 517px;
      ::placeholder {
        color: #727288;
      }
      :hover {
        border-right: none;
      }
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
        margin-left: 7px;
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
      }
      p {
        color: #fff;
        opacity: 0.5;
        font-size: 12px;
      }
    }
  }
`
