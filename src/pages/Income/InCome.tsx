import React, { Children, useState } from 'react';
import styled from 'styled-components';
import {
  LineChartOutlined,
  PlusCircleOutlined,
  RightOutlined,
} from '@ant-design/icons';
import { Button, Col, DatePicker, List, Row, Switch } from 'antd';
import { Link } from 'react-router-dom';
import { Input } from 'antd';
import { Income, PartnerAuthorizer, myIncome, myPartner } from '../../myData';
import Page from '../../components/Page';
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

const InCome = () => {
  const [isForMonth, setIsForMonth] = useState(true);
  const onClick: MenuProps['onClick'] = ({ key }) => {
    if (key === '1') setIsForMonth(true);
    else setIsForMonth(false);
  };
  const items4 = isForMonth ? items2 : items3;
  const data = {
    labels: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15',
      '16',
      '17',
      '18',
      '19',
      '20',
      '21',
      '22',
      '23',
      '24',
      '25',
      '26',
      '27',
      '28',
      '29',
      '30',
      '31',
    ],

    datasets: [
      {
        label: 'Data',
        data: [
          0, 1, 2, 2, 1.5, 1, 2, 2.5, 3, 3, 5, 4, 4.5, 5, 5.7, 5, 4.5, 5, 5.5,
          6, 5.5, 5, 4.5, 4, 3.4, 3, 2, 3,
        ],
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };
  return (
    <Wrapper>
      <div className="content">
        <p style={{ color: 'white', opacity: '0.5' }}>
          Doanh thu
          <RightOutlined style={{ color: '#FFAC69' }} />
          Báo cáo doanh thu
        </p>
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
        </div>
        <div className="nav-content">
          <div className="nav-text">
            <p>Doanh thu</p>
            <h3>100</h3>
          </div>
          <div className="nav-text">
            <p>Tổng số lượt phát</p>
            <h3>32.000.000</h3>
          </div>
          <div className="nav-text">
            <p>Doanh thu trên lượt phát</p>
            <h3>100.000.000.000đ</h3>
          </div>
          <div className="nav-text">
            <p>Doanh thu chưa phân phối</p>
            <h3>100.000.000.000đ</h3>
          </div>
          <div className="nav-text">
            <p>Hành chính phí</p>
            <h3>100.000.000đ</h3>
          </div>
        </div>
        <h3>Biểu đồ theo dõi lượt phát - 20-7-2023</h3>
        <div>
          <div className="chart">
            <Line data={data}></Line>
          </div>
        </div>
      </div>
      <Link to="" className="link-option">
        <PlusCircleOutlined />
        <p>Xuất dữ liệu</p>
      </Link>
    </Wrapper>
  );
};

export default InCome;

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
    .chart {
      canvas {
        width: 1541px;
      }
      width: 1540vw;
      height: 500px;
    }
    h1 {
      margin-top: -20px;
      width: 700px;
      height: 48px;
      font-size: 36px;
      line-height: 48px;
      color: #ffffff;
    }
    h4 {
      font-weight: 200;
      opacity: 0.5;
      font-size: 16px;
      svg {
        color: #ffac69;
      }
    }
    .month-pick {
      display: flex;
      align-items: center;
      width: 65vw;
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
