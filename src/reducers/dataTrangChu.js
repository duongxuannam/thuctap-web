import * as Types from '../constants/ActionTypes';
var initialState = [];

const dataTrangChu = (state = initialState, action) => {
    switch (action.type) {
        case Types.LAY_DATA_TRANG_CHU:
            state = action.data;
            return [...state];
        default: return [...state];
    }
};

export default dataTrangChu;