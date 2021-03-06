import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const logo = require('../images/logotdmu.png');

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
    // {
    //     name: 'Tin tức',
    //     to: '/tintuc',
    //     exact: false
    // },
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
            children={() => {
                return (
                    <li >
                        <Link to={to} onClick={()=>window.scrollTo(0, 0)}>
                            {label}
                        </Link>
                    </li>
                );
            }}
        />
    );
};

class Footer extends Component {
	showMenusFooter = (menus) => {
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
		return (
			<footer>
				<div class="container">
					<div class="clearfix">
						<a href="" class="footer-logo">
							<img src={logo} alt="" title="" />
						</a>

						<div class="footer-nav">
							<ul>
							
						{ this.showMenusFooter(menus) }

							</ul>
						</div>
					</div>

					<div class="clearfix">
						<div class="footer-credits">
							<p>&copy; 2018
						<span class="wc-editable" data-pk="ws_car_name" data-type="text">Thực tập</span>
								<span class="wc-editable" data-pk="ws_rights_reserved" data-type="text">From Nam with Love.</span>
							</p>

						</div>

						<div class="socials">
							<ul>
								<li>
									<a href="https://www.facebook.com" >
										<img src="https://res.cloudinary.com/thuctap/image/upload/v1521951393/social-facebook-176-1507281876.png" alt=""
											title="" />
									</a>
								</li>
							
							</ul>
						</div>
					</div>
				</div>
				<a className="back-to-top" />
			</footer>
		);
	}
}

export default Footer;
