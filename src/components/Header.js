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
        to: '/timkiem',
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
    showMenus = (menus) => {
        var result = null;
        if(menus.length > 0){
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
        return (
            <React.Fragment>
                <div class="bar">
                    <div class="container">
                        <ul>
                            <li>
                                <a href="">Thành viên</a>
                            </li>
                            <li>
                                <a href="">Nhà tuyển dụng</a>
                            </li>
                        </ul>
                    </div>
                </div>
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
