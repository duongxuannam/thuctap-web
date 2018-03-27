import * as Types from '../constants/ActionTypes';
var initialState = [];

const danhSachCongViecDaNop = (state = initialState, action) => {
    switch (action.type) {
        case Types.DANH_SACH_CONG_VIEC_DA_NOP:
            state = action.data;
            return [...state];
        default: return [...state];
    }
};

export default danhSachCongViecDaNop;