import {
  CloseOutlined,
  CodepenCircleOutlined,
  DislikeOutlined,
  FormOutlined,
  MoreOutlined,
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
import {
  Button,
  Col,
  Form,
  Input,
  List,
  Modal,
  Pagination,
  Row,
  Switch,
  Tag,
} from 'antd';
import { Song, mySong } from '../../myData';
import ImageSong from '../../assets/Song.png';
import { Menu, Dropdown } from 'antd';
import type { MenuProps } from 'antd';

const items: MenuProps['items'] = [
  {
    label: 'Tải lên hình ảnh',
    key: '1',
  },
  {
    label: 'Xóa hình ảnh',
    key: '1',
  },
];
export default function TopPlaylist() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isEdit, setIsEdit] = React.useState(false);

  return (
    <Wrapper>
      <div className="content">
        {isEdit ? (
          <span style={{ color: '#fff', opacity: '0.5' }}>
            Playlist <RightOutlined /> Chi tiết playlist <RightOutlined /> Chỉnh
            sửa
          </span>
        ) : (
          <span style={{ color: '#fff', opacity: '0.5' }}>
            Playlist <RightOutlined /> Chi tiết playlist
          </span>
        )}
        <h1>Playlist top ca khúc 2023</h1>
        <Container>
          <div className="left-table">
            <div style={{ position: 'relative' }}>
              <img src={StarBoy} alt="starboy" />
              {isEdit && (
                <div
                  style={{
                    position: 'absolute',
                    top: '0',
                    right: '0',
                  }}
                >
                  <Dropdown
                    menu={{ items }}
                    placement="bottom"
                    arrow={{ pointAtCenter: true }}
                  >
                    <Button
                      style={{
                        borderRadius: '50%',
                        background: '#FF7506',
                        border: 'none',
                        width: '40px',
                        height: '40px',
                      }}
                    >
                      <MoreOutlined
                        style={{
                          color: '#fff',
                          fontSize: '20px',
                          transform: 'translateX(-5px)',
                        }}
                      />
                    </Button>
                  </Dropdown>
                </div>
              )}
            </div>

            {isEdit ? (
              <Form layout="vertical">
                <Form.Item label="Tiêu đề" required>
                  <Input
                    value="Top Ca khúc 2023"
                    style={{
                      border: '1px solid #727288',
                      color: '#fff',
                      opacity: '0.5',
                      height: '40px',
                      backgroundColor: '#2B2B3F',
                    }}
                  />
                </Form.Item>
              </Form>
            ) : (
              <h2>Top ca khúc 2023</h2>
            )}
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
            {isEdit ? (
              <Form layout="vertical">
                <Form.Item label="Mô tả:">
                  <Input.TextArea
                    style={{
                      border: '1px solid #727288',
                      color: '#fff',
                      opacity: '0.5',
                      backgroundColor: '#2B2B3F',
                    }}
                    rows={4}
                    value=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
              quia non corrupti et fugit dolores harum nisi eum voluptate. Nemo? "
                  />
                </Form.Item>
              </Form>
            ) : (
              <span className="info-lorem">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
                quia non corrupti et fugit dolores harum nisi eum voluptate.
                Nemo?
              </span>
            )}
            <div style={{ border: '1px solid #fff', opacity: '0.5' }}></div>
            {isEdit ? (
              <Form layout="vertical" style={{ position: 'relative' }}>
                <Form.Item label="Chủ đề:">
                  <Input.TextArea
                    rows={3}
                    placeholder="Nhập chủ đề"
                    readOnly
                    style={{
                      border: '1px solid #727288',
                      backgroundColor: '#2B2B3F',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '5%',
                    }}
                  >
                    <Tag
                      className="tag-option"
                      color="white"
                      style={{
                        border: '1px solid #fff',
                        borderRadius: '4px',
                        margin: '4px',
                        backgroundColor: '#2B2B3F',
                      }}
                    >
                      Chill <CloseOutlined style={{ color: 'red' }} />
                    </Tag>
                    <Tag
                      className="tag-option"
                      color="white"
                      style={{
                        border: '1px solid #fff',

                        borderRadius: '4px',
                        margin: '4px',
                        backgroundColor: '#2B2B3F',
                      }}
                    >
                      Lofi <CloseOutlined style={{ color: 'red' }} />
                    </Tag>
                    <Tag
                      className="tag-option"
                      color="white"
                      style={{
                        border: '1px solid #fff',

                        borderRadius: '4px',
                        margin: '4px',
                        backgroundColor: '#2B2B3F',
                      }}
                    >
                      Mashup <CloseOutlined style={{ color: 'red' }} />
                    </Tag>
                  </div>
                </Form.Item>
                <Form.Item>
                  <h3 style={{ marginTop: '-20px' }}>
                    <Switch defaultChecked /> Chế độ công khai
                  </h3>
                </Form.Item>
              </Form>
            ) : (
              <>
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
              </>
            )}
            {!isEdit && (
              <>
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
              </>
            )}
          </div>

          <div className="right-table">
            <Row className="row-1">
              <Col span={2}>
                <p>STT</p>
              </Col>
              <Col span={4}>
                <p>Tên bản ghi</p>
              </Col>
              <Col span={4}>
                <p>Ca sĩ </p>
              </Col>
              <Col span={2}>
                <p>Tác giả</p>
              </Col>
            </Row>
            <List
              itemLayout="horizontal"
              dataSource={mySong}
              renderItem={(schedule: Song) => (
                <List.Item
                  key={schedule.stt}
                  style={{ alignItems: 'center', display: 'flex' }}
                >
                  <Row className="row-2">
                    <Col span={3}>
                      <p> {schedule.stt}</p>
                    </Col>
                    <Col span={5}>
                      <p>{schedule.tenBanGhi}</p>
                    </Col>
                    <Col span={5}>
                      <p>{schedule.caSi}</p>
                    </Col>
                    <Col span={8}>
                      <p>{schedule.tacGia}</p>
                    </Col>

                    <Col>
                      <Button
                        onClick={() => setIsModalOpen(true)}
                        style={{
                          background: 'transparent',
                          border: 'none',
                          textDecoration: 'underline',
                          color: '#ff7506',
                        }}
                      >
                        Nghe
                      </Button>
                    </Col>
                    <Col>
                      <Button
                        style={{
                          background: 'transparent',
                          border: 'none',
                          textDecoration: 'underline',
                          color: '#ff7506',
                        }}
                      >
                        Gỡ
                      </Button>
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
                position: 'absolute',
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                bottom: '0',
              }}
            >
              <p
                style={{
                  display: 'flex',
                  letterSpacing: ' 0.015em',
                  marginLeft: '20px',
                }}
              >
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
              <Pagination
                defaultCurrent={1}
                total={100}
                style={{ marginRight: '20px' }}
              />
            </div>
          </div>
        </Container>
        {isEdit && (
          <div style={{ transform: 'translate(40%, -100%)' }}>
            <Button onClick={() => setIsEdit(false)} className="btn-huy">
              Hủy
            </Button>
            <Button onClick={() => setIsEdit(false)} className="btn-luu">
              Lưu
            </Button>
          </div>
        )}
        <div className="side-option">
          {isEdit ? (
            <div className="option">
              <Button className="button-option">
                <div className="icon">
                  <FormOutlined />
                </div>
                <p>
                  Thêm <br /> bản ghi
                </p>
              </Button>
            </div>
          ) : (
            <div className="option">
              <Button onClick={() => setIsEdit(true)} className="button-option">
                <div className="icon">
                  <FormOutlined />
                </div>
                <p>Chỉnh sửa</p>
              </Button>
              <Link to="" className="link-option">
                <div className="icon-2">
                  <DislikeOutlined />
                </div>
                <p>Xóa playlist</p>
              </Link>
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
}

const Container = styled.div`
  display: flex;
  margin: 10px 0;
  height: 100vh;
  width: 100vw;
  .left-table {
    display: flex;
    flex-direction: column;
    width: 274px;
    margin-right: 30px;
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
      border-radius: 8px;
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
    label {
      color: #fff;
      font-size: 16px;
    }
  }

  .right-table {
    position: relative;
    width: 65%;
    border: 1px solid rgba(47, 47, 65, 0.7);
    border-radius: 16px;
    height: 700px;
    max-height: 803px;
    .row-1,
    .row-2 {
      width: 1541px;
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
        margin-left: 10px;
        font-size: 12px;
      }
    }
    .row-1 {
      p {
        font-weight: bold;
        color: #ffac69;
        opacity: 1;
      }
    }
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
    .button-option {
      .icon {
        margin-left: 10px !important;
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
      .icon-2 {
        background-color: rgba(114, 114, 136, 0.5);
        width: 50px;
        font-size: 2rem;
        color: red;
        border: 1px solid rgba(114, 114, 136, 0.5);
        border-radius: 50%;
        padding-top: 5px;
      }
      p {
        color: #fff;
        opacity: 0.5;
        font-size: 12px;
      }
    }
  }
`;
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
