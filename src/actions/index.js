import * as Types from '../constants/ActionTypes';
import callApi from '../global/apiCaller';

//-----------------LAY DATA TRANG CHU
export const actLayDataTrangChuAPI = () => {
    return dispatch => {
        return callApi('trangchu', 'GET', null).then(res => {
            dispatch(actLayDataTrangChu(res.data));
        });
    };
}
export const actLayDataTrangChu = (data) => {
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

//------------------------DANG NHAP
export const actDangNhapAPI = (data) => {
    return dispatch => {
        return callApi(`dangnhap`,'POST', data).then(res => {
            dispatch(actDangNhap(res.data));
        });
    }
}

export const actDangNhap = (data) => {
    return {
        type : Types.DANG_NHAP,
        data
    }
}

//------------------------DANG XUAT

export const actDangXuatAPI = () => {
    return {
        type : Types.DANG_XUAT,
    }
}