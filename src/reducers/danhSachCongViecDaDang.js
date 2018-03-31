import * as Types from '../constants/ActionTypes';
var initialState = [];

const danhSachCongViecDaDang = (state = initialState, action) => {
    switch (action.type) {
        case Types.DANH_SACH_CONG_VIEC_DA_DANG:
            state = action.data;
            return [...state];
        case Types.SUA_CONG_VIEC:
            state = action.data;
            return [...state];
        case Types.XOA_CONG_VIEC:
            state = action.data;
            return [...state];
        default: return [...state];
    }
};

export default danhSachCongViecDaDang;