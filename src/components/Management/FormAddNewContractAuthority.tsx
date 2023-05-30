import React, { useState } from 'react';
import styled from 'styled-components';
import 'firebase/firestore';
import {
  Modal,
  Input,
  Button,
  DatePicker,
  Checkbox,
  Radio,
  Dropdown,
  Form,
} from 'antd';
import {
  ContainerOutlined,
  CloseOutlined,
  FormOutlined,
  DownOutlined,
  CheckCircleFilled,
  UploadOutlined,
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
import { MenuProps } from 'antd/lib/menu';
import { FaUpload } from 'react-icons/fa';

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

const items: MenuProps['items'] = [
  {
    key: '1',
    label: 'Rap',
  },
  {
    key: '2',
    label: 'Ballad',
  },
  {
    key: '3',
    label: 'RocknRoll',
  },
  {
    key: '4',
    label: 'RnB',
  },
];

const AddNewContractAuthority: React.FC = () => {
  const [isPersonal, setIsPersonal] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isRecord, setIsRecord] = useState<boolean>(false);

  return (
    <Wrapper>
      <div className="content">
        <p style={{ color: 'white' }}>
          Quản lý <RightOutlined /> Quản lý hợp đồng <RightOutlined />{' '}
          {isRecord ? 'Thêm bản ghi' : ' Thêm hợp đồng'}
        </p>
        <h1 style={{ width: '1000px' }}>
          {isRecord ? 'Thêm bản ghi' : 'Thêm hợp đồng ủy quyền mới'}
        </h1>
        {!isRecord ? (
          <>
            <Container>
              <div className="info-1">
                <div className="info-content-1">
                  <div className="input-text">
                    <h4>Số hợp đồng</h4>
                    <Input />
                  </div>
                  <div className="input-text">
                    <h4>Tên hợp đồng:</h4>
                    <Input />
                  </div>
                  <div className="input-text">
                    <h4>Ngày hiệu lực:</h4>
                    <DatePicker />
                  </div>
                  <div className="input-text">
                    <h4>Ngày hết hạn:</h4>
                    <DatePicker />
                  </div>
                </div>
                <div className="info-content-2">
                  <h3>Thông tin pháp nhân ủy quyền</h3>
                  <h4>
                    Pháp nhân ủy quyền:{' '}
                    <p>
                      <Radio.Group onChange={onChange}>
                        <Radio
                          style={{ color: '#fff' }}
                          value={1}
                          onClick={() => setIsPersonal(true)}
                        >
                          Cá nhân
                        </Radio>
                        <Radio
                          style={{ color: '#fff' }}
                          value={2}
                          onClick={() => setIsPersonal(false)}
                        >
                          Tổ chức
                        </Radio>
                      </Radio.Group>
                    </p>
                  </h4>
                  {isPersonal ? (
                    <div className="container-1">
                      <div className="input-text">
                        <h4>Tên người ủy quyền:</h4>
                        <Input />
                      </div>
                      <div className="input-text">
                        <h4>Ngày sinh:</h4>
                        <DatePicker />
                      </div>
                      <div className="input-text">
                        <h4>Giới tính: </h4>
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
                      </div>
                      <div className="input-text">
                        <h4>Quốc tịch:</h4>
                        <Input />
                      </div>
                      <div className="input-text">
                        <h4>Số điện thoại:</h4>
                        <Input />
                      </div>
                    </div>
                  ) : (
                    <div className="container-2">
                      <div className="input-text">
                        <h4>Tên tổ chức:</h4>
                        <Input />
                      </div>
                      <div className="input-text">
                        <h4>Mã số thuế:</h4>
                        <Input />
                      </div>
                      <div className="input-text">
                        <h4>Số tài khoản:</h4>
                        <Input />
                      </div>
                      <div className="input-text">
                        <h4>Ngân hàng:</h4>
                        <Input />
                      </div>
                      <div className="input-text">
                        <h4>Địa chỉ:</h4>
                        <Input.TextArea className="input-text-area" rows={4} />
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="info-2">
                <div className="info-content-1">
                  <h4>Đính kèm tệp:</h4>
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
                </div>
                <div className="info-content-2">
                  {isPersonal ? (
                    <div className="container-3">
                      <div className="input-text">
                        <h4>CMND/ CCCD:</h4>
                        <Input />
                      </div>
                      <div className="input-text">
                        <h4>Ngày cấp:</h4>
                        <DatePicker />
                      </div>
                      <div className="input-text">
                        <h4>Nơi cấp:</h4>
                        <Input />
                      </div>
                      <div className="input-text">
                        <h4>Mã số thuế:</h4>
                        <Input />
                      </div>
                      <div className="input-text">
                        <h4>Nơi cư trú:</h4>
                        <Input.TextArea rows={3} />
                      </div>
                    </div>
                  ) : (
                    <div className="container-3">
                      <div className="input-text">
                        <h4>Người đại diện:</h4>
                        <Input />
                      </div>
                      <div className="input-text">
                        <h4>Chức vụ:</h4>
                        <Input />
                      </div>
                      <div className="input-text">
                        <h4>Ngày sinh:</h4>
                        <DatePicker />
                      </div>
                      <div className="input-text">
                        <h4>Giới tính: </h4>
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
                      </div>
                      <div className="input-text">
                        <h4>CMND/ CCCD:</h4>
                        <Input />
                      </div>
                      <div className="input-text">
                        <h4>Ngày cấp:</h4>
                        <DatePicker />
                      </div>
                      <div className="input-text">
                        <h4>Nơi cấp:</h4>
                        <Input />
                      </div>
                      <div className="input-text">
                        <h4>Quốc tịch:</h4>
                        <Input placeholder="Việt Nam"></Input>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="info-3">
                <div className="info-content-1">
                  <h4 style={{ color: '#FFAC69' }}>
                    <InfoCircleOutlined style={{ marginRight: '20px' }} /> Mức
                    nhuận bút
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
                    <span
                      style={{
                        transform: 'translate(10px, -10px)',
                        opacity: '0.7',
                      }}
                    >
                      50%
                    </span>
                  </h4>
                </div>
                <div className="info-content-2">
                  <div className="container-3">
                    {isPersonal ? (
                      <div className="input-text">
                        <h4>Số tài khoản:</h4>
                        <Input />
                      </div>
                    ) : (
                      <div className="input-text">
                        <h4>Nơi cư trú:</h4>
                        <Input.TextArea rows={3} className="input-textarea" />
                      </div>
                    )}
                    <div className="input-text">
                      <h4>Email:</h4>
                      <Input />
                    </div>
                    <div className="input-text">
                      <h4>Tên đăng nhập:</h4>
                      <DatePicker />
                    </div>
                    <div className="input-text">
                      <h4>Mật khẩu:</h4>
                      <Input />
                    </div>

                    <div className="input-text">
                      <h4>Ngân hàng:</h4>
                      <Input.TextArea rows={3} />
                    </div>
                  </div>
                </div>
              </div>
            </Container>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '50px',
              }}
            >
              <Button danger className="btn-huy">
                Hủy
              </Button>
              <Button
                onClick={() => setIsRecord(true)}
                className="btn-luu"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  textDecoration: 'none',
                }}
              >
                Tạo
              </Button>
            </div>
          </>
        ) : (
          <div className="modal-open">
            <div style={{ marginTop: '-50px', width: '600px' }}>
              <h2>
                <CheckCircleFilled style={{ color: 'green' }} /> Hợp đồng đã
                được tạo thành công
              </h2>
              <div className="option-1">
                <h3>Có 2 cách để tạo bản ghi</h3>
                <h4>
                  Cách 1: <span>Upload bản ghi trực tiếp </span>{' '}
                </h4>
                <span className="detail">
                  Bạn có thể thực hiện thêm bản ghi ngay trên website
                </span>
                <Button
                  onClick={() => setIsModalOpen(true)}
                  className="btn-luu btn1"
                >
                  Thêm bản ghi trực tiếp
                </Button>
              </div>
              <div className="option-1" style={{ marginTop: '60px' }}>
                <h4>
                  Cách 2: <span>Upload bản ghi qua phần mềm</span>{' '}
                </h4>
                <span className="detail">
                  Bạn có thể thêm bản ghi bằng tool
                </span>
                <Button className="btn-huy btn1">Thêm bản ghi bằng tool</Button>
              </div>
              <h4 style={{ color: 'red', fontWeight: '300' }}>
                Lưu ý hợp đồng chỉ có hiệu lực khi thêm bản ghi thành công
              </h4>
            </div>
          </div>
        )}
        {isModalOpen && (
          <ModalContent
            visible={isModalOpen}
            onCancel={() => setIsModalOpen(false)}
          >
            <h3>Thêm bản ghi mới</h3>
            <Form layout="vertical" className="form">
              <Form.Item label="Tên bản ghi">
                <Input />
              </Form.Item>
              <Form.Item label="Mã ISRC">
                <Input />
              </Form.Item>
              <Form.Item label="Tác giả">
                <Input />
              </Form.Item>
              <Form.Item label="Ca sĩ / Nhóm nhạc">
                <Input />
              </Form.Item>
              <div className="category">
                <Form.Item label="Thể loại">
                  <Dropdown menu={{ items }} placement="bottomLeft" arrow>
                    <Button>Chọn một thể loại</Button>
                  </Dropdown>
                </Form.Item>
                <Form.Item label="Nhà sản xuất">
                  <Input />
                </Form.Item>
              </div>
            </Form>
            <span
              style={{ color: '#fff', fontSize: '16px', marginRight: '10px' }}
            >
              Trạng thái thiết bị:{' '}
              <span className="upload">
                <FaUpload /> Tải lên{' '}
              </span>
            </span>
            <span
              style={{ color: '#fff', fontSize: '16px', marginRight: '10px' }}
            >
              Đính kèm lời bài hát:{' '}
              <span className="upload">
                <FaUpload /> Tải lên{' '}
              </span>
            </span>

            <div className="btn">
              <Button onClick={() => setIsModalOpen(false)} className="btn-huy">
                Hủy
              </Button>
              <Button onClick={() => setIsModalOpen(false)} className="btn-luu">
                Tải lên
              </Button>
            </div>
          </ModalContent>
        )}
      </div>
    </Wrapper>
  );
};

