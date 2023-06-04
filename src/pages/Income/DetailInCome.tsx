import React, { Children, useState } from 'react';
import styled from 'styled-components';
import {
  LineChartOutlined,
  PlusCircleOutlined,
  RightOutlined,
} from '@ant-design/icons';
import { Button, Col, DatePicker, List, Modal, Row, Switch } from 'antd';
import { Link } from 'react-router-dom';
import { Input } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, message, Space } from 'antd';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from 'chart.js';
import { Income, myIncome } from '../../myData';
import Page from '../../components/Page';
import { toast } from 'react-toastify';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale);
const items: MenuProps['items'] = [
  {
    label: 'Theo tháng',
    key: '1',
  },
  {
    label: 'Theo quý',
    key: '2',
  },
];

const items2: MenuProps['items'] = [
  {
    label: 'Tháng 1',
    key: '1',
  },
  {
    label: 'Tháng 2',
    key: '2',
  },
  {
    label: 'Tháng 3',
    key: '3',
  },
  {
    label: 'Tháng 4',
    key: '4',
  },
  {
    label: 'Tháng 5',
    key: '5',
  },
  {
    label: 'Tháng 6',
    key: '6',
  },
  {
    label: 'Tháng 7',
    key: '7',
  },
  {
    label: 'Tháng 8',
    key: '8',
  },
  {
    label: 'Tháng 9',
    key: '9',
  },
  {
    label: 'Tháng 10',
    key: '10',
  },
  {
    label: 'Tháng 11',
    key: '11',
  },
  {
    label: 'Tháng 12',
    key: '12',
  },
];

const items3: MenuProps['items'] = [
  {
    label: 'Quý 1',
    key: '1',
  },
  {
    label: 'Quý 2',
    key: '2',
  },
  {
    label: 'Quý 3',
    key: '3',
  },
  {
    label: 'Quý 4',
    key: '4',
  },
];
const { Search } = Input;
const onSearch = (value: string) => console.log(value);

const DetailInCome = () => {
  const [isForMonth, setIsForMonth] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const onClick: MenuProps['onClick'] = ({ key }) => {
    if (key === '1') setIsForMonth(true);
    else setIsForMonth(false);
  };
  const items4 = isForMonth ? items2 : items3;

  return (
    <Wrapper>
      <div className="content">
        <div className="header-text">
          <span>
            {' '}
            Doanh thu
            <RightOutlined />
          </span>
          <span>
            {' '}
            Báo cáo doanh thu <RightOutlined />
          </span>
          <span>Báo cáo chi tiết</span>
        </div>

        <h1>Báo cáo doanh thu</h1>
        <div className="month-pick">
          <p style={{ marginRight: '20px' }}>
            Theo {`${isForMonth ? 'tháng:' : 'quý:'}`}
          </p>
          <div className="datepick">
            <Dropdown menu={{ items: items, onClick }}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  {isForMonth ? 'Theo tháng' : 'Theo quý'}
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>
          <div className="datepick">
            <Dropdown menu={{ items: items4 }}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Tháng 7/2023
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>
          <div className="search">
            <Search
              placeholder="Nhập tên người dùng..."
              onSearch={onSearch}
              style={{ width: 200 }}
            />
          </div>
        </div>
        <Container>
          <Row className="row-1">
            <Col span={1}>
              <p>STT</p>
            </Col>
            <Col span={2}>
              <p>Số hợp đồng</p>
            </Col>
            <Col span={3}>
              <p>Đơn vị khai thác</p>
            </Col>

            <Col span={3}>
              <p>Thời hạn hợp đồng</p>
            </Col>
            <Col span={3}>
              <p>Loại hợp đồng </p>
            </Col>
            <Col span={3}>
              <p>Số thiết bị đã đồng bộ </p>
            </Col>
            <Col span={3}>
              <p>Tổng số lượt phát</p>
            </Col>
            <Col span={3}>
              <p>Ngày chốt đối soát </p>
            </Col>
          </Row>

          <List
            itemLayout="horizontal"
            dataSource={myIncome}
            renderItem={(myIncome: Income) => (
              <List.Item
                key={myIncome.stt}
                style={{ alignItems: 'center', display: 'flex' }}
              >
                <Row className="row-2">
                  <Col span={1}>
                    <p> {myIncome.stt}</p>
                  </Col>
                  <Col span={2}>
                    <p>{myIncome.hopdong}</p>
                  </Col>
                  <Col span={3}>
                    <p>{myIncome.donvikhaithac}</p>
                  </Col>

                  <Col span={3}>
                    <p>{myIncome.thoihanhopdong}</p>
                  </Col>
                  <Col span={3}>
                    <p>{myIncome.loaihopdong}</p>
                  </Col>
                  <Col span={3}>
                    <p>{myIncome.sothietbidongbo}</p>
                  </Col>
                  <Col span={3}>
                    <p>{myIncome.tongsoluotphat}</p>
                  </Col>
                  <Col span={3}>
                    <p>{myIncome.ngaychot}</p>
                  </Col>
                  <Col
                    span={2}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Link
                      to="/income/detail/profit"
                      style={{
                        background: 'transparent',
                        border: 'none',
                        textDecoration: 'underline',
                        color: '#ff7506',
                        cursor: 'pointer',
                      }}
                    >
                      Chi tiết doanh thu
                    </Link>
                  </Col>
                  <Col
                    span={4}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Link
                      to="/income/history-sync"
                      style={{
                        background: 'transparent',
                        border: 'none',
                        textDecoration: 'underline',
                        color: '#ff7506',
                        cursor: 'pointer',
                      }}
                    >
                      Lịch sử đồng bộ trên thiết bị
                    </Link>
                  </Col>
                </Row>
              </List.Item>
            )}
          ></List>
          <Page data={myIncome} />
        </Container>
      </div>
      <Button onClick={() => setIsModalOpen(true)} className="link-option">
        <PlusCircleOutlined />
        <p>
          Chốt doanh
          <br />
          thu
        </p>
      </Button>
      {isModalOpen && (
        <ModalContainer open={isModalOpen} onOk={handleOk}>
          <h3>Chốt doanh thu</h3>
          <p>
            Doanh thu sẽ được chốt từ ngày 01/05/2021 đến ngày 14/05/2021 trên
            tất cả các hợp đồng sử dụng.
            <br />
            Nhấn Tiếp tục để chốt doanh thu. Nhấn Hủy để hủy bỏ và không chốt
            doanh thu
          </p>
          <div className="btn">
            <Button className="btn-huy" onClick={() => setIsModalOpen(false)}>
              Hủy
            </Button>
            <Link
              to="/income/detail/profit"
              type="primary"
              onClick={() => setIsModalOpen(false)}
              style={{
                color: '#fff',
                padding: '12px 50px',
                borderRadius: '4px',
                background: '#ff7506',
                border: '1px solid #ff7506',
              }}
            >
              Tiếp tục
            </Link>
          </div>
        </ModalContainer>
      )}
    </Wrapper>
  );
};

