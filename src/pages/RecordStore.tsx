import React from 'react';
import styled from 'styled-components';
import SideMenu from '../components/SideMenu';
import PageContent from '../components/PageContent';
import { Avatar, Button, Col, Dropdown, Input, List, Row, Space } from 'antd';
import {
  AppstoreOutlined,
  CheckOutlined,
  CloseOutlined,
  DownOutlined,
  FormOutlined,
  RightOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons';
import { items, items2, items3, items4 } from '../MenuDropDown';
import { mySong } from '../mySong';
const { Search } = Input;
const onSearch = (value: string) => console.log(value);

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

const RecordStore = () => {
  const [isPass, setIsPass] = React.useState<boolean>(true);
  return (
    <Wrapper>
      <SideMenu />
      <PageContent />
      {isPass ? (
        <>
          <div className="content">
            <h1>Kho bản ghi</h1>
            <Search
              onSearch={onSearch}
              placeholder="Tên bản ghi, tên ca sĩ,..."
            />
            <div className="option-1">
              <Space className="space-1">
                <p>Thể loại:</p>
                <Dropdown menu={{ items: items }}>
                  <Button className="button-1">
                    <Space>
                      Tất cả
                      <DownOutlined />
                    </Space>
                  </Button>
                </Dropdown>
              </Space>
              <Space className="space-2">
                <p>Định dạng:</p>
                <Dropdown menu={{ items: items2 }}>
                  <Button className="button-1">
                    <Space>
                      Tất cả
                      <DownOutlined />
                    </Space>
                  </Button>
                </Dropdown>
              </Space>
              <Space className="space-3">
                <p>Thời gian sử dụng:</p>
                <Dropdown menu={{ items: items3 }}>
                  <Button className="button-1">
                    <Space>
                      Tất cả
                      <DownOutlined />
                    </Space>
                  </Button>
                </Dropdown>
              </Space>
              <Space className="space-4">
                <p>Trạng thái:</p>
                <Dropdown menu={{ items: items4 }}>
                  <Button className="button-2">
                    <Space>
                      Tất cả
                      <DownOutlined />
                    </Space>
                  </Button>
                </Dropdown>
              </Space>
              <Space className="space-5">
                <Button>
                  <UnorderedListOutlined />
                </Button>
                <Button>
                  <AppstoreOutlined />
                </Button>
              </Space>
            </div>
            <Container>
              <Row className="row" justify="space-around">
                <Col span={1}>
                  <p>STT</p>
                </Col>
                <Col span={2}>
                  <p>Hình ảnh</p>
                </Col>
                <Col span={3}>
                  <p>Tên bản ghi</p>
                </Col>
                <Col span={3}>
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
                pagination={{
                  pageSize: 10,
                }}
                renderItem={(song: Song) => (
                  <List.Item key={song.stt}>
                    <Row className="row">
                      <Col span={1}>
                        <p>{song.stt}</p>
                      </Col>
                      <Col span={2}>
                        <Avatar src={song.hinhAnh} />
                      </Col>
                      <Col span={3}>
                        <p>{song.tenBanGhi}</p>
                      </Col>
                      <Col span={3}>
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
                      <Col span={3}>
                        <p>{song.thoiGianSuDung}</p>
                      </Col>
                    </Row>
                  </List.Item>
                )}
              ></List>
            </Container>
          </div>
          <div className="option">
            <Button
              onClick={() => setIsPass(!isPass)}
              className="button-option"
            >
              <div className="icon">
                <FormOutlined />
              </div>
              <p>
                Quản lý <br />
                phê duyệt
              </p>
            </Button>
          </div>
        </>
      ) : (
        <>
          <div className="content">
            <p>
              Kho bản ghi <RightOutlined style={{ color: '#FF7506' }} /> Quản lý
              phê duyệt
            </p>
            <h1>Phê duyệt bản ghi</h1>
            <Search
              onSearch={onSearch}
              placeholder="Tên bản ghi, tên ca sĩ,..."
            />
            <div className="option-1">
              <Space className="space-1">
                <p>Thể loại:</p>
                <Dropdown menu={{ items: items }}>
                  <Button className="button-1">
                    <Space>
                      Tất cả
                      <DownOutlined />
                    </Space>
                  </Button>
                </Dropdown>
              </Space>
              <Space
                className="space-2"
                style={{ margin: 'auto', marginLeft: '0' }}
              >
                <p>Định dạng:</p>
                <Dropdown menu={{ items: items2 }}>
                  <Button className="button-1">
                    <Space>
                      Tất cả
                      <DownOutlined />
                    </Space>
                  </Button>
                </Dropdown>
              </Space>

              <Space className="space-5">
                <Button>
                  <UnorderedListOutlined />
                </Button>
                <Button>
                  <AppstoreOutlined />
                </Button>
              </Space>
            </div>
            <div className="option">
              <Button
                onClick={() => setIsPass(!isPass)}
                className="button-option"
              >
                <div className="icon">
                  <CheckOutlined style={{ color: 'green' }} />
                </div>
                <p>Phê duyệt</p>
              </Button>
              <Button className="button-option">
                <div className="icon">
                  <CloseOutlined style={{ color: 'red' }} />
                </div>
                <p>Từ chối</p>
              </Button>
            </div>
          </div>
        </>
      )}
    </Wrapper>
  );
};

export default RecordStore;

const Container = styled.div``;

const Wrapper = styled.div`
  background-color: var(--primary-color);
  display: flex;
  .content {
    margin-left: 50px;
    margin-top: 50px;
    p {
      opacity: 0.5;
    }
    .option-1 {
      margin-top: 20px;
      width: 1541px;
      display: flex;
      p {
        opacity: 1 !important;
      }
      .space-1,
      .space-2,
      .space-3 {
        margin-right: 50px;
        .button-1 {
          background: #1e1e2e;
          color: #fff;
          width: 131px;
          height: 40px;
          border: 1px solid #ff7506;
          .ant-space {
            display: flex;
            justify-content: space-between;
          }
        }
      }
      .space-4 {
        margin: auto;
        margin-left: 0;
        .button-2 {
          background: #1e1e2e;
          color: #fff;
          width: 200px;
          height: 40px;
          border: 1px solid #ff7506;
          .ant-space {
            display: flex;
            justify-content: space-between;
          }
        }
      }
      .space-5 {
        button {
          background: transparent;
          border: none;
          svg {
            font-size: 2rem;
            color: #ff7506;
          }
        }
      }
    }
    .ant-input-wrapper {
      background: #1e1e2e;
      width: 517px;
      span {
        button {
          height: 48px;
          background: #1e1e2e;
          border: 1px solid #727288;
          border-left: none;
          svg {
            color: #fff;
            height: 21px;
            width: 21px;
          }
        }
      }
    }
    .ant-input {
      background: #1e1e2e;
      color: #fff;
      border: 1px solid #727288;
      width: 517px;
      ::placeholder {
        color: #727288;
      }
      :hover {
        border-right: none;
      }
      height: 48px;
    }
  }
  .option {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 30%;
    right: 0;
    transform: translateY(-50%);
    .button-option {
      background: #2f2f41;
      border: none;
      width: 110px;
      height: 130px;

      .icon {
        background-color: rgba(114, 114, 136, 0.5);
        margin-left: 15px;
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
