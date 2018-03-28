import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actLayThongTinTaiKhoanAPI, chiTietCongViecAPI } from '../../actions/index';
import CongViecDaDangThongTinNhaTuyenDung from '../../components/CongViecDaDangThongTinNhaTuyenDung';

class ThongTinNhaTuyenDung extends Component {
    componentDidMount() {
        const { match } = this.props;
        if (match) {
            const { id } = match.params;
            this.props.actLayThongTinTaiKhoan(id);
        }
    }
    render() {
        return (
            <React.Fragment>
                <div class="main">
                    <div class="container">
                        <div class="resume-head">
                            <p>
                                <a class="btn btn-back btn-secondary" onClick={() => this.props.history.goBack()} >
                                    <span class="glyphicon glyphicon-menu-left"></span> Quay lại </a>
                            </p>
                        </div>
                        <div class="row">

                            <div class="col-lg-4 col-md-5 col-xs-12">
                                <div class="current-image">
                                    {/* <img src="http://res.cloudinary.com/thuctap/image/upload/v1520564546/user-default.png" alt=""
                                        class="photo" /> */}
                                    <img
                                        src={this.props.taiKhoanDuocChon && this.props.taiKhoanDuocChon.nhatuyendung && this.props.taiKhoanDuocChon.nhatuyendung.logo ? this.props.taiKhoanDuocChon.nhatuyendung.logo : 'https://res.cloudinary.com/thuctap/image/upload/v1521876438/LogoTitle.png'}
                                        alt=""
                                        class="photo" />
                                </div>


                            </div>

                            <div class="col-lg-8 col-md-7 col-xs-12">

                            {
                                   this.props.taiKhoanDuocChon && this.props.taiKhoanDuocChon.khoa ? <div class="alert alert-danger">Tài khoản này đã bị khóa</div>
                                        : <div class="alert alert-success">Thông tin nhà tuyển dụng</div>

                                }



                                <div class="form">
                                    <form class="form-dyna xs-4" >
                                        <div class="row">
                                            <div class="col-sm-12 col-xs-12">
                                                <div class="col-sm-6 col-xs-12">
                                                    <div class="form-group">
                                                        <label class="control-label"> <span class="wc-editable" >Tên công ty</span>:</label>
                                                        <input
                                                            disabled
                                                            type="text"
                                                            name="txtTenCongTy"
                                                            value={this.props.taiKhoanDuocChon && this.props.taiKhoanDuocChon.nhatuyendung && this.props.taiKhoanDuocChon.nhatuyendung.tencongty ? this.props.taiKhoanDuocChon.nhatuyendung.tencongty : ''}
                                                            class="form-control" />

                                                    </div>
                                                </div>

                                                <div class="col-sm-6 col-xs-12">
                                                    <div class="form-group">
                                                        <label class="control-label">
                                                            <span class="wc-editable" >Số điện thoại công ty</span>: </label>
                                                        <input
                                                            type="tel"
                                                            name="txtSoDienThoai"
                                                            value={this.props.taiKhoanDuocChon && this.props.taiKhoanDuocChon.nhatuyendung && this.props.taiKhoanDuocChon.nhatuyendung.sodienthoai ? this.props.taiKhoanDuocChon.nhatuyendung.sodienthoai : ''}

                                                            class="form-control" disabled />

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-xs-12">
                                                <div class="col-sm-6 col-xs-12">
                                                    <div class="form-group">
                                                        <label class="control-label">
                                                            <span class="wc-editable" >Email liên hệ</span>:</label>
                                                        <input
                                                            type="email"
                                                            name="txtEmail"
                                                            value={this.props.taiKhoanDuocChon && this.props.taiKhoanDuocChon.nhatuyendung && this.props.taiKhoanDuocChon.nhatuyendung.email ? this.props.taiKhoanDuocChon.nhatuyendung.email : ''}
                                                            disabled class="form-control required email" />

                                                    </div>
                                                </div>

                                                <div class="col-sm-6 col-xs-12">
                                                    <div class="form-group">
                                                        <label class="control-label">
                                                            <span class="wc-editable">Địa chỉ công ty</span>:</label>
                                                        <input
                                                            type="text"
                                                            name="txtDiaChi"
                                                            value={this.props.taiKhoanDuocChon && this.props.taiKhoanDuocChon.nhatuyendung && this.props.taiKhoanDuocChon.nhatuyendung.diachi ? this.props.taiKhoanDuocChon.nhatuyendung.diachi : ''}

                                                            disabled class="form-control url" />

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-xs-12">
                                                <div class="col-sm-6 col-xs-12">
                                                    <div class="form-group">
                                                        <label class="control-label">
                                                            <span class="wc-editable">Website(nếu có)</span>:</label>
                                                        <input
                                                            name="txtWebsite"
                                                            type="text"
                                                            value={this.props.taiKhoanDuocChon && this.props.taiKhoanDuocChon.nhatuyendung && this.props.taiKhoanDuocChon.nhatuyendung.website ? this.props.taiKhoanDuocChon.nhatuyendung.website : ''}
                                                            disabled class="form-control required" />

                                                    </div>
                                                </div>

                                                <div class="col-sm-6 col-xs-12">
                                                    <div class="form-group">
                                                        <label class="control-label">
                                                            <span class="wc-editable">Lĩnh vực hoạt động</span>: </label>
                                                        <input
                                                            name="txtWebsite"
                                                            type="text"
                                                            value={this.props.taiKhoanDuocChon && this.props.taiKhoanDuocChon.nhatuyendung && this.props.taiKhoanDuocChon.nhatuyendung.linhvuchoatdong ? this.props.taiKhoanDuocChon.nhatuyendung.linhvuchoatdong : ''}

                                                            disabled class="form-control required" />

                                                    </div>
                                                </div>
                                            </div>


                                        </div>


                                    </form>
                                </div>

                            </div>
                        </div>
                        <div class="container black-color">
                            <div class="jumbotron">
                                <label class="control-label">
                                    <h1 class="wc-editable" >Giới thiệu công ty</h1>:</label>
                                <div class="lead" dangerouslySetInnerHTML={{ __html: this.props.taiKhoanDuocChon && this.props.taiKhoanDuocChon.nhatuyendung && this.props.taiKhoanDuocChon.nhatuyendung.gioithieu ? this.props.taiKhoanDuocChon.nhatuyendung.gioithieu : '' }} >

                                </div>
                            </div>
                        </div>



                        <CongViecDaDangThongTinNhaTuyenDung
                            actChiTietCongViec={this.props.actChiTietCongViec}
                            id={this.props.taiKhoanDuocChon && this.props.taiKhoanDuocChon._id ? this.props.taiKhoanDuocChon._id : ''} />



                    </div>
                </div>
                <div class="push"></div>
            </React.Fragment>
        );
    }
};

const mapStateToProps = state => {
    return {
        taiKhoanDuocChon: state.taiKhoanDuocChon
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        actChiTietCongViec: (id) => {
            dispatch(chiTietCongViecAPI(id));
        },
        actLayThongTinTaiKhoan: (data) => {
            dispatch(actLayThongTinTaiKhoanAPI(data));
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ThongTinNhaTuyenDung);
