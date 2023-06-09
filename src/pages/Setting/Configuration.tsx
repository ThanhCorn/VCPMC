import { FormOutlined, LeftOutlined, PlusOutlined, RightOutlined, DownOutlined } from '@ant-design/icons'
import { Button, Col, List, Row, Dropdown, Space } from 'antd'
import styled from 'styled-components'
import { myConfig } from '../../myData'
import { Config } from '../../@types/myType'
import React, { useEffect } from 'react'

import type { MenuProps } from 'antd'

const items: MenuProps['items'] = [
  {
    label: 'Tiếng việt',
    key: '1'
  },
  {
    label: 'Tiếng Anh',
    key: '2'
  }
]

const Configuration = () => {
  const [image, setImage] = React.useState<Config[]>(myConfig)
  const [main, setMain] = React.useState(myConfig[0].image)
  const displayedImages = image.slice(1, 4)

  const handleImageClick = (index: number, item: Config) => {
    const updatedImages = [...image]
    updatedImages[0] = item
    updatedImages[index + 1] = image[0]
    setImage(updatedImages)
    setMain(item.image)
  }
  return (
    <Wrapper>
      <div className='content'>
        <div className='header-text'>
          <span>
            {' '}
            Cài đặt
            <RightOutlined />
          </span>
          <span>Cài đặt hệ thống </span>
        </div>

        <h1>Cài đặt cấu hình</h1>

        <Container>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <img src={main} alt='' className='main-image' />
            <p style={{ transform: 'translateX(50%)' }}>Theme 1</p>
          </div>
          <div className='extra-content'>
            <Button>
              <LeftOutlined />
            </Button>
            {displayedImages.map((item, index) => (
              <Button
                onClick={() => handleImageClick(index, item)}
                key={index}
                style={{ display: 'flex', flexDirection: 'column', height: '160px', width: '240px' }}
              >
                <img src={item.image} alt='' className='extra-image' key={index} />
                <p style={{ transform: 'translateX(100%)', fontSize: '14px' }}>Theme {index + 2}</p>
              </Button>
            ))}
            <Button>
              <RightOutlined />
            </Button>
          </div>
        </Container>
        <div className='language'>
          <h3>Ngôn ngữ hiển thị</h3>
          <Space>
            <Dropdown.Button icon={<DownOutlined />} menu={{ items }}>
              Tiếng việt
            </Dropdown.Button>
          </Space>
        </div>
      </div>
    </Wrapper>
  )
}

export default Configuration

const Container = styled.div`
  width: 1541px;
  display: flex;
  position: relative;
  max-height: 722px;
  margin: 10px 0;

  .images-wrap {
    width: 500px;
  }
  .extra-content {
    display: flex;
    align-items: center;
    button {
      margin: 0 10px;
      background: transparent;
      border: none;
      color: #fff;
      font-size: 3rem;
    }
  }
  .main-image {
    height: 320px;
    width: 571px;
    object-fit: cover;
    border-radius: 10px;
  }

  .extra-image {
    display: flex;
    align-items: center;
    height: 160px;
    width: 240px;
    margin-right: 20px;
    border-radius: 10px;
    object-fit: cover;
    cursor: pointer;
  }
`

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  flex: 1;
  background-color: var(--primary-color);
  .language {
    display: flex;
        align-items: center;
    h3{
        margin-right: 20px;
    }
    .ant-space{
        display: flex;
        align-items: center;
        height: 40px;
        border: 1px solid #fff;
        border-radius: 4px;
    }
    button{
        background: #2f2f41;
        border: none;
        color: #fff;
        width: 90px;
        height: 40px;
        font-size: 16px;
        svg{
            color: var(--text-primary);
            margin-left: 30px;
        }
    }
  }
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
    .option {
      display: flex;
      flex-direction: column
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
