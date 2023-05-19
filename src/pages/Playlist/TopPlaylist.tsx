import {
  CodepenCircleOutlined,
  PlusCircleOutlined,
  RedoOutlined,
  RightOutlined,
  SmileOutlined,
} from '@ant-design/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SideMenu from '../../components/SideMenu';
import PageContent from '../../components/PageContent';
import StarBoy from '../../assets/starboy.png';

export default function TopPlaylist() {
  return (
    <Wrapper>
      <SideMenu />
      <PageContent />
      <div className="content">
        <span style={{ color: '#fff', opacity: '0.5' }}>
          Playlist <RightOutlined /> Chi tiết playlist
        </span>
        <h1>Playlist top ca khúc 2023</h1>
        <Container>
          <div className="left-table">
            <img src={StarBoy} alt="starboy" />
            <h2>Top ca khúc 2023</h2>
            <div style={{ border: '1px solid #fff', opacity: '0.5' }}></div>
            <div className="info-playlist">
              <p>
                Người tạo: <span>Super Admin</span>
              </p>
              <p>
                Tổng số: <span>8 bản ghi</span>
              </p>
              <p>
                Tổng thời lượng: <span>01:31:00</span>
              </p>
            </div>
            <div style={{ border: '1px solid #fff', opacity: '0.5' }}></div>
            <span className="info-lorem">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
              quia non corrupti et fugit dolores harum nisi eum voluptate. Nemo?
            </span>
            <div style={{ border: '1px solid #fff', opacity: '0.5' }}></div>
            <div className="info-topic-1">
              <span>🌎Chủ đề 1</span>
              <span>🌎Chủ đề 2</span>
              <span>🌎Chủ đề 3</span>
            </div>
            <div className="info-topic-2">
              <span>🌎Chủ đề 1</span>
              <span>🌎Chủ đề 2</span>
              <span>🌎Chủ đề 3</span>
            </div>
            <div style={{ border: '1px solid #fff', opacity: '0.5' }}></div>
            <div className="play">
              <p>
                <CodepenCircleOutlined /> Hiển thị ở chế độ công khai
              </p>
              <p>
                <SmileOutlined /> Phát ngẫu nhiên
              </p>
              <p>
                <RedoOutlined /> Lặp lại
              </p>
            </div>
          </div>
          <div className="right-table"></div>
        </Container>
        <div className="side-option">
          <div className="option">
            <Link to="" className="link-option">
              <div className="icon">
                <PlusCircleOutlined />
              </div>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;Áp lịch <br />
                cho thiết bị
              </p>
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Container = styled.div`
  display: flex;
  width: 1541px;
  margin: 10px 0;
  .left-table {
    display: flex;
    flex-direction: column;
    width: 274px;
    margin-right: 20px;
    .play {
      display: flex;
      flex-direction: column;
      font-size: 16px;
      svg {
        font-size: 18px;
      }
    }
    .info-topic-1 {
      display: flex;
      justify-content: center;
      margin-top: 10px;
      span {
        color: #fff;

        font-size: 12px;
        margin-right: 8px;
        opacity: 0.5;
      }
    }
    .info-topic-2 {
      display: flex;
      justify-content: center;
      margin-bottom: 10px;
      span {
        color: #fff;
        font-size: 12px;
        margin-right: 8px;
        opacity: 0.5;
      }
    }
    img {
      height: 274px;
      width: 274px;
    }
    .info-lorem {
      color: #fff;
      margin: 15px 0;
      opacity: 0.5;
    }
    .info-playlist {
      color: #fff;
      p {
        display: flex;
        width: 100%;
        font-weight: 500;
      }
      span {
        margin-left: auto;
        opacity: 0.7;
      }
    }
  }

  .right-table {
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
        color: #fff;
        opacity: 0.5;
        font-size: 12px;
      }
    }
  }
`;
