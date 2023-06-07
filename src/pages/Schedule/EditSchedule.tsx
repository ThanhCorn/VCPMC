import React, { useEffect, MouseEvent } from 'react'
import styled from 'styled-components'
import { Button, Checkbox, Col, DatePicker, Form, Input, Modal, Row, Table } from 'antd'

import { Schecule } from '../../@types/myType'

import { PlusCircleOutlined, RightOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { mySchecule } from '../../myData'
import dayjs from 'dayjs'

import { CheckboxValueType } from 'antd/lib/checkbox/Group'

interface TimeSlot {
  key: number
  time: string
  monday?: string | React.ReactNode
  tuesday?: string | React.ReactNode
  wednesday?: string | React.ReactNode
  thursday?: string | React.ReactNode
  friday?: string | React.ReactNode
  saturday?: string | React.ReactNode
  sunday?: string | React.ReactNode
}

const columns: Array<{
  title: string
  dataIndex: string
  width?: number
  fixed?: 'left'
}> = [
  {
    title: 'Time',
    dataIndex: 'time',
    width: 100,
    fixed: 'left'
  },
  {
    title: 'Thứ hai',
    dataIndex: 'monday'
  },
  {
    title: 'Thứ ba',
    dataIndex: 'tuesday'
  },
  {
    title: 'Thứ tư',
    dataIndex: 'wednesday'
  },
  {
    title: 'Thứ năm',
    dataIndex: 'thursday'
  },
  {
    title: 'Thứ sáu',
    dataIndex: 'friday'
  },
  {
    title: 'Thứ bảy',
    dataIndex: 'saturday'
  },
  {
    title: 'Chủ nhật',
    dataIndex: 'sunday'
  }
]

const data: TimeSlot[] = []
for (let i = 1; i <= 16; i++) {
  data.push({
    key: i,
    time: `${i}:00`,
    monday: '',
    tuesday: '',
    wednesday: '',
    thursday: '',
    friday: '',
    saturday: '',
    sunday: ''
  })
}
const daysOfWeek = ['Thứ hai', 'Thứ ba', 'Thứ Tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy', 'Chủ nhật']

const onChange = (checkedValues: CheckboxValueType[]) => {
  console.log('checked = ', checkedValues)
}

export default function EditSchedule() {
  const schedule: Schecule[] = mySchecule
  const [selectedPlaylist, setSelectedPlaylist] = React.useState<Schecule | null>(null)
  const [tableData, setTableData] = React.useState<TimeSlot[]>(data)

  console.log(tableData)

  useEffect(() => {
    if (selectedPlaylist && selectedPlaylist.batdauketthuc) {
      const timeRange = selectedPlaylist.batdauketthuc.split(' - ')
      const startTime = parseInt(timeRange[0].split(':')[0], 10)
      const endTime = parseInt(timeRange[1].split(':')[0], 10)
      console.log(startTime)
      const updatedTableData = tableData.map((item) => {
        return {
          ...item,
          monday: (
            <Button
              onClick={ModalButtonBody}
              type='primary'
              key={item.key}
              style={{
                height: '94px',
                width: '163px',
                background: '#3e3e5b',
                marginLeft: '-20px',
                zIndex: '1'
              }}
            >
              {item.key === startTime && (
                <div>
                  <button onClick={(event: MouseEvent) => ModalDeletePlaylist(event)} className='button-delete'>
                    x
                  </button>
                  <p style={{ color: '#FFAC69', marginTop: '-10px' }}>{selectedPlaylist.tenplaylist}</p>
                  <span>{selectedPlaylist.batdauketthuc}</span>
                </div>
              )}
            </Button>
          )
        }
      })
      setTableData(updatedTableData)
    }
  }, [selectedPlaylist])

  const ModalDeletePlaylist = (event: MouseEvent) => {
    const handleCancel = () => {
      Modal.destroyAll()
      if (selectedPlaylist) {
        setTableData((prevTableData) => prevTableData.filter((item) => item.key !== selectedPlaylist.stt))
      }
    }
    event.stopPropagation()
    Modal.warning({
      title: 'Xóa playlist',
      content: (
        <ModalContent>
          <h2>Xóa lịch phát</h2>
          <p style={{ fontSize: '14px' }}>Xóa tất cả lịch phát trong ngày </p>
          <Checkbox.Group style={{}} onChange={onChange}>
            <div className='checkbox-group-row'>
              <div className='checkbox-wrapper'>
                <Checkbox value={selectedPlaylist?.chukyphat}>{selectedPlaylist?.chukyphat}</Checkbox>
              </div>
            </div>
          </Checkbox.Group>
          <div className='btn-modal'>
            <Button type='primary' className='btn-huy' onClick={handleCancel}>
              Huy
            </Button>
            <Button type='primary' className='btn-luu' onClick={handleCancel}>
              Luu
            </Button>
          </div>
        </ModalContent>
      )
    })
  }

  const ModalButtonBody = () => {
    const handleCancel = () => {
      Modal.destroyAll()
    }
    Modal.info({
      content: (
        <ModalContent>
          <h2>{selectedPlaylist?.tenplaylist}</h2>
          <p style={{ fontSize: '14px' }}>Lặp lại trong tuần </p>
          <Checkbox.Group style={{}} onChange={onChange}>
            <div className='checkbox-group-row'>
              {daysOfWeek.map((day, index) => (
                <div className='checkbox-wrapper' key={day}>
                  <Checkbox value={day}>{day}</Checkbox>
                </div>
              ))}
            </div>
          </Checkbox.Group>
          <div style={{ borderBottom: '1px solid #fff' }}></div>
          <p>Thứ hai</p>
          <p>{selectedPlaylist?.batdauketthuc}</p>
          <div className='btn-modal'>
            <Button type='primary' className='btn-huy' onClick={handleCancel}>
              Huy
            </Button>
            <Button type='primary' className='btn-luu' onClick={handleCancel}>
              Luu
            </Button>
          </div>
        </ModalContent>
      )
    })
  }

  const starDateString = selectedPlaylist?.thoigian.split(' - ')
  const startDate = starDateString && starDateString.length > 0 ? new Date(starDateString[0]) : null
  const endDate = starDateString && starDateString.length > 1 ? new Date(starDateString[1]) : null
  const startDateDayjs = startDate ? dayjs(startDate) : null
  const endDateDayjs = endDate ? dayjs(endDate) : null

  return (
    <Wrapper>
      <div className='content'>
        <span style={{ color: '#fff', opacity: '0.5' }}>
          Lập lịch phát <RightOutlined /> Chi tiết <RightOutlined /> Chỉnh sửa lịch phát
        </span>
        <h1>Lịch phát số 1</h1>
        <Container>
          <div className='left-table'>
            <div className='table-1'>
              <h3>Thông tin lịch phát</h3>
              <Form layout='vertical'>
                <Form.Item label='Tên lịch phát'>
                  <Input placeholder='Nhập tên lịch phát' value={selectedPlaylist?.tenplaylist} />
                </Form.Item>
                <Form.Item label='Từ ngày'>
                  <DatePicker placeholder='dd/mm/yyyy' value={startDateDayjs} className='myDatePicker' />
                </Form.Item>
                <Form.Item label='Đến ngày'>
                  <DatePicker placeholder='dd/mm/yyyy' value={endDateDayjs} />
                </Form.Item>
              </Form>
            </div>
            <div className='table-2'>
              <h3>Danh sách Playlist</h3>
              {schedule.map((item, index) => {
                if (item.tenplaylist) {
                  return (
                    <Button type='primary' key={item.stt} onClick={() => setSelectedPlaylist(item)}>
                      {item.tenplaylist}
                      <p>
                        Thời lượng: <span>{item.thoiluong}</span>
                      </p>
                    </Button>
                  )
                }
                return null // Skip mapping if `tenplaylist` is falsy
              })}
              <div style={{ borderTop: '2px solid #fff' }}></div>
              <h3>Playlist mới</h3>
              {schedule.map((item, index) => {
                if (item.tenplaylist) {
                  return (
                    <Button type='primary' key={item.stt}>
                      {item.tenplaylist}
                      <p>
                        Thời lượng: <span>{item.thoiluong}</span>
                      </p>
                    </Button>
                  )
                }
                return null // Skip mapping if `tenplaylist` is falsy
              })}
            </div>
          </div>
          <div className='right-table'>
            <Table columns={columns} dataSource={tableData} bordered pagination={false} scroll={{ y: 735, x: 100 }} />
          </div>
        </Container>
        <div className='side-option'>
          <div className='option'>
            <Link to='/choose-device' className='link-option'>
              <div className='icon'>
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
  )
}
const ModalContent = styled.div`
  .ant-modal-confirm-btns {
    display: none;
  }
  .btn-modal {
    display: flex;
    justify-content: center;
  }
  .checkbox-group-row {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
  }

  .ant-checkbox-wrapper {
    width: 93px;
  }

  .checkbox-wrapper {
    color: #fff;
    margin-right: 20px;
    width: 93px !important;
    margin-bottom: 8px;
    span {
      font-size: 15px;
    }
  }

  .checkbox-wrapper:last-child {
    margin-right: 0;
  }
`
const Container = styled.div`
  display: flex;
  width: 1541px;
  margin: 10px 0;
  .left-table {
    display: flex;
    flex-direction: column;
    width: 273px;
    margin-right: 20px;
    .ant-form-item {
      margin-bottom: 12px;
    }
    label {
      color: #fff;
      opacity: 0.7;
    }

    .table-2 {
      overflow-y: scroll;
      padding: 0 10px;
      height: 200px;
    }
    .table-1 {
      border-radius: 16px;
      margin-bottom: 20px;
      z-index: 1;
      height: 304px;
      background: rgba(47, 47, 65, 0.7);
      padding: 0 10px;

      .ant-input {
        border: 1px solid #727288;
        background: rgba(47, 47, 65, 0.7);
      }

      input,
      .ant-picker {
        height: 48px;
        width: 241px;

        ::placeholder {
          color: #fff;
          opacity: 0.5;
        }
      }
      .ant-picker {
        border: 1px solid #ff7506;
        margin-top: -10px;
        background: rgba(47, 47, 65, 0.7);
        height: 40px !important;
        svg {
          color: #ff7506;
        }
      }
      .ant-picker-input {
        input {
          ::placeholder {
            color: #fff;
            opacity: 0.5;
          }
        }
      }
    }
    .table-2 {
      height: 468px;
      background: rgba(47, 47, 65, 0.7);
      button {
        margin-bottom: 10px;
        height: 68px;
        width: 241px;
        background: #33334d;
        display: flex;
        flex-direction: column;
        color: #ffac69;
        font-weight: 500;
        p {
          span {
            margin-left: 60px;
            opacity: 0.5;
          }
        }
      }
    }
    .ant-table-wrapper {
      width: 273px;
      .ant-table-container {
        width: 273px;
      }
    }
  }

  .right-table {
    height: 792;
    .ant-table-cell {
      border-bottom: 0;
      border-right: 0;
      background: #2f2f41;
      title {
        color: #fff;
      }
    }
    .ant-table-wrapper {
      width: 1250px;
      .ant-table-container {
        width: 1250px;
      }
    }
    .myDatePicker .ant-picker-input > input {
      color: #ff7506;
    }
    .button-delete {
      z-index: 2;
      transform: translate(4rem, -10px);
      background: transparent;
      border: none;
      color: #ff7506;
      cursor: pointer;
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
`
