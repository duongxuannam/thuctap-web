import * as Types from '../constants/ActionTypes';
var initialState = {};

const taiKhoanDuocChon = (state = initialState, action) => {
    switch (action.type) {
        case Types.LAY_THONG_TIN_TAI_KHOAN:
            state = action.data;
            return state;
      
        default: return state;
    }


};

export default taiKhoanDuocChon;