const ModalContent = styled(Modal)`
  h3 {
    display: flex;
    justify-content: center;
  }
  .upload {
    padding: 5px 10px;
    border: 1px solid #ff7506;
    border-radius: 5px;
    color: #ff7506;
  }
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
    .category {
      display: flex;
      justify-content: space-between;
      .ant-input {
        width: 230px;
      }
      button {
        span {
          color: red;
        }
        width: 250px;
        color: #2b2b3f;
        height: 40px;
      }
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

const Wrapper = styled.div`
  background-color: var(--primary-color);
  margin-top: 50px;
  .content {
    margin-top: 50px;
    margin-left: 50px;
    margin-right: 100px;
    .modal-open {
      width: 700px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 500px;
      transform: translateX(70%);
      background: #2b2b3f;
      h2 {
        display: flex;
        justify-content: center;
        border-bottom: 1px solid #fff;
      }
      .option-1 {
        display: flex;
        flex-direction: column;
        h3 {
          font-size: 16px;
        }
        h4 {
          margin-top: -5px;
          margin-left: 30px;
          color: #ff7506;
          span {
            color: #fff;
            font-weight: 400;
          }
        }
        .detail {
          color: #fff;
          font-weight: 300;
          font-size: 14px;
          margin-top: -10px;
          margin-bottom: 10px;
          margin-left: 60px;
        }
        .btn1 {
          margin-left: 60px;
        }
      }
    }
    p {
      color: #fff;
      opacity: 0.5;
    }
  }
