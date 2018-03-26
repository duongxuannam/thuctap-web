import { combineReducers } from 'redux';
import dataTrangChu from './dataTrangChu';
import chiTietCongViec from './chiTietCongViec';
import taiKhoan from './taiKhoan';
import dataTinTuc from './dataTinTuc';
import chiTietTinTuc from './chiTietTinTuc';
import danhSachDangKyNhaTuyenDung from './danhSachDangKyNhaTuyenDung';
import taiKhoanDuocChon from './taiKhoanDuocChon';
import danhSachCongViec from './danhSachCongViec';
import danhSachCongViecDaDang from './danhSachCongViecDaDang';
import danhSachUngTuyen from './danhSachUngTuyen';

const appReducers = combineReducers({
   dataTrangChu,
   chiTietCongViec,
   taiKhoan,
   dataTinTuc,
   chiTietTinTuc,
   danhSachDangKyNhaTuyenDung,
   taiKhoanDuocChon,
   danhSachCongViec,
   danhSachCongViecDaDang,
   danhSachUngTuyen,
});

export default appReducers;