import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BannerSearch from '../../components/BannerSearch';
import callApi from '../../global/apiCaller';

class DanhSachCongViec extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mang: [],
            sotrang: 1,
            hetdulieu: false
        };
    }
    componentDidMount() {
        callApi(`danhsachcongviec/${this.state.sotrang}`, 'GET', null).then(res => {
            console.log('dâta', res.data)
            this.setState({
                mang: res.data,
                sotrang: this.state.sotrang + 1
            })
        }).catch(() => console.log('loi o day ne'));
    }
    showData(data) {
        var result = null;
        if (data.length > 0) {
            result = data.map((item, index) => {
                return (
                    <div class="job" key={index}>
                       <Link to={`/chitietcongviec/${item._id}`}  class="job-image">
                       <img src={item._nguoidang.nhatuyendung.logo ? item._nguoidang.nhatuyendung.logo : 'https://res.cloudinary.com/thuctap/image/upload/v1521876438/LogoTitle.png'} alt=""/>

                    </Link>

                    <div class="job-info">
                    <div class="job-title">    <Link to={`/chitietcongviec/${item._id}`}>{item.tieude}  </Link></div>

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
        callApi(`danhsachcongviec/${this.state.sotrang}`, 'GET', null).then(res => {
            if (res.data.thongbao) {
                return this.setState({
                    hetdulieu: true
                })
            }
            console.log('dâta', res.data)
            this.setState({
                mang: this.state.mang.concat(res.data),
                sotrang: this.state.sotrang + 1
            })
        }).catch(() => console.log('loi o day ne'));
    }
    render() {
        const hetDuLieu = (
            <div class="alert alert-danger mrt-20"> Đã hết dữ liệu</div>

        )
        console.log('stat', this.state)
        return (
            <React.Fragment>
                <BannerSearch />
                <div class="search-jobs-results">
                    <div class="container">
                        <div class="search-jobs-results-filter">
                            <div class="row">
                                <div class="col-sm-6 col-xs-12">

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
                                </div>
                            </div>
                        </div>
                        <div class="search-jobs-results-list">

                        { this.showData(this.state.mang) }

                        </div>
                        

                       {this.state.hetdulieu ? hetDuLieu : ''}

                      
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
export default DanhSachCongViec;
