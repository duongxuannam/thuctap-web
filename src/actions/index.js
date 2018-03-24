import * as Types from '../constants/ActionTypes';
import callApi from '../global/apiCaller';

//-----------------LAY DATA TRANG CHU
export const actLayDataTrangChuAPI = () => {
    return dispatch => {
        return callApi('trangchu', 'GET', null).then(res => {
            dispatch(actLayDataTrangChu(res.data));
        });
    };
}
export const actLayDataTrangChu = (data) => {
    return {
        type : Types.LAY_DATA_TRANG_CHU,
        data
    }
}


//-----------CHI TIET CONG VIEC
export const chiTietCongViecAPI = (id) => {
    return dispatch => {
        return callApi(`congviec/${id}`, 'GET', null).then(res => {
            dispatch(chiTietCongViec(res));
        });
    }
}

export const chiTietCongViec = (data) => {
    return {
        type : Types.CHI_TIET_CONG_VIEC,
        data
    }
}
//-----------UNG TUYEN
export const ungTuyenAPI = (data) => {
    return dispatch => {
        return callApi(`ungtuyen`, 'POST', data).then(res => { 
            dispatch(ungTuyen(res.data));
        }).catch(()=> console.log('loi o dayu ne'));
    }
}

export const ungTuyen = (data) => {
    return {
        type : Types.UNG_TUYEN,
        data
    }
}


//----------DANG TUYEN
export const actDangTuyenAPI = (data) => {
    return dispatch => {
        return callApi(`themcongviec`, 'POST', data).then(res => { 
           console.log('res: ',res);
        }).catch(()=> console.log('loi o dayu ne'));
    }
}


//-----------------LAY DATA TIN TUC
export const actLayDataTinTucAPI = () => {
    return dispatch => {
        return callApi('tintuc', 'GET', null).then(res => {
            dispatch(actLayDataTinTuc(res.data));
        });
    };
}
export const actLayDataTinTuc = (data) => {
    return {
        type : Types.LAY_DATA_TIN_TUC,
        data
    }
}


//-----------CHI TIET CONG VIEC
export const chiTietTinTucAPI = (id) => {
    return dispatch => {
        return callApi(`tintuc/${id}`, 'GET', null).then(res => {
            dispatch(chiTietTinTuc(res));
        });
    }
}

export const chiTietTinTuc = (data) => {
    return {
        type : Types.CHI_TIET_TIN_TUC,
        data
    }
}





//----------DANG TIN TUC
export const actThemTinTucAPI = (data) => {
    console.log('qua met moi', data)
    return dispatch => {
        return callApi(`themtintuc`, 'POST', data).then(res => { 
           console.log('res: ',res);
        }).catch(()=> console.log('loi o dayu ne'));
    }
}

//----------Cap nhat thong tin
export const actCapNhatThongTinAPI = (data) => {
    console.log('qua met moi', data)
    return dispatch => {
        return callApi(`capnhatthongtin`, 'POST', data).then(res => { 
             dispatch(actCapNhatThongTin(res.data));
            console.log('res: ',res);
        }).catch(()=> console.log('loi o dayu ne'));
    }
}
export const actCapNhatThongTin = (data) => {
    return {
        type : Types.CAP_NHAT_THONG_TIN,
        data
    }
}


//----------kich hoat nha tuyen dung
export const actKichHoatNhaTuyenDungAPI = (data) => {
    console.log('qua met moi', data)
    return dispatch => {
        return callApi(`dangkynhatuyendung`, 'POST', data).then(res => { 
             dispatch(actKichHoatNhaTuyenDung(res.data));
            console.log('res: ',res);
        }).catch(()=> console.log('loi o dayu ne'));
    }
}
export const actKichHoatNhaTuyenDung = (data) => {
    return {
        type : Types.KICH_HOAT_NHA_TUYEN_DUNG,
        data
    }
}


//------------------------DANH SÁCH DANG KY NAH TUYEN DUNG
export const actLayDanhSachDangKyNhaTuyenDungAPI = () => {
    return dispatch => {
        return callApi(`danhsachdangkynhatuyendung`,'GET', null).then(res => {
            console.log('huh',res)
            dispatch(actLayDanhSachDangKyNhaTuyenDung(res.data));
        });
    }
}

export const actLayDanhSachDangKyNhaTuyenDung = (data) => {
    return {
        type : Types.LAY_DANH_SACH_DANG_KY_NHA_TUYEN_DUNG,
        data
    }
}


//------------------------DUYET  NHA TUYEN DUNG
export const actDuyetNhaTuyenDungAPI = (id) => {
    return dispatch => {
        return callApi(`duyetnhatuyendung/${id}`,'GET', null).then(res => {
            console.log('huh',res)
            dispatch( actDuyetNhaTuyenDung(res.data));
        });
    }
}

export const  actDuyetNhaTuyenDung = (data) => {
    return {
        type : Types.DUYET_NHA_TUYEN_DUNG,
        data
    }
}


//------------------------LAY THONG TIN TAI KHOAN
export const actLayThongTinTaiKhoanAPI = (id) => {
    return dispatch => {
        return callApi(`laythongtintaikhoan/${id}`,'GET', null).then(res => {
            dispatch( actLayThongTinTaiKhoan(res.data));
        });
    }
}

export const  actLayThongTinTaiKhoan = (data) => {
    return {
        type : Types.LAY_THONG_TIN_TAI_KHOAN,
        data
    }
}
//------------------------DANG KY
export const actDangKyAPI = (data) => {
    return dispatch => {
        return callApi(`dangky`,'POST', data).then(res => {
            dispatch(actDangKy(res.data));
        }).catch(()=> dispatch(actDangKy()));
    }
}

export const actDangKy = (data) => {
    return {
        type : Types.DANG_KY,
        data
    }
}

//------------------------DANG NHAP
export const actDangNhapAPI = (data) => {
    return dispatch => {
        return callApi(`dangnhap`,'POST', data).then(res => {
            dispatch(actDangNhap(res.data));
        });
    }
}

export const actDangNhap = (data) => {
    return {
        type : Types.DANG_NHAP,
        data
    }
}

//------------------------DANG XUAT

export const actDangXuatAPI = () => {
    return {
        type : Types.DANG_XUAT,
    }
}