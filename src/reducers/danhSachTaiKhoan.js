import * as Types from '../constants/ActionTypes';
var initialState = [];

const danhSachDangTaiKhoan = (state = initialState, action) => {
    switch (action.type) {
        case Types.LAY_DANH_SACH_TAI_KHOAN:
            state = action.data;
            return [...state];
        case Types.SUA_KHOA:
            state = action.data;
            return [...state];
        default: return state;
    }
};

export default danhSachDangTaiKhoan;