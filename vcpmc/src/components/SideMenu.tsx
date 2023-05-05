import styled from 'styled-components';
import logo from '../assets/logo.png';
import React, { useState } from 'react';
import {
  VideoCameraOutlined,
  PlaySquareOutlined,
  CalendarOutlined,
  FileTextOutlined,
  DollarCircleOutlined,
  SettingOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}
const Wrapper = styled(Menu)`
  background-color: #020220;
  width: 10vw;
  height: 100vh;
  .logo {
    margin: 40px 0px 150px 40px;
    img {
      width: 115px;
      height: 87px;
      border-radius: 50%;
    }
  }
  ul {
    background-color: #020220;
    color: #fff;
    li {
      font-size: 14px;
      display: flex;
    }
    .ant-menu-item {
      padding-top: 5px;
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
      line-height: 20px;
      :hover {
        color: #fff !important;
        border-left: 2px solid #ff7506;
        border-left-radius: 0px !important;
      }
    }
    .ant-menu-submenu > .ant-menu-submenu-title {
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
      line-height: 20px;
    }

    .ant-menu-submenu-title > .ant-menu-title-content {
      margin-left: 15px;
    }
    .ant-menu-submenu-title > .ant-menu-item-icon {
      margin-left: 15px;
    }
    .ant-menu-submenu-title:hover {
      color: #fff !important;
      border-left: 2px solid #ff7506;
    }
  }
`;

const items: MenuItem[] = [
  getItem('Kho bản ghi', '1', <VideoCameraOutlined />),
  getItem('Playlist', '2', <PlaySquareOutlined />),
  getItem('Lập lịch phát', '3', <CalendarOutlined />),

  getItem('Quản lý', 'sub1', <FileTextOutlined />, [
    getItem('Quản lý hợp đồng', '5'),
    getItem('Quản lý thiết bị', '6'),
    getItem('Đơn vị ủy quyền', '7'),
    getItem('Đơn vị sử dụng', '8'),
  ]),

  getItem('Doanh thu', 'sub2', <DollarCircleOutlined />, [
    getItem('Báo cáo doanh thu', '9'),
    getItem('Lịch sử đối soát', '10'),
    getItem('Phấn phối doanh thu', '11'),
  ]),

  getItem('Cài đặt', 'sub3', <SettingOutlined />, [
    getItem('Phân quyền người dùng', '12'),
    getItem('Cấu hình', '13'),
    getItem('Quản lý hợp đồng', '14'),
    getItem('Thông tin tác phẩm', '15'),
    getItem('Chu kỳ đối soát', '16'),
  ]),
  getItem('Hổ trợ', 'sub4', <QuestionCircleOutlined />, [
    getItem('Hướng dẫn sử dụng', '17'),
    getItem('Tải app', '18'),
    getItem('Feedback', '19'),
  ]),
];

const SideMenu = () => {
  return (
    <Wrapper>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="menu-item">
        <Menu mode="vertical" items={items} className="list-item" />
      </div>
    </Wrapper>
  );
};

export default SideMenu;
