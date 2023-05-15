import { Avatar, Col, List, Row } from 'antd';
import styled from 'styled-components';
import { mySong, Song } from '../mySong';
import { FormOutlined } from '@ant-design/icons';

const GridView = () => {
  return (
    <Container>
      <Row>
        {mySong.map((song: Song) => (
          <Col>
            <img src={song.hinhAnh} alt={song.tenBanGhi} />
            <div style={{ margin: '0 10px' }}>
              <p style={{ fontSize: '16px', marginTop: '5px' }}>
                {song.tenBanGhi}
              </p>
              <div className="info-song">
                <p>
                  Ca sĩ: <span>{song.caSi}</span>
                </p>
                <p>
                  Sáng tác: <span>{song.tacGia}</span>
                </p>
                <p>
                  Số hợp đồng: <span>{song.maISRC}</span>
                </p>
              </div>
              <div className="type-song">
                <div className="box-type">
                  <span>Thể loại</span>

                  <p>{song.theLoai}</p>
                </div>
                <div className="box-type">
                  <span>Định dạng</span>

                  <p>{song.dinhDang}</p>
                </div>
                <div className="box-type">
                  <span>Thời lượng</span>

                  <p>{song.thoiLuong}</p>
                </div>
                <FormOutlined className="icon" />
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default GridView;

const Container = styled.div`
  width: 1541px;
  max-height: 722px;
  .ant-col {
    margin-right: 40px;
    margin-bottom: 40px;
    margin-top: 40px;
    border-radius: 8px;
    width: 342px !important;
    height: 314px;
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
        font-size: 14px;
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
