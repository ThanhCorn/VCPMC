import styled from 'styled-components';
import SideMenu from '../../components/SideMenu';
import PageContent from '../../components/PageContent';
import { RightOutlined } from '@ant-design/icons';
import { Button, Form, Input, Select } from 'antd';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const { Option } = Select;

const options = [
  { value: 'account', label: 'Tài khoản' },
  { value: 'payment', label: 'Quản lý thanh toán' },
  { value: 'license', label: 'Vấn đề bản quyền' },
  { value: 'other', label: 'Khác' },
];

const Feedback = () => {
  const [form] = Form.useForm();
  const { currentUser } = useContext(UserContext);

  const handleSubmit = () => {
    form.resetFields();
  };
  return (
    <Wrapper>
      <SideMenu />
      <PageContent />
      <div className="content">
        <h4 style={{ color: 'white' }}>
          Hổ trợ <RightOutlined /> Feedback
        </h4>
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
                placeholder={
                  currentUser?.displayName ? currentUser.displayName : ''
                }
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
      </div>
    </Wrapper>
  );
};

export default Feedback;

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  background-color: var(--primary-color);
  .content {
    margin-top: 50px;
    margin-left: 50px;
    margin-right: 70px;
    flex: 1;
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
