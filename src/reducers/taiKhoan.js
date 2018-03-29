import * as Types from '../constants/ActionTypes';
var data = JSON.parse(localStorage.getItem('taikhoan'));
var initialState = data ? data : null;

const taiKhoan = (state = initialState, action) => {
    switch (action.type) {
        case Types.DANG_KY:
            if (action.data && action.data.taikhoan) {
                state = action.data;
                localStorage.setItem('taikhoan', JSON.stringify(state));
            }
            else {
                state = { loi: true }
            }
            return state;
        case Types.DANG_NHAP:
            if (action.data === '') {
                state = { loi: true }
            }
            if (action.data && action.data.thongbao) {
                state = { loi: action.data.thongbao }
            }
            if (action.data !== '') {
                state = action.data;
                localStorage.setItem('taikhoan', JSON.stringify(state));
            }
            return state;
        case Types.CAP_NHAT_THONG_TIN:
            const taikhoan = {
                taikhoan: action.data
            }
            state = taikhoan;
            localStorage.setItem('taikhoan', JSON.stringify(state));
            return state;
        case Types.KICH_HOAT_NHA_TUYEN_DUNG:
            const taikhoanDangKichHoat = {
                taikhoan: action.data
            }
            state = taikhoanDangKichHoat;
            localStorage.setItem('taikhoan', JSON.stringify(state));
            return state;
        case Types.THONG_BAO:
            state = action.data;
            localStorage.setItem('taikhoan', JSON.stringify(state));
            return state;
        case Types.DANG_XUAT:
            state = null;
            localStorage.clear();
            return state;
        default: return state;
    }
};

export default taiKhoan;