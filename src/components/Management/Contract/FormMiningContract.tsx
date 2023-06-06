import React, { useState } from 'react'
import styled from 'styled-components'
import 'firebase/firestore'
import { Modal, Button, Checkbox, Input } from 'antd'
import {
  CloseOutlined,
  CloudUploadOutlined,
  FilePdfOutlined,
  FormOutlined,
  InfoCircleOutlined,
  RightOutlined
} from '@ant-design/icons'
import InfoContract from './InfoContract'
import AuthoritySong from './AuthoritySong'
import { Link } from 'react-router-dom'
const { TextArea } = Input
const CheckboxGroup = Checkbox.Group

const FormMiningContract: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isAuthorizingOrMining, setIsisAuthorizingOrMining] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  return (
    <Wrapper>
      <div className='content'>
        <h4 style={{ color: 'white' }}>
          Quản lý <RightOutlined /> Quản lý hợp đồng <RightOutlined /> Chi tiết
        </h4>
        <h1>Hợp đồng khai thác - HD123</h1>

        <Container>
          <div className='info-1'>
            <div className='info-content-1' style={{ height: '300px' }}>
              <h4>
                Số hợp đồng: <p>BH123</p>
              </h4>
              <h4>
                Tên hợp đồng: <p>Hợp đồng ủy quyền tác phẩm âm nhạc</p>
              </h4>
              <h4>
                Ngày hiệu lực: <p>20/12/2023</p>
              </h4>
              <h4>
                Ngày hết hạn: <p>20/12/2023</p>
              </h4>
            </div>
            <div className='info-content-2'>
              <h4>
                Tên đơn vị sử dụng: <p>Công ty TNHH MTV Âu Lạc</p>
              </h4>
              <h4>
                Người đại diện: <p>Nguyễn Văn A</p>
              </h4>
              <h4>
                Chức vụ: <p>Giám đốc</p>
              </h4>
              <h4>
                Ngày sinh: <p>01/05/1984</p>
              </h4>
              <h4>
                Quốc tịch: <p>Việt Nam</p>
              </h4>
              <h4>
                Số điện thoại: <p>(+84) 345 678 901</p>
              </h4>
              <h4>
                Email: <p>nguyenvana@gmail.com</p>
              </h4>
            </div>
          </div>
          <div className='info-2'>
            <div className='info-content-1'>
              <h4>
                Đính kèm tệp:
                <p style={{ transform: 'translate(10px, 12px)' }}>
                  <FilePdfOutlined /> hetthuongcannho.doc <br />
                  <FilePdfOutlined /> hetthuongcannho.doc
                </p>
              </h4>
            </div>
            <div className='info-content-2'>
              <h4>
                Số CMND/ CCCD: <p>123456789012</p>
              </h4>
              <h4>
                Ngày cấp: <p>10/07/2011</p>
              </h4>
              <h4>
                Nơi cấp:<p>Tp.HCM, Việt Nam</p>
              </h4>
              <h4>
                Mã số thuế: <p>92387489</p>
              </h4>
              <h4>
                Nơi cư trú:
                <p
                  style={{
                    transform: 'translate(10px,0px)',
                    marginBottom: '-10px'
                  }}
                >
                  69/53, Nguyễn Gia Trí, Phường 25,
                  <br /> Quận Bình Thạnh, Thành phố Hồ Chí Minh
                </p>
              </h4>
            </div>
          </div>
          <div className='info-3'>
            <div className='info-content-1'>
              <h4>
                Loại hợp đồng:<p>Trọn gói</p>
              </h4>
              <h4>
                Giá trị hợp đồng (VNĐ): <p>365.000.000</p>
              </h4>
              <h4>
                Giá trị phân phối (VNĐ/ngày):<p>1.000.000</p>
              </h4>
              <h4>
                Tình trạng: (Bản ghi/video)
                <p>Đang hiệu lực</p>
              </h4>
            </div>
            <div className='info-content-2'>
              <h4>
                Tên đăng nhập: <p>vuonganhtu123</p>
              </h4>
              <h4>
                Mật khẩu:<p> 😄😄😄😄😄</p>
              </h4>
              <h4>
                Số tài khoản: <p>1231123312211223</p>
              </h4>
              <h4>
                Ngân hàng:
                <p>ACB - Ngân hàng Á Châu</p>
              </h4>
            </div>
          </div>
          <div className='option'>
            <Button className='button-option'>
              <div className='icon'>
                <FormOutlined style={{ color: '#FF7506' }} />
              </div>
              <p>
                Chỉnh sửa <br />
                hợp đồng
              </p>
            </Button>
            <Button onClick={() => setIsModalOpen(true)} className='button-option'>
              <div className='icon'>
                <CloseOutlined style={{ color: 'red' }} />
              </div>
              <p>
                Hủy <br /> hơp đồng
              </p>
            </Button>
            {isModalOpen && (
              <ModalContent
                title='Lý do hủy hợp đồng uỷ quyền HĐUQ 1234'
                visible={isModalOpen}
                onOk={() => setIsModalOpen(false)}
                onCancel={() => setIsModalOpen(false)}
              >
                <TextArea placeholder='Hủy hợp đồng để tạo hợp đồng mới với giá trị và thời hạn lâu hơn.' rows={4} />
              </ModalContent>
            )}
          </div>
        </Container>
      </div>
    </Wrapper>
  )
}

