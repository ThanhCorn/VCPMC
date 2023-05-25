import { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../firebase';
import firebase from 'firebase/compat/app';
import 'firebase/firestore';
import {
  collection,
  getDocs,
  query,
  onSnapshot,
  Timestamp,
  doc,
} from 'firebase/firestore';
import { db } from '../firebase';

export interface DataProps {
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
  'Ngày tải': firebase.firestore.Timestamp;
  'Tác giả': string;
  'Tên bản ghi': string;
  'Tình trạng': string[];
  'Mã ISRC': string;
  'Trạng thái': boolean;
  'Tên tài khoản quản trị': string;
  Admin: string;
  'Người dùng': string;
  'Thiết bị chỉ định': string;
}

interface DataContextValue {
  data: DataProps[];
  setData: (data: DataProps[]) => void;
  isKhoBanGhi: boolean;
  setIsKhoBanGhi: (isKhoBanGhi: boolean) => void;
}

export const DataContext = createContext<DataContextValue>({
  data: [],
  setData: () => {},
  isKhoBanGhi: true,
  setIsKhoBanGhi: () => {},
});

export const useData = () => useContext(DataContext);

export const DataProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [data, setData] = useState<DataProps[]>([]);
  const [isKhoBanGhi, setIsKhoBanGhi] = useState<boolean>(true);

  useEffect(() => {
    const getData = async () => {
      const q = query(collection(db, 'contract'));
      const querySnapshot = await getDocs(q);
      const tempData: DataProps[] = [];
      querySnapshot.forEach((doc) => {
        tempData.push(doc.data() as DataProps);
      });
      setData(tempData);
    };
    getData();
  }, []);
  return (
    <DataContext.Provider
      value={{ data, setData, isKhoBanGhi, setIsKhoBanGhi }}
    >
      {children}
    </DataContext.Provider>
  );
};
