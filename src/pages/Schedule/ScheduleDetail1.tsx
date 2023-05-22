import styled from 'styled-components';
import SideMenu from '../../components/SideMenu';
import PageContent from '../../components/PageContent';
import {
  FormOutlined,
  PlusCircleOutlined,
  RightOutlined,
} from '@ant-design/icons';
import { mySchecule, Schecule } from '../../mySong';
import { Row, Col, List, Checkbox, Input, Modal } from 'antd';
import { Link } from 'react-router-dom';
export default function ScheduleDetail1() {
  return (
    <Wrapper>
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
        <div className="side-option">
          <div className="option">
            <Link to="/edit-schedule" className="link-option">
              <div className="icon">
                <FormOutlined />
              </div>
              <p>
                Chỉnh sửa <br />
                lịch phát
              </p>
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
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
  .option {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
        width: 50px;
        font-size: 2rem;
        color: #ff7506;
        border: 1px solid rgba(114, 114, 136, 0.5);
        border-radius: 50%;
      }
      p {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        opacity: 0.5;
        font-size: 12px;
      }
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
