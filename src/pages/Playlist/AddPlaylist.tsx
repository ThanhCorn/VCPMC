import { CloseOutlined, CloudUploadOutlined, PlusOutlined, RightOutlined } from '@ant-design/icons'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Button, Col, Form, Input, List, Modal, Row, Switch, Tag } from 'antd'
import { Song, mySong } from '../../myData'
import Page from '../../components/Page'
import { useSelector } from 'react-redux'
import ListenButton from '../../components/ListenButton'

export default function AddPlaylist() {
  const playlist = useSelector((state: any) => state.playlist.value)
  const navigate = useNavigate()

  return (
    <Wrapper>
      <div className='content'>
        <div className='header-text'>
          <span>
            {' '}
            Playlist <RightOutlined />
          </span>
          <span>Thêm playlist mới</span>
          <span></span>
        </div>

        <h1>Playlist top ca khúc 2023</h1>
        <Container>
          <div className='left-table'>
            <Form layout='vertical'>
              <Form.Item
                label='
            Ảnh bìa'
              >
                <p
                  style={{
                    width: '75px',
                    padding: '10px',
                    border: '1px solid #FFAC69',
                    borderRadius: '4px',
                    color: '#FFAC69'
                  }}
                >
                  <CloudUploadOutlined /> Tải lên
                </p>
              </Form.Item>
              <div style={{ border: '1px solid #fff', opacity: '0.5' }}></div>
              <Form.Item label='Tiêu đề' required>
                <Input
                  value='Top Ca khúc 2023'
                  style={{
                    border: '1px solid #727288',
                    color: '#fff',
                    opacity: '0.5',
                    height: '40px',
                    backgroundColor: '#2B2B3F'
                  }}
                />
              </Form.Item>
            </Form>

            <div style={{ border: '1px solid #fff', opacity: '0.5' }}></div>
            <div className='info-playlist'>
              <p>
                Tổng số: <span>0 bản ghi</span>
              </p>
              <p>
                Tổng thời lượng: <span>--:--:--</span>
              </p>
            </div>
            <div style={{ border: '1px solid #fff', opacity: '0.5' }}></div>

            <Form layout='vertical'>
              <Form.Item label='Mô tả:'>
                <Input.TextArea
                  style={{
                    border: '1px solid #727288',
                    color: '#fff',
                    opacity: '0.5',
                    backgroundColor: '#2B2B3F'
                  }}
                  rows={4}
                  value=' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
              quia non corrupti et fugit dolores harum nisi eum voluptate. Nemo? '
                />
              </Form.Item>
            </Form>

            <div style={{ border: '1px solid #fff', opacity: '0.5' }}></div>

            <Form layout='vertical' style={{ position: 'relative' }}>
              <Form.Item label='Chủ đề:'>
                <Input.TextArea
                  rows={3}
                  placeholder='Nhập chủ đề'
                  readOnly
                  style={{
                    border: '1px solid #727288',
                    backgroundColor: '#2B2B3F'
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '5%'
                  }}
                >
                  <Tag
                    className='tag-option'
                    color='white'
                    style={{
                      border: '1px solid #fff',
                      borderRadius: '4px',
                      margin: '4px',
                      backgroundColor: '#2B2B3F'
                    }}
                  >
                    Chill <CloseOutlined style={{ color: 'red' }} />
                  </Tag>
                  <Tag
                    className='tag-option'
                    color='white'
                    style={{
                      border: '1px solid #fff',

                      borderRadius: '4px',
                      margin: '4px',
                      backgroundColor: '#2B2B3F'
                    }}
                  >
                    Lofi <CloseOutlined style={{ color: 'red' }} />
                  </Tag>
                  <Tag
                    className='tag-option'
                    color='white'
                    style={{
                      border: '1px solid #fff',

                      borderRadius: '4px',
                      margin: '4px',
                      backgroundColor: '#2B2B3F'
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
          </div>

          <div className='right-table'>
            <Row className='row-1'>
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
              itemLayout='horizontal'
              dataSource={playlist}
              renderItem={(schedule: Song) => (
                <List.Item key={schedule.stt} style={{ alignItems: 'center', display: 'flex' }}>
                  <Row className='row-2'>
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
                      <ListenButton />
                    </Col>
                    <Col>
                      <Button
                        style={{
                          background: 'transparent',
                          border: 'none',
                          textDecoration: 'underline',
                          color: '#ff7506'
                        }}
                      >
                        Gỡ
                      </Button>
                    </Col>
                  </Row>
                </List.Item>
              )}
            ></List>
            <Page data={playlist} />
          </div>
        </Container>
        <div style={{ transform: 'translate(40%,50%)' }}>
          <Button className='btn-huy'>Hủy</Button>
          <Button onClick={() => navigate('/playlist')} className='btn-luu'>
            Lưu
          </Button>
        </div>
        <div className='side-option'>
          <div className='option'>
            <Link to='/add-record' className='link-option'>
              <div className='icon-2'>
                <PlusOutlined />
              </div>
              <p>Thêm bản ghi</p>
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Container = styled.div`
  display: flex;
  margin: 10px 0;
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
`

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: var(--primary-color);
  display: flex;
  .content {
    margin-left: 50px;
    margin-top: 50px;
    .header-text {
      display: flex;
      align-items: center;
      color: #fff;
      opacity: 0.5;

      svg {
        color: #ffac69;
        margin-right: 5px;
      }
    }
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
`
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
`
