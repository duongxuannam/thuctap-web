import * as Types from '../constants/ActionTypes';
var initialState = {};

const chiTietTinTuc = (state = initialState, action) => {
    switch (action.type) {
        case Types.CHI_TIET_TIN_TUC:
            state = action.data.data;
            return state;
      
        default: return state;
    }


};

export default chiTietTinTuc;