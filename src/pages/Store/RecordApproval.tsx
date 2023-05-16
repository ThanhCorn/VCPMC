import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import SideMenu from '../../components/SideMenu';
import PageContent from '../../components/PageContent';
import { Button, Checkbox, Dropdown, Input, Space } from 'antd';
import {
  AppstoreOutlined,
  CheckOutlined,
  CloseOutlined,
  DownOutlined,
  FormOutlined,
  RightOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons';
import { items, items2, items3, items4 } from '../../MenuDropDown';
import ListView from '../../components/ListView';
import GridView from '../../components/GridView';
import { useDispatch } from 'react-redux';
import { setGridView, setListView } from '../../features/layoutSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { DataContext } from '../../context/DataContext';
import { Link } from 'react-router-dom';
const { Search } = Input;
const onSearch = (value: string) => console.log(value);

const RecordApproval = () => {
  const isListView = useSelector((state: RootState) => state.view.isListView);
  const { isKhoBanGhi, setIsKhoBanGhi } = useContext(DataContext);
  const [isChecked, setIsChecked] = React.useState(false);
  const dispatch = useDispatch();

  useEffect(() => {}, [isKhoBanGhi]);
  return (
    <Wrapper>
      <SideMenu />
      <PageContent />
      <div className="content">
        <span style={{ color: '#fff', opacity: '0.5' }}>
          Kho bản ghi <RightOutlined style={{ color: '#FF7506' }} /> Quản lý phê
          duyệt
        </span>
        <h1>Phê duyệt bản ghi</h1>
        <Search onSearch={onSearch} placeholder="Tên bản ghi, tên ca sĩ,..." />
        <div className="option-1">
          <Space className="space-1">
            <p>Thể loại:</p>
            <Dropdown menu={{ items: items }}>
              <Button className="button-1">
                <Space>
                  Tất cả
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
          </Space>
          <Space
            className="space-2"
            style={{
              margin: isListView === true ? 'auto' : '0',
              marginLeft: isListView === true ? '0' : undefined,
            }}
          >
            <p>Định dạng:</p>
            <Dropdown menu={{ items: items2 }}>
              <Button className="button-1">
                <Space>
                  Tất cả
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
          </Space>
          {isListView === false && (
            <Space
              className="space-1"
              style={{ margin: 'auto', marginLeft: '20px' }}
            >
              <p>
                <Checkbox
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                />{' '}
                Chọn tất cả
              </p>
            </Space>
          )}

          <Space className="space-5">
            <Button
              onClick={() => {
                dispatch(setListView(true));
              }}
            >
              <UnorderedListOutlined
                className={`${isListView ? 'svg-active' : null}`}
              />
            </Button>
            <Button
              onClick={() => {
                dispatch(setGridView(false));
              }}
            >
              <AppstoreOutlined
                className={`${!isListView ? 'svg-active' : null}`}
              />
            </Button>
          </Space>
        </div>
        <div className="option">
          <Link
            to="/record-store"
            className="link-option"
            onClick={() => setIsKhoBanGhi(true)}
          >
            <div className="icon">
              <CheckOutlined style={{ color: 'green' }} />
            </div>
            <p>
              &nbsp;&nbsp;Quản lý <br />
              phê duyệt
            </p>
          </Link>
          <Button className="button-option">
            <div className="icon">
              <CloseOutlined style={{ color: 'red' }} />
            </div>
            <p>Từ chối</p>
          </Button>
        </div>
        {isListView ? (
          <ListView listView={isListView} isKhoBanGhi={isKhoBanGhi} />
        ) : (
          <GridView
            gridView={isListView}
            isKhoBanGhi={isKhoBanGhi}
            isChecked={isChecked}
          />
        )}
      </div>
    </Wrapper>
  );
};

export default RecordApproval;

const Container = styled.div`
  width: 1541px;
  max-height: 722px;
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
`;

const Wrapper = styled.div`
  background-color: var(--primary-color);
  display: flex;
  .content {
    margin-left: 50px;
    margin-top: 50px;
    .option-1 {
      margin-top: 20px;
      width: 1541px;
      display: flex;
      p {
        opacity: 1 !important;
      }
      .space-1,
      .space-2,
      .space-3 {
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

      .space-4 {
        margin: auto;
        margin-left: 0;
        .button-2 {
          background: #1e1e2e;
          color: #fff;
          width: 200px;
          height: 40px;
          border: 1px solid #ff7506;
          .ant-space {
            display: flex;
            justify-content: space-between;
          }
        }
      }
      .space-5 {
        button {
          background: transparent;
          border: none;
          color: #fff;
          svg {
            font-size: 2rem;
          }
        }
      }
    }
    .ant-input-wrapper {
      background: #1e1e2e;
      width: 517px;
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
    .svg-active {
      color: #ff7506;
    }
    .ant-input {
      background: #1e1e2e;
      color: #fff;
      border: 1px solid #727288;
      width: 517px;
      ::placeholder {
        color: #727288;
      }
      :hover {
        border-right: none;
      }
      height: 48px;
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
`;
