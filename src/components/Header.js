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
           if(e.props.taiKhoan && e.props.taiKhoan.taikhoan && e.props.taiKhoan.taikhoan._id === _id){
            console.log('co vao dc ko 3', _id)
               alert('to be shared');
               e.props.actKiemTraDangNhap(_id);
           }
            });
    }
    componentDidMount() {
         const  _id  = JSON.parse(localStorage.getItem('taikhoan')) && JSON.parse(localStorage.getItem('taikhoan')).taikhoan && JSON.parse(localStorage.getItem('taikhoan')).taikhoan._id ? JSON.parse(localStorage.getItem('taikhoan')).taikhoan._id : '';
        if (_id) {
          return   this.props.actKiemTraDangNhap(_id);
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
            hienThiTen = this.props.taiKhoan.taikhoan.hoten
        }
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
            <li>
                <Link to={`/congviecdanop`}>
                    <span class="glyphicon glyphicon-usd" aria-hidden="true"></span> Công việc đã nộp</Link>
            </li>
        );
        const nhaTuyenDung = (
            <React.Fragment>
                <li>
                    <Link to={`/congviecdadang`}>
                        <span class="glyphicon glyphicon-usd" aria-hidden="true"></span> Công việc đã đăng</Link>
                </li>

                <li>
                    <Link to={`/tintucdadang`}>
                        <span class="glyphicon glyphicon-usd" aria-hidden="true"></span> Tin tức đã đăng</Link>
                </li>
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
                                <li>
                                    <Link to={`/thongtintaikhoan`}>
                                        <span class="glyphicon glyphicon-user" aria-hidden="true"></span>
                                        Thông tin tài khoản
                                    </Link>
                                </li>
                                <li>
                                    <Link to={`/nhatuyendung`}>
                                        <span class="glyphicon glyphicon-briefcase" aria-hidden="true"></span>
                                        Nhà tuyển dụng
                                    </Link>
                                </li>
                                {menuCuoiCung}
                                <li>
                                    <Link to={`/thongbao`}>
                                        <span class="glyphicon glyphicon-bell" aria-hidden="true"></span>
                                        Thông báo
                                    </Link>
                                </li>

                                <li>
                                    <a onClick={this.logOut}>
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


