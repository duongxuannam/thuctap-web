import * as Types from '../constants/ActionTypes';
var initialState = [];

const thongBao = (state = initialState, action) => {
    switch (action.type) {
        case Types.THONG_BAO:
            state = action.data.taikhoan.noidungthongbao;
            return [...state];
        default: return [...state];
    }
};

export default thongBao;