import React, { Component } from 'react';
import callApi from '../../global/apiCaller';

class ChiTietTaiKhoan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtSoDienThoai: '',
            txtEmail: '',
            txtDiaChi: '',
            txtTruongDaiHoc: '',
            txtChuyenNganh: '',
            hinhanh: 'http://res.cloudinary.com/thuctap/image/upload/v1520564546/user-default.png'
        };
    }
    componentDidMount() {
        const { match } = this.props;
        if (match) {
            const { id } = match.params;
            return callApi(`laythongtintaikhoan/${id}`, 'GET', null).then(res => {
                this.setState({
                    metnha: res.data.hotenthat,
                    txtChuyenNganh: res.data.chuyennganh,
                    txtSoDienThoai: res.data.sodienthoai,
                    txtEmail: res.data.email,
                    txtDiaChi: res.data.diachi,
                    txtTruongDaiHoc: res.data.truongdaihoc,
                    hinhanh: res.data.anhdaidien ? res.data.anhdaidien : this.state.hinhanh,
                    gioithieu: res.data.gioithieu,
                    khoa: res.data.khoa
                })
            });
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
                                    <img src={this.state.hinhanh} alt=""
                                        class="photo" />


                                    <span >
                                        <span class="wc-editable" >Ảnh đại diện</span>
                                    </span>





                                </div>
                            </div>

                            <div class="col-lg-8 col-md-7 col-xs-12">
                                {
                                    this.state.khoa ? <div class="alert alert-danger">Tài khoản này đã bị khóa</div>
                                        : <div class="alert alert-success">Chi tiết tài khoản</div>

                                }
                                <div class="form">
                                    <form class="form-dyna xs-4" >
                                        <div class="row">
                                            <div class="col-sm-12 col-xs-12">
                                                <div class="col-sm-6 col-xs-12">
                                                    <div class="form-group">
                                                        <label class="control-label"> <span class="wc-editable" >Họ tên</span>:</label>
                                                        <input
                                                            type="text"
                                                            name="txtHoTen"
                                                            value={this.state.metnha}
                                                            disabled
                                                            class="form-control" />
                                                        <div class="help-block with-errors">
                                                            <span class="wc-editable hien-thi-loi-edit ml-20"></span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-sm-6 col-xs-12">
                                                    <div class="form-group">
                                                        <label class="control-label">
                                                            <span class="wc-editable" >Số điện thoại</span>: </label>
                                                        <input type="tel" name="txtSoDienThoai" value={this.state.txtSoDienThoai} disabled class="form-control" />
                                                        <div class="help-block with-errors">
                                                            <span class="wc-editable hien-thi-loi-edit ml-20"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-xs-12">
                                                <div class="col-sm-6 col-xs-12">
                                                    <div class="form-group">
                                                        <label class="control-label">
                                                            <span class="wc-editable" >Email</span>:</label>
                                                        <input type="text" name="txtEmail" value={this.state.txtEmail} class="form-control required email" disabled />
                                                        <div class="help-block with-errors">
                                                            <span class="wc-editable hien-thi-loi-edit ml-20"></span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-sm-6 col-xs-12">
                                                    <div class="form-group">
                                                        <label class="control-label">
                                                            <span class="wc-editable">Địa chỉ</span>:</label>
                                                        <input type="text" name="txtDiaChi" value={this.state.txtDiaChi} disabled class="form-control url" />
                                                        <div class="help-block with-errors">
                                                            <span class="wc-editable hien-thi-loi-edit ml-20"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-xs-12">
                                                <div class="col-sm-6 col-xs-12">
                                                    <div class="form-group">
                                                        <label class="control-label">
                                                            <span class="wc-editable">Trường đại học</span>:</label>
                                                        <input name="txtTruongDaiHoc" type="text" value={this.state.txtTruongDaiHoc} disabled class="form-control required" />
                                                        <div class="help-block with-errors">
                                                            <span class="wc-editable hien-thi-loi-edit ml-20"></span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-sm-6 col-xs-12">
                                                    <div class="form-group">
                                                        <label class="control-label">
                                                            <span class="wc-editable">Chuyên ngành</span>: </label>
                                                        <input name="txtChuyenNganh" value={this.state.txtChuyenNganh} type="text" disabled class="form-control required"
                                                        />
                                                        <div class="help-block with-errors">
                                                            <span class="wc-editable hien-thi-loi-edit ml-20"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-xs-12">
                                                <div class="form-group editor-themcongviec" >
                                                    <label class="control-label">
                                                        <span class="wc-editable" >Giới thiệu bản thân</span>:</label>


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
                                    <h2 class="wc-editable" >Giới thiệu bản thân</h2>:</label>
                                <div class="lead" dangerouslySetInnerHTML={{ __html: this.state.gioithieu }} >

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="push"></div>
            </React.Fragment>
        );
    }
};


export default ChiTietTaiKhoan