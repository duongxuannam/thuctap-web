import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

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
        name: 'Tìm kiếm',
        to: '/dangnhap',
        exact: false
    },
    {
        name: 'Tin tức',
        to: '/tintuc',
        exact: false
    },
    {
        name: 'Thông tin',
        to: '/thongtin',
        exact: false
    },
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
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            daDangNhap: true
        };
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
        const chuaDangNhap = (
            <div class="bar">
                <div class="container">
                    <ul>
                        <li>
                            <Link to={`/dangnhap`}>Thành viên</Link>
                        </li>
                        <li>
                            <Link to={`/dangnhap`}>Nhà tuyển dụng</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
        const daDangNhap = (
            <div class="bar">
                <div class="container">
                    <ul>
                        <li class="dropdown">
                            <a class="dropdown-toggle user" type="button" id="barDropdown1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                <img src="http://res.cloudinary.com/thuctap/image/upload/v1520564546/user-default.png" alt=""
                                    class="photo" /> Nammmm
                        <span class="caret"></span>
                            </a>

                            <ul class="dropdown-menu" aria-labelledby="barDropdown1">
                                <li>
                                    <Link to={`/thongtintaikhoan`}>
                                        <span class="glyphicon glyphicon-user" aria-hidden="true"></span>
                                        Thông tin
                                    </Link>
                                </li>
                                <li>
                                    <a href="my-jobs.html">
                                        <span class="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span> My jobs</a>
                                </li>
                                <li>
                                    <a href="shortlisted.html">
                                        <span class="glyphicon glyphicon-star" aria-hidden="true"></span> Shortlisted</a>
                                </li>
                                <li>
                                    <a href="payments.html">
                                        <span class="glyphicon glyphicon-usd" aria-hidden="true"></span> Payments</a>
                                </li>
                                <li>
                                    <a href="logout.html">
                                        <span class="glyphicon glyphicon-log-out" aria-hidden="true"></span> Đăng xuất</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        );
        const topHeader = this.state.daDangNhap ? daDangNhap : chuaDangNhap;
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

export default Header;
