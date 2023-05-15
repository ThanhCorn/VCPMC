import { Col, List, Pagination, Row } from 'antd';
import React from 'react';
import { mySong } from '../mySong';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface Song {
  stt: number;
  tenBanGhi: string;
  maISRC: string;
  thoiLuong: string;
  caSi: string;
  tacGia: string;
  theLoai: string;
  dinhDang: string;
  thoiGianSuDung: string;
  hinhAnh: string; // Thêm trường hình ảnh
}

const ListView = () => {
  return (
    <Container>
      <Row className="row-1">
        <Col span={1}>
          <p>STT</p>
        </Col>
        <Col span={3}>
          <p>Tên bản ghi</p>
        </Col>
        <Col span={2}>
          <p>Ma ISRC</p>
        </Col>
        <Col span={2}>
          <p>Thời lượng</p>
        </Col>
        <Col span={3}>
          <p>Ca sĩ</p>
        </Col>
        <Col span={3}>
          <p>Tác giả</p>
        </Col>
        <Col span={2}>
          <p>Thể loại</p>
        </Col>
        <Col span={2}>
          <p>Định dạng</p>
        </Col>
        <Col span={3}>
          <p>Thời gian sử dụng</p>
        </Col>
      </Row>
      <List
        itemLayout="horizontal"
        dataSource={mySong}
        renderItem={(song: Song) => (
          <List.Item key={song.stt}>
            <Row className="row-2">
              <Col span={1}>
                <p style={{ marginLeft: '18px' }}> {song.stt}</p>
              </Col>
              <Col span={3}>
                <p>{song.tenBanGhi}</p>
              </Col>
              <Col span={2}>
                <p>{song.maISRC}</p>
              </Col>
              <Col span={2}>
                <p>{song.thoiLuong}</p>
              </Col>
              <Col span={3}>
                <p>{song.caSi}</p>
              </Col>
              <Col span={3}>
                <p>{song.tacGia}</p>
              </Col>
              <Col span={2}>
                <p>{song.theLoai}</p>
              </Col>
              <Col span={2}>
                <p>{song.dinhDang}</p>
              </Col>
              <Col span={4} style={{ height: '18px' }}>
                <p style={{ marginBottom: '-10px' }}>🌱{song.thoiGianSuDung}</p>
                <span
                  style={{
                    color: '#fff',
                    opacity: '0.5',
                    fontSize: '12px',
                  }}
                >
                  20/12/2023
                </span>
              </Col>
              <Col span={2}>
                <Link
                  to="/management/contract/1"
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
              <Col>
                <Link
                  to="/management/contract/1"
                  style={{
                    background: 'transparent',
                    border: 'none',
                    textDecoration: 'underline',
                    color: '#ff7506',
                    cursor: 'pointer',
                  }}
                >
                  Nghe
                </Link>
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
            {mySong.length}
          </span>{' '}
          hàng trong mỗi trang
        </p>
        <Pagination defaultCurrent={1} total={100} />
      </div>
    </Container>
  );
};

export default ListView;

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
