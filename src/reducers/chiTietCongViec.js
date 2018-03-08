import * as Types from '../constants/ActionTypes';
var initialState = { };

const chiTietCongViec = (state = initialState, action) => {
    switch (action.type) {
        case Types.CHI_TIET_CONG_VIEC:
            state = action.data.data;
            return state;
        default: return state;
    }
};

export default chiTietCongViec;