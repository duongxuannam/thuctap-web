import * as Types from '../constants/ActionTypes';
var initialState = [];

const dataTinTuc = (state = initialState, action) => {
    switch (action.type) {
        case Types.LAY_DATA_TIN_TUC:
            state = action.data;
            return [...state];
        default: return [...state];
    }
};

export default dataTinTuc;