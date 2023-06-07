export interface Song {
  stt?: number
  tenBanGhi?: string
  maISRC?: string
  thoiLuong?: string
  caSi?: string
  tacGia?: string
  theLoai?: string
  dinhDang?: string
  thoiGianSuDung?: string
  hinhAnh?: string // Thêm trường hình ảnh
}

export interface Schecule {
  stt: number
  tenlich: string
  thoigian: string
  tenplaylist?: string
  ngayphatplaylist?: string
  batdauketthuc?: string
  chukyphat?: string
  thietbi?: string
  thoiluong?: string
  sobanghi?: string
  chude?: string[]
  ngaytao?: string
  nguoitao?: string
  hinhanh?: string
}

export interface Device {
  stt: string
  tenthietbi: string
  MACAdress: string
  SKUID: string
  donvisudung: string
  tendangnhap: string
  diadiem: string
  trangthai?: boolean
  thoigiandongbo: string
  tongluotphat: number
  memory: string
  isCheck?: boolean
  img: string
}

export interface PartnerAuthorizer {
  stt: string
  hoten: string
  tendangnhap: string
  email: string
  ngayhethan: string
  sdt: string
  trangthai: boolean
  vaitro: string
  ngaycapnhat: string
}

export interface CategorySong {
  stt: number
  tentheloai: string
  mota: string
  length?: number
}

export interface Config {
  stt: number
  image: string
}

export interface Role {
  stt: number
  tennhom: string
  soluong: number
  vaitro: string
  mota: string
}

export interface Income {
  stt: number
  hopdong: string
  nguoiuyquyen: string
  sobaihatuyquyen: number
  doanhthu: number
  hanhchinhphi: number
  mucnhuanbut: number
  ngaychot: string
  tenbaihat: string
  donvikhaithac: string
  soluotphat: number
  thoihanhopdong: string
  loaihopdong: string
  sothietbidongbo: string
  tongsoluotphat: number
  danhsachbaihat: string
  doanhthuchuaphanphoi: number
}
