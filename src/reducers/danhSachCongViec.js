import * as Types from '../constants/ActionTypes';
var initialState = [];

const danhSachCongViec = (state = initialState, action) => {
    switch (action.type) {
        case Types.LAY_DANH_SACH_CONG_VIEC:
            state = action.data;
            return [...state];
        default: return [...state];
    }
};

export default danhSachCongViec;