import React, { useState } from 'react';
import styled from 'styled-components';
import 'firebase/firestore';
import { Modal, Input, Button, DatePicker, Checkbox, Radio, Row } from 'antd';
import {
  ContainerOutlined,
  CloseOutlined,
  FormOutlined,
  DownOutlined,
  UploadOutlined,
  FileOutlined,
} from '@ant-design/icons';
import {
  FilePdfOutlined,
  InfoCircleOutlined,
  CloudUploadOutlined,
  RightOutlined,
} from '@ant-design/icons';
import { DataContext } from '../../context/DataContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

const { TextArea } = Input;
const CheckboxGroup = Checkbox.Group;

const options = [
  {
    label: (
      <p style={{ marginTop: '0px !important' }}>
        Quyền của người biểu diễn{' '}
        <span
          style={{
            padding: '5px',
            border: '1px solid #727288',
            borderRadius: '4px',
            background: '#2B2B3F',
            marginRight: '5px',
          }}
        >
          0{' '}
        </span>
        %
      </p>
    ),
    value: 'performer',
  },

  {
    label: (
      <p style={{ marginTop: '0 !important' }}>
        Quyền của nhà sản xuất{' '}
        <span
          style={{
            padding: '5px',
            border: '1px solid #727288',
            borderRadius: '4px',
            background: '#2B2B3F',
            marginRight: '5px',
          }}
        >
          0{' '}
        </span>
        %
      </p>
    ),
    value: 'producer',
  },
];
const onChange = (checkedValues: any) => {
  console.log('checked = ', checkedValues);
};

const FormCopyContract: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const { data } = useContext(DataContext);
  const { currentUser } = useContext(UserContext);
  const [isAuthorizingOrMining, setIsisAuthorizingOrMining] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const showModal2 = () => {
    setIsModalOpen2(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Wrapper>
      <div className="content">
        <h4 style={{ color: 'white' }}>
          Quản lý <RightOutlined /> Quản lý hợp đồng <RightOutlined /> Sao chép
          hợp đông
        </h4>
        <h1 style={{ width: '1000px' }}>Bản sao hợp đồng khai thác - BH123</h1>
        <Container>
          <Row>
            <div className="row-1">
              <div className="content-row">
                <p>Tên hợp đông</p>
                <Input placeholder="Hợp đồng kinh doanh" />
              </div>
              <div className="content-row">
                <p>Số hợp đồng:</p>
                <Input placeholder="123" />
              </div>
              <div className="content-row">
                <p>Ngày hiệu lực:</p>
                <DatePicker className="Hợp đồng kinh doanh" />
              </div>
              <div className="content-row">
                <p>Ngày hết hạn:</p>
                <DatePicker className="Hợp đồng kinh doanh" />
              </div>
            </div>
            <div className="row-2">
              <div className="content-row">
                <p>
                  Đính kèm tệp:{' '}
                  <span className="upload">
                    <UploadOutlined /> Tải lên
                  </span>
                </p>
              </div>
              <div className="content-row">
                <p style={{ marginLeft: '100px' }}>
                  <FileOutlined /> hetthuongcannho.doc <br />
                  <FileOutlined /> hetthuongcannho.doc
                </p>
              </div>
            </div>
            <div className="row-3">
              <p>Loại hợp đồng</p>
              <div className="content-row">
                <Checkbox style={{ marginRight: '70px' }}>
                  <p>Trọn gói</p>
                </Checkbox>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div className="price">
                    <p>Giá trị hợp đồng (VNĐ)</p>
                    <Input placeholder="213.000.000"></Input>
                  </div>
                  <div className="price">
                    <p>Giá trị Phân phối (VNĐ)</p>
                    <Input placeholder="213.000.000"></Input>
                  </div>
                </div>
              </div>
              <div className="content-row">
                <Checkbox style={{ marginRight: '70px' }}>
                  <p>Lượt phát</p>
                </Checkbox>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div className="price">
                    <p>Giá trị Lượt phát VNĐ/Ngày</p>
                    <Input placeholder="213.000.000"></Input>
                  </div>
                </div>
              </div>
            </div>
          </Row>
          <Row>
            <div className="row-1">
              <div className="content-row">
                <p>Tên đơn vị sử dụng:</p>
                <Input placeholder="Công ty TNHH MTV  Âu Lạc" />
              </div>
              <div className="content-row">
                <p>Người đại diện:</p>
                <Input placeholder="Nguyễn văn A" />
              </div>
              <div className="content-row">
                <p>Chức vụ:</p>
                <Input placeholder="Giám đốc" />
              </div>
              <div className="content-row">
                <p>Ngày sinh:</p>
                <DatePicker />
              </div>
              <div className="content-row">
                <p>Quốc tịch:</p>
                <Input placeholder="Việt Nam" />
              </div>
              <div className="content-row">
                <p>Số điện thoại:</p>
                <Input placeholder="123456789012" />
              </div>
              <div className="content-row">
                <p>Email:</p>
                <Input placeholder="nguyenvana@gmail.com" />
              </div>
            </div>
            <div className="row-1">
              <div className="content-row-1">
                <p>
                  Giới tính
                  <Radio.Group
                    onChange={onChange}
                    style={{ marginLeft: '30px' }}
                  >
                    <Radio style={{ color: '#fff' }} value={1}>
                      Cá nhân
                    </Radio>
                    <Radio style={{ color: '#fff' }} value={2}>
                      Tổ chức
                    </Radio>
                  </Radio.Group>
                </p>
              </div>
              <div className="content-row">
                <p>CMND/ CCCD:</p>
                <Input placeholder="123456789012" />
              </div>
              <div className="content-row">
                <p>Ngày cấp:</p>
                <DatePicker />
              </div>
              <div className="content-row">
                <p>Nơi cấp:</p>
                <Input placeholder="Việt Nam" />
              </div>
              <div className="content-row">
                <p>Mã số thuế:</p>
                <Input placeholder="123456789012" />
              </div>
              <div className="content-row">
                <p>Nơi cư trú:</p>
                <Input.TextArea placeholder="69/53, Nguyễn Gia Trí, Phường 25, Quận Bình Thạnh, Thành phố Hồ Chí Minh" />
              </div>
            </div>
            <div className="row-3">
              <div className="content-row">
                <p>Tên đăng nhập:</p>
                <Input placeholder="vuonganhtu123" />
              </div>
              <div className="content-row-1">
                <p>Mật khẩu:</p>
                <Input.Password value="ddddddđ" />
              </div>
              <div className="content-row">
                <p>Số tài khoản:</p>
                <Input placeholder="1231123312211223" />
              </div>
              <div className="content-row">
                <p>Ngân hàng:</p>
                <Input placeholder="Ngân hàng Phương Đông - OCB" />
              </div>
            </div>
          </Row>
        </Container>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '50px',
          }}
        >
          <Button
            danger
            style={{
              height: '48px',
              marginRight: '20px',
              backgroundColor: 'transparent',
              width: '168px',
              color: '#FF7506',
              border: '1px solid #FF7506',
            }}
          >
            Hủy
          </Button>
          <Button
            type="primary"
            htmlType="submit"
            style={{
              height: '48px',
              width: '168px',
              backgroundColor: '#FF7506',
            }}
          >
            Lưu
          </Button>
        </div>
      </div>
    </Wrapper>
  );
};

