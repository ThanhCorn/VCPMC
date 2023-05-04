import {
  VideoCameraOutlined,
  PlaySquareOutlined,
  CalendarOutlined,
  FileTextOutlined,
  DollarCircleOutlined,
  SettingOutlined,
  QuestionCircleOutlined,
  MoreOutlined,
} from '@ant-design/icons';

export interface DataMenu {
  id: number;
  text: string;
  icon:
    | typeof VideoCameraOutlined
    | typeof PlaySquareOutlined
    | typeof CalendarOutlined
    | typeof FileTextOutlined
    | typeof DollarCircleOutlined
    | typeof SettingOutlined
    | typeof QuestionCircleOutlined;
  moreIcon?: typeof MoreOutlined;
  options?: {
    text: string;
    onClick: () => void;
  }[];
}

export const data: DataMenu[] = [
  {
    id: 1,
    text: 'Kho bản ghi',
    icon: VideoCameraOutlined,
  },
  {
    id: 2,
    text: 'Playlist ',
    icon: PlaySquareOutlined,
  },
  {
    id: 3,
    text: 'Lập lịch phát',
    icon: CalendarOutlined,
  },
  {
    id: 4,
    text: 'Quản lý ',
    icon: FileTextOutlined,
    moreIcon: MoreOutlined,
    options: [
      {
        text: 'Quản lý hợp đồng',
        onClick: () => console.log('Quản lý hợp đồng'),
      },
      {
        text: 'Quản lý thiết bị',
        onClick: () => console.log('Quản lý thiết bị'),
      },
      {
        text: 'Đơn vị ủy quyền',
        onClick: () => console.log('Đơn vị ủy quyền'),
      },
      {
        text: 'Đơn vị sử dụng',
        onClick: () => console.log('Đơn vị sử dụng'),
      },
    ],
  },
  {
    id: 5,
    text: 'Doanh thu',
    icon: DollarCircleOutlined,
    moreIcon: MoreOutlined,
    options: [
      {
        text: 'Báo cáo doanh thu',
        onClick: () => console.log('Báo cáo doanh thu'),
      },
      {
        text: 'Lịch sử đối soát',
        onClick: () => console.log('Lịch sử đối soát'),
      },
      {
        text: 'Phấn phối doanh thu',
        onClick: () => console.log('Phấn phối doanh thu'),
      },
    ],
  },
  {
    id: 6,
    text: 'Cài đặt',
    icon: SettingOutlined,
    moreIcon: MoreOutlined,
    options: [
      {
        text: 'Phân quyền người dùng',
        onClick: () => console.log('Phân quyền người dùng'),
      },
      {
        text: 'Cấu hình',
        onClick: () => console.log('Cấu hình'),
      },
      {
        text: 'Quản lý hợp đồng',
        onClick: () => console.log('Quản lý hợp đồng'),
      },
      {
        text: 'Thông tin tác phẩm',
        onClick: () => console.log('Thông tin tác phẩm'),
      },
      {
        text: 'Chu kỳ đối soát',
        onClick: () => console.log('Chu kỳ đối soát'),
      },
    ],
  },
  {
    id: 7,
    text: 'Hổ trợ',
    icon: QuestionCircleOutlined,
    moreIcon: MoreOutlined,
    options: [
      {
        text: 'Hướng dẫn sử dụng',
        onClick: () => console.log('Hướng dẫn sử dụng'),
      },
      {
        text: 'Tải app',
        onClick: () => console.log('Tải app'),
      },
      {
        text: 'Feedback',
        onClick: () => console.log('Feedback'),
      },
    ],
  },
];
