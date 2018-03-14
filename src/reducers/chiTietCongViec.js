import * as Types from '../constants/ActionTypes';
var initialState = {};

const chiTietCongViec = (state = initialState, action) => {
    switch (action.type) {
        case Types.CHI_TIET_CONG_VIEC:
            state = action.data.data;
            return state;
        case Types.UNG_TUYEN:
        const idUngTuyen = JSON.parse(localStorage.getItem('taikhoan')).taikhoan._id
        const _danhsachungtuyen = state._danhsachungtuyen
        _danhsachungtuyen.push(idUngTuyen)
        return{
            ...state,
            _danhsachungtuyen
        };
      
        default: return state;
    }


};

export default chiTietCongViec;