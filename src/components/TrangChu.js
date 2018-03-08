import React, { Component } from 'react';

class TrangChu extends Component {
    render() {
        return (
            <React.Fragment>
            <section class="section-jobs">
                <div class="container">
                    <div class="row">
                        <div class="col-md-10 col-md-offset-1 col-xs-12">
                            <h2 class="text-center">
                                <span class="wc-editable" data-pk="ws_recent_jobs" data-type="text">Công việc mới nhất</span>
                            </h2>

                            <div class="recent-jobs">
                                <a href="" class="job" >
                                    <div class="job-image">
                                        <img src="http://res.cloudinary.com/thuctap/image/upload/v1520248531/cty2.jpg" alt="" />
                                    </div>

                                    <div class="job-info">
                                        <div class="job-title">Cardiac/Pulmonary Rehab day shift</div>

                                        <div class="job-meta">
                                            <ul>
                                                <li class="col-size-1of4" title="Posted on">
                                                    <span class="glyphicon glyphicon-calendar"></span>

                                                    06.04.2017 </li>

                                                <li class="col-size-2of4" title="Category">
                                                    <span class="glyphicon glyphicon-briefcase"></span>

                                                    Medical / Health Jobs </li>

                                                <li class="col-size-1of4" title="Location">
                                                    <span class="glyphicon glyphicon-map-marker"></span>

                                                    Berlin </li>
                                            </ul>
                                        </div>

                                        <div class="job-description">
                                            The nurse will evaluate, assess and develop and appropriate exercise regimen for inpatients and outpatients. Responsibilities:The
                      RN will also read EKG's and provide education on exercise. Care will be provided in accordance with hospital policies
                      and procedures, cardiopulmonary rehab policies and procedures.... ...</div>
                                    </div>
                                </a>
                                <a href="" class="job">
                                    <div class="job-image">
                                        <img src="http://res.cloudinary.com/thuctap/image/upload/v1520248531/cty1.jpg" alt="" />
                                    </div>

                                    <div class="job-info">
                                        <div class="job-title">Chef / Cook</div>
                                        <div class="job-meta">
                                            <ul>
                                                <li class="col-size-1of4" title="Posted on">
                                                    <span class="glyphicon glyphicon-calendar"></span>

                                                    06.04.2017 </li>

                                                <li class="col-size-2of4" title="Category">
                                                    <span class="glyphicon glyphicon-briefcase"></span>

                                                    Food Services / Hospitality Jobs </li>

                                                <li class="col-size-1of4" title="Location">
                                                    <span class="glyphicon glyphicon-map-marker"></span>

                                                    London </li>
                                            </ul>
                                        </div>

                                        <div class="job-description">
                                            Chef / Cook needed for upscale mason preschool/daycare. Full-time- 7:30am to 4:30pm Monday thru Friday. We do not serve typical
                      daycare food such as hotdogs, chicken nuggets, french fries, fish sticks, hamburger on a bun, etc. Instead we prepare
                      fresh, homestyle meals, with as many organic ingredients... ...</div>
                                    </div>
                                </a>
                                <a href="" class="job">
                                    <div class="job-image">
                                        <img src="http://res.cloudinary.com/thuctap/image/upload/v1520248531/cty3.jpg" alt="" />
                                    </div>
                                    <div class="job-info">
                                        <div class="job-title">Security Officer - Luxury Retail</div>

                                        <div class="job-meta">
                                            <ul>
                                                <li class="col-size-1of4" title="Posted on">
                                                    <span class="glyphicon glyphicon-calendar"></span>

                                                    06.04.2017 </li>

                                                <li class="col-size-2of4" title="Category">
                                                    <span class="glyphicon glyphicon-briefcase"></span>

                                                    Security / Protective Services Jobs </li>

                                                <li class="col-size-1of4" title="Location">
                                                    <span class="glyphicon glyphicon-map-marker"></span>
                                                    London </li>
                                            </ul>
                                        </div>
                                        <div class="job-description">
                                            Pro Active Retail Security Officer required to operate in luxury retail environment. Searching for self-motivated individuals
                      who are always looking to achieve the highest standards. Responsibilities:Regular Report Writing, Liaison between
                      the team and the client and head office, Door Supervision, Staff... ...</div>
                                    </div>
                                </a>
                            </div>
                            <div class="recent-jobs-actions">
                                <a href="" class="btn btn-secondary">
                                    <span class="wc-editable" data-pk="front_browse_jobs" data-type="text">Xem tất cả</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section-background-edit">
                <div class="container">
                    <div class="row">
                        <div class="col-md-10 col-md-offset-1">
                            <h3>
                                <span>Đăng nhập để bắt đầu</span>
                            </h3>
                            <div class="paragraph">
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
                            </div>
                            <br />
                            <a class="btn btn-tertiary" href="">
                                <span class="wc-editable" data-pk="ws_btn_subscribe" data-type="action">Đăng nhập</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section-employers">
                <div class="container">
                    <h6>
                        <span class="wc-editable" data-pk="ws_featured_employers" data-type="text">Các nhà tuyển dụng hàng đầu</span>
                    </h6>
                    <ul class="featured-employers">
                        <li>
                            <a href="" >
                                <img class="tam-thoi" src="http://res.cloudinary.com/thuctap/image/upload/v1520248531/cty2.jpg" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img class="tam-thoi" src="http://res.cloudinary.com/thuctap/image/upload/v1520248531/cty1.jpg" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img class="tam-thoi" src="http://res.cloudinary.com/thuctap/image/upload/v1520248531/cty3.jpg" alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
            <div class="push"></div>
            </React.Fragment>
            );
    }
}

export default TrangChu;
