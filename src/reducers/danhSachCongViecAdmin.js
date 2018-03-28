import * as Types from '../constants/ActionTypes';
var initialState = {
    mang: [],
    sotrang: 1,
    hetdulieu: false,
};

const danhSachCongViecAdmin = (state = initialState, action) => {
    switch (action.type) {
        case Types.LAY_DANH_SACH_CONG_VIEC_LAN_DAU_ADMIN:
            if (action.data.thongbao) {
                var hetdulieu = true;
                return { ...state, hetdulieu }
            }
            var hetdulieu = false;
            var mang = action.data
            var sotrang = 2;
            return { ...state, mang, sotrang, hetdulieu }
        case Types.LAY_DANH_SACH_CONG_VIEC_ADMIN:
            if (action.data.thongbao) {
                var hetdulieu = true;
                return { ...state, hetdulieu }
            }
            var mang = state.mang.concat(action.data)
            var sotrang = state.sotrang + 1;
            return { ...state, mang, sotrang }
        default: return state;
    }
};

export default danhSachCongViecAdmin;