import * as Types from '../constants/ActionTypes';
var initialState = [];

const danhSachTinTucDaDang = (state = initialState, action) => {
    switch (action.type) {
        case Types.DANH_SACH_TIN_TUC_DA_DANG:
            state = action.data;
            return [...state];
        case Types.SUA_TIN_TUC:
            state = action.data;
            return [...state];
        case Types.XOA_TIN_TUC:
            state = action.data;
            return [...state];
        default: return [...state];
    }
};

export default danhSachTinTucDaDang;