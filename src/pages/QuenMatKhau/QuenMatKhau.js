import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import callApi from '../../global/apiCaller';

class QuenMatKhau extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtEmail: '',
            loiMatKhau: '',
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
            if (name === 'txtEmail') {
                if (this.state.txtEmail.length < 5) {
                    this.setState({ loiEmail: 'Email phải có ít nhất 5 ký tự' });
                    if (this.state.txtEmail === '') {
                        this.setState({ loiEmail: 'Vui lòng nhập email' })
                    }
                } else {
                    this.setState({ loiEmail: '' })
                }
            }

        });
    };
    quenMatKhau = (e) => {
        e.preventDefault();
        const {
            txtEmail,
            loiEmail,
        } = this.state;
        const data = {
            email: txtEmail,
        };
        if (this.state.txtEmail.length < 5) {
            this.setState({ loiEmail: 'Email phải có ít nhất 5 ký tự' });
            if (this.state.txtEmail === '') {
                this.setState({ loiEmail: 'Vui lòng nhập email' })
            }
        } else {
            this.setState({ loiEmail: '' })
        }
        if (loiEmail === '') {
            if (txtEmail !== '') {
                return callApi(`quenmatkhau`, 'POST', data).then(res => {
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
        const { txtEmail, loiEmail, hienThiThanhCong, hienThiThatBai } = this.state;
        const hienThiSai = hienThiThatBai ? <div class="alert alert-danger text-center">Email này chưa được đăng ký</div>
            : '';
        const hienThiDung = hienThiThanhCong ? <div class="alert alert-success text-center">Xác nhận đã được gửi tới mail của bạn.Vui lòng kiểm tra</div>
            : ''
        return (
            <React.Fragment>
                <div class="main">
                    <div class="container">
                        <div class="paragraph">
                            <span class="wc-editable"  >Vui lòng nhập email đã đăng ký.</span>
                        </div>
                        <br />
                        <div class="row">
                            <div class="col-sm-6 col-xs-12">
                                <div class="form">
                                    <form class="form-dyna xs-4 form-forgot-password" onSubmit={this.quenMatKhau}>

                                        <div class="form-group">
                                            <label class="control-label">
                                                <span class="wc-editable" >Email</span>:</label>

                                            <input type="email" name="txtEmail" value={txtEmail} onChange={this.onChange} class="form-control required email" />
                                            <div class="help-block with-errors">
                                                <span class="wc-editable hien-thi-loi-edit">{loiEmail}</span>
                                            </div>
                                        </div>
                                        {hienThiDung}
                                        {hienThiSai}
                                        <div class="form-actions">
                                            {hienThiThanhCong ? '' :
                                                <button  class="btn btn-primary btn-lg">
                                                    <span class="wc-editable" >Xác nhận</span>
                                                </button>}

                                            <a class='contro' onClick={() => this.props.history.goBack()}>
                                                <span class="wc-editable" >Quay lại</span>
                                            </a>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div class="col-md-4 col-sm-6 col-md-offset-2 col-xs-12">


                                <div class="box">
                                    <div class="box-title">
                                        <span class="wc-editable" data-pk="front_dont_have_account" data-type="text">Chưa có tài khoản?</span>
                                    </div>

                                    <Link to={`/dangky`} class="btn btn-primary btn-lg">
                                        <span class="wc-editable" data-pk="front_register" data-type="text">Đăng ký</span>
                                    </Link>
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


export default QuenMatKhau;
