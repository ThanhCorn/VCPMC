import {
  Button,
  Checkbox,
  Col,
  Input,
  List,
  Modal,
  Pagination,
  Row,
} from 'antd';
import React from 'react';
import { mySchecule, mySong, Schecule, Song } from '../mySong';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RootState } from '../app/store';
import ImageSong from '../assets/Song.png';

const { TextArea } = Input;

const ListViewPlaylist: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const isListView = useSelector((state: RootState) => state.view.isListView);
  const [isChecked, setIsChecked] = React.useState(false);
  const dispatch = useDispatch();
  const rowStyle = !isListView
    ? { alignItems: 'center', marginLeft: '-15px' }
    : {};

  return (
    <Container>
      <Row className="row-1" style={rowStyle}>
        <Col span={1}>
          <p>STT</p>
        </Col>
        <Col span={5}>
          <p>Tiêu đề</p>
        </Col>
        <Col span={2}>
          <p>Số bản ghi</p>
        </Col>
        <Col span={2}>
          <p>Thời lượng</p>
        </Col>
        <Col span={6}>
          <p>Chủ đề</p>
        </Col>
        <Col span={3}>
          <p>Ngày tạo</p>
        </Col>
        <Col span={2}>
          <p>Người tạo</p>
        </Col>
      </Row>
      <List
        itemLayout="horizontal"
        dataSource={mySchecule}
        renderItem={(song: Schecule) => (
          <List.Item
            key={song.stt}
            style={{ alignItems: 'center', display: 'flex' }}
          >
            <Row className="row-2">
              <Col span={1}>
                <p style={{ marginLeft: '18px' }}> {song.stt}</p>
              </Col>
              <Col span={5}>
                <p>{song.tenplaylist}</p>
              </Col>
              <Col span={2}>
                <p>{song.sobanghi}</p>
              </Col>
              <Col span={2}>
                <p>{song.thoiluong}</p>
              </Col>
              <Col span={6}>
                {song.chude &&
                  song.chude.map((item, index) => (
                    <span
                      key={index}
                      style={{
                        color: '#fff',
                        border: '1px solid #F5F5FF',
                        borderRadius: '4px',
                        marginRight: '4px',
                        padding: '4px 6px',
                        opacity: '0.5',
                      }}
                    >
                      {item}
                    </span>
                  ))}
              </Col>
              <Col span={3}>
                <p>{song.ngaytao}</p>
              </Col>
              <Col span={2}>
                <p>{song.nguoitao}</p>
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
                  to="/top-playlist"
                  style={{
                    background: 'transparent',
                    border: 'none',
                    textDecoration: 'underline',
                    color: '#ff7506',
                    cursor: 'pointer',
                  }}
                >
                  Chi tiết
                </Link>
              </Col>
            </Row>
            {isModalOpen && (
              <ModalContent
                visible={isModalOpen}
                onCancel={() => setIsModalOpen(false)}
              >
                <img src={ImageSong} alt="" />
              </ModalContent>
            )}
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
            {mySong.length}
          </span>{' '}
          hàng trong mỗi trang
        </p>
        <Pagination defaultCurrent={1} total={100} />
      </div>
    </Container>
  );
};

export default ListViewPlaylist;
const ModalContent = styled(Modal)`
  img {
    width: 100%;
    margin-top: 30px;
  }
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
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    .ant-btn-default {
      display: none;
    }
    .ant-btn-primary {
      display: none;
    }
  }
`;

const Container = styled.div`
  width: 1541px;
  max-height: 722px;
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
