import * as Types from '../constants/ActionTypes';
var initialState = {
    mang: [],
    sotrang: 1,
    hetdulieu: false,
    dangTimKiem: false,
};

const danhSachCongViec = (state = initialState, action) => {
    var {mang, sotrang, hetdulieu, dangTimKiem} = state.mang;
    
    switch (action.type) {
        case Types.LAY_DANH_SACH_CONG_VIEC_LAN_DAU:
            if (action.data.thongbao) {
                 hetdulieu = true;
                return { ...state, hetdulieu }
            }
             hetdulieu = false;
            dangTimKiem = false;
             mang = action.data
             sotrang = 2;
            return { ...state, mang, sotrang, hetdulieu, dangTimKiem }
        case Types.LAY_DANH_SACH_CONG_VIEC:
            if (action.data.thongbao) {
                 hetdulieu = true;
                return { ...state, hetdulieu }
            }
             mang = state.mang.concat(action.data)
             sotrang = state.sotrang + 1;
            return { ...state, mang, sotrang }
        case Types.TIM_KIEM_CONG_VIEC:
           // console.log('dât', action.data)
            if (action.data.thongbao) {
                 hetdulieu = true;
                 mang = []
                return { ...state, mang, hetdulieu }
            }
             mang = action.data
             hetdulieu = true;
            return { ...state, mang, hetdulieu }
        case Types.TIM_KIEM_CONG_VIEC_TRANG_DANH_SACH:
            //console.log('nhuc dua', action.data)
            if (action.data.thongbao) {
                 hetdulieu = true;
                return { ...state, hetdulieu }
            }
            if (state.dangTimKiem) {
                 mang = state.mang.concat(action.data)
                 sotrang = state.sotrang + 1;
                return { ...state, mang, sotrang }
            }
             mang = action.data;
             dangTimKiem = true
             hetdulieu = false;
             sotrang = 2;
            return { ...state, mang, hetdulieu, dangTimKiem, sotrang }
        case Types.TIM_KIEM_CONG_VIEC_LAN_DAU_TRANG_DANH_SACH:
           // console.log('lan dau trang danh sach', action.data)
            if (action.data.thongbao) {
                 hetdulieu = true;
                 mang = []
                return { ...state, mang, hetdulieu }
            }

             mang = action.data;
             dangTimKiem = true
             hetdulieu = false;
             sotrang = 2;
            return { ...state, mang, hetdulieu, dangTimKiem, sotrang }
        default: return state;
    }
};

export default danhSachCongViec;