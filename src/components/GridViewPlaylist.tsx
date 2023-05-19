import { Checkbox, Col, Pagination, Row } from 'antd';
import styled from 'styled-components';
import { mySchecule, Schecule } from '../mySong';
import { InfoCircleOutlined } from '@ant-design/icons';

const GridViewPlaylist: React.FC = () => {
  return (
    <Container>
      <Row>
        {mySchecule.map((song: Schecule) => (
          <Col>
            <img src={song.hinhanh} alt={song.tenplaylist} />
            <div style={{ margin: '0 10px' }}>
              <p
                style={{
                  fontSize: '16px',
                  marginTop: '5px',
                  marginBottom: '8px',
                }}
              >
                {song.tenplaylist}
              </p>
              <div className="box-topic">
                <span>Chủ đề ví dụ</span>
                <span>Pop</span>
                <span>Trending</span>
                <span>Good</span>
              </div>
              <div className="info-song">
                <p>
                  Người tạo: <span>{song.nguoitao}</span>
                </p>
                <p>
                  Ngày tạo: <span>{song.ngaytao}</span>
                </p>
              </div>
              <div className="type-song">
                <div className="box-type">
                  <span>Số bản ghi</span>

                  <p>{song.sobanghi}</p>
                </div>

                <div className="box-type">
                  <span>Thời lượng</span>
                  <p>{song.thoiluong}</p>
                </div>
                <InfoCircleOutlined className="icon" />
              </div>
            </div>
          </Col>
        ))}
      </Row>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0 23px',
          marginTop: '-15px',
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
  );
};

export default GridViewPlaylist;

const Container = styled.div`
  width: 1541px;
  max-height: 722px;
  .box-topic {
    margin-right: 10px;
    display: flex;
    align-items: center;
    span {
      display: flex;
      align-items: center;
      padding: 0 10px;
      border: 1px solid #fff;
      height: 30px;
      max-width: 90px;
      border-radius: 4px;
      margin-right: 10px;

      color: #fff;
      opacity: 0.5;
      font-weight: 400;
      font-size: 12px;
    }
  }
  .ant-col {
    margin-right: 40px;
    margin-bottom: 40px;
    margin-top: 40px;
    border-radius: 8px;
    width: 342px !important;
    height: 340px;
    background: rgba(57, 57, 85, 0.7);
    img {
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      width: 342px;
      object-fit: cover;
      height: 50%;
      background-position: center;
      background-repeat: no-repeat;
    }
  }
  .info-song {
    font-size: 12px;
    line-height: 0.7;
    span {
      opacity: 0.5;
    }
  }
  .type-song {
    position: relative;

    display: flex;
    line-height: 0.7;
    .box-type {
      margin-right: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      border: 1px solid #727288;
      border-radius: 10px;
      height: 40px;
      width: 60px;
      span {
        margin-top: 4px;

        color: #fff;
        opacity: 0.5;
        font-weight: 400;
        font-size: 10px;
      }
      p {
        font-size: 12px;
      }
    }
    .icon {
      position: absolute;
      bottom: 0;
      right: 0;
      font-size: 1.5rem;
      color: #ff7506;
    }
  }
`;
