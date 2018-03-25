import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import BannerSearch from '../../components/BannerSearch';
import { actLayDanhSachCongViecAPI } from '../../actions/index';

class DanhSachCongViec extends Component {
    componentDidMount() {
        const sotrang = this.props.danhSachCongViec.sotrang
        this.props.actLayDanhSachCongViec(sotrang);
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
                                    <li class="col-size-1of4" title="Posted on">
                                        <span class="glyphicon glyphicon-calendar"></span>

                                        &nbsp;{item.ngaydang} </li>

                                    <li class="col-size-2of4" title="Posted on">
                                        <span class="glyphicon glyphicon-calendar"></span>

                                        &nbsp;{item.thoihan} </li>

                                    <li class="col-size-1of4" title="Location">
                                        <span class="glyphicon glyphicon-map-marker"></span>
                                        &nbsp;{item.diadiem} </li>
                                </ul>
                                <ul>
                                    <li class="col-size-1of4" title="Posted on">
                                        <span class="glyphicon glyphicon-briefcase"></span>

                                        &nbsp;{item.chuyennganh} </li>

                                    <li class="col-size-2of4" title="Posted on">
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
        const sotrang = this.props.danhSachCongViec.sotrang
        this.props.actLayDanhSachCongViec(sotrang);
       
        
    }
    render() {
        const hetDuLieu = (
            <div class="alert alert-danger mrt-20"> Đã hết dữ liệu</div>
        )
        console.log('tsaj', this.props.danhSachCongViec)
        return (
            <React.Fragment>
                <BannerSearch />
                <div class="search-jobs-results">
                    <div class="container">
                        <div class="search-jobs-results-filter">
                            <div class="row">
                                {/* <div class="col-sm-6 col-xs-12">

                                </div>

                                <div class="col-sm-6 col-xs-12">
                                    <div class="row">
                                        <div class="col-sm-6 col-xs-12 text-right">
                                            <label>
                                                <span class="wc-editable" data-pk="front_sort_by" data-type="text">Sort by</span>
                                            </label>
                                        </div>

                                        <div class="col-sm-6 col-xs-12">
                                            <select name="sort_by" id="pjJLSortBy" class="form-control">
                                                <option value="category" >Category</option>
                                                <option value="date">Date</option>
                                                <option value="type" >Type</option>
                                            </select>
                                        </div>
                                    </div>
                                </div> */}
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
                            <a onClick={this.taiThem} class="btn btn-primary btn-lg btn-apply">Tải thêmmmmmm</a>

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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DanhSachCongViec);
