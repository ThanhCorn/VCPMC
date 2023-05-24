import React from 'react';
import { Pagination } from 'antd';
import { DataProps } from '../context/DataContext';
import { Song, PartnerAuthorizer } from '../myData';

interface PageProps {
  data: DataProps[] | Song[] | PartnerAuthorizer[];
}
const Page: React.FC<PageProps> = ({ data }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 23px',
      }}
    >
      <p style={{ display: 'flex', letterSpacing: ' 0.015em' }}>
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
      <Pagination total={100} />
    </div>
  );
};

export default Page;
