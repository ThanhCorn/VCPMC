import React from 'react';
import { List, Switch, Row, Col } from 'antd';
import { PartnerAuthorizer, myPartner } from '../myData';
import { Link } from 'react-router-dom';
import Page from './Page';
import styled from 'styled-components';

const ListUser = () => {
  return (
    <Container>
      <Row className="row-1">
        <Col span={1}>
          <p>STT</p>
        </Col>
        <Col span={3}>
          <p>Họ tên</p>
        </Col>
        <Col span={3}>
          <p>Tên Đăng nhập </p>
        </Col>
        <Col span={3}>
          <p>Vai trò </p>
        </Col>
        <Col span={4}>
          <p>Email </p>
        </Col>
        <Col span={3}>
          <p>Ngày hết hạn</p>
        </Col>
        <Col span={3}>
          <p>Số điện thoại </p>
        </Col>
        <Col span={3}>
          <p>Trạng thái </p>
        </Col>
      </Row>
      <List
        itemLayout="horizontal"
        dataSource={myPartner}
        renderItem={(myPartner: PartnerAuthorizer) => (
          <List.Item
            key={myPartner.stt}
            style={{ alignItems: 'center', display: 'flex' }}
          >
            <Row className="row-2">
              <Col span={1}>
                <p style={{ marginLeft: '18px' }}> {myPartner.stt}</p>
              </Col>
              <Col span={3}>
                <p>{myPartner.hoten}</p>
              </Col>
              <Col span={3}>
                <p>{myPartner.hoten}</p>
              </Col>
              <Col span={3}>
                <p>{myPartner.vaitro}</p>
              </Col>
              <Col span={4}>
                <p>{myPartner.email}</p>
              </Col>
              <Col span={3}>
                <p>{myPartner.ngayhethan}</p>
              </Col>
              <Col span={3}>
                <p>{myPartner.sdt}</p>
              </Col>
              <Col span={4}>
                <p>
                  <Switch checked={myPartner.trangthai} />
                  {myPartner.trangthai ? 'Đang kích hoạt' : ' Ngừng kích hoạt'}
                </p>
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
                  to="/management/authority/update"
                  style={{
                    background: 'transparent',
                    border: 'none',
                    textDecoration: 'underline',
                    color: '#ff7506',
                    cursor: 'pointer',
                  }}
                >
                  Chỉnh sửa
                </Link>
              </Col>
            </Row>
          </List.Item>
        )}
      ></List>
      <Page data={myPartner} />
    </Container>
  );
};

export default ListUser;

const Container = styled.div`
  width: 1541px;
  max-height: 722px;
  height: 722px;
  position: relative;
  background: rgba(47, 47, 65, 0.7);
  border: 1px solid rgba(47, 47, 65, 0.7);
  border-radius: 16px;
  margin: 10px 0;
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