`;

const Container = styled.div`
  display: grid;
  padding-right: 0px !important;
  grid-template-columns: 1fr 1fr 1fr;
  .info-1 {
    margin-right: 60px;
    display: flex;
    flex-direction: column;
    .info-content-1 {
      .input-text {
        display: flex;
        margin-bottom: 104;
        height: 50px;
        h4 {
          color: #fff;
          width: 200px;
          display: flex;
          justify-content: flex-start;
        }
        .ant-input,
        .ant-picker {
          height: 40px;
          border: 1px solid #727288;
          background: #2b2b3f;
          width: 300px;
        }
      }
    }

    .info-content-2 {
      h4 {
        display: flex;
        align-items: center;
        color: #fff;
        p {
          margin-left: 100px;
        }
      }
      h3 {
        color: #ffac69;
        margin-left: 10px;
        margin-bottom: 0;
        margin-top: 40px;
      }
      .container-2,
      .container-1 {
        display: flex;
        flex-direction: column;
        flex: 1;
        .input-text {
          height: 50px;
          display: flex;
          margin-bottom: 4px;
          h4 {
            width: 200px;
            display: flex;
            justify-content: flex-start;
          }
          .ant-input,
          .ant-picker {
            height: 40px;
            width: 300px;
            border: 1px solid #727288;
            background: #2b2b3f;
          }
          .input-text-area {
            height: 100px;
          }
        }
      }
    }
  }
  .info-2 {
    margin-right: 30px;
    display: flex;
    flex-direction: column;
    .info-content-1 {
      height: 300px;
      display: flex;
      align-items: baseline;
      color: #fff;
      h4 {
        margin-right: 20px;
      }
    }
    .info-content-2 {
      .container-3 {
        display: flex;
        flex-direction: column;
        flex: 1;
        .input-text {
          height: 50px;
          display: flex;
          margin-bottom: 4px;
          align-items: center;
          h4 {
            color: #fff;
            width: 150px;
            display: flex;
            justify-content: flex-start;
          }
          .ant-input,
          .ant-picker {
            height: 40px;
            width: 300px;
            border: 1px solid #727288;
            background: #2b2b3f;
          }
        }
      }
    }
  }
  .info-3 {
    display: flex;
    flex-direction: column;

    .info-content-1 {
      height: 340px;
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
    .info-content-2 {
      .container-3 {
        display: flex;
        flex-direction: column;
        flex: 1;
        .input-text {
          height: 50px;
          display: flex;
          align-items: center;
          margin-bottom: 4px;
          h4 {
            color: #fff;
            width: 150px;
            display: flex;
            justify-content: flex-start;
          }
          .ant-input,
          .ant-picker {
            height: 40px;
            width: 300px;
            border: 1px solid #727288;
            background: #2b2b3f;
          }
          .input-textarea {
            max-height: 100px;
            height: 100px;
          }
        }
        .input-text:first-child {
          height: 100px;
        }
      }
    }
  }
`;

export default AddNewContractAuthority;
