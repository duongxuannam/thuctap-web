import React, { Component } from 'react';

class ChiTietTinTuc extends Component {
    render() {
        return (
            <React.Fragment>
                <div class="main">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-8 col-xs-12">
                                <div class="resume-head">
                                    <p>
                                        <a class="btn btn-back" onClick={ ()=> this.props.history.goBack() }>
                                            <span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span>
                                            <span class="wc-editable" data-pk="ws_blog_back" data-type="text">Quay lại</span>
                                        </a>
                                    </p>

                                    <h1>How To Create A Catchy Resume That Works</h1>

                                    <p>
                                        <span class="wc-editable" data-pk="ws_blog_posted_by" data-type="text">Posted by</span> Patty Smith
                                <span class="wc-editable" data-pk="ws_blog_on" data-type="text">on</span> February 09, 2018
                                <span class="wc-editable" data-pk="ws_blog_at" data-type="text">at</span> 05:52 PM</p>
                                </div>

                                <div class="blog-post">
                                    <div class="blog-post-image">
                                        <img class="img-responsive img-hover" src="http://vevs.website/web-demo/job-portal-website/app/web/upload/medium/0ca6b4f7f26d677739853d4ef48720ed.jpg"
                                            alt="" />
                                    </div>

                                    <div class="lead">
                                        <p>
                                            <strong>Subtitle #1</strong>
                                        </p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&nbsp;Sed
                                    ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
                                    vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                                    odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
                                    nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                                    adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam
                                    aliquam quaerat voluptatem.
                                    <br />
                                            <br />
                                        </p>
                                        <p>
                                            <strong>Subtitle #2</strong>
                                        </p>
                                        <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
                                    nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui
                                    in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum
                                    fugiat quo voluptas nulla pariatur?&nbsp;Excepteur sint occaecat cupidatat non proident,
                                    sunt in culpa qui officia deserunt mollit anim id est laborum.&nbsp;Sed ut perspiciatis
                                    unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                                    aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                                    dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                                    aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                                    <br
                                            />
                                            <br />
                                        </p>
                                        <p>
                                            <strong>Subtitle #3</strong>
                                        </p>
                                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                                    anim id est laborum.&nbsp;Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                                    veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                                    quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
                                    eos qui ratione voluptatem sequi nesciunt.</p>
                                        <p>&nbsp;</p>
                                        <p>
                                            <strong>Subtitle #4</strong>
                                        </p>
                                        <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
                                    nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui
                                    in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum
                                    fugiat quo voluptas nulla pariatur?&nbsp;Excepteur sint occaecat cupidatat non proident,
                                    sunt in culpa qui officia deserunt mollit anim id est laborum.&nbsp;Sed ut perspiciatis
                                    unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                                    aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                                    dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                                    aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                                        <p>&nbsp;</p>
                                    </div>
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
                                    <a class="btn btn-primary" href="5-definitive-signs-it-is-time-for-a-new-job-blog-2.html">
                                        <span class="wc-editable" data-pk="ws_blog_read_more" data-type="text">Đọc tiếp</span>

                                    </a>
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


export default ChiTietTinTuc;
