import { MenuProps } from 'antd/lib/menu'
const items: MenuProps['items'] = [
  {
    label: 'Tất cả',
    key: '1'
  },
  {
    label: 'Pop',
    key: '2'
  },
  {
    label: 'EDM',
    key: '3'
  },
  {
    label: 'Ballad',
    key: '4'
  }
]
const items2: MenuProps['items'] = [
  {
    label: 'Tất cả',
    key: '1'
  },
  {
    label: 'Âm thanh',
    key: '2'
  },
  {
    label: 'Video',
    key: '3'
  }
]
const items3: MenuProps['items'] = [
  {
    label: 'Tất cả',
    key: '1'
  },
  {
    label: 'Còn thời hạn',
    key: '2'
  },
  {
    label: 'Hết thời hạn',
    key: '3'
  }
]
const items4: MenuProps['items'] = [
  {
    label: 'Tất cả',
    key: '1'
  },
  {
    label: 'Duyệt bởi người dùng',
    key: '2'
  },
  {
    label: 'Duyệt tự động',
    key: '3'
  }
]
const handleMenuClick: MenuProps['onClick'] = (e) => {
  console.log('click', e)
}
const menuProps = {
  items,
  onClick: handleMenuClick
}

export { menuProps, items, items2, items3, items4 }
