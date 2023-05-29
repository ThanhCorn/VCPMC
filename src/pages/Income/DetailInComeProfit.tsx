import React, { Children, useState } from 'react';
import styled from 'styled-components';
import { PlusCircleOutlined, RightOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, List, Modal, Row, Switch } from 'antd';
import { Link } from 'react-router-dom';
import { Input } from 'antd';
import { Income, PartnerAuthorizer, myIncome, myPartner } from '../../myData';
import Page from '../../components/Page';

const { Search } = Input;
const onSearch = (value: string) => console.log(value);

const dateFormat = 'YYYY/MM/DD';
const DetailInComeProfit = () => {
  return (
    <Wrapper>
      <div className="content">
        <p style={{ color: 'white', opacity: '0.5' }}>
          Doanh thu
          <RightOutlined style={{ color: '#FFAC69' }} />
          Báo cáo doanh thu
          <RightOutlined style={{ color: '#FFAC69' }} />
          Báo cáo chi tiết
          <RightOutlined style={{ color: '#FFAC69' }} />
          Chi tiết doanh thu
        </p>
        <h1>Hợp đồng UQ123 - Kỳ tháng 6/2021 </h1>
        <div className="main-container">
          <div className="container-1">
            <div className="box-1">
              <h3>Thông tin hợp đồng</h3>
              <p>
                Số hợp đông: <span>UQ123</span>
              </p>
              <p>
                Đơn vị khai thác: <span>Công ty TNHH ABC</span>
              </p>
              <p>
                Loại hợp đồng: <span>Trọn gói</span>
              </p>
              <p>
                Hiệu lực từ: <span>01/01/2020</span>
              </p>
              <p>
                Ngày hết hạn: <span>01/01/2022</span>
              </p>
              <p>
                Giá trị hợp đồng: <span>730.000.000 VNĐ</span>
              </p>
              <p>
                Giá trị phân phối theo ngày: <span>365.000.000 VNĐ</span>
              </p>
            </div>
            <div className="box-2">
              <h3>Thông tin đối soát</h3>
              <p>
                Ký đối soát:<span>01/01/2020</span>
              </p>
              <p>
                Số bài hát:<span>13 bài</span>
              </p>
              <p>
                Tổng số lượt phát: <span>300.000.000 VNĐ</span>
              </p>
              <p>
                Doanh thu chưa phân phối: <span>1.000.000 VNĐ</span>
              </p>
              <p>
                Trạng thái đối soát: <span>Chưa đối soát</span>
              </p>
            </div>
          </div>
          <div className="container-2">
            <h3>Danh sách bản ghi</h3>
            <div className="option">
              <div className="datepick">
                <p>Xem theo ngày/tuần</p>
                <DatePicker format={dateFormat} />
              </div>
              <div className="search-btn">
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
                <Col span={3}>
                  <p>Tên bài hát</p>
                </Col>
                <Col span={4}>
                  <p>Tổng lượt phát</p>
                </Col>

                <Col span={4}>
                  <p>Tổng doanh thu</p>
                </Col>
                <Col span={4}>
                  <p>Quyền biểu diễn </p>
                </Col>
                <Col span={4}>
                  <p>Quyền sản xuất </p>
                </Col>
                <Col span={3}>
                  <p>VCPMC</p>
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
                      <Col span={3}>
                        <p>{myIncome.tenbaihat}</p>
                      </Col>
                      <Col span={4}>
                        <p>{myIncome.tongsoluotphat}</p>
                      </Col>

                      <Col span={4}>
                        <p>{myIncome.doanhthu}</p>
                      </Col>
                      <Col span={4}>
                        <p>{myIncome.soluotphat}</p>
                      </Col>
                      <Col span={4}>
                        <p>{myIncome.sothietbidongbo}</p>
                      </Col>
                      <Col span={4}>
                        <p>{myIncome.tongsoluotphat}</p>
                      </Col>
                    </Row>
                  </List.Item>
                )}
              ></List>
              <Page data={myIncome} />
            </Container>
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

export default DetailInComeProfit;

const Container = styled.div`
  width: 970px;
  justify-content: space-between;
  position: relative;
  margin-right: 20px;
  max-height: 722px;
  height: 722px;
  background: rgba(47, 47, 65, 0.7);
  border: 1px solid rgba(47, 47, 65, 0.7);
  border-radius: 16px;
  margin: 10px 0;
  .row-1,
  .row-2 {
    width: 100%;
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
    .main-container {
      display: flex;
      width: 1541px;
      .container-2 {
        width: 970px;

        .option {
          justify-content: space-between;
          display: flex;
          .datepick {
            display: flex;
            .ant-picker {
              margin-left: 20px;
              background: #1e1e2e;
              color: #fff;
              border: 1px solid #727288;
              width: 200px;
              svg {
                color: #ff7506;
                font-size: 1.5rem;
              }
              input {
                color: #fff;
              }
            }
          }
        }
      }
      .container-1 {
        margin-right: 20px;
        width: 571px;
        h3 {
          color: #ff7506;
        }

        .box-1,
        .box-2 {
          padding: 0 20px;
          display: flex;
          flex-direction: column;
          background: rgba(47, 47, 65, 0.7);
          height: 432px;
          margin-bottom: 20px;
          border-radius: 16px;
          p {
            width: 571;
            display: flex;
            justify-content: space-between;
            span {
              width: 154px;
              margin-right: 20px;
              opacity: 0.5;
            }
          }
        }
        .box-1 {
          margin-bottom: 20px;
        }
      }
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
    .search-btn {
      margin-right: 100px;
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
`;
