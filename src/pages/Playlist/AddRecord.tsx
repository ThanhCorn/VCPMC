import React, { useEffect } from 'react'
import { mySong } from '../../myData'
import { useDispatch, useSelector } from 'react-redux'
import { Song } from '../../@types/myType'

import styled from 'styled-components'

import { DownOutlined, RightOutlined } from '@ant-design/icons'
import { Button, Dropdown, Space, Input, Row, Col, List, Pagination } from 'antd'
import { items, items2, items3, items4 } from '../../MenuDropDown'
import { addPlaylist, deletePlaylist } from '../../features/playlistSlice'
import { addRecord, deleteRecord } from '../../features/recordSlice'
import ListenButton from '../../components/ListenButton'
import Page from '../../components/Page'
import { useNavigate } from 'react-router-dom'

const { Search } = Input

const onSearch = (value: string) => console.log(value)
const AddRecord: React.FC<Song> = () => {
  const playlist = useSelector((state: any) => state.playlist.value)
  const record = useSelector((state: any) => state.record.value)
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const handleAddRecord = (record: Song) => {
    dispatch(addPlaylist({ ...record, stt: playlist.length + 1 }))
    if (record.stt !== undefined) {
      dispatch(deleteRecord(record.stt))
    }
  }
  const handleRemovePlaylist = (playlist: Song) => {
    const usedIds = record.map((item: Song) => item.stt)
    const playlistId = playlist.stt

    let newStt
    if (playlistId !== undefined && usedIds.includes(playlistId)) {
      let index = 1
      while (usedIds.includes(index)) {
        index++
      }
      newStt = index
    } else {
      newStt = playlistId
    }

    // Delete the playlist
    if (playlistId !== undefined) {
      dispatch(deletePlaylist(playlistId))
    }

    // Add the record with the new stt value
    dispatch(addRecord({ ...playlist, stt: newStt }))
  }

  console.log(playlist)
  return (
    <Wrapper>
      <div className='content'>
        <div className='header-text'>
          <span>
            {' '}
            Playlist <RightOutlined />
          </span>
          <span>
            Thêm playlist mới <RightOutlined />
          </span>
          <span>Thêm bản ghi vào playlist</span>
        </div>

        <h1>Thêm bản ghi</h1>
        <div className='space-content'>
          <Space className='space-1'>
            <h4>Kho bản ghi</h4>
            <div className='option-record'>
              <div className='option-box'>
                <p>Thể loại:</p>
                <Dropdown menu={{ items: items }}>
                  <Button className='button-1'>
                    <Space>
                      Tất cả
                      <DownOutlined />
                    </Space>
                  </Button>
                </Dropdown>
              </div>
              <div className='option-box'>
                <p>Playlist mẫu:</p>
                <Dropdown menu={{ items: items }}>
                  <Button className='button-1'>
                    <Space>
                      Tất cả
                      <DownOutlined />
                    </Space>
                  </Button>
                </Dropdown>
              </div>
            </div>
            <Search className='search' onSearch={onSearch} placeholder='Tên bản ghi, tên ca sĩ,...' />
            <Row className='row-playlist-title'>
              <Col span={2}>
                <p>STT</p>
              </Col>
              <Col span={6}>
                <p>Tên bản ghi</p>
              </Col>
              <Col span={5}>
                <p>Ca sĩ</p>
              </Col>
              <Col>
                <p>Tác giả</p>
              </Col>
            </Row>
            <List
              itemLayout='horizontal'
              dataSource={record}
              renderItem={(record: Song) => (
                <List.Item key={record.stt} style={{ alignItems: 'center', display: 'flex' }}>
                  <Row className='row-playlist-list'>
                    <Col span={2}>
                      <p> {record.stt}</p>
                    </Col>
                    <Col span={6}>
                      <p style={{ marginBottom: '0' }}>{record.tenBanGhi}</p>
                      <span
                        style={{
                          fontSize: '12px',
                          color: '#fff',
                          opacity: '0.5',
                          fontWeight: '200'
                        }}
                      >
                        {record.theLoai} 🐏 {record.dinhDang} 🐏 {record.thoiLuong}
                      </span>
                    </Col>
                    <Col span={5}>
                      <p>{record.caSi}</p>
                    </Col>
                    <Col span={5}>
                      <p>{record.tacGia}</p>
                    </Col>

                    <Col className='col-btn'>
                      <ListenButton />
                    </Col>
                    <Col className='col-btn'>
                      <Button
                        onClick={() => handleAddRecord(record)}
                        style={{
                          background: 'transparent',
                          border: 'none',
                          textDecoration: 'underline',
                          color: '#ff7506'
                        }}
                      >
                        Thêm
                      </Button>
                    </Col>
                  </Row>
                </List.Item>
              )}
            ></List>
            <Page data={record} />
          </Space>
          <Space className='space-2'>
            <h4 style={{ color: '#fff', marginBottom: '10px' }}>Danh sách bản ghi được thêm vào Playlist</h4>
            <div className='info-song'>
              <p>
                Tổng số: <span>{playlist.length} bản ghi</span>
              </p>
              <p>
                Tổng thời lượng: <span>{`${playlist[0] ? playlist[0].thoiLuong : '--:--:--'}`}</span>
              </p>
            </div>
            <Search className='search' onSearch={onSearch} placeholder='Tên bản ghi, tên ca sĩ,...' />
            <Row className='row-playlist-title'>
              <Col span={2}>
                <p>STT</p>
              </Col>
              <Col span={6}>
                <p>Tên bản ghi</p>
              </Col>
              <Col span={5}>
                <p>Ca sĩ</p>
              </Col>
              <Col>
                <p>Tác giả</p>
              </Col>
            </Row>
            <List
              itemLayout='horizontal'
              dataSource={playlist}
              locale={{ emptyText: 'Không có bản ghi nào' }}
              renderItem={(record: Song) => (
                <List.Item key={record.stt} style={{ alignItems: 'center', display: 'flex' }}>
                  <Row className='row-playlist-list'>
                    <Col span={2}>
                      <p> {record.stt}</p>
                    </Col>
                    <Col span={6}>
                      <p style={{ marginBottom: '0' }}>{record.tenBanGhi}</p>
                      <span
                        style={{
                          fontSize: '12px',
                          color: '#fff',
                          opacity: '0.5',
                          fontWeight: '200'
                        }}
                      >
                        {record.theLoai} 👉🏿 {record.dinhDang} 👉🏿 {record.thoiLuong}
                      </span>
                    </Col>
                    <Col span={5}>
                      <p>{record.caSi}</p>
                    </Col>
                    <Col span={5}>
                      <p>{record.tacGia}</p>
                    </Col>

                    <Col className='col-btn'>
                      <ListenButton />
                    </Col>
                    <Col className='col-btn'>
                      <Button
                        onClick={() => handleRemovePlaylist(record)}
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
          </Space>
        </div>
        <div style={{ transform: 'translate(40%,100%)' }}>
          <Button className='btn-huy'>Hủy</Button>
          <Button onClick={() => navigate('/add-playlist')} className='btn-luu'>
            Lưu
          </Button>
        </div>
      </div>
    </Wrapper>
  )
}

export default AddRecord

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
    .space-content {
      display: flex;
      .search {
        height: 48px;
        .ant-input-wrapper {
          width: 517px;
          input {
            background: #1e1e2e;
            border: 1px solid #727288;
            height: 48px;
            ::placeholder {
              color: #fff;
            }
          }
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
      }
      .space-1,
      .space-2 {
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
      .space-1 {
        padding: 0 20px;
        display: flex;
        align-items: flex-start;
        position: relative;
        flex-direction: column;
        margin-right: 50px;
        width: 40vw;
        background: #2f2f41;
        max-height: 722px;
        height: 70vh;
        .row-playlist-title {
          p {
            color: #ffac69;
          }
        }
        .row-playlist-list {
          p {
            opacity: 0.7;
          }
        }
        .row-playlist-title,
        .row-playlist-list {
          width: 40vw;
          .ant-col {
            height: 40px;
          }
          .col-btn {
            display: flex;
            align-items: center;
          }
        }

        .ant-space-item:first-child {
          height: 40px;
          color: #fff;
        }
        .option-record {
          display: flex;
        }
        .option-box {
          margin-right: 50px;
          display: flex;
          align-items: center;
          p {
            margin-right: 20px;
          }
        }
      }
      .space-2 {
        padding: 0 20px;
        display: flex;
        align-items: flex-start;
        position: relative;
        flex-direction: column;
        margin-right: 50px;
        width: 40vw;
        background: #2f2f41;
        max-height: 722px;
        height: 70vh;
        .info-song {
          width: 40vw;
          display: flex;
          p {
            margin: 0;
            span {
              margin-left: 20px;
            }
            :first-child {
              margin-right: 100px;
            }
          }
        }
        .row-playlist-title {
          p {
            color: #ffac69;
          }
        }
        .row-playlist-list {
          p {
            opacity: 0.7;
          }
        }
        .row-playlist-title,
        .row-playlist-list {
          width: 40vw;
          .ant-col {
            height: 40px;
          }
          .col-btn {
            display: flex;
            align-items: center;
          }
        }
        .ant-list-empty-text {
          width: 40vw;
          color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          border-bottom: 1px solid #fff;
        }
      }
    }
  }
`
