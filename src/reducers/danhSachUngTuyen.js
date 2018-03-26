import * as Types from '../constants/ActionTypes';
var initialState = {};

const danhSachUngTuyen = (state = initialState, action) => {
    switch (action.type) {
        case Types.DANH_SACH_UNG_TUYEN:
        console.log(action.data)
            state = action.data;
            return state;
        default: return state;
    }
};

export default danhSachUngTuyen;