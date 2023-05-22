import React from 'react';
import styled from 'styled-components';
import SideMenu from '../../components/SideMenu';
import PageContent from '../../components/PageContent';
import { myDevice, Device } from '../../mySong';
import { Button, Pagination } from 'antd';
import { Row, Col, List, Checkbox, Input, Modal } from 'antd';
import { Link } from 'react-router-dom';
import {
  CheckOutlined,
  CloseOutlined,
  PlusCircleOutlined,
  PlusSquareOutlined,
  RightOutlined,
} from '@ant-design/icons';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';

export default function ChooseDevice() {
  const [isChecked, setIsChecked] = React.useState(false);

  return (
    <Wrapper>
      <div className="content">
        <span style={{ color: '#fff', opacity: '0.5' }}>
          Lập lịch phát <RightOutlined /> Chi tiết <RightOutlined /> Chỉnh sửa
          lịch phát <RightOutlined /> Áp lịch cho thiết bị
        </span>
        <h1>Chọn thiết bị</h1>
        <Container>
          <Row className="row-1">
            <Col
              span={2}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
              }}
            >
              <Checkbox
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
              />
              <p>STT</p>
            </Col>
            <Col span={3}>
              <p>Tên Thiết bị</p>
            </Col>
            <Col span={3}>
              <p>MAC Address</p>
            </Col>
            <Col span={3}>
              <p>SKU/ID</p>
            </Col>
            <Col span={3}>
              <p>Đơn vị sử dụng</p>
            </Col>
            <Col span={3}>
              <p>Tên đăng nhập</p>
            </Col>
            <Col span={8}>
              <p>Địa điểm hoạt động</p>
            </Col>
          </Row>
          <List
            itemLayout="horizontal"
            dataSource={myDevice}
            renderItem={(schedule: Device) => (
              <List.Item
                key={schedule.stt}
                style={{ alignItems: 'center', display: 'flex' }}
              >
                <Row className="row-2">
                  <Col
                    span={2}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-around',
                    }}
                  >
                    <Checkbox checked={isChecked} />
                    <p style={{ marginLeft: '18px' }}> {schedule.stt}</p>
                  </Col>
                  <Col span={3}>
                    <p>{schedule.tenthietbi}</p>
                  </Col>
                  <Col span={3}>
                    <p>{schedule.MACAdress}</p>
                  </Col>
                  <Col span={3}>
                    <p>{schedule.SKUID}</p>
                  </Col>
                  <Col span={3}>
                    <p>{schedule.donvisudung}</p>
                  </Col>
                  <Col span={3}>
                    <p>{schedule.tendangnhap}</p>
                  </Col>
                  <Col span={8}>
                    <p>{schedule.diadiem}</p>
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
                {myDevice.length}
              </span>{' '}
              hàng trong mỗi trang
            </p>
            <Pagination defaultCurrent={1} total={100} />
          </div>
        </Container>
        <div className="option">
          <Button className="button-option">
            <div className="icon">
              <CheckOutlined style={{ color: '#FF7506' }} />
            </div>
            <p>Chọn</p>
          </Button>
          <Button className="button-option">
            <div className="icon">
              <CloseOutlined style={{ color: '#FF7506' }} />
            </div>
            <p>Hủy</p>
          </Button>
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
  height: 100vh;
  width: 100vw;
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