export default DetailInCome;

const ModalContainer = styled(Modal)`
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
    display: none;
  }
`;

const Container = styled.div`
  width: 1541px;
  position: relative;
  margin-right: 20px;
  max-height: 722px;
  height: 722px;
  background: rgba(47, 47, 65, 0.7);
  border: 1px solid rgba(47, 47, 65, 0.7);
  border-radius: 16px;
  margin: 10px 0;
  .ant-col {
  }
  .row-1,
  .row-2 {
    width: 1541px;
    padding-left: 35px;
    display: flex;
    align-items: center;
    .ant-col-3 {
      max-width: 10%;
    }
  }
  .row-2 {
    border-bottom: 1px solid rgba(47, 47, 65, 0.7);
    p {
      font-size: 12px;

      color: #fff;
      opacity: 0.7;
    }
  }
  .row-1 {
    p {
      font-size: 12px;

      font-weight: bold;
      color: #ffac69;
      opacity: 1;
    }
  }
`;

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
    .search {
      display: flex;
      justify-content: flex-end;
      width: 35vw;
      .ant-input-wrapper {
        width: 300px;
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
        height: 48px;
      }
    }

    h1 {
      width: 700px;
      height: 48px;
      font-size: 36px;
      line-height: 48px;
      color: #ffffff;
    }

    .month-pick {
      display: flex;
      align-items: center;
      width: 1541px;
    }
    .nav-content {
      margin-top: 20px;
      display: flex;
      width: 1540px;
      background: #2f2f41;
      border-radius: 10px;
      .nav-text {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 8px;
        border-right: 2px solid #3c3c4f;
        h3 {
          font-size: 24px;
          font-weight: 500;
          color: #ffac69;
          margin-top: -8px;
        }
      }
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

  .datepick {
    display: flex;
    align-items: center;
    margin-right: 20px;
    border-radius: 10px;
    border: 1px solid #727288;
    padding: 10px 20px;
    background: #1e1e2e;
    color: #fff;
    p {
      margin-right: 10px;
    }
    svg {
      color: #ffac69;
    }
  }
`;
