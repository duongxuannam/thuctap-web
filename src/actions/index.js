import * as Types from '../constants/ActionTypes';
import callApi from '../global/apiCaller';

//-----------------LAY DATA TRANG CHU
export const layDataTrangChuAPI = () => {
    return dispatch => {
        return callApi('trangchu', 'GET', null).then(res => {
            dispatch(layDataTrangChu(res.data));
        });
    };
}
export const layDataTrangChu = (data) => {
    return {
        type : Types.LAY_DATA_TRANG_CHU,
        data
    }
}


//-----------CHI TIET CONG VIEC
export const chiTietCongViecAPI = (id) => {
    return dispatch => {
        return callApi(`congviec/${id}`, 'GET', null).then(res => {
            dispatch(chiTietCongViec(res));
        });
    }
}

export const chiTietCongViec = (data) => {
    return {
        type : Types.CHI_TIET_CONG_VIEC,
        data
    }
}
