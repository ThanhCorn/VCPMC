interface Song {
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
    tenBanGhi: 'Mắt em',
    maISRC: 'KRA0123123',
    thoiLuong: '04:27',
    caSi: 'Phan Mạnh Quỳnh',
    tacGia: 'Phan Mạnh Quỳnh',
    theLoai: 'Ballad',
    dinhDang: 'Audio',
    thoiGianSuDung: 'Còn thời hạn 20/10/2023',
    hinhAnh: './assets/matem.jpg',
  },
  {
    stt: 2,
    tenBanGhi: 'Mắt em',
    maISRC: 'KRA0123124',
    thoiLuong: '04:27',
    caSi: 'Phan Mạnh Quỳnh',
    tacGia: 'Phan Mạnh Quỳnh',
    theLoai: 'Ballad',
    dinhDang: 'Audio',
    thoiGianSuDung: 'Còn thời hạn',
    hinhAnh: './assets/matem.jpg',
  },
];

export { mySong };
