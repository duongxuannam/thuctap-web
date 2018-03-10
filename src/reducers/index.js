import { combineReducers } from 'redux';
import dataTrangChu from './dataTrangChu';
import chiTietCongViec from './chiTietCongViec';
import taiKhoan from './taiKhoan';

const appReducers = combineReducers({
   dataTrangChu,
   chiTietCongViec,
   taiKhoan
});

export default appReducers;