import React from 'react';
import { List, Switch, Row, Col } from 'antd';
import { Role, myRole } from '../../myData';
import { Link } from 'react-router-dom';
import Page from '../Page';
import styled from 'styled-components';

const ListRole = () => {
  const [isUpdate, setIsUpdate] = React.useState(false);
  return (
    <Container>
      <Row className="row-1">
        <Col span={1}>
          <p>STT</p>
        </Col>
        <Col span={4}>
          <p>Tên nhóm người dùng</p>
        </Col>
        <Col span={4}>
          <p>Số lượng người dùng </p>
        </Col>
        <Col span={3}>
          <p>Vai trò </p>
        </Col>
        <Col span={3}>
          <p>Mô tả </p>
        </Col>
      </Row>
      <List
        itemLayout="horizontal"
        dataSource={myRole}
        renderItem={(myRole: Role) => (
          <List.Item
            key={myRole.stt}
            style={{ alignItems: 'center', display: 'flex' }}
          >
            <Row className="row-2">
              <Col span={1}>
                <p style={{ marginLeft: '18px' }}> {myRole.stt}</p>
              </Col>
              <Col span={4}>
                <p>{myRole.tennhom}</p>
              </Col>
              <Col span={4}>
                <p>{myRole.soluong}</p>
              </Col>
              <Col span={3}>
                <p>{myRole.vaitro}</p>
              </Col>

              <Col span={8}>
                <p>{myRole.mota}</p>
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
                  to="/setting/update-role"
                  style={{
                    background: 'transparent',
                    border: 'none',
                    textDecoration: 'underline',
                    color: '#ff7506',
                    cursor: 'pointer',
                  }}
                >
                  Cập nhật
                </Link>
              </Col>
              {myRole.tennhom === 'QC' && (
                <Col
                  span={2}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Link
                    to=""
                    style={{
                      background: 'transparent',
                      border: 'none',
                      textDecoration: 'underline',
                      color: '#ff7506',
                      cursor: 'pointer',
                    }}
                  >
                    Xóa
                  </Link>
                </Col>
              )}
            </Row>
          </List.Item>
        )}
      ></List>
      <Page data={myRole} />
    </Container>
  );
};

export default ListRole;

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
