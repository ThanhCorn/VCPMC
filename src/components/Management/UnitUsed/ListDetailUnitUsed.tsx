import {
  CloseOutlined,
  DownCircleFilled,
  DownOutlined,
  PlusOutlined,
  RightOutlined,
  TeamOutlined
} from '@ant-design/icons'
import { Checkbox, Col, Dropdown, Input, List, Row, Switch } from 'antd'
import React, { useContext } from 'react'
import styled from 'styled-components'
import type { MenuProps } from 'antd'
import { Link } from 'react-router-dom'
import Page from '../../Page'
import { DataContext, DataProps } from '../../../context/DataContext'
import { doc, updateDoc } from '@firebase/firestore'
import { db } from '../../../firebase'
import { PartnerAuthorizer, myPartner } from '../../../myData'
const { Search } = Input
const onSearch = (value: string) => console.log(value)

const items: MenuProps['items'] = [
  {
    label: 'Đang kích hoạt',
    key: '1'
  },
  {
    label: 'Ngừng kích hoạt',
    key: '2'
  }
]

const ListDetailUnitUsed = () => {
  const { data } = useContext(DataContext)

  return (
    <Wrapper>
      <p style={{ opacity: '0.5', marginBottom: '0' }}>
        Quản lý <RightOutlined style={{ color: '#FFAC69' }} />
        <Link style={{ color: '#fff', textDecoration: 'none' }} to='/management/used'>
          Đơn vị sử dụng{' '}
        </Link>{' '}
        <RightOutlined style={{ color: '#FFAC69' }} />
        Chi tiết
      </p>
      <h1>Đơn vị sử dụng - ABCD</h1>
      <Search
        className='search'
        placeholder='Tên khoản giá trị, số hợp đồng,....'
        onSearch={onSearch}
        style={{ width: '200px', marginBottom: '20px' }}
      />
      <Container>
        <Row className='row-1'>
          <Col span={1} className='col-1'>
            <Checkbox></Checkbox>
          </Col>

          <Col span={1}>
            <p>STT</p>
          </Col>
          <Col span={3}>
            <p>Tên người dùng</p>
          </Col>
          <Col span={2}>
            <p>Vai trò</p>
          </Col>
          <Col span={4}>
            <p>Email</p>
          </Col>
          <Col span={4}>
            <p>Tên đăng nhập</p>
          </Col>
          <Col span={3}>
            <p> Cập nhật lần cuối </p>
          </Col>
          <Col span={3}>
            <p>Trạng thái</p>
          </Col>
        </Row>
        <List
          itemLayout='horizontal'
          dataSource={myPartner}
          renderItem={(myPartner: PartnerAuthorizer) => (
            <List.Item key={myPartner.stt} style={{ alignItems: 'center', display: 'flex' }}>
              <Row className='row-2'>
                <Col span={1} className='col-1'>
                  <Checkbox />
                </Col>
                <Col span={1}>
                  <p> {myPartner.stt}</p>
                </Col>
                <Col span={3}>
                  <p>{myPartner.hoten}</p>
                </Col>
                <Col span={2}>
                  <p>{myPartner.vaitro}</p>
                </Col>
                <Col span={4}>
                  <p>{myPartner.email}</p>
                </Col>
                <Col span={4}>
                  <p>{myPartner.tendangnhap}</p>
                </Col>
                <Col span={3}>
                  <p>{myPartner.ngaycapnhat}</p>
                </Col>
                <Col span={3}>
                  <p>{myPartner.trangthai ? '🤢 Đang Hoạt động' : '👺 Ngừng hoạt động'}</p>
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
                    to='/management/used/detail-user'
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
        <Page data={myPartner} />
      </Container>
      <div className='side-option'>
        <div className='option'>
          <Link to='/management/used/add-user' className='link-option'>
            <div className='icon-2'>
              <PlusOutlined style={{ color: '#FF7506' }} />
            </div>
            <p>
              Thêm
              <br />
              Người dùng
            </p>
          </Link>
          <Link to='' className='link-option'>
            <div className='icon-2'>
              <CloseOutlined />
            </div>
            <p>Xóa</p>
          </Link>
          <Link to='' className='link-option'>
            <div className='icon-2'>
              <TeamOutlined style={{ color: '#FF7506' }} />
            </div>
            <p>Vai trò</p>
          </Link>
        </div>
      </div>
    </Wrapper>
  )
}

export default ListDetailUnitUsed

const Container = styled.div`
  width: 1541px;
  max-height: 722px;
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
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 50px;
  margin-left: 50px;
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
`
