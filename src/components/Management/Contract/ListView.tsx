import { Checkbox, Col, Input, List, Modal, Pagination, Row } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

import Page from '../../Page'
import ListenButton from '../../ListenButton'
import { mySong } from '../../../myData'
import { Song } from '../../../@types/myType'
import { RootState } from '../../../app/store'

interface ListViewProps {
  listView: boolean
  isKhoBanGhi: boolean
}

const ListView: React.FC<ListViewProps> = ({ listView, isKhoBanGhi }) => {
  const isListView = useSelector((state: RootState) => state.view.isListView)
  const [isChecked, setIsChecked] = React.useState(false)
  const rowStyle = !isListView ? { alignItems: 'center', marginLeft: '-15px' } : {}

  return (
    <Container>
      <Row className='row-1' style={rowStyle}>
        {isKhoBanGhi === false && <Checkbox checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />}

        <Col span={1} style={{ marginLeft: '10px' }}>
          <p>STT</p>
        </Col>
        <Col span={3}>
          <p>Tên bản ghi</p>
        </Col>
        <Col span={2}>
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
        itemLayout='horizontal'
        dataSource={mySong}
        renderItem={(song: Song) => (
          <List.Item key={song.stt} style={{ alignItems: 'center', display: 'flex' }}>
            <Row className='row-2'>
              {isKhoBanGhi === false && <Checkbox checked={isChecked} />}

              <Col span={1}>
                <p style={{ marginLeft: '18px' }}> {song.stt}</p>
              </Col>
              <Col span={3}>
                <p>{song.tenBanGhi}</p>
              </Col>
              <Col span={2}>
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
              <Col span={4} style={{ height: '18px' }}>
                <p style={{ marginBottom: '-10px' }}>🌱{song.thoiGianSuDung}</p>
                <span
                  style={{
                    color: '#fff',
                    opacity: '0.5',
                    fontSize: '12px'
                  }}
                >
                  20/12/2023
                </span>
              </Col>
              {isKhoBanGhi === true && (
                <Col span={2}>
                  <Link
                    to='/update-record'
                    style={{
                      background: 'transparent',
                      border: 'none',
                      textDecoration: 'underline',
                      color: '#ff7506',
                      cursor: 'pointer'
                    }}
                  >
                    Cập nhật
                  </Link>
                </Col>
              )}

              <Col>
                <ListenButton />
              </Col>
            </Row>
          </List.Item>
        )}
      ></List>
      <Page data={mySong} />
    </Container>
  )
}

export default ListView

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
