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

//-----------SỬA CÔNG VIỆC
export const actSuaCongViecAPI = (data) => {
    return dispatch => {
        return callApi(`suacongviec`, 'POST', data).then(res => {
            console.log('aaa', res)
            dispatch(actSuaCongViec(res.data));
        });
    }
}

export const actSuaCongViec = (data) => {
    return {
        type : Types.SUA_CONG_VIEC,
        data
    }
}

//-----------SỬA Tin TUC
export const actSuaTinTucAPI = (data) => {
    return dispatch => {
        return callApi(`suatintuc`, 'POST', data).then(res => {
            console.log('aaa', res)
            dispatch(actSuaTinTuc(res.data));
        });
    }
}

export const actSuaTinTuc = (data) => {
    return {
        type : Types.SUA_TIN_TUC,
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


//-----------------LAY DATA DANH SÁCH CÔNG VIỆC
export const actLayDanhSachCongViecAPI = (sotrang) => {
    if(sotrang === 1){
        return dispatch => {
            return callApi(`danhsachcongviec/${sotrang}`, 'GET', null).then(res => {
                dispatch(actLayDanhSachCongViecLanDau(res.data));
            });
        };
    }
    return dispatch => {
        return callApi(`danhsachcongviec/${sotrang}`, 'GET', null).then(res => {
            dispatch(actLayDanhSachCongViec(res.data));
        });
    };
  
}
export const actLayDanhSachCongViec = (data) => {
    return {
        type : Types.LAY_DANH_SACH_CONG_VIEC,
        data
    }
}
export const actLayDanhSachCongViecLanDau = (data) => {
    return {
        type : Types.LAY_DANH_SACH_CONG_VIEC_LAN_DAU,
        data
    }
}

//-----------------TIM KIEM CÔNG VIỆC trang chu
export const actTimKiemCongViecAPI = (data) => {
    // console.log(data)
    return dispatch => {
        console.log(data)
         return callApi(`timviectrangchu/`, 'POST', data).then(res => {
             dispatch(actTimKiemCongViec(res.data));
         });
    };
}
export const actTimKiemCongViec = (data) => {
    return {
        type : Types.TIM_KIEM_CONG_VIEC,
        data
    }
}

//-----------------TIM KIEM CÔNG VIỆC trang danh sach
export const actTimKiemTrangDanhSachAPI = (data) => {
     console.log('tim lan may ', data.sotrang)
     if(data.sotrang === 1){
        return dispatch => {
            console.log(data)
             return callApi(`timviectrangdanhsach/`, 'POST', data).then(res => {
                 dispatch(actTimKiemLanDauTrangDanhSach(res.data));
             });
        };
     }
    return dispatch => {
        console.log(data)
         return callApi(`timviectrangdanhsach/`, 'POST', data).then(res => {
             dispatch(actTimKiemTrangDanhSach(res.data));
         });
    };
}
export const actTimKiemTrangDanhSach = (data) => {
    return {
        type : Types.TIM_KIEM_CONG_VIEC_TRANG_DANH_SACH,
        data
    }
}
export const actTimKiemLanDauTrangDanhSach = (data) => {
    return {
        type : Types.TIM_KIEM_CONG_VIEC_LAN_DAU_TRANG_DANH_SACH,
        data
    }
}


//-----------CHI TIET tin tuwc
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

//-----------------LAY  DANH SÁCH TIN TỨC ĐẪ ĐĂNG
export const actLayDanhSachTinTucDaDangAPI = (id) => {
    return dispatch => {
        return callApi(`danhsachtintucdadang/${id}`, 'GET', null).then(res => {
            dispatch(actLayDanhSachTinTucDaDang(res.data));
        });
    };
}
export const actLayDanhSachTinTucDaDang = (data) => {
    return {
        type : Types.DANH_SACH_TIN_TUC_DA_DANG,
        data
    }
}

//-----------------Xóa TIN TỨC 
export const actXoaTinTucAPI = (id) => {
    return dispatch => {
        return callApi(`xoatintuc/${id}`, 'GET', null).then(res => {
            dispatch(actXoaTinTuc(res.data));
        });
    };
}
export const actXoaTinTuc = (data) => {
    return {
        type : Types.XOA_TIN_TUC,
        data
    }
}

//-----------------LAY  DANH SÁCH CÔNG VIỆC ĐẪ ĐĂNG
export const actLayDanhSachCongViecDaDangAPI = (id) => {
    return dispatch => {
        return callApi(`danhsachcongviecdadang/${id}`, 'GET', null).then(res => {
            dispatch(actLayDanhSachCongViecDaDang(res.data));
        });
    };
}
export const actLayDanhSachCongViecDaDang = (data) => {
    return {
        type : Types.DANH_SACH_CONG_VIEC_DA_DANG,
        data
    }
}

//-----------------LAY  DANH SÁCH CÔNG VIỆC ĐẪ NỘP
export const actLayDanhSachCongViecDaNopAPI = (id) => {
    return dispatch => {
        return callApi(`danhsachcongviecdanop/${id}`, 'GET', null).then(res => {
            dispatch(actLayDanhSachCongViecDaNop(res.data));
        });
    };
}
export const actLayDanhSachCongViecDaNop = (data) => {
    return {
        type : Types.DANH_SACH_CONG_VIEC_DA_NOP,
        data
    }
}



//-----------------LAY  DANH SÁCH DA UNG TUYEN
export const actLayDanhSachDaUngTuyenAPI = (id) => {
    return dispatch => {
        return callApi(`danhsachungtuyen/${id}`, 'GET', null).then(res => {
            dispatch(actLayDanhSachDaUngTuyen(res.data));
        });
    };
}
export const actLayDanhSachDaUngTuyen = (data) => {
    return {
        type : Types.DANH_SACH_UNG_TUYEN,
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


//------------------------DANH SÁCH TÀI KHOẢN
export const actLayDanhSachTaiKhoanAPI = () => {
    return dispatch => {
        return callApi(`danhsachtaikhoan`,'GET', null).then(res => {
            console.log('huh',res)
            dispatch(actLayDanhSachTaiKhoan(res.data));
        });
    }
}

export const actLayDanhSachTaiKhoan = (data) => {
    return {
        type : Types.LAY_DANH_SACH_TAI_KHOAN,
        data
    }
}


//-----------------Sủa KHÓA
export const actSuaKhoaAPI = (id) => {
    return dispatch => {
        return callApi(`xoatintuc/${id}`, 'GET', null).then(res => {
            dispatch(actSuaKhoa(res.data));
        });
    };
}
export const actSuaKhoa = (data) => {
    return {
        type : Types.SUA_KHOA,
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