import styled from 'styled-components';
import logo1 from '../assets/logo1.png';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

type MenuItem = Required<MenuProps>['items'][number] & {
  key: React.Key;
  icon?: React.ReactNode;
  label?: React.ReactNode;
  children?: MenuItem[];
  type?: 'group';
  path?: string;
};

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
  path?: string,
): MenuItem {
  if (path) {
    return {
      key,
      icon,
      children: children?.map((child) =>
        getItem(
          child.label,
          child.key,
          child.icon,
          child.children,
          child.type,
          child.path,
        ),
      ),
      label: (
        <Link to={path} style={{ color: 'inherit' }}>
          {label}
        </Link>
      ),
      type,
      path,
    } as MenuItem;
  }
  return {
    key,
    icon,
    children,
    label,
    type,
    path,
  } as MenuItem;
}
const Wrapper = styled(Menu)`
  background-color: #020220;
  width: 170px;

  height: 100vh;
  .logo1 {
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
      span > svg {
        width: 32px;
        height: 32px;
      }
    }
    .ant-menu-item-active {
      border-left: 3px solid #ff7506 !important;
      border-radius: 0px !important;
    }
    .ant-menu-item-selected {
      background-color: #020220 !important;
      color: #ff7506 !important;
      border-left: 3px solid #ff7506 !important;
      border-radius: 0px !important;
    }

    .ant-menu-item {
      padding-top: 5px;
      display: flex;
      height: 70px;

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
    .ant-menu-submenu {
      padding-top: 5px;
      display: flex;
      height: 70px;

      flex-direction: column;
      text-align: center;
      align-items: center;
      line-height: 20px;
      :hover {
        color: #fff !important;
        border-left-radius: 0px !important;
      }
    }
    .ant-menu-submenu > .ant-menu-submenu-title {
      height: 70px;
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
      line-height: 20px;
      :hover {
        border-left: 3px solid #ff7506 !important;
        border-radius: 0px !important;
      }
    }
    .ant-menu-submenu-selected > .ant-menu-submenu-title {
      border-radius: 0px !important;
      border-left: 3px solid #ff7506;
      color: #ff7506 !important;
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
  getItem(
    'Kho bản ghi',
    '1',
    <VideoCameraOutlined />,
    undefined,
    undefined,
    '/record-store',
  ),
  getItem(
    'Playlist',
    '2',
    <PlaySquareOutlined />,
    undefined,
    undefined,
    '/playlist',
  ),
  getItem(
    'Lập lịch phát',
    '3',
    <CalendarOutlined />,
    undefined,
    undefined,
    '/schedule',
  ),

  getItem('Quản lý', 'sub1', <FileTextOutlined />, [
    getItem(
      'Quản lý hợp đồng',
      '5',
      undefined,
      undefined,
      undefined,
      '/management/contract',
    ),
    getItem(
      'Quản lý thiết bị',
      '6',
      undefined,
      undefined,
      undefined,
      '/management/equip',
    ),
    getItem(
      'Đơn vị ủy quyền',
      '7',
      undefined,
      undefined,
      undefined,
      '/management/authority',
    ),
    getItem(
      'Đơn vị sử dụng',
      '8',
      undefined,
      undefined,
      undefined,
      '/management/used',
    ),
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
    getItem(
      'Thông tin tác phẩm',
      '15',
      undefined,
      undefined,
      undefined,
      '/setting/info-creation',
    ),
    getItem(
      'Chu kỳ đối soát',
      '16',
      undefined,
      undefined,
      undefined,
      '/setting/period',
    ),
  ]),
  getItem('Hổ trợ', 'sub4', <QuestionCircleOutlined />, [
    getItem(
      'Hướng dẫn sử dụng',
      '17',
      undefined,
      undefined,
      undefined,
      '/help/guide',
    ),
    getItem('Tải app', '18', undefined, undefined, undefined, '/help/download'),
    getItem(
      'Feedback',
      '19',
      undefined,
      undefined,
      undefined,
      '/help/feedback',
    ),
  ]),
];

const SideMenu = () => {
  return (
    <Wrapper>
      <div className="logo1">
        <img src={logo1} alt="logo1" />
      </div>
      <div className="menu-item">
        <Menu mode="vertical" items={items} className="list-item" />
      </div>
    </Wrapper>
  );
};

export default SideMenu;
