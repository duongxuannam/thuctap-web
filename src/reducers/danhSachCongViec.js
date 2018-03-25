import * as Types from '../constants/ActionTypes';
var initialState = {
    mang: [],
    sotrang: 1,
    hetdulieu: false
};

const danhSachCongViec = (state = initialState, action) => {
    switch (action.type) {
        case Types.LAY_DANH_SACH_CONG_VIEC:
            if (action.data.thongbao) {
                const hetdulieu = true;
                return { ...state, hetdulieu }
            }
            const mang = state.mang.concat(action.data)
            const sotrang = state.sotrang + 1;
            return { ...state, mang, sotrang }
        case Types.TIM_KIEM_CONG_VIEC:
        console.log('ra day ', action.data)
        default: return state;
    }
};

export default danhSachCongViec;