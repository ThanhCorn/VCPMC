import React, { useState } from 'react';
import styled from 'styled-components';
import firebase from 'firebase/compat/app';
import 'firebase/firestore';
import { Modal, Input, Button, DatePicker, Checkbox, Radio } from 'antd';
import {
  ContainerOutlined,
  CloseOutlined,
  FormOutlined,
  DownOutlined,
} from '@ant-design/icons';
import {
  FilePdfOutlined,
  InfoCircleOutlined,
  CloudUploadOutlined,
  RightOutlined,
} from '@ant-design/icons';
import { DataContext } from '../context/DataContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthorizedContract from './AuthorizedContract';
import SideMenu from './SideMenu';
import PageContent from './PageContent';
import Navbar from './Navbar';
import { UserContext } from '../context/UserContext';

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

const AddNewContractAuthority: React.FC = () => {
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
      <SideMenu />
      <div className="content">
        <PageContent />
        <h4 style={{ color: 'white' }}>
          Quản lý hợp đồng <RightOutlined /> Chi tiết hợp đồng <RightOutlined />{' '}
          Chỉnh sửa danh sách tác phẩm uỷ quyền
        </h4>
        <h1 style={{ width: '1000px' }}>Hợp đồng uỷ quyền bài hát - BH123</h1>
        <Container>
          <div className="info-1">
            <div className="info-content-1">
              <h4>
                Số hợp đồng: <p style={{ marginLeft: '20px' }}> BH123</p>
              </h4>
              <h4>
                Tên hợp đồng: <p>Hợp đồng ủy quyền tác phẩm âm nhạc</p>
              </h4>
              <h4>
                Ngày hiệu lực:{' '}
                <p>
                  <p style={{ marginLeft: '-10px', marginRight: '10px' }}>
                    {data[0]['Ngày hiệu lực'].toDate().toLocaleDateString()}
                  </p>
                </p>
              </h4>
              <h4>
                Ngày hết hạn:{' '}
                <p>{data[0]['Ngày hết hạn'].toDate().toLocaleDateString()}</p>
              </h4>
              <h4>
                Tình trạng:{' '}
                <p style={{ marginLeft: '35px' }}>
                  Còn thời hạn
                  <DownOutlined style={{ marginLeft: 'auto' }} />
                </p>{' '}
              </h4>
            </div>
            <div className="info-content-2">
              <h3>Thông tin pháp nhân ủy quyền</h3>
              <h4>
                Pháp nhân ủy quyền:{' '}
                <p>
                  <Radio.Group onChange={onChange}>
                    <Radio style={{ color: '#fff' }} value={1}>
                      Cá nhân
                    </Radio>
                    <Radio style={{ color: '#fff' }} value={2}>
                      Tổ chức
                    </Radio>
                  </Radio.Group>
                </p>
              </h4>
              <h4>
                Tên người ủy quyền:{' '}
                <Input
                  style={{
                    alignItems: 'center',
                    height: '40px',
                    background: '#2b2b3f',
                    border: '1px solid #727288',
                    borderRadius: '8px',
                    marginLeft: '10px',
                  }}
                />
              </h4>
              <h4>
                Ngày sinh:{' '}
                <Input
                  style={{
                    alignItems: 'center',
                    height: '40px',
                    background: '#2b2b3f',
                    border: '1px solid #727288',
                    borderRadius: '8px',
                    marginLeft: '89px',
                  }}
                />
              </h4>
              <h4>
                Giới tính:{' '}
                <p style={{ marginLeft: '100px' }}>
                  <Radio.Group onChange={onChange}>
                    <Radio style={{ color: '#fff' }} value={1}>
                      Nam
                    </Radio>
                    <Radio style={{ color: '#fff' }} value={2}>
                      Nữ
                    </Radio>
                  </Radio.Group>
                </p>
              </h4>
              <h4>
                Quốc tịch:{' '}
                <Input
                  style={{
                    alignItems: 'center',
                    height: '40px',
                    background: '#2b2b3f',
                    border: '1px solid #727288',
                    borderRadius: '8px',
                    marginLeft: '89px',
                  }}
                />
              </h4>
              <h4>
                Số điện thoại:{' '}
                <Input
                  style={{
                    alignItems: 'center',
                    height: '40px',
                    background: '#2b2b3f',
                    border: '1px solid #727288',
                    borderRadius: '8px',
                    marginLeft: '60px',
                  }}
                />
              </h4>
            </div>
          </div>
          <div className="info-2">
            <div className="info-content-1">
              <h4>
                Đính kèm tệp:
                <div
                  style={{
                    transform: 'translateY(45px)',
                    marginLeft: '10px',
                  }}
                >
                  <Button
                    style={{
                      color: '#FFAC69',
                      border: '1px solid #FFAC69',
                      background: 'transparent',
                    }}
                  >
                    {' '}
                    <CloudUploadOutlined /> Tải lên
                  </Button>
                  <p>
                    {' '}
                    <FilePdfOutlined /> hetthuongcannho.doc <CloseOutlined />
                  </p>
                  <p>
                    {' '}
                    <FilePdfOutlined /> hetthuongcannho.doc <CloseOutlined />
                  </p>
                </div>
              </h4>
            </div>
            <div className="info-content-2">
              <h4>
                Số CMND/ CCCD:{' '}
                <Input
                  style={{
                    width: '150px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '40px',
                    background: '#2b2b3f',
                    border: '1px solid #727288',
                    borderRadius: '8px',
                    marginLeft: '0px',
                  }}
                />
              </h4>
              <h4>
                Ngày cấp:{' '}
                <Input
                  style={{
                    width: '150px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '40px',
                    background: '#2b2b3f',
                    border: '1px solid #727288',
                    borderRadius: '8px',
                    marginLeft: '55px',
                  }}
                />
              </h4>
              <h4>
                Nơi cấp:
                <Input
                  style={{
                    width: '150px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '40px',
                    background: '#2b2b3f',
                    border: '1px solid #727288',
                    borderRadius: '8px',
                    marginLeft: '70px',
                  }}
                />
              </h4>
              <h4>
                Mã số thuế:{' '}
                <Input
                  style={{
                    width: '150px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '40px',
                    background: '#2b2b3f',
                    border: '1px solid #727288',
                    borderRadius: '8px',
                    marginLeft: '40px',
                  }}
                />
              </h4>
              <h4>
                Nơi cư trú:
                <Input
                  style={{
                    transform: 'translate(10px,0px)',
                    marginBottom: '-10px',
                    width: '380px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '70px',
                    background: '#2b2b3f',
                    border: '1px solid #727288',
                    borderRadius: '8px',
                    marginLeft: '50px',
                  }}
                />
              </h4>
            </div>
          </div>
          <div className="info-3">
            <div className="info-content-1">
              <h4>
                <InfoCircleOutlined /> Mức nhuận bút
              </h4>
              <h4>
                Quyền tác giả:<p>0%</p>
              </h4>
              <h4>Quyền liên quan:</h4>
              <h4>
                Quyền của người biểu diễn:<p>50%</p>
              </h4>
              <h4>
                Quyền của nhà sản xuất:
                <br /> (Bản ghi/video)
                <Input
                  style={{
                    transform: 'translate(10px,-10px)',
                  }}
                />
              </h4>
            </div>
            <div className="info-content-2">
              <h4>
                Email:{' '}
                <Input
                  style={{
                    width: '400px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '40px',
                    background: '#2b2b3f',
                    border: '1px solid #727288',
                    borderRadius: '8px',
                    marginLeft: '50px',
                  }}
                />
              </h4>
              <h4>
                Tài khoản đăng nhập:
                <Input
                  style={{
                    width: '300px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '40px',
                    background: '#2b2b3f',
                    border: '1px solid #727288',
                    borderRadius: '8px',
                    marginLeft: '22px',
                  }}
                />
              </h4>
              <h4>
                Mật khẩu:
                <Input
                  style={{
                    width: '400px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '40px',
                    background: '#2b2b3f',
                    border: '1px solid #727288',
                    borderRadius: '8px',
                    marginLeft: '20px',
                  }}
                />
              </h4>
              <h4>
                Số tài khoản:{' '}
                <Input
                  style={{
                    width: '400px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '40px',
                    background: '#2b2b3f',
                    border: '1px solid #727288',
                    borderRadius: '8px',
                    marginLeft: '0px',
                  }}
                />
              </h4>
              <h4>
                Ngân hàng:
                <Input
                  style={{
                    width: '400px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '40px',
                    background: '#2b2b3f',
                    border: '1px solid #727288',
                    borderRadius: '8px',
                    marginLeft: '10px',
                  }}
                />
              </h4>
            </div>
          </div>
          <div className="info-4">
            <Link
              to="/management/contract/1/detail"
              style={{
                borderRadius: '16px 0px 0px 0px',
                fontSize: '14px',
                justifyContent: 'center',
              }}
            >
              <FormOutlined className="icon" />
              <p
                style={{
                  marginLeft: '15px',
                  color: '#fff',
                  fontSize: '12px',
                  justifyContent: 'center',
                }}
              >
                Chỉnh sửa <br />
                hợp đồng
              </p>
            </Link>
            <button
              style={{ color: '#fff' }}
              onClick={() => setIsModalOpen2(true)}
            >
              <ContainerOutlined className="icon" />
              <br />
              Gia hạn <br />
              hợp đồng
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              style={{ borderRadius: '0px 0px 0px 16px', color: '#fff' }}
            >
              <CloseOutlined className="icon" />
              <br />
              Hủy hợp <br />
              đồng
            </button>
            {isModalOpen && (
              <ModalContent
                title="Lý do hủy hợp đồng uỷ quyền HĐUQ 1234"
                visible={isModalOpen}
                onOk={() => setIsModalOpen(false)}
                onCancel={() => setIsModalOpen(false)}
              >
                <TextArea
                  placeholder="Hủy hợp đồng để tạo hợp đồng mới với giá trị và thời hạn lâu hơn."
                  rows={4}
                />
              </ModalContent>
            )}
            {isModalOpen2 && (
              <ModalContent
                width={900}
                title="Gia hạn ủy quyền tác phẩm"
                visible={isModalOpen2}
                onOk={() => setIsModalOpen2(false)}
                onCancel={() => setIsModalOpen2(false)}
              >
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                  }}
                >
                  <div
                    style={{
                      color: '#fff',
                      width: '10vw',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <h4>Thời gian gia hạn</h4>
                    <p style={{ marginTop: '0' }}>
                      Từ ngày:{' '}
                      {`${data[0]['Ngày hết hạn']
                        .toDate()
                        .toLocaleDateString()}  `}{' '}
                    </p>
                    <p style={{ display: 'flex', width: '50vw' }}>
                      Đến ngày:{' '}
                      <DatePicker
                        style={{
                          background: 'transparent',
                          color: '#FFAC69',
                          border: ' 1px solid #727288',
                        }}
                      />
                    </p>
                    <span style={{ opacity: '0.3' }}>
                      Lưu ý: Thời gian bắt đầu gia hạn hợp đồng mới được tính
                      sau ngày hết hạn hợp đồng cũ một ngày.
                    </span>
                  </div>
                  <div
                    style={{
                      color: '#fff',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <h4>Mức nhuận bút</h4>
                    <Checkbox value="checked" style={{ color: '#fff' }}>
                      Quyền tác giả{' '}
                      <span
                        style={{
                          padding: '5px',
                          border: '1px solid #727288',
                          borderRadius: '4px',
                          background: '#2B2B3F',
                          marginRight: '5px',
                        }}
                      >
                        0
                      </span>
                      %
                    </Checkbox>
                    <br />
                    <Checkbox value="checked" style={{ color: '#fff' }}>
                      Quyền liên quan{' '}
                      <span
                        style={{
                          padding: '5px',
                          border: '1px solid #727288',
                          borderRadius: '4px',
                          background: '#2B2B3F',
                          marginRight: '5px',
                        }}
                      >
                        0
                      </span>
                      %
                      <CheckboxGroup
                        options={options}
                        onChange={onChange}
                        style={{
                          marginTop: '10px',
                          alignItems: 'center',
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                      >
                        {' '}
                      </CheckboxGroup>
                    </Checkbox>
                  </div>
                </div>
                <div style={{ color: '#fff', display: 'flex' }}>
                  <h4 style={{ color: '#fff' }}>Đính kèm tệp</h4>
                  <div
                    style={{
                      transform: 'translateY(15px)',
                      marginLeft: '10px',
                    }}
                  >
                    <Button
                      style={{
                        color: '#FFAC69',
                        border: '1px solid #FFAC69',
                        background: 'transparent',
                      }}
                    >
                      {' '}
                      <CloudUploadOutlined /> Tải lên
                    </Button>
                    <p>
                      {' '}
                      <FilePdfOutlined /> hetthuongcannho.doc
                    </p>
                    <p>
                      {' '}
                      <FilePdfOutlined /> hetthuongcannho.doc
                    </p>
                  </div>
                </div>
              </ModalContent>
            )}
          </div>
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
const Container = styled.div`
  display: grid;
  padding-right: 0px !important;
  grid-template-columns: 1fr 1fr 1fr;
  .info-1 {
    display: flex;
    flex-direction: column;
    .info-content-1 {
      p {
        align-items: center;
        margin: 0;
        height: 40px;
        background: #2b2b3f;
        border: 1px solid #727288;
        border-radius: 8px;
        margin-left: 10px;
      }
    }
    .info-content-1,
    .info-content-2 {
      h4 {
        height: 48px;
        opacity: 1;
        margin: 0 0 0 10px;
        color: #fff;
        font-weight: 700;
        display: flex;
        justify-content: center;
        align-items: center;
        p {
          opacity: 0.7;
          color: #fff;
          flex: 1;
          display: flex;
          transform: translateX(10px);
          color: #fff;
          font-weight: 400;
        }
      }
    }
    .info-content-2 {
      h3 {
        color: #ffac69;
        margin-left: 10px;
        margin-bottom: 0;
        margin-top: 40px;
      }
    }
  }
  .info-2 {
    margin-left: 50px;
    display: flex;
    flex-direction: column;
    .info-content-1,
    .info-content-2 {
      h4 {
        opacity: 1;

        height: 48px;

        margin: 0 0 0 10px;
        color: #fff;
        font-weight: 700;
        display: flex;
        align-items: center;
        p {
          transform: translateX(10px);
          color: #fff;
          font-weight: 400;
          opacity: 0.7;
        }
      }
    }
    .info-content-1 {
      height: 250px;
    }
    .info-content-2 {
      margin-top: 60px;
    }
  }
  .info-3 {
    display: flex;
    flex-direction: column;
    .info-content-1,
    .info-content-2 {
      h4 {
        opacity: 1;

        height: 48px;
        margin: 0 0 0 10px;
        color: #fff;
        font-weight: 700;
        display: flex;
        align-items: center;
        p {
          transform: translateX(10px);
          color: #fff;
          font-weight: 400;
          opacity: 0.7;
        }
      }
    }
    .info-content-1 {
      height: 250px;
    }
    .info-content-2 {
      margin-top: 60px;
    }
  }
  .info-4 {
    position: absolute;
    background-color: #2f2f41;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    transform: translateY(70%);
    justify-content: space-between;
    height: 330px;
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

export default AddNewContractAuthority;
