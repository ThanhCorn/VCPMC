import { Button, Modal } from 'antd'
import React from 'react'
import ImageSong from '../assets/Song.png'
import styled from 'styled-components'

const ListenButton = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  return (
    <>
      <Button
        onClick={() => setIsModalOpen(true)}
        style={{
          background: 'transparent',
          border: 'none',
          textDecoration: 'underline',
          color: '#ff7506'
        }}
      >
        Nghe
      </Button>
      {isModalOpen && (
        <ModalContent visible={isModalOpen} onCancel={() => setIsModalOpen(false)}>
          <img src={ImageSong} alt='' />
        </ModalContent>
      )}
    </>
  )
}

export default ListenButton

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
