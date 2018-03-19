import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TinTuc extends Component {
    render() {
        return (
            <React.Fragment>
                <div class="main">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-8 col-xs-12">
                                <div class="blog-post">
                                    <h2>
                                        <Link to={`/chitiettintuc`}>How To Create A Catchy Resume That Works</Link>
                                    </h2>

                                    <p class="lead">
                                        <span class="wc-editable" data-pk="ws_blog_by" data-type="text">by</span> Patty Smith |
                                <span class="wc-editable" data-pk="ws_blog_posted_on" data-type="text">Posted on</span> February 09, 2018
                                <span class="wc-editable" data-pk="ws_blog_at" data-type="text">at</span> 05:52 PM</p>

                                    <div class="blog-post-image">
                                        <Link to={`/chitiettintuc`}>
                                            <img class="img-responsive img-hover" src="http://vevs.website/web-demo/job-portal-website/app/web/upload/medium/0ca6b4f7f26d677739853d4ef48720ed.jpg"
                                                alt="" />
                                        </Link>
                                    </div>

                                    <p>Write a short description containing the key highlights from your post.</p>

                                    <Link to={`/chitiettintuc`} class="btn btn-primary">
                                        <span class="wc-editable" data-pk="ws_blog_read_more" data-type="text">Đọc tiếp</span>
                                    </Link>
                                </div>
                                <div class="blog-post">
                                    <h2>
                                        <Link to={`/chitiettintuc`}>10 Interview Questions To Be Prepared For</Link>
                                    </h2>

                                    <p class="lead">
                                        <span class="wc-editable" data-pk="ws_blog_by" data-type="text">by</span> Joe Rose |
                                <span class="wc-editable" data-pk="ws_blog_posted_on" data-type="text">Posted on</span> February 07, 2018
                                <span class="wc-editable" data-pk="ws_blog_at" data-type="text">at</span> 05:46 PM</p>

                                    <div class="blog-post-image">
                                        <Link to={`/chitiettintuc`}>
                                            <img class="img-responsive img-hover" src="http://vevs.website/web-demo/job-portal-website/app/web/upload/medium/fb9cb94925c5ba41658373433ec33b78.jpg"
                                                alt="" />
                                        </Link>
                                    </div>

                                    <p>Write a short description containing the key highlights from your post.</p>

                                    <Link to={`/chitiettintuc`} class="btn btn-primary" >
                                        <span class="wc-editable" data-pk="ws_blog_read_more" data-type="text">Đọc tiếp</span>
                                    </Link>
                                </div>
                                <div class="blog-post">
                                    <h2>
                                    <Link to={`/chitiettintuc`}>5 Definitive Signs It Is Time For A New Job</Link>
                                    </h2>

                                    <p class="lead">
                                        <span class="wc-editable" data-pk="ws_blog_by" data-type="text">by</span> Robert Jones |
                                <span class="wc-editable" data-pk="ws_blog_posted_on" data-type="text">Posted on</span> January 09, 2018
                                <span class="wc-editable" data-pk="ws_blog_at" data-type="text">at</span> 05:50 PM</p>

                                    <div class="blog-post-image">
                                        <Link to={`/chitiettintuc`}>
                                            <img class="img-responsive img-hover" src="http://vevs.website/web-demo/job-portal-website/app/web/upload/medium/a8998e27a0cb9ff0891edd6eb65695cc.jpg"
                                                alt="" />
                                        </Link>
                                    </div>

                                    <p>Write a short description containing the key highlights from your post.</p>

                                    <Link to={`/chitiettintuc`} class="btn btn-primary">
                                        <span class="wc-editable" data-pk="ws_blog_read_more" data-type="text">Đọc tiếp</span>
                                    </Link>
                                </div>
                            </div>
                            <div class="col-md-4 col-xs-12">
                                <div class="box">
                                    <div class="box-title">
                                        <span class="wc-editable" data-pk="ws_blog_side" data-type="text">Tell Us Your Story</span>
                                    </div>
                                    <p>
                                        <span class="wc-editable" data-pk="ws_blog_side_desc" data-type="text">Use this field as a call to action to your job portal visitors - candidates and employers.
                                    Ask them to send you a short success story or contribute to your blog.</span>
                                    </p>
                                    <Link to={`/themtintuc`} class="btn btn-primary" >
                                        <span class="wc-editable" >Thêm bài viết</span>

                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="push"></div>
            </React.Fragment >
        );
    }
};


export default TinTuc;
