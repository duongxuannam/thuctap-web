import React from 'react';
import TrangChu from './pages/TrangChu/TrangChu';
import DanhSachCongViec from './pages/DanhSachCongViec/DanhSachCongViec';
import ChiTietCongViec from './pages/ChiTietCongViec/ChiTietCongViec';
import DangNhap from './pages/DangNhap/DangNhap';
import DangKy from './pages/DangKy/DangKy';
import QuenMatKhau from './pages/QuenMatKhau/QuenMatKhau';
import ThongTinTaiKhoan from './pages/ThongTinTaiKhoan/ThongTinTaiKhoan';
import TinTuc from './pages/TinTuc/TinTuc';
import ChiTietTinTuc from './pages/ChiTietTinTuc/ChiTietTinTuc';
import LienHe from './pages/LienHe/LienHe';
import ThemCongViec from './pages/ThemCongViec/ThemCongViec';

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
        main: ({match, history}) => <ChiTietCongViec match={match} history={history}/>
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
        exact: false,
        main: ({match, history}) => <ThongTinTaiKhoan match={match} history={history}/>
    },
    {
        path: '/tintuc',
        exact: false,
        main: ({match, history}) => <TinTuc match={match} history={history}/>
    },
    {
        path: '/chitiettintuc',
        exact: false,
        main: ({match, history}) => <ChiTietTinTuc match={match} history={history}/>
    },
    {
        path: '/lienhe',
        exact: false,
        main: ({match, history}) => <LienHe match={match} history={history}/>
    },
    {
        path: '/themcongviec',
        exact: false,
        main: ({match, history}) => <ThemCongViec match={match} history={history}/>
    },
    {
        path: '',
        exact: false,
        main: () => <Loi />
    }
];

export default routes;