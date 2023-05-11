import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../firebase';
import styled from 'styled-components';
import Navbar from './Navbar';
import Nouser from '../assets/nouser.png';
import { CameraOutlined } from '@ant-design/icons';
import { Button, Form, Input, DatePicker, Modal, notification } from 'antd';
import { FaEdit, FaLock, FaSignOutAlt } from 'react-icons/fa';
import FormResetPassword from './FormResetPassword';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from '../context/UserContext';
import PageContent from './PageContent';

interface User {
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
  uid: string;
  phoneNumber: string | null;
  datePorn: string | null;
}

const UserInfo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm<{ name: string; age: number }>();
  const { currentUser } = useContext(UserContext);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    toast.success('🦄 Đổi mật khẩu thành công!', {
      position: 'bottom-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSaveButton = async (values: any) => {};

  return (
    <Wrapper>
      <PageContent />
      <div className="basic-info">
        <h1>Thông tin cơ bản</h1>
        <div className="avatar">
          <img
            src={`${currentUser?.photoURL ? currentUser.photoURL : Nouser} `}
            alt={`${currentUser?.photoURL ? 'User image' : 'No user image'} `}
          />
          <CameraOutlined className="icon-camera" />
          <h4>{currentUser?.displayName}</h4>
        </div>
      </div>
      <div className="user-info">
        <Form
          form={form}
          layout="vertical"
          autoComplete="off"
          onFinish={handleSaveButton}
        >
          <div className="row-1">
            <Form.Item name="name" label="Họ">
              <Input
                type="text"
                placeholder={`${
                  currentUser?.displayName
                    ? currentUser.displayName.split(' ')[0]
                    : 'No name'
                } `}
              />
            </Form.Item>
            <Form.Item name="Ten" label="Tên">
              <Input
                placeholder={`${
                  currentUser?.displayName
                    ? currentUser.displayName.split(' ')[1]
                    : 'No name'
                } `}
              />
            </Form.Item>
          </div>
          <div className="row-2">
            <Form.Item name="namsinh" label="Ngày sinh">
              <DatePicker
                placeholder={`${currentUser?.datePorn} `}
                style={{
                  backgroundColor: ' #2b2b3f',
                  borderRadius: '8px',
                  border: 'none',
                  color: '#fff',
                  width: '274px',
                  height: '42px',
                }}
              />
            </Form.Item>
            <Form.Item name="phone" label="Số điện thoại">
              <Input
                placeholder={`${
                  currentUser?.phoneNumber
                    ? currentUser.phoneNumber
                    : 'No phone number'
                } `}
              />
            </Form.Item>
          </div>
          <div className="row-3">
            <Form.Item name="Email" label="Email">
              <Input
                placeholder="nnnt10122000@gmail.con"
                readOnly
                style={{ width: '590px' }}
                className="custom-input"
              />
            </Form.Item>
            <Form.Item name="Tên Đăng nhập" label="Tên Đăng nhập ">
              <Input
                placeholder="nnnt10122000@gmail.con"
                readOnly
                style={{ width: '590px' }}
                className="custom-input"
              />
            </Form.Item>
            <Form.Item name="Phân quyền" label="Phân quyền">
              <Input placeholder="Admin" readOnly className="custom-input" />
            </Form.Item>
          </div>
          <div className="button-confirm">
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
        </Form>
      </div>
      <div className="side-option">
        <Button style={{ borderTopLeftRadius: '16px' }}>
          <FaEdit className="icon-setting" />
          <h3>
            Sửa Thông <br /> tin
          </h3>
        </Button>
        <Button onClick={showModal}>
          <FaLock className="icon-setting" />
          <h3>
            Đổi mật <br />
            khẩu
          </h3>
        </Button>
        <ModalContainer
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <h1>Đặt lại mật khẩu</h1>
          <span style={{ color: '#fff' }}>Mật khẩu củ</span>
          <Input.Password className="input" />
          <span style={{ color: '#fff' }}>Mật khẩu mới</span>
          <Input.Password className="input" />
          <span style={{ color: '#fff' }}>Nhập lại mật khẩu mới</span>
          <Input.Password className="input" />
        </ModalContainer>

        <Button style={{ borderBottomLeftRadius: '16px' }}>
          <FaSignOutAlt className="icon-setting" />
          <h3>Đăng xuất</h3>
        </Button>
      </div>
      <ToastContainer />
    </Wrapper>
  );
};

export default UserInfo;

const Wrapper = styled.div`
  position: relative;
  flex: 1;
  background-color: var(--primary-color);
  .side-option {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    transform: translateY(50%);
    right: 0;
    button {
      color: #fff;
      font-size: 12px;
      font-weight: 500;
      background-color: #2f2f41;
      width: 110px;
      line-height: 18px;
      letter: 0.5%;
      height: 130px;
      background: #2f2f41;
      border: none;
      h3 {
        font-size: 12px;
      }
    }
    .icon-setting {
      font-size: 2rem;
      color: #ff7506;
    }
  }
  .basic-info {
    width: 30vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    margin-left: -60px;
    h1 {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 700;
      font-size: 36px;
      line-height: 48px;
      color: #fff;
    }
    .avatar {
      position: relative;
      display: flex;
      flex-direction: column;
      width: 273px;
      height: 280px;
      img {
        border-radius: 50%;
      }
      .icon-camera {
        position: absolute;
        right: 50px;
        bottom: 40px;
        width: 13px;
        height: 13px;
        font-size: 36px;
        color: #fff;
      }
      h4 {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        weight: 600;
        size: 20px;
        line-height: 24px;
        letter: -0.2%;
      }
    }
  }
  .user-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .button-confirm {
      display: flex;
      justify-content: center;
      align-items: center;
      transform: translateY(-150px);
    }
    .ant-row {
      transform: translateY(-250px);
      margin: 14px 40px 0px 0;
    }
    .ant-input {
      width: 274px;
      height: 40px;
    }
    .row-1,
    .row-2,
    .row-3 {
      display: flex;
    }
    .row-3 {
      flex-direction: column;
    }
    label {
      color: #fff;
    }
    input {
      background-color: #2b2b3f;
      border-radius: 8px;
      border: none;
      color: #fff;
    }
    input::placeholder {
      color: #fff;
    }
    .custom-input::placeholder {
      color: #fff;
      opacity: 0.2;
    }
  }
`;

const ModalContainer = styled(Modal)`
  .ant-modal-footer {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    .ant-btn-default {
      background: transparent !important;
      :hover {
        background: transparent !important;
        border: 1px solid #ff7506 !important;
      }
      span {
        color: #ff7506;
      }
    }
  }
  .ant-modal-content {
    background-color: #33334d;
  }
  .ant-input,
  .ant-input-affix-wrapper {
    background: #2b2b3f;
    border: 1px solid #2b2b3f;
  }
  .ant-btn {
    background: #ff7506;
    border: 1px solid #ff7506;
    :hover {
      background: #ff7506;
    }
  }

  input {
    background: #2b2b3f;
    border-radius: 8px;
    border: none;
    color: #fff;
  }
  input::placeholder {
    color: #fff;
  }
  h1 {
    display: flex;
    justify-content: center;
    color: #fff;
    fontsize: 36px;
    font-weight: 700;
  }
  h3 {
    weight: 400;
    color: #fff;
    font-weight: 100;
    font-size: 16px;
  }
`;
