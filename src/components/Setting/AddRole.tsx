import { KeyOutlined, PlusCircleOutlined, RightOutlined, UserDeleteOutlined } from '@ant-design/icons'
import { Button, Checkbox, Col, DatePicker, Input, Radio, Row, Select } from 'antd'
import dayjs from 'dayjs'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const { Option } = Select
const dateFormat = 'YYYY-MM-DD'

const AddRole = () => {
  return (
    <Wrapper>
      <div className='content'>
        <p style={{ color: 'white', opacity: '0.5' }}>
          Cài đặt
          <RightOutlined style={{ color: '#FFAC69' }} />
          Phân quyền người dùng
          <RightOutlined style={{ color: '#FFAC69' }} />
          Thêm vai trò
        </p>
        <h1>Thêm vai trò người dùng</h1>
        <Container>
          <div className='container-1'>
            <div className='input-text'>
              <h4>Tên vai trò</h4>
              <Input />
            </div>
            <div className='input-text-2'>
              <h4>Mô tả</h4>
              <Input.TextArea rows={4} />
            </div>
          </div>
          <div className='container-2'>
            <div className='content'>
              <Row className='row-1'>
                <Col span={12}>
                  <div className=''>
                    <h4>Tên nhóm chức năng</h4>
                    <p style={{ marginTop: '100px' }}>Quản lý người dùng</p>
                    <p style={{ marginTop: '150px' }}>Quản lý thư viện</p>
                  </div>
                </Col>
              </Row>
              <Row className='row-2'>
                <Col span={12}>
                  <div className=''>
                    <h4>
                      <Checkbox />
                      Phân quyền người dùng
                    </h4>
                    <p>
                      <Checkbox /> Tạo người dùng
                    </p>
                    <p>
                      <Checkbox /> Cập nhật thông tin người dùng
                    </p>
                    <p>
                      <Checkbox /> Xóa người dùng
                    </p>
                    <p style={{ borderBottom: '1px solid #fff' }}>
                      <Checkbox /> Xem thông tin chi tiết
                    </p>
                    <p>
                      <Checkbox /> Danh sách Media
                    </p>
                    <p>
                      <Checkbox />
                      Tải lên Media
                    </p>
                    <p>
                      <Checkbox />
                      Chỉnh sửa thông tin Media
                    </p>
                    <p>
                      <Checkbox />
                      Xóa Media
                    </p>
                    <p>
                      <Checkbox /> Phê duyệt Media
                    </p>
                  </div>
                </Col>
              </Row>

              <Row className='row-3'>
                <Col span={12}>
                  <div className=''>
                    <h4>Mã chức năng</h4>
                    <p>nguoidung_phanquyen</p>
                    <p>nguoidung_tao</p>
                    <p>nguoidung_capnhat</p>
                    <p style={{ borderBottom: '1px solid #fff' }}>nguoidung_xoa</p>
                    <p>nguoidung_xemchitiet</p>
                    <p>nguoidung_xemdanhsach</p>
                    <p>nguoidung_tailentep</p>
                    <p>nguoidung_chinhsua</p>
                    <p>nguoidung_xoa</p>
                  </div>
                </Col>
              </Row>
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

export default AddRole

const Container = styled.div`
    width: 1541px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
  
    .container-2 {
      height: 500px;
      border-radius: 10px;
      padding: 10px
      margin-left: 100px;
      width: 800px;
      background: #2b2b3f;
      span {
        color: white;
      }
      .content{
          margin-top:-10px;
          display:grid;
          grid-template-columns: 1fr 1fr 1fr;
          .row-1,.row-2,.row-3{
              h4{
                  color:#FFAC69;
                  margin-bottom:30px;
              }
              p{
                  height:22px;
                  color:white;
                  opacity:0.7;
                  margin-bottom:26px;
              }
          }
  .row-1{
      width:300px;
      margin-right:-90px;
  }
  .row-2{
      width:500px;
      margin-right:-170px;
  }
  .row-3{
      width:300px;
  }
      }
    }
  
    .container-1 {
      display: flex;
      height: 500px;
      flex-direction: column;
      flex: 1;
      .input-text {
        display: flex;
        flex-direction: column;
        margin-bottom: 40px;
        h4 {
          color: white;
          font-weight: 500;
          width: 200px;
          display: flex;
          justify-content: flex-start;
        }
  
        .ant-input {
          color: white;
          width: 500px;
          background: #2b2b3f;
        }
      }
      .input-text-2 {
        display: flex;
        height: 200px;
        flex-direction: column;
        margin-bottom: 40px;
        h4 {
          color: white;
          font-weight: 500;
          width: 200px;
          display: flex;
          justify-content: flex-start;
        }
  
        .ant-input {
          height: 200px;
          color: white;
          width: 500px;
          background: #2b2b3f;
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
  }
`
