import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import moment from 'moment';
import { actLayDataTrangChuAPI, actTimKiemCongViecAPI } from '../../actions/index';

class TrangChu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tuKhoa: '',
            diaDiem: '',
            loiTuKhoa: 'Từ khóa',
            loiDiaDiem: 'Địa điểm',
            timKiem: false
        }
    }
    timkiem(e) {
        e.preventDefault();
        if (this.state.tuKhoa === '') {
            this.setState({ loiTuKhoa: 'Vui lòng nhập từ khóa để tìm kiếm' })
        }
        if (this.state.tuKhoa !== '') {

            console.log('kiem de')
            const data = {
                sotrang: 1,
                tuKhoa: this.state.tuKhoa,
            }
            this.props.actTimKiemCongViec(data)
            this.setState({ timKiem: true })


        }

    }
    onChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    }
    componentDidMount() {
        this.props.actLayDataTrangChu();
    };
    showData(data) {
        var result = null;
        if (data.length > 0) {
            result = data.map((item, index) => {
                return (
                    <React.Fragment key={index}>
                        <Link to={`/chitietcongviec/${item._id}`} onClick={() => window.scrollTo(0, 0)} className="job">
                            <div class="job-image">
                                <img src={item._nguoidang.nhatuyendung.logo ? item._nguoidang.nhatuyendung.logo : 'https://res.cloudinary.com/thuctap/image/upload/v1521876438/LogoTitle.png'} alt="" />
                            </div>
                            <div class="job-info">
                                <div class="job-title">{item.tieude}</div>

                                <div class="job-meta">
                                    <ul>
                                        <li class="col-size-2of4" title="Posted on">
                                            <span class="glyphicon glyphicon-calendar"></span>
                                            &nbsp;{moment(item.ngaydang).utc().format('DD-MM-YYYY')}
                                        </li>

                                        <li class="col-size-1of4" title="Posted on">
                                            <span class="glyphicon glyphicon-calendar"></span>


                                            &nbsp;{moment(item.thoihan).format('DD-MM-YYYY')} </li>

                                        <li class="col-size-1of4" title="Location">
                                            <span class="glyphicon glyphicon-map-marker"></span>
                                            &nbsp;{item.diadiem} </li>
                                    </ul>
                                    <ul>
                                        <li class="col-size-2of4" title="Posted on">
                                            <span class="glyphicon glyphicon-briefcase"></span>

                                            &nbsp;{item.chuyennganh} </li>

                                        <li class="col-size-1of4" title="Posted on">
                                            <span class="glyphicon glyphicon-asterisk"></span>

                                            &nbsp;{item.kieu} </li>

                                        <li class="col-size-1of4" title="Location">

                                            ... </li>
                                    </ul>
                                </div>
                                <div class="job-description">
                                    Click vào để xem thông tin chi tiết và ứng tuyển.</div>
                            </div>
                        </Link>
                    </React.Fragment>

                );
            });
        }
        return result;
    }
    render() {
        if (this.state.timKiem) {
            return <Redirect to={`/danhsachcongviec/`} />
        }
        return (
            <React.Fragment>
                <div class="section-background-intro-edit intro intro-home">
                    <div class="search-jobs">
                        <div class="container">
                            <h1>
                                <span class="wc-editable" >Tìm kiếm công việc</span>
                            </h1>
                            <form >
                                <div class="row">
                                    <div class="col-sm-10 col-xs-12">
                                        <div class="form-group">
                                            <input name="tuKhoa" value={this.state.tuKhoa} onChange={this.onChange} class="form-control" placeholder={this.state.loiTuKhoa} type="text" />
                                            <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
                                        </div>
                                    </div>
                                    {/* <div class="col-sm-5 col-xs-12">
                                        <div class="form-group">
                                            <input name="diaDiem" value={this.state.diaDiem} onChange={this.onChange} class="form-control" placeholder={this.state.loiDiaDiem} type="text" />
                                            <span class="glyphicon glyphicon-map-marker" aria-hidden="true"></span>
                                        </div>
                                    </div> */}
                                    <div class="col-sm-2 col-xs-12">
                                        <button to={`/danhsachcongviec`} onClick={this.timkiem.bind(this)} class="btn btn-primary btn-lg">
                                            <span class="wc-editable" >Tìm kiếm</span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <p>

                            </p>
                            <p>

                            </p>
                            <p>

                            </p>
                        </div>
                    </div>
                </div>
                <section class="section-jobs">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-10 col-md-offset-1 col-xs-12">
                                <h2 class="text-center">
                                    <span class="wc-editable" >Công việc mới nhất</span>
                                </h2>

                                <div class="recent-jobs">


                                    {this.showData(this.props.dataTrangChu)}
                                </div>
                                <div class="recent-jobs-actions">
                                    <Link to={`/danhsachcongviec`} onClick={() => window.scrollTo(0, 0)} class="btn btn-secondary">
                                        <span class="wc-editable" >Xem tất cả</span>
                                    </Link>
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
                                    <span>Đăng ký tài khoản để sử dụng các tính năng của hệ thống.</span>
                                </div>
                                <br />
                                <Link to={`/dangnhap`} onClick={() => window.scrollTo(0, 0)} class="btn btn-tertiary" >
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
                                    <img class="tam-thoi" src="https://res.cloudinary.com/thuctap/image/upload/v1520248531/cty2.jpg" alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img class="tam-thoi" src="https://res.cloudinary.com/thuctap/image/upload/v1520248531/cty1.jpg" alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img class="tam-thoi" src="https://res.cloudinary.com/thuctap/image/upload/v1520248531/cty3.jpg" alt="" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
                <ins className="adsbygoogle"
         style={{display:'block'}} 
         data-ad-client="ca-pub-9378724246417115"
         data-ad-format="auto"
         data-full-width-responsive="true"></ins>
                <div class="push"></div>
            </React.Fragment>
        );
    }
};

const mapStateToProps = state => {
    // console.log('log state dc ko', state)
    return {
        dataTrangChu: state.dataTrangChu,
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        actLayDataTrangChu: () => {
            dispatch(actLayDataTrangChuAPI());
        },
        actTimKiemCongViec: (data) => {
            dispatch(actTimKiemCongViecAPI(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrangChu);
