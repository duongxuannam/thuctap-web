import React from 'react';
import TrangChu from './pages/TrangChu/TrangChu';
import DanhSachCongViec from './pages/DanhSachCongViec/DanhSachCongViec';
import ChiTietCongViec from './pages/ChiTietCongViec/ChiTietCongViec';
import DangNhap from './pages/DangNhap/DangNhap';
import DangKy from './pages/DangKy/DangKy';
import QuenMatKhau from './pages/QuenMatKhau/QuenMatKhau';
import DoiMatKhau from './pages/DoiMatKhau/DoiMatKhau';
import ThongTinTaiKhoan from './pages/ThongTinTaiKhoan/ThongTinTaiKhoan';
import TinTuc from './pages/TinTuc/TinTuc';
import ChiTietTinTuc from './pages/ChiTietTinTuc/ChiTietTinTuc';
import LienHe from './pages/LienHe/LienHe';
import ThemCongViec from './pages/ThemCongViec/ThemCongViec';
import CongViecDaDang from './pages/CongViecDaDang/CongViecDaDang';
import CongViecDaNop from './pages/CongViecDaNop/CongViecDaNop';
import TinTucDaDang from './pages/TinTucDaDang/TinTucDaDang';
import DanhSachUngTuyen from './pages/DanhSachUngTuyen/DanhSachUngTuyen';
import ThemTinTuc from './pages/ThemTinTuc/ThemTinTuc';
import NhaTuyenDung from './pages/NhaTuyenDung/NhaTuyenDung';
import KichHoatNhaTuyenDung from './pages/KichHoatNhaTuyenDung/KichHoatNhaTuyenDung';
import QuanLy from './pages/QuanLy/QuanLy';
import ThongTinNhaTuyenDung from './pages/ThongTinNhaTuyenDung/ThongTinNhaTuyenDung';
import ChiTietTaiKhoan from './pages/ChiTietTaiKhoan/ChiTietTaiKhoan';
import SuaCongViec from './pages/SuaCongViec/SuaCongViec';
import SuaTinTuc from './pages/SuaTinTuc/SuaTinTuc';
import QuanLyTinTuc from './pages/QuanLyTinTuc/QuanLyTinTuc';
import QuanLyThanhVien from './pages/QuanLyThanhVien/QuanLyThanhVien';
import QuanLyCongViec from './pages/QuanLyCongViec/QuanLyCongViec';
import Khoa from './pages/Khoa/Khoa';
import ThongBao from './pages/ThongBao/ThongBao';
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
        main: ({ match, history }) => <ChiTietCongViec match={match} history={history} />
    },
    {
        path: '/dangnhap',
        exact: false,
        main: ({ match, history }) => <DangNhap match={match} history={history} />
    },
    {
        path: '/dangky',
        exact: false,
        main: ({ match, history }) => <DangKy match={match} history={history} />
    },
    {
        path: '/quenmatkhau',
        exact: false,
        main: ({ match, history }) => <QuenMatKhau match={match} history={history} />
    },
    {
        path: '/doimatkhau',
        exact: false,
        main: ({ match, history }) => <DoiMatKhau match={match} history={history} />
    },
    {
        path: '/thongtintaikhoan',
        exact: false,
        main: ({ match, history }) => <ThongTinTaiKhoan match={match} history={history} />
    },
    {
        path: '/tintuc',
        exact: false,
        main: ({ match, history }) => <TinTuc match={match} history={history} />
    },
    {
        path: '/chitiettintuc/:id',
        exact: false,
        main: ({ match, history }) => <ChiTietTinTuc match={match} history={history} />
    },
    {
        path: '/lienhe',
        exact: false,
        main: ({ match, history }) => <LienHe match={match} history={history} />
    },
    {
        path: '/themcongviec',
        exact: false,
        main: ({ match, history }) => <ThemCongViec match={match} history={history} />
    },
    {
        path: '/congviecdadang',
        exact: false,
        main: ({ match, history }) => <CongViecDaDang match={match} history={history} />
    },
    {
        path: '/congviecdanop',
        exact: false,
        main: ({ match, history }) => <CongViecDaNop match={match} history={history} />
    },
    {
        path: '/suacongviec/:id',
        exact: false,
        main: ({ match, history }) => <SuaCongViec match={match} history={history} />
    },
    {
        path: '/tintucdadang',
        exact: false,
        main: ({ match, history }) => <TinTucDaDang match={match} history={history} />
    },
    {
        path: '/suatintuc/:id',
        exact: false,
        main: ({ match, history }) => <SuaTinTuc match={match} history={history} />
    },
    {
        path: '/danhsachungtuyen/:id',
        exact: false,
        main: ({ match, history }) => <DanhSachUngTuyen match={match} history={history} />
    },
    {
        path: '/themtintuc',
        exact: false,
        main: ({ match, history }) => <ThemTinTuc match={match} history={history} />
    },
    {
        path: '/nhatuyendung',
        exact: false,
        main: ({ match, history }) => <NhaTuyenDung match={match} history={history} />
    },
    {
        path: '/quanly',
        exact: false,
        main: ({ match, history }) => <QuanLy match={match} history={history} />
    },
    {
        path: '/kichhoatnhatuyendung',
        exact: false,
        main: ({ match, history }) => <KichHoatNhaTuyenDung match={match} history={history} />
    },
    {
        path: '/thongtinnhatuyendung/:id',
        exact: false,
        main: ({ match, history }) => <ThongTinNhaTuyenDung match={match} history={history} />
    },
    {
        path: '/chitiettaikhoan/:id',
        exact: false,
        main: ({ match, history }) => <ChiTietTaiKhoan match={match} history={history} />
    },
    {
        path: '/quanlytintuc',
        exact: false,
        main: ({ match, history }) => <QuanLyTinTuc match={match} history={history} />
    },
    {
        path: '/quanlythanhvien',
        exact: false,
        main: ({ match, history }) => <QuanLyThanhVien match={match} history={history} />
    },
    {
        path: '/quanlycongviec',
        exact: false,
        main: ({ match, history }) => <QuanLyCongViec match={match} history={history} />
    },
    {
        path: '/khoa', 
        exact: false,
        main: () => <Khoa />
    },
    {
        path: '/thongbao', 
        exact: false,
        main: () => <ThongBao />
    },
    {
        path: '',
        exact: false,
        main: () => <Loi />
    }
];

export default routes;