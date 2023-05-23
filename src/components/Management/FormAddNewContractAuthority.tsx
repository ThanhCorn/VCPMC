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
} from 'antd';
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

const AddNewContractAuthority: React.FC = () => {
  const [isPersonal, setIsPersonal] = useState<boolean>(true);

  return (
    <Wrapper>
      <div className="content">
        <p style={{ color: 'white' }}>
          Quản lý hợp đồng <RightOutlined /> Chi tiết hợp đồng <RightOutlined />{' '}
          Chỉnh sửa danh sách tác phẩm uỷ quyền
        </p>
        <h1 style={{ width: '1000px' }}>Hợp đồng uỷ quyền bài hát - BH123</h1>
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
                <InfoCircleOutlined style={{ marginRight: '20px' }} /> Mức nhuận
                bút
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
          <Link
            to="/management/add-info-record"
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
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: var(--primary-color);
  margin-top: 50px;
  .content {
    margin-top: 50px;
    margin-left: 50px;
    margin-right: 100px;
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
