import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';
import { actLayDanhSachTinTucDaDangAPI, actXoaTinTucAPI } from '../../actions/index';

class TinTucDaDang extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locTheoTieuDe: '',
        }
    }
    onChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }
    componentDidMount() {
        if (this.props.taiKhoan && this.props.taiKhoan.taikhoan && this.props.taiKhoan.taikhoan._id) {
            return this.props.actLayDanhSachTinTucDaDang(this.props.taiKhoan.taikhoan._id)
        }
    }
    xoaTinTuc(id) {
        this.props.actXoaTinTuc(id);
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

                        <td>{item.luotxem} lượt</td>


                        <td><Link to={`/suatintuc/${item._id}`} >Sửa</Link></td>
                        <td>
                            <a onClick={() => this.xoaTinTuc(item._id)}>   Xóa  </a>

                        </td>
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
        const { locTheoTieuDe } = this.state;
        var mang = this.props.danhSachTinTucDaDang;
        if (locTheoTieuDe) {
            mang = mang.filter((item) => {
                return item.tieude.toLowerCase().indexOf(locTheoTieuDe.toLowerCase()) !== -1
            })
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
                                    <h3 className="panel-title">Danh sách tin tức đã đăng ({mang.length})</h3>
                                </div>
                                <div className="panel-body ">
                                    <table className="table table-bordered table-hover">
                                        <thead>
                                            <tr>
                                                <th>STT</th>
                                                <th>Tiêu đề</th>
                                                <th>Ngày đăng</th>
                                                <th>Lượt xem</th>

                                                <th></th>

                                            </tr>
                                        </thead>
                                        <tbody>


                                            <tr>
                                                <td></td>
                                                <td>
                                                    <input type="text" name="locTheoTieuDe" class="form-control" placeholder="lọc theo tiêu đề" value={locTheoTieuDe} onChange={this.onChange} />
                                                </td>
                                                <td>

                                                </td>
                                                <td></td>

                                                <td></td>
                                            </tr>


                                            {this.showData(mang)}

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
        danhSachTinTucDaDang: state.danhSachTinTucDaDang,
        taiKhoan: state.taiKhoan
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        actLayDanhSachTinTucDaDang: (id) => {
            dispatch(actLayDanhSachTinTucDaDangAPI(id));
        },
        actXoaTinTuc: (data) => {
            dispatch(actXoaTinTucAPI(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TinTucDaDang);