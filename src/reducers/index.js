import { combineReducers } from 'redux';
import dataTrangChu from './dataTrangChu';
import chiTietCongViec from './chiTietCongViec';
import taiKhoan from './taiKhoan';
import dataTinTuc from './dataTinTuc';
import chiTietTinTuc from './chiTietTinTuc';

const appReducers = combineReducers({
   dataTrangChu,
   chiTietCongViec,
   taiKhoan,
   dataTinTuc,
   chiTietTinTuc
});

export default appReducers;