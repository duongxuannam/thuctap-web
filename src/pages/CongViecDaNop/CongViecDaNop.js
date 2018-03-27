import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';
import { actLayDanhSachCongViecDaNopAPI } from '../../actions/index';

class CongViecDaNop extends Component {
    componentDidMount() {
        if (this.props.taiKhoan && this.props.taiKhoan.taikhoan && this.props.taiKhoan.taikhoan._id) {
            return this.props.actLayDanhSachCongViecDaNop(this.props.taiKhoan.taikhoan._id)

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
                        <td>{moment(item.ngaydang).utc().format('DD-MM-YYYY')}</td>
                        <td>  {item.luotxem} lượt</td>
                        <td>  {item._danhsachungtuyen.length} ứng viên</td>
                        <td>
                           <Link to={`/thongtinnhatuyendung/${item._nguoidang._id}`} >   {item._nguoidang.nhatuyendung.tencongty}   </Link>
                        </td>
                        <td><Link to={`/chitietcongviec/${item._id}`} >Chi tiết</Link></td>
                        
                    </tr>
                );
            });
        }
        return result;
    }
    render() {
       console.log('helo', this.props.danhSachCongViecDaNop)
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
                                    <h3 className="panel-title">Danh sách công việc đã nộp ({ this.props.danhSachCongViecDaNop.length })</h3>
                                </div>
                                <div className="panel-body ">
                                    <table className="table table-bordered table-hover">
                                        <thead>
                                            <tr>
                                                <th>STT</th>
                                                <th>Tiêu đề</th>
                                                <th>Ngày đăng</th>
                                                <th>Lượt xem</th>
                                                
                                                <th>Đã ứng tuyển</th>
                                                <th>Công ty</th>
                                                
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


                                            {this.showData(this.props.danhSachCongViecDaNop)}

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
        danhSachCongViecDaNop: state.danhSachCongViecDaNop,
        taiKhoan: state.taiKhoan
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        actLayDanhSachCongViecDaNop: (id) => {
            dispatch(actLayDanhSachCongViecDaNopAPI(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CongViecDaNop);