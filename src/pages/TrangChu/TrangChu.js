import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import BannerSearch from '../../components/BannerSearch';
import { actLayDataTrangChuAPI } from '../../actions/index';

class TrangChu extends Component {
    componentDidMount() {
        this.props.actLayDataTrangChu();
    };
    showData(data) {
        var result = null;
        if (data.length > 0) {
            result = data.map((item, index) => {
                return (
                    <React.Fragment key={index}>
                        <Link to={`/chitietcongviec/${item._id}`} className="job">
                            <div class="job-image">
                                <img src={item.hinhanh} alt="" />
                            </div>
                            <div class="job-info">
                                <div class="job-title">{item.tieude}</div>

                                <div class="job-meta">
                                    <ul>
                                        <li class="col-size-1of4" title="Posted on">
                                            <span class="glyphicon glyphicon-calendar"></span>

                                            06.04.2017 </li>

                                        <li class="col-size-2of4" title="Category">
                                            <span class="glyphicon glyphicon-briefcase"></span>

                                            {item.chuyennganh}  </li>

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
                        </Link>
                    </React.Fragment>

                );
            });
        }
        return result;
    }
    render() {
        return (
            <React.Fragment>
                <BannerSearch />
                <section class="section-jobs">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-10 col-md-offset-1 col-xs-12">
                                <h2 class="text-center">
                                    <span class="wc-editable" data-pk="ws_recent_jobs" data-type="text">Công việc mới nhất</span>
                                </h2>

                                <div class="recent-jobs">


                                    {this.showData(this.props.dataTrangChu)}
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
                                <Link to={`/dangnhap`} class="btn btn-tertiary" >
                                    <span class="wc-editable" data-pk="ws_btn_subscribe" data-type="action">Đăng nhập</span>
                                </Link>
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
};

const mapStateToProps = state => {
    // console.log('log state dc ko', state)
    return {
        dataTrangChu: state.dataTrangChu
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        actLayDataTrangChu: () => {
            dispatch(actLayDataTrangChuAPI());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrangChu);
