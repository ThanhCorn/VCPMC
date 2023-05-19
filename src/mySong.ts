import Matem from './assets/matem.jpg';
import Starboy from './assets/starboy.png';
import DoubleFantasy from './assets/DF.jpg';
import People from './assets/Libianca.jpg';
import SixFeetUnder from './assets/theweeknd.jpg';
import NTH from './assets/thaihoc.jpg';
import Love from './assets/lovesong.jpg';
import One from './assets/one.jpg';
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

export interface Schecule {
  stt: number;
  tenlich: string;
  thoigian: string;
  tenplaylist?: string;
  ngayphatplaylist?: string;
  batdauketthuc?: string;
  chukyphat?: string;
  thietbi?: string;
  thoiluong?: string;
  sobanghi?: string;
  chude?: string[];
  ngaytao?: string;
  nguoitao?: string;
  hinhanh?: string;
}

export interface Device {
  stt: number;
  tenthietbi: string;
  MACAdress: string;
  SKUID: string;
  donvisudung: string;
  tendangnhap: string;
  diadiem: string;
}

const myDevice: Device[] = [
  {
    stt: 1,
    tenthietbi: 'Device A12321',
    MACAdress: '192.168.1.8',
    SKUID: '232124264',
    donvisudung: 'Cửa hàng 1',
    tendangnhap: 'User 25',
    diadiem: '194, Nguyễn Thị Minh Khai, Phường 6 , Quận 3 ,TP Hồ Chí Minh',
  },
  {
    stt: 2,
    tenthietbi: 'Device A12323',
    MACAdress: '192.168.1.6',
    SKUID: '232124262',
    donvisudung: 'Cửa hàng 2',
    tendangnhap: 'User 32',
    diadiem: '194, Nguyễn Thị Minh Khai, Phường 6 , Quận 3 ,TP Hồ Chí Minh',
  },
  {
    stt: 3,
    tenthietbi: 'Device A123161',
    MACAdress: '192.168.1.1',
    SKUID: '232124264',
    donvisudung: 'Cửa hàng 3',
    tendangnhap: 'User 2',
    diadiem: '194, Nguyễn Thị Minh Khai, Phường 6 , Quận 3 ,TP Hồ Chí Minh',
  },
  {
    stt: 4,
    tenthietbi: 'Device A125353',
    MACAdress: '192.168.1.2',
    SKUID: '232124264',
    donvisudung: 'Cửa hàng 4',
    tendangnhap: 'User 21',
    diadiem: '86/33, Âu Cơ, Phường 9, Tân Bình, TP Hồ Chí Minh',
  },
];

const mySchecule: Schecule[] = [
  {
    stt: 1,
    tenlich: 'Lịch 1',
    thoigian: '8/12/2023 - 10/12/2023',
    tenplaylist: 'Top USUK 2021',
    ngayphatplaylist: '8/12/2023 - 10/12/2023',
    batdauketthuc: '11:00:00 - 13:00:00',
    chukyphat: 'Thứ 2 | Thứ 6',
    thietbi: 'Thiết bị 1 | Thiết bị 2 | Thiết bị 3 | Thiết bị 4',
    thoiluong: '02:00:00',
    sobanghi: '20',
    chude: ['Pop', 'Chill', 'Trending', 'Songs', 'Lofi'],
    ngaytao: '20/10/2023',
    nguoitao: 'Cindy Cường',
    hinhanh: Matem,
  },
  {
    stt: 2,
    tenlich: 'Lịch 2',
    thoigian: '8/12/2023 - 10/12/2023',
    tenplaylist: 'Love song',
    ngayphatplaylist: '8/12/2023 - 10/12/2023',
    batdauketthuc: '06:00:00 - 18:00:00',
    chukyphat: 'Thứ 5',
    thietbi: 'Thiết bị 1 | Thiết bị 2 | Thiết bị 3 | Thiết bị 4',
    thoiluong: '02:00:00',
    sobanghi: '10',
    chude: ['Pop', 'Chill', 'Trending', 'Songs', 'Lofi'],
    ngaytao: '20/10/2023',
    nguoitao: 'Cindy Dương',
    hinhanh: Love,
  },
  {
    stt: 3,
    tenlich: 'Lịch 3',
    thoigian: '8/12/2023 - 10/12/2023',
    tenplaylist: 'Loving You',
    ngayphatplaylist: '8/12/2023 - 10/12/2023',
    batdauketthuc: '06:00:00 - 18:00:00',
    chukyphat: 'Thứ 7',
    thietbi: 'Thiết bị 1 | Thiết bị 2 | Thiết bị 3 | Thiết bị 4',
    thoiluong: '02:00:00',
    sobanghi: '7',
    chude: ['Pop', 'Chill', 'Trending', 'Songs', 'Lofi'],
    ngaytao: '20/10/2023',
    nguoitao: 'Cindy Thành',
    hinhanh: People,
  },
  {
    stt: 4,
    tenlich: 'Lịch 4',
    thoigian: '8/12/2023 - 10/12/2023',
    tenplaylist: 'StarBoy',
    sobanghi: '10',
    chude: ['Pop', 'Chill', 'Trending', 'Songs', 'Lofi'],
    ngaytao: '20/10/2023',
    nguoitao: 'The Weeknd',
    hinhanh: Starboy,
    thoiluong: '02:00:00',
  },
  {
    stt: 5,
    tenlich: 'Lịch 5',
    thoigian: '8/12/2023 - 10/12/2023',
    tenplaylist: 'One call away',
    sobanghi: '10',
    chude: ['Pop', 'Chill', 'Trending', 'Songs', 'Lofi'],
    ngaytao: '20/10/2023',
    nguoitao: 'Charlie Puth',
    hinhanh: One,
    thoiluong: '02:00:00',
  },
];

export { mySong, mySchecule, myDevice };
