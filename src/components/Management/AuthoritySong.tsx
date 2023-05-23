import React, { useContext, useState } from 'react';
import { DataContext } from '../../context/DataContext';
import {
  List,
  Pagination,
  Space,
  Dropdown,
  Button,
  Modal,
  DatePicker,
  Input,
  Checkbox,
} from 'antd';
import styled from 'styled-components';
import {
  CloudUploadOutlined,
  DownOutlined,
  FilePdfOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import {
  ContainerOutlined,
  CloseOutlined,
  FormOutlined,
  PlusCircleOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
const CheckboxGroup = Checkbox.Group;
const items: MenuProps['items'] = [
  {
    label: 'Người biểu diễn',
    key: '1',
  },
  {
    label: 'Nhà diễn xuất',
    key: '2',
  },
];
const { TextArea } = Input;
const handleMenuClick: MenuProps['onClick'] = (e) => {
  console.log('click', e);
};
const menuProps = {
  items,
  onClick: handleMenuClick,
};

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

const AuthoritySong = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const { data } = useContext(DataContext);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const showModal2 = () => {
    setIsModalOpen2(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <Container>
      <div className="option-1">
        <Space className="space-1">
          <p>Tình trạng phê duyệt:</p>
          <Dropdown menu={menuProps}>
            <Button>
              <Space>
                Tất cả
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
        </Space>
      </div>
      <List
        bordered
        style={{
          color: '#fff',
          width: '73.6vw',
          border: '1px solid #727288',
          borderRadius: '16px',
          background: 'rgba(47, 47, 65, 0.7)',
        }}
        itemLayout="horizontal"
      >
        {data.map((item, index) => (
          <List.Item key={item['STT']} style={{ color: '#fff' }}>
            <List.Item.Meta
              title={`${index === 0 ? 'STT' : ''}`}
              description={item['STT']}
              style={{ maxWidth: '80px' }}
            />
            <List.Item.Meta
              title={`${index === 0 ? 'Tên bản ghi' : ''}`}
              description={item['Tên bản ghi']}
              style={{ maxWidth: '170px' }}
            />
            <List.Item.Meta
              title={`${index === 0 ? 'Mã ISRC' : ''}`}
              description={item['Mã ISRC']}
              style={{ maxWidth: '309px' }}
            />
            <List.Item.Meta
              title={`${index === 0 ? 'Ca sĩ' : ''}`}
              description={item['Người ủy quyền']}
            />
            <List.Item.Meta
              title={`${index === 0 ? 'Tác giả' : ''}`}
              description={item['Tác giả']}
            />
            <List.Item.Meta
              title={`${index === 0 ? 'Ngày tải' : ''}`}
              description={
                item['Ngày tải']
                  ? item['Ngày tải'].toDate().toLocaleString()
                  : ''
              }
            />
            <List.Item.Meta
              title={`${index === 0 ? 'Tình trạng' : ''}`}
              description={
                item['Hiệu lực hợp đồng'][0] === 'Còn thời hạn'
                  ? `🌱${item['Hiệu lực hợp đồng'][2]}`
                  : `⚡${item['Hiệu lực hợp đồng'][5]}`
              }
            />
            <div style={{ width: '170px' }}>
              <button
                style={{
                  background: 'transparent',
                  border: 'none',
                  textDecoration: 'underline',
                  color: '#ff7506',
                  cursor: 'pointer',
                }}
              >
                Nghe
              </button>
            </div>
          </List.Item>
        ))}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '0 23px',
          }}
        >
          <p style={{ display: 'flex', letterSpacing: ' 0.015em' }}>
            Hiển thị{' '}
            <span
              style={{
                padding: '0 10px',
                border: '1px solid #FF7506',
                borderRadius: '4px',
              }}
            >
              {data.length}
            </span>{' '}
            hàng trong mỗi trang
          </p>
          <Pagination defaultCurrent={1} total={100} />
        </div>
      </List>
      <div className="option">
        <Link to="/management/contract/1/detail" className="link-option">
          <div className="icon">
            <FormOutlined style={{ color: '#FF7506' }} />
          </div>
          <p>
            Chỉnh sửa <br />
            tác phẩm
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
        <Button className="button-option" onClick={() => setIsModalOpen(true)}>
          <div className="icon">
            <PlusCircleOutlined style={{ color: '#FF7506' }} />
          </div>
          <p>
            Thêm bản <br />
            ghi
          </p>
        </Button>
        <Link to="/detail-product/1" className="link-option">
          <div className="icon">
            <PlusCircleOutlined style={{ color: '#FF7506' }} />
          </div>
          <p>Chi Tiết</p>
        </Link>

        {isModalOpen && (
          <ModalContent
            title="Hủy hợp đồng ủy quyền"
            visible={isModalOpen}
            onOk={() => setIsModalOpen(false)}
            onCancel={() => setIsModalOpen(false)}
          >
            <TextArea
              placeholder="Cho chúng tôi biết lý do bạn muốn huỷ hợp đồng uỷ quyền này..."
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
  .jmDaKB .ant-modal-content {
    background: rgb(30, 30, 46);
    height: 100%;
  }
  height: 100%;
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
  .option-1 {
    width: 50%;
    .space-1 {
      margin-right: 20px;
      p {
        height: 24px;
        font-style: normal;
        font-size: 16px;
        line-height: 24px;
        color: #fff;
      }
    }
    .ant-space {
      .ant-btn {
        background: #1e1e2e;
        border: 1px solid #ff7506;
        display: flex;
        width: 120px;
        height: 40px;
        align-items: center;
        .ant-space-item {
          font-size: 16px;
          font-weight: 400;
          color: #fff;
          span {
            margin-left: 20px;
            color: #ff7506;
            width: 10.54px;
            height: 6.25px;
          }
        }
      }
    }
  }

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
`;
export default AuthoritySong;