const ModalContent = styled(Modal)`
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
      background: transparent !important;
      border: 1px solid #ff7506 !important;
      :hover {
        background: transparent !important;
        border: 1px solid #ff7506 !important;
      }
      span {
        color: #ff7506;
      }
    }
    .ant-btn-primary {
      background: #ff7506 !important;
    }
  }
`
const Container = styled.div`
  position: relative;
  display: grid;
  padding-right: 0px !important;
  grid-template-columns: 1fr 1fr 1fr;
  .info-1 {
    display: flex;
    flex-direction: column;
    .info-content-1,
    .info-content-2 {
      h4 {
        margin: 0 0 0 10px;
        color: #fff;
        font-weight: 700;
        display: flex;
        justify-content: center;
        align-items: center;
        p {
          flex: 1;
          display: flex;
          transform: translateX(10px);
          color: #fff;
          font-weight: 400;
          opacity: 0.7;
        }
      }
    }
    .info-content-2 {
      h3 {
        color: #ffac69;
        margin-left: 10px;
        margin-bottom: 0;
        margin-top: 40px;
      }
    }
  }
  .info-2 {
    display: flex;
    flex-direction: column;
    .info-content-1,
    .info-content-2 {
      h4 {
        margin: 0 0 0 10px;
        color: #fff;
        font-weight: 700;
        display: flex;
        align-items: center;
        p {
          transform: translateX(10px);
          color: #fff;
          font-weight: 400;
          opacity: 0.7;
        }
      }
    }
    .info-content-1 {
      height: 250px;
    }
    .info-content-2 {
      margin-top: 60px;
    }
  }
  .info-3 {
    display: flex;
    flex-direction: column;
    .info-content-1,
    .info-content-2 {
      h4 {
        margin: 0 0 0 10px;
        color: #fff;
        font-weight: 700;
        display: flex;
        align-items: center;
        p {
          transform: translateX(10px);
          color: #fff;
          font-weight: 400;
          opacity: 0.7;
        }
      }
    }
    .info-content-1 {
      height: 250px;
    }
    .info-content-2 {
      margin-top: 60px;
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
`

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  background-color: var(--primary-color);
  .content {
    margin-top: 50px;
    margin-left: 50px;
    margin-right: 10px;
    flex: 1;
    h1 {
      margin-top: -20px;
      width: 600px;
      height: 48px;
      font-size: 36px;
      line-height: 48px;
      color: #ffffff;
    }
    h4 {
      font-weight: 200;
      font-size: 16px;
      svg {
        color: #ffac69;
      }
    }
    .btn {
      margin-bottom: 20px;
      width: 309px;
      border: 1px solid #ff7506;
      border-radius: 24px;

      .button-1,
      .button-2 {
        border-radius: 24px;
        background: none;
      }
      .button-1 {
        border-top-right-radius: 24px;
        border-bottom-right-radius: 24px;
        border-right: none;
      }
      .button-2 {
        border-top-left-radius: 24px;
        border-bottom-left-radius: 24px;
        border-left: none;
      }
      .active {
        background: #b65100;
      }
    }
  }
`

export default FormMiningContract
