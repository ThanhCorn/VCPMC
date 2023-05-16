import React from 'react';
import styled from 'styled-components';
import SideMenu from '../../components/SideMenu';
import PageContent from '../../components/PageContent';
import { RightOutlined, StepForwardOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import { mySong, Song } from '../../mySong';

const UpdateRecordStore = () => {
  const data = mySong[0];
  return (
    <Wrapper>
      <SideMenu />
      <PageContent />
      <div className="content">
        <span style={{ color: '#fff', opacity: '0.5' }}>
          Kho bản ghi <RightOutlined style={{ color: '#FF7506' }} /> Cập nhật
          thông tin
        </span>
        <h1>Bản ghi - Mất em</h1>
        <Container>
          <div className="content-1">
            <Space className="space-1">
              <div className="info-record">
                <h1>Thông tin bản ghi</h1>
                <img src={data.hinhAnh} alt={data.tenBanGhi} />
                <span>
                  {' '}
                  <StepForwardOutlined />
                  Matem.mp3
                </span>
              </div>
              <div className="main-info">
                <p>
                  Ngày thêm <span>07/04/2021 - 17:45:30</span>{' '}
                </p>
                <p>
                  Ngày tải lên <span>Super Admin</span>
                </p>
                <p>
                  Người duyệt:{' '}
                  <span>
                    Hệ thống <br /> (Tự động phê duyệt)
                  </span>
                </p>

                <p>
                  Ngày phê duyệt: <span>07/04/2021 - 17:45:50</span>
                </p>
              </div>
            </Space>
            <Space className="space-2">
              <h1>Thông tin ủy quyền</h1>
              <div className="main-info">
                <p>
                  Số hợp đồng<span>BH123</span>{' '}
                </p>
                <p>
                  Ngày nhận ủy quyền:<span>01/05/2021</span>
                </p>
                <p>
                  Ngày hết hạn: <span>01/08/2025</span>
                </p>

                <p>
                  Trạng thái:<span>Còn thời hạn</span>
                </p>
              </div>
            </Space>
          </div>
          <div className="content-2 ">
            <Space className="space-3">
              <h1>Chỉnh sửa thông tin</h1>
            </Space>
          </div>
        </Container>
      </div>
    </Wrapper>
  );
};

export default UpdateRecordStore;

const Wrapper = styled.div`
  background-color: var(--primary-color);
  display: flex;
  .content {
    width: 100%;
    margin-left: 50px;
    margin-top: 50px;
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .content-1 {
    h1 {
      color: #ff7506;
      font-size: 24px;
    }
    display: flex;
    flex-direction: column;
    width: 570px;
    .space-1 {
      display: flex;
      flex-direction: column;
      border: 1px solid #2b2b3f;
      height: 476px;
      margin-bottom: 20px;
      .main-info {
        line-height: 12px;
        margin-top: 20px;
        width: 570px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        p {
          margin-left: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        span {
          opacity: 0.7;
          margin-right: 20px;
          display: flex;
          justify-content: flex-end;
        }
        line-height: 15px;
      }
      .info-record {
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
          margin-bottom: 20px;
          border-radius: 50%;
          width: 140px;
          height: 170px;
          object-fit: cover;
          height: 50%;
          background-position: center;
          background-repeat: no-repeat;
        }
        span {
          color: #fff;
          opacity: 0.7;
          svg {
            color: green;
            width: 20px;
            height: 20px;
          }
        }
      }
    }
    .space-2 {
      border: 1px solid #2b2b3f;
      height: 258px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      .main-info {
        line-height: 6px;

        width: 570px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        p {
          margin-left: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        span {
          opacity: 0.7;
          margin-right: 20px;
          display: flex;
          justify-content: flex-end;
        }
      }
    }
  }
  .content-2 {
    margin-left: 50px;

    width: 743px;
    .space-3 {
      border: 1px solid #2b2b3f;

      height: 757px;
    }
  }
`;
