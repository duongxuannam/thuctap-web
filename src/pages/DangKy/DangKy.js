import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actDangKyAPI } from '../../actions/index';

class DangKy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtEmail: '',
            txtMatKhau: '',
            txtNhapLaiMatKhau: '',
            txtTenHienThi: '',
            txtSoDienThoai: '',
            loiEmail: '',
            loiMatKhau: '',
            loiNhapLaiMatKhau: '',
            loiSoDienThoai: '',
            loiTenHienThi: '',
            demnguoc: 5,
        };
    };
    componentDidMount() {
        if (localStorage.getItem('taikhoan')) {
            this.batDauDemNguoc();
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.taiKhoan && nextProps.taiKhoan.loi) {
            return this.setState({
                loiEmail: 'Email đã được đăng ký'
            })
        } if (localStorage.getItem('taikhoan')) {
            this.batDauDemNguoc();
        }
    }
    batDauDemNguoc = () => {
        setInterval(() => {
            this.setState({
                demnguoc: this.state.demnguoc - 1
            });
        }, 1000);
    }
    onChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        }, () => {
            if (name === 'txtEmail') {
                if (this.state.txtEmail.length < 5) {
                    this.setState({ loiEmail: 'Email phải có ít nhất 5ký tự' });
                    if (this.state.txtEmail === '') {
                        this.setState({ loiEmail: 'Trường này là bắt buộc' })
                    }
                } else {
                    this.setState({ loiEmail: '' })
                }
            }
            if (name === 'txtTenHienThi') {
                if (this.state.txtTenHienThi.length < 2) {
                    this.setState({ loiTenHienThi: 'Tên hiển thị phải có ít nhất 2 ký tự' });
                    if (this.state.txtTenHienThi === '') {
                        this.setState({ loiTenHienThi: 'Trường này là bắt buộc' })
                    }
                } else {
                    this.setState({ loiTenHienThi: '' })
                }
            }
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
            if (name === 'txtNhapLaiMatKhau') {
                if (this.state.txtNhapLaiMatKhau !== this.state.txtMatKhau) {
                    this.setState({ loiNhapLaiMatKhau: 'Nhập lại chưa trùng với mật khẩu' })
                    if (this.state.txtNhapLaiMatKhau === '') {
                        this.setState({ loiNhapLaiMatKhau: 'Trường này là bắt buộc' })
                    }
                } else {
                    this.setState({ loiNhapLaiMatKhau: '' })
                }
            }
            if (name === 'txtSoDienThoai') {
                if (this.state.txtSoDienThoai.length < 9) {
                    this.setState({ loiSoDienThoai: 'Số điện thoại không hợp lệ' });
                    if (this.state.txtSoDienThoai === '') {
                        this.setState({ loiSoDienThoai: 'Trường này là bắt buộc' })
                    }
                    if (isNaN(this.state.txtSoDienThoai)) {
                        this.setState({ loiSoDienThoai: 'Số điện thoại không hợp lệ' })
                    }
                } else {
                    this.setState({ loiSoDienThoai: '' })
                }
            }
        });
    };

    dangKy = (e) => {
        e.preventDefault();
        const {
            txtEmail,
            txtMatKhau,
            txtTenHienThi,
            txtSoDienThoai,
            loiEmail,
            loiMatKhau,
            loiNhapLaiMatKhau,
            loiSoDienThoai,
            loiTenHienThi
        } = this.state;
        const data = {
            email: txtEmail,
            matkhau: txtMatKhau,
            hoten: txtTenHienThi,
            sodienthoai: txtSoDienThoai
        };
        console.log('log truoc khi api', { loiMatKhau, loiEmail, loiNhapLaiMatKhau, loiTenHienThi, loiSoDienThoai })
        if (loiEmail === '' && loiMatKhau === '' && loiNhapLaiMatKhau === '' && loiTenHienThi === '' && loiSoDienThoai === '') {
            this.props.actDangKy(data);
        }
    }
    render() {
        const {
            txtEmail,
            txtMatKhau,
            txtNhapLaiMatKhau,
            txtTenHienThi,
            txtSoDienThoai,
            loiEmail,
            loiSoDienThoai,
            loiMatKhau,
            loiNhapLaiMatKhau,
            loiTenHienThi,
            demnguoc
        } = this.state;
        const chuaDangKy = (
            <div class="main">
                <div class="container">
                    <div class="paragraph">
                        <span class="wc-editable" data-pk="ws_candidate_regsiter_desc" data-type="textarea">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                      et dolore magna aliqua.</span>
                    </div>
                    <br />
                    <div class="row">
                        <div class="col-sm-6 col-xs-12">
                            <div class="form" onSubmit={this.dangKy}>
                                <form class="form-dyna xs-4">
                                    <div class="form-group">
                                        <label class="control-label">
                                            <span class="wc-editable" data-type="text">Email</span>
                                        </label>
                                        <input type="email" name="txtEmail" value={txtEmail} onChange={this.onChange} class="form-control required email" />
                                        <div class="help-block with-errors">
                                            <span class="wc-editable hien-thi-loi-edit">{loiEmail}</span>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label">
                                            <span class="wc-editable" data-type="text">Mật khẩu</span>: </label>
                                        <input type="password" name="txtMatKhau" value={txtMatKhau} onChange={this.onChange} class="form-control required" />
                                        <div class="help-block with-errors">
                                            <span class="wc-editable hien-thi-loi-edit">{loiMatKhau}</span>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label">
                                            <span class="wc-editable" data-type="text">Nhập lại mật khẩu</span>: </label>
                                        <input type="password" name="txtNhapLaiMatKhau" value={txtNhapLaiMatKhau} onChange={this.onChange} class="form-control required"
                                        />
                                        <div class="help-block with-errors">
                                            <span class="wc-editable hien-thi-loi-edit">{loiNhapLaiMatKhau}</span>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label">
                                            <span class="wc-editable">Tên hiển thị</span>: </label>
                                        <input type="text" name="txtTenHienThi" value={txtTenHienThi} onChange={this.onChange} class="form-control required" />
                                        <div class="help-block with-errors">
                                            <span class="wc-editable hien-thi-loi-edit">{loiTenHienThi}</span>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label">
                                            <span class="wc-editable" data-pk="front_label_lname" data-type="text">Số điện thoại</span>: </label>
                                        <input type="tel" name="txtSoDienThoai" value={txtSoDienThoai} onChange={this.onChange} class="form-control required" />
                                        <div class="help-block with-errors">
                                            <span class="wc-editable hien-thi-loi-edit">{loiSoDienThoai}</span>
                                        </div>
                                    </div>
                                    <button type="submit" class="btn btn-primary">
                                        <span class="wc-editable" data-pk="front_button_register" data-type="action">Đăng ký</span>
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6 col-md-offset-2 col-xs-12">
                            <div class="box">
                                <div class="box-title">
                                    <span class="wc-editable" data-type="text">Nếu bạn đã có tài khoản</span>
                                </div>
                                <Link to={`/dangnhap`} class="btn btn-primary btn-lg">
                                    <span class="wc-editable" data-type="action">Đăng nhập ngay</span>
                                </Link>
                                <p>
                                    <Link to={`/quenmatkhau`} >
                                        <span class="wc-editable" data-pk="front_link_forgot_password" data-type="text">Quên mật khẩu</span>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
        const daDangKy = (
            <div className="loi-ghide-height">
                <div className="container ">
                    <div class="panel panel-success ">
                        <div class="panel-heading">Bạn đã đăng nhập</div>
                        <div class="panel-body">Tự động quay lại trang trước đó sau {demnguoc} s</div>

                    </div>
                </div>
            </div>
        );
        const main = localStorage.getItem('taikhoan') ? daDangKy : chuaDangKy;
        if (demnguoc === 0) {
            this.props.history.goBack();
        }
        return (
            <React.Fragment>
                {main}
                <div class="push"></div>
            </React.Fragment>
        );
    }
};

const mapStateToProps = state => {
    return {
        taiKhoan: state.taiKhoan
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        actDangKy: (data) => {
            dispatch(actDangKyAPI(data));
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(DangKy);
