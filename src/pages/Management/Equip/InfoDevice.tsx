import {
  ClockCircleFilled,
  FormOutlined,
  KeyOutlined,
  MehOutlined,
  PlusCircleOutlined,
  PlusOutlined,
  RightOutlined,
  UserDeleteOutlined,
} from '@ant-design/icons';
import { Button, DatePicker, Form, Input, Modal, Radio, Select } from 'antd';
import dayjs from 'dayjs';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Device, myDevice } from '../../../myData';
import { useState } from 'react';

const InfoDevice: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [device, setDevice] = useState<Device[] | null>(myDevice);
  const { id } = useParams<{ id: string }>();
  const deviceWithId = device?.find((device) => device.stt === id);
  return (
    <Wrapper>
      <div className="content">
        <p style={{ color: 'white', opacity: '0.5' }}>
          Danh sách thiết bị
          <RightOutlined style={{ color: '#FFAC69' }} />
          Chi tiết thiết bị
        </p>
        <h1>Thông tin thiết bị - Device 1231243</h1>
        <Container>
          <div className="container-1">
            <h3>Thông tin thiết bị</h3>
            <img src={deviceWithId?.img} alt="" />
            <span style={{ color: '#fff', opacity: '0.7', fontSize: '12px' }}>
              {deviceWithId?.trangthai ? '😄Hoạt động' : '😄Ngưng hoạt động'}
            </span>
            <div className="notice">
              <p>Ghi chú:</p>
              <span>
                Văn bản này không những đã tồn tại năm thế kỉ, mà khi được áp
                dụng vào tin học
              </span>
            </div>
          </div>
          <div className="container-2">
            <h3>Device 1231243</h3>
            <div style={{}}>
              <div className="info-device">
                <p>SKU/ID:</p>
                <span>A23234523423</span>
              </div>
              <div className="info-device">
                <p>Địa chỉ MAC:</p>
                <span>123.34.65.01</span>
              </div>
              <div className="info-device">
                <p>Tên đặng nhập:</p>
                <span>User12321</span>
              </div>
              <div className="info-device">
                <p>Định dạng</p>
                <span>Displayable</span>
              </div>
              <div className="info-device">
                <p>Vị trí</p>
                <span>Hồ chí minh</span>
              </div>
              <div className="info-device">
                <p>Thời hạn bảo hành</p>
                <span>22/05/2022</span>
              </div>
              <div className="info-device">
                <p>Trạng thái thiêt bị</p>
                <span>Activated</span>
              </div>
            </div>
          </div>
          <div className="container-3">
            <h3>Thông tin phiên bản</h3>
            <div className="version">
              <p>Phiên bản củ nhất:</p>
              <div>
                <span>12.3 (20/12/2022)</span>
                <span>12.3 (20/12/2022)</span>
              </div>
            </div>
            <h3>Dung lượng bộ nhớ</h3>
            <div>
              <div className="capacity">
                <p>Dung lượng</p>
                <span>512GB</span>
              </div>
              <div className="capacity">
                <p>Còn trống</p>
                <span>512GB</span>
              </div>
            </div>
          </div>
        </Container>
        <div className="option">
          <Button
            onClick={() => setIsModalOpen(true)}
            className="button-option"
          >
            <div className="icon">
              <FormOutlined />
            </div>
            <p>Chỉnh sửa</p>
          </Button>
          <Button className="button-option">
            <div className="icon">
              <MehOutlined />
            </div>
            <p>
              Khôi phục
              <br />
              Mật khẩu
            </p>
          </Button>

          <Button className="button-option">
            <div className="icon">
              <ClockCircleFilled />
            </div>
            <p>
              Khôi phục <br />
              bộ nhớ
            </p>
          </Button>
        </div>
        {isModalOpen && (
          <ModalContent
            visible={isModalOpen}
            onCancel={() => setIsModalOpen(false)}
          >
            <h3>Chỉnh sửa thông tin thiết bị</h3>
            <Form layout="vertical" className="form">
              <Form.Item label="Tên thiết bị">
                <Input placeholder="Device 1231243" />
              </Form.Item>
              <Form.Item label="SKU/ID">
                <Input placeholder="A23234523423" />
              </Form.Item>
              <Form.Item label="Địa chỉ MAC">
                <Input placeholder="123.34.65.01" />
              </Form.Item>
              <Form.Item label="Tên đăng nhập">
                <Input placeholder="User12321" />
              </Form.Item>
              <Form.Item label="Vị trí">
                <Input placeholder="Hồ chí minh" />
              </Form.Item>
            </Form>
            <span
              style={{ color: '#fff', fontSize: '16px', marginRight: '10px' }}
            >
              Trạng thái thiết bị:
            </span>
            <Radio.Group>
              <Radio value="Đã kích hoạt"> Đã kích hoạt </Radio>
              <Radio value="Ngưng kích hoạt"> Ngưng kích hoạt </Radio>
            </Radio.Group>
            <div className="btn">
              <Button onClick={() => setIsModalOpen(false)} className="btn-huy">
                Hủy
              </Button>
              <Button onClick={() => setIsModalOpen(false)} className="btn-luu">
                Lưu
              </Button>
            </div>
          </ModalContent>
        )}
      </div>
    </Wrapper>
  );
};

export default InfoDevice;

const Container = styled.div`
  width: 1541px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background: #2f2f41;
  height: 480px;
  padding: 0 50px;
  h3 {
    color: #ff7506;
  }
  .container-3 {
    width: 440px;
    .capacity {
      display: flex;
      align-items: center;
      p {
        width: 150px;
        margin-right: 20px;
        font-weight: 500;
      }
      span {
        display: flex;
        flex-direction: column;
        color: #fff;
        opacity: 0.5;
      }
    }
    .version {
      height: 200px;
      display: flex;
      align-items: baseline;
      p {
        margin-right: 20px;
        font-weight: 500;
      }
      span {
        display: flex;
        flex-direction: column;
        color: #fff;
        opacity: 0.5;
      }
    }
  }
  .container-2 {
    width: 440px;
    .info-device {
      display: flex;
      align-items: center;
      p {
        width: 250px;
        font-weight: 500;
      }
      span {
        width: 150px;
        display: flex;
        justify-content: flex-start;
        opacity: 0.7;
      }
    }
  }
  .container-1 {
    width: 340px;
    img {
      width: 340px;
      height: 160px;
      border-radius: 10px;
      margin-bottom: 20px;
    }
    .notice {
      display: flex;
      align-items: baseline;
      p {
        font-weight: 500;
        width: 200px;
      }
      span {
        color: #fff;
        opacity: 0.7;
        font-weight: 300;
      }
    }
  }
`;

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
`;
const ModalContent = styled(Modal)`
  .btn {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .form {
    label {
      color: #fff;
      font-size: 16px;
    }
  }
  span {
    color: #fff;
  }
  img {
    width: 100%;
    margin-top: 30px;
  }
  .ant-modal-content {
    background: #2f2f41;
  }
  .ant-modal-title {
    background: #2f2f41;
    color: #fff;
    margin-bottom: 30px;
    justify-content: center;
    align-items: center;
    display: flex;
  }
  .ant-input {
    color: #fff;
    border: 1px solid #727288;
    background: #2b2b3f;
    height: 40px;
    ::placeholder {
      color: #fff;
      opacity: 0.5;
    }
  }
  .ant-modal-footer {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    .ant-btn-default {
      display: none;
    }
    .ant-btn-primary {
      display: none;
    }
  }
`;
