import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';
import { actLayDanhSachCongViecDaDangAPI } from '../../actions/index';

class CongViecDaDang extends Component {
    componentDidMount() {
        if (this.props.taiKhoan && this.props.taiKhoan.taikhoan && this.props.taiKhoan.taikhoan._id) {
            return this.props.actLayDanhSachCongViecDaDang(this.props.taiKhoan.taikhoan._id)

        }
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
                        <td><Link to={`/suacongviec/${item._id}`} >Sửa</Link></td>
                    </tr>
                );
            });
        }
        return result;
    }
    render() {
        if (!this.props.taiKhoan || !this.props.taiKhoan.taikhoan || !this.props.taiKhoan.taikhoan.kichhoatnhatuyendung) {
            return <Redirect to={`/`} />
        }
        return (
            <React.Fragment>
                <div class="container">
                    <div class="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <a onClick={() => this.props.history.goBack()} className="btn btn-back btn-secondary btn-sm mr10">
                                Quay lại
                </a>
                            <div className="panel panel-primary">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Danh sách công việc đã đăng ({ this.props.danhSachCongViecDaDang.length })</h3>
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
                                                    <input type="text" name="locTheoTen" class="form-control" placeholder="lọc theo tiêu đề" />
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


                                            {this.showData(this.props.danhSachCongViecDaDang)}

                                        </tbody>
                                    </table>
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

const mapStateToProps = state => {
    // console.log('log state dc ko', state)
    return {
        danhSachCongViecDaDang: state.danhSachCongViecDaDang,
        taiKhoan: state.taiKhoan
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        actLayDanhSachCongViecDaDang: (id) => {
            dispatch(actLayDanhSachCongViecDaDangAPI(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CongViecDaDang);