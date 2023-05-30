import React from 'react';
import { Pagination } from 'antd';
import { DataProps } from '../context/DataContext';
import { Song, PartnerAuthorizer, CategorySong, Device } from '../myData';

interface PageProps {
  data: DataProps[] | Song[] | PartnerAuthorizer[] | CategorySong[] | Device[];
}
const Page: React.FC<PageProps> = ({ data }) => {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        position: 'absolute',
        alignItems: 'center',
        bottom: '0',
        padding: '0 23px',
      }}
    >
      <p
        style={{ display: 'flex', letterSpacing: ' 0.015em', fontSize: '12px' }}
      >
        Hiển thị{' '}
        <span
          style={{
            padding: '0 10px',
            border: '1px solid #FF7506',
            borderRadius: '4px',
          }}
        >
          {data.length}
        </span>{' '}
        hàng trong mỗi trang
      </p>
      <Pagination
        style={{ marginRight: '40px ' }}
        pageSize={10}
        defaultCurrent={1}
        total={100}
      />
    </div>
  );
};

export default Page;
