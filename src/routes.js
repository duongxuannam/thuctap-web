import React from 'react';
import TrangChu from './pages/TrangChu/TrangChu';
import DanhSachCongViec from './pages/DanhSachCongViec/DanhSachCongViec';
import ChiTiecCongViec from './pages/ChiTiecCongViec/ChiTiecCongViec';
import DangNhap from './pages/DangNhap/DangNhap';
import DangKy from './pages/DangKy/DangKy';
import QuenMatKhau from './pages/QuenMatKhau/QuenMatKhau';
import ThongTinTaiKhoan from './pages/ThongTinTaiKhoan/ThongTinTaiKhoan';

import Loi from './pages/Loi/Loi';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <TrangChu />
    },
    {
        path: '/danhsachcongviec',
        exact: false,
        main: () => <DanhSachCongViec />
    },
    {
        path: '/chitietcongviec/:id',
        exact: false,
        main: ({match, history}) => <ChiTiecCongViec match={match} history={history}/>
    },
    {
        path: '/dangnhap',
        exact: false,
        main: ({match, history}) => <DangNhap match={match} history={history}/>
    },
    {
        path: '/dangky',
        exact: false,
        main: ({match, history}) => <DangKy match={match} history={history}/>
    },
    {
        path: '/quenmatkhau',
        exact: false,
        main: ({match, history}) => <QuenMatKhau match={match} history={history}/>
    },
    {
        path: '/thongtintaikhoan',
        exact: true,
        main: ({match, history}) => <ThongTinTaiKhoan match={match} history={history}/>
    },
    {
        path: '',
        exact: false,
        main: () => <Loi />
    }
];

export default routes;