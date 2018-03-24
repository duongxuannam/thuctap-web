import * as Types from '../constants/ActionTypes';
var initialState = [];

const danhSachDangKyNhaTuyenDung = (state = initialState, action) => {
    switch (action.type) {
        case Types.LAY_DANH_SACH_DANG_KY_NHA_TUYEN_DUNG:
            state = action.data;
            return [...state];
            case Types.DUYET_NHA_TUYEN_DUNG:
            state = action.data;
            return [...state];
        default: return state;
    }
};

export default danhSachDangKyNhaTuyenDung;