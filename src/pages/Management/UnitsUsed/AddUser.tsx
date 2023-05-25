import { FormOutlined, RightOutlined, TeamOutlined } from '@ant-design/icons';
import { Button, Input, Select } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';

const { Option } = Select;
const AddUser = () => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  return (
    <Wrapper>
      <Container>
        <p style={{ opacity: '0.5', marginBottom: '0' }}>
          Quản lý <RightOutlined style={{ color: '#FFAC69' }} />
          <Link
            style={{ color: '#fff', textDecoration: 'none' }}
            to="/management/used"
          >
            Đơn vị sử dụng{' '}
          </Link>{' '}
          <RightOutlined style={{ color: '#FFAC69' }} />
          Chi tiết
          <RightOutlined style={{ color: '#FFAC69' }} />
          Thêm người dùng
        </p>
        <h1>Thông tin người dùng</h1>
        <div className="content">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
            <div className="grid-1">
              <div className="same">
                <p>Tên người dùng:</p>
                <Input />
              </div>
              <div className="same">
                <p>Vai trò:</p>
                <Select
                  defaultValue="Chọn vai trò"
                  style={{ background: '#2f2f41' }}
                >
                  <Option value="Super Admin">Super Admin</Option>
                  <Option value="Group Admin">Group Admin</Option>
                  <Option value="Sub-user">Sub-user</Option>
                  <Option value="ContentManager">ContentManager</Option>
                </Select>
              </div>
              <div className="same">
                <p>Email:</p>
                <Input />
              </div>
            </div>
            <div className="grid-2">
              <div className="same">
                <p>Tên đăng nhập:</p>
                <Input />
              </div>
              <div className="same">
                <p>Mật khẩu:</p>
                <Input.Password />
              </div>
              <div className="same">
                <p>Trạng thái thiết bị:</p>
                <Input />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="btn">
        <Button className="btn-huy">Hủy</Button>
        <Button onClick={() => setIsEdit(!isEdit)} className="btn-luu">
          Lưu
        </Button>
      </div>
    </Wrapper>
  );
};

export default AddUser;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  flex: 1;
  background-color: var(--primary-color);

  input,
  .ant-select,
  .ant-select-selector,
  .ant-input-password {
    color: #fff;
    width: 300px;
    background: #2f2f41;
    border: 1px solid #727288;
  }
  .btn {
    margin-top: 50px;
    display: flex;
    justify-content: center;
    width: 100%;
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
        margin-left: 10px;
      }
    }

    .button-option,
    .link-option {
      background: #2f2f41;
      border: none;
      width: 110px;
      height: 130px;

      .icon {
        margin-left: 10px;
        background-color: rgba(114, 114, 136, 0.5);
        width: 50px;
        font-size: 2rem;
        color: #ff7506;
        border: 1px solid rgba(114, 114, 136, 0.5);
        border-radius: 50%;
      }
      .icon-2 {
        background-color: rgba(114, 114, 136, 0.5);
        width: 50px;
        font-size: 2rem;
        color: red;
        border: 1px solid rgba(114, 114, 136, 0.5);
        border-radius: 50%;
        padding-top: 5px;
      }
      p {
        color: #fff;
        opacity: 0.5;
        font-size: 12px;
      }
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 50px;
  margin-left: 50px;

  .grid-1,
  .grid-2 {
    width: 100%;
    span {
      opacity: 0.7 !important;
    }
    .ant-select-selector {
      background: #2f2f41;
      border: none;
    }
  }
  .same {
    display: flex;
    align-items: center;
    p {
      width: 160px;
    }
    span {
      color: #fff;
      opacity: 0.5;
    }
  }
`;
