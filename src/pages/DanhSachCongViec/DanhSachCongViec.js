import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';
import { actLayDanhSachCongViecAPI, actTimKiemTrangDanhSachAPI } from '../../actions/index';

class DanhSachCongViec extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chuyenNganh: '',
            kieu: '',
        };
    }
    onChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        })}
    componentDidMount() {
        this.props.actLayDanhSachCongViec(1);
    }
    showData(data) {
        var result = null;
        if (data.length > 0) {
            result = data.map((item, index) => {
                return (
                    <div class="job" key={index}>
                        <Link to={`/chitietcongviec/${item._id}`} onClick={() => window.scrollTo(0, 0)} class="job-image">
                            <img src={item._nguoidang.nhatuyendung.logo ? item._nguoidang.nhatuyendung.logo : 'https://res.cloudinary.com/thuctap/image/upload/v1521876438/LogoTitle.png'} alt="" />

                        </Link>

                        <div class="job-info">
                            <div class="job-title">
                                <Link to={`/chitietcongviec/${item._id}`} onClick={() => window.scrollTo(0, 0)}>{item.tieude}  </Link></div>

                            <div class="job-meta">
                                <ul>
                                    <li class="col-size-2of4" title="Posted on">
                                        <span class="glyphicon glyphicon-calendar"></span>

                                        &nbsp;{moment(item.ngaydang).utc().format('DD-MM-YYYY')} </li>

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
                    </div>
                );
            });
        }
        return result;
    }
    taiThem = () => {
        if (!this.props.danhSachCongViec.hetdulieu) {
            if(this.props.danhSachCongViec.dangTimKiem){
                const data = {
                    sotrang: this.props.danhSachCongViec.sotrang,
                    chuyennganh : this.state.chuyenNganh,
                    kieu: this.state.kieu
                }
               return this.props.actTimKiemTrangDanhSach(data);
            }
            const sotrang = this.props.danhSachCongViec.sotrang
            this.props.actLayDanhSachCongViec(sotrang);
        }



    }
    timKiem = (e) => {
        e.preventDefault();
        const data = {
            sotrang: 1,
            chuyennganh : this.state.chuyenNganh,
            kieu: this.state.kieu
        }
        this.props.actTimKiemTrangDanhSach(data);
    }
    render() {
        const hetDuLieu = (
            <div class="alert alert-danger mrt-20"> Không tìm thấy hoặc đã hết dữ liệu</div>
        )
        const taiThemEnable = (
            <a onClick={this.taiThem} class="btn btn-primary btn-lg btn-apply">Tải thêm</a>

        );
        const taiThemDisable = (
            <React.Fragment>
                <a onClick={this.taiThem} disabled class="btn btn-primary btn-lg btn-apply mr-tt">Tải thêm</a>
                <a onClick={() =>{  this.props.actLayDanhSachCongViec(1); window.scrollTo(500, 500) }} class="btn btn-primary btn-lg btn-apply">Mới nhất</a>

            </React.Fragment>
        );
        const taiThem = this.props.danhSachCongViec.hetdulieu ? taiThemDisable : taiThemEnable
        console.log('tsaj', this.props.danhSachCongViec)
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
                                    <div class="col-sm-5 col-xs-12">
                                        <div class="form-group">
                                            <select class="form-control" value={this.state.chuyenNganh} onChange={this.onChange} name="chuyenNganh">
                                                <option value="" disabled >Lựa chọn chuyên ngành</option>
                                                <option value="Công nghệ thông tin">Công nghệ thông tin</option>
                                                <option value="Giáo dục">Giáo dục</option>
                                                <option value="Kinh tế">Kinh tế</option>
                                                <option value="Tài nguyên môi trường">Tài nguyên môi trường</option>
                                                <option value="Khác">Khác</option>
                                                <option value="">Không tìm kiếm</option>
                                            </select>
                                            <span class="glyphicon glyphicon-briefcase" aria-hidden="true"></span>
                                        </div>
                                    </div>
                                    <div class="col-sm-5 col-xs-12">
                                        <div class="form-group">
                                            <select class="form-control" value={this.state.kieu} onChange={this.onChange} name="kieu">
                                                <option value="" disabled >Lựa chọn kiểu thực tập</option>
                                                <option value="Toàn thời gian">Toàn thời gian</option>
                                                <option value="Bán thời gian">Bán thời gian</option>
                                                <option value="Thực tập">Thực tập</option>
                                                <option value="Thời vụ">Thời vụ</option>
                                                <option value="Chính thức">Chính thức</option>
                                                <option value="">Không tìm kiếm</option>
                                            </select>
                                            <span class="glyphicon glyphicon-asterisk" aria-hidden="true"></span>
                                        </div>
                                    </div>
                                    <div class="col-sm-2 col-xs-12">
                                        <button  onClick={this.timKiem} class="btn btn-primary btn-lg">
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
                <div class="search-jobs-results">
                    <div class="container">
                        <div class="search-jobs-results-filter">
                            <div class="row">
                                <h2 class="text-center cl-black">
                                    <span class="wc-editable" >Công việc mới nhất</span>
                                </h2>
                            </div>
                        </div>

                        <div class="search-jobs-results-list">

                            {this.showData(this.props.danhSachCongViec.mang)}

                        </div>


                        {this.props.danhSachCongViec.hetdulieu ? hetDuLieu : ''}


                        <div class="search-jobs-results-footer">
                            {taiThem}
                        </div>
                    </div>
                </div>
                <div class="push"></div>
            </React.Fragment>
        );
    }
}
const mapStateToProps = state => {
    // console.log('log state dc ko', state)
    return {
        danhSachCongViec: state.danhSachCongViec
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        actLayDanhSachCongViec: (sotrang) => {
            dispatch(actLayDanhSachCongViecAPI(sotrang));
        },
        actTimKiemTrangDanhSach: (data) => {
            dispatch(actTimKiemTrangDanhSachAPI(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DanhSachCongViec);
