import Matem from './assets/matem.jpg'
import Starboy from './assets/starboy.png'
import DoubleFantasy from './assets/DF.jpg'
import People from './assets/Libianca.jpg'
import SixFeetUnder from './assets/theweeknd.jpg'
import NTH from './assets/thaihoc.jpg'
import Love from './assets/lovesong.jpg'
import One from './assets/one.jpg'
import Theme1 from './assets/theme1.jpg'
import Theme2 from './assets/theme2.jpg'
import Theme3 from './assets/theme3.jpg'
import Theme4 from './assets/theme4.jpg'
import d1 from './assets/d1.jpg'
import d2 from './assets/d2.jpg'
import d3 from './assets/d3.jpg'
import d4 from './assets/d4.jpg'

import { Song, Device, Schecule, PartnerAuthorizer, CategorySong, Config, Role, Income } from './@types/myType'

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
    hinhAnh: Matem
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
    hinhAnh: SixFeetUnder
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
    hinhAnh: NTH
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
    hinhAnh: Starboy
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
    hinhAnh: DoubleFantasy
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
    hinhAnh: People
  }
]

const myDevice: Device[] = [
  {
    stt: '1',
    tenthietbi: 'Device A12321',
    MACAdress: '192.168.1.8',
    SKUID: '232124264',
    donvisudung: 'Cửa hàng 1',
    tendangnhap: 'User 25',
    diadiem: '194, Nguyễn Thị Minh Khai, Phường 6 , Quận 3 ,TP Hồ Chí Minh',
    trangthai: true,
    thoigiandongbo: '10:00 20/10/2020',
    tongluotphat: 100,
    memory: '0.00GB/32GB',
    isCheck: false,
    img: d1
  },
  {
    stt: '2',
    tenthietbi: 'Device A12323',
    MACAdress: '192.168.1.6',
    SKUID: '232124262',
    donvisudung: 'Cửa hàng 2',
    tendangnhap: 'User 32',
    diadiem: '194, Nguyễn Thị Minh Khai, Phường 6 , Quận 3 ,TP Hồ Chí Minh',
    trangthai: false,
    thoigiandongbo: '10:00 20/10/2020',
    tongluotphat: 100,
    memory: '0.00GB/32GB',
    isCheck: false,
    img: d2
  },
  {
    stt: '3',
    tenthietbi: 'Device A123161',
    MACAdress: '192.168.1.1',
    SKUID: '232124264',
    donvisudung: 'Cửa hàng 3',
    tendangnhap: 'User 2',
    diadiem: '194, Nguyễn Thị Minh Khai, Phường 6 , Quận 3 ,TP Hồ Chí Minh',
    trangthai: true,
    thoigiandongbo: '10:00 20/10/2020',
    tongluotphat: 100,
    memory: '0.00GB/32GB',
    isCheck: false,
    img: d3
  },
  {
    stt: '4',
    tenthietbi: 'Device A125353',
    MACAdress: '192.168.1.2',
    SKUID: '232124264',
    donvisudung: 'Cửa hàng 4',
    tendangnhap: 'User 21',
    diadiem: '86/33, Âu Cơ, Phường 9, Tân Bình, TP Hồ Chí Minh',
    trangthai: true,
    thoigiandongbo: '10:00 20/10/2020',
    tongluotphat: 100,
    memory: '0.00GB/32GB',
    isCheck: false,
    img: d4
  }
]

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
    hinhanh: Matem
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
    hinhanh: Love
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
    hinhanh: People
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
    ngayphatplaylist: '8/12/2023 - 10/12/2023',
    batdauketthuc: '11:00:00 - 13:00:00',
    chukyphat: 'Thứ 2 | Thứ 6',
    thietbi: 'Thiết bị 1 | Thiết bị 2 | Thiết bị 3 | Thiết bị 4'
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
    ngayphatplaylist: '8/12/2023 - 10/12/2023',
    batdauketthuc: '11:00:00 - 13:00:00',
    chukyphat: 'Thứ 2 | Thứ 6',
    thietbi: 'Thiết bị 1 | Thiết bị 2 | Thiết bị 3 | Thiết bị 4'
  }
]

