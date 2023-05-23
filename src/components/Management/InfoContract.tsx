import React, { useState } from 'react';
import styled from 'styled-components';
import 'firebase/firestore';
import { Modal, Input, Button, DatePicker, Checkbox } from 'antd';
import {
  ContainerOutlined,
  CloseOutlined,
  FormOutlined,
} from '@ant-design/icons';
import {
  FilePdfOutlined,
  InfoCircleOutlined,
  CloudUploadOutlined,
} from '@ant-design/icons';
import { DataContext } from '../../context/DataContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

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

const InfoContract: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const { data } = useContext(DataContext);

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
    <Container>
      <div className="info-1">
        <div className="info-content-1">
          <h4>
            Số hợp đồng: <p>BH123</p>
          </h4>
          <h4>
            Tên hợp đồng: <p>Hợp đồng ủy quyền tác phẩm âm nhạc</p>
          </h4>
          <h4>
            Ngày hiệu lực: <p>Hợp đồng ủy quyền tác phẩm âm nhạc</p>
          </h4>
          <h4>
            Ngày hết hạn: <p>Hợp đồng ủy quyền tác phẩm âm nhạc</p>
          </h4>
          <h4>
            Tình trạng: <p>🌱 Còn thời hạn</p>
          </h4>
        </div>
        <div className="info-content-2">
          <h3>Thông tin pháp nhân ủy quyền</h3>
          <h4>
            Pháp nhân ủy quyền: <p>Cá nhân</p>
          </h4>
          <h4>
            Tên người ủy quyền: <p>Nguyễn Văn A</p>
          </h4>
          <h4>
            Ngày sinh: <p>10/01/1984</p>
          </h4>
          <h4>
            Giới tính: <p>Nam</p>
          </h4>
          <h4>
            Quốc tịch: <p>Việt Nam</p>
          </h4>
          <h4>
            Số điện thoại: <p>(+84) 345 678 901</p>
          </h4>
        </div>
      </div>
      <div className="info-2">
        <div className="info-content-1">
          <h4>
            Đính kèm tệp:
            <p style={{ transform: 'translate(10px, 12px)' }}>
              <FilePdfOutlined /> hetthuongcannho.doc <br />
              <FilePdfOutlined /> hetthuongcannho.doc
            </p>
          </h4>
        </div>
        <div className="info-content-2">
          <h4>
            Số CMND/ CCCD: <p>123456789012</p>
          </h4>
          <h4>
            Ngày cấp: <p>10/07/2011</p>
          </h4>
          <h4>
            Nơi cấp:<p>Tp.HCM, Việt Nam</p>
          </h4>
          <h4>
            Mã số thuế: <p>92387489</p>
          </h4>
          <h4>
            Nơi cư trú:
            <p
              style={{
                transform: 'translate(10px,0px)',
                marginBottom: '-10px',
              }}
            >
              69/53, Nguyễn Gia Trí, Phường 25,
              <br /> Quận Bình Thạnh, Thành phố Hồ Chí Minh
            </p>
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
            <p
              style={{
                transform: 'translate(10px,-10px)',
              }}
            >
              50%
            </p>
          </h4>
        </div>
        <div className="info-content-2">
          <h4>
            Email: <p>nguyenvana@gmail.com</p>
          </h4>
          <h4>
            Tài khoản đăng nhập:<p>nguyenvana@gmail.com</p>
          </h4>
          <h4>
            Mật khẩu:<p> 😄😄😄😄😄</p>
          </h4>
          <h4>
            Số tài khoản: <p>1231123312211223</p>
          </h4>
          <h4>
            Ngân hàng:
            <p>ACB - Ngân hàng Á Châu</p>
          </h4>
        </div>
      </div>
      <div className="option">
        <Link to="/management/contract/1/detail" className="link-option">
          <div className="icon">
            <FormOutlined style={{ color: '#FF7506' }} />
          </div>
          <p>
            Chỉnh sửa <br />
            hợp đồng
          </p>
        </Link>
        <Button className="button-option" onClick={() => setIsModalOpen2(true)}>
          <div className="icon">
            <ContainerOutlined style={{ color: '#FF7506' }} />
          </div>
          <p>
            Gia hạn <br />
            hợp đồng
          </p>
        </Button>
        <Button className="button-option" onClick={() => setIsModalOpen(true)}>
          <div className="icon">
            <CloseOutlined style={{ color: 'red' }} />
          </div>
          <p>
            Hủy <br />
            hợp đồng
          </p>
        </Button>
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
                  {`${data[0]['Ngày hết hạn'].toDate().toLocaleDateString()}  `}{' '}
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
                  Lưu ý: Thời gian bắt đầu gia hạn hợp đồng mới được tính sau
                  ngày hết hạn hợp đồng cũ một ngày.
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
                style={{ transform: 'translateY(15px)', marginLeft: '10px' }}
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
  );
};

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
  position: relative;
  display: grid;
  padding-right: 0px !important;
  grid-template-columns: 1fr 1fr 1fr;
  .info-1 {
    display: flex;
    flex-direction: column;
    .info-content-1,
    .info-content-2 {
      h4 {
        margin: 0 0 0 10px;
        color: #fff;
        font-weight: 700;
        display: flex;
        justify-content: center;
        align-items: center;
        p {
          flex: 1;
          display: flex;
          transform: translateX(10px);
          color: #fff;
          font-weight: 400;
          opacity: 0.7;
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
    display: flex;
    flex-direction: column;
    .info-content-1,
    .info-content-2 {
      h4 {
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
`;

export default InfoContract;
