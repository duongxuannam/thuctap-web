import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import io from 'socket.io-client';
import { connect } from 'react-redux';
import { actDangXuatAPI, actKiemTraDangNhapAPI } from '../actions/index';

const menus = [
    {
        name: 'Trang Chủ',
        to: '/',
        exact: true
    },
    {
        name: 'Công việc',
        to: '/danhsachcongviec',
        exact: false
    },
    {
        name: 'Thêm công việc',
        to: '/themcongviec',
        exact: false
    },
    {
        name: 'Tin tức',
        to: '/tintuc',
        exact: false
    },
    // {
    //     name: 'Thông tin',
    //     to: '/thongtin',
    //     exact: false
    // },
    {
        name: 'Liên hệ',
        to: '/lienhe',
        exact: false
    }
];
const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => {
                var current = match ? 'current' : '';
                return (
                    <li className={current}>
                        <Link to={to}>
                            {label}
                        </Link>
                    </li>
                );
            }}
        />
    );
};
const logo = require('../images/logotdmu.png');
var e;
class Header extends Component {
    constructor(props) {
        super(props);
        e = this
        this.socket = io('https://apimongo.herokuapp.com/')
        // this.socket.on('Server-send-id', function (text) {
        //   console.log('aaaa', text)
        //   });
        this.socket.on('CO_NGUOI_UNG_TUYEN', function (_id) {
            if (e.props.taiKhoan && e.props.taiKhoan.taikhoan && e.props.taiKhoan.taikhoan._id === _id) {
                e.props.actKiemTraDangNhap(_id);
                alert('Có người vừa ứng tuyển công việc mà bạn đăng');

            }
        });
        this.socket.on('TAI_KHOAN_DA_DUOC_KICH_HOAT', function (_id) {
            if (e.props.taiKhoan && e.props.taiKhoan.taikhoan && e.props.taiKhoan.taikhoan._id === _id) {
                e.props.actKiemTraDangNhap(_id);
                alert('Tài khoản của bạn đã được kích hoạt nhà tuyển dụng');

            }
        });
        this.socket.on('TAI_KHOAN_DA_BI_KHOA', function (_id) {
            if (e.props.taiKhoan && e.props.taiKhoan.taikhoan && e.props.taiKhoan.taikhoan._id === _id) {
                e.props.actDangXuat();
                alert('Tài khoản của bạn đã bị khóa');

            }
        });
    }
    componentDidMount() {
        const _id = JSON.parse(localStorage.getItem('taikhoan')) && JSON.parse(localStorage.getItem('taikhoan')).taikhoan && JSON.parse(localStorage.getItem('taikhoan')).taikhoan._id ? JSON.parse(localStorage.getItem('taikhoan')).taikhoan._id : '';
        if (_id) {
            return this.props.actKiemTraDangNhap(_id);
        }
    }
    logOut = () => {
        this.props.actDangXuat();
    }
    showMenus = (menus) => {
        var result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink
                        key={index}
                        label={menu.name}
                        to={menu.to}
                        activeOnlyWhenExact={menu.exact}
                    />
                );
            });
        }
        return result;
    }

    render() {
        var hienThiTen = '';
        if (this.props.taiKhoan && this.props.taiKhoan.taikhoan) {
            hienThiTen = (<a class='contro'>{this.props.taiKhoan.taikhoan.hoten}</a>)
        }
        const admin = (
            <React.Fragment>

                <li>
                    <Link to={`/quanly`}>
                        <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
                        Đăng ký NTD
            </Link>
                </li>

                <li>
                    <Link to={`/quanlythanhvien`}>
                        <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
                        Danh sách tài khoản
            </Link>
                </li>

                <li>
                    <Link to={`/quanlycongviec`}>
                        <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
                        Danh sách công việc
            </Link>
                </li>

                <li>
                    <Link to={`/quanlytintuc`}>
                        <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
                        Danh sách tin tức
            </Link>
                </li>
            </React.Fragment>
        )
        const chuaDangNhap = (
            <div class="bar">
                <div class="container">
                    <ul>
                        <li>
                            <Link to={`/dangnhap`}>Đăng nhập</Link>
                        </li>
                        <li>
                            <Link to={`/dangky`}>Đăng ký</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
        const nguoiDung = (
            <React.Fragment>
                <li>
                    <Link to={`/thongtintaikhoan`}>
                        <span class="glyphicon glyphicon-user" aria-hidden="true"></span>
                        Thông tin tài khoản
            </Link>
                </li>
                <li>
                                    <Link to={`/nhatuyendung`}>
                                        <span class="glyphicon glyphicon-object-align-vertical" aria-hidden="true"></span>
                                        Nhà tuyển dụng
                                    </Link>
                                </li>
                <li>
                    <Link to={`/congviecdanop`}>
                        <span class="glyphicon glyphicon-briefcase" aria-hidden="true"></span> Công việc đã nộp</Link>
                </li>
                <li>
                    <Link to={`/thongbao`}>
                        <span class="glyphicon glyphicon-bell" aria-hidden="true"></span>
                        Thông báo
                                    </Link>
                </li>

            </React.Fragment>
        );
        const nhaTuyenDung = (
            <React.Fragment>
                  <li>
                                    <Link to={`/nhatuyendung`}>
                                        <span class="glyphicon glyphicon-object-align-vertical" aria-hidden="true"></span>
                                        Nhà tuyển dụng
                                    </Link>
                                </li>
                <li>
                    <Link to={`/congviecdadang`}>
                        <span class="glyphicon glyphicon-briefcase" aria-hidden="true"></span> Công việc đã đăng</Link>
                </li>

                <li>
                    <Link to={`/tintucdadang`}>
                        <span class="glyphicon glyphicon-list-alt" aria-hidden="true"></span> Tin tức đã đăng</Link>
                </li>

                {this.props.taiKhoan && this.props.taiKhoan.taikhoan && this.props.taiKhoan.taikhoan.admin ? admin : <li> <Link to={`/thongbao`}>
                    <span class="glyphicon glyphicon-bell" aria-hidden="true"></span>
                    Thông báo
                                    </Link></li>}

            </React.Fragment>

        );
        const menuCuoiCung = this.props.taiKhoan && this.props.taiKhoan.taikhoan && this.props.taiKhoan.taikhoan.kichhoatnhatuyendung ? nhaTuyenDung : nguoiDung
        const daDangNhap = (
            <div class="bar">
                <div class="container">
                    <ul>
                        {this.props.taiKhoan && this.props.taiKhoan.taikhoan && this.props.taiKhoan.taikhoan.thongbao ? <Link to={`/thongbao`} class='red-color'><span class="glyphicon glyphicon-bell" ></span></Link> : ''}

                        <li class="dropdown">
                            <span class="dropdown-toggle user" type="button" id="barDropdown1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                <img src={this.props.taiKhoan && this.props.taiKhoan.taikhoan && this.props.taiKhoan.taikhoan.anhdaidien ? this.props.taiKhoan.taikhoan.anhdaidien : "http://res.cloudinary.com/thuctap/image/upload/v1520564546/user-default.png"} alt=""
                                    class="photo" />
                                {this.props.taiKhoan === null ? '' : hienThiTen}
                                <span class="caret"></span>
                            </span>

                            <ul class="dropdown-menu" aria-labelledby="barDropdown1">

                              

                                {menuCuoiCung}

                                <li>
                                    <Link to={`/doimatkhau`}>
                                        <span class="glyphicon glyphicon-refresh" aria-hidden="true"></span>
                                        Đổi mật khẩu
                                    </Link>
                                </li>
                                <li>
                                    <a class='contro' onClick={this.logOut}>
                                        <span class="glyphicon glyphicon-log-out" aria-hidden="true"></span> Đăng xuất</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        );
        const topHeader = this.props.taiKhoan && this.props.taiKhoan.taikhoan ? daDangNhap : chuaDangNhap;
        return (
            <React.Fragment>


                {topHeader}

                <nav class="navbar">
                    <div class="container">
                        <a href="" class="logo">
                            <img src={logo} alt="" title=""></img>
                        </a>

                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1" aria-expanded="false">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbar-collapse-1">
                            <ul class="nav">
                                {this.showMenus(menus)}
                            </ul>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        taiKhoan: state.taiKhoan
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        actDangXuat: () => {
            dispatch(actDangXuatAPI());
        },
        actKiemTraDangNhap: (id) => {
            dispatch(actKiemTraDangNhapAPI(id));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);


