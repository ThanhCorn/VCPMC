import styled from 'styled-components';
import { PlusCircleOutlined, RightOutlined } from '@ant-design/icons';
import { Button, Form, Input, Select } from 'antd';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';
import {
  addDoc,
  collection,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from '@firebase/firestore';
import { db } from '../../firebase';
import { useEffect } from 'react';
import { DataFeedback, fetchFeedback } from '../../features/layoutSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../app/store';
import { useSelector } from 'react-redux';
import Image1 from '../../assets/starboy.png';
import { useState } from 'react';
const { Option } = Select;

const options = [
  { value: 'account', label: 'Tài khoản' },
  { value: 'payment', label: 'Quản lý thanh toán' },
  { value: 'license', label: 'Vấn đề bản quyền' },
  { value: 'other', label: 'Khác' },
];

interface FormData {
  issue: string;
  content: string;
}

const WatchFeedback = () => {
  const [form] = Form.useForm();
  const { currentUser } = useContext(UserContext);
  const [isActive, setIsActive] = useState(false);
  const dataFeedback = useSelector<RootState, DataFeedback[]>(
    (state) => state.view.dataFeedback,
  );
  const [dataActive, setDataActive] = useState<DataFeedback>();
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFeedback());
  }, [dispatch, dataFeedback]);

  const handleClick = (item: DataFeedback) => {
    setDataActive(item);
    console.log(dataActive);
  };

  return (
    <Wrapper>
      <div className="content">
        <div className="header-text">
          <span>
            {' '}
            Hổ trợ <RightOutlined />
          </span>
          <span> Feedback</span>
        </div>
        <h1>Feedback</h1>
        <Contaniner>
          <div className="left">
            <div className="content">
              {dataFeedback.map((item: DataFeedback) => {
                return (
                  <div
                    className={`item ${
                      item.id === dataActive?.id ? 'active info' : 'info'
                    }`}
                    key={item.id}
                    onClick={() => handleClick(item)}
                  >
                    <img src={Image1} alt="hinh anh" />
                    <div className="user">
                      <h4>Thy Phạm</h4>

                      <p className="truncate">
                        Chủ đề: {item.issue} . {item.content}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="right">
            <div className="info" key={dataActive?.id}>
              <img src={Image1} alt="" />
              <h4>Thy Pham</h4>
            </div>
            <p>Chủ đề: {dataActive?.issue}</p>
            <div className="text">{dataActive?.content}</div>
          </div>
        </Contaniner>
      </div>
    </Wrapper>
  );
};

export default WatchFeedback;

const Contaniner = styled.div`
  width: 1541px;
  display: flex;
  .left {
    flex-direction: column;
    display: flex;
    width: 571px;
    height: 834px;
    background: #2b2b3f;
    margin-right: 30px;
    border-radius: 16px;
    .content {
      margin: 0;
      .active {
        background: #3e3e5b;
        border-radius: 16px;
        width: 96% !important;
        margin-left: 10px !important;
      }
      .info {
        display: flex;
        align-items: center;
        width: 100%;
        height: 80px;
        cursor: pointer;

        .user {
          height: 80px;
          padding: 0 20px;
          color: #fff;
          width: 450px;
          .truncate {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          h4 {
            margin-bottom: 10px;
          }
          p {
            margin: 0;
          }
        }
        img {
          margin-left: 20px;
          width: 56px;
          height: 56px;
          border-radius: 50%;
        }
      }
    }
  }
  .right {
    padding: 32px;
    width: 1014px;
    height: 834px;
    background: #2b2b3f;
    border-radius: 16px;
    p {
      margin-bottom: 20px;
    }
    .text {
      height: 100%;
      color: #fff;
    }
    .info {
      height: 60px;
      display: flex;
      color: #fff;
      img {
        margin-right: 20px;
        width: 56px;
        height: 56px;
        border-radius: 50%;
      }
    }
  }
`;
const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex: 1;
  background-color: var(--primary-color);
  .content {
    margin-top: 50px;
    margin-left: 50px;
    margin-right: 70px;
    flex: 1;
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
`;
