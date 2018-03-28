import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';
import { actLayDanhSachTinTucDaDangAPI, actXoaTinTucAPI } from '../../actions/index';

class TinTucDaDang extends Component {
    componentDidMount() {
        if (this.props.taiKhoan && this.props.taiKhoan.taikhoan && this.props.taiKhoan.taikhoan._id) {
            return this.props.actLayDanhSachTinTucDaDang(this.props.taiKhoan.taikhoan._id)

        }
    }
    xoaTinTuc(id){
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
                        {/* <td className='text-center'>
                        <span class="label label-danger">hết hạn</span>
                    </td> */}
                 
                       
                        <td><Link to={`/suatintuc/${item._id}`} >Sửa</Link></td>
                        <td>
                           {/* <a  onClick={this.xoaTinTuc(item._id)}>   Xóa  </a> */}
                           <a  onClick={()=> this.xoaTinTuc(item._id)}>   Xóa  </a>

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
                                    <h3 className="panel-title">Danh sách tin tức đã đăng ({ this.props.danhSachTinTucDaDang.length })</h3>
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
                                                    <input type="text" name="locTheoTen" class="form-control" placeholder="lọc theo tiêu đề" />
                                                </td>
                                                <td>

                                                </td>
                                                <td></td>
                                               
                                                <td></td>
                                            </tr>


                                            {this.showData(this.props.danhSachTinTucDaDang)}

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