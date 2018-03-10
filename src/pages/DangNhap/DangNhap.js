import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actDangNhapAPI } from '../../actions/index';

class DangNhap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtEmail: '',
            txtMatKhau: '',
            demnguoc: 5,
            hienThiLoi: false
        };
    };

    componentDidMount() {
        if (localStorage.getItem('taikhoan')) {
            this.batDauDemNguoc();
        }
    }
    componentWillReceiveProps(nextProps) {
        console.log('nextProps', nextProps.taiKhoan)
        if (nextProps.taiKhoan && nextProps.taiKhoan.loi) {
            console.log('co ra k')
            return this.setState({
                hienThiLoi: true
            })
        }
        if (localStorage.getItem('taikhoan')) {
            this.batDauDemNguoc();
        }
    }

    onChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }
    dangNhap = (e) => {
        e.preventDefault();
        const { txtEmail, txtMatKhau } = this.state;
        const { actDangNhap } = this.props;
        const data = {
            email: txtEmail,
            matkhau: txtMatKhau
        }
        actDangNhap(data);
    }
    batDauDemNguoc = () => {
        setInterval(() => {
            this.setState({
                demnguoc: this.state.demnguoc - 1
            });
        }, 1000);

    }

    render() {
        console.log('log o dang nhap', this.props.taiKhoan)
        console.log('log  store o dang nhap', localStorage.getItem('taikhoan'))
        const { txtEmail, txtMatKhau, demnguoc, hienThiLoi } = this.state;
        const coLoi = (
            <span class="wc-editable hien-thi-loi-edit">Email hoặc mật khẩu không đúng</span>
        )
        const hienThiCoLoi = hienThiLoi ? coLoi : '';
        const daDangNhap = (
            <div className="loi-ghide-height">
                <div className="container ">
                    <div class="panel panel-success ">
                        <div class="panel-heading">Bạn đã đăng nhập</div>
                        <div class="panel-body">Tự động quay lại trang trước đó sau {demnguoc} s</div>

                    </div>
                </div>
            </div>
        );
        const chuaDangNhap = (
            <div class="main">
                <div class="container">
                    <div class="paragraph">
                        <span class="wc-editable" data-pk="ws_candidate_login_desc" data-type="textarea">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua.</span>
                    </div>

                    <br />

                    <div class="row">
                        <div class="col-sm-6 col-xs-12">
                            <div class="form" onSubmit={this.dangNhap}>
                                <form name="frmCandidateLogin">
                                    <input type="hidden" name="candidate_login" value="1" />
                                    <div class="form-group">
                                        <label class="control-label">
                                            <span class="wc-editable" data-type="text">Email</span>:</label>
                                        <input type="email" name="txtEmail" value={txtEmail} onChange={this.onChange} class="form-control required email"
                                        />
                                        <div class="help-block with-errors">
                                            <ul class="list-unstyled"></ul>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label class="control-label">
                                            <span class="wc-editable" data-type="text">Mật khẩu</span>: </label>
                                        <input type="password" class="form-control required" name="txtMatKhau" value={txtMatKhau} onChange={this.onChange} />
                                    </div>
                                    {hienThiCoLoi}
                                    <div class="form-actions">
                                        <button type="submit" class="btn btn-primary btn-lg">
                                            <span class="wc-editable" >Đăng nhập</span>
                                        </button>

                                        <Link to={`/quenmatkhau`} >
                                            <span class="wc-editable" data-pk="front_link_forgot_password" data-type="text">Quên mật khẩu</span>
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div class="col-md-4 col-sm-6 col-md-offset-2 col-xs-12">

                            <div class="box">
                                <div class="box-title">
                                    <span class="wc-editable" data-pk="front_dont_have_account" data-type="text">Bạn chưa có tài khoản?</span>
                                </div>

                                <Link to={`/dangky`} class="btn btn-primary btn-lg">
                                    <span class="wc-editable" data-pk="front_register" data-type="text">Đăng ký ngay</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
        const main = localStorage.getItem('taikhoan') ? daDangNhap : chuaDangNhap;
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
        actDangNhap: (data) => {
            dispatch(actDangNhapAPI(data));
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(DangNhap);
