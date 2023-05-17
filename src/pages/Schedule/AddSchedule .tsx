import React from 'react';
import styled from 'styled-components';
import { Button, DatePicker, Form, Input, Table } from 'antd';
import SideMenu from '../../components/SideMenu';
import PageContent from '../../components/PageContent';
import { PlusCircleOutlined, RightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { mySchecule, Schecule } from '../../mySong';

interface TimeSlot {
  key: number;
  time: string;
  monday: string;
  tuesday: string;
  // Add other days of the week as properties
  // ...
}

const columns: Array<{
  title: string;
  dataIndex: string;
  width?: number;
  fixed?: 'left';
}> = [
  {
    title: 'Time',
    dataIndex: 'time',
    width: 100,
    fixed: 'left',
  },
  {
    title: 'Thứ hai',
    dataIndex: 'monday',
  },
  {
    title: 'Thứ ba',
    dataIndex: 'tuesday',
  },
  {
    title: 'Thứ tư',
    dataIndex: 'wednesday',
  },
  {
    title: 'Thứ năm',
    dataIndex: 'thursday',
  },
  {
    title: 'Thứ sáu',
    dataIndex: 'friday',
  },
  {
    title: 'Thứ bảy',
    dataIndex: 'saturday',
  },
  {
    title: 'Chủ nhật',
    dataIndex: 'sunday',
  },
];

const data: TimeSlot[] = [];
for (let i = 1; i <= 16; i++) {
  data.push({
    key: i,
    time: `${i}:00`,
    monday: '',
    tuesday: '',
    // Initialize other days of the week with empty values
    // ...
  });
}

export default function AddSchedule() {
  const schedule: Schecule[] = mySchecule;
  return (
    <Wrapper>
      <SideMenu />
      <PageContent />
      <div className="content">
        <span>
          Lập lịch phát <RightOutlined /> Thêm lịch phát mới
        </span>
        <h1>Lập lịch phát</h1>
        <Container>
          <div className="left-table">
            <div className="table-1">
              <h3>Thông tin lịch phát</h3>
              <Form layout="vertical">
                <Form.Item label="Tên lịch phát">
                  <Input placeholder="Nhập tên lịch phát" />
                </Form.Item>
                <Form.Item label="Từ ngày">
                  <DatePicker placeholder="dd/mm/yyyy" />
                </Form.Item>
                <Form.Item label="Đến ngày">
                  <DatePicker placeholder="dd/mm/yyyy" />
                </Form.Item>
              </Form>
            </div>
            <div className="table-2">
              <h3>Danh sách Playlist</h3>
              {schedule.map((item, index) => {
                if (item.tenplaylist) {
                  return (
                    <Button type="primary" key={item.stt}>
                      {item.tenplaylist}
                      <p>
                        Thời lượng: <span>{item.thoiluong}</span>
                      </p>
                    </Button>
                  );
                }
                return null; // Skip mapping if `tenplaylist` is falsy
              })}
            </div>
          </div>
          <div className="right-table">
            <Table
              columns={columns}
              dataSource={data}
              bordered
              pagination={false}
              scroll={{ y: 735, x: 100 }}
            />
          </div>
        </Container>
        <div className="side-option">
          <div className="option">
            <Link to="" className="link-option">
              <div className="icon">
                <PlusCircleOutlined />
              </div>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;Áp lịch <br />
                cho thiết bị
              </p>
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Container = styled.div`
  display: flex;
  width: 1541px;
  margin: 10px 0;
  .left-table {
    display: flex;
    flex-direction: column;
    width: 273px;
    margin-right: 20px;
    .ant-form-item {
      margin-bottom: 12px;
    }
    label {
      color: #fff;
      opacity: 0.7;
    }
    .table-2 {
      padding: 0 10px;
    }
    .table-1 {
      border-radius: 16px;
      margin-bottom: 20px;
      z-index: 1;
      height: 304px;
      background: rgba(47, 47, 65, 0.7);
      padding: 0 10px;

      .ant-input {
        border: 1px solid #727288;
        background: rgba(47, 47, 65, 0.7);
      }
      input,
      .ant-picker {
        height: 48px;
        width: 241px;
        ::placeholder {
          color: #fff;
          opacity: 0.5;
        }
      }
      .ant-picker {
        margin-top: -10px;
        background: rgba(47, 47, 65, 0.7);
        height: 40px !important;
      }
      .ant-picker-input {
        input {
          ::placeholder {
            color: #fff;
            opacity: 0.5;
          }
        }
      }
    }
    .table-2 {
      height: 468px;
      background: rgba(47, 47, 65, 0.7);
      button {
        margin-bottom: 10px;
        height: 68px;
        width: 241px;
        background: #33334d;
        display: flex;
        flex-direction: column;
        color: #ffac69;
        font-weight: 500;
        p {
          span {
            margin-left: 60px;
            opacity: 0.5;
          }
        }
      }
    }
    .ant-table-wrapper {
      width: 273px;
      .ant-table-container {
        width: 273px;
      }
    }
  }
  .right-table {
    height: 792;
    background: rgba(47, 47, 65, 0.7);
    .ant-table-wrapper {
      width: 1250px;
      .ant-table-container {
        width: 1250px;
      }
    }
  }
`;

const Wrapper = styled.div`
  background-color: var(--primary-color);
  display: flex;
  .content {
    margin-left: 50px;
    margin-top: 50px;
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
        background-color: rgba(114, 114, 136, 0.5);
        margin-right: 10px;
        width: 50px;
        font-size: 2rem;
        color: #ff7506;
        border: 1px solid rgba(114, 114, 136, 0.5);
        border-radius: 50%;
      }
      p {
        margin-right: 16px;
        color: #fff;
        opacity: 0.5;
        font-size: 12px;
      }
    }
  }
`;
