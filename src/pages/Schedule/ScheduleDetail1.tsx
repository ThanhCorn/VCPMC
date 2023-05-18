import styled from 'styled-components';
import SideMenu from '../../components/SideMenu';
import PageContent from '../../components/PageContent';
import { PlusCircleOutlined, RightOutlined } from '@ant-design/icons';
import { mySchecule, Schecule } from '../../mySong';
import { Row, Col, List, Checkbox, Input, Modal } from 'antd';
import { Link } from 'react-router-dom';
export default function ScheduleDetail1() {
  return (
    <Wrapper>
      <SideMenu />
      <PageContent />
      <div className="content">
        <span className="path-title">
          Lập lịch phát <RightOutlined /> Chi tiết
        </span>
        <h1 style={{ fontSize: '36px' }}>Lịch phát số 1</h1>
        <h2 style={{ marginTop: '40px' }}>Danh sách Playlist</h2>
        <Container>
          <Row className="row-1">
            <Col span={2}>
              <p>STT</p>
            </Col>
            <Col span={3}>
              <p>Tên Playlist</p>
            </Col>
            <Col span={4}>
              <p>Ngày phát Playlist</p>
            </Col>
            <Col span={4}>
              <p>Bắt đầu - Kết thúc</p>
            </Col>
            <Col span={2}>
              <p>Chu kỳ phát </p>
            </Col>
            <Col span={7}>
              <p>Thiết bị </p>
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
                  {schedule.tenplaylist && (
                    <Col span={2}>
                      <p style={{ marginLeft: '18px' }}> {schedule.stt}</p>
                    </Col>
                  )}
                  <Col span={3}>
                    <p>{schedule.tenplaylist}</p>
                  </Col>
                  <Col span={4}>
                    <p>{schedule.ngayphatplaylist}</p>
                  </Col>
                  <Col span={4}>
                    <p>{schedule.batdauketthuc}</p>
                  </Col>
                  <Col span={2}>
                    <p>{schedule.chukyphat}</p>
                  </Col>
                  <Col span={7}>
                    <p>{schedule.thietbi}</p>
                  </Col>
                </Row>
              </List.Item>
            )}
          ></List>
        </Container>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  background-color: var(--primary-color);
  display: flex;
  .content {
    margin-left: 50px;
    margin-top: 50px;
    .path-title {
      margin-top: 5px;
      color: #fff;
      opacity: 0.7;
    }
  }
`;

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
