import { KeyOutlined, PlusCircleOutlined, RightOutlined, UserDeleteOutlined } from '@ant-design/icons'
import { Button, DatePicker, Input, Radio, Select } from 'antd'
import dayjs from 'dayjs'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const { Option } = Select
const dateFormat = 'YYYY-MM-DD'

const AddDevice = () => {
  return (
    <Wrapper>
      <div className='content'>
        <p style={{ color: 'white', opacity: '0.5' }}>
          Danh sách thiết bị
          <RightOutlined style={{ color: '#FFAC69' }} />
          Chi tiết thiết bị
          <RightOutlined style={{ color: '#FFAC69' }} />
          Thêm thiết bị mới
        </p>
        <h1> Thêm thiết bị mới</h1>
        <Container>
          <div className='container-1'>
            <div className='input-text'>
              <h4>Tên Thiết bị:</h4>
              <Input />
            </div>
            <div className='input-text'>
              <h4>SKU/ID:</h4>
              <Input />
            </div>
            <div className='input-text'>
              <h4>Địa chỉ MAC:</h4>
              <Input />
            </div>
            <div className='input-text'>
              <h4>Thời hạn bảo hành</h4>
              <DatePicker />
            </div>
            <div className='input-text'>
              <h4>Label:</h4>
              <Input />
            </div>
            <div className='input-text'>
              <h4>Thông tin</h4>
              <div>
                <Input />
                <p style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <PlusCircleOutlined style={{ color: '#FF7506' }} />
                  Thêm thông tin
                </p>
              </div>
            </div>
            <div className='input-text'>
              <h4>Ghi chú:</h4>
              <Input.TextArea rows={4} />
            </div>
          </div>
          <div className='container-2'>
            <div className='input-text'>
              <h4>Tên đăng nhập</h4>
              <Input />
            </div>
            <div className='input-text'>
              <h4>Mật khẩu</h4>
              <Input.Password />
            </div>
            <div className='input-text'>
              <h4>Nhập lại mật khẩu</h4>
              <Input.Password />
            </div>
            <div className='input-text'>
              <h4>Vị trí</h4>
              <Input />
            </div>
          </div>
        </Container>
        <div className='btn'>
          <Button className='btn-huy'>Hủy</Button>
          <Button className='btn-luu'>Lưu</Button>
        </div>
      </div>
    </Wrapper>
  )
}

export default AddDevice

const Container = styled.div`
  display: flex;
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
    .option {
      display: flex;
      flex-direction: column;
      position: fixed;
      top: 40%;
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
    .btn {
      margin-top: 100px;
      display: flex;
      justify-content: center;
      width: 100%;
    }
    .container-2 {
      span {
        color: white;
      }
    }
    .container-2,
    .container-1 {
      display: flex;
      flex-direction: column;
      flex: 1;
      .input-text {
        height: 40px;
        display: flex;
        align-items: center;
        margin-bottom: 40px;
        h4 {
          color: white;
          font-weight: 500;
          width: 200px;
          display: flex;
          justify-content: flex-start;
        }
        .ant-input {
          height: 40px;
        }
        textarea {
          height: 100px !important;
        }
        .ant-input,
        .ant-picker,
        .ant-select-selector,
        .ant-input-password {
          color: white;
          width: 300px;
          background: #2b2b3f;
        }
        .input-text-area {
          height: 100px;
        }
      }
    }
  }
`
