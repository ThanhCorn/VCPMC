import React from 'react';
import styled from 'styled-components';
import firebase from 'firebase/compat/app';
import 'firebase/firestore';

interface DataProps {
  STT: number;
  'Số hợp đồng': string;
  'Tên hợp đồng': string;
  'Quyền sở hữu': string;
  'Người ủy quyền': string;
  'Ngày tạo': firebase.firestore.Timestamp;
  'Ngày hết hạn': firebase.firestore.Timestamp;
  'Ngày hiệu lực': firebase.firestore.Timestamp;
  'Khách hàng': string;
  'Hiệu lực hợp đồng': string[];
}

interface DataContractProps{
  dataContract: DataProps[] | null;
}

const InfoContract: React.FC<DataContractProps> = ({dataContract}) => {
  return (
    <Wrapper>
      <div className="info-1">
        <h3>
          Số hợp đồng: <p>BH123</p>
        </h3>
        <h3>
          Tên hợp đồng: <p>Hợp đồng ủy quyền tác phẩm âm nhạc</p>
        </h3>
        <h3>
          Ngày hiệu lực: <p>Hợp đồng ủy quyền tác phẩm âm nhạc</p>
        </h3>
        <h3>
          Ngày hết hạn: <p>Hợp đồng ủy quyền tác phẩm âm nhạc</p>
        </h3>
        <h3>
          Tình trạng: <p>{}</p>
        </h3>
      </div>
      <div></div>
      <div></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
display: grid;
    grid-template-columns:1fr 1fr 1fr;
  .info-1{
    display: flex;
    flex-direction: column;
    h3{
      display:flex;
      align-items:center;
    }
  }
`;
export default InfoContract;
