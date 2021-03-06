import React, { Component } from 'react';

const logo = require('../images/cty2.jpg')

class ChiTietCongViec extends Component {
    render() {
        
        return (
            <React.Fragment>
                <div class="main">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-4 col-xs-12">
                                <div class="panel">
                                    <div class="panel-heading">
                                        <div class="panel-title">
                                            <span class="wc-editable" >Thông tin</span>
                                        </div>
                                    </div>
                                    <div class="panel-body">
                                        <p>
                                            <span>
                                                <span class="wc-editable" >Ngày đăng</span>
                                            </span>
                                            <br />
                                            <strong>06.04.2017</strong>
                                        </p>
                                        <p>
                                            <span>
                                                <span class="wc-editable" data-pk="ws_category" data-type="text">Chuyên ngành</span>
                                            </span>
                                            <br />
                                            <strong>Giáo dục</strong>
                                        </p>
                                        <p>
                                            <span>
                                                <span class="wc-editable" data-pk="ws_job_type" data-type="text">Kiểu</span>
                                            </span>
                                            <br />
                                            <strong>Parttime</strong>
                                        </p>
                                        <p>
                                            <span>Chức vụ</span>
                                            <br />
                                            <strong>Nhân viên</strong>
                                        </p>
                                        <p>
                                            <span>Trình độ</span>
                                            <br />
                                            <strong>Sinh viên</strong>
                                        </p>
                                        <p>
                                            <span>Kinh nghiệm</span>
                                            <br />
                                            <strong>Không</strong>
                                        </p>
                                        <p>
                                            <span>
                                                <span class="wc-editable" data-pk="front_label_salary" data-type="text">Mức lương</span>
                                            </span>
                                            <br />
                                            <strong>Thỏa thuận</strong>
                                        </p>

                                        <p>
                                            <a href="login.html" class="btn btn-primary btn-apply">Apply</a>
                                        </p>
                                    </div>
                                </div>
                                <div class="company-info">
                                    <div class="company-image">
                                        <img src={logo} alt="" />
                                    </div>
                                    <div class="company-description">
                                        <p>
                                            <span>
                                                <span class="wc-editable" data-pk="front_label_contact_name" data-type="text">Nhà tuyển dụng</span>
                                            </span>

                                            <strong>Gia sư ALL</strong>
                                        </p>
                                        <p>
                                            <span>
                                                <span class="wc-editable" data-pk="front_label_phone" data-type="text">Điện thoại</span>
                                            </span>
                                            <strong>0165 326 4570</strong>
                                        </p>
                                        <p>
                                            <span>
                                                <span class="wc-editable" data-pk="front_label_email" data-type="text">Email</span>
                                            </span>
                                            <strong>
                                                <a href="">hiepsytrongtaycokiem@gmail.com</a>
                                            </strong>
                                        </p>
                                        <p>
                                            <span>
                                                <span class="wc-editable" data-pk="front_label_website" data-type="text">Website</span>
                                            </span>
                                            <strong>
                                                <a >ahaihih.com</a>
                                            </strong>
                                        </p>
                                        <p>
                                            <a href="" class="btn btn-secondary">
                                                <span class="wc-editable" data-pk="ws_company_details" data-type="text">Chi tiết</span>
                                            </a>
                                        </p>
                                        <p>
                                            <a>
                                                <span class="wc-editable" data-pk="ws_see_all_jobs" data-type="text">Xem tất cả công việc</span>
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-sm-8 col-xs-12">
                                <div class="post">
                                    <div class="resume-head">
                                        <p>
                                            <a class="btn btn-back btn-secondary" href="jobs.html" role="button">
                                                <span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span> Quay lại công việc mới nhất</a>
                                        </p>

                                        <h1>Đây là cái tiêu đề</h1>

                                        <p>
                                            <em>
                                                <span class="wc-editable" data-pk="front_company" data-type="text">Nhà tuyển dụng</span>:
                                          <strong>Gia sư ALL</strong>
                                            </em>
                                            <em>
                                                <span class="wc-editable" data-pk="front_location" data-type="text">Địa điểm</span>:
                                          <strong>Bình Dương</strong>
                                            </em>
                                        </p>
                                    </div>

                                    <h2>
                                        <span class="wc-editable" data-pk="front_label_job_description" data-type="text">Mô tả công việc</span>
                                    </h2>

                                    <div class="paragraph">
                                        <p>ahihi</p>
                                    </div>
                                </div>

                                <div class="post-actions">
                                    <a href="" class="btn btn-primary btn-lg btn-apply">Apply</a>
                                    <div class="share-actions">
                                        <div class="socials-share">
                                            <ul>
                                                <li>
                                                    <span>
                                                        <span class="wc-editable" data-pk="ws_share" data-type="text">Chia sẽ</span>:</span>
                                                </li>

                                                <li>
                                                    <a>
                                                        <img src="http://vevs.website/web-demo/job-portal-website/app/web/upload/medium/social-facebook-176-1507281876.png" alt=""
                                                            title="" />
                                                    </a>
                                                </li>


                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="section-similar">
                            <h2>
                                <span class="wc-editable" data-pk="ws_similar_jobs" data-type="text">Công việc tương tự</span>
                            </h2>
                            <div class="job">
                                <a href="http://vevs.website/web-demo/job-portal-website/health-and-social-care-apprenticeship-assessor-43.html" class="job-image">
                                    <img src="http://vevs.website/web-demo/job-portal-website/app/web/upload/medium/48280b012ef1e0862fdb31f175dacc1e.jpg" alt="" />
                                </a>

                                <div class="job-info">
                                    <a href="" class="job-title">Đây là cái tiêu đề</a>

                                    <div class="job-meta">
                                        <ul>
                                            <li class="col-size-1of4">
                                                <span class="glyphicon glyphicon-calendar"></span>

                                                18.04.2017
                                      </li>

                                            <li class="col-size-2of4">
                                                <span class="glyphicon glyphicon-briefcase"></span>

                                                Giáo dục </li>

                                            <li class="col-size-1of4">
                                                <span class="glyphicon glyphicon-map-marker"></span>

                                                Bình Dương </li>
                                        </ul>

                                        <div class="job-meta-inner">
                                            <span class="badge badge-label-temp">Chi tiết</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="job">
                                <a href="http://vevs.website/web-demo/job-portal-website/health-and-social-care-apprenticeship-assessor-43.html" class="job-image">
                                    <img src="http://vevs.website/web-demo/job-portal-website/app/web/upload/medium/48280b012ef1e0862fdb31f175dacc1e.jpg" alt="" />
                                </a>

                                <div class="job-info">
                                    <a href="" class="job-title">Đây là cái tiêu đề</a>

                                    <div class="job-meta">
                                        <ul>
                                            <li class="col-size-1of4">
                                                <span class="glyphicon glyphicon-calendar"></span>

                                                18.04.2017
                                      </li>

                                            <li class="col-size-2of4">
                                                <span class="glyphicon glyphicon-briefcase"></span>

                                                Giáo dục </li>

                                            <li class="col-size-1of4">
                                                <span class="glyphicon glyphicon-map-marker"></span>

                                                Bình Dương </li>
                                        </ul>

                                        <div class="job-meta-inner">
                                            <span class="badge badge-label-temp">Chi tiết</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="job">
                                <a href="http://vevs.website/web-demo/job-portal-website/health-and-social-care-apprenticeship-assessor-43.html" class="job-image">
                                    <img src="http://vevs.website/web-demo/job-portal-website/app/web/upload/medium/48280b012ef1e0862fdb31f175dacc1e.jpg" alt="" />
                                </a>

                                <div class="job-info">
                                    <a href="" class="job-title">Đây là cái tiêu đề</a>

                                    <div class="job-meta">
                                        <ul>
                                            <li class="col-size-1of4">
                                                <span class="glyphicon glyphicon-calendar"></span>

                                                18.04.2017
                                      </li>

                                            <li class="col-size-2of4">
                                                <span class="glyphicon glyphicon-briefcase"></span>

                                                Giáo dục </li>

                                            <li class="col-size-1of4">
                                                <span class="glyphicon glyphicon-map-marker"></span>

                                                Bình Dương </li>
                                        </ul>

                                        <div class="job-meta-inner">
                                            <span class="badge badge-label-temp">Chi tiết</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="push"></div>
            </React.Fragment>
        );
    }
}

export default ChiTietCongViec;
