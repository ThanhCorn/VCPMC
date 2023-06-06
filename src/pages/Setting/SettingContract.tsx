import {
  CalendarOutlined,
  CloseOutlined,
  FormOutlined,
  PlusOutlined,
  RightOutlined,
  SnippetsOutlined
} from '@ant-design/icons'
import { Button, Col, List, Row } from 'antd'
import styled from 'styled-components'
import React, { useEffect } from 'react'

const SettingContract = () => {
  const [isExpired, setIsExpired] = React.useState(false)
  const [isEdit, setIsEdit] = React.useState(false)
  const [isAddCalender, setIsAddCalender] = React.useState(false)
  return (
    <Wrapper>
      <div className='content'>
        <div className='header-text'>
          <span>
            {' '}
            Cài đặt <RightOutlined />
          </span>
          <span> Quản lý loại hợp đồng </span>
        </div>

        <h1>Loại hợp đồng</h1>
        {isExpired ? (
          <div className='board-expired'>
            <div>
              <h2 style={{ marginBottom: '30px' }}>Cảnh báo hết hạn khai báo tác phẩm</h2>
              <p style={{}}>
                Hợp đồng được cảnh báo trước thời gian hết hạn <span style={{ opacity: '0.7' }}>365 </span>ngày
              </p>
            </div>
          </div>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Container style={{ marginRight: '20px' }}>
              <Row className='row-1'>
                <Col span={2}>
                  <span style={{ color: '#ffac69' }}>STT</span>
                </Col>
                <Col span={7}>
                  <span>Loại hợp đồng</span>
                </Col>
                <Col span={10}>
                  <span>Doanh thu VCPCM/hợp đồng (Đơn vị: %) </span>
                </Col>
                {isEdit && (
                  <Col span={4}>
                    <span>Ngày áp dụng</span>
                  </Col>
                )}
              </Row>
              <Row className='row-2' style={{ marginBottom: '10px' }}>
                <Col span={2}>
                  <span style={{ color: '#fff' }}>1</span>
                </Col>
                <Col span={7}>
                  <p className={`${isEdit && !isAddCalender ? 'active-1' : ''}`}>Trọn gói</p>
                </Col>
                <Col span={10}>
                  <p className={`${isEdit && !isAddCalender ? 'active-1' : ''}`}>20%</p>
                </Col>
                {(isEdit || isAddCalender) && (
                  <Col span={5}>
                    <p className={`${isEdit && !isAddCalender ? 'active-1' : ''}`}>20/12/2023 13:00:00</p>
                  </Col>
                )}
              </Row>
              <Row className='row-2' style={{ marginBottom: '10px' }}>
                <Col span={2}>
                  <span style={{ color: '#fff' }}>2</span>
                </Col>
                <Col span={7}>
                  <p className={`${isEdit && !isAddCalender ? 'active-1' : ''}`}>Giá trị bài hát / lượt phát</p>
                </Col>
                <Col span={10}>
                  <p className={`${isEdit && !isAddCalender ? 'active-1' : ''}`}>20%</p>
                </Col>
                {(isEdit || isAddCalender) && (
                  <Col span={5}>
                    <p className={`${isEdit && !isAddCalender ? 'active-1' : ''}`}>20/12/2023 13:00:00</p>
                  </Col>
                )}
              </Row>
              {isAddCalender && (
                <>
                  <Row className='row-2' style={{ marginBottom: '10px' }}>
                    <Col span={2}>
                      <span style={{ color: '#fff' }}>3</span>
                    </Col>
                    <Col span={7}>
                      <p className={`${isAddCalender && 'active-1'}`}>Trọn gói</p>
                    </Col>
                    <Col span={10}>
                      <p className={`${isAddCalender && 'active-1'}`}>20%</p>
                    </Col>
                    <Col span={5}>
                      <p className={`${isAddCalender && 'active-1'}`}>20/12/2023 13:00:00</p>
                    </Col>
                  </Row>
                  <Row className='row-2'>
                    <Col span={2}>
                      <span style={{ color: '#fff' }}>4</span>
                    </Col>
                    <Col span={7}>
                      <p className={`${isAddCalender && 'active-1'}`}>Giá trị bài hát / lượt phát</p>
                    </Col>
                    <Col span={10}>
                      <p className={`${isAddCalender && 'active-1'}`}>20%</p>
                    </Col>
                    <Col span={5}>
                      <p className={`${isAddCalender && 'active-1'}`}>20/12/2023 13:00:00</p>
                    </Col>
                  </Row>
                </>
              )}
            </Container>
            {!isEdit && (
              <div className='board-2'>
                <div style={{ padding: '0 20px' }}>
                  <h2 style={{ marginBottom: '30px' }}>Cảnh báo hết hạn khai báo tác phẩm</h2>
                  <p style={{}}>
                    Hợp đồng được cảnh báo trước thời gian hết hạn <span style={{ opacity: '0.7' }}>365 ngày</span>
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
        {isEdit && (
          <div className='option'>
            {isAddCalender ? (
              <>
                <Button className='button-option'>
                  <div className='icon'>
                    <PlusOutlined />
                  </div>
                  <p style={{ marginLeft: '0px' }}>Thêm mới</p>
                </Button>
              </>
            ) : (
              <>
                <Button
                  onClick={() => {
                    setIsAddCalender(true)
                  }}
                  className='button-option'
                >
                  <div className='icon'>
                    <PlusOutlined />
                  </div>
                  <p style={{ marginLeft: '0px' }}>
                    Thêm lịch <br /> áp dụng
                  </p>
                </Button>
              </>
            )}

            <Button className='button-option'>
              <div className='icon'>
                <CloseOutlined style={{ color: 'red' }} />
              </div>
              <p>Xóa</p>
            </Button>
          </div>
        )}

        {isExpired || isEdit ? (
          <div style={{ position: 'fixed', bottom: '30%', right: '40%' }}>
            <Button className='btn-huy'>Hủy</Button>
            <Button
              className='btn-luu'
              onClick={() => {
                setIsExpired(false)
                setIsEdit(false)
                setIsAddCalender(false)
              }}
            >
              Lưu
            </Button>
          </div>
        ) : (
          <div className='option'>
            <Button onClick={() => setIsEdit(true)} className='button-option'>
              <div className='icon'>
                <SnippetsOutlined />
              </div>
              <p style={{ marginLeft: '10px' }}>
                Chỉnh sửa <br /> loại hợp <br /> đồng
              </p>
            </Button>
            <Button onClick={() => setIsExpired(true)} className='button-option'>
              <div className='icon'>
                <CalendarOutlined />
              </div>
              <p>
                Chỉnh sửa
                <br /> cảnh báo <br /> hết hạn
              </p>
            </Button>
          </div>
        )}
      </div>
    </Wrapper>
  )
}

export default SettingContract

const Container = styled.div`
  width: 840px;
  position: relative;
  max-height: 722px;
  height: 300px;
  background: rgba(47, 47, 65, 0.7);
  border: 1px solid rgba(47, 47, 65, 0.7);
  border-radius: 16px;
  margin: 10px 0;

  .row-1,
  .row-2 {
    margin-top: 20px;
    .active-1 {
      padding: 10px 10px;
      border: 1px solid #727288;
      width: 160px;
    }
    span {
      font-weight: 500;
      color: #ffac69;
    }

    width: 800px;
    padding-left: 35px;
    display: flex;
    align-items: center;
    .ant-col-3 {
      max-width: 10%;
    }
  }
  .row-2 {
    height: 30px;
    border-bottom: 1px solid rgba(47, 47, 65, 0.7);
    p {
      color: #fff;
      opacity: 0.7;
    }
  }
  .row-1 {
    margin-bottom: 10px;
    p {
      font-weight: bold;
      color: #ffac69;
      opacity: 1;
    }
  }
  .active {
    height: 50px;
    border: 1px solid #727288;
    background: #33334d;
    border-radius: 4px;
  }
`

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  flex: 1;
  background-color: var(--primary-color);
  .btn {
    display: flex;
    justify-content: center;
  }
  .content {
    width: 1541px;
    margin-top: 50px;
    margin-left: 50px;
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
    .board-2 {
      width: 600px;
      background: rgba(47, 47, 65, 0.7);
      border-radius: 16px;
      height: 300px;
    }
    .board-expired {
      width: 600px;
      background: rgba(47, 47, 65, 0.7);
      border-radius: 16px;
      height: 150px;
      padding: 20px;
      height: 300px;
      span {
        padding: 10px 20px;
        margin: 0 10px;
        border-radius: 10px;
        background: #33334d;
        border: 1px solid #727288;
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
        }
      }
      .button-option {
        .icon {
          margin-left: 15px !important;
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
  }
`
