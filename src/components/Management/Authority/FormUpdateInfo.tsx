import { Button, Col, Form, Input, Radio, Row, Select } from 'antd'
import React from 'react'
import styled from 'styled-components'

const { Option } = Select
const FormUpdateInfo = () => {
  return (
    <Wrapper>
      {' '}
      <Form layout='horizontal'>
        <Row className='row-1'>
          <Col span={12} className='col-1'>
            <Form.Item name='Tên người dùng' label='Tên người dùng' required>
              <Input defaultValue='Nguyen Van A' />
            </Form.Item>
            <Form.Item name='Email' label='Email' required>
              <Input defaultValue='nguyenvana@gmail.com' />
            </Form.Item>
            <Form.Item name='Số điện thoại' label='Số điện thoại' required>
              <Input defaultValue='012345678' />
            </Form.Item>
            <Form.Item name='Vai trò' label='Vai trò' required>
              <Select defaultValue='QC'>
                <Option value='Super Admin'>Super Admin</Option>
                <Option value='Group Admin'>Group Admin</Option>
                <Option value='Sub-user'>Sub-user</Option>
                <Option value='ContentManager'>ContentManager</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12} className='col-2'>
            <Form.Item name='Tên đăng nhập' label='Tên đăng nhập' required>
              <Input style={{ height: '40px' }} defaultValue='nguyenvana@gmail.com' />
            </Form.Item>
            <Form.Item name='Mật khẩu' label='Mật khẩu' required>
              <Input.Password defaultValue='123456' />
            </Form.Item>
            <Form.Item name='Nhập lại mật khẩu' label='Nhập lại mật khẩu' required>
              <Input.Password defaultValue='123456' />
            </Form.Item>
            <Form.Item name='Trạng thái' label='Trạng thái' required>
              <Radio.Group name='radiogroup' defaultValue={1}>
                <Radio value={1}>Đã kích hoạt</Radio>
                <Radio value={2}>Ngưng kích hoạt</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
        </Row>
        <Row className='row-2'>
          <Form.Item>
            <Button className='btn-huy' htmlType='submit'>
              Hủy
            </Button>
          </Form.Item>
          <Form.Item>
            <Button className='btn-luu'>Lưu</Button>
          </Form.Item>
        </Row>
      </Form>
    </Wrapper>
  )
}

export default FormUpdateInfo

const Wrapper = styled.div`
  .row-1 {
    .col-1 {
      .ant-input,
      .ant-select-selector {
        height: 40px;
      }
    }
    label {
      width: 170px;
      display: flex;
      align-items: center;
      color: white;
      font-size: 16px;
      font-weight: 500;
    }
    .ant-input,
    .ant-select-selector,
    .ant-select,
    .ant-input-affix-wrapper {
      width: 300px;
      background: #2b2b3f;
      color: white;
    }
    .ant-input-password {
      height: 40px;
    }

    .col-1 {
      width: 500px;
    }
  }
  .ant-radio-group {
    display: flex;
  }
  .ant-select-arrow {
    color: var(--text-primary);
  }
  .row-2 {
    display: flex;
    margin-top: 50px;
    justify-content: center;
  }
`
