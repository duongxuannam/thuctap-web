import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { actLayDanhSachDaUngTuyenAPI } from '../../actions/index';

class CongViecDaDang extends Component {
    componentDidMount() {
        const { match } = this.props;
        if (match) {
            const { id } = match.params;
            this.props.actLayDanhSachDaUngTuyen(id);
        }
    }
    showData(data) {

        var result = null;
        if (data._danhsachungtuyen && data._danhsachungtuyen.length > 0) {
            result = data._danhsachungtuyen.map((item, index) => {
                return (

                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.hotenthat}</td>
                        <td>{item.email}</td>
                        <td>{item.sodienthoai}</td>
                        {/* <td className='text-center'>
                            <span class="label label-danger">hết hạn</span>
                        </td> */}
                        <td>{item.truongdaihoc}</td>
                        <td>
                            <Link to={`/chitiettaikhoan/${item._id}`} >  Chi tiết </Link>
                        </td>
                    </tr>
                );
            });
        }


        return result;
    }
    render() {
        if (!this.props.taiKhoan || !this.props.taiKhoan.taikhoan) {
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
                                    <h3 className="panel-title">Danh sách ứng tuyển ({this.props.danhSachUngTuyen && this.props.danhSachUngTuyen._danhsachungtuyen ? this.props.danhSachUngTuyen._danhsachungtuyen.length : '0'})</h3>
                                </div>
                                <div className="panel-body">
                                    <table className="table table-bordered table-hover">
                                        <thead>
                                            <tr>
                                                <th>STT</th>
                                                <th>Tên</th>
                                                <th>Email</th>
                                                <th>Số điện thoại</th>
                                                <th>Trường đại học</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>


                                            <tr>
                                                <td></td>
                                                <td>
                                                    <input type="text" name="locTheoTen" class="form-control" placeholder="lọc theo tên" />
                                                </td>
                                                <td>
                                                    <input type="text" name="locTheoTen" class="form-control" placeholder="lọc theo email" />

                                                </td>
                                                <td></td>
                                                <td>

                                                </td>
                                                <td></td>
                                            </tr>


                                            {this.showData(this.props.danhSachUngTuyen)}

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
        danhSachUngTuyen: state.danhSachUngTuyen,
        taiKhoan: state.taiKhoan
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        actLayDanhSachDaUngTuyen: (id) => {
            dispatch(actLayDanhSachDaUngTuyenAPI(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CongViecDaDang);