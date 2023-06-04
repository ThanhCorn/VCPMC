import { FormOutlined, PlusOutlined, RightOutlined } from '@ant-design/icons';
import { Button, Col, List, Row } from 'antd';
import styled from 'styled-components';
import { CategorySong, myCategorySong } from '../../myData';
import Page from '../../components/Page';
import React, { useEffect } from 'react';
const InfoCreation = () => {
  const [isEdit, setIsEdit] = React.useState(false);
  const [add, setAdd] = React.useState(false);
  const [data, setData] = React.useState<CategorySong[]>(myCategorySong);

  const handleSave = () => {
    setAdd(false);
    setIsEdit(false);
    setData(myCategorySong);
  };

  const handleAdd = () => {
    setIsEdit(false);
    setAdd(true);
    const newItem: CategorySong = {
      stt: data.length + 1,
      tentheloai: '',
      mota: '',
    };
    setData([...data, newItem]);
  };
  useEffect(() => {}, [data]);
  return (
    <Wrapper>
      <div className="content">
        {!isEdit ? (
          <div className="header-text">
            <span>
              {' '}
              Trang chủ <RightOutlined />
            </span>
            <span> Cài đặt hệ thống </span>
          </div>
        ) : (
          <div className="header-text">
            <span>
              {' '}
              Cài đặt hệ thống
              <RightOutlined />
            </span>
            <span>Chỉnh sửa thông tin </span>
          </div>
        )}
        <h1>Thông tin tác phẩm</h1>
        <h3>Thể loại tác phẩm</h3>
        <Container>
          <Row className="row-1">
            <Col span={2}>
              <p>STT</p>
            </Col>
            <Col span={2} style={{ marginRight: '20px' }}>
              <p>Tên thể loại</p>
            </Col>
            <Col span={18}>
              <p>Mô tả </p>
            </Col>
          </Row>
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(data: CategorySong) => (
              <List.Item
                key={data.stt}
                style={{ alignItems: 'center', display: 'flex' }}
              >
                <Row className="row-2">
                  <Col span={2}>
                    <p style={{ marginLeft: '18px' }}> {data.stt}</p>
                  </Col>

                  <Col
                    span={2}
                    style={{ marginRight: '20px' }}
                    className={`${
                      (data.stt === 1 && isEdit ? 'active' : '') ||
                      (add && data.tentheloai === '' ? 'active' : '')
                    }`}
                  >
                    <p>{data.tentheloai}</p>
                  </Col>
                  <Col
                    span={18}
                    className={`${
                      (data.stt === 1 && isEdit ? 'active' : '') ||
                      (add && data.mota === '' ? 'active' : '')
                    }`}
                  >
                    <p>{data.mota}</p>
                  </Col>
                </Row>
              </List.Item>
            )}
          ></List>
          <Page data={data} />
        </Container>
        {(add || isEdit) && (
          <div className="btn">
            <Button className="btn-huy">Hủy</Button>
            <Button onClick={handleSave} className="btn-luu">
              Lưu
            </Button>
          </div>
        )}

        <div className="side-option">
          {!isEdit ? (
            <div className="option">
              <Button onClick={() => setIsEdit(true)} className="button-option">
                <div className="icon">
                  <FormOutlined />
                </div>
                <p>Chỉnh sửa</p>
              </Button>
            </div>
          ) : (
            <div className="option">
              <Button onClick={handleAdd} className="button-option">
                <div className="icon">
                  <PlusOutlined />
                </div>
                <p>Thêm mới</p>
              </Button>
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default InfoCreation;

const Container = styled.div`
  position: relative;
  max-height: 722px;
  height: 722px;
  background: rgba(47, 47, 65, 0.7);
  border: 1px solid rgba(47, 47, 65, 0.7);
  border-radius: 16px;
  margin: 10px 0;
  .row-1,
  .row-2 {
    width: 1541px;
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
`;

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
`;
