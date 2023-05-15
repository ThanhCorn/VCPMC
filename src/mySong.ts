import Matem from './assets/matem.jpg';
import Starboy from './assets/starboy.png';
import DoubleFantasy from './assets/DF.jpg';
import People from './assets/Libianca.jpg';
import SixFeetUnder from './assets/theweeknd.jpg';
import NTH from './assets/thaihoc.jpg';
export interface Song {
  stt: number;
  tenBanGhi: string;
  maISRC: string;
  thoiLuong: string;
  caSi: string;
  tacGia: string;
  theLoai: string;
  dinhDang: string;
  thoiGianSuDung: string;
  hinhAnh: string; // Thêm trường hình ảnh
}

const mySong: Song[] = [
  {
    stt: 1,
    tenBanGhi: 'Mất em',
    maISRC: 'KRA0123123',
    thoiLuong: '04:27',
    caSi: 'Phan Mạnh Quỳnh',
    tacGia: 'Phan Mạnh Quỳnh',
    theLoai: 'Ballad',
    dinhDang: 'Audio',
    thoiGianSuDung: 'Còn thời hạn',
    hinhAnh: Matem,
  },
  {
    stt: 2,
    tenBanGhi: 'Six feet under',
    maISRC: 'KRA0123124',
    thoiLuong: '04:27',
    caSi: 'The weeknd',
    tacGia: 'The weeknd',
    theLoai: 'Ballad',
    dinhDang: 'Audio',
    thoiGianSuDung: 'Còn thời hạn',
    hinhAnh: SixFeetUnder,
  },
  {
    stt: 3,
    tenBanGhi: 'Kiếp này em gả cho anh',
    maISRC: 'KRA0123125',
    thoiLuong: '04:27',
    caSi: 'Phạm Thái Học',
    tacGia: 'Phạm Thái Học',
    theLoai: 'Ballad',
    dinhDang: 'Audio',
    thoiGianSuDung: 'Còn thời hạn',
    hinhAnh: NTH,
  },
  {
    stt: 4,
    tenBanGhi: 'Starboy',
    maISRC: 'KRA0123126',
    thoiLuong: '04:27',
    caSi: 'The weeknd',
    tacGia: 'The weeknd',
    theLoai: 'Ballad',
    dinhDang: 'Audio',
    thoiGianSuDung: 'Còn thời hạn',
    hinhAnh: Starboy,
  },
  {
    stt: 5,
    tenBanGhi: 'Double Fantasy',
    maISRC: 'KRA0123127',
    thoiLuong: '04:27',
    caSi: 'The weeknd',
    tacGia: 'The weeknd',
    theLoai: 'Ballad',
    dinhDang: 'Audio',
    thoiGianSuDung: 'Còn thời hạn',
    hinhAnh: DoubleFantasy,
  },
  {
    stt: 6,
    tenBanGhi: 'People',
    maISRC: 'KRA0123128',
    thoiLuong: '04:27',
    caSi: 'Libianca',
    tacGia: 'Libianca',
    theLoai: 'Ballad',
    dinhDang: 'Audio',
    thoiGianSuDung: 'Còn thời hạn',
    hinhAnh: People,
  },
];

export { mySong };