const myPartner: PartnerAuthorizer[] = [
  {
    stt: '1',
    hoten: 'Nguyễn Văn A',
    tendangnhap: 'nnnt10122000@gmail.com',
    email: 'nnnt10122000@gmail.com',
    ngayhethan: '20/10/2023',
    sdt: '0123456789',
    vaitro: 'Group Admin',
    ngaycapnhat: '20/12/2023',
    trangthai: true
  },
  {
    stt: '2',
    hoten: 'Nguyễn Văn B',
    tendangnhap: 'nguyenb@gmail.com',
    email: 'nguyenb@gmail.com',
    ngayhethan: '20/10/2023',
    sdt: '0123456789',
    vaitro: 'QC',
    ngaycapnhat: '20/12/2023',
    trangthai: true
  },
  {
    stt: '3',
    hoten: 'Nguyễn Văn C',
    tendangnhap: 'nguyenc@gmail.com',
    email: 'nguyenc@gmail.com',
    ngayhethan: '20/10/2023',
    sdt: '0123456789',
    vaitro: 'License',
    ngaycapnhat: '20/12/2023',
    trangthai: true
  },
  {
    stt: '4',
    hoten: 'Nguyễn Văn D',
    tendangnhap: 'nguyend@gmail.com',
    email: 'nguyend@gmail.com',
    ngayhethan: '20/10/2023',
    sdt: '0123456789',
    vaitro: 'Super Admin',
    ngaycapnhat: '20/12/2023',
    trangthai: false
  }
]

const myCategorySong: CategorySong[] = [
  {
    stt: 1,
    tentheloai: 'Pop',
    mota: 'Nhạc pop là một thể loại của nhạc đương đại và rất phổ biến trong làng nhạc đại chúng.'
  },
  {
    stt: 2,
    tentheloai: 'Bolero',
    mota: 'Quay về với một thời hoa bướm đầy mơ mộng khi nghe các tuyệt phẩm nhạc bolero trữ tình này.'
  },
  {
    stt: 3,
    tentheloai: 'Ballad',
    mota: 'Ballad là dòng nhạc nhẹ nhàng, trữ tình bắt nguồn từ dòng nhạc country và folk vì giai điệu chậm, thong thả. '
  },
  {
    stt: 4,
    tentheloai: 'Lofi',
    mota: 'Lo-fi là một thể loại nhạc trong đó có chứa các yếu tố không hoàn hảo trong quá trình ghi âm và trình diễn.'
  },
  {
    stt: 5,
    tentheloai: 'Blues',
    mota: 'Nhạc Blues có nguồn gốc từ những điệu hát của miền tây Phi Châu được các nô lệ da đen mang sang Bắc Mỹ.'
  },
  {
    stt: 6,
    tentheloai: 'Country',
    mota: 'Nhạc đồng quê là một thể loại nhạc pha trộn truyền thống được tìm thấy phổ biến ở Mỹ và Canada.'
  },
  {
    stt: 7,
    tentheloai: 'Jazz',
    mota: 'Jazz là một thể loại âm nhạc bắt nguồn từ cộng đồng người châu Phi ở Hoa Kỳ vào cuối thế kỷ 19 và đầu thế kỷ 20.'
  },

  {
    stt: 8,
    tentheloai: 'Rock',
    mota: 'Rock là một thể loại âm nhạc quần chúng được bắt nguồn từ cách gọi ngắn gọn của cụm từ "rock and roll" vào những năm 1950 ở Mỹ.'
  }
]

const myConfig: Config[] = [
  {
    stt: 1,
    image: Theme1
  },
  {
    stt: 2,
    image: Theme2
  },
  {
    stt: 3,
    image: Theme3
  },
  {
    stt: 4,
    image: Theme4
  }
]

const myRole: Role[] = [
  {
    stt: 1,
    tennhom: 'Super Admin',
    soluong: 1,
    vaitro: 'System Admin',
    mota: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
  },
  {
    stt: 2,
    tennhom: 'Group Admin',
    soluong: 8,
    vaitro: 'System Admin',
    mota: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
  },
  {
    stt: 3,
    tennhom: 'Sub-user',
    soluong: 30,
    vaitro: 'Super Admin',
    mota: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
  },
  {
    stt: 4,
    tennhom: 'Content Manager',
    soluong: 5,
    vaitro: 'License',
    mota: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
  },
  {
    stt: 5,
    tennhom: 'QC',
    soluong: 5,
    vaitro: 'License',
    mota: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
  }
]

