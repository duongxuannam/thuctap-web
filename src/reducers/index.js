import { combineReducers } from 'redux';
import dataTrangChu from './dataTrangChu';
import chiTietCongViec from './chiTietCongViec';

const appReducers = combineReducers({
   dataTrangChu,
   chiTietCongViec
});

export default appReducers;