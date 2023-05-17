import React from 'react';
import styled from 'styled-components';
import SideMenu from '../../components/SideMenu';
import PageContent from '../../components/PageContent';
import { mySchecule, Schecule } from '../../mySong';
import { Button, Pagination } from 'antd';
import { Row, Col, List, Checkbox, Input, Modal } from 'antd';
import { Link } from 'react-router-dom';
import { PlusCircleOutlined, PlusSquareOutlined } from '@ant-design/icons';

export default function Schedule() {
  return (
    <Wrapper>
      <SideMenu />
      <PageContent />
      <div className="content">
        <h1>Danh sách lịch phát</h1>
        <Container>
          <Row className="row-1">
            <Col span={2}>
              <p>STT</p>
            </Col>
            <Col span={8}>
              <p>Tên Lịch</p>
            </Col>
            <Col span={2}>
              <p>Thời gian phát</p>
            </Col>
          </Row>
          <List
            itemLayout="horizontal"
            dataSource={mySchecule}
            renderItem={(schedule: Schecule) => (
              <List.Item
                key={schedule.stt}
                style={{ alignItems: 'center', display: 'flex' }}
              >
                <Row className="row-2">
                  <Col span={2}>
                    <p style={{ marginLeft: '18px' }}> {schedule.stt}</p>
                  </Col>
                  <Col span={8}>
                    <p>{schedule.tenlich}</p>
                  </Col>
                  <Col span={8}>
                    <p>{schedule.thoigian}</p>
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
                      to={`/schedule/${schedule.stt}`}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        textDecoration: 'underline',
                        color: '#ff7506',
                        cursor: 'pointer',
                      }}
                    >
                      Xem chi tiết
                    </Link>
                  </Col>

                  <Col
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Button
                      style={{
                        background: 'transparent',
                        border: 'none',
                        textDecoration: 'underline',
                        color: '#FF4747',
                      }}
                    >
                      Xóa
                    </Button>
                  </Col>
                </Row>
              </List.Item>
            )}
          ></List>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '0 23px',
              marginTop: '20px',
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
                {mySchecule.length}
              </span>{' '}
              hàng trong mỗi trang
            </p>
            <Pagination defaultCurrent={1} total={100} />
          </div>
        </Container>
        <div className="side-option">
          <div className="option">
            <Link to="/add-schedule" className="link-option">
              <div className="icon">
                <PlusCircleOutlined />
              </div>
              <p>
                &nbsp;&nbsp;Thêm lịch <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;phát
              </p>
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Container = styled.div`
  width: 1541px;
  max-height: 722px;
  background: rgba(47, 47, 65, 0.7);
  border: 1px solid rgba(47, 47, 65, 0.7);
  border-radius: 16px;
  margin: 10px 0;
  .row-1,
  .row-2 {
    width: 1541px;
    padding-top: 20px;
    padding-left: 35px;
    .ant-col-3 {
      max-width: 10%;
    }
  }
  .row-2 {
    border-bottom: 1px solid rgba(47, 47, 65, 0.7);
    p {
      color: #fff;
      opacity: 0.7;
    }
  }
  .row-1 {
    p {
      font-weight: bold;
      color: #ffac69;
      opacity: 1;
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
