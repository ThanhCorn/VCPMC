import styled from 'styled-components';
import { PlusCircleOutlined, RightOutlined } from '@ant-design/icons';
import { Button, Form, Input, Select } from 'antd';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';
import {
  addDoc,
  collection,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from '@firebase/firestore';
import { db } from '../../firebase';

const { Option } = Select;

const options = [
  { value: 'account', label: 'Tài khoản' },
  { value: 'payment', label: 'Quản lý thanh toán' },
  { value: 'license', label: 'Vấn đề bản quyền' },
  { value: 'other', label: 'Khác' },
];

interface FormData {
  issue: string;
  content: string;
}

const Feedback = () => {
  const [form] = Form.useForm();
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);

  const handleSubmit = async (values: FormData) => {
    const feedback = { ...values, id: nanoid() };
    await addDoc(collection(db, 'users'), feedback);

    form.resetFields();
  };
  return (
    <Wrapper>
      <div className="content">
        <div className="header-text">
          <span>
            {' '}
            Hổ trợ <RightOutlined />
          </span>
          <span> Feedback</span>
        </div>
        <h1>Feedback</h1>
        <div
          style={{
            marginTop: '100px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Form
            form={form}
            onFinish={handleSubmit}
            layout="vertical"
            style={{
              width: '764px',
              background: '#2F2F41',
              padding: '30px',
            }}
          >
            <Form.Item label="Tên người dùng">
              <Input
                style={{
                  background: '#727288',
                  border: 'none',
                }}
                value={currentUser?.displayName ? currentUser.displayName : ''}
                disabled
              />
            </Form.Item>
            <Form.Item
              label="Bạn muốn được hỗ trợ vấn đề gì?"
              name="issue"
              rules={[
                { required: true, message: 'Vui lòng chọn vấn đề của bạn!' },
              ]}
            >
              <Select
                style={{
                  background: '#727288',
                  border: 'none',
                }}
                placeholder="Chọn vấn đề"
              >
                {options.map((option) => (
                  <Option
                    style={{
                      background: 'rgba(47, 47, 65, 0.7)',
                      color: 'white',
                    }}
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              label="Nội dung"
              name="content"
              rules={[{ required: true, message: 'Vui lòng nhập nội dung!' }]}
            >
              <Input.TextArea
                style={{
                  background: '#727288',
                  border: '1px solid #2B2B3F',
                }}
                placeholder="Nhập nội dung"
                rows={10}
              />
            </Form.Item>
            <Form.Item>
              <Button
                style={{
                  background: '#FF7506',
                  width: '168px',
                  height: '40px',
                }}
                type="primary"
                htmlType="submit"
              >
                Gửi
              </Button>
            </Form.Item>
          </Form>
        </div>
        <Link to="/help/watch-feedback" className="link-option">
          <PlusCircleOutlined />
          <p>Xem Feedback</p>
        </Link>
      </div>
    </Wrapper>
  );
};

export default Feedback;

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
    .header-text {
      display: flex;
      align-items: center;
      color: #fff;
      opacity: 0.5;

      svg {
        color: #ffac69;
        margin-right: 5px;
      }
    }
    .link-option {
      flex-direction: column;
      position: fixed;
      top: 30%;
      right: 0;
      transform: translateY(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      background: #2f2f41;
      border: none;
      width: 110px;
      height: 130px;
      .icon {
        background-color: rgba(114, 114, 136, 0.5);
        margin-left: 15px;
        width: 50px;
        font-size: 2rem;
        border: 1px solid rgba(114, 114, 136, 0.5);
        border-radius: 50%;
      }
      p {
        color: #fff;
        opacity: 0.5;
        font-size: 12px;
      }
      svg {
        color: #ff7506;

        font-size: 2rem;
        margin-left: 7px;
      }
    }
    label {
      color: white;
    }
    .ant-select-selector {
      background-color: #727288;
    }
    .ant-form-item-control-input-content {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .ant-input {
      ::placeholder {
        opacity: 0.5;
        color: white;
      }
    }
    .ant-select-selection-placeholder {
      opacity: 0.5;
      color: white;
    }
  }
`;
