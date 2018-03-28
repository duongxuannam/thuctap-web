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
import danhSachTinTucDaDang from './danhSachTinTucDaDang';
import danhSachCongViecDaNop from './danhSachCongViecDaNop';
import danhSachUngTuyen from './danhSachUngTuyen';
import danhSachTaiKhoan from './danhSachTaiKhoan';
import danhSachTinTuc from './danhSachTinTuc';
import danhSachCongViecAdmin from './danhSachCongViecAdmin';

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
   danhSachTinTucDaDang,
   danhSachCongViecDaNop,
   danhSachTaiKhoan,
   danhSachTinTuc,
   danhSachCongViecAdmin
});

export default appReducers;