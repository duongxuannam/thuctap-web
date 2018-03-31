import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { actLayDanhSachCongViecAdminAPI, actXoaCongViecAdminAPI } from '../../actions/index';

class QuanLyCongViec extends Component {
    constructor(props){
        super(props);
        this.state = {
            locTheoTieuDe: ''
        }
    }
    componentDidMount() {
        this.props.actLayDanhSachCongViecAdmin(1);
    }
    showData(data) {
        var result = null;
        if (data.length > 0) {
            result = data.map((item, index) => {
                return (

                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.tieude}</td>
                        <td>  {item.luotxem} lượt</td>
                        <td>{moment(item.ngaydang).utc().format('DD-MM-YYYY')}</td>
                        {/* <td className='text-center'>
                        <span class="label label-danger">hết hạn</span>
                    </td> */}
                        <td>{moment(item.thoihan).format('DD-MM-YYYY')}</td>
                        <td>
                            <Link to={`/danhsachungtuyen/${item._id}`} >   {item.danop} ứng viên  </Link>
                        </td>
                        <td><Link to={`/chitietcongviec/${item._id}`} >Xem</Link></td>
                        <td><a class='clr contro' onClick={() => this.xoaCongViecAdmin(item._id)}>Xóa</a></td>
                    </tr>
                );
            });
        }
        return result;
    }
    taiThem = () => {
        if (!this.props.danhSachCongViecAdmin.hetdulieu) {
            const sotrang = this.props.danhSachCongViecAdmin.sotrang
            this.props.actLayDanhSachCongViecAdmin(sotrang);
        }
    }
    xoaCongViecAdmin(id) {
        this.props.actXoaCongViecAdmin(id);
    }
    onChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name] : value
        })
    }
    render() {
        const { locTheoTieuDe } = this.state;
        var { mang } = this.props.danhSachCongViecAdmin;
        const hetDuLieu = (
            <div class="alert alert-danger mrt-20"> Đã hết dữ liệu</div>
        )
        const taiThemEnable = (
            <a onClick={this.taiThem} class="btn btn-primary btn-lg btn-apply">Tải thêm</a>

        );
        const taiThemDisable = (
            <React.Fragment>
                <a onClick={this.taiThem} disabled class="btn btn-primary btn-lg btn-apply mr-tt">Tải thêm</a>
                <a onClick={() => { this.props.actLayDanhSachCongViecAdmin(1); window.scrollTo(100, 100) }} class="btn btn-primary btn-lg btn-apply">Cập nhật lại</a>

            </React.Fragment>
        );
        const taiThem = this.props.danhSachCongViecAdmin.hetdulieu ? taiThemDisable : taiThemEnable;
        if(locTheoTieuDe){
            mang = mang.filter((item) => {
                return item.tieude.toLowerCase().indexOf(locTheoTieuDe.toLowerCase()) !== -1
            })
        }
        return (
            <React.Fragment>
                <div class="main">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-3 col-xs-12">
                                <div class="panel">
                                    <div class="panel-heading">
                                        <div class="panel-title">
                                            <span class="wc-editable" >Quản lý</span>
                                        </div>
                                    </div>

                                    <div class="panel-body pointer ">
                                        <Link to={`/quanly`} className='contro'
                                        >
                                            Danh sách đăng ký nhà tuyển dụng
                                          </Link>
                                    </div>
                                    <div class="panel-body pointer">
                                        <Link to={`/quanlythanhvien`} className='contro '

                                        >
                                            Danh sách thành viên
                                         </Link>
                                    </div>
                                    <div class="panel-body pointer">
                                        <Link to={`/quanlycongviec`} className='contro clr'
                                        >
                                            Danh sách công việc
                                            </Link>
                                    </div>
                                    <div class="panel-body pointer">
                                        <Link to={`/quanlytintuc`} className=' contro '
                                        >
                                            Danh sách tin tức
                                         </Link>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-9 col-xs-12">

                                <div class="resume-head">
                                    <p>
                                        <a class="btn btn-back btn-secondary" >
                                            <span class="glyphicon glyphicon-menu-left"></span> Quay lại </a>
                                    </p>
                                </div>

                                <div className="panel panel-primary">
                                    <div className="panel-heading">
                                        <h3 className="panel-title">Danh sách công việc  ({mang.length})</h3>
                                    </div>
                                    <div className="panel-body ">
                                        <table className="table table-bordered table-hover">
                                            <thead>
                                                <tr>
                                                    <th>STT</th>
                                                    <th>Tiêu đề</th>
                                                    <th>Lượt xem</th>
                                                    <th>Ngày đăng</th>
                                                    <th>Thòi hạn</th>
                                                    <th>Ứng tuyển</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td></td>
                                                    <td>
                                                        <input type="text" name="locTheoTieuDe" class="form-control" placeholder="lọc theo tiêu đề"  value = {locTheoTieuDe} onChange={this.onChange} />
                                                    </td>
                                                    <td>

                                                    </td>
                                                    <td></td>
                                                    <td>
                                                        {/* <select type="text" name="locTheoTrangThai" class="form-control">
                                                        <option value="-1">Tat ca</option>
                                                        <option value="0">Còn thời hạn</option>
                                                        <option value="1">Hết hạn</option></select> */}
                                                    </td>
                                                    <td></td>
                                                </tr>


                                                {this.showData(mang)}

                                            </tbody>
                                        </table>

                                    </div>
                                </div>
                                {this.props.danhSachCongViecAdmin.hetdulieu ? hetDuLieu : ''}

                                <div class="search-jobs-results-footer">
                                    {taiThem}
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


const mapStateToProps = state => {
    // console.log('log state dc ko', state)
    return {
        danhSachCongViecAdmin: state.danhSachCongViecAdmin,
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        actLayDanhSachCongViecAdmin: (id) => {
            dispatch(actLayDanhSachCongViecAdminAPI(id));
        },
        actXoaCongViecAdmin: (data) => {
            dispatch(actXoaCongViecAdminAPI(data));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuanLyCongViec);

