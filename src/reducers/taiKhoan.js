import * as Types from '../constants/ActionTypes';
var data = JSON.parse(localStorage.getItem('taikhoan'));
var initialState = data ? data : null;

const taiKhoan = (state = initialState, action) => {
    switch (action.type) {
        case Types.DANG_KY:
        console.log('vo day hem:', action)
        if (action.data && action.data.taikhoan) {
            console.log('vo if hem: ', action)
            state = action.data;
            localStorage.setItem('taikhoan', JSON.stringify(state));
        }
        else{
            console.log('vo else hem: ', action)
            state = { loi: true }
        }
        return state;
        case Types.DANG_NHAP:
            if (action.data === '') {
                state = { loi: true }
            }
            if (action.data !== '') {
                state = action.data;
                localStorage.setItem('taikhoan', JSON.stringify(state));
            }
            return state;
        case Types.DANG_XUAT:
            state = null;
            localStorage.clear();
            return state;
        default: return state;
    }
};

export default taiKhoan;