import styled from 'styled-components'
import type { MenuProps } from 'antd'
import React, { useState, useEffect } from 'react'
import { Button, Checkbox, Dropdown, Space, Input, Modal, Row, Col, List } from 'antd'
import { ClockCircleFilled, DownOutlined, FormOutlined, MehOutlined, PlusOutlined } from '@ant-design/icons'
import { Device, myDevice } from '../../../myData'
import Page from '../../../components/Page'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { CheckboxChangeEvent } from 'antd/lib/checkbox'
import { FaTrash } from 'react-icons/fa'
import InfoDevice from './InfoDevice'
import MainLayout from '../../MainLayout'
import { set } from 'immer/dist/internal'
const { Search } = Input
const onSearch = (value: string) => console.log(value)

const items: MenuProps['items'] = [
  {
    key: '1',
    label: ' Tất cả'
  },
  {
    key: '2',
    label: ' Công ty TMCP Bách Hóa Xanh'
  },
  {
    key: '3',
    label: ' Công ty TNHH XYZ'
  },
  {
    key: '4',
    label: ' Công ty TMCP Adora'
  }
]

const items2: MenuProps['items'] = [
  {
    key: '1',
    label: <Checkbox>Mac Address</Checkbox>
  },
  {
    key: '2',
    label: <Checkbox>Memory</Checkbox>
  },
  {
    key: '3',
    label: <Checkbox>SKU/ID</Checkbox>
  },
  {
    key: '4',
    label: <Checkbox>Hạn bảo hành</Checkbox>
  },
  {
    key: '5',
    label: <Checkbox>Tên đăng nhập</Checkbox>
  },
  {
    key: '6',
    label: <Checkbox>Trạng thái</Checkbox>
  },
  {
    key: '7',
    label: <Checkbox>Địa điểm</Checkbox>
  },
  {
    key: '8',
    label: <Checkbox>Hạn hợp đồng</Checkbox>
  }
]

const EquipManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [myData, setMyData] = useState<Device[]>(myDevice)
  const [selectedDevice, setSelectedDevice] = useState<Device | null>(null)
  const navigate = useNavigate()
  const onChange = (event: CheckboxChangeEvent, song: Device) => {
    const { checked } = event.target

    if (checked) {
      song.isCheck = true
      setSelectedDevice(song)
    } else {
      setSelectedDevice(null)
      song.isCheck = false
    }
  }

  const handleDelete = () => {
    const newData = myData.filter((item) => item.isCheck !== true)
    setMyData(newData)
  }

  const infoDevice = (song: Device) => {
    setSelectedDevice(song)
    navigate(`/management/equip/${song.stt}`)
  }
  const handleClockDevice = () => {
    const newData = myData.map((item) => {
      if (item.isCheck === true) {
        return { ...item, trangthai: false }
      }
      return item
    })
    setMyData(newData)
    setSelectedDevice(null)
  }

  const handleStopDevice = () => {
    const newData = myData.map((item) => {
      if (item.isCheck === true) {
        // Omit the trangthai property
        const { trangthai, ...rest } = item
        return rest
      }
      return item
    })
    setMyData(newData)
    setSelectedDevice(null)
  }
  useEffect(() => {}, [selectedDevice, myData])
  return (
    <Wrapper>
      <div className='content'>
        <h1>Danh sách thiết bị</h1>
        <div className='option'>
          <div className='dropdown-menu'>
            <Space className='space' style={{ marginRight: '20px' }}>
              <Dropdown menu={{ items }} placement='bottomLeft'>
                <Button>
                  Chọn nhóm tài khoản <DownOutlined />
                </Button>
              </Dropdown>
            </Space>
            <Space className='space'>
              <Dropdown menu={{ items: items2 }} placement='bottomLeft'>
                <Button>
                  Ẩn hiện cột <DownOutlined />
                </Button>
              </Dropdown>
            </Space>
          </div>
          <div className='search-btn'>
            <Search placeholder='Nhập tên người dùng...' onSearch={onSearch} style={{ width: 200 }} />
          </div>
        </div>
        <Container>
          <Row className='row-1'>
            <Checkbox />
            <Col span={1} style={{ marginLeft: '10px' }}>
              <p>STT</p>
            </Col>
            <Col span={3}>
              <p>Tên thiết bị</p>
            </Col>
            <Col span={4}>
              <p>Trạng thái</p>
            </Col>
            <Col span={8}>
              <p>Địa điểm</p>
            </Col>
            <Col span={2}>
              <p>Hạn hợp đồng</p>
            </Col>
            <Col span={3}>
              <p>MAC Address</p>
            </Col>
            <Col span={2}>
              <p>Memory</p>
            </Col>
          </Row>
          <List
            itemLayout='horizontal'
            dataSource={myData}
            renderItem={(song: Device) => (
              <List.Item key={song.stt} style={{ alignItems: 'center', display: 'flex' }}>
                <Row
                  className='row-2'
                  onClick={(event) => {
                    const target = event.target as HTMLElement
                    if (target.tagName.toLowerCase() === 'input') {
                      return // Skip the onClick event if the target is an input element (checkbox)
                    }
                    infoDevice(song)
                  }}
                >
                  <Col span={1}>
                    <p style={{ marginLeft: '18px' }}>
                      {' '}
                      <Checkbox
                        onChange={(event) => {
                          onChange(event, song)
                        }}
                        style={{ marginLeft: '-10px', marginRight: '10px' }}
                      />
                      {song.stt}
                    </p>
                  </Col>
                  <Col span={3}>
                    <p>{song.tenthietbi}</p>
                  </Col>
                  <Col span={4}>
                    <p>{`${
                      (song.trangthai === true && 'Đang kích hoạt') ||
                      (song.trangthai === false && 'Đang bị khóa') ||
                      (song?.trangthai === undefined && 'Ngừng kích hoạt')
                    }`}</p>
                  </Col>
                  <Col span={8}>
                    <p>{song.diadiem}</p>
                  </Col>
                  <Col span={3}>
                    <p>{song.thoigiandongbo}</p>
                  </Col>
                  <Col span={2}>
                    <p>{song.MACAdress}</p>
                  </Col>
                  <Col span={2}>
                    <p>{song.memory}</p>
                  </Col>
                </Row>
                {isModalOpen && (
                  <ModalContent visible={isModalOpen} onCancel={() => setIsModalOpen(false)}></ModalContent>
                )}
              </List.Item>
            )}
          ></List>
          <Page data={myDevice} />
        </Container>
        <div className='option-2'>
          <Link to='/management/equip/add' className='link-option'>
            <div className='icon'>
              <PlusOutlined />
            </div>
            <p>Thêm thiết bị</p>
          </Link>
          {selectedDevice?.isCheck === true ? (
            <Button onClick={handleStopDevice} className='button-option'>
              <div className='icon'>
                <MehOutlined />
              </div>
              <p>
                Ngưng kích <br />
                hoạt thiết bị
              </p>
            </Button>
          ) : (
            <Button className='button-option'>
              <div className='icon'>
                <MehOutlined />
              </div>
              <p>
                Kích hoạt <br />
                thiết bị
              </p>
            </Button>
          )}

          <Button onClick={handleClockDevice} className='button-option'>
            <div className='icon'>
              <ClockCircleFilled />
            </div>
            <p>Khóa thiết bị</p>
          </Button>
          <Button onClick={handleDelete} className='button-option'>
            <div className='icon'>
              <FaTrash style={{ color: 'red' }} />
            </div>
            <p>Xóa thiết bị</p>
          </Button>
        </div>
      </div>
    </Wrapper>
  )
}

export default EquipManagement

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

const Container = styled.div`
  width: 1541px;
  max-height: 722px;
  height: 722px;
  position: relative;
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
`

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  flex: 1;
  background-color: var(--primary-color);
  .content {
    margin-top: 50px;
    margin-left: 50px;
    .option-2 {
      display: flex;
      flex-direction: column;
      position: fixed;
      top: 30%;
      right: 0;
      transform: translateY(-40%);
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
          margin-left: 7px;
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
    .option {
      display: flex;
      align-items: center;
      width: 1541px;
      justify-content: space-between;
      .search-btn {
        display: flex;
        margin-right: 200px;
        .ant-input-wrapper {
          width: 400px;

          background: #1e1e2e;
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
          ::placeholder {
            color: #727288;
          }
          :hover {
            border-right: none;
          }
          height: 48px;
        }
      }
      .dropdown-menu {
        .space {
          button {
            height: 48px;
            background: #1e1e2e;
            border: 1px solid #ff7506;
            color: #fff;
            svg {
              margin-left: 10px;
              color: #ff7506;
            }
          }

          width: 200px;
          color: red;
          p {
            color: red;
          }
        }
      }
    }
  }
`
