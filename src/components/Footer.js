import React, { Component } from 'react';

const logo = require('../images/logotdmu.png');

class Footer extends Component {
  render() {
    return (
      <footer>
		<div class="container">
			<div class="clearfix">
				<a href="" class="footer-logo">
					<img src={ logo } alt="" title=""/>
				</a>

				<div class="footer-nav">
					<ul>
						<li>
							<a href="">Trang chu</a>
						</li>
						<li>
							<a href="jobs.html">Công việc</a>
						</li>
						<li>
							<a href="search.html">Tìm kiếm</a>
						</li>
						<li>
							<a href="resumes.html">Tin tức</a>
						</li>
						<li>
							<a href="search-resumes.html">Thông tin</a>
						</li>
						<li>
							<a href="about-us.html">Liên hệ</a>
						</li>
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