const Container = styled.div`
  padding-right: 0px !important;
  height: 70vh;

  .ant-row {
    display: flex;
    width: 100%;
    margin-bottom: 50px;
    .row-3 {
      .content-row-1 {
        display: flex;

        p {
          width: 160px;
        }
        .ant-input-password {
          width: 200px !important;
          background: #1e1e2e;
          border: 1px solid #727288;
          > .ant-input {
            background: #1e1e2e;
          }
        }
      }
      .content-row {
        display: flex;
        align-items: center;
      }
      .ant-checkbox-wrapper {
        display: flex;
        width: 100px;
        align-self: flex-start;
      }
      .ant-checkbox-input {
        display: flex;
        align-items: center;
        transform: translateY(50%);
      }
      .ant-input {
        width: 200px !important;
        height: 40px !important;
      }
      .price {
        align-items: center;
        display: flex;
      }
    }
    .row-2 {
      width: 600px;
      p {
        font-size: 16px;
      }
      .upload {
        margin-left: 10px;
        padding: 5px 10px;
        border: 1px solid #727288;
        border-radius: 4px;
        color: #ff7506;
      }
    }
    .row-1,
    .row-3 {
      p {
        font-size: 16px;
      }
      width: 500px;

      margin-right: 100px;
      .content-row {
        display: flex;
        margin: 0;
        margin-bottom: 10px;
        span {
          color: #fff;
          font-size: 16px;
        }
        .ant-picker {
          background: #1e1e2e;
          border: 1px solid #727288;
          svg {
            color: #ff7506;
            font-size: 1rem;
          }
          .ant-picker-input {
            input {
              color: #fff;
              opacity: 0.5;
            }
          }
        }
        .ant-input {
          width: 340px;
          background: #1e1e2e;
          border: 1px solid #727288;
          ::placeholder {
            color: #fff;
            opacity: 0.5;
          }
        }
        p {
          font-size: 16px;
          width: 160px;
        }
      }
    }
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  background-color: var(--primary-color);
  .content {
    margin-top: 50px;
    margin-left: 50px;
    margin-right: 10px;
    flex: 1;
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
      margin-top: -20px;
      width: 600px;
      height: 48px;
      font-size: 36px;
      line-height: 48px;
      color: #ffffff;
    }
    h4 {
      font-weight: 200;
      opacity: 0.5;
      font-size: 16px;
      svg {
        color: #ffac69;
      }
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
  .info-4 {
    position: absolute;
    margin-left: 50px;
    background-color: #2f2f41;
    top: 0;
    right: 0;
    transform: translateY(200%);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 110px;
    width: 110px;
    background: #2f2f41;
    border: 0px;
    margin-right: -24px;
    .icon {
      margin-top: 10px;
      margin-left: 20px;
      font-size: 1.5rem;
      width: 52px;
      height: 52px;
      color: #ff7506;
      background: rgba(114, 114, 136, 0.5);
      border-radius: 67px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    button {
      background: #2f2f41;
      cursor: pointer;
    }
  }
`;
const ModalContent = styled(Modal)`
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
    ::placeholder {
      color: #727288;
    }
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
`;

export default FormCopyContract;