const myIncome: Income[] = [
  {
    stt: 1,
    hopdong: 'HD001',
    nguoiuyquyen: 'Nguyễn Văn A',
    sobaihatuyquyen: 10,
    doanhthu: 100000000,
    hanhchinhphi: 10000000,
    mucnhuanbut: 90000000,
    ngaychot: '20/10/2021',
    tenbaihat: 'Bài hát 1',
    donvikhaithac: 'Nhà sản xuất 1',
    soluotphat: 100,
    thoihanhopdong: '20/10/2021',
    loaihopdong: 'Trọn gói',
    sothietbidongbo: '5/7',
    tongsoluotphat: 100,
    danhsachbaihat: 'Bài hát 1',
    doanhthuchuaphanphoi: 100000000
  },
  {
    stt: 2,
    hopdong: 'HD002',
    nguoiuyquyen: 'Nguyễn Văn B',
    sobaihatuyquyen: 20,
    doanhthu: 200000000,
    hanhchinhphi: 20000000,
    mucnhuanbut: 180000000,
    danhsachbaihat: 'Bài hát 2',
    ngaychot: '20/10/2021',
    tenbaihat: 'Bài hát 1',
    donvikhaithac: 'Nhà sản xuất 1',
    soluotphat: 100,
    thoihanhopdong: '20/10/2021',
    loaihopdong: 'Trọn gói',
    sothietbidongbo: '7/7',
    tongsoluotphat: 100,
    doanhthuchuaphanphoi: 200000000
  },
  {
    stt: 3,
    hopdong: 'HD003',
    nguoiuyquyen: 'Nguyễn Văn C',
    sobaihatuyquyen: 30,
    doanhthu: 300000000,
    danhsachbaihat: 'Bài hát 3',
    hanhchinhphi: 30000000,
    mucnhuanbut: 270000000,
    ngaychot: '20/10/2021',
    tenbaihat: 'Bài hát 1',
    donvikhaithac: 'Nhà sản xuất 1',
    soluotphat: 100,
    thoihanhopdong: '20/10/2021',
    loaihopdong: 'Trọn gói',
    sothietbidongbo: '7/7',
    tongsoluotphat: 100,
    doanhthuchuaphanphoi: 300000000
  },
  {
    stt: 4,
    hopdong: 'HD004',
    nguoiuyquyen: 'Nguyễn Văn D',
    sobaihatuyquyen: 40,
    doanhthu: 400000000,
    hanhchinhphi: 40000000,
    mucnhuanbut: 360000000,
    danhsachbaihat: 'Bài hát 4',
    ngaychot: '20/10/2021',
    tenbaihat: 'Bài hát 1',
    donvikhaithac: 'Nhà sản xuất 1',
    soluotphat: 100,
    thoihanhopdong: '20/10/2021',
    loaihopdong: 'Theo lượt phát',
    sothietbidongbo: '7/7',
    tongsoluotphat: 100,
    doanhthuchuaphanphoi: 400000000
  },
  {
    stt: 5,
    hopdong: 'HD005',
    nguoiuyquyen: 'Nguyễn Văn E',
    sobaihatuyquyen: 50,
    doanhthu: 500000000,
    hanhchinhphi: 50000000,
    mucnhuanbut: 450000000,
    ngaychot: '20/10/2021',
    tenbaihat: 'Bài hát 1',
    donvikhaithac: 'Nhà sản xuất 1',
    soluotphat: 100,
    thoihanhopdong: '20/10/2021',
    loaihopdong: 'Theo lượt phát',
    sothietbidongbo: '7/7',
    tongsoluotphat: 100,
    danhsachbaihat: 'Bài hát 5',
    doanhthuchuaphanphoi: 500000000
  }
]
export { mySong, mySchecule, myDevice, myPartner, myCategorySong, myConfig, myRole, myIncome }
