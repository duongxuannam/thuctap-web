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
            children={() => {
                return (
                    <li >
                        <Link to={to}>
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
										<img src="http://vevs.website/web-demo/job-portal-website/app/web/upload/medium/social-facebook-176-1507281876.png" alt=""
											title="" />
									</a>
								</li>
								<li>
									<a href="https://plus.google.com" >
										<img src="http://vevs.website/web-demo/job-portal-website/app/web/upload/medium/social-googleplus-177-1507281878.png" alt=""
											title="" />
									</a>
								</li>
								<li>
									<a href="https://www.instagram.com" >
										<img src="http://vevs.website/web-demo/job-portal-website/app/web/upload/medium/social-instagram-181-1507281879.png" alt=""
											title="" />
									</a>
								</li>
								<li>
									<a href="https://www.linkedin.com" >
										<img src="http://vevs.website/web-demo/job-portal-website/app/web/upload/medium/social-linkedin-178-1507281881.png" alt=""
											title="" />
									</a>
								</li>
								<li>
									<a href="https://www.pinterest.com" >
										<img src="http://vevs.website/web-demo/job-portal-website/app/web/upload/medium/social-pinterest-180-1507281882.png" alt=""
											title="" />
									</a>
								</li>
								<li>
									<a href="https://twitter.com" >
										<img src="http://vevs.website/web-demo/job-portal-website/app/web/upload/medium/social-twitter-179-1507281884.png" alt=""
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
