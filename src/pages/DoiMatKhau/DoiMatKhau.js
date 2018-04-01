import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import callApi from '../../global/apiCaller';

class DoiMatKhau extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtMatKhau: '',
            txtMatKhauMoi: '',
            txtNhapLaiMatKhauMoi: '',
            loiMatKhau: '',
            loiMatKhauMoi: '',
            loiNhapLaiMatKhauMoi: '',
            hienThiThanhCong: false,
            hienThiThatBai: false
        };
    };
    onChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        }, () => {
            if (name === 'txtMatKhau') {
                if (this.state.txtMatKhau.length < 5) {
                    this.setState({ loiMatKhau: 'Mật khẩu phải nhiều hơn 5 ký tự' });
                    if (this.state.txtMatKhau === '') {
                        this.setState({ loiMatKhau: 'Trường này là bắt buộc' })
                    }
                } else {
                    this.setState({ loiMatKhau: '' })
                }
            }
            if (name === 'txtMatKhauMoi') {
                if (this.state.txtMatKhauMoi.length < 5) {
                    this.setState({ loiMatKhauMoi: 'Mật khẩu phải nhiều hơn 5 ký tự' });
                    if (this.state.txtMatKhauMoi === '') {
                        this.setState({ loiMatKhauMoi: 'Trường này là bắt buộc' })
                    }
                } else {
                    this.setState({ loiMatKhauMoi: '' })
                }
            }
            if (name === 'txtNhapLaiMatKhauMoi') {
                if (this.state.txtNhapLaiMatKhauMoi !== this.state.txtMatKhauMoi) {
                    this.setState({ loiNhapLaiMatKhauMoi: 'Nhập lại chưa trùng với mật khẩu' })
                    if (this.state.txtNhapLaiMatKhauMoi === '') {
                        this.setState({ loiNhapLaiMatKhauMoi: 'Trường này là bắt buộc' })
                    }
                } else {
                    this.setState({ loiNhapLaiMatKhauMoi: '' })
                }
            }

        });
    };
    doiMatKhau = (e) => {
        e.preventDefault();
        const {
            txtMatKhau,
            loiMatKhau,
            txtMatKhauMoi,
            loiMatKhauMoi,
            txtNhapLaiMatKhauMoi,
            loiNhapLaiMatKhauMoi
        } = this.state;
        const data = {
            email: this.props.taiKhoan.taikhoan.email,
            matkhau: txtMatKhau,
            matkhaumoi: txtMatKhauMoi
        };

        if (this.state.txtMatKhau.length < 5) {
            this.setState({ loiMatKhau: 'Mật khẩu phải nhiều hơn 5 ký tự' });
            if (this.state.txtMatKhau === '') {
                this.setState({ loiMatKhau: 'Trường này là bắt buộc' })
            }
        } else {
            this.setState({ loiMatKhau: '' })
        }
        if (this.state.txtMatKhauMoi.length < 5) {
            this.setState({ loiMatKhauMoi: 'Mật khẩu phải nhiều hơn 5 ký tự' });
            if (this.state.txtMatKhauMoi === '') {
                this.setState({ loiMatKhauMoi: 'Trường này là bắt buộc' })
            }
        } else {
            this.setState({ loiMatKhauMoi: '' })
        }
        if (this.state.txtNhapLaiMatKhauMoi !== this.state.txtMatKhauMoi) {
            this.setState({ loiNhapLaiMatKhauMoi: 'Nhập lại chưa trùng với mật khẩu' })
            if (this.state.txtNhapLaiMatKhauMoi === '') {
                this.setState({ loiNhapLaiMatKhauMoi: 'Trường này là bắt buộc' })
            }
        } else {
            this.setState({ loiNhapLaiMatKhauMoi: '' })
        }

        if (loiMatKhau === '' && loiMatKhauMoi === '' && loiNhapLaiMatKhauMoi === '') {
            if (txtMatKhau !== '' && txtMatKhauMoi !== '' && txtNhapLaiMatKhauMoi !== '') {
                return callApi(`doimatkhau`, 'POST', data).then(res => {
                    if (res.data.thongbao) {
                        return this.setState({
                            hienThiThanhCong: true,
                            hienThiThatBai: false
                        })
                    }
                    if (res.data.loi) {
                        return this.setState({
                            hienThiThanhCong: false,
                            hienThiThatBai: true
                        })
                    }
                });
            }
        }
    }
    render() {
        if (!this.props.taiKhoan || !this.props.taiKhoan.taikhoan || !this.props.taiKhoan.taikhoan.kichhoatnhatuyendung) {
            return <Redirect to={`/`} />
        }
        const { txtMatKhau, loiMatKhau, txtMatKhauMoi, loiMatKhauMoi, txtNhapLaiMatKhauMoi, loiNhapLaiMatKhauMoi, hienThiThanhCong, hienThiThatBai } = this.state;
        const hienThiSai = hienThiThatBai ? <div class="alert alert-danger text-center">Mật khẩu hiện tại không đúng</div>
            : '';
        const hienThiDung = hienThiThanhCong ? <div class="alert alert-success text-center">Mật khẩu của bạn đã được thay đổi</div>
            : ''
        return (
            <React.Fragment>
                <div class="main">
                    <div class="container">
                        <div class="paragraph">
                            <span class="wc-editable" data-pk="ws_forgot_password_desc" data-type="textarea">Vui lòng nhập thông tin.</span>
                        </div>
                        <br />
                        <div class="row">
                            <div class="col-sm-6 col-xs-12">
                                <div class="form">
                                    <form class="form-dyna xs-4 form-forgot-password" onSubmit={this.doiMatKhau}>

                                        <div class="form-group">
                                            <label class="control-label">
                                                <span class="wc-editable" >Mật khẩu cũ</span>:</label>

                                            <input type="password" name="txtMatKhau" value={txtMatKhau} onChange={this.onChange} class="form-control required email" />
                                            <div class="help-block with-errors">
                                                <span class="wc-editable hien-thi-loi-edit">{loiMatKhau}</span>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label">
                                                <span class="wc-editable" >Mật khẩu mới</span>:</label>

                                            <input type="password" name="txtMatKhauMoi" value={txtMatKhauMoi} onChange={this.onChange} class="form-control required email" />
                                            <div class="help-block with-errors">
                                                <span class="wc-editable hien-thi-loi-edit">{loiMatKhauMoi}</span>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label">
                                                <span class="wc-editable" >Nhập lại mật khẩu mới</span>:</label>

                                            <input type="password" name="txtNhapLaiMatKhauMoi" value={txtNhapLaiMatKhauMoi} onChange={this.onChange} class="form-control required email" />
                                            <div class="help-block with-errors">
                                                <span class="wc-editable hien-thi-loi-edit">{loiNhapLaiMatKhauMoi}</span>
                                            </div>
                                        </div>
                                        {hienThiDung}
                                        {hienThiSai}
                                        <div class="form-actions">
                                            {hienThiThanhCong ? '' :
                                                <button class="btn btn-primary btn-lg">
                                                    <span class="wc-editable" >Xác nhận</span>
                                                </button>}

                                            <a class='contro' onClick={() => this.props.history.goBack()}>
                                                <span class="wc-editable" >Quay lại</span>
                                            </a>
                                        </div>
                                    </form>
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

const mapStateToProps = state => {
    return {
        taiKhoan: state.taiKhoan,
    }
}
export default connect(mapStateToProps, null)(DoiMatKhau);

