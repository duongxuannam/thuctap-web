import * as Types from '../constants/ActionTypes';
var initialState = {
    mang: [],
    sotrang: 1,
    hetdulieu: false,
};

var timViecTrongMang = (id, mang) => {
    var index = -1;
    if (mang.length > 0) {
        for (var i = 0; i < mang.length; i++) {
            if (mang[i]._id === id) {
                index = i;
                break;
            }
        }
    }
    return index;
}

const danhSachCongViecAdmin = (state = initialState, action) => {
    var index = -1;
    var mang = state.mang;
    var hetdulieu = state.hetdulieu;
    var sotrang = state.sotrang;
    switch (action.type) {
        case Types.LAY_DANH_SACH_CONG_VIEC_LAN_DAU_ADMIN:
            if (action.data.thongbao) {
                hetdulieu = true;
                
                return { ...state, hetdulieu }
            }
            hetdulieu = false;
            mang = action.data
            sotrang = 2;
            return { ...state, mang, sotrang, hetdulieu }
        case Types.LAY_DANH_SACH_CONG_VIEC_ADMIN:
            if (action.data.thongbao) {
                hetdulieu = true;
                return { ...state, hetdulieu }
            }
            mang = state.mang.concat(action.data)
            sotrang = state.sotrang + 1;
            return { ...state, mang, sotrang }
        case Types.XOA_CONG_VIEC_ADMIN:
            index = timViecTrongMang(action.data, state.mang);
            mang = state.mang
            if (index !== -1) {
                mang.splice(index, 1);
            }
            return { ...state, mang };
        default: return state;
    }
};

export default danhSachCongViecAdmin